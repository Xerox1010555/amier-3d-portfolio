"use client";

import { JOURNEY } from "@/data/beyond";
import { SECTIONS } from "@/i18n/dictionary";
import { useLang } from "@/i18n/lang";

export default function Journey() {
  const { t } = useLang();
  const S = SECTIONS.journey;

  return (
    <section className="journey wrap" id="journey">
      <span className="kicker reveal">{t(S.no)}</span>
      <h2 className="h2 reveal">{t(S.h2)}</h2>
      <p className="statement reveal">{t(S.statement)}</p>
      <p className="mini reveal">{t(S.disclaimer)}</p>

      <div className="pillars reveal">
        <h3 className="h3">{t(S.pillarsTitle)}</h3>
        <div className="pillar-grid">
          {JOURNEY.pillars.map((p) => (
            <div className="pillar glass" key={p.name.en}>
              <span className="pillar-name">{t(p.name)}</span>
              <p className="pillar-today">{t(p.today)}</p>
              <p className="pillar-hz">{t(p.horizon)}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="steps reveal">
        <h3 className="h3">{t(S.journeyTitle)}</h3>
        <ol className="step-chain">
          {JOURNEY.steps.map((s, i) => (
            <li key={s.name.en}>
              <span className="step-num">0{i + 1}</span>
              <span className="step-name">{t(s.name)}</span>
              <span className="step-note">{t(s.note)}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="now reveal">
        <h3 className="h3">{t(S.nowTitle)}</h3>
        <div className="now-grid">
          {[
            JOURNEY.now.learning,
            JOURNEY.now.building,
            JOURNEY.now.next,
          ].map((slot, i) => (
            <div className={`now-slot${slot.placeholder ? " is-empty" : ""}`} key={i}>
              <span className="now-label">{t(slot.label)}</span>
              {slot.placeholder ? (
                <p className="now-value now-placeholder">{t(S.editNote)}</p>
              ) : (
                <p className="now-value">{t(slot.value)}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
