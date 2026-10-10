
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, "1 m"),
  prefix: "portfolio:contact",
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, subject, message, website } = body;

    // Honeypot: silently ignore automated submissions.
    if (typeof website === "string" && website.trim()) {
      return NextResponse.json({ success: true });
    }

    // Identify the client IP address.
    const forwardedFor = request.headers.get("x-forwarded-for");
    const ip =
      forwardedFor?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";


    // Allow at most 5 requests per minute per IP.
    const { success } = await ratelimit.limit(ip);

    if (!success) {
      return NextResponse.json(
        {
          error:
            "Too many submissions. Please wait a minute and try again.",
        },
        {
          status: 429,
          headers: { "Retry-After": "60" },
        }
      );
    }

    // Validate submitted fields on the server.
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string" ||
      (typeof subject !== "string" &&
        subject !== null &&
        typeof subject !== "undefined")
    ) {
      return NextResponse.json(
        { error: "Invalid form data." },
        { status: 400 }
      );
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanSubject = (subject ?? "").trim();
    const cleanMessage = message.trim();

    if (
      cleanName.length < 1 ||
      cleanName.length > 100 ||
      cleanEmail.length < 3 ||
      cleanEmail.length > 254 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail) ||
      cleanSubject.length > 150 ||
      cleanMessage.length < 1 ||
      cleanMessage.length > 5000
    ) {
      return NextResponse.json(
        {
          error:
            "Please check your form details and try again.",
        },
        { status: 400 }
      );
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey =
      process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      console.error("Supabase environment variables are missing.");

      return NextResponse.json(
        { error: "The contact service is not configured." },
        { status: 500 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error } = await supabase
      .from("contact_messages")
      .insert({
        name: cleanName,
        email: cleanEmail,
        subject: cleanSubject || null,
        message: cleanMessage,
      });

    if (error) {
      console.error("Contact submission failed:", error.message);

      return NextResponse.json(
        {
          error:
            "Your message could not be sent. Please try again.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      { error: "Unable to process your request. Please try again." },
      { status: 500 }
    );
  }
}