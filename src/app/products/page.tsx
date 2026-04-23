import type { Metadata } from "next";
import Link from "next/link";
import {
  Cpu, Cloud, Layers, Building2, Fish, Sprout,
  BookOpen, Library, FlaskConical, Check, ArrowLeft, Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/ui/fade-in";
import { GlowAccent } from "@/components/ui/glow-accent";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "المنتجات",
  description:
    "محفظة متكاملة من 9 حلول زراعية ذكية من iGarden — برمجيات AI، أنظمة مادية، وخدمات معرفية.",
};

export default function ProductsPage() {
  return (
    <>
      {/* ============================================================
          Hero
          ============================================================ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--color-brand-600)] via-[var(--color-brand-500)] to-[var(--color-brand-600)] text-white">
        <GlowAccent position="top-right" intensity="medium" color="lime" />
        <GlowAccent position="bottom-left" intensity="subtle" color="accent" />
        <div className="container-igarden relative py-20 md:py-28">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-accent-500)]/30 bg-[var(--color-accent-500)]/10 text-[var(--color-accent-300)] text-sm font-semibold mb-8 uppercase tracking-widest">
              <Zap className="h-4 w-4" />
              <span>AI-Powered Smart Farming</span>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-white mb-6">
              محفظة متكاملة من
              <br />
              <span className="text-[var(--color-accent-300)]">9 حلول ذكية</span>
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-3xl">
              من الأنظمة المادية إلى البرمجيات الذكية إلى المعرفة التطبيقية، كل منتج مصمم
              ليعمل منفرداً أو كجزء من منظومة Smart OS موحدة.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ============================================================
          A. البرمجيات الذكية — AI أولاً
          ============================================================ */}
      <section className="bg-[var(--color-surface)] section-padding">
        <div className="container-igarden">
          <FadeIn>
            <SectionHeader
              eyebrow="AI FIRST"
              title="البرمجيات الذكية"
              description="منظومتنا البرمجية هي المحرك الحقيقي لكل حل نقدّمه — الذكاء يأتي أولاً."
            />
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">
            <FadeIn delay={100}>
              <SmartOSCard />
            </FadeIn>
            <FadeIn delay={200}>
              <ProductCard
                number="02"
                icon={<Cloud className="h-7 w-7" />}
                eyebrow="منصة SaaS"
                title="iGarden Cloud Platform"
                description="لوحة تحكم سحابية مركزية لجميع مزارعك — تحكم كامل من أي مكان في العالم."
                badge="Pre-Launch"
                badgeVariant="software"
                features={[
                  "تنبيهات لحظية (WhatsApp + Email)",
                  "تحليلات تاريخية قابلة للتصدير",
                  "تحليلات تنبؤية بـ AI",
                  "واجهة عربية كاملة",
                ]}
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ============================================================
          B. الأنظمة المادية
          ============================================================ */}
      <section className="bg-white section-padding">
        <div className="container-igarden">
          <FadeIn>
            <SectionHeader
              eyebrow="HARDWARE"
              title="الأنظمة المادية"
              description="أنظمة مُصمَّمة للمناخ السعودي، مدمجة مع Smart OS من اليوم الأول."
            />
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <FadeIn delay={100}>
              <ProductCardWithStats
                number="03"
                icon={<Layers className="h-7 w-7" />}
                eyebrow="النجم · SAIP #423450193"
                title="iGarden Tower"
                description="البرج الزراعي الذكي — نموذج صناعي مسجل يجمع Aeroponics مع تحكم IoT كامل."
                featured
                stats={[
                  { value: "95%", label: "توفير مياه" },
                  { value: "3x", label: "إنتاجية" },
                  { value: "45°C+", label: "تحمّل" },
                ]}
                features={[
                  "تقنية Aeroponics للزراعة بدون تربة",
                  "تحكم IoT كامل من Smart OS",
                  "شبكة حساسات pH وEC وحرارة",
                  "طاقة شمسية اختيارية",
                ]}
              />
            </FadeIn>

            <FadeIn delay={200}>
              <ProductCardWithStats
                number="04"
                icon={<Building2 className="h-7 w-7" />}
                eyebrow="HARDWARE"
                title="Smart Greenhouses"
                description="بيوت محمية مؤتمتة مع تحكم مناخي دقيق وكفاءة طاقة استثنائية."
                stats={[
                  { value: "40%", label: "كفاءة طاقة" },
                  { value: "24/7", label: "مراقبة" },
                  { value: "UV+", label: "حماية" },
                ]}
                features={[
                  "هيكل مقاوم للظروف المناخية القاسية",
                  "عزل حراري متقدم",
                  "إضاءة LED طيفية للنمو الأمثل",
                  "تحكم مناخي آلي متكامل",
                ]}
              />
            </FadeIn>

            <FadeIn delay={300}>
              <ProductCardWithStats
                number="05"
                icon={<Fish className="h-7 w-7" />}
                eyebrow="HARDWARE"
                title="Aquaponics Systems"
                description="تكامل سمكي-نباتي مستدام ببصمة كربونية منخفضة وصفر مبيدات."
                stats={[
                  { value: "90%", label: "إعادة تدوير" },
                  { value: "Zero", label: "مبيدات" },
                  { value: "2x", label: "إنتاج مزدوج" },
                ]}
                features={[
                  "تكامل سمكي-نباتي في منظومة واحدة",
                  "90% إعادة تدوير المياه",
                  "إنتاج سمك وخضروات معاً",
                  "بصمة كربونية منخفضة جداً",
                ]}
              />
            </FadeIn>

            <FadeIn delay={400}>
              <ProductCardWithStats
                number="06"
                icon={<Sprout className="h-7 w-7" />}
                eyebrow="HARDWARE · أعلاف ذكية"
                title="Hydroponic Fodder"
                description="استنبات الشعير الهيدروبوني — أعلاف خضراء يومية بكفاءة مائية استثنائية."
                stats={[
                  { value: "98%", label: "توفير مياه" },
                  { value: "7 أيام", label: "دورة إنتاج" },
                  { value: "50%", label: "خفض تكلفة" },
                ]}
                features={[
                  "إنتاج أعلاف خضراء يومي ومستمر",
                  "98% توفير في استهلاك المياه",
                  "بدون مبيدات أو هرمونات نمو",
                  "إنتاجية عالية بمساحة صغيرة",
                ]}
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ============================================================
          C. المعرفة
          ============================================================ */}
      <section className="bg-[var(--color-surface)] section-padding">
        <div className="container-igarden">
          <FadeIn>
            <SectionHeader
              eyebrow="KNOWLEDGE"
              title="المعرفة والاستشارات"
              description="لأن التقنية وحدها لا تكفي — نقدّم المعرفة والخبرة لضمان نجاحك الفعلي."
            />
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <FadeIn delay={100}>
              <ProductCard
                number="07"
                icon={<BookOpen className="h-7 w-7" />}
                eyebrow="CONSULTING"
                title="iGarden Knowledge"
                description="خدمات استشارية وتدريبية متخصصة للمزارعين والشركاء التجاريين."
                features={[
                  "استشارات زراعية متخصصة",
                  "تدريب عملي على التشغيل",
                  "دراسات جدوى مخصصة",
                ]}
              />
            </FadeIn>

            <FadeIn delay={200}>
              <ProductCard
                number="08"
                icon={<Library className="h-7 w-7" />}
                eyebrow="KNOWLEDGE HUB"
                title="مدرسة iGarden"
                description="منصة تعليمية متكاملة لنشر الوعي الزراعي الذكي في المجتمع."
                features={[
                  "ورش 'ازرع بذكاء' العملية",
                  "مدونة تقنية متخصصة",
                  "أدلة وموارد مجانية",
                  "دراسات حالة موثّقة",
                ]}
              />
            </FadeIn>

            <FadeIn delay={300}>
              <ProductCard
                number="09"
                icon={<FlaskConical className="h-7 w-7" />}
                eyebrow="LAB SERVICES"
                title="Tissue Culture Labs"
                description="معامل الإكثار الدقيق لإنتاج شتلات عالية الجودة والكفاءة."
                features={[
                  "إكثار نباتي دقيق بتقنية الأنسجة",
                  "شتلات خالية من الأمراض",
                  "جودة موحدة وإنتاجية عالية",
                ]}
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ============================================================
          Final CTA
          ============================================================ */}
      <section className="bg-[var(--color-brand-600)] text-white section-padding">
        <div className="container-igarden">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <p className="heading-eyebrow mb-4 text-[var(--color-accent-300)]">ابدأ رحلتك الآن</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                جاهز لتبني Smart OS الخاص بك؟
              </h2>
              <p className="text-lg text-white/80 leading-relaxed mb-10">
                فريقنا جاهز لتصميم حل مخصص يناسب احتياجاتك — استشارة مجانية بدون التزام.
              </p>
              <Button variant="accent" size="xl" asChild>
                <Link href="/contact">
                  تحدث معنا
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

/* ============================================================
   مكونات داخلية
   ============================================================ */

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <p className="heading-eyebrow mb-4">{eyebrow}</p>
      <h2 className="heading-section mb-6">{title}</h2>
      <p className="text-lg text-[var(--color-muted)] leading-relaxed">{description}</p>
    </div>
  );
}

function SmartOSCard() {
  const features = [
    "شبكة حساسات متعددة (pH, EC, حرارة, رطوبة)",
    "تحليلات تنبؤية (AI) للنمو والإنتاج",
    "أتمتة كاملة للري والإضاءة",
    "تحكم سحابي من أي مكان",
    "API integration للأنظمة الخارجية",
    "محرك توصيات ذكي",
  ];
  return (
    <div className="relative overflow-hidden rounded-2xl bg-[var(--color-brand-600)] p-8 h-full flex flex-col border-2 border-[var(--color-accent-500)]">
      <span
        className="absolute top-4 left-4 text-8xl font-extrabold text-white/5 leading-none select-none pointer-events-none"
        aria-hidden="true"
      >
        01
      </span>

      <div className="relative flex-1 flex flex-col">
        <div className="flex items-start justify-between mb-6">
          <div className="h-14 w-14 rounded-2xl bg-[var(--color-accent-500)]/20 text-[var(--color-accent-300)] flex items-center justify-center">
            <Cpu className="h-7 w-7" />
          </div>
          <Badge variant="accent">محوري استراتيجياً</Badge>
        </div>

        <p className="text-[var(--color-accent-300)] text-sm font-bold uppercase tracking-widest mb-2">
          المحرك الذكي
        </p>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3" dir="ltr">
          iGarden Smart OS
        </h3>
        <p className="text-white/80 leading-relaxed mb-6">
          منظومة ذكاء اصطناعي متكاملة تُدار من السحابة — العمود الفقري لكل حلولنا وقلب
          منظومة Smart Farming.
        </p>

        <ul className="space-y-3 mb-8 flex-1">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-sm text-white/85">
              <span className="h-5 w-5 rounded-full bg-[var(--color-accent-500)]/20 text-[var(--color-accent-400)] flex items-center justify-center shrink-0 mt-0.5">
                <Check className="h-3 w-3" />
              </span>
              {f}
            </li>
          ))}
        </ul>

        <Button variant="accent" size="md" asChild>
          <Link href="/contact">احجز استشارة</Link>
        </Button>
      </div>
    </div>
  );
}

function ProductCard({
  number,
  icon,
  eyebrow,
  title,
  description,
  features,
  badge,
  badgeVariant = "hardware",
}: {
  number: string;
  icon: React.ReactNode;
  eyebrow: string;
  title: string;
  description: string;
  features: string[];
  badge?: string;
  badgeVariant?: "hardware" | "software" | "knowledge" | "accent" | "outline";
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-white border border-[var(--color-border)] p-8 h-full flex flex-col hover:border-[var(--color-accent-500)] transition-colors shadow-[var(--shadow-soft)]">
      <span
        className="absolute top-4 left-4 text-8xl font-extrabold text-[var(--color-brand-100)] leading-none select-none pointer-events-none"
        aria-hidden="true"
      >
        {number}
      </span>

      <div className="relative flex-1 flex flex-col">
        <div className="flex items-start justify-between mb-6">
          <div className="h-14 w-14 rounded-2xl bg-[var(--color-brand-50)] text-[var(--color-brand-600)] flex items-center justify-center">
            {icon}
          </div>
          {badge && <Badge variant={badgeVariant}>{badge}</Badge>}
        </div>

        <p className="heading-eyebrow mb-2">{eyebrow}</p>
        <h3 className="text-2xl font-bold text-[var(--color-brand-600)] mb-3">{title}</h3>
        <p className="text-[var(--color-muted)] leading-relaxed mb-6">{description}</p>

        <ul className="space-y-2.5 mb-8 flex-1">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-sm text-[var(--color-foreground)]">
              <span className="h-5 w-5 rounded-full bg-[var(--color-accent-100)] text-[var(--color-accent-600)] flex items-center justify-center shrink-0 mt-0.5">
                <Check className="h-3 w-3" />
              </span>
              {f}
            </li>
          ))}
        </ul>

        <Button variant="outline" size="md" asChild>
          <Link href="/contact">احجز استشارة</Link>
        </Button>
      </div>
    </div>
  );
}

function ProductCardWithStats({
  number,
  icon,
  eyebrow,
  title,
  description,
  stats,
  features,
  featured = false,
}: {
  number: string;
  icon: React.ReactNode;
  eyebrow: string;
  title: string;
  description: string;
  stats: { value: string; label: string }[];
  features: string[];
  featured?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl p-8 h-full flex flex-col shadow-[var(--shadow-soft)] transition-colors",
        featured
          ? "bg-[var(--color-brand-50)] border-2 border-[var(--color-brand-300)] hover:border-[var(--color-accent-500)]"
          : "bg-white border border-[var(--color-border)] hover:border-[var(--color-accent-500)]"
      )}
    >
      <span
        className={cn(
          "absolute top-4 left-4 text-8xl font-extrabold leading-none select-none pointer-events-none",
          featured ? "text-[var(--color-brand-200)]" : "text-[var(--color-brand-100)]"
        )}
        aria-hidden="true"
      >
        {number}
      </span>

      <div className="relative flex-1 flex flex-col">
        <div className="h-14 w-14 rounded-2xl bg-[var(--color-brand-600)] text-[var(--color-accent-300)] flex items-center justify-center mb-5">
          {icon}
        </div>

        <p className="heading-eyebrow mb-2">{eyebrow}</p>
        <h3 className="text-2xl font-bold text-[var(--color-brand-600)] mb-3">{title}</h3>
        <p className="text-[var(--color-muted)] leading-relaxed mb-6">{description}</p>

        <div className="grid grid-cols-3 gap-3 mb-6 p-4 bg-white rounded-xl border border-[var(--color-border)]">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div
                className="text-xl font-extrabold text-[var(--color-accent-600)]"
                data-num
              >
                {s.value}
              </div>
              <div className="text-xs text-[var(--color-muted)] mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>

        <ul className="space-y-2.5 mb-8 flex-1">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-sm text-[var(--color-foreground)]">
              <span className="h-5 w-5 rounded-full bg-[var(--color-accent-100)] text-[var(--color-accent-600)] flex items-center justify-center shrink-0 mt-0.5">
                <Check className="h-3 w-3" />
              </span>
              {f}
            </li>
          ))}
        </ul>

        <Button variant={featured ? "primary" : "outline"} size="md" asChild>
          <Link href="/contact">احجز استشارة</Link>
        </Button>
      </div>
    </div>
  );
}
