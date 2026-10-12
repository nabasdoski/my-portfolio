"use client";

import { useEffect, useState } from "react";
import { useLanguage, type Language } from "@/components/LanguageProvider";

const languages: {
  code: Language;
  short: string;
  label: string;
  nativeLabel: string;
}[] = [
  { code: "en", short: "EN", label: "English", nativeLabel: "English" },
  { code: "ku", short: "KU", label: "Kurdish", nativeLabel: "کوردی" },
  { code: "ar", short: "AR", label: "Arabic", nativeLabel: "العربية" },
];

export default function LanguageSwitcher() {
  const { language, setLanguage, direction } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const selectedLanguage =
    languages.find((item) => item.code === language) ?? languages[0];

  // Close the menu with the Escape key.
  useEffect(() => {
    if (!isOpen) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  function chooseLanguage(nextLanguage: Language) {
    setLanguage(nextLanguage);
    setIsOpen(false);
  }

  return (
    <div className="relative" dir={direction}>
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-label="Choose language"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-blue-300 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-blue-500 dark:hover:text-blue-300"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          className="h-4 w-4 text-slate-500 dark:text-slate-400"
        >
          <circle
            cx="12"
            cy="12"
            r="9"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M3.5 12h17M12 3c2.2 2.4 3.3 5.4 3.3 9s-1.1 6.6-3.3 9c-2.2-2.4-3.3-5.4-3.3-9S9.8 5.4 12 3Z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
        </svg>

        <span>{selectedLanguage.short}</span>

        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          fill="none"
          className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
        >
          <path
            d="m5 7.5 5 5 5-5"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isOpen && (
        <>
          <button
            type="button"
            aria-label="Close language menu"
            tabIndex={-1}
            className="fixed inset-0 z-40 cursor-default"
            onClick={() => setIsOpen(false)}
          />

          <div
            role="menu"
            aria-label="Available languages"
            dir={direction}
            className="absolute end-0 top-full z-50 mt-2 w-48 overflow-hidden rounded-2xl border border-slate-200 bg-white p-1.5 text-start shadow-xl shadow-slate-900/10 dark:border-slate-700 dark:bg-slate-900"
          >
            {languages.map((item) => {
              const isSelected = item.code === language;

              return (
                <button
                  key={item.code}
                  type="button"
                  role="menuitemradio"
                  aria-checked={isSelected}
                  dir={direction}
                  onClick={() => chooseLanguage(item.code)}
                  className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-start transition ${
                    isSelected
                      ? "bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300"
                      : "text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800"
                  }`}
                >
                  <span className="flex flex-col text-start">
                    <span className="text-sm font-semibold">
                      {item.nativeLabel}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {item.label}
                    </span>
                  </span>

                  {isSelected && (
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="h-4 w-4 shrink-0"
                    >
                      <path
                        d="m4 10 4 4 8-8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
