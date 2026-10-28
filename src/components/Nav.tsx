"use client";

import { useState, useEffect } from "react";
import { LINK } from "@/data/projects";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className="nav" aria-label="Main">
        <div className="nav-inner" style={compact ? { background: "rgba(6,8,13,.82)" } : undefined}>
          <a href="#top" className="logo" aria-label="AMIER home">
            <span className="mark">A</span>
            AMIER
          </a>
          <div className="nav-links">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
            <a href={LINK.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
          <a href={LINK.cv} target="_blank" rel="noreferrer" className="nav-cta">Download CV</a>
          <button className="nav-burger" aria-expanded={open} aria-label="Menu" onClick={() => setOpen((v) => !v)}>
            {open ? "✕" : "☰"}
          </button>
        </div>
      </nav>
      <div className="nav-mobile" style={{ display: open ? "flex" : undefined }}>
        {[...LINKS, { href: LINK.cv, label: "Download CV ↗" }].map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
        ))}
      </div>
    </>
  );
}
