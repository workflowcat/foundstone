import { ImageResponse } from "next/og";

/**
 * Site-wide OpenGraph card. Next.js picks this up automatically and
 * serves it at /opengraph-image.<ext>, adding the correct <meta> tags
 * to every page that doesn't override with its own opengraph-image.
 *
 * Typography note: EB Garamond isn't available in the satori runtime
 * by default. Georgia is the closest widely-supported transitional
 * serif and renders cleanly at 1200×630.
 */

export const alt = "Foundstone Capital — Limassol, Cyprus";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0A0A0F",
          color: "#E8E6E3",
          padding: "80px",
          fontFamily: "Georgia, serif",
          position: "relative",
        }}
      >
        {/* Subtle top-left corner geometric accent */}
        <div
          style={{
            position: "absolute",
            top: "60px",
            left: "60px",
            display: "flex",
            alignItems: "center",
            gap: "14px",
            fontSize: "16px",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "rgba(196, 154, 108, 0.5)",
            fontFamily: "Georgia, serif",
          }}
        >
          <div
            style={{
              width: "24px",
              height: "1px",
              background: "rgba(196, 154, 108, 0.6)",
            }}
          />
          Foundstone
        </div>

        {/* Main wordmark */}
        <div
          style={{
            fontSize: "86px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#E8E6E3",
            textAlign: "center",
            lineHeight: 1,
          }}
        >
          Foundstone Capital
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "34px",
            color: "#8A8A96",
            marginTop: "56px",
            textAlign: "center",
            lineHeight: 1.35,
            maxWidth: "960px",
            fontFamily: "Georgia, serif",
          }}
        >
          We run the operations behind B2B technology companies.
        </div>

        {/* Bottom-right stat anchor */}
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            right: "60px",
            display: "flex",
            alignItems: "center",
            gap: "18px",
            fontSize: "14px",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "rgba(138, 138, 150, 0.7)",
          }}
        >
          Nine practice areas · One operating team
        </div>
      </div>
    ),
    { ...size },
  );
}
