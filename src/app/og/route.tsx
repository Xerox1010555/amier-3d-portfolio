import { ImageResponse } from "next/og";

export const runtime = "nodejs";

const size = { width: 1200, height: 630 };

/** Editorial OG card — paper & ink, generated at request time, zero external assets. */
export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          background: "#f2ede4",
          color: "#16130f",
          padding: "64px 72px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* print frame */}
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: 24,
            left: 24,
            bottom: 24,
            right: 24,
            border: "2px solid #16130f",
          }}
        />
        {/* vermilion block */}
        <div
          style={{
            display: "flex",
            position: "absolute",
            right: 96,
            top: 96,
            width: 88,
            height: 88,
            background: "#ff4d00",
          }}
        />
        <div
          style={{
            display: "flex",
            position: "absolute",
            left: 96,
            bottom: 130,
            width: 180,
            height: 12,
            background: "#ff4d00",
          }}
        />

        {/* top row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", color: "#6e675c", fontSize: 20, letterSpacing: 5 }}>
            AMIER — PORTFOLIO ✱ EDITION 2026
          </div>
          <div style={{ display: "flex", color: "#6e675c", fontSize: 20, letterSpacing: 4 }}>
            №01
          </div>
        </div>

        {/* headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div
            style={{
              display: "flex",
              fontSize: 148,
              fontWeight: 700,
              color: "#16130f",
              letterSpacing: -4,
              lineHeight: 1,
            }}
          >
            AMIER.
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 24,
              fontSize: 38,
              fontWeight: 700,
              color: "#16130f",
            }}
          >
            <span style={{ display: "flex" }}>Full-Stack Developer</span>
            <span style={{ display: "flex", color: "#ff4d00" }}>✱</span>
            <span
              style={{
                display: "flex",
                color: "transparent",
                WebkitTextStroke: "1.4px #16130f",
              }}
            >
              3D Engineer
            </span>
          </div>
        </div>

        {/* stats chips */}
        <div style={{ display: "flex", gap: 14 }}>
          {["12 LIVE DEPLOYMENTS", "14 PUBLIC REPOS", "4+ YEARS", "50+ PROJECTS"].map((chip) => (
            <div
              key={chip}
              style={{
                display: "flex",
                padding: "12px 24px",
                border: "1.5px solid #16130f",
                color: "#16130f",
                fontSize: 21,
                letterSpacing: 2,
                background: "#f2ede4",
              }}
            >
              {chip}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
