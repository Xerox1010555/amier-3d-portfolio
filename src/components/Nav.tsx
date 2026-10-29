"use client";

import { useEffect, useState } from "react";
import { LINK } from "@/data/projects";
import { NAV } from "@/i18n/dictionary";
import { useLang } from "@/i18n/lang";

export default function Nav() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const fmt = () => {
      try {
        setTime(`CAI ${new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Africa/Cairo" })}`);
      } catch {
        setTime("");
      }
    };
    fmt();
    const id = window.setInterval(fmt, 15000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <>
      <nav className="nav" aria-label={t(NAV.label)}>
        <div className="nav-inner">
          <a href="#top" className="logo" aria-label="AMIER — home">
            AMIER<span className="ast">✱</span>
          </a>

          <div className="nav-links">
            {NAV.links.map((l) => (
              <a key={l.href} href={l.href}>{t(l.label)}</a>
            ))}
          </div>

          <div className="nav-tools">
            <span className="nav-clock" aria-hidden="true">{time}</span>
            <a className="nav-cv" href="/cv">{t(NAV.cv)}</a>
            <button
              type="button"
              className="lang-btn"
              aria-label={t(NAV.langAria)}
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
            >
              {t(NAV.langToggle)}
            </button>
            <button
              type="button"
              className="burger"
              aria-label={open ? t(NAV.close) : t(NAV.menu)}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      {open && (
        <div className="nav-sheet" role="dialog" aria-label={t(NAV.menu)}>
          {NAV.links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{t(l.label)}</a>
          ))}
          <a href="/cv" onClick={() => setOpen(false)}>{t(NAV.cv)} ↗</a>
          <a href={LINK.github} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
            GitHub ↗
          </a>
        </div>
      )}
    </>
  );
}
