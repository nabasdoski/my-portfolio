"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { translations } from "@/components/translations";

/** Returns the copy object for the active language: `const t = useTranslations();` */
export function useTranslations() {
  const { language } = useLanguage();
  return translations[language];
}

/**
 * Arrow that mirrors itself in RTL. Needs inline-block so transforms apply.
 * Pass hover classes via className, e.g.
 *   "group-hover:translate-x-1 rtl:group-hover:-translate-x-1"
 */
export function Arrow({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block transition-transform rtl:-scale-x-100 ${className}`}
    >
      →
    </span>
  );
}
