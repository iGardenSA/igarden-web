import { z } from "zod";

/**
 * Lead Schema — قواعد التحقق من بيانات نموذج التواصل
 * يضمن جودة البيانات قبل حفظها في Supabase
 */
export const leadSchema = z.object({
  full_name: z
    .string()
    .min(2, "الاسم يجب أن يكون حرفين على الأقل")
    .max(120, "الاسم طويل جداً"),

  email: z
    .string()
    .email("بريد إلكتروني غير صحيح")
    .optional()
    .or(z.literal("")),

  // مطلوب: هو قناة التواصل الأساسية، والبريد يبقى اختيارياً.
  phone: z
    .string()
    .min(1, "رقم الجوال مطلوب — هو وسيلتنا للتواصل معك")
    .min(7, "رقم الهاتف قصير جداً")
    .max(20, "رقم الهاتف طويل جداً")
    .regex(/^[\d\s+()-]+$/, "رقم الهاتف يحتوي أحرفاً غير صالحة"),

  company: z.string().max(120).optional().or(z.literal("")),

  lead_type: z.enum([
    "government",
    "commercial",
    "academic",
    "investor",
    "individual",
    "unknown",
  ]).default("unknown"),

  interested_in: z.array(z.string()).optional(),

  subject: z.string().max(200).optional().or(z.literal("")),

  city: z.string().max(100).optional().or(z.literal("")),

  project_size: z.enum([
    "less_50",
    "50_500",
    "500_2000",
    "more_2000",
    "unknown",
  ]).optional(),

  timeline: z.enum([
    "now",
    "month",
    "three_months",
    "later",
  ]).optional(),

  // Wave 2E — طريقة التواصل المفضّلة. البريد يصبح إلزامياً فقط عند اختياره.
  preferred_contact: z
    .enum(["whatsapp", "phone", "email"])
    .default("whatsapp"),

  message: z
    .string()
    .min(10, "الرسالة قصيرة جداً (10 أحرف على الأقل)")
    .max(2000, "الرسالة طويلة جداً"),
}).superRefine((data, ctx) => {
  // البريد اختياري افتراضياً، وإلزامي متى اختاره المستخدم قناةً مفضّلة.
  if (data.preferred_contact === "email" && !data.email?.trim()) {
    ctx.addIssue({
      code: "custom",
      path: ["email"],
      message: "البريد مطلوب لأنك اخترته طريقة التواصل المفضّلة",
    });
  }
});

export const PREFERRED_CONTACT_OPTIONS = [
  { value: "whatsapp", label: "واتساب" },
  { value: "phone", label: "اتصال هاتفي" },
  { value: "email", label: "البريد الإلكتروني" },
] as const;

export type LeadFormData = z.infer<typeof leadSchema>;

// خيارات القوائم المنسدلة
export const LEAD_TYPES = [
  { value: "government", label: "قطاع حكومي" },
  { value: "commercial", label: "قطاع تجاري" },
  { value: "academic", label: "قطاع أكاديمي" },
  { value: "investor", label: "مستثمر / شريك" },
  { value: "individual", label: "فرد" },
  { value: "unknown", label: "آخر" },
] as const;

// ============================================================================
// Interest Taxonomy — المصدر الواحد لقيم interested_in
// ============================================================================
// حدود التصنيف (تُحترم عند أي توسعة لاحقة):
//   • الحلّ (ماذا يريد)        → interested_in  ← القائمة أدناه
//   • الشريحة (حجم/نوع الجهة)  → lead_type      ← SEGMENT_TO_LEAD_TYPE
//   • النيّة (لماذا تواصل)      → cta_id في الرابط، يُحفظ ضمن source_url
//
// ⚠ لا تُضاف شريحة (industrial/mid/home) ولا نيّة (workshop/newsletter/
//   pitch-deck) إلى هذه القائمة — لها وجهتان مختلفتان أعلاه.
// ⚠ القيم الأربع الأخيرة مُبقاة من التصنيف السابق: لها صفوف قائمة في
//   القاعدة، و VisitForm.tsx يكتب osfan_visit مباشرة. حذفها = كسر بيانات.

export const INTERESTS = [
  // — الحلول —
  { value: "controllers", label: "نظام تحكم وحساسات" },
  { value: "hydroponics", label: "زراعة مائية" },
  { value: "greenhouse", label: "محمية ذكية" },
  { value: "tower", label: "iGarden Tower — زراعة عمودية" },
  { value: "farm_digitization", label: "رقمنة المزرعة" },
  { value: "fodder", label: "الأعلاف الخضراء" },
  { value: "aquaponics", label: "الاستزراع المائي المدمج" },
  // — مُبقاة من التصنيف السابق —
  { value: "osfan_visit", label: "زيارة مرفق R&D في عسفان" },
  { value: "demo", label: "ديمو Smart OS" },
  { value: "investment", label: "استثمار / شراكة" },
  { value: "consultation", label: "استشارة عامة" },
] as const;

export type InterestValue = (typeof INTERESTS)[number]["value"];

const INTEREST_VALUES: readonly string[] = INTERESTS.map((i) => i.value);

export type LeadTypeValue = (typeof LEAD_TYPES)[number]["value"];

/**
 * تطبيع رمز الاهتمام: قصّ + حروف صغيرة + توحيد الشرطة والشرطة السفلية.
 * أي محرف خارج [a-z0-9_] يُسقَط — فتصير القيم غير اللاتينية رمزاً فارغاً
 * يُتجاهل بصمت لاحقاً بدل أن يكسر النموذج.
 */
export function normalizeInterestToken(raw: string): string {
  return raw
    .trim()
    .toLowerCase()
    .replace(/[\s-]+/g, "_")
    .replace(/[^a-z0-9_]/g, "")
    .replace(/_+/g, "_")
    .replace(/^_|_$/g, "");
}

/**
 * Compatibility Map — الصيغ القديمة المستعملة فعلاً في روابط CTA.
 * تُطبَّق بعد normalizeInterestToken، أي أن «osfan-visit» وصل هنا
 * كـ«osfan_visit» (الشرطة ↔ الشرطة السفلية) قبل البحث.
 * ⛔ قيم مسار حراج (seedlings, fertilizer, hydroponics_media …) لا تُخرَّط
 *    هنا عمداً — تُقبل وتُخزَّن كما هي.
 */
export const INTEREST_ALIASES: Record<string, InterestValue> = {
  osfan_visit: "osfan_visit",
  greenhouses: "greenhouse",
  smart_greenhouses: "greenhouse",
  smart_controllers: "controllers",
  hydroponic: "hydroponics",
  igarden_tower: "tower",
  smart_os: "demo",
  farm_digitisation: "farm_digitization",
};

/** لاحقة الشريحة في الرابط → lead_type. الحجم الدقيق يبقى في source_url. */
export const SEGMENT_TO_LEAD_TYPE: Record<string, LeadTypeValue> = {
  industrial: "commercial",
  mid: "commercial",
  home: "individual",
};

/** قيم تصل في ?interest= لكنها شريحة لا حلّ. */
const STANDALONE_SEGMENT: Record<string, LeadTypeValue> = {
  investor: "investor",
  government: "government",
  academic: "academic",
};

/** قيم تصل في ?interest= لكنها نيّة لا حلّ → تُحوَّل إلى معرّف CTA. */
const INTENT_TO_CTA: Record<string, string> = {
  workshop: "workshop_signup",
  newsletter: "newsletter_signup",
  pitch_deck: "pitch_deck_request",
  visit: "osfan_visit_request",
};

/** معرّفات CTA المعتمدة — توثيق للـ?cta=، تُحفظ ضمن source_url. */
export const CTA_IDS = [
  "readiness_assessment",
  "request_quote",
  "book_consultation",
  "osfan_visit_request",
  "workshop_signup",
  "newsletter_signup",
  "pitch_deck_request",
  "demo_access_request",
  "sustainability_solutions",
  "bioponics_inquiry",
] as const;

export type InterestResolution = {
  /** قيم جاهزة لـ interested_in (حلول فقط). */
  interests: InterestValue[];
  /** شريحة مُستنتَجة من الرابط. */
  leadType?: LeadTypeValue;
  /** نيّة وصلت في ?interest= — تُسجَّل كـ CTA لا كاهتمام. */
  ctaFallback?: string;
  /** رمز غير معروف — يُتجاهل بصمت في النموذج. */
  unknown?: string;
};

/**
 * يحلّ قيمة ?interest= إلى أبعادها الثلاثة.
 * لا يرمي أبداً: أي مدخل غير معروف يعود كـ{ interests: [], unknown }.
 */
export function resolveInterestParam(
  raw: string | null | undefined
): InterestResolution {
  if (!raw) return { interests: [] };

  const token = normalizeInterestToken(raw);
  if (!token) return { interests: [] };

  // 1) حلّ + لاحقة شريحة: hydroponics_industrial → hydroponics + commercial
  for (const [suffix, leadType] of Object.entries(SEGMENT_TO_LEAD_TYPE)) {
    const tail = `_${suffix}`;
    if (token.length > tail.length && token.endsWith(tail)) {
      const base = resolveInterestParam(token.slice(0, -tail.length));
      return { ...base, leadType };
    }
  }

  // 2) نيّة لا حلّ
  const cta = INTENT_TO_CTA[token];
  if (cta) return { interests: [], ctaFallback: cta };

  // 3) شريحة مستقلة
  const segment = STANDALONE_SEGMENT[token];
  if (segment) return { interests: [], leadType: segment };

  // 4) حلّ معروف — مباشرةً أو عبر Compatibility Map
  const canonical =
    INTEREST_ALIASES[token] ??
    (INTEREST_VALUES.includes(token) ? (token as InterestValue) : undefined);
  if (canonical) return { interests: [canonical] };

  // 5) غير معروف → تجاهل صامت
  return { interests: [], unknown: token };
}

export const PROJECT_SIZES = [
  { value: "less_50", label: "أقل من 50 م²" },
  { value: "50_500", label: "50 – 500 م²" },
  { value: "500_2000", label: "500 – 2,000 م²" },
  { value: "more_2000", label: "أكثر من 2,000 م²" },
  { value: "unknown", label: "غير متأكد" },
] as const;

export const TIMELINES = [
  { value: "now", label: "الآن" },
  { value: "month", label: "خلال شهر" },
  { value: "three_months", label: "خلال 3 أشهر" },
  { value: "later", label: "لاحقاً" },
] as const;

// ============================================================================
// App Waitlist Schema — قواعد التحقق لنموذج قائمة انتظار التطبيق
// يستخدم في src/app/app/AppWaitlistForm.tsx
// ============================================================================

export const appWaitlistSchema = z.object({
  email: z
    .string()
    .min(1, "البريد الإلكتروني مطلوب")
    .email("بريد إلكتروني غير صحيح")
    .max(254, "البريد طويل جداً"),

  phone: z
    .string()
    .regex(/^[\d\s+()-]*$/, "رقم الهاتف يحتوي أحرفاً غير صالحة")
    .max(20, "رقم الهاتف طويل جداً")
    .optional()
    .or(z.literal("")),

  city: z
    .string()
    .max(60, "اسم المدينة طويل جداً")
    .optional()
    .or(z.literal("")),

  interest_level: z.enum(["beginner", "serious", "commercial"], {
    message: "اختر مستوى اهتمامك",
  }),

  source: z.string().default("website"),
});

export type AppWaitlistData = z.infer<typeof appWaitlistSchema>;

export const APP_INTEREST_LEVELS = [
  {
    value: "beginner",
    label: "مبتدئ — أحب الفكرة وأريد أبدأ",
    desc: "لم أزرع هيدروبونيك من قبل، أو في بدايتي",
  },
  {
    value: "serious",
    label: "هاوٍ جادّ — عندي نظام منزلي",
    desc: "أبني/شغّلت DWC أو NFT أو نظاماً مشابهاً",
  },
  {
    value: "commercial",
    label: "مزارع صغير — تجاري",
    desc: "أبيع جزءاً من إنتاجي أو أخطّط لذلك",
  },
] as const;
