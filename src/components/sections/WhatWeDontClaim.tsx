import { AlertCircle } from "lucide-react";

const CLAIMS = [
  {
    claim: "لا ندّعي أنّنا نعمل بالذكاء الاصطناعي كميزة تسويقية.",
    reality: "نستخدم خوارزميات تحكم ميدانية مُختبَرة — لا buzzwords.",
  },
  {
    claim: "لا ندّعي أنّ لدينا عملاء تجاريين حالياً.",
    reality: "نحن في مرحلة الإطلاق — 2026 هو أوّل عام تشغيل تجاري.",
  },
  {
    claim: "لا ندّعي أنّنا الحلّ الوحيد أو الأرخص.",
    reality: "نحن الأنسب لمن يريد توطيناً حقيقياً لا استيراداً.",
  },
  {
    claim: "لا ندّعي توفيراً في المياه دون قياس ميداني.",
    reality: "الأرقام من محطّة عسفان — ليست من أدبيات الشركات الأجنبية.",
  },
];

export function WhatWeDontClaim() {
  return (
    <section className="bg-[#FAFAF7] py-20" dir="rtl">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-3xl mb-12">
          <p className="text-[#7CB342] text-sm font-bold uppercase tracking-widest mb-3">
            الشفافية · ما لا ندّعيه
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F3D2E] mb-5 leading-tight">
            الصدق أصل — ليس تمييزاً تسويقياً.
          </h2>
          <p className="text-[#6B7280] text-lg leading-relaxed">
            نُفضّل أن تعرف بالضبط ما نقدّمه وما لا نقدّمه، قبل أي محادثة.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CLAIMS.map(({ claim, reality }) => (
            <div
              key={claim}
              className="bg-white border border-[#E5E7EB] rounded-2xl p-7 flex flex-col gap-3"
            >
              <div className="flex items-start gap-3">
                <AlertCircle
                  className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <p className="text-[#1A1A1A] font-semibold text-base leading-snug">
                  {claim}
                </p>
              </div>
              <p className="text-[#6B7280] text-sm leading-relaxed pr-8">
                {reality}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
