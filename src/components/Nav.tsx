"use client";

import { useState, useEffect } from "react";
import { LINK } from "@/data/projects";

const LINKS = [
  { href: "#work", label: "Index" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
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
      <nav className="nav" aria-label="Main">
        <div className="nav-inner">
          <a href="#top" className="logo" aria-label="AMIER — home">
            AMIER<span className="ast">✱</span>
          </a>
          <div className="nav-links">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
            <a href={LINK.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
          <div className="nav-right">
            <span className="nav-clock">{time}</span>
            <a href={LINK.cv} target="_blank" rel="noreferrer" className="nav-cta">CV ↓</a>
            <button className="nav-burger" aria-expanded={open} aria-label="Menu" onClick={() => setOpen((v) => !v)}>
              {open ? "✕" : "≡"}
            </button>
          </div>
        </div>
      </nav>
      <div className="nav-mobile" style={{ display: open ? "flex" : undefined }}>
        {[
          ...LINKS,
          { href: LINK.github, label: "GitHub ↗" },
          { href: LINK.cv, label: "CV ↓" },
        ].map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
        ))}
      </div>
    </>
  );
}
