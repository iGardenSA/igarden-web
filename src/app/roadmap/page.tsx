import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Compass,
  Globe,
  ArrowLeft,
  Leaf,
  Store,
  GraduationCap,
  Building2,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlowAccent } from "@/components/ui/glow-accent";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata: Metadata = {
  title: "خارطة الطريق | iGarden",
  description:
    "خارطة طريق iGarden 2026–2028 — من الانطلاق الرسمي في جدة إلى التوسع الخليجي، بأهداف مالية قابلة للقياس.",
};

/* ============================================================ */
/* البيانات                                                       */
/* ============================================================ */

const milestones = [
  {
    year: "2026",
    icon: MapPin,
    phase: "الانطلاق الرسمي — جدة",
    cities: "جدة · المنطقة الغربية",
    activities: [
      "ترخيص MISA وإطلاق العمليات التجارية",
      "تسليم أولى مشاريع Smart Controllers",
      "بناء قاعدة العملاء الأولى في السوق الغربي",
      "إطلاق الموقع والهوية الرقمية",
    ],
    target: "2.4M ريال إيرادات",
    badge: "نحن هنا",
    accent: "current",
  },
  {
    year: "2027",
    icon: Compass,
    phase: "الانتشار الوطني",
    cities: "الرياض · الدمام · القصيم",
    activities: [
      "توسيع شبكة العملاء والموزعين الإقليميين",
      "إطلاق منصة SaaS للتحكم عن بُعد",
      "تحقيق نقطة التعادل Q2 2027",
      "منتج Smart Greenhouse v2 للسوق",
    ],
    target: "6.9M ريال إيرادات",
    badge: "نقطة التحوّل",
    accent: "pivot",
  },
  {
    year: "2028",
    icon: Globe,
    phase: "التوسع الخليجي",
    cities: "الإمارات · الكويت · البحرين",
    activities: [
      "الحصول على شهادات دولية لمنتجاتنا",
      "توطين سلاسل الإمداد بالكامل داخل السعودية",
      "إغلاق جولة Seed/Series A",
      "شراكات إقليمية للتصنيع المحلي",
    ],
    target: "12M ريال إيرادات",
    badge: null,
    accent: "future",
  },
] as const;

const segments = [
  { icon: Leaf,          label: "المزارع الصغيرة والمتوسطة" },
  { icon: Building2,     label: "المزارع الحضرية" },
  { icon: Store,         label: "المطاعم والفنادق" },
  { icon: GraduationCap, label: "المؤسسات التعليمية" },
  { icon: TrendingUp,    label: "الجهات الحكومية" },
];

/* ============================================================ */
/* المكوّنات المحلية                                               */
/* ============================================================ */

function MilestoneCard({
  milestone,
  index,
}: {
  milestone: (typeof milestones)[number];
  index: number;
}) {
  const Icon = milestone.icon;
  const isAccent = milestone.accent === "pivot";

  return (
    <FadeIn delay={index * 200}>
      {/* صف Timeline */}
      <div className="relative flex items-start gap-5 md:gap-8 pb-12 last:pb-0">
        {/* الخط والنقطة */}
        <div className="relative z-10 flex flex-col items-center shrink-0">
          {/* النقطة الدائرية */}
          <div
            className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border-4 border-white shadow-[var(--shadow-glow)] transition-all ${
              isAccent
                ? "bg-[var(--color-accent-500)] text-[var(--color-brand-700)]"
                : "bg-[var(--color-brand-600)] text-[var(--color-accent-300)]"
            }`}
          >
            <Icon className="h-5 w-5 md:h-5 md:w-5" />
          </div>
        </div>

        {/* بطاقة المحتوى */}
        <div className="flex-1 min-w-0">
          {/* الشارة (نقطة التحوّل) */}
          {milestone.badge && (
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-[var(--color-accent-500)]/20 text-[var(--color-accent-500)] text-lg font-bold mb-3">
              {milestone.badge}
            </span>
          )}

          <div
            className={`rounded-2xl p-6 md:p-8 border shadow-[var(--shadow-md)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lg)] ${
              isAccent
                ? "bg-[var(--color-brand-600)] text-white border-[var(--color-brand-500)]"
                : "bg-white border-[var(--color-border)]"
            }`}
          >
            {/* السنة والمرحلة */}
            <div className="flex items-end gap-4 mb-5">
              <span
                className={`text-5xl md:text-6xl font-extrabold leading-none ${
                  isAccent
                    ? "text-[var(--color-accent-300)]"
                    : "text-[var(--color-brand-600)]"
                }`}
                data-num
              >
                {milestone.year}
              </span>
              <div className="pb-1">
                <p
                  className={`text-lg md:text-xl font-bold leading-tight ${
                    isAccent ? "text-white" : "text-[var(--color-brand-600)]"
                  }`}
                >
                  {milestone.phase}
                </p>
                <p
                  className={`text-lg font-medium mt-0.5 ${
                    isAccent ? "text-white/70" : "text-[var(--color-muted)]"
                  }`}
                >
                  {milestone.cities}
                </p>
              </div>
            </div>

            {/* الأنشطة */}
            <ul className="space-y-2 mb-6">
              {milestone.activities.map((a) => (
                <li key={a} className="flex items-start gap-2.5 text-lg">
                  <div
                    className={`mt-1.5 h-1.5 w-1.5 rounded-full shrink-0 ${
                      isAccent
                        ? "bg-[var(--color-accent-300)]"
                        : "bg-[var(--color-accent-500)]"
                    }`}
                  />
                  <span
                    className={
                      isAccent ? "text-white/85" : "text-[var(--color-foreground)]"
                    }
                  >
                    {a}
                  </span>
                </li>
              ))}
            </ul>

            {/* الهدف */}
            <div
              className={`pt-5 border-t ${
                isAccent ? "border-white/15" : "border-[var(--color-border)]"
              }`}
            >
              <p
                className={`text-lg font-bold uppercase tracking-widest mb-1 ${
                  isAccent ? "text-white/50" : "text-[var(--color-muted)]"
                }`}
              >
                الهدف
              </p>
              <p
                className={`text-2xl md:text-3xl font-extrabold ${
                  isAccent
                    ? "text-[var(--color-accent-300)]"
                    : "text-[var(--color-brand-600)]"
                }`}
                data-num
              >
                {milestone.target}
              </p>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

/* ============================================================ */
/* الصفحة الرئيسية                                                */
/* ============================================================ */

export default function RoadmapPage() {
  return (
    <>
      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--color-brand-700)] via-[var(--color-brand-600)] to-[var(--color-brand-500)] text-white py-16 md:py-24 lg:py-32">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, var(--color-accent-500) 0%, transparent 40%), radial-gradient(circle at 80% 70%, var(--color-accent-300) 0%, transparent 40%)",
          }}
        />
        <GlowAccent position="top-left"     intensity="strong" color="lime"   />
        <GlowAccent position="bottom-right" intensity="subtle" color="accent" />

        <div className="container-igarden relative">
          <p className="heading-eyebrow mb-6 text-[var(--color-accent-300)]">خارطة الطريق</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-white mb-6 max-w-4xl">
            من جدة إلى الخليج —<br />
            <span className="text-[var(--color-accent-300)]">خطة نمو 2026–2028</span>
          </h1>
          <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl mb-10">
            استراتيجية توسع مرحلية مدروسة — انطلاق رسمي 2026، تعادل Q2 2027، وتوسع خليجي 2028. أهداف قابلة للقياس في كل مرحلة.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="accent" size="xl" asChild>
              <Link href="/contact">تواصل للشراكة <ArrowLeft className="rotate-180" /></Link>
            </Button>
            <Button variant="light" size="xl" asChild>
              <Link href="/about">تعرّف على الفريق</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ===== Timeline ===== */}
      <section className="bg-[var(--color-surface)] section-padding">
        <div className="container-igarden">
          <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
            <p className="heading-eyebrow mb-4">المراحل الثلاث</p>
            <h2 className="heading-section mb-4">ثلاث مراحل — نمو مدروس</h2>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed">
              كل مرحلة تبني على الأخرى — من الانطلاق المحلي إلى التوسع الخليجي، مع أهداف مالية واضحة في كل سنة.
            </p>
          </div>

          {/* خط Timeline العمودي */}
          <div className="relative max-w-3xl mx-auto">
            {/* الخط الرأسي */}
            <div
              aria-hidden="true"
              className="absolute start-5 md:start-6 top-5 bottom-5 w-0.5 bg-gradient-to-b from-[var(--color-brand-300)] via-[var(--color-accent-500)] to-[var(--color-brand-200)]"
            />

            <div className="space-y-0">
              {milestones.map((m, i) => (
                <MilestoneCard key={m.year} milestone={m} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== الشرائح المستهدفة ===== */}
      <section className="bg-white section-padding">
        <div className="container-igarden">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
            <p className="heading-eyebrow mb-4">الشرائح المستهدفة</p>
            <h2 className="heading-section mb-4">نخدم قطاعات متنوعة</h2>
            <p className="text-[var(--color-muted)] leading-relaxed">
              استراتيجيتنا تغطي طيفاً واسعاً من العملاء لضمان التنويع والاستدامة.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {segments.map((seg) => {
              const Icon = seg.icon;
              return (
                <div
                  key={seg.label}
                  className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-brand-300)] hover:bg-[var(--color-brand-50)] transition-all duration-200"
                >
                  <Icon className="h-4 w-4 text-[var(--color-accent-500)]" />
                  <span className="text-lg font-medium text-[var(--color-brand-600)]">
                    {seg.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative overflow-hidden bg-[var(--color-brand-600)] text-white section-padding">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 70% 50%, var(--color-accent-500) 0%, transparent 50%)",
          }}
        />
        <GlowAccent position="top-right" intensity="medium" color="lime" />

        <div className="container-igarden relative text-center max-w-3xl mx-auto">
          <p className="heading-eyebrow mb-6 text-[var(--color-accent-300)]">معاً نُسرّع الرحلة</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            نسعى لشراكات استراتيجية<br />
            <span className="text-[var(--color-accent-300)]">تُسرّع هذه الرحلة</span>
          </h2>
          <p className="text-lg text-white/85 leading-relaxed mb-10">
            إن كنت مستثمراً، شريكاً حكومياً، أو مؤسسة تقاطع معنا في رؤية 2030 — فنحن نريد التحدث إليك.
          </p>
          <Button variant="accent" size="xl" asChild>
            <Link href="/contact">
              تواصل للشراكة
              <ArrowLeft className="rotate-180" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
