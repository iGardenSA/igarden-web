import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen, Rss, Clock, ArrowLeft, Droplets, Cpu,
  Leaf, BarChart2, TreePine,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/ui/fade-in";
import { GlowAccent } from "@/components/ui/glow-accent";

export const metadata: Metadata = {
  title: "المدونة",
  description:
    "مدونة iGarden التقنية — مقالات متخصصة في Hydroponics وAquaponics وIoT وAI الزراعي.",
};

const UPCOMING_ARTICLES = [
  {
    icon: <Droplets className="h-5 w-5" />,
    title: "كيف يوفر Aeroponics 95% من المياه؟",
    category: "تقنيات الزراعة",
    readTime: "8 دقائق",
  },
  {
    icon: <Leaf className="h-5 w-5" />,
    title: "دليل شامل للزراعة المائية في المناخ السعودي",
    category: "أدلة عملية",
    readTime: "12 دقيقة",
  },
  {
    icon: <Cpu className="h-5 w-5" />,
    title: "IoT في الزراعة: من الحساس إلى الحصاد",
    category: "التقنية والذكاء",
    readTime: "10 دقائق",
  },
  {
    icon: <BarChart2 className="h-5 w-5" />,
    title: "AI والزراعة: التحليلات التنبؤية في العمل",
    category: "الذكاء الاصطناعي",
    readTime: "9 دقائق",
  },
  {
    icon: <TreePine className="h-5 w-5" />,
    title: "حالة: كيف وفّرت محميات جدة 60% من التكاليف",
    category: "دراسات حالة",
    readTime: "15 دقيقة",
  },
];

export default function BlogPage() {
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
              <BookOpen className="h-4 w-4" />
              <span>مدرسة iGarden</span>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-white mb-6">
              مدونة التقنية
              <br />
              <span className="text-[var(--color-accent-300)]">الزراعية</span>
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-3xl">
              مقالات تقنية، دراسات، وأدلة عملية من خبراء iGarden لمساعدتك في بناء مستقبل
              زراعي ذكي ومستدام.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ============================================================
          Coming Soon
          ============================================================ */}
      <section className="bg-[var(--color-surface)] section-padding">
        <div className="container-igarden">
          <FadeIn>
            <div className="max-w-2xl mx-auto text-center mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-accent-100)] text-[var(--color-accent-700)] text-lg font-bold mb-6">
                <Rss className="h-4 w-4" />
                <span>قريباً</span>
              </div>
              <h2 className="heading-section mb-6">المحتوى في طريقه إليك</h2>
              <p className="text-[var(--color-muted)] text-lg leading-relaxed">
                فريق iGarden يعمل على إنتاج مقالات متخصصة في Hydroponics وAquaponics وIoT وAI
                الزراعي — مكتوبة من خبراء ميدانيين حقيقيين.
              </p>
            </div>
          </FadeIn>

          {/* قائمة المقالات القادمة */}
          <div className="max-w-3xl mx-auto space-y-4">
            {UPCOMING_ARTICLES.map((article, i) => (
              <FadeIn key={article.title} delay={i * 80}>
                <div className="bg-white rounded-2xl border border-[var(--color-border)] p-6 flex items-center gap-5 shadow-[var(--shadow-soft)] opacity-75">
                  <div className="h-12 w-12 rounded-xl bg-[var(--color-brand-50)] text-[var(--color-brand-400)] flex items-center justify-center shrink-0">
                    {article.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-[var(--color-brand-600)] mb-1 truncate">
                      {article.title}
                    </p>
                    <div className="flex items-center gap-3 flex-wrap">
                      <Badge variant="outline">{article.category}</Badge>
                      <span className="flex items-center gap-1 text-lg text-[var(--color-muted)]">
                        <Clock className="h-3 w-3" />
                        {article.readTime}
                      </span>
                    </div>
                  </div>
                  <Badge variant="outline" className="shrink-0">قريباً</Badge>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA — اشتراك
          ============================================================ */}
      <section className="bg-[var(--color-brand-600)] text-white section-padding">
        <div className="container-igarden">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto">
              <p className="heading-eyebrow mb-4 text-[var(--color-accent-300)]">كن أول من يقرأ</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                سجّل للنشرة البريدية
              </h2>
              <p className="text-white/80 leading-relaxed mb-10">
                احصل على أحدث المقالات والأدلة التقنية مباشرة في بريدك الإلكتروني عند نشرها.
              </p>
              <Button variant="accent" size="lg" asChild>
                <Link href="/contact">
                  سجّل الآن
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
