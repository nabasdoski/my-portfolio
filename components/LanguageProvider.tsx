"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Language = "en" | "ku" | "ar";

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  direction: "ltr" | "rtl";
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

const LANGUAGE_STORAGE_KEY = "portfolio-language";

function getDirection(language: Language): "ltr" | "rtl" {
  return language === "en" ? "ltr" : "rtl";
}

export default function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [language, setLanguageState] = useState<Language>("en");
  const [isReady, setIsReady] = useState(false);

  const direction = getDirection(language);

  useEffect(() => {
    let savedLanguage: Language = "en";

    try {
      const saved = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);

      if (saved === "en" || saved === "ku" || saved === "ar") {
        savedLanguage = saved;
      }
    } catch {
      // Continue using English if browser storage is unavailable.
    }

    // Apply the saved language and direction before showing the page.
    document.documentElement.lang = savedLanguage;
    document.documentElement.dir = getDirection(savedLanguage);

    setLanguageState(savedLanguage);
    setIsReady(true);
  }, []);

  const setLanguage = useCallback((nextLanguage: Language) => {
    setLanguageState(nextLanguage);

    document.documentElement.lang = nextLanguage;
    document.documentElement.dir = getDirection(nextLanguage);

    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
    } catch {
      // Language switching still works if storage is unavailable.
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, direction }}>
      <div style={{ visibility: isReady ? "visible" : "hidden" }}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider.");
  }

  return context;
}
