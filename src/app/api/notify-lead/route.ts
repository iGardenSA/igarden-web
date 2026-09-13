import { NextResponse } from "next/server";

/**
 * إشعار داخلي فوري عند وصول ليد جديد — قناتان مستقلّتان، بلا تبعية جديدة:
 *   • بريد عبر Resend REST      (RESEND_API_KEY + CONTACT_TO_EMAIL + LEAD_NOTIFY_FROM)
 *   • رسالة تلغرام عبر Bot API  (TELEGRAM_BOT_TOKEN + TELEGRAM_CHAT_ID)
 *   كل قناة تُعطَّل بصمت إن غابت متغيّراتها، ولا تمنع الأخرى. الردّ يحمل حالة كلّ قناة
 *   (`channels.email` / `channels.telegram`) لتشخيص التفعيل دون كشف أي سرّ.
 *
 * ⚠ العقد الحاكم — لا يتغيّر: **فشل الإشعار لا يمنع حفظ الليد إطلاقاً.**
 *   الليد يُحفظ في Supabase من العميل أولاً، ثم يُستدعى هذا المسار.
 *   كل مسارات الفشل تعود **200** مع `ok:false` كي لا يرى المستخدم خطأً.
 *   الاستثناء الوحيد: الرفض الأمني (‏cross-origin / حمولة ضخمة) يعود 403/413
 *   لأنه ليس مساراً يسلكه نموذجنا أصلاً.
 *
 * التصليب (قبل تفعيل Resend في الإنتاج):
 *   • رفض cross-origin صراحةً قبل أي استدعاء لـResend.
 *   • سقف لحجم الجسم وأطوال كل حقل.
 *   • تحقّق من الشكل: نصوص فقط، ومصفوفة اهتمامات محدودة.
 *   • `reply_to` لا يُمرَّر إلا إذا كان بريداً صالحاً.
 *   • المستقبِل **داخلي وثابت** من البيئة — ⛔ لا يُقرأ من الحمولة أبداً.
 *   • كابح ذاكرة خفيف داخل النسخة الواحدة (دفاع في العمق فقط).
 *
 * ⚠ الكابح الذاكري ليس ضابط المعدّل الحقيقي: النشر بلا خادم يوزّع الطلبات على
 *   نسخ متعدّدة. **الضابط الحقيقي = Vercel Firewall / Rate Limiting على هذا
 *   المسار، ويجب تفعيله قبل وضع `RESEND_API_KEY` في الإنتاج.**
 *   التفاصيل: docs/WAVE-2E-CLOSEOUT.md
 */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_BODY_BYTES = 16 * 1024; // 16KB — أضعاف أكبر نموذج لدينا
const MAX_FIELD = 2000;
const MAX_SHORT = 200;
const MAX_INTERESTS = 20;

/** نافذة كابح خفيف داخل النسخة الواحدة — دفاع في العمق لا ضابط معدّل. */
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 10;
const hits = new Map<string, { n: number; reset: number }>();

function throttled(key: string): boolean {
  const now = Date.now();
  const e = hits.get(key);
  if (!e || now > e.reset) {
    hits.set(key, { n: 1, reset: now + WINDOW_MS });
    if (hits.size > 500) for (const [k, v] of hits) if (now > v.reset) hits.delete(k);
    return false;
  }
  e.n += 1;
  return e.n > MAX_PER_WINDOW;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** نصّ آمن: يقبل النصوص فقط، يقصّ، ويحدّ الطول. غير ذلك ⇒ undefined. */
function str(v: unknown, max = MAX_SHORT): string | undefined {
  if (typeof v !== "string") return undefined;
  const s = v.trim().slice(0, max);
  return s.length ? s : undefined;
}

function strList(v: unknown): string[] | undefined {
  if (!Array.isArray(v)) return undefined;
  const out = v
    .slice(0, MAX_INTERESTS)
    .map((x) => str(x, 80))
    .filter((x): x is string => Boolean(x));
  return out.length ? out : undefined;
}

const esc = (v: unknown) =>
  String(v ?? "—").replace(/[<>&]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;" })[c]!);

/** الأصل مسموح إذا طابق مضيف الطلب نفسه — أي نداء من صفحاتنا فقط. */
function sameOrigin(req: Request): boolean {
  const host = req.headers.get("host");
  if (!host) return false;
  const candidate = req.headers.get("origin") ?? req.headers.get("referer");
  if (!candidate) return false; // ⛔ بلا Origin/Referer ⇒ ليس نداء متصفّح من صفحاتنا
  try {
    return new URL(candidate).host === host;
  } catch {
    return false;
  }
}

export async function POST(req: Request) {
  // 1) رفض cross-origin صراحةً — قبل أي عمل أو استدعاء خارجي.
  if (!sameOrigin(req)) {
    return NextResponse.json({ ok: false, error: "cross_origin_rejected" }, { status: 403 });
  }

  // 2) نوع المحتوى + سقف الحجم.
  if (!(req.headers.get("content-type") || "").includes("application/json")) {
    return NextResponse.json({ ok: false, error: "unsupported_media_type" }, { status: 415 });
  }
  const declared = Number(req.headers.get("content-length") || 0);
  if (declared > MAX_BODY_BYTES) {
    return NextResponse.json({ ok: false, error: "payload_too_large" }, { status: 413 });
  }

  let raw: string;
  try {
    raw = await req.text();
  } catch {
    return NextResponse.json({ ok: false, skipped: "unreadable_body" }, { status: 200 });
  }
  if (raw.length > MAX_BODY_BYTES) {
    return NextResponse.json({ ok: false, error: "payload_too_large" }, { status: 413 });
  }

  // 3) كابح خفيف (دفاع في العمق — ليس بديلاً عن WAF).
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";
  if (throttled(ip)) {
    return NextResponse.json({ ok: false, skipped: "throttled" }, { status: 200 });
  }

  // 4) تحليل وتحقّق من الشكل.
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    return NextResponse.json({ ok: false, skipped: "bad_json" }, { status: 200 });
  }
  if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
    return NextResponse.json({ ok: false, skipped: "bad_shape" }, { status: 200 });
  }
  const r = parsed as Record<string, unknown>;

  const b: Lead = {
    form: str(r.form, 40),
    full_name: str(r.full_name, 120),
    phone: str(r.phone, 40),
    email: str(r.email, 254),
    company: str(r.company, 120),
    city: str(r.city, 100),
    preferred_contact: str(r.preferred_contact, 20),
    interested_in: strList(r.interested_in),
    subject: str(r.subject, MAX_SHORT),
    message: str(r.message, MAX_FIELD),
    source_url: str(r.source_url, MAX_FIELD),
    referrer: str(r.referrer, 500),
    utm_source: str(r.utm_source, 120),
    utm_medium: str(r.utm_medium, 120),
    utm_campaign: str(r.utm_campaign, 120),
  };

  // حدّ أدنى للمعنى: بلا اسم ولا جوال ولا بريد ⇒ لا شيء يستحقّ الإشعار.
  if (!b.full_name && !b.phone && !b.email) {
    return NextResponse.json({ ok: false, skipped: "empty_payload" }, { status: 200 });
  }

  // 5) القنوات — المستقبِلون داخليون وثابتون من البيئة، ⛔ لا يُقرأون من الحمولة.
  const [email, telegram] = await Promise.all([sendEmail(b), sendTelegram(b)]);
  const ok = email === "sent" || telegram === "sent";
  return NextResponse.json({ ok, channels: { email, telegram } }, { status: 200 });
}

type Lead = {
  form?: string;
  full_name?: string;
  phone?: string;
  email?: string;
  company?: string;
  city?: string;
  preferred_contact?: string;
  interested_in?: string[];
  subject?: string;
  message?: string;
  source_url?: string;
  referrer?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
};

/** حالة قناة واحدة — نصّ تشخيصي قصير بلا أسرار. */
type ChannelResult = "sent" | `skipped:${string}` | `failed:${string}`;

function leadRows(b: Lead): [string, unknown][] {
  return [
    ["النموذج", b.form],
    ["الاسم", b.full_name],
    ["الجوال", b.phone],
    ["البريد", b.email],
    ["الجهة", b.company],
    ["المدينة", b.city],
    ["طريقة التواصل المفضّلة", b.preferred_contact],
    ["الاهتمامات", b.interested_in?.join("، ")],
    ["الموضوع", b.subject],
    ["أول صفحة وصول", b.referrer],
    ["الرابط الحالي", b.source_url],
    ["utm_source", b.utm_source],
    ["utm_medium", b.utm_medium],
    ["utm_campaign", b.utm_campaign],
  ];
}

/** قناة البريد — Resend. تُعطَّل بصمت بلا RESEND_API_KEY. */
async function sendEmail(b: Lead): Promise<ChannelResult> {
  const key = process.env.RESEND_API_KEY;
  if (!key) return "skipped:missing_RESEND_API_KEY";
  const to = process.env.CONTACT_TO_EMAIL || "info@igarden.sa";
  const from = process.env.LEAD_NOTIFY_FROM || "iGarden Leads <onboarding@resend.dev>";

  const html = `<div dir="rtl" style="font-family:system-ui,sans-serif;line-height:1.7">
<h2 style="margin:0 0 12px">ليد جديد — ${esc(b.full_name)}</h2>
<table cellpadding="6" style="border-collapse:collapse;font-size:14px">
${leadRows(b).map(([k, v]) => `<tr><td style="background:#f4f6f4;font-weight:700">${esc(k)}</td><td>${esc(v)}</td></tr>`).join("")}
</table>
<h3 style="margin:16px 0 6px">الرسالة</h3>
<pre style="white-space:pre-wrap;background:#fafaf7;padding:12px;border-radius:8px;font-family:inherit">${esc(b.message)}</pre>
</div>`;

  // ⛔ reply_to لا يُمرَّر إلا لبريد صالح الشكل.
  const replyTo = b.email && EMAIL_RE.test(b.email) ? b.email : undefined;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        subject: `ليد جديد — ${b.full_name || "بلا اسم"}${b.company ? ` · ${b.company}` : ""}`.slice(0, 200),
        html,
        ...(replyTo ? { reply_to: replyTo } : {}),
      }),
    });
    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error("[notify-lead] Resend rejected:", res.status, detail.slice(0, 300));
      return `failed:${res.status}`;
    }
    return "sent";
  } catch (err) {
    console.error("[notify-lead] Resend send failed:", err);
    return "failed:network";
  }
}

/** هروب لوضع HTML في تلغرام (parse_mode=HTML يقبل &lt; &gt; &amp; فقط). */
const tg = (v: unknown) => esc(v);

/**
 * قناة تلغرام — Bot API مباشرة. تُعطَّل بصمت بلا TELEGRAM_BOT_TOKEN أو TELEGRAM_CHAT_ID.
 * الوجهة (chat_id) ثابتة من البيئة: محادثة علي الخاصّة مع البوت أو مجموعة داخلية.
 */
async function sendTelegram(b: Lead): Promise<ChannelResult> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return "skipped:missing_TELEGRAM_env";

  const lines = [
    `🌱 <b>ليد جديد — ${tg(b.full_name)}</b>`,
    ...leadRows(b)
      .filter(([, v]) => v !== undefined && v !== null && v !== "")
      .filter(([k]) => k !== "الاسم")
      .map(([k, v]) => `<b>${tg(k)}:</b> ${tg(v)}`),
    b.message ? `\n<b>الرسالة:</b>\n${tg(b.message)}` : null,
  ].filter(Boolean);
  // سقف تلغرام 4096 حرفاً للرسالة الواحدة.
  const text = lines.join("\n").slice(0, 4000);

  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
    });
    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error("[notify-lead] Telegram rejected:", res.status, detail.slice(0, 300));
      return `failed:${res.status}`;
    }
    return "sent";
  } catch (err) {
    console.error("[notify-lead] Telegram send failed:", err);
    return "failed:network";
  }
}
