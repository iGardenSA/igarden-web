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

  phone: z
    .string()
    .min(7, "رقم الهاتف قصير جداً")
    .max(20, "رقم الهاتف طويل جداً")
    .regex(/^[\d\s+()-]+$/, "رقم الهاتف يحتوي أحرفاً غير صالحة")
    .optional()
    .or(z.literal("")),

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

  message: z
    .string()
    .min(10, "الرسالة قصيرة جداً (10 أحرف على الأقل)")
    .max(2000, "الرسالة طويلة جداً"),
})
.refine(
  (data) => data.email || data.phone,
  {
    message: "يجب إدخال بريد إلكتروني أو رقم هاتف على الأقل",
    path: ["email"],
  }
);

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

export const INTERESTS = [
  { value: "controllers", label: "نظام تحكم وحساسات" },
  { value: "hydroponics", label: "زراعة مائية" },
  { value: "greenhouse", label: "محمية ذكية" },
  { value: "osfan_visit", label: "زيارة مرفق R&D في عسفان" },
  { value: "demo", label: "ديمو Smart OS" },
  { value: "investment", label: "استثمار / شراكة" },
  { value: "consultation", label: "استشارة عامة" },
] as const;

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
