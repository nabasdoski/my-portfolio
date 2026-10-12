import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const alt = `${SITE.name} — ${SITE.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Generated at build time. Shown when your links are shared on
// LinkedIn, WhatsApp, Telegram, X, etc.
export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        background: "linear-gradient(135deg, #050b14 0%, #0e2f5c 100%)",
        color: "#ffffff",
      }}
    >
      <div style={{ fontSize: 28, color: "#60a5fa", display: "flex" }}>
        Portfolio
      </div>
      <div
        style={{
          fontSize: 96,
          fontWeight: 700,
          marginTop: 16,
          display: "flex",
        }}
      >
        {SITE.name}
      </div>
      <div
        style={{
          fontSize: 44,
          marginTop: 12,
          color: "#cbd5e1",
          display: "flex",
        }}
      >
        {SITE.role}
      </div>
      <div
        style={{
          fontSize: 28,
          marginTop: 48,
          color: "#94a3b8",
          display: "flex",
        }}
      >
        Akuzzle · Medicine Finder
      </div>
    </div>,
    { ...size },
  );
}
