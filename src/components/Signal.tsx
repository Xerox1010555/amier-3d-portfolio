"use client";

import { AI_NOTE, SIGNAL } from "@/data/beyond";
import { SECTIONS } from "@/i18n/dictionary";
import { useLang } from "@/i18n/lang";

export default function Signal() {
  const { t } = useLang();
  const S = SECTIONS.signal;

  return (
    <section className="signal wrap" id="signal">
      <span className="kicker reveal">{t(S.no)}</span>
      <h2 className="h2 reveal">{t(S.h2)}</h2>
      <p className="lede reveal">{t(S.intro)}</p>

      <div className="signal-grid">
        <div className="signal-me reveal">
          {/* artistic portrait substitute — not a fake photo */}
          <div className="monogram" aria-hidden="true">
            <span className="ring r1" /><span className="ring r2" /><span className="ring r3" />
            <span className="mono-type">A<span className="ast">✱</span></span>
            <span className="mono-cap">CAI · GMT+2</span>
          </div>
          <p className="mono-under">{t(S.quoteEdit)}</p>
        </div>

        <div className="signal-how reveal">
          <h3 className="h3">{t(S.howTitle)}</h3>
          <ul className="rows rows-checked">
            {SIGNAL.how.map((h, i) => <li key={i}>{t(h)}</li>)}
          </ul>
          <figure className="principle glass">
            <blockquote>“ {t(SIGNAL.principle)} ”</blockquote>
            <figcaption>{t(S.principleTitle)} — {t(S.quoteEdit)}</figcaption>
          </figure>
          <p className="mini ai-note">{t(AI_NOTE)}</p>
        </div>
      </div>

      <div className="services reveal">
        <h3 className="h3">{t(S.servicesTitle)}</h3>
        <div className="service-grid">
          {SIGNAL.services.map((sv) => (
            <div className="service glass" key={sv.name.en}>
              <span className="serv-name">{t(sv.name)}</span>
              <p>{t(sv.desc)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
