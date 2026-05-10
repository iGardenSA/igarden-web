import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Activity, Wrench, FileCheck, Clock } from "lucide-react";
import { BreadcrumbSchema } from "@/components/shared/SchemaJsonLd";

export const metadata: Metadata = {
  title: "دراسات ميدانية — أنظمة قيد التشغيل | iGarden",
  description:
    "iGarden تُوثّق ما تُشغّله في الميدان بأرقام وقراءات واضحة. أسماء العملاء محفوظة احتراماً للخصوصية.",
  alternates: { canonical: "https://igarden.sa/case-studies" },
  openGraph: {
    title: "دراسات ميدانية — أنظمة قيد التشغيل | iGarden",
    description: "بيانات ميدانية حقيقية من أنظمة قيد التشغيل — pH وEC والحرارة والاستهلاك.",
    images: [{ url: "/api/og?title=%D8%AF%D8%B1%D8%A7%D8%B3%D8%A7%D8%AA+%D9%85%D9%8A%D8%AF%D8%A7%D9%86%D9%8A%D8%A9+%E2%80%94+iGarden&sub=%D8%A3%D9%86%D8%B8%D9%85%D8%A9+%D9%82%D9%8A%D8%AF+%D8%A7%D9%84%D8%AA%D8%B4%D8%BA%D9%8A%D9%84", width: 1200, height: 630 }],
    type: "website",
    locale: "ar_SA",
  },
  twitter: {
    card: "summary_large_image",
    title: "دراسات ميدانية | iGarden",
    description: "بيانات حقيقية من أنظمة قيد التشغيل في الميدان.",
    images: ["/api/og?title=%D8%AF%D8%B1%D8%A7%D8%B3%D8%A7%D8%AA+%D9%85%D9%8A%D8%AF%D8%A7%D9%86%D9%8A%D8%A9"],
  },
};

type Phase = "live" | "installing" | "contracted";

const PHASE_META: Record<Phase, { label: string; color: string; icon: typeof Activity }> = {
  live:       { label: "تشغيل مباشر", color: "bg-[#A5D63F]/15 text-[#2E6B1A] border-[#7CB342]/30", icon: Activity },
  installing: { label: "قيد التركيب", color: "bg-amber-50 text-amber-800 border-amber-200",        icon: Wrench },
  contracted: { label: "متعاقد",       color: "bg-blue-50 text-blue-800 border-blue-200",           icon: FileCheck },
};

const CASES = [
  {
    id: "001",
    region: "منطقة جنوبية",
    type: "Sprouting Room",
    phase: "live" as Phase,
    monitors: ["درجة الحرارة", "الرطوبة النسبية", "دورات التشغيل", "استهلاك المياه"],
    note: "تشغيل مستمر منذ 2025. بيانات pH وEC تُسجَّل بشكل آلي.",
  },
  {
    id: "002",
    region: "المنطقة الغربية",
    type: "Raft DWC",
    phase: "installing" as Phase,
    monitors: ["pH", "EC", "درجة حرارة الماء", "التغذية", "التدخلات التشغيلية"],
    note: "مرشح لـ Pilot الامتثال — أول تجربة لتحويل البيانات التشغيلية إلى سجلات قابلة للمراجعة.",
  },
  {
    id: "003",
    region: "الأحساء",
    type: "Dutch Buckets",
    phase: "contracted" as Phase,
    monitors: ["الري", "التغذية", "تصريف المحلول", "حرارة الجذور"],
    note: "عقد موقّع. التركيب مجدول ضمن خطة التوسع في المنطقة الشرقية.",
  },
];

const BREADCRUMB = [
  { name: "الرئيسية", url: "/" },
  { name: "دراسات ميدانية", url: "/case-studies" },
];

export default function CaseStudiesPage() {
  return (
    <>
      <BreadcrumbSchema items={BREADCRUMB} />
      {/* Hero */}
      <section className="bg-[#0F3D2E] py-20 md:py-24" dir="rtl">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-[#A5D63F] text-sm font-bold uppercase tracking-widest mb-4">
            ما نُشغّله في الميدان
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#FAFAF7] mb-5 leading-tight">
            دراسات ميدانية
          </h1>
          <p className="text-white/75 text-lg leading-relaxed max-w-2xl mb-3">
            نُوثّق ما نُشغّله بأرقام وقراءات واضحة. أسماء العملاء محفوظة
            احتراماً للخصوصية، وتُستخدم الأكواد في العرض العام.
          </p>
          <p className="text-white/50 text-sm">
            يُحدَّث هذا القسم مع كل مشروع جديد يدخل التشغيل.
          </p>
        </div>
      </section>

      {/* Cases */}
      <section className="bg-[#FAFAF7] py-16" dir="rtl">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="space-y-8">
            {CASES.map((c) => {
              const meta = PHASE_META[c.phase];
              const PhaseIcon = meta.icon;
              return (
                <div
                  key={c.id}
                  className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm overflow-hidden"
                >
                  <div className="flex items-start justify-between gap-4 p-7 pb-5">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-mono text-2xl font-bold text-[#0F3D2E]">{c.id}</span>
                        <span className="text-[#6B7280] text-lg">—</span>
                        <span className="text-xl font-bold text-[#0F3D2E]">{c.region}</span>
                      </div>
                      <p className="text-[#6B7280] text-sm">
                        نوع النظام:{" "}
                        <span className="font-medium text-[#1A1A1A] font-mono">{c.type}</span>
                      </p>
                    </div>
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold border ${meta.color} flex-shrink-0`}
                    >
                      <PhaseIcon className="w-3.5 h-3.5" aria-hidden="true" />
                      {meta.label}
                    </span>
                  </div>

                  <div className="px-7 pb-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#6B7280] mb-3">
                      ما نراقبه
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {c.monitors.map((m) => (
                        <span
                          key={m}
                          className="bg-[#0F3D2E]/5 text-[#0F3D2E] text-sm px-3 py-1 rounded-full border border-[#0F3D2E]/10 font-medium"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mx-7 mb-7 p-4 bg-[#FAFAF7] rounded-xl border border-[#E5E7EB]">
                    <p className="text-[#6B7280] text-sm leading-relaxed">{c.note}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex items-center gap-3 p-5 bg-white rounded-2xl border border-[#E5E7EB]">
            <Clock className="w-5 h-5 text-[#7CB342] flex-shrink-0" aria-hidden="true" />
            <p className="text-[#6B7280] text-sm">
              مشاريع إضافية قيد الإعداد التوثيقي — ستظهر هنا عند الانتهاء من مرحلة التحقق
              الميداني.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0F3D2E] py-16" dir="rtl">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#FAFAF7] mb-4">
            مشروعك يمكن أن يكون الرقم التالي.
          </h2>
          <p className="text-white/70 leading-relaxed mb-8">
            تواصل معنا وسنُقيّم مشروعك ونقترح النظام المناسب خلال يوم عمل.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#7CB342] hover:bg-[#A5D63F] text-[#0F3D2E] rounded-lg font-semibold text-base transition-colors"
          >
            اطلب تقييم مزرعتك
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
