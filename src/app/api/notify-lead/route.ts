import { NextResponse } from "next/server";

/**
 * إشعار داخلي فوري عند وصول ليد جديد — عبر Resend REST مباشرة (بلا تبعية جديدة).
 *
 * ⚠ عقد حاكم: **فشل الإشعار لا يمنع حفظ الليد إطلاقاً.**
 *   الليد يُحفظ في Supabase من العميل أولاً، ثم يُستدعى هذا المسار.
 *   أي فشل هنا يعود 200 مع `ok:false` كي لا يُظهر النموذج خطأً للمستخدم.
 *
 * التهيئة (Vercel → Environment Variables):
 *   RESEND_API_KEY    — مفتاح Resend. غيابه ⇒ تخطٍّ صامت (skipped).
 *   CONTACT_TO_EMAIL  — وجهة الإشعار الداخلي (افتراضياً info@igarden.sa).
 *   LEAD_NOTIFY_FROM  — مُرسِل مُتحقَّق في Resend (افتراضياً onboarding@resend.dev).
 */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Body = {
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
  form?: string;
};

const esc = (v: unknown) =>
  String(v ?? "—").replace(/[<>&]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;" })[c]!);

export async function POST(req: Request) {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || "info@igarden.sa";
  const from = process.env.LEAD_NOTIFY_FROM || "iGarden Leads <onboarding@resend.dev>";

  // لا مفتاح ⇒ تخطٍّ صامت. المسار يبقى صالحاً والليد محفوظ.
  if (!key) {
    return NextResponse.json({ ok: false, skipped: "missing_RESEND_API_KEY" }, { status: 200 });
  }

  let b: Body;
  try {
    b = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ ok: false, skipped: "bad_json" }, { status: 200 });
  }

  const rows: [string, unknown][] = [
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

  const html = `<div dir="rtl" style="font-family:system-ui,sans-serif;line-height:1.7">
<h2 style="margin:0 0 12px">ليد جديد — ${esc(b.full_name)}</h2>
<table cellpadding="6" style="border-collapse:collapse;font-size:14px">
${rows.map(([k, v]) => `<tr><td style="background:#f4f6f4;font-weight:700">${esc(k)}</td><td>${esc(v)}</td></tr>`).join("")}
</table>
<h3 style="margin:16px 0 6px">الرسالة</h3>
<pre style="white-space:pre-wrap;background:#fafaf7;padding:12px;border-radius:8px;font-family:inherit">${esc(b.message)}</pre>
</div>`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        subject: `ليد جديد — ${b.full_name || "بلا اسم"}${b.company ? ` · ${b.company}` : ""}`,
        html,
        reply_to: b.email || undefined,
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error("[notify-lead] Resend rejected:", res.status, detail.slice(0, 300));
      return NextResponse.json({ ok: false, status: res.status }, { status: 200 });
    }
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("[notify-lead] send failed:", err);
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 200 });
  }
}
