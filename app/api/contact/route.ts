import { NextResponse, after } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const LIMITS = {
  name: 100,
  email: 254,
  subject: 150,
  message: 5000,
} as const;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Created on first use, so a missing Upstash variable produces a logged
 * error instead of crashing the route when the module is imported.
 */
let ratelimit: Ratelimit | null = null;

function getRatelimit() {
  if (!ratelimit) {
    ratelimit = new Ratelimit({
      redis: Redis.fromEnv(),
      limiter: Ratelimit.slidingWindow(5, "1 m"),
      prefix: "portfolio:contact",
    });
  }

  return ratelimit;
}

function fail(code: string, error: string, status: number, headers?: HeadersInit) {
  return NextResponse.json({ code, error }, { status, headers });
}

type ContactMessage = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

/**
 * Sends you an email through Resend when someone submits the form.
 * It never throws: the message is already saved, so a failed email must
 * not turn a successful submission into an error for the visitor.
 */
async function notifyByEmail({ name, email, subject, message }: ContactMessage) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_NOTIFY_TO;

  // Not configured: skip quietly. The message is still in Supabase.
  if (!apiKey || !to) return;

  const from =
    process.env.CONTACT_NOTIFY_FROM ?? "Portfolio <onboarding@resend.dev>";

  // Newlines in a header value could be abused, so flatten the subject.
  const safeSubject = (subject || "New message").replace(/[\r\n]+/g, " ");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email, // pressing Reply in your inbox answers the visitor
        subject: `Portfolio: ${safeSubject}`,
        // Plain text only, so nothing the visitor typed is ever run as HTML.
        text: `From: ${name} <${email}>\n\n${message}`,
      }),
      signal: AbortSignal.timeout(8000),
    });

    if (!response.ok) {
      console.error("Contact notification failed:", response.status);
    }
  } catch (error) {
    console.error("Contact notification error:", error);
  }
}

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");

  return (
    forwardedFor?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

export async function POST(request: Request) {
  try {
    // 1. Parse the body. Malformed JSON is the client's mistake: 400, not 500.
    let body: unknown;

    try {
      body = await request.json();
    } catch {
      return fail("invalid_json", "Invalid request.", 400);
    }

    if (typeof body !== "object" || body === null) {
      return fail("invalid_form", "Invalid form data.", 400);
    }

    const { name, email, subject, message, website } = body as Record<
      string,
      unknown
    >;

    // 2. Honeypot: pretend success so bots learn nothing.
    if (typeof website === "string" && website.trim()) {
      return NextResponse.json({ success: true });
    }

    // 3. Rate limit: at most 5 requests per minute per IP.
    //    If Upstash is unreachable we log it and let the message through,
    //    so a real client is never blocked by an outage on our side.
    try {
      const { success } = await getRatelimit().limit(getClientIp(request));

      if (!success) {
        return fail(
          "rate_limited",
          "Too many submissions. Please wait a minute and try again.",
          429,
          { "Retry-After": "60" },
        );
      }
    } catch (error) {
      console.error("Rate limiter unavailable:", error);
    }

    // 4. Validate on the server (never trust the browser).
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string" ||
      (subject !== undefined &&
        subject !== null &&
        typeof subject !== "string")
    ) {
      return fail("invalid_form", "Invalid form data.", 400);
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanSubject = (subject ?? "").trim();
    const cleanMessage = message.trim();

    if (
      cleanName.length < 1 ||
      cleanName.length > LIMITS.name ||
      cleanEmail.length < 3 ||
      cleanEmail.length > LIMITS.email ||
      !EMAIL_PATTERN.test(cleanEmail) ||
      cleanSubject.length > LIMITS.subject ||
      cleanMessage.length < 1 ||
      cleanMessage.length > LIMITS.message
    ) {
      return fail(
        "invalid_form",
        "Please check your form details and try again.",
        400,
      );
    }

    // 5. Save with the server-only secret key. This key bypasses Row Level
    //    Security, so the table can be fully locked for the public key.
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY;

    if (!supabaseUrl || !supabaseSecretKey) {
      console.error("Supabase environment variables are missing.");

      return fail(
        "not_configured",
        "The contact service is not configured.",
        500,
      );
    }

    const supabase = createClient(supabaseUrl, supabaseSecretKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    });

    const { error } = await supabase.from("contact_messages").insert({
      name: cleanName,
      email: cleanEmail,
      subject: cleanSubject || null,
      message: cleanMessage,
    });

    if (error) {
      console.error("Contact submission failed:", error.message);

      return fail(
        "save_failed",
        "Your message could not be sent. Please try again.",
        500,
      );
    }

    // Runs after the response is sent, so the visitor never waits for it.
    after(() =>
      notifyByEmail({
        name: cleanName,
        email: cleanEmail,
        subject: cleanSubject,
        message: cleanMessage,
      }),
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);

    return fail(
      "server_error",
      "Unable to process your request. Please try again.",
      500,
    );
  }
}