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
  { value: "tower", label: "iGarden Tower" },
  { value: "greenhouse", label: "Smart Greenhouses" },
  { value: "aquaponics", label: "Aquaponics" },
  { value: "aeroponics", label: "Aeroponics" },
  { value: "cloud", label: "iGarden Cloud" },
  { value: "knowledge", label: "iGarden Knowledge" },
  { value: "consultation", label: "استشارة عامة" },
] as const;
