"use client";

import { DOORS, ROLES, SKILL_GROUPS, AI_NOTE } from "@/data/beyond";
import { LINK } from "@/data/projects";
import { NAV, SECTIONS } from "@/i18n/dictionary";
import { useLang } from "@/i18n/lang";

export default function Opportunities() {
  const { t } = useLang();
  const S = SECTIONS.opportunities;

  return (
    <section className="opp wrap" id="opportunities">
      <span className="kicker reveal">{t(S.no)}</span>
      <h2 className="h2 reveal">{t(S.h2)}</h2>
      <p className="lede reveal">{t(S.intro)}</p>

      <div className="door-grid">
        {DOORS.map((d) => (
          <div className="door glass reveal" key={d.id}>
            <span className="door-icon" aria-hidden="true">{d.icon}</span>
            <h3>{t(d.title)}</h3>
            <span className="dt">{t(S.bringTitle)}</span>
            <ul className="rows">
              {d.bring.map((b, i) => <li key={i}>{t(b)}</li>)}
            </ul>
            <span className="dt">{t(S.wantTitle)}</span>
            <ul className="rows rows-hz">
              {d.want.map((w, i) => <li key={i}>{t(w)}</li>)}
            </ul>
          </div>
        ))}
      </div>

      <div className="opp-facts reveal">
        <div className="line-facts">
          <span className="dt">{t(S.rolesTitle)}:</span>
          <p>{t(ROLES)}</p>
        </div>
        <div className="line-facts">
          <span className="dt">{t(S.educationLabel)}:</span>
          <p className="placeholder-line">{t(S.educationValue)}</p>
        </div>
        <div className="line-facts">
          <span className="dt">{t(S.languagesLabel)}:</span>
          <p>{t(S.languagesValue)}</p>
        </div>
      </div>

      <div className="skills reveal">
        {SKILL_GROUPS.map((g) => (
          <div className="skill-row" key={g.name.en}>
            <span className="dt">{t(g.name)}:</span>
            <div className="skill-chips">
              {g.chips.map((c) => <span className="chip" key={c}>{c}</span>)}
            </div>
          </div>
        ))}
        <p className="mini ai-note">{t(AI_NOTE)}</p>
      </div>

      <div className="opp-cta reveal">
        <a className="btn btn-solo" href={LINK.email ? `mailto:${LINK.email}` : "#"}>Email</a>
        <a className="btn btn-ghost" href={LINK.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
        <a className="btn btn-ghost" href={LINK.telegram} target="_blank" rel="noreferrer">Telegram</a>
        <a className="btn btn-quiet" href="/cv">{t(NAV.cv)} ↗</a>
      </div>
    </section>
  );
}
