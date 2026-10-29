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
      <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1.1fr .9fr", gap: 56, alignItems: "center" }}>
        <style>{`@media (max-width: 960px){ .contact .wrap { grid-template-columns: 1fr !important; gap: 40px !important; } }`}</style>

        <div className="contact-box">
          <span className="kicker reveal">Correspondence</span>
          <h2 className="reveal" style={{ marginTop: 16 }}>
            Let&apos;s print <span className="verm">✱</span> something
            <br />
            <span className="outline">unforgettable.</span>
          </h2>
          <p className="section-sub reveal" style={{ marginTop: 18 }}>
            Open for full-time roles, grants and freelance engagements.
            Send the brief — I&apos;ll bring the whole stack.
          </p>

          <div className="contact-card reveal">
            <div>
              <b>{LINK.email}</b>
              <span className="lbl">Fastest channel · replies within 24h</span>
            </div>
            <button className="act" onClick={copyEmail} type="button">
              {copied ? "Copied ✓" : "Copy"}
            </button>
          </div>

          <div className="row reveal">
            <a className="btn btn-primary" href={LINK.whatsapp} target="_blank" rel="noreferrer">WhatsApp →</a>
            <a className="btn" href={LINK.telegram} target="_blank" rel="noreferrer">Telegram →</a>
            <a className="btn" href={LINK.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>

          <div className="contact-note reveal">
            <span><b>✱</b> Available for hire</span>
            <span>REPLY &lt; 24 H</span>
            <span>REMOTE · WORLDWIDE · GMT+2</span>
          </div>
        </div>

        <div className="contact-3d reveal">
          <span className="frame-tag">PLATE 02 — STUDIO OBJECT ✱ INK &amp; VERMILION</span>
          <Contact3D />
        </div>
      </div>
    </section>
  );
}
