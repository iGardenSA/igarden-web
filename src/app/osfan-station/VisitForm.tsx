"use client";

import { useState } from "react";
import { createBrowserSupabase } from "@/lib/supabase";

type VisitType = "individual" | "group" | "investor" | "press";

const VISIT_TYPES: { value: VisitType; label: string }[] = [
  { value: "individual", label: "فردي" },
  { value: "group", label: "مجموعة" },
  { value: "investor", label: "استثماري" },
  { value: "press", label: "صحفي / إعلامي" },
];

export function VisitForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = {
      full_name: (form.elements.namedItem("full_name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      preferred_date: (form.elements.namedItem("preferred_date") as HTMLInputElement).value,
      visit_type: (form.elements.namedItem("visit_type") as HTMLSelectElement).value,
    };

    try {
      const supabase = createBrowserSupabase();
      const { error } = await supabase.from("leads").insert({
        full_name: data.full_name,
        phone: data.phone,
        message: `طلب زيارة عسفان — النوع: ${data.visit_type}، التاريخ المقترح: ${data.preferred_date}`,
        channel: "website",
        status: "new",
        source_url: typeof window !== "undefined" ? window.location.href : null,
        interest: "osfan_visit",
      });

      if (error) throw error;
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-lime/10 border border-lime rounded-card p-8 text-center">
        <p className="h3 text-deep-green mb-2">وصل طلبك ✓</p>
        <p className="body-base text-medium-gray">سيتواصل معك فريقنا خلال 24 ساعة لتأكيد الموعد.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="visit-name" className="block text-sm font-medium text-deep-green mb-1.5">
            الاسم الكامل <span className="text-lime">*</span>
          </label>
          <input
            id="visit-name"
            name="full_name"
            type="text"
            required
            placeholder="محمد العمري"
            className="w-full px-4 py-3 rounded-card border border-light-gray bg-white text-dark-text placeholder:text-medium-gray/60 focus:outline-none focus:border-lime focus:ring-1 focus:ring-lime transition-colors"
          />
        </div>
        <div>
          <label htmlFor="visit-phone" className="block text-sm font-medium text-deep-green mb-1.5">
            رقم الجوال <span className="text-lime">*</span>
          </label>
          <input
            id="visit-phone"
            name="phone"
            type="tel"
            required
            placeholder="05xxxxxxxx"
            dir="ltr"
            className="w-full px-4 py-3 rounded-card border border-light-gray bg-white text-dark-text placeholder:text-medium-gray/60 focus:outline-none focus:border-lime focus:ring-1 focus:ring-lime transition-colors text-start"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="visit-date" className="block text-sm font-medium text-deep-green mb-1.5">
            تاريخ مقترح
          </label>
          <input
            id="visit-date"
            name="preferred_date"
            type="date"
            className="w-full px-4 py-3 rounded-card border border-light-gray bg-white text-dark-text focus:outline-none focus:border-lime focus:ring-1 focus:ring-lime transition-colors"
          />
        </div>
        <div>
          <label htmlFor="visit-type" className="block text-sm font-medium text-deep-green mb-1.5">
            نوع الزيارة
          </label>
          <select
            id="visit-type"
            name="visit_type"
            className="w-full px-4 py-3 rounded-card border border-light-gray bg-white text-dark-text focus:outline-none focus:border-lime focus:ring-1 focus:ring-lime transition-colors"
          >
            {VISIT_TYPES.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-lime text-white font-medium py-3.5 rounded-card hover:bg-bright-lime transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "جارٍ الإرسال…" : "احجز الزيارة"}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-600 text-center">
          تعذّر إرسال الطلب. حاول مرة أخرى أو تواصل معنا مباشرة.
        </p>
      )}
    </form>
  );
}
