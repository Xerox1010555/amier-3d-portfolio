"use client";

import { RYDO, SYS_MAP } from "@/data/beyond";
import { SECTIONS } from "@/i18n/dictionary";
import { useLang } from "@/i18n/lang";

const CODE = `async def driver_accept(db, ride_id, driver_id):
    # Extra guard: a busy driver cannot accept another ride.
    existing = await db.execute(
        select(Ride).where(
            Ride.driver_id == driver_id,
            Ride.id != ride_id,
            Ride.status.in_(("matched", "accepted", "driver_arrived", "in_progress")),
        )
    )
    if existing.scalar_one_or_none():
        raise APIError("DRIVER_HAS_ACTIVE_RIDE",
                       "You already have an active ride.",
                       status_code=409)

    ride = await _get_ride_locked(db, ride_id)  # SELECT ... FOR UPDATE
    _transition(ride, "accepted")               # state machine -> 409 on illegal
    driver.is_available = False                 # seat reserved until completion`;

function SysMap() {
  return (
    <div className="sysmap reveal">
      <div className="sm-row sm-clients">
        {SYS_MAP.clients.map((c) => <span className="sm-box" key={c}>{c}</span>)}
      </div>
      <div className="sm-arrow" aria-hidden="true">↓</div>
      <div className="sm-row sm-api">
        {SYS_MAP.api.map((c) => <span className="sm-box sm-box-strong" key={c}>{c}</span>)}
      </div>
      <div className="sm-arrow" aria-hidden="true">↓</div>
      <div className="sm-row sm-services">
        {SYS_MAP.services.map((c) => <span className="sm-chip" key={c}>{c}</span>)}
      </div>
      <div className="sm-arrow" aria-hidden="true">↓</div>
      <div className="sm-row sm-data">
        {SYS_MAP.data.map((c) => <span className="sm-box" key={c}>{c}</span>)}
        <span className="sm-key">invariants: {SYS_MAP.flow.join(" · ")}</span>
      </div>
    </div>
  );
}

export default function RydoCase() {
  const { t } = useLang();

  return (
    <section className="rydo wrap" id="rydo">
      <span className="kicker reveal">{t(SECTIONS.rydo.no)}</span>

      <div className="rydo-head reveal">
        <h2 className="h2">{t(RYDO.title)}</h2>
        <span className="chip chip-amber">{t(SECTIONS.rydo.chip)}</span>
      </div>
      <p className="lede reveal">{t(RYDO.kicker)}</p>

      <div className="rydo-cols">
        <div>
          <h3 className="h3 reveal">{t(RYDO.intentTitle)}</h3>
          <p className="reveal">{t(RYDO.intent)}</p>
          <h3 className="h3 reveal">{t(SECTIONS.proof.role)}</h3>
          <p className="reveal">{t(RYDO.role)}</p>
          <h3 className="h3 reveal">{t(RYDO.challengeTitle)}</h3>
          <p className="reveal">{t(RYDO.challenge)}</p>
          <ul className="rydo-options reveal">
            {RYDO.options.map((o, i) => (
              <li key={i} className={o.ok ? "is-chosen" : ""}>
                <span className="opt-name">{t(o.name)}</span>
                <span className="opt-verdict">{t(o.verdict)}</span>
              </li>
            ))}
          </ul>
          <p className="reveal">{t(RYDO.chosenNote)}</p>
          <figure className="codecard reveal">
            <pre dir="ltr"><code>{CODE}</code></pre>
            <figcaption>{t(RYDO.codeCaption)}</figcaption>
          </figure>
        </div>

        <div>
          <div className="list-card reveal">
            <h3 className="h3">{t(RYDO.builtTitle)}</h3>
            <ul className="rows rows-checked">
              {RYDO.built.map((b, i) => <li key={i}>{t(b)}</li>)}
            </ul>
          </div>
          <div className="list-card reveal">
            <h3 className="h3">{t(RYDO.plannedTitle)}</h3>
            <ul className="rows rows-planned">
              {RYDO.planned.map((p, i) => <li key={i}>{t(p)}</li>)}
            </ul>
          </div>
        </div>
      </div>

      <div className="rydo-sys reveal">
        <h3 className="h3">{t(RYDO.sysTitle)}</h3>
        <p className="mini">{t(RYDO.sysNote)}</p>
        <SysMap />
      </div>

      <div className="rydo-verdicts">
        <div className="verdict glass reveal">
          <h3 className="h3">{t(RYDO.outcomeTitle)}</h3>
          <p>{t(RYDO.outcome)}</p>
        </div>
        <div className="verdict glass reveal">
          <h3 className="h3">{t(RYDO.nextTitle)}</h3>
          <p>{t(RYDO.next)}</p>
        </div>
        <div className="verdict glass reveal">
          <h3 className="h3">{t(RYDO.learnedTitle)}</h3>
          <p>{t(RYDO.learned)}</p>
        </div>
      </div>
    </section>
  );
}
