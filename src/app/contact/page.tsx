"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { createBrowserSupabase } from "@/lib/supabase";
import {
  leadSchema,
  type LeadFormData,
  LEAD_TYPES,
  INTERESTS,
} from "@/lib/lead-schema";
import { CONTACT, COMPANY } from "@/lib/constants";

type SubmitState = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
    defaultValues: { lead_type: "unknown", interested_in: [] },
  });

  const onSubmit = async (data: LeadFormData) => {
    setSubmitState("submitting");
    setErrorMessage("");

    try {
      const supabase = createBrowserSupabase();
      const { error } = await supabase.from("leads").insert({
        full_name: data.full_name,
        email: data.email || null,
        phone: data.phone || null,
        company: data.company || null,
        lead_type: data.lead_type,
        interested_in: data.interested_in?.length ? data.interested_in : null,
        subject: data.subject || null,
        message: data.message,
        channel: "website",
        status: "new",
        source_url:
          typeof window !== "undefined" ? window.location.href : null,
        user_agent:
          typeof navigator !== "undefined" ? navigator.userAgent : null,
      });

      if (error) {
        console.error("Supabase error:", error);
        throw new Error("تعذّر إرسال الرسالة. حاول مرة أخرى.");
      }

      setSubmitState("success");
      reset();
    } catch (err) {
      setSubmitState("error");
      setErrorMessage(
        err instanceof Error ? err.message : "حدث خطأ غير متوقع"
      );
    }
  };

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--color-brand-600)] via-[var(--color-brand-500)] to-[var(--color-brand-600)] text-white">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, var(--color-accent-500) 0%, transparent 40%), radial-gradient(circle at 80% 70%, var(--color-accent-300) 0%, transparent 40%)",
          }}
        />
        <div className="container-igarden relative py-20 md:py-24">
          <div className="max-w-3xl">
            <p className="heading-eyebrow mb-6 text-[var(--color-accent-300)]">
              تواصل معنا
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-white mb-6">
              حدّثنا عن مشروعك.
              <br />
              <span className="text-[var(--color-accent-300)]">
                نحن نستمع.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl">
              احجز استشارة مجانية، اسأل عن منتجاتنا، أو اقترح شراكة — فريقنا
              يرد على جميع الرسائل خلال 72 ساعة عمل.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="container-igarden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-16">
            <InternalContactCard
              icon={<Phone className="h-6 w-6" />}
              title="اتصال مباشر"
              subtitle="أيام العمل · 9 ص - 6 م"
              value={CONTACT.phone}
              href={"tel:" + CONTACT.phoneE164}
              ltr
            />
            <InternalContactCard
              icon={<Mail className="h-6 w-6" />}
              title="البريد الإلكتروني"
              subtitle="للاستفسارات التفصيلية"
              value={CONTACT.email}
              href={"mailto:" + CONTACT.email}
              ltr
              accent
            />
            <ExternalContactCard
              icon={<MessageSquare className="h-6 w-6" />}
              title="واتساب"
              subtitle="رد سريع خلال ساعات العمل"
              value="تواصل عبر واتساب"
              href={CONTACT.whatsapp}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12 items-start">
            <aside className="lg:col-span-2 lg:sticky lg:top-28">
              <div className="bg-[var(--color-brand-600)] text-white rounded-2xl p-7 md:p-8">
                <h2 className="text-2xl font-bold mb-6 text-white">
                  {COMPANY.legalAr}
                </h2>
                <div className="space-y-5">
                  <InfoRow
                    icon={<MapPin className="h-5 w-5" />}
                    label="المقر"
                  >
                    {COMPANY.hq}
                  </InfoRow>
                  <InfoRow
                    icon={<Clock className="h-5 w-5" />}
                    label="ساعات العمل"
                  >
                    الأحد - الخميس
                    <br />
                    9:00 ص - 6:00 م
                  </InfoRow>
                  <InfoRow
                    icon={<Phone className="h-5 w-5" />}
                    label="الهاتف"
                  >
                    <span dir="ltr">{CONTACT.phone}</span>
                  </InfoRow>
                  <InfoRow
                    icon={<Mail className="h-5 w-5" />}
                    label="البريد"
                  >
                    <span dir="ltr">{CONTACT.email}</span>
                  </InfoRow>
                </div>
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-sm text-white/70 mb-2">
                    الأوقات المتوقعة للرد:
                  </p>
                  <ul className="text-sm space-y-1.5 text-white/85">
                    <li>اتصال: فوري خلال ساعات العمل</li>
                    <li>واتساب: خلال ساعتين</li>
                    <li>بريد/نموذج: خلال 72 ساعة</li>
                  </ul>
                </div>
              </div>
            </aside>

            <div className="lg:col-span-3">
              <div className="bg-[var(--color-surface)] rounded-2xl p-7 md:p-10 border border-[var(--color-border)]">
                <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-brand-600)] mb-2">
                  احجز استشارتك المجانية
                </h2>
                <p className="text-[var(--color-muted)] mb-8">
                  املأ النموذج التالي وسنتواصل معك خلال 72 ساعة بخطة مبدئية.
                </p>

                {submitState === "success" && (
                  <div className="mb-6 p-5 rounded-xl bg-[var(--color-accent-100)] border border-[var(--color-accent-500)] flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-[var(--color-accent-700)] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-[var(--color-brand-700)] mb-1">
                        تم استلام رسالتك بنجاح
                      </p>
                      <p className="text-sm text-[var(--color-brand-600)]">
                        سنتواصل معك خلال 72 ساعة على البيانات التي أدخلتها.
                      </p>
                    </div>
                  </div>
                )}

                {submitState === "error" && (
                  <div className="mb-6 p-5 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3">
                    <AlertCircle className="h-6 w-6 text-red-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-red-800 mb-1">
                        تعذّر الإرسال
                      </p>
                      <p className="text-sm text-red-700">{errorMessage}</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <FormField
                    label="الاسم الكامل"
                    required
                    error={errors.full_name?.message}
                  >
                    <input
                      type="text"
                      {...register("full_name")}
                      className="input-igarden"
                      placeholder="الاسم الكامل"
                    />
                  </FormField>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <FormField
                      label="البريد الإلكتروني"
                      error={errors.email?.message}
                    >
                      <input
                        type="email"
                        {...register("email")}
                        className="input-igarden"
                        placeholder="name@example.com"
                        dir="ltr"
                      />
                    </FormField>
                    <FormField
                      label="رقم الجوال"
                      error={errors.phone?.message}
                    >
                      <input
                        type="tel"
                        {...register("phone")}
                        className="input-igarden"
                        placeholder="+966 5X XXX XXXX"
                        dir="ltr"
                      />
                    </FormField>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <FormField label="الجهة / الشركة (اختياري)">
                      <input
                        type="text"
                        {...register("company")}
                        className="input-igarden"
                        placeholder="اسم الجهة"
                      />
                    </FormField>
                    <FormField label="نوع الجهة">
                      <select
                        {...register("lead_type")}
                        className="input-igarden"
                      >
                        {LEAD_TYPES.map((t) => (
                          <option key={t.value} value={t.value}>
                            {t.label}
                          </option>
                        ))}
                      </select>
                    </FormField>
                  </div>

                  <FormField label="مهتم بـ (اختر ما يناسب)">
                    <Controller
                      control={control}
                      name="interested_in"
                      render={({ field }) => (
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                          {INTERESTS.map((item) => {
                            const checked =
                              field.value?.includes(item.value) ?? false;
                            return (
                              <InterestChip
                                key={item.value}
                                label={item.label}
                                checked={checked}
                                onToggle={(next) => {
                                  const current = field.value ?? [];
                                  field.onChange(
                                    next
                                      ? [...current, item.value]
                                      : current.filter(
                                          (v) => v !== item.value
                                        )
                                  );
                                }}
                              />
                            );
                          })}
                        </div>
                      )}
                    />
                  </FormField>

                  <FormField label="الموضوع (اختياري)">
                    <input
                      type="text"
                      {...register("subject")}
                      className="input-igarden"
                      placeholder="مثال: استفسار عن iGarden Tower"
                    />
                  </FormField>

                  <FormField
                    label="الرسالة"
                    required
                    error={errors.message?.message}
                  >
                    <textarea
                      {...register("message")}
                      rows={5}
                      className="input-igarden resize-y"
                      placeholder="أخبرنا عن مشروعك واحتياجاتك — كلما أعطيتنا تفاصيل أكثر، ساعدناك بدقة أكبر."
                    />
                  </FormField>

                  <div className="pt-3">
                    <Button
                      type="submit"
                      variant="primary"
                      size="xl"
                      disabled={submitState === "submitting"}
                      className="w-full md:w-auto"
                    >
                      {submitState === "submitting" ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" />
                          جاري الإرسال...
                        </>
                      ) : (
                        <>
                          إرسال الرسالة
                          <Send className="h-4 w-4" />
                        </>
                      )}
                    </Button>
                    <p className="text-xs text-[var(--color-muted)] mt-4 leading-relaxed">
                      بإرسالك هذه الرسالة، توافق على{" "}
                      <Link
                        href="/privacy"
                        className="text-[var(--color-brand-600)] underline hover:text-[var(--color-accent-600)]"
                      >
                        سياسة الخصوصية
                      </Link>{" "}
                      الخاصة بنا. لن نشارك بياناتك مع أي طرف ثالث.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ============ Internal Components ============ */

type InternalContactCardProps = {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  value: string;
  href: string;
  ltr?: boolean;
  accent?: boolean;
};

function InternalContactCard(props: InternalContactCardProps) {
  const accent = props.accent ?? false;
  const cardClass = accent
    ? "bg-[var(--color-accent-500)] border-[var(--color-accent-500)] text-[var(--color-brand-700)] hover:bg-[var(--color-accent-600)]"
    : "bg-white border-[var(--color-border)] hover:border-[var(--color-brand-300)]";
  const iconClass = accent
    ? "bg-[var(--color-brand-700)]/10 text-[var(--color-brand-700)]"
    : "bg-[var(--color-brand-50)] text-[var(--color-brand-600)]";
  const labelClass = accent
    ? "text-[var(--color-brand-700)]/70"
    : "text-[var(--color-muted)]";
  const valueClass = accent
    ? "text-[var(--color-brand-700)]"
    : "text-[var(--color-brand-600)]";
  const wrapperClass =
    "group block rounded-2xl p-6 md:p-7 border-2 transition-all duration-300 hover:-translate-y-1 " +
    cardClass;
  const valueDir = props.ltr ? "ltr" : "rtl";

  return (
    <a href={props.href} className={wrapperClass}>
      <div
        className={
          "h-12 w-12 rounded-xl flex items-center justify-center mb-4 " +
          iconClass
        }
      >
        {props.icon}
      </div>
      <p
        className={
          "text-xs font-bold uppercase tracking-wider mb-1 " + labelClass
        }
      >
        {props.title}
      </p>
      <p className={"text-base font-bold mb-2 " + valueClass} dir={valueDir}>
        {props.value}
      </p>
      <p className={"text-xs " + labelClass}>{props.subtitle}</p>
    </a>
  );
}

type ExternalContactCardProps = {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  value: string;
  href: string;
};

function ExternalContactCard(props: ExternalContactCardProps) {
  const wrapperClass =
    "group block rounded-2xl p-6 md:p-7 border-2 transition-all duration-300 hover:-translate-y-1 bg-white border-[var(--color-border)] hover:border-[var(--color-brand-300)]";
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      className={wrapperClass}
    >
      <div className="h-12 w-12 rounded-xl flex items-center justify-center mb-4 bg-[var(--color-brand-50)] text-[var(--color-brand-600)]">
        {props.icon}
      </div>
      <p className="text-xs font-bold uppercase tracking-wider mb-1 text-[var(--color-muted)]">
        {props.title}
      </p>
      <p className="text-base font-bold mb-2 text-[var(--color-brand-600)]">
        {props.value}
      </p>
      <p className="text-xs text-[var(--color-muted)]">{props.subtitle}</p>
    </a>
  );
}

type InterestChipProps = {
  label: string;
  checked: boolean;
  onToggle: (next: boolean) => void;
};

function InterestChip(props: InterestChipProps) {
  const boxClass = props.checked
    ? "border-[var(--color-accent-500)] bg-[var(--color-accent-50)] text-[var(--color-brand-700)] font-semibold"
    : "border-[var(--color-border)] bg-white text-[var(--color-foreground)] hover:border-[var(--color-brand-300)]";
  const markClass = props.checked
    ? "bg-[var(--color-accent-500)] border-[var(--color-accent-500)]"
    : "border-[var(--color-border)]";
  const wrapperClass =
    "flex items-center gap-2 px-3 py-2.5 rounded-xl border-2 cursor-pointer transition-all text-sm " +
    boxClass;
  const markFullClass =
    "h-4 w-4 rounded border-2 shrink-0 flex items-center justify-center " +
    markClass;

  return (
    <label className={wrapperClass}>
      <input
        type="checkbox"
        className="sr-only"
        checked={props.checked}
        onChange={(e) => props.onToggle(e.target.checked)}
      />
      <span className={markFullClass}>
        {props.checked && <CheckCircle2 className="h-3 w-3 text-white" />}
      </span>
      {props.label}
    </label>
  );
}

type InfoRowProps = {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
};

function InfoRow(props: InfoRowProps) {
  return (
    <div className="flex items-start gap-3">
      <div className="shrink-0 h-9 w-9 rounded-lg bg-[var(--color-accent-500)]/15 text-[var(--color-accent-300)] flex items-center justify-center mt-0.5">
        {props.icon}
      </div>
      <div>
        <p className="text-xs text-white/60 uppercase tracking-wider mb-1">
          {props.label}
        </p>
        <p className="text-sm md:text-base text-white leading-relaxed">
          {props.children}
        </p>
      </div>
    </div>
  );
}

type FormFieldProps = {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
};

function FormField(props: FormFieldProps) {
  return (
    <div>
      <label className="block text-sm font-semibold text-[var(--color-foreground)] mb-2">
        {props.label}
        {props.required && <span className="text-red-500 mr-1">*</span>}
      </label>
      {props.children}
      {props.error && (
        <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1">
          <AlertCircle className="h-3 w-3" />
          {props.error}
        </p>
      )}
    </div>
  );
}