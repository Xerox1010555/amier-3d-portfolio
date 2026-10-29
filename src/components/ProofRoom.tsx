"use client";

import { LEDGER, STORIES } from "@/data/stories";
import { SECTIONS } from "@/i18n/dictionary";
import { useLang } from "@/i18n/lang";

export default function ProofRoom() {
  const { t } = useLang();
  const S = SECTIONS.proof;

  return (
    <section className="proof wrap" id="proof">
      <span className="kicker reveal">{t(S.no)}</span>
      <h2 className="h2 reveal">{t(S.h2)}</h2>
      <p className="lede reveal">{t(S.intro)}</p>

      <div className="stories">
        {STORIES.map((s, i) => (
          <article className="story reveal" key={s.slug} style={{ "--accent": s.accent } as React.CSSProperties}>
            <div className="story-media">
              <span className="story-no">{s.no}</span>
              <img
                src={s.shot}
                alt={t(s.title)}
                width={960}
                height={540}
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
              />
            </div>
            <div className="story-body">
              <header>
                <h3>{t(s.title)}</h3>
                <span className="chip">{t(s.kind)}</span>
              </header>

              <dl className="story-fields">
                <div><dt>{t(S.challenge)}</dt><dd>{t(s.challenge)}</dd></div>
                <div><dt>{t(S.decision)}</dt><dd>{t(s.decision)}</dd></div>
                <div><dt>{t(S.outcome)}</dt><dd>{t(s.outcome)}</dd></div>
                <div><dt>{t(S.learned)}</dt><dd>{t(s.learned)}</dd></div>
              </dl>

              <div className="story-stack">
                <span className="dt">{t(S.stack)}:</span>
                {s.stack.map((c) => <span className="chip" key={c}>{c}</span>)}
              </div>

              <div className="story-links">
                {s.live && <a className="btn btn-solo btn-sm" href={s.live} target="_blank" rel="noreferrer">{t(S.live)}</a>}
                {s.repo && <a className="btn btn-ghost btn-sm" href={s.repo} target="_blank" rel="noreferrer">{t(S.code)}</a>}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="ledger reveal">
        <h3 className="h3">{t(S.ledgerTitle)}</h3>
        <p className="mini">{t(S.ledgerNote)}</p>
        <table className="ledger-table" dir="ltr">
          <tbody>
            {LEDGER.map((r) => (
              <tr key={r.href}>
                <td className="lg-name" dir="auto">{t(r.name)}</td>
                <td className="lg-what" dir="auto">{t(r.what)}</td>
                <td className="lg-kind"><span className="chip">{t(r.kind)}</span></td>
                <td className="lg-link">
                  <a href={r.href} target="_blank" rel="noreferrer">{t(S.open)} ↗</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
