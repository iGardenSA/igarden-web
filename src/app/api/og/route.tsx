import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const title = searchParams.get("title") || "iGarden — انتيليجنت غاردن";
  const sub =
    searchParams.get("sub") || "شركة سعودية لأنظمة الزراعة الذكية";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "64px",
          background: "linear-gradient(135deg, #0F3D2E 0%, #1B5E3F 60%, #0F3D2E 100%)",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Grid pattern overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.06,
            backgroundImage:
              "linear-gradient(rgba(165,214,63,1) 1px, transparent 1px), linear-gradient(90deg, rgba(165,214,63,1) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* Accent circle */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 480,
            height: 480,
            borderRadius: "50%",
            background: "rgba(165,214,63,0.08)",
          }}
        />

        {/* Logo row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: 52,
              height: 52,
              background: "#A5D63F",
              borderRadius: "14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 28,
                height: 28,
                background: "#0F3D2E",
                borderRadius: "4px",
              }}
            />
          </div>
          <span
            style={{
              color: "#A5D63F",
              fontSize: 32,
              fontWeight: 700,
              letterSpacing: "-0.5px",
            }}
          >
            iGarden
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            color: "#FAFAF7",
            fontSize: title.length > 30 ? 44 : 54,
            fontWeight: 700,
            lineHeight: 1.25,
            marginBottom: "16px",
            maxWidth: "880px",
          }}
        >
          {title}
        </div>

        {/* Subtitle */}
        <div
          style={{
            color: "rgba(250,250,247,0.65)",
            fontSize: 28,
            lineHeight: 1.4,
          }}
        >
          {sub}
        </div>

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: 48,
            right: 64,
            color: "rgba(165,214,63,0.6)",
            fontSize: 22,
            letterSpacing: "0.5px",
          }}
        >
          igarden.sa
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "linear-gradient(90deg, #7CB342, #A5D63F, #7CB342)",
          }}
        />
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
