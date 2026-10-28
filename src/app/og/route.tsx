import { ImageResponse } from "next/og";

export const runtime = "nodejs";

const size = { width: 1200, height: 630 };

/** Branded OG card — generated at request time, zero external assets. */
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
          background: "#05060a",
          padding: "64px 72px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* ambient glows */}
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: -180,
            right: -120,
            width: 520,
            height: 520,
            borderRadius: 9999,
            background: "rgba(167, 139, 250, 0.16)",
          }}
        />
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: -220,
            left: -140,
            width: 560,
            height: 560,
            borderRadius: 9999,
            background: "rgba(34, 211, 238, 0.13)",
          }}
        />

        {/* top row */}
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 46,
              height: 46,
              borderRadius: 13,
              background: "linear-gradient(135deg, #22d3ee, #a78bfa)",
              color: "#04070d",
              fontSize: 26,
              fontWeight: 800,
            }}
          >
            A
          </div>
          <div style={{ display: "flex", color: "#9aa6b5", fontSize: 22, letterSpacing: 4 }}>
            AMIER — FULL-STACK &amp; 3D WEB ENGINEERING
          </div>
        </div>

        {/* headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              fontSize: 132,
              fontWeight: 700,
              color: "#eef2f7",
              letterSpacing: -3,
              lineHeight: 1,
            }}
          >
            AMIER
          </div>
          <div
            style={{
              display: "flex",
              width: 220,
              height: 10,
              borderRadius: 6,
              background: "linear-gradient(90deg, #22d3ee, #a78bfa)",
            }}
          />
          <div style={{ display: "flex", color: "#c3ccd8", fontSize: 34, marginTop: 8 }}>
            Immersive 3D · AI products · secure full-stack platforms
          </div>
        </div>

        {/* stats chips */}
        <div style={{ display: "flex", gap: 16 }}>
          {["12 live deployments", "14 public repos", "4+ years", "50+ projects"].map((chip) => (
            <div
              key={chip}
              style={{
                display: "flex",
                padding: "12px 26px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.14)",
                background: "rgba(255,255,255,0.05)",
                color: "#eef2f7",
                fontSize: 24,
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
