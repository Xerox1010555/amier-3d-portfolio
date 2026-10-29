import { ImageResponse } from "next/og";

export const runtime = "nodejs";

const size = { width: 1200, height: 630 };

/** Night Press OG card — midnight navy, amber mark, verifiable numbers only. */
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
          background: "#060a13",
          color: "#e9eefb",
          padding: "64px 72px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* frame */}
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: 24,
            left: 24,
            bottom: 24,
            right: 24,
            border: "2px solid rgba(190,215,255,0.28)",
          }}
        />
        {/* kicker */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 24,
            color: "#6d7ea6",
            letterSpacing: 4,
          }}
        >
          <span style={{ color: "#ffb35c" }}>✱</span>
          <span>PORTFOLIO 2026 — CAIRO, EGYPT</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 96, fontWeight: 700, letterSpacing: 2 }}>
            AMIER
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 46,
              lineHeight: 1.25,
              marginTop: 12,
              maxWidth: 980,
            }}
          >
            <span style={{ color: "#e9eefb" }}>Building at the intersection of </span>
            <span style={{ color: "#ffb35c" }}>Business, Software &amp; AI.</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            color: "#a4b3d4",
            fontSize: 26,
            borderTop: "1px solid rgba(190,215,255,0.22)",
            paddingTop: 28,
          }}
        >
          <div style={{ display: "flex", gap: 24 }}>
            <span style={{ color: "#7fd7ff" }}>14 public repositories</span>
            <span>·</span>
            <span style={{ color: "#7fd7ff" }}>12 live deployments</span>
            <span>·</span>
            <span>every number verifiable</span>
          </div>
          <div style={{ display: "flex", color: "#6d7ea6" }}>abddo4443@gmail.com</div>
        </div>
      </div>
    ),
    size,
  );
}
