import type { Metadata } from "next";
import Link from "next/link";
import {
  GraduationCap,
  BookOpen,
  Users,
  Clock,
  ArrowLeft,
  Sprout,
  Cpu,
  Droplets,
  BarChart2,
  Video,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/ui/fade-in";
import { GlowAccent } from "@/components/ui/glow-accent";

export const metadata: Metadata = {
  title: "أكاديمية iGarden — تعلّم الزراعة الذكية",
  description:
    "أكاديمية iGarden: دورات تدريبية متخصصة في الزراعة المائية، Smart Controllers، وإدارة المزارع الذكية. مبنية على خبرة ميدانية حقيقية من محطة عسفان.",
  openGraph: {
    title: "أكاديمية iGarden",
    description: "تعلّم الزراعة الذكية من خبراء ميدانيين.",
    url: "https://igarden.sa/learn",
  },
};

const UPCOMING_TRACKS = [
  {
    icon: Droplets,
    title: "أساسيات الزراعة المائية",
    level: "مبتدئ",
    format: "دورة مصوّرة",
    duration: "6 ساعات",
  },
  {
    icon: Cpu,
    title: "Smart Controllers — من الفكرة إلى التشغيل",
    level: "متوسط",
    format: "ورشة عملية",
    duration: "8 ساعات",
  },
  {
    icon: Sprout,
    title: "إدارة المزرعة الذكية",
    level: "متقدم",
    format: "برنامج متكامل",
    duration: "20 ساعة",
  },
  {
    icon: BarChart2,
    title: "تحليل بيانات الزراعة وتحسين الأداء",
    level: "متوسط",
    format: "دورة مصوّرة",
    duration: "5 ساعات",
  },
];

const LEVEL_COLORS: Record<string, string> = {
  مبتدئ: "bg-emerald-100 text-emerald-800",
  متوسط: "bg-amber-100 text-amber-800",
  متقدم: "bg-red-100 text-red-800",
};

export default function LearnPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--color-brand-600)] via-[var(--color-brand-500)] to-[var(--color-brand-600)] text-white">
        <GlowAccent position="top-right" intensity="subtle" color="lime" />
        <div className="container-igarden relative py-20 md:py-28">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-accent-500)]/30 bg-[var(--color-accent-500)]/10 text-[var(--color-accent-300)] text-lg font-semibold mb-8">
              <GraduationCap className="h-4 w-4" />
              <span>أكاديمية iGarden</span>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-white mb-6">
              تعلّم الزراعة
              <br />
              <span className="text-[var(--color-accent-300)]">الذكية</span>
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-3xl mb-10">
              دورات تدريبية مبنية على خبرة ميدانية حقيقية من محطة عسفان — لمن يريد بناء
              مزرعة ذكية أو تطوير كفاءاته في قطاع الـ AgriTech السعودي.
            </p>
          </FadeIn>
          <FadeIn delay={300}>
            <div className="flex flex-wrap gap-6 text-white/80 text-base">
              {[
                { icon: BookOpen, text: "4 مسارات تدريبية" },
                { icon: Video, text: "محتوى مصوّر وورش عملية" },
                { icon: Users, text: "مدربون من الميدان" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-[var(--color-accent-400)]" strokeWidth={1.5} />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="bg-[var(--color-surface)] section-padding">
        <div className="container-igarden">
          <FadeIn>
            <div className="max-w-2xl mx-auto text-center mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-accent-100)] text-[var(--color-accent-700)] text-lg font-bold mb-6">
                <GraduationCap className="h-4 w-4" />
                <span>قريباً</span>
              </div>
              <h2 className="heading-section mb-6">المسارات التدريبية قادمة</h2>
              <p className="text-[var(--color-muted)] text-lg leading-relaxed">
                فريق iGarden يُعد دورات تدريبية شاملة مبنية على تجارب حقيقية من محطة
                عسفان — سنُطلقها خلال النصف الثاني من 2026.
              </p>
            </div>
          </FadeIn>

          <div className="max-w-3xl mx-auto space-y-4">
            {UPCOMING_TRACKS.map((track, i) => {
              const Icon = track.icon;
              return (
                <FadeIn key={track.title} delay={i * 80}>
                  <div className="bg-white rounded-2xl border border-[var(--color-border)] p-6 flex items-center gap-5 shadow-[var(--shadow-soft)] opacity-80">
                    <div className="h-12 w-12 rounded-xl bg-[var(--color-brand-50)] text-[var(--color-brand-400)] flex items-center justify-center shrink-0">
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-[var(--color-brand-600)] mb-2 leading-snug">
                        {track.title}
                      </p>
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${LEVEL_COLORS[track.level]}`}>
                          {track.level}
                        </span>
                        <Badge variant="outline">{track.format}</Badge>
                        <span className="flex items-center gap-1 text-xs text-[var(--color-muted)]">
                          <Clock className="h-3 w-3" />
                          {track.duration}
                        </span>
                      </div>
                    </div>
                    <Badge variant="outline" className="shrink-0">قريباً</Badge>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ما ستتعلمه */}
      <section className="bg-white section-padding">
        <div className="container-igarden">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="heading-section mb-4">ما يميّز أكاديمية iGarden</h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: CheckCircle2,
                title: "من الميدان مباشرة",
                desc: "كل دورة مبنية على تجارب حقيقية من محطة عسفان وليس من كتب نظرية.",
              },
              {
                icon: CheckCircle2,
                title: "مُكيَّف للمناخ السعودي",
                desc: "محتوى يراعي +45°C وندرة المياه وخصوصية البيئة الزراعية في المملكة.",
              },
              {
                icon: CheckCircle2,
                title: "تطبيق فوري",
                desc: "ورش عملية تنتهي بمشروع قابل للتنفيذ — لا مجرد شهادات حضور.",
              },
            ].map(({ icon: Icon, title, desc }, i) => (
              <FadeIn key={title} delay={i * 100}>
                <div className="text-center">
                  <div className="h-12 w-12 rounded-xl bg-[var(--color-accent-100)] text-[var(--color-accent-600)] flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-bold text-[var(--color-brand-600)] mb-2">{title}</h3>
                  <p className="text-[var(--color-muted)] text-base leading-relaxed">{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-brand-600)] text-white section-padding">
        <div className="container-igarden">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto">
              <p className="heading-eyebrow mb-4 text-[var(--color-accent-300)]">سجّل اهتمامك</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                كن أول من يعلم عند الإطلاق
              </h2>
              <p className="text-white/80 leading-relaxed mb-10">
                سجّل اهتمامك الآن وسنُرسل لك إشعاراً فور انطلاق أكاديمية iGarden.
              </p>
              <Button variant="accent" size="lg" asChild>
                <Link href="/contact">
                  سجّل اهتمامك
                  <ArrowLeft className="rotate-180" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
