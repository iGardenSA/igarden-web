import type { Metadata } from "next";
import Link from "next/link";
import {
  Shield, Globe, Users, Award, Rocket,
  Building, FileText, Calendar, ArrowLeft, CheckCircle2,
  Mail, AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { GlowAccent } from "@/components/ui/glow-accent";
import { StageHonesty } from "@/components/shared/StageHonesty";
import { BreadcrumbSchema } from "@/components/shared/SchemaJsonLd";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "للمستثمرين — AgriTech سعودية، أصول ميدانية",
  description:
    "iGarden (انتيليجنت غاردن): شركة سعودية لأنظمة الزراعة الذكية. مرخّصة MISA، نموذج صناعي مسجّل SAIP، 3+ سنوات تطوير، ومحطة اختبار ميدانية في عسفان.",
  alternates: { canonical: "https://igarden.sa/investors" },
  robots: { index: false, follow: false },
  openGraph: {
    title: "للمستثمرين — AgriTech سعودية، أصول ميدانية | iGarden",
    description: "شركة سعودية مرخّصة MISA بنموذج صناعي مسجّل وأصول ميدانية مُختبَرة في عسفان.",
    images: [{ url: "/api/og?title=%D9%84%D9%84%D9%85%D8%B3%D8%AA%D8%AB%D9%85%D8%B1%D9%8A%D9%86+%E2%80%94+iGarden&sub=AgriTech+%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9+%D9%85%D8%B1%D8%AE%D9%91%D8%B5%D8%A9+MISA", width: 1200, height: 630 }],
    type: "website",
    locale: "ar_SA",
  },
  twitter: {
    card: "summary_large_image",
    title: "للمستثمرين — AgriTech سعودية | iGarden",
    description: "أصول ميدانية مُختبَرة، ترخيص MISA، نموذج صناعي SAIP مسجّل.",
    images: ["/api/og?title=%D9%84%D9%84%D9%85%D8%B3%D8%AA%D8%AB%D9%85%D8%B1%D9%8A%D9%86"],
  },
};

const BREADCRUMB = [
  { name: "الرئيسية", url: "/" },
  { name: "المستثمرون", url: "/investors" },
];

export default function InvestorsPage() {
  return (
    <>
      <BreadcrumbSchema items={BREADCRUMB} />
      {/* ============================================================
          Hero
          ============================================================ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--color-brand-600)] via-[var(--color-brand-500)] to-[var(--color-brand-600)] text-white">
        <GlowAccent position="top-right" intensity="subtle" color="lime" />
        <div className="container-igarden relative py-20 md:py-28">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-accent-500)]/30 bg-[var(--color-accent-500)]/10 text-[var(--color-accent-300)] text-lg font-semibold mb-8 uppercase tracking-widest">
              <Award className="h-4 w-4" />
              <span>AgriTech سعودية · مرحلة مبكرة</span>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-white mb-6">
              AgriTech سعودية.
              <br />
              <span className="text-[var(--color-accent-300)]">أصول ميدانية. مرحلة مبكرة.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-3xl mb-10">
              نطوّر حلول التحكم والزراعة الذكية للمناخ السعودي، مع محطة اختبار ميدانية، نموذج
              صناعي مسجّل، ومنصة تشغيل قيد التطوير.
            </p>
          </FadeIn>
          <FadeIn delay={300}>
            <div className="flex flex-wrap gap-4">
              <PitchDeckButton />
              <Button variant="light" size="lg" asChild>
                <Link href="/contact">
                  احجز لقاء
                  <ArrowLeft className="rotate-180" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-amber-50 border-b border-amber-200 py-5">
        <div className="container-igarden">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-amber-800 text-sm leading-relaxed" dir="rtl">
              <strong>إخلاء مسؤولية:</strong> المحتوى المنشور هنا تعريفي فقط، ولا يُعد عرضاً
              استثمارياً أو دعوة للاكتتاب أو ضماناً للعائد. تتوفر التفاصيل المالية ومواد
              المستثمرين عند الطلب للشركاء المؤهلين.
            </p>
          </div>
        </div>
      </section>

      {/* Stage honesty banner */}
      <section className="bg-[#FAFAF7] py-6">
        <div className="container-igarden">
          <StageHonesty />
        </div>
      </section>

      {/* ============================================================
          1. الحقائق الأساسية
          ============================================================ */}
      <section className="bg-white section-padding">
        <div className="container-igarden">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="heading-eyebrow mb-4">لمحة سريعة</p>
              <h2 className="heading-section mb-4">الحقائق الأساسية</h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <FadeIn delay={150}>
              <QuickFactCard
                icon={<Calendar className="h-6 w-6" />}
                label="التأسيس · ترخيص MISA"
                value="2024"
                unit="ترخيص فبراير 2026"
              />
            </FadeIn>
            <FadeIn delay={200}>
              <QuickFactCard
                icon={<Shield className="h-6 w-6" />}
                label="رخصة MISA"
                value="24926249716"
                unit="رقم الرخصة"
                mono
              />
            </FadeIn>
            <FadeIn delay={250}>
              <QuickFactCard
                icon={<Award className="h-6 w-6" />}
                label="نموذج صناعي"
                value="423450193"
                unit="SAIP"
                mono
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ============================================================
          2. الميزات الاستثمارية
          ============================================================ */}
      <section className="bg-[var(--color-surface)] section-padding">
        <div className="container-igarden">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="heading-eyebrow mb-4">لماذا iGarden؟</p>
              <h2 className="heading-section mb-4">الميزات الاستثمارية</h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <FadeIn delay={100}>
              <InvestmentAdvantage
                icon={<Globe className="h-6 w-6" />}
                number="01"
                title="سوق ضخم"
                description="سوق الزراعة الذكية في المنطقة في نمو متسارع مدفوع برؤية 2030 والأمن الغذائي."
              />
            </FadeIn>
            <FadeIn delay={150}>
              <InvestmentAdvantage
                icon={<Shield className="h-6 w-6" />}
                number="02"
                title="توطين استراتيجي"
                description="تماشٍ تام مع رؤية 2030، الأمن الغذائي، وبرامج التوطين — بما يتقاطع مع أولويات الأمن الغذائي والتوطين."
              />
            </FadeIn>
            <FadeIn delay={200}>
              <InvestmentAdvantage
                icon={<Award className="h-6 w-6" />}
                number="03"
                title="ملكية فكرية محمية"
                description="نموذج صناعي مسجّل SAIP #423450193 — حماية قانونية واضحة للمنتج الأساسي."
              />
            </FadeIn>
            <FadeIn delay={250}>
              <InvestmentAdvantage
                icon={<Users className="h-6 w-6" />}
                number="04"
                title="فريق متخصص"
                description="فريق تأسيسي يجمع التقنية والأعمال والتشغيل الميداني في السوق السعودي."
              />
            </FadeIn>
            <FadeIn delay={300}>
              <InvestmentAdvantage
                icon={<Rocket className="h-6 w-6" />}
                number="05"
                title="قابلية توسع خليجية"
                description="نموذج قابل للتكرار في دول الخليج — بنفس المنظومة وتكيّف محدود."
              />
            </FadeIn>
            <FadeIn delay={350}>
              <InvestmentAdvantage
                icon={<Building className="h-6 w-6" />}
                number="06"
                title="أصول تشغيلية"
                description="مرفق R&D في عسفان الميداني، 5+ ورش عمل، ونماذج Hydroponics مُختبَرة."
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ============================================================
          3. التفاصيل المالية — عند الطلب
          ============================================================ */}
      <section className="bg-white section-padding">
        <div className="container-igarden">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="bg-[var(--color-surface)] rounded-2xl p-8 border border-[var(--color-border)] flex items-start gap-4">
                <FileText
                  className="h-6 w-6 text-[var(--color-accent-600)] flex-shrink-0 mt-1"
                  aria-hidden="true"
                />
                <p className="text-[var(--color-muted)] text-lg leading-relaxed">
                  التفاصيل المالية ونطاق الاحتياج التمويلي متاحان ضمن Investor
                  Pack عند الطلب للشركاء المؤهلين.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ============================================================
          4. لماذا الآن؟
          ============================================================ */}
      <section className="bg-[var(--color-surface)] section-padding" dir="rtl">
        <div className="container-igarden">
          <FadeIn>
            <div className="max-w-3xl mx-auto">
              <p className="heading-eyebrow mb-4">التوقيت</p>
              <h2 className="heading-section mb-6">لماذا الآن؟</h2>
              <div className="space-y-4">
                {[
                  {
                    num: "01",
                    text: "رؤية 2030 تضع الأمن الغذائي والزراعة الذكية في صلب الأولويات الوطنية — والسوق لا يزال شحيح الحلول المحلية المتخصصة.",
                  },
                  {
                    num: "02",
                    text: "التشغيل الميداني بدأ: مرفق R&D في عسفان قائم منذ 2025، و5 ورش «ازرع بذكاء» مُنفَّذة. ليس مجرد فكرة.",
                  },
                ].map((item) => (
                  <div
                    key={item.num}
                    className="flex items-start gap-5 bg-white rounded-2xl border border-[var(--color-border)] p-6"
                  >
                    <span className="font-mono text-xl font-bold text-[var(--color-accent-500)] flex-shrink-0">
                      {item.num}
                    </span>
                    <p className="text-[var(--color-muted)] leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ============================================================
          5. ماذا بُني فعلاً؟
          ============================================================ */}
      <section className="bg-white section-padding" dir="rtl">
        <div className="container-igarden">
          <FadeIn>
            <div className="max-w-3xl mx-auto">
              <p className="heading-eyebrow mb-4">ما تم فعلاً</p>
              <h2 className="heading-section mb-6">ماذا بُني فعلاً؟</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "منظومة Smart Controllers (ESP32 + Raspberry Pi)",
                  "واجهة Smart OS — تشغيل على demo.igarden.sa",
                  "مرفق R&D في عسفان — 5 ورش عمل + نماذج Hydroponics مُختبَرة منذ 2025",
                  "نموذج صناعي مسجّل SAIP #423450193 (iGarden Tower)",
                  "رخصة MISA وسجل تجاري رسمي منذ فبراير 2026",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] p-4"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[var(--color-accent-500)] flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <p className="text-sm text-[var(--color-foreground)] leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ============================================================
          6. ما الذي لا نبنيه الآن؟
          ============================================================ */}
      <section className="bg-[var(--color-surface)] section-padding" dir="rtl">
        <div className="container-igarden">
          <FadeIn>
            <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-[var(--color-border)] p-8 md:p-10">
              <p className="heading-eyebrow mb-4">حدود واضحة</p>
              <h2 className="text-2xl font-bold text-[var(--color-brand-600)] mb-2">
                ما الذي لا نبنيه الآن؟
              </h2>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                الوضوح في ما لا نفعله بنفس أهمية ما نفعله.
              </p>
              <div className="space-y-3">
                {[
                  "لا نطوّر أجهزة حساسات من الصفر — نوطّن منظومات عالمية لمناخنا.",
                  "لا نبني متجراً B2C الآن — تركيزنا على B2B وB2G.",
                  "لا نتوسع خارج المملكة قبل تحقيق Break-even محلي.",
                  "لا نستثمر في تسويق مدفوع الآن — نمو عضوي + شراكات مباشرة.",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 text-sm text-[var(--color-muted)]"
                  >
                    <span className="text-amber-500 font-bold flex-shrink-0">✕</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ============================================================
          7. نوع الشركاء المطلوبين
          ============================================================ */}
      <section className="bg-white section-padding" dir="rtl">
        <div className="container-igarden">
          <FadeIn>
            <div className="max-w-3xl mx-auto">
              <p className="heading-eyebrow mb-4">من نبحث عنه</p>
              <h2 className="heading-section mb-6">نوع الشركاء المطلوبين</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {[
                  {
                    title: "مستثمر استراتيجي",
                    desc: "يؤمن بمستقبل الزراعة الذكية في المملكة ويملك شبكة صناعية أو حكومية.",
                  },
                  {
                    title: "شريك تشغيلي",
                    desc: "مزارع كبيرة أو مشغلو سلاسل غذائية يريدون رفع كفاءتهم بأنظمة تحكم ذكي.",
                  },
                  {
                    title: "مسرّع أو برنامج دعم",
                    desc: "مسرّعات زراعية أو برامج حكومية تدعم التوطين التقني والأمن الغذائي.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-6"
                  >
                    <h3 className="font-bold text-[var(--color-brand-600)] mb-2">{item.title}</h3>
                    <p className="text-sm text-[var(--color-muted)] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ============================================================
          8. CTA نهائي
          ============================================================ */}
      <section className="bg-[var(--color-brand-600)] text-white section-padding">
        <div className="container-igarden">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="heading-eyebrow mb-4 text-[var(--color-accent-300)]">اتخذ خطوتك</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                هل أنت مهتم بمعرفة المزيد؟
              </h2>
              <p className="text-lg text-white/80 leading-relaxed">
                نرحب بكل مستثمر ومسرّع وجهة داعمة تؤمن بمستقبل الزراعة الذكية في المنطقة.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-3xl mx-auto">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
                <FileText className="h-8 w-8 text-[var(--color-accent-300)] mx-auto mb-3" />
                <h4 className="font-bold text-white mb-2">ملف المستثمرين</h4>
                <p className="text-lg text-white/60 mb-4">PDF شامل عند الطلب</p>
                <PitchDeckButton compact />
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
                <FileText className="h-8 w-8 text-[var(--color-accent-300)] mx-auto mb-3" />
                <h4 className="font-bold text-white mb-2">احجز موعداً</h4>
                <p className="text-lg text-white/60 mb-4">لقاء مباشر</p>
                <Button variant="accent" size="sm" asChild>
                  <Link href="/contact">احجز الآن</Link>
                </Button>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
                <Mail className="h-8 w-8 text-[var(--color-accent-300)] mx-auto mb-3" />
                <h4 className="font-bold text-white mb-2">تواصل مباشر</h4>
                <p className="text-lg text-white/60 mb-4" dir="ltr">
                  {CONTACT.email}
                </p>
                <Button variant="light" size="sm" asChild>
                  <a href={`mailto:${CONTACT.email}`}>أرسل بريداً</a>
                </Button>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <p className="text-center text-white/40 text-sm mt-10 max-w-2xl mx-auto leading-relaxed">
              المحتوى المنشور هنا تعريفي فقط، ولا يُعد عرضاً استثمارياً أو دعوة للاكتتاب أو
              ضماناً للعائد. تتوفر التفاصيل المالية ومواد المستثمرين عند الطلب للشركاء
              المؤهلين.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

/* ============================================================
   مكونات داخلية
   ============================================================ */

function PitchDeckButton({ compact = false }: { compact?: boolean }) {
  return (
    <Button
      variant={compact ? "outline" : "light"}
      size={compact ? "sm" : "lg"}
      asChild
    >
      <Link
        href="/contact?interest=investor&type=pitch-deck"
        aria-label="اطلب ملف المستثمرين"
      >
        <Mail className="h-4 w-4" />
        {compact ? "اطلب الملف" : "اطلب ملف المستثمرين"}
      </Link>
    </Button>
  );
}

function QuickFactCard({
  icon,
  label,
  value,
  unit,
  mono = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  unit: string;
  mono?: boolean;
}) {
  return (
    <div className="bg-white rounded-2xl p-7 border border-[var(--color-border)] shadow-[var(--shadow-soft)] hover:border-[var(--color-accent-500)] transition-colors">
      <div className="h-12 w-12 rounded-xl bg-[var(--color-brand-50)] text-[var(--color-brand-600)] flex items-center justify-center mb-5">
        {icon}
      </div>
      <p className="text-lg text-[var(--color-muted)] uppercase tracking-wider mb-2">{label}</p>
      <p
        className={`text-2xl font-extrabold text-[var(--color-brand-600)] leading-tight ${mono ? "font-mono text-xl" : ""}`}
        data-num
      >
        {value}
      </p>
      <p className="text-lg text-[var(--color-muted)] mt-1">{unit}</p>
    </div>
  );
}

function InvestmentAdvantage({
  icon,
  number,
  title,
  description,
}: {
  icon: React.ReactNode;
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-7 border border-[var(--color-border)] hover:border-[var(--color-accent-500)] transition-colors shadow-[var(--shadow-soft)]">
      <div className="flex items-start justify-between mb-5">
        <div className="h-12 w-12 rounded-xl bg-[var(--color-brand-600)] text-[var(--color-accent-300)] flex items-center justify-center">
          {icon}
        </div>
        <span className="text-3xl font-extrabold text-[var(--color-brand-100)]" data-num>
          {number}
        </span>
      </div>
      <h3 className="text-xl font-bold text-[var(--color-brand-600)] mb-3">{title}</h3>
      <p className="text-lg text-[var(--color-muted)] leading-relaxed">{description}</p>
    </div>
  );
}

