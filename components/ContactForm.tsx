
"use client";

import { useEffect, useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState<
    "success" | "warning" | "error" | ""
  >("");
  const [loading, setLoading] = useState(false);
  const [website, setWebsite] = useState("");

  useEffect(() => {
    if (!status) return;

    const delay = statusType === "success" ? 6000 : 8000;

    const timer = setTimeout(() => {
      setStatus("");
      setStatusType("");
    }, delay);

    return () => clearTimeout(timer);
  }, [status, statusType]);

  function clearStatus() {
    setStatus("");
    setStatusType("");
  }

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();
    clearStatus();

    if (website.trim()) {
      setWebsite("");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          subject: subject.trim(),
          message: message.trim(),
          website,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        const isRateLimited = response.status === 429;

        setStatusType(isRateLimited ? "warning" : "error");
        setStatus(
          isRateLimited
            ? "You've sent several messages in a short time. Please wait one minute before trying again."
            : result.error ||
                "Your message could not be sent. Please try again."
        );
        return;
      }

      setStatusType("success");
      setStatus(
        "Thank you for reaching out! Your message has been received. I'll get back to you as soon as possible."
      );
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setWebsite("");
    } catch (error) {
      console.error("Contact form error:", error);
      setStatusType("error");
      setStatus(
        "Something went wrong while sending your message. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "mt-1.5 sm:mt-2 w-full rounded-xl border border-black/10 bg-white px-3.5 py-3 text-base sm:text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15 dark:border-white/10 dark:bg-white/[0.04] dark:text-white";

  const statusStyles = {
    success:
      "border-emerald-500/25 bg-emerald-500/[0.08] text-emerald-800 dark:text-emerald-300",
    warning:
      "border-amber-500/30 bg-amber-500/[0.09] text-amber-800 dark:text-amber-200",
    error:
      "border-red-500/25 bg-red-500/[0.07] text-red-800 dark:text-red-300",
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4 sm:mt-10 sm:space-y-5">
      {/* Honeypot field for basic bot filtering */}
      <div
        aria-hidden="true"
        className="absolute left-[-10000px] h-px w-px overflow-hidden"
      >
        <label htmlFor="contact-website">Leave this field empty</label>
        <input
          id="contact-website"
          name="website"
          type="text"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <label
          htmlFor="contact-name"
          className="text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Your name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          maxLength={100}
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            clearStatus();
          }}
          className={inputClass}
          placeholder="Enter your name"
        />
      </div>

      <div>
        <label
          htmlFor="contact-email"
          className="text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Email address
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={254}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            clearStatus();
          }}
          className={inputClass}
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label
          htmlFor="contact-subject"
          className="text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Subject (optional)
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          maxLength={150}
          value={subject}
          onChange={(e) => {
            setSubject(e.target.value);
            clearStatus();
          }}
          className={inputClass}
          placeholder="What would you like to discuss?"
        />
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          minLength={1}
          maxLength={5000}
          rows={4}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            clearStatus();
          }}
          className={`${inputClass} resize-y`}
          placeholder="Tell me about your idea or project..."
        />
      </div>

      {status && statusType && (
        <div
          role={statusType === "error" ? "alert" : "status"}
          aria-live="polite"
          className={`flex items-start gap-3 rounded-2xl border p-3 text-sm leading-6 shadow-sm sm:p-4 ${statusStyles[statusType]}`}
        >
          <span
            aria-hidden="true"
            className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-current/10"
          >
            {statusType === "success" && (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-4 w-4"
              >
                <path
                  d="m5 12 4 4L19 6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}

            {statusType === "warning" && (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-4 w-4"
              >
                <path
                  d="M12 9v4m0 4h.01M10.3 3.9 2.7 17a2 2 0 0 0 1.7 3h15.2a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}

            {statusType === "error" && (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-4 w-4"
              >
                <path
                  d="m18 6-12 12M6 6l12 12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </span>

          <div className="min-w-0 flex-1">
            <p className="font-semibold">
              {statusType === "success" && "Message sent successfully"}
              {statusType === "warning" && "Please wait a moment"}
              {statusType === "error" && "Message could not be sent"}
            </p>
            <p className="mt-0.5 break-words opacity-90">{status}</p>
          </div>
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#256DD3] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1d5bb3] hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? (
          <>
            <svg
              className="h-4 w-4 animate-spin"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-90"
                fill="currentColor"
                d="M4 12a8 8 0 0 1 8-8V0C5.4 0 0 5.4 0 12h4Z"
              />
            </svg>
            Sending...
          </>
        ) : (
          "Send message"
        )}
      </button>
    </form>
  );
}