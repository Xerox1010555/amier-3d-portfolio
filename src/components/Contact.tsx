"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { LINK } from "@/data/projects";

const Contact3D = dynamic(() => import("@/components/Contact3D"), {
  ssr: false,
  loading: () => null,
});

export default function Contact() {
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
      <div className="wrap contact-grid">
        <div className="contact-box">
          <span className="kicker reveal">Contact</span>
          <h2 className="reveal">
            Let&apos;s build something <span>unforgettable</span>.
          </h2>
          <p className="section-sub reveal" style={{ marginTop: 14 }}>
            Open for full-time roles, grants and freelance engagements. Tell me the idea — I&apos;ll
            bring the whole stack.
          </p>

          <div className="contact-card reveal">
            <span className="ic">✉</span>
            <div>
              <b>{LINK.email}</b>
              <span>Fastest channel · replies within 24h</span>
            </div>
            <button className="act" onClick={copyEmail} type="button">
              {copied ? "Copied ✓" : "Copy"}
            </button>
          </div>

          <div className="row reveal">
            <a className="btn btn-primary" href={LINK.whatsapp} target="_blank" rel="noreferrer">WhatsApp me</a>
            <a className="btn" href={LINK.telegram} target="_blank" rel="noreferrer">Telegram</a>
            <a className="btn btn-ghost" href={LINK.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>

          <div className="contact-note reveal">
            <span><b>●</b> Available for hire</span>
            <span>Response <b>within 24 hours</b></span>
            <span>Based <b>Remote · Worldwide</b> (GMT+2)</span>
          </div>
        </div>

        <div className="contact-3d reveal">
          <Contact3D />
        </div>
      </div>
    </section>
  );
}
