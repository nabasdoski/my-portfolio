"use client";

import {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useSyncExternalStore,
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
const DEFAULT_LANGUAGE: Language = "en";

function isLanguage(value: unknown): value is Language {
  return value === "en" || value === "ku" || value === "ar";
}

function getDirection(language: Language): "ltr" | "rtl" {
  return language === "en" ? "ltr" : "rtl";
}

/* ------------------------------------------------------------------ *
 * A tiny external store backed by localStorage.
 * React reads the saved language through useSyncExternalStore, so no
 * setState call is needed inside an effect.
 * ------------------------------------------------------------------ */

const listeners = new Set<() => void>();

// Used when localStorage is unavailable (for example some private modes),
// so switching language still works for the current visit.
let memoryLanguage: Language | null = null;

function subscribe(onChange: () => void) {
  listeners.add(onChange);

  // Keep several open tabs in sync.
  function onStorage(event: StorageEvent) {
    if (event.key === null || event.key === LANGUAGE_STORAGE_KEY) {
      memoryLanguage = null;
      onChange();
    }
  }

  window.addEventListener("storage", onStorage);

  return () => {
    listeners.delete(onChange);
    window.removeEventListener("storage", onStorage);
  };
}

function getSnapshot(): Language {
  if (memoryLanguage) return memoryLanguage;

  try {
    const saved = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);

    if (isLanguage(saved)) return saved;
  } catch {
    // Fall back to English if browser storage is unavailable.
  }

  return DEFAULT_LANGUAGE;
}

function getServerSnapshot(): Language {
  return DEFAULT_LANGUAGE;
}

const subscribeNever = () => () => {};

export default function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const language = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  // false while server-rendering and hydrating, true afterwards. The page
  // stays hidden until the saved language is applied, so visitors never
  // see a flash of English or of the wrong text direction.
  const isReady = useSyncExternalStore(
    subscribeNever,
    () => true,
    () => false,
  );

  const direction = getDirection(language);

  // Keep <html lang dir> in sync before the browser paints.
  useLayoutEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = direction;
  }, [language, direction]);

  const setLanguage = useCallback((nextLanguage: Language) => {
    memoryLanguage = nextLanguage;

    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
    } catch {
      // Language switching still works if storage is unavailable.
    }

    listeners.forEach((listener) => listener());
  }, []);

  const value = useMemo(
    () => ({ language, setLanguage, direction }),
    [language, setLanguage, direction],
  );

  return (
    <LanguageContext.Provider value={value}>
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
