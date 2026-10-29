"use client";

import { LINK } from "@/data/projects";
import { HERO } from "@/i18n/dictionary";
import { useLang } from "@/i18n/lang";

export default function Hero() {
  const { t } = useLang();

  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <span className="kicker reveal">{t(HERO.eyebrow)}</span>
          <h1 className="h1 reveal">
            <span className="h1-top">{t(HERO.name)}</span>
            <span className="h1-lead">{t(HERO.h1a)}{" "}<em>{t(HERO.h1b)}</em></span>
          </h1>
          <p className="lede reveal">{t(HERO.lede)}</p>
          <p className="who reveal">{t(HERO.who)}</p>

          <div className="hero-ctas reveal">
            <a className="btn btn-solo" href="#proof">{t(HERO.ctaPrimary)}</a>
            <a className="btn btn-ghost" href={LINK.whatsapp} target="_blank" rel="noreferrer">
              {t(HERO.ctaGhost)}
            </a>
            <a className="btn btn-quiet" href="/cv">{t(HERO.ctaCv)} ↗</a>
          </div>
        </div>
      </div>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...HERO.marquee, ...HERO.marquee].map((m, i) => (
            <span key={i} className="mq-item">{t(m)}<span className="ast"> ✱</span></span>
          ))}
        </div>
      </div>
    </section>
  );
}
