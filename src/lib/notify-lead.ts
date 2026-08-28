/**
 * إرسال إشعار الليد الداخلي — يُستدعى **بعد** نجاح الحفظ في Supabase.
 *
 * ⚠ عقد حاكم: لا يرمي أبداً ولا يُعيد رفضاً. أي فشل شبكة أو خادم يُبتلع
 * ويُسجَّل في الـconsole فقط، كي لا يتحوّل ليد محفوظ إلى رسالة خطأ للمستخدم.
 */
export type NotifyLeadPayload = {
  form: string;
  full_name?: string;
  phone?: string;
  email?: string;
  company?: string;
  city?: string;
  preferred_contact?: string;
  interested_in?: string[];
  subject?: string;
  message?: string;
  source_url?: string | null;
  referrer?: string | null;
  utm_source?: string | null;
  utm_medium?: string | null;
  utm_campaign?: string | null;
};

export async function notifyLead(payload: NotifyLeadPayload): Promise<void> {
  try {
    await fetch("/api/notify-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      keepalive: true,
    });
  } catch (err) {
    console.warn("[notifyLead] إشعار غير حرج فشل — الليد محفوظ:", err);
  }
}
