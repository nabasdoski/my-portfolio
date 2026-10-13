"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "@/components/useTranslations";
import { useLanguage } from "@/components/LanguageProvider";

export default function ContactForm() {
  const t = useTranslations();
  const form = t.form;

  const { direction } = useLanguage();

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

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    clearStatus();

    // Honeypot: silently ignore submissions that fill this hidden field.
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

      if (!response.ok) {
        const isRateLimited = response.status === 429;

        setStatusType(isRateLimited ? "warning" : "error");
        setStatus(isRateLimited ? form.rateLimited : form.genericError);
        return;
      }

      setStatusType("success");
      setStatus(form.success);

      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setWebsite("");
    } catch (error) {
      console.error("Contact form error:", error);
      setStatusType("error");
      setStatus(form.networkError);
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "mt-1.5 sm:mt-2 w-full min-w-0 rounded-xl border border-black/10 bg-white px-3.5 py-3 text-base sm:text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15 dark:border-white/10 dark:bg-white/[0.04] dark:text-white";

  const statusStyles = {
    success:
      "border-emerald-500/25 bg-emerald-500/[0.08] text-emerald-800 dark:text-emerald-300",
    warning:
      "border-amber-500/30 bg-amber-500/[0.09] text-amber-800 dark:text-amber-200",
    error: "border-red-500/25 bg-red-500/[0.07] text-red-800 dark:text-red-300",
  };

  return (
    <form
      onSubmit={handleSubmit}
      dir={direction}
      className="relative mt-6 w-full min-w-0 space-y-4 text-start sm:mt-10 sm:space-y-5"
    >
      {/* Hidden honeypot field for basic bot filtering */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute start-0 top-0 h-0 w-0 overflow-hidden opacity-0"
      >
        <label htmlFor="contact-website">{form.honeypot}</label>
        <input
          id="contact-website"
          name="website"
          type="text"
          value={website}
          onChange={(event) => setWebsite(event.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <div className="min-w-0">
        <label
          htmlFor="contact-name"
          className="text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {form.name}
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          maxLength={100}
          value={name}
          onChange={(event) => {
            setName(event.target.value);
            clearStatus();
          }}
          className={`${inputClass} text-start`}
          placeholder={form.namePlaceholder}
          dir={direction}
        />
      </div>
      <div className="min-w-0">
        <label
          htmlFor="contact-email"
          className="text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {form.email}
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={254}
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            clearStatus();
          }}
          className={`${inputClass} text-start`}
          placeholder={form.emailPlaceholder}
          dir={direction}
        />
      </div>
      <div className="min-w-0">
        <label
          htmlFor="contact-subject"
          className="text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {form.subject}
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          maxLength={150}
          value={subject}
          onChange={(event) => {
            setSubject(event.target.value);
            clearStatus();
          }}
          className={`${inputClass} text-start`}
          placeholder={form.subjectPlaceholder}
          dir={direction}
        />
      </div>
      <div className="min-w-0">
        <label
          htmlFor="contact-message"
          className="text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {form.message}
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          minLength={1}
          maxLength={5000}
          rows={4}
          value={message}
          onChange={(event) => {
            setMessage(event.target.value);
            clearStatus();
          }}
          className={`${inputClass} text-start resize-y`}
          placeholder={form.messagePlaceholder}
          dir={direction}
        />
      </div>
      {status && statusType && (
        <div
          role={statusType === "error" ? "alert" : "status"}
          aria-live="polite"
          className={`flex min-w-0 items-start gap-3 rounded-2xl border p-3 text-sm leading-6 shadow-sm sm:p-4 ${statusStyles[statusType]}`}
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
              {statusType === "success" && form.successTitle}
              {statusType === "warning" && form.warningTitle}
              {statusType === "error" && form.errorTitle}
            </p>
            <p className="mt-0.5 break-words opacity-90">{status}</p>
          </div>
        </div>
      )}
      <button
        type="submit"
        disabled={loading}
        className="inline-flex min-h-11 max-w-full items-center justify-center gap-2 rounded-full bg-[#256DD3] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1d5bb3] hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? (
          <>
            <svg
              className="h-4 w-4 shrink-0 animate-spin"
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
            {form.sending}
          </>
        ) : (
          form.send
        )}
      </button>
    </form>
  );
}
