"use client";

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "ar";
export type Bi = { en: string; ar: string };

/** Convenience builder so data files read like copy blocks: bi("Hello", "أهلاً"). */
export function bi(en: string, ar: string): Bi {
  return { en, ar };
}

interface LangCtx {
  lang: Lang;
  isRTL: boolean;
  setLang: (l: Lang) => void;
  /** pick the right side of a Bi string */
  t: (b: Bi) => string;
}

const Ctx = createContext<LangCtx>({
  lang: "en",
  isRTL: false,
  setLang: () => {},
  t: (b) => b.en,
});

const KEY = "amier-lang";

export function LangProvider({ children }: { children: ReactNode }) {
  // Server render and first client render both start EN → no hydration mismatch.
  // A returning Arabic reader flips right after hydration (documented trade-off).
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(KEY);
      if (saved === "ar" || saved === "en") setLangState(saved);
    } catch {
      /* private mode */
    }
  }, []);

  // Reflect the language on <html> so CSS can restyle fonts, direction and layout.
  useEffect(() => {
    const el = document.documentElement;
    el.lang = lang === "ar" ? "ar" : "en";
    el.dir = lang === "ar" ? "rtl" : "ltr";
    el.classList.toggle("lang-ar", lang === "ar");
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(KEY, l);
    } catch {
      /* ignore */
    }
  }, []);

  const t = useCallback((b: Bi) => b[lang] ?? b.en, [lang]);

  return <Ctx.Provider value={{ lang, isRTL: lang === "ar", setLang, t }}>{children}</Ctx.Provider>;
}

export function useLang() {
  return useContext(Ctx);
}
