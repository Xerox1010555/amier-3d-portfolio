"use client";

import { useState } from "react";
import { LINK } from "@/data/projects";
import { SECTIONS } from "@/i18n/dictionary";
import { useLang } from "@/i18n/lang";

export default function Contact() {
  const { t } = useLang();
  const S = SECTIONS.contact;
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(LINK.email);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = LINK.email;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <span className="kicker reveal">{t(S.no)}</span>
        <div className="contact-grid">
          <div className="contact-copy reveal">
            <h2 className="h2">{t(S.h2)}</h2>
            <p className="lede">{t(S.note)}</p>
            <p className="availability"><span className="dot" /> {t(S.availability)}</p>
          </div>

          <div className="contact-actions reveal">
            <button type="button" className="btn btn-solo" onClick={copyEmail}>
              {copied ? t(S.copied) : t(S.copy)}
            </button>
            <a className="btn btn-ghost" href={LINK.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
            <a className="btn btn-ghost" href={LINK.telegram} target="_blank" rel="noreferrer">Telegram</a>
            <a className="btn btn-ghost" href={`mailto:${LINK.email}`}>{LINK.email}</a>
            <a className="btn btn-quiet" href="/cv">CV ↗</a>
          </div>
        </div>
      </div>
    </section>
  );
}
