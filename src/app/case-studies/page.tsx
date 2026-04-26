import type { Metadata } from "next";
import Link from "next/link";
import {
  Layers, Fish, Building2, MapPin, Clock,
  ArrowLeft, Bell, BarChart2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/ui/fade-in";
import { GlowAccent } from "@/components/ui/glow-accent";

export const metadata: Metadata = {
  title: "دراسات الحالة",
  description:
    "دراسات حالة حقيقية من محميات iGarden التشغيلية — نتائج موثّقة في توفير المياه والإنتاجية.",
};

const CASE_STUDIES = [
  {
    icon: <Layers className="h-8 w-8" />,
    location: "عسفان، جدة",
    title: "مزرعة عمودية في عسفان",
    sector: "تجاري · خضروات ورقية",
    area: "200 م²",
    duration: "12 شهر تشغيل",
    results: [
      { value: "95%", label: "توفير مياه" },
      { value: "3x", label: "إنتاجية" },
    ],
    system: "iGarden Tower + Smart OS",
  },
  {
    icon: <Fish className="h-8 w-8" />,
    location: "شمال جدة",
    title: "نظام Aquaponic متكامل",
    sector: "تعليمي · مدرسة زراعية",
    area: "150 م²",
    duration: "8 أشهر تشغيل",
    results: [
      { value: "90%", label: "إعادة تدوير" },
      { value: "2x", label: "إنتاج مزدوج" },
    ],
    system: "Aquaponics + Smart OS",
  },
  {
    icon: <Building2 className="h-8 w-8" />,
    location: "جدة",
    title: "بيت محمي ذكي",
    sector: "تجاري · محاصيل متعددة",
    area: "500 م²",
    duration: "6 أشهر تشغيل",
    results: [
      { value: "40%", label: "كفاءة طاقة" },
      { value: "6 محاصيل", label: "سنوياً" },
    ],
    system: "Smart Greenhouse + Smart OS",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* ============================================================
          Hero
          ============================================================ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--color-brand-600)] via-[var(--color-brand-500)] to-[var(--color-brand-600)] text-white">
        <GlowAccent position="top-right" intensity="subtle" color="lime" />
        <div className="container-igarden relative py-20 md:py-28">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-accent-500)]/30 bg-[var(--color-accent-500)]/10 text-[var(--color-accent-300)] text-lg font-semibold mb-8">
              <BarChart2 className="h-4 w-4" />
              <span>أدلة نجاح ميدانية</span>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-white mb-6">
              دراسات حالة من
              <br />
              <span className="text-[var(--color-accent-300)]">محمياتنا التشغيلية</span>
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-3xl">
              محميات قائمة في جدة تستخدم iGarden Smart OS — اكتشف النتائج الحقيقية الموثّقة
              ميدانياً.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ============================================================
          Case Studies Grid
          ============================================================ */}
      <section className="bg-[var(--color-surface)] section-padding">
        <div className="container-igarden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CASE_STUDIES.map((cs, i) => (
              <FadeIn key={cs.title} delay={i * 120}>
                <CaseStudyCard study={cs} />
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={400}>
            <div className="mt-10 p-6 bg-white rounded-2xl border border-[var(--color-border)] text-center shadow-[var(--shadow-soft)]">
              <div className="inline-flex items-center gap-2 text-[var(--color-accent-600)] bg-[var(--color-accent-100)] px-4 py-2 rounded-full text-lg font-bold mb-3">
                <Clock className="h-4 w-4" />
                <span>قيد التوثيق</span>
              </div>
              <p className="text-[var(--color-muted)] text-lg leading-relaxed max-w-2xl mx-auto">
                سيتم نشر التفاصيل الكاملة لكل دراسة حالة قريباً بعد الحصول على موافقة العملاء
                المكتوبة وإتمام التحقق من البيانات.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ============================================================
          CTA
          ============================================================ */}
      <section className="bg-[var(--color-brand-600)] text-white section-padding">
        <div className="container-igarden">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <p className="heading-eyebrow mb-4 text-[var(--color-accent-300)]">كن التالي</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                هل تريد أن تكون حالتك القادمة؟
              </h2>
              <p className="text-lg text-white/80 leading-relaxed mb-10">
                انضم إلى شبكة محمياتنا التشغيلية وكن جزءاً من مستقبل الزراعة الذكية في
                المملكة.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button variant="accent" size="lg" asChild>
                  <Link href="/contact">
                    تواصل معنا
                    <ArrowLeft className="rotate-180" />
                  </Link>
                </Button>
                <Button variant="light" size="lg" asChild>
                  <Link href="/products">
                    <Bell className="h-4 w-4" />
                    تابعنا للتحديثات
                  </Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

/* ============================================================
   مكونات داخلية
   ============================================================ */

function CaseStudyCard({
  study,
}: {
  study: {
    icon: React.ReactNode;
    location: string;
    title: string;
    sector: string;
    area: string;
    duration: string;
    results: { value: string; label: string }[];
    system: string;
  };
}) {
  return (
    <div className="relative rounded-2xl bg-white border border-[var(--color-border)] overflow-hidden shadow-[var(--shadow-soft)] group h-full flex flex-col">
      {/* Card header */}
      <div className="bg-[var(--color-brand-50)] p-6 border-b border-[var(--color-border)]">
        <div className="flex items-start justify-between mb-4">
          <div className="h-14 w-14 rounded-2xl bg-[var(--color-brand-600)] text-[var(--color-accent-300)] flex items-center justify-center">
            {study.icon}
          </div>
          <Badge variant="outline">قريباً</Badge>
        </div>
        <div className="flex items-center gap-1.5 text-lg text-[var(--color-muted)] mb-2">
          <MapPin className="h-3.5 w-3.5" />
          <span>{study.location}</span>
        </div>
        <h3 className="text-xl font-bold text-[var(--color-brand-600)]">{study.title}</h3>
      </div>

      {/* Card body */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex flex-wrap gap-2 mb-5">
          <Badge variant="hardware">{study.sector}</Badge>
          <Badge variant="outline">{study.area}</Badge>
        </div>

        <div className="flex items-center gap-1.5 text-lg text-[var(--color-muted)] mb-5">
          <Clock className="h-3.5 w-3.5" />
          <span>{study.duration}</span>
        </div>

        {/* النتائج */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          {study.results.map((r) => (
            <div
              key={r.label}
              className="bg-[var(--color-surface)] rounded-xl p-3 text-center border border-[var(--color-border)]"
            >
              <p className="text-lg font-extrabold text-[var(--color-accent-600)]" data-num>
                {r.value}
              </p>
              <p className="text-lg text-[var(--color-muted)]">{r.label}</p>
            </div>
          ))}
        </div>

        <p className="text-lg text-[var(--color-muted)] mb-4 mt-auto">
          النظام:{" "}
          <span className="font-semibold text-[var(--color-brand-600)]" dir="ltr">
            {study.system}
          </span>
        </p>

        {/* Overlay إشعار */}
        <div className="bg-[var(--color-brand-50)] border border-[var(--color-brand-200)] rounded-xl p-3 text-center text-lg text-[var(--color-brand-600)] font-medium">
          سيتم نشر التفاصيل الكاملة قريباً بإذن العملاء
        </div>
      </div>
    </div>
  );
}
