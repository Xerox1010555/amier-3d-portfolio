"use client";

import { useState } from "react";
import { LAB_CASES, type LabCase } from "@/data/beyond";
import { SECTIONS } from "@/i18n/dictionary";
import { useLang } from "@/i18n/lang";

function Case({ c }: { c: LabCase }) {
  const { t } = useLang();
  const [sel, setSel] = useState(c.chosenIndex);

  return (
    <article className={`lab-case glass reveal${c.label === "sim" ? " is-sim" : ""}`} id={c.id}>
      <header className="lab-head">
        <span className="story-no">{c.no}</span>
        <h3>{t(c.title)}</h3>
        <span className={`chip ${c.label === "sim" ? "chip-amber" : "chip-cyan"}`}>{t(c.badge)}</span>
      </header>

      <div className="lab-grid">
        <div>
          <h4 className="dt">{t(SECTIONS.lab.problemLabel)}</h4>
          <p>{t(c.problem)}</p>
          <h4 className="dt">{t(SECTIONS.lab.constraintsLabel)}</h4>
          <p>{t(c.constraints)}</p>
        </div>

        <div className="lab-approaches" role="group" aria-label="Approaches">
          {c.approaches.map((a, i) => (
            <button
              key={i}
              type="button"
              className={`lab-approach${sel === i ? " is-sel" : ""}${i === c.chosenIndex ? " is-chosenHint" : ""}`}
              aria-pressed={sel === i}
              onClick={() => setSel(i)}
            >
              <span className="la-name">{t(a.name)}</span>
              <span className="la-trade">{t(a.trade)}</span>
              {i === c.chosenIndex && <span className="la-flag">✓ {t(SECTIONS.lab.chosen)}</span>}
            </button>
          ))}
          {c.chosenNote && sel === c.chosenIndex && <p className="lab-note">{t(c.chosenNote)}</p>}
          {c.testNote && sel === c.chosenIndex && <p className="lab-note lab-note-amber">{t(c.testNote)}</p>}
        </div>
      </div>

      <p className="lab-learned"><strong>{t(SECTIONS.lab.learnedLabel)}:</strong> {t(c.learned)}</p>
    </article>
  );
}

export default function DecisionLab() {
  const { t } = useLang();
  const S = SECTIONS.lab;

  return (
    <section className="lab wrap" id="lab">
      <span className="kicker reveal">{t(S.no)}</span>
      <h2 className="h2 reveal">{t(S.h2)}</h2>
      <p className="lede reveal">{t(S.intro)}</p>

      <div className="lab-cases">
        {LAB_CASES.map((c) => <Case key={c.id} c={c} />)}
      </div>
    </section>
  );
}
