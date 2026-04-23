import type { Metadata } from "next";
import Link from "next/link";
import {
  TrendingUp, Shield, Globe, Users, Award, Rocket,
  Building, FileText, Calendar, ArrowLeft, CheckCircle2,
  Download, Mail, Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { GlowAccent } from "@/components/ui/glow-accent";
import { CONTACT, COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "المستثمرون",
  description:
    "iGarden — فرصة استثمارية في AgriFood Tech السعودية. شركة مرخّصة، نموذج صناعي مسجل، توقعات نمو 150% سنوياً.",
};

export default function InvestorsPage() {
  return (
    <>
      {/* ============================================================
          Hero
          ============================================================ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--color-brand-600)] via-[var(--color-brand-500)] to-[var(--color-brand-600)] text-white">
        <GlowAccent position="top-right" intensity="subtle" color="lime" />
        <div className="container-igarden relative py-20 md:py-28">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-accent-500)]/30 bg-[var(--color-accent-500)]/10 text-[var(--color-accent-300)] text-sm font-semibold mb-8 uppercase tracking-widest">
              <Award className="h-4 w-4" />
              <span>Sunbolah 2026 · Series Seed Ready</span>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-white mb-6">
              استثمر في مستقبل
              <br />
              <span className="text-[var(--color-accent-300)]">الزراعة الذكية</span>
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-3xl mb-10">
              iGarden شركة AgriFood Tech سعودية مُرخّصة، بترخيص استثماري رسمي ونموذج صناعي
              مسجل، نبحث عن شركاء استراتيجيين للتوسع الإقليمي.
            </p>
          </FadeIn>
          <FadeIn delay={300}>
            <div className="flex flex-wrap gap-4">
              <PitchDeckButton />
              <Button variant="light" size="lg" asChild>
                <Link href="/contact">
                  احجز لقاء مستثمرين
                  <ArrowLeft className="rotate-180" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ============================================================
          1. لمحة سريعة
          ============================================================ */}
      <section className="bg-white section-padding">
        <div className="container-igarden">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="heading-eyebrow mb-4">لمحة سريعة</p>
              <h2 className="heading-section mb-4">الحقائق الأساسية</h2>
              <p className="text-[var(--color-muted)] text-lg leading-relaxed">
                كل ما تحتاج معرفته في أربعة أرقام.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <FadeIn delay={100}>
              <QuickFactCard
                icon={<Building className="h-6 w-6" />}
                label="رأس المال المسجل"
                value="100,000"
                unit="ريال"
              />
            </FadeIn>
            <FadeIn delay={150}>
              <QuickFactCard
                icon={<Calendar className="h-6 w-6" />}
                label="تاريخ التأسيس"
                value="فبراير"
                unit="2026"
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
          2. التوقعات المالية
          ============================================================ */}
      <section className="bg-[var(--color-surface)] section-padding">
        <div className="container-igarden">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="heading-eyebrow mb-4">التوقعات المالية</p>
              <h2 className="heading-section mb-4">نمو 150% سنوياً</h2>
              <p className="text-[var(--color-muted)] text-lg leading-relaxed">
                توقعات محافظة مبنية على تحليل سوقي دقيق وخطة تنفيذ واضحة.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FadeIn delay={100}>
              <FinancialCard
                year="2026"
                revenue="2.4M"
                net="0.3M"
                label="انطلاق السوق"
                highlight={false}
                barWidth="19"
              />
            </FadeIn>
            <FadeIn delay={200}>
              <FinancialCard
                year="2027"
                revenue="6.9M"
                net={null}
                label="تحوّل وتوسع"
                highlight={false}
                barWidth="55"
              />
            </FadeIn>
            <FadeIn delay={300}>
              <FinancialCard
                year="2028"
                revenue="12.5M"
                net={null}
                label="وصول خليجي"
                highlight
                barWidth="100"
              />
            </FadeIn>
          </div>

          <FadeIn delay={350}>
            <div className="mt-8 p-6 bg-[var(--color-brand-600)] rounded-2xl text-center">
              <p className="text-white/80 text-sm mb-1">التراكمي 3 سنوات</p>
              <p className="text-3xl md:text-4xl font-extrabold text-[var(--color-accent-300)]" data-num>
                17.3M+ ريال
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ============================================================
          3. نموذج الإيرادات
          ============================================================ */}
      <section className="bg-white section-padding">
        <div className="container-igarden">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="heading-eyebrow mb-4">نموذج الإيرادات</p>
              <h2 className="heading-section mb-4">4 مصادر دخل متنوعة</h2>
              <p className="text-[var(--color-muted)] text-lg leading-relaxed">
                تنويع الإيرادات يضمن الاستقرار ويقلل المخاطر.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <FadeIn delay={100}>
              <RevenueCard
                percentage={40}
                title="مبيعات الأنظمة"
                subtitle="Hardware + Installation"
                colorClass="border-[var(--color-brand-600)]"
                textColorClass="text-[var(--color-brand-600)]"
                barColorClass="bg-[var(--color-brand-600)]"
              />
            </FadeIn>
            <FadeIn delay={150}>
              <RevenueCard
                percentage={30}
                title="اشتراكات SaaS"
                subtitle="Cloud Platform"
                colorClass="border-[var(--color-accent-500)]"
                textColorClass="text-[var(--color-accent-700)]"
                barColorClass="bg-[var(--color-accent-500)]"
              />
            </FadeIn>
            <FadeIn delay={200}>
              <RevenueCard
                percentage={20}
                title="تدريب واستشارات"
                subtitle="Knowledge Services"
                colorClass="border-amber-400"
                textColorClass="text-amber-700"
                barColorClass="bg-amber-400"
              />
            </FadeIn>
            <FadeIn delay={250}>
              <RevenueCard
                percentage={10}
                title="صيانة ودعم"
                subtitle="Annual Contracts"
                colorClass="border-[var(--color-brand-300)]"
                textColorClass="text-[var(--color-brand-500)]"
                barColorClass="bg-[var(--color-brand-300)]"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ============================================================
          4. الميزات الاستثمارية
          ============================================================ */}
      <section className="bg-[var(--color-surface)] section-padding">
        <div className="container-igarden">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="heading-eyebrow mb-4">لماذا iGarden؟</p>
              <h2 className="heading-section mb-4">الميزات الاستثمارية</h2>
              <p className="text-[var(--color-muted)] text-lg leading-relaxed">
                ستة أسباب تجعل iGarden فرصة استثمارية استثنائية.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <FadeIn delay={100}>
              <InvestmentAdvantage
                icon={<Globe className="h-6 w-6" />}
                number="01"
                title="سوق ضخم"
                description="سوق الزراعة الذكية في المنطقة يتجاوز 45+ مليار ريال، مع نمو متسارع مدفوع برؤية 2030."
              />
            </FadeIn>
            <FadeIn delay={150}>
              <InvestmentAdvantage
                icon={<TrendingUp className="h-6 w-6" />}
                number="02"
                title="نمو متسارع"
                description="CAGR 8-10% في قطاع AgriTech الخليجي مع ندرة الحلول المحلية المتخصصة."
              />
            </FadeIn>
            <FadeIn delay={200}>
              <InvestmentAdvantage
                icon={<Shield className="h-6 w-6" />}
                number="03"
                title="توطين استراتيجي"
                description="تماشٍ تام مع رؤية 2030، الأمن الغذائي، وبرامج التوطين — مما يُسهّل الحصول على الدعم الحكومي."
              />
            </FadeIn>
            <FadeIn delay={250}>
              <InvestmentAdvantage
                icon={<Award className="h-6 w-6" />}
                number="04"
                title="ملكية فكرية محمية"
                description="نموذج صناعي مسجل SAIP #423450193 — حماية قانونية واضحة للمنتج الأساسي."
              />
            </FadeIn>
            <FadeIn delay={300}>
              <InvestmentAdvantage
                icon={<Users className="h-6 w-6" />}
                number="05"
                title="فريق خبير"
                description="فريق تأسيسي بخبرة تراكمية تزيد عن 15 عاماً يجمع التقنية والأعمال والتشغيل."
              />
            </FadeIn>
            <FadeIn delay={350}>
              <InvestmentAdvantage
                icon={<Rocket className="h-6 w-6" />}
                number="06"
                title="قابلية توسع خليجية"
                description="نموذج قابل للتكرار في الإمارات والكويت والبحرين — بنفس المنظومة وتكيّف محدود."
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ============================================================
          5. توزيع التمويل
          ============================================================ */}
      <section className="bg-white section-padding">
        <div className="container-igarden">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="text-center mb-12">
                <p className="heading-eyebrow mb-4">خطة الاستخدام</p>
                <h2 className="heading-section mb-4">توزيع التمويل</h2>
                <p className="text-[var(--color-muted)] text-lg leading-relaxed">
                  كيف نستثمر تمويل سنبلة لتحقيق أقصى أثر.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <div className="bg-[var(--color-surface)] rounded-2xl p-8 border border-[var(--color-border)] space-y-6">
                <FundingBar label="تطوير المنتج" percentage={40} />
                <FundingBar label="توزيع نماذج تجريبية" percentage={25} />
                <FundingBar label="تسويق ومبيعات" percentage={15} />
                <FundingBar label="دعم لوجستي" percentage={10} />
                <FundingBar label="تكاليف تشغيل" percentage={10} />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ============================================================
          6. شراكة EWAx
          ============================================================ */}
      <section className="bg-[var(--color-surface)] section-padding">
        <div className="container-igarden">
          <FadeIn>
            <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 md:p-10 border-2 border-[var(--color-brand-200)] shadow-[var(--shadow-soft)]">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 rounded-xl bg-[var(--color-brand-600)] text-[var(--color-accent-300)] flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div>
                  <p className="heading-eyebrow">PARTNERSHIP</p>
                  <h3 className="text-xl font-bold text-[var(--color-brand-600)]">
                    شراكتنا مع EWAx · سنبلة
                  </h3>
                </div>
              </div>
              <p className="text-[var(--color-muted)] leading-relaxed text-base md:text-lg">
                نفخر بتقديم طلب لمسرعة{" "}
                <span className="font-bold text-[var(--color-brand-600)]">سنبلة EWAx</span>{" "}
                التابعة لوزارة البيئة والمياه والزراعة — الشراكة المثالية لتحقيق أهدافنا المشتركة
                في تطوير القطاع الزراعي وتحقيق الأمن الغذائي للمملكة.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "مصادقة حكومية",
                  "شبكة موردين",
                  "دعم تسويقي",
                  "وصول للأسواق",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 bg-[var(--color-brand-50)] text-[var(--color-brand-600)] text-sm font-medium rounded-full border border-[var(--color-brand-200)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ============================================================
          7. CTA نهائي
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
                <Download className="h-8 w-8 text-[var(--color-accent-300)] mx-auto mb-3" />
                <h4 className="font-bold text-white mb-2">Pitch Deck</h4>
                <p className="text-xs text-white/60 mb-4">ملف PDF تفصيلي</p>
                <PitchDeckButton compact />
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
                <FileText className="h-8 w-8 text-[var(--color-accent-300)] mx-auto mb-3" />
                <h4 className="font-bold text-white mb-2">احجز موعداً</h4>
                <p className="text-xs text-white/60 mb-4">لقاء مستثمرين مباشر</p>
                <Button variant="accent" size="sm" asChild>
                  <Link href="/contact">احجز الآن</Link>
                </Button>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
                <Mail className="h-8 w-8 text-[var(--color-accent-300)] mx-auto mb-3" />
                <h4 className="font-bold text-white mb-2">تواصل مباشر</h4>
                <p className="text-xs text-white/60 mb-4" dir="ltr">
                  {CONTACT.email}
                </p>
                <Button variant="light" size="sm" asChild>
                  <a href={`mailto:${CONTACT.email}`}>أرسل بريداً</a>
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

function PitchDeckButton({ compact = false }: { compact?: boolean }) {
  return (
    <div className="relative group inline-block">
      <Button
        variant={compact ? "outline" : "light"}
        size={compact ? "sm" : "lg"}
        disabled
        className="cursor-not-allowed opacity-70"
        aria-label="تحميل Pitch Deck — قريباً"
      >
        <Download className="h-4 w-4" />
        {compact ? "تحميل PDF" : "تحميل Pitch Deck"}
      </Button>
      <div
        className="absolute -top-9 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-[var(--color-brand-600)] text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none"
        role="tooltip"
        aria-hidden="true"
      >
        قريباً — يُعدّ الآن
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[var(--color-brand-600)]" />
      </div>
    </div>
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
      <p className="text-xs text-[var(--color-muted)] uppercase tracking-wider mb-2">{label}</p>
      <p
        className={`text-2xl font-extrabold text-[var(--color-brand-600)] leading-tight ${mono ? "font-mono text-xl" : ""}`}
        data-num
      >
        {value}
      </p>
      <p className="text-sm text-[var(--color-muted)] mt-1">{unit}</p>
    </div>
  );
}

function FinancialCard({
  year,
  revenue,
  net,
  label,
  highlight,
  barWidth,
}: {
  year: string;
  revenue: string;
  net: string | null;
  label: string;
  highlight: boolean;
  barWidth: string;
}) {
  return (
    <div
      className={`rounded-2xl p-8 border-2 shadow-[var(--shadow-soft)] ${
        highlight
          ? "bg-[var(--color-brand-600)] border-[var(--color-accent-500)] text-white"
          : "bg-white border-[var(--color-border)]"
      }`}
    >
      <p
        className={`text-sm font-bold uppercase tracking-widest mb-2 ${
          highlight ? "text-[var(--color-accent-300)]" : "text-[var(--color-muted)]"
        }`}
      >
        {year}
      </p>
      <p
        className={`text-3xl md:text-4xl font-extrabold mb-1 ${
          highlight ? "text-[var(--color-accent-300)]" : "text-[var(--color-brand-600)]"
        }`}
        data-num
      >
        {revenue}
      </p>
      <p
        className={`text-sm mb-1 ${highlight ? "text-white/80" : "text-[var(--color-muted)]"}`}
      >
        ريال سعودي
      </p>
      {net && (
        <p
          className={`text-sm font-medium mb-4 ${
            highlight ? "text-white/70" : "text-[var(--color-muted)]"
          }`}
        >
          صافي: {net} ريال
        </p>
      )}
      <p
        className={`text-sm font-semibold mt-4 mb-4 ${
          highlight ? "text-white" : "text-[var(--color-foreground)]"
        }`}
      >
        {label}
      </p>
      <div
        className={`h-2 rounded-full ${
          highlight ? "bg-white/20" : "bg-[var(--color-brand-100)]"
        }`}
      >
        <div
          className={`h-2 rounded-full ${
            highlight ? "bg-[var(--color-accent-300)]" : "bg-[var(--color-accent-500)]"
          }`}
          style={{ width: `${barWidth}%` }}
        />
      </div>
    </div>
  );
}

function RevenueCard({
  percentage,
  title,
  subtitle,
  colorClass,
  textColorClass,
  barColorClass,
}: {
  percentage: number;
  title: string;
  subtitle: string;
  colorClass: string;
  textColorClass: string;
  barColorClass: string;
}) {
  return (
    <div
      className={`rounded-2xl border-2 p-6 text-center bg-white shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-md)] transition-shadow ${colorClass}`}
    >
      <p className={`text-5xl font-extrabold mb-2 ${textColorClass}`} data-num>
        {percentage}%
      </p>
      <p className="font-bold text-[var(--color-brand-600)] text-base mb-1">{title}</p>
      <p className="text-xs text-[var(--color-muted)]">{subtitle}</p>
      <div className="h-1.5 bg-[var(--color-border)] rounded-full mt-5">
        <div
          className={`h-1.5 rounded-full ${barColorClass}`}
          style={{ width: `${percentage * 2.5}%` }}
        />
      </div>
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
      <p className="text-sm text-[var(--color-muted)] leading-relaxed">{description}</p>
    </div>
  );
}

function FundingBar({ label, percentage }: { label: string; percentage: number }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-semibold text-[var(--color-foreground)]">{label}</span>
        <span className="text-sm font-extrabold text-[var(--color-accent-600)]" data-num>
          {percentage}%
        </span>
      </div>
      <div className="h-3 bg-[var(--color-brand-100)] rounded-full overflow-hidden">
        <div
          className="h-full bg-[var(--color-brand-600)] rounded-full"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
