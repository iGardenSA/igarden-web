"use client";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react";
import { createBrowserSupabase } from "@/lib/supabase";
import { INTERESTS, type LeadTypeValue } from "@/lib/lead-schema";
import {
  readLeadPrefillFromLocation,
  type TrackingParams,
} from "@/lib/lead-tracking";

/* ────────────────────────────────────────────────────────────────
   نموذج التقييم الأوّلي.
   ⛔ لا عمود جديد ولا migration: كل حقل يُخزَّن في عمود قائم في
   جدول leads، وما لا عمود له (المنطقة · نوع المنشأة · التوقيت ·
   المساحة) يُضمّ إلى `message` بنفس نمط نموذج /contact القائم.
   ──────────────────────────────────────────────────────────────── */

const FACILITY_TYPES = [
  { value: "farm", label: "مزرعة", leadType: "commercial" },
  { value: "greenhouse", label: "محمية", leadType: "commercial" },
  { value: "company", label: "شركة", leadType: "commercial" },
  { value: "authority", label: "جهة", leadType: "government" },
] as const;

const TIMING = [
  { value: "now", label: "فوري" },
  { value: "three_months", label: "خلال ٣ أشهر" },
  { value: "exploring", label: "أستكشف" },
] as const;

const schema = z.object({
  full_name: z.string().min(2, "الاسم مطلوب"),
  company: z.string().min(2, "اسم المنشأة مطلوب"),
  region: z.string().min(2, "المنطقة مطلوبة"),
  facility_type: z.enum(["farm", "greenhouse", "company", "authority"], {
    message: "اختر نوع المنشأة",
  }),
  interest: z.string().min(1, "اختر أقرب احتياج"),
  phone: z
    .string()
    .min(7, "رقم قصير جداً")
    .max(20, "رقم طويل جداً")
    .regex(/^[\d\s+()-]+$/, "الرقم يحتوي أحرفاً غير صالحة"),
  timing: z.enum(["now", "three_months", "exploring"], {
    message: "اختر التوقيت",
  }),
  area: z.string().max(60).optional().or(z.literal("")),
});

type FormData = z.infer<typeof schema>;
type SubmitState = "idle" | "submitting" | "success" | "error";

export function AssessmentSection() {
  const [state, setState] = useState<SubmitState>("idle");
  const tracking = useRef<TrackingParams>({
    cta: null,
    utm_source: null,
    utm_medium: null,
    utm_campaign: null,
  });

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  useEffect(() => {
    const { resolution, tracking: params } = readLeadPrefillFromLocation();
    tracking.current = params;
    if (resolution.interests.length > 0) {
      setValue("interest", resolution.interests[0]);
    }
  }, [setValue]);

  const timing = watch("timing");

  const onSubmit = async (data: FormData) => {
    setState("submitting");
    try {
      const facility = FACILITY_TYPES.find((f) => f.value === data.facility_type);
      const interestLabel =
        INTERESTS.find((i) => i.value === data.interest)?.label ?? data.interest;
      const timingLabel = TIMING.find((t) => t.value === data.timing)?.label ?? "";

      const message = [
        `طلب تقييم أوّلي لجاهزية المزرعة.`,
        `المنطقة: ${data.region}`,
        `نوع المنشأة: ${facility?.label ?? data.facility_type}`,
        `أقرب احتياج: ${interestLabel}`,
        `التوقيت: ${timingLabel}`,
        data.area ? `المساحة تقريباً: ${data.area}` : null,
      ]
        .filter(Boolean)
        .join("\n");

      const supabase = createBrowserSupabase();
      const { error } = await supabase.from("leads").insert({
        full_name: data.full_name,
        phone: data.phone,
        company: data.company,
        lead_type: (facility?.leadType ?? "unknown") as LeadTypeValue,
        interested_in: [data.interest],
        subject: "طلب تقييم أوّلي — الصفحة الرئيسية",
        message,
        channel: "website",
        status: "new",
        source_url:
          typeof window !== "undefined" ? window.location.href : null,
        user_agent:
          typeof navigator !== "undefined" ? navigator.userAgent : null,
        utm_source: tracking.current.utm_source,
        utm_medium: tracking.current.utm_medium,
        utm_campaign: tracking.current.utm_campaign,
      });

      if (error) throw error;
      setState("success");
      reset();
    } catch (err) {
      console.error("[AssessmentForm] Submission error:", err);
      setState("error");
    }
  };

  return (
    <section id="assessment" className="bg-[var(--color-surface)] section-padding" dir="rtl">
      <div className="container-igarden">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="heading-section mb-4">
              لا تحتاج قراراً كبيراً لتبدأ — تحتاج تقييماً.
            </h2>
            <p className="body-base text-medium-gray leading-relaxed">
              أخبرنا بوضع مزرعتك، ونعود إليك بالخطوة الأولى المناسبة ونطاقها.
            </p>
          </div>

          {state === "success" ? (
            <div className="bg-white rounded-2xl border border-[var(--color-border)] p-10 text-center">
              <CheckCircle2 className="w-12 h-12 text-[#7CB342] mx-auto mb-4" aria-hidden="true" />
              <p className="text-xl font-bold text-deep-green mb-2">وصل طلبك ✓</p>
              <p className="body-base text-medium-gray">
                نراجع احتياجك ونعود إليك بالخطوة الأولى المناسبة.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white rounded-2xl border border-[var(--color-border)] shadow-[var(--shadow-soft)] p-7 md:p-9 space-y-5"
              noValidate
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Field label="الاسم" error={errors.full_name?.message}>
                  <input {...register("full_name")} className="input-igarden" />
                </Field>
                <Field label="المنشأة" error={errors.company?.message}>
                  <input {...register("company")} className="input-igarden" />
                </Field>
                <Field label="المنطقة" error={errors.region?.message}>
                  <input {...register("region")} className="input-igarden" />
                </Field>
                <Field label="رقم واتساب" error={errors.phone?.message}>
                  <input {...register("phone")} className="input-igarden" dir="ltr" />
                </Field>
                <Field label="نوع المنشأة" error={errors.facility_type?.message}>
                  <select {...register("facility_type")} className="input-igarden" defaultValue="">
                    <option value="" disabled>اختر…</option>
                    {FACILITY_TYPES.map((f) => (
                      <option key={f.value} value={f.value}>{f.label}</option>
                    ))}
                  </select>
                </Field>
                <Field label="أقرب احتياج" error={errors.interest?.message}>
                  <select {...register("interest")} className="input-igarden" defaultValue="">
                    <option value="" disabled>اختر…</option>
                    {INTERESTS.map((i) => (
                      <option key={i.value} value={i.value}>{i.label}</option>
                    ))}
                  </select>
                </Field>
              </div>

              <Field label="التوقيت" error={errors.timing?.message}>
                <div className="flex flex-wrap gap-2.5">
                  {TIMING.map((t) => (
                    <button
                      key={t.value}
                      type="button"
                      onClick={() => setValue("timing", t.value, { shouldValidate: true })}
                      aria-pressed={timing === t.value}
                      className={`px-5 py-2.5 rounded-lg border-2 text-sm font-semibold transition-colors ${
                        timing === t.value
                          ? "border-[var(--color-accent-500)] bg-[var(--color-accent-500)]/10 text-deep-green"
                          : "border-[var(--color-border)] text-medium-gray hover:border-[var(--color-brand-300)]"
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
                <input type="hidden" {...register("timing")} />
              </Field>

              <Field label="المساحة تقريباً (اختياري)">
                <input {...register("area")} className="input-igarden" placeholder="مثال: 2,000 م²" />
              </Field>

              {state === "error" && (
                <p className="flex items-start gap-2 text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg p-3">
                  <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" />
                  تعذّر إرسال الطلب حالياً. حاول مرة أخرى أو تواصل معنا مباشرةً.
                </p>
              )}

              <button
                type="submit"
                disabled={state === "submitting"}
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-[#7CB342] hover:bg-[#A5D63F] text-[#0F3D2E] font-semibold transition-colors disabled:opacity-60"
              >
                {state === "submitting" ? (
                  <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
                ) : (
                  <Send className="w-5 h-5" aria-hidden="true" />
                )}
                أرسل طلب التقييم
              </button>

              <p className="text-sm text-medium-gray leading-relaxed text-center">
                نراجع احتياجك ونقترح الخطوة الأولى المناسبة. لا يتضمّن التقييم الأولي
                تسعيراً أو تصميماً هندسياً نهائياً.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-deep-green mb-2">{label}</label>
      {children}
      {error && <p className="text-xs text-red-600 mt-1.5">{error}</p>}
    </div>
  );
}
