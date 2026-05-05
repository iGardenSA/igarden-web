"use client";

import { useState } from "react";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { createBrowserSupabase } from "@/lib/supabase";
import {
  appWaitlistSchema,
  APP_INTEREST_LEVELS,
  type AppWaitlistData,
} from "@/lib/lead-schema";

type Status = "idle" | "submitting" | "success" | "error" | "duplicate";

interface Props {
  source?: string;
  variant?: "default" | "compact";
}

export default function AppWaitlistForm({
  source = "website",
  variant = "default",
}: Props) {
  const [formData, setFormData] = useState<AppWaitlistData>({
    email: "",
    phone: "",
    city: "",
    interest_level: "beginner",
    source,
  });

  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof AppWaitlistData, string>>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});

    const result = appWaitlistSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: typeof errors = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof AppWaitlistData;
        if (!fieldErrors[field]) fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setStatus("submitting");

    try {
      const supabase = createBrowserSupabase();

      const payload = {
        email: result.data.email.trim().toLowerCase(),
        phone: result.data.phone?.trim() || null,
        city: result.data.city?.trim() || null,
        interest_level: result.data.interest_level,
        source: result.data.source,
        metadata: {
          user_agent: typeof window !== "undefined" ? window.navigator.userAgent : null,
          referrer: typeof document !== "undefined" ? document.referrer : null,
        },
      };

      const { error } = await supabase.from("app_waitlist").insert(payload);

      if (error) {
        if (error.code === "23505") {
          setStatus("duplicate");
          return;
        }
        console.error("[AppWaitlist] Insert error:", error);
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch (err) {
      console.error("[AppWaitlist] Unexpected error:", err);
      setStatus("error");
    }
  }

  // ─────────────────────────────────────────────────────────
  // شاشة النجاح — كريمي بإطار واضح وتباين عالٍ
  // ─────────────────────────────────────────────────────────
  if (status === "success") {
    return (
      <div className="bg-cream rounded-card p-8 lg:p-12 text-center shadow-2xl border-2 border-lime">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-lime/25 flex items-center justify-center ring-4 ring-lime/10">
          <CheckCircle2 className="w-12 h-12 text-brand-600" aria-hidden strokeWidth={2.5} />
        </div>
        <h3 className="text-deep-green text-2xl lg:text-3xl font-bold mb-3">
          تم — أنت في القائمة 🌱
        </h3>
        <p className="text-deep-green/85 text-base lg:text-lg leading-relaxed max-w-md mx-auto">
          سنرسل لك تحديثات مباشرة من الميدان — بدون إزعاج.
          <br />
          <span className="font-semibold">أول نسخة تجريبية ستصلك قبل الإطلاق الرسمي.</span>
        </p>
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────
  // شاشة "مسجَّل من قبل"
  // ─────────────────────────────────────────────────────────
  if (status === "duplicate") {
    return (
      <div className="bg-cream rounded-card p-8 lg:p-12 text-center shadow-2xl border-2 border-brand-600/50">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-brand-600/15 flex items-center justify-center ring-4 ring-brand-600/5">
          <CheckCircle2 className="w-12 h-12 text-brand-600" aria-hidden strokeWidth={2.5} />
        </div>
        <h3 className="text-deep-green text-2xl lg:text-3xl font-bold mb-3">
          مسجَّل من قبل ✓
        </h3>
        <p className="text-deep-green/85 text-base lg:text-lg leading-relaxed max-w-md mx-auto">
          هذا البريد موجود في قائمتنا. سنبقى على تواصل.
        </p>
      </div>
    );
  }

  const isCompact = variant === "compact";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`bg-white rounded-card border border-deep-green/10 ${
        isCompact ? "p-5 lg:p-6" : "p-6 lg:p-8"
      } shadow-soft`}
    >
      {!isCompact && (
        <div className="mb-6 text-center">
          <h3 className="text-deep-green text-xl lg:text-2xl font-bold mb-2">
            انضم لقائمة الانتظار
          </h3>
          <p className="text-medium-gray text-sm">
            أول نسخة تجريبية للمسجَّلين أولاً — بدون رسائل تسويقية مزعجة.
          </p>
        </div>
      )}

      <div className="space-y-4">
        <div>
          <label htmlFor="waitlist-email" className="block text-deep-green text-sm font-semibold mb-2">
            البريد الإلكتروني <span className="text-error">*</span>
          </label>
          <input
            id="waitlist-email"
            type="email"
            inputMode="email"
            autoComplete="email"
            dir="ltr"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            disabled={status === "submitting"}
            className={`w-full px-4 py-3 rounded-button border text-deep-green placeholder:text-medium-gray/60 focus:outline-none focus:ring-2 focus:ring-brand-600/30 disabled:opacity-50 ${
              errors.email
                ? "border-error focus:border-error"
                : "border-light-gray focus:border-brand-600"
            }`}
            placeholder="you@example.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="text-error text-xs mt-1.5 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" aria-hidden />
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label className="block text-deep-green text-sm font-semibold mb-2">
            مستوى اهتمامك <span className="text-error">*</span>
          </label>
          <div className="space-y-2">
            {APP_INTEREST_LEVELS.map((level) => {
              const checked = formData.interest_level === level.value;
              return (
                <label
                  key={level.value}
                  className={`flex items-start gap-3 p-3 rounded-button border-2 cursor-pointer transition-colors ${
                    checked
                      ? "border-brand-600 bg-brand-600/5"
                      : "border-light-gray hover:border-brand-600/40"
                  }`}
                >
                  <input
                    type="radio"
                    name="interest_level"
                    value={level.value}
                    checked={checked}
                    onChange={() =>
                      setFormData({ ...formData, interest_level: level.value })
                    }
                    disabled={status === "submitting"}
                    className="mt-1 w-4 h-4 text-brand-600 border-light-gray focus:ring-brand-600 shrink-0"
                  />
                  <div className="flex-1">
                    <div className="text-deep-green font-semibold text-sm">
                      {level.label}
                    </div>
                    <div className="text-medium-gray text-xs mt-0.5">
                      {level.desc}
                    </div>
                  </div>
                </label>
              );
            })}
          </div>
          {errors.interest_level && (
            <p className="text-error text-xs mt-1.5 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" aria-hidden />
              {errors.interest_level}
            </p>
          )}
        </div>

        {!isCompact && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="waitlist-phone" className="block text-deep-green text-sm font-semibold mb-2">
                رقم الجوال <span className="text-medium-gray text-xs font-normal">(اختياري)</span>
              </label>
              <input
                id="waitlist-phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                dir="ltr"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                disabled={status === "submitting"}
                className={`w-full px-4 py-3 rounded-button border text-deep-green placeholder:text-medium-gray/60 focus:outline-none focus:ring-2 focus:ring-brand-600/30 disabled:opacity-50 ${
                  errors.phone
                    ? "border-error focus:border-error"
                    : "border-light-gray focus:border-brand-600"
                }`}
                placeholder="+966 5x xxx xxxx"
              />
              {errors.phone && (
                <p className="text-error text-xs mt-1.5">{errors.phone}</p>
              )}
            </div>

            <div>
              <label htmlFor="waitlist-city" className="block text-deep-green text-sm font-semibold mb-2">
                المدينة <span className="text-medium-gray text-xs font-normal">(اختياري)</span>
              </label>
              <input
                id="waitlist-city"
                type="text"
                autoComplete="address-level2"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                disabled={status === "submitting"}
                className="w-full px-4 py-3 rounded-button border border-light-gray text-deep-green placeholder:text-medium-gray/60 focus:outline-none focus:ring-2 focus:ring-brand-600/30 focus:border-brand-600 disabled:opacity-50"
                placeholder="جدة، الرياض، الدمام..."
              />
            </div>
          </div>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full bg-brand-600 hover:bg-deep-green text-cream font-semibold py-3.5 rounded-button transition-colors focus:outline-none focus:ring-2 focus:ring-brand-600/40 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" aria-hidden />
              <span>جارٍ التسجيل...</span>
            </>
          ) : (
            <span>انضم لقائمة الانتظار</span>
          )}
        </button>

        {status === "error" && (
          <div className="flex items-start gap-2 p-3 bg-error/10 border border-error/30 rounded-button">
            <AlertCircle className="w-4 h-4 text-error shrink-0 mt-0.5" aria-hidden />
            <p className="text-error text-xs leading-relaxed">
              تعذّر التسجيل الآن. حاول مرة أخرى، أو راسلنا على{" "}
              <a href="mailto:info@igarden.sa" className="underline font-semibold">
                info@igarden.sa
              </a>
              .
            </p>
          </div>
        )}

        <p className="text-medium-gray text-xs text-center leading-relaxed">
          بالتسجيل أنت توافق على{" "}
          <a href="/privacy" className="text-brand-600 underline-offset-2 hover:underline">
            سياسة الخصوصية
          </a>
          . لن نشارك بياناتك مع طرف ثالث.
        </p>
      </div>
    </form>
  );
}
