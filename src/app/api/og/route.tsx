import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

/* ────────────────────────────────────────────────────────────────
   خطّا Tajawal مضمَّنان — بدونهما يُخرج Satori جسماً فارغاً للعربية.
   الترخيص: SIL OFL 1.1 — انظر ./fonts/OFL.txt
   ──────────────────────────────────────────────────────────────── */
const FONT_REGULAR = new URL("./fonts/Tajawal-Regular.ttf", import.meta.url);
const FONT_BOLD = new URL("./fonts/Tajawal-Bold.ttf", import.meta.url);

let fontCache: { regular: ArrayBuffer; bold: ArrayBuffer } | null = null;

async function loadFonts() {
  if (fontCache) return fontCache;
  const [regular, bold] = await Promise.all([
    fetch(FONT_REGULAR).then((r) => r.arrayBuffer()),
    fetch(FONT_BOLD).then((r) => r.arrayBuffer()),
  ]);
  if (!regular.byteLength || !bold.byteLength) {
    throw new Error("Tajawal font files loaded empty");
  }
  fontCache = { regular, bold };
  return fontCache;
}

/** قصّ آمن على حدود نقاط الترميز — لا يشطر زوجاً بديلاً ولا محرفاً مركّباً. */
function clamp(input: string, max: number) {
  const cps = Array.from(input);
  return cps.length <= max ? input : cps.slice(0, max - 1).join("").trimEnd() + "…";
}

const hasArabic = (s: string) => /[؀-ۿݐ-ݿ]/.test(s);

/**
 * ⚠ Satori (المحرّك خلف next/og) لا يطبّق خوارزمية Unicode Bidi:
 * يُشكّل حروف كل كلمة صحيحاً، لكنه يرصف الكلمات بالترتيب المنطقي من اليسار
 * — فتُقرأ الجملة العربية معكوسة. مُتحقَّق بمدخل «أولاً ثانياً ثالثاً»:
 * كان يُصيَّر «ثالثاً» في أقصى اليمين بدل «أولاً».
 *
 * الحلّ: نرصف كل كلمة كعنصر flex مستقلّ داخل حاوية `row-reverse` + `wrap`.
 * هذا يضع الكلمة الأولى في أقصى اليمين ويلتفّ إلى السطر التالي بالترتيب
 * الصحيح — بخلاف عكس النصّ يدوياً الذي ينكسر عند التفاف السطر.
 * المقاطع اللاتينية المتتالية تُجمَّع في عنصر واحد كي تبقى LTR داخلياً
 * (مثل «EC · pH · PPM» أو «Smart Controller?»).
 * ◐ إن دعم Satori bidi مستقبلاً وجب حذف هذا التخطيط وإلا انعكس الترتيب مرّتين.
 */
function toRtlRuns(input: string) {
  const runs: string[] = [];
  for (const word of input.split(/\s+/).filter(Boolean)) {
    if (!hasArabic(word) && runs.length && !hasArabic(runs[runs.length - 1])) {
      runs[runs.length - 1] += " " + word;
    } else {
      runs.push(word);
    }
  }
  return runs;
}

const TITLE_MAX = 60;
const SUB_MAX = 100;

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = req.nextUrl;
    const title = clamp(
      searchParams.get("title")?.trim() || "iGarden — انتيليجنت غاردن",
      TITLE_MAX
    );
    const sub = clamp(
      searchParams.get("sub")?.trim() || "شركة سعودية لأنظمة الزراعة الذكية",
      SUB_MAX
    );

    const { regular, bold } = await loadFonts();

    // كتل عربية → RTL ومحاذاة يمين · اللاتيني يبقى LTR.
    const titleRtl = hasArabic(title);
    const subRtl = hasArabic(sub);

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
            background:
              "linear-gradient(135deg, #0F3D2E 0%, #1B5E3F 60%, #0F3D2E 100%)",
            position: "relative",
            fontFamily: "Tajawal",
          }}
        >
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

          {/* الشعار — لاتيني، يبقى LTR */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              marginBottom: "32px",
              direction: "ltr",
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

          {/* العنوان — كلمات منفصلة في حاوية row-reverse للعربية (انظر toRtlRuns) */}
          <div
            style={{
              display: "flex",
              flexDirection: titleRtl ? "row-reverse" : "row",
              flexWrap: "wrap",
              marginBottom: "16px",
              maxWidth: "1000px",
              justifyContent: "flex-start",
              alignSelf: titleRtl ? "flex-end" : "flex-start",
            }}
          >
            {(titleRtl ? toRtlRuns(title) : [title]).map((run, i) => (
              <span
                key={i}
                style={{
                  color: "#FAFAF7",
                  fontSize: Array.from(title).length > 30 ? 44 : 54,
                  fontWeight: 700,
                  lineHeight: 1.25,
                }}
              >
                {run + "\u00A0"}
              </span>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: subRtl ? "row-reverse" : "row",
              flexWrap: "wrap",
              maxWidth: "1000px",
              justifyContent: "flex-start",
              alignSelf: subRtl ? "flex-end" : "flex-start",
            }}
          >
            {(subRtl ? toRtlRuns(sub) : [sub]).map((run, i) => (
              <span
                key={i}
                style={{
                  color: "rgba(250,250,247,0.72)",
                  fontSize: 28,
                  lineHeight: 1.4,
                }}
              >
                {run + "\u00A0"}
              </span>
            ))}
          </div>

          {/* النطاق — لاتيني، LTR */}
          <div
            style={{
              position: "absolute",
              bottom: 48,
              left: 64,
              color: "rgba(165,214,63,0.75)",
              fontSize: 22,
              letterSpacing: "0.5px",
              direction: "ltr",
            }}
          >
            igarden.sa
          </div>

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
      {
        width: 1200,
        height: 630,
        fonts: [
          { name: "Tajawal", data: regular, weight: 400, style: "normal" },
          { name: "Tajawal", data: bold, weight: 700, style: "normal" },
        ],
      }
    );
  } catch (err) {
    // ⛔ لا 200 بجسم فارغ — الفشل يُعلَن صراحةً.
    console.error("[api/og] render failed:", err);
    return new Response("OG image render failed", {
      status: 500,
      headers: { "content-type": "text/plain; charset=utf-8" },
    });
  }
}
