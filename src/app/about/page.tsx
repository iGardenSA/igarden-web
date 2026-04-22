import type { Metadata } from "next";
import Link from "next/link";
import {
  Eye, Target, Sparkles, Award, Users, Leaf,
  Shield, Globe, Rocket, ArrowLeft, MapPin, Calendar,
  Lightbulb, Heart, TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "من نحن",
  description:
    "iGarden — شركة الحديقة الذكية | فريق مؤسس ثلاثي يقود التحول الرقمي الزراعي في المملكة العربية السعودية ودعم رؤية 2030 والأمن الغذائي.",
};

export default function AboutPage() {
  return (
    <>
      {/* ============================================================
          1. Hero
          ============================================================ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--color-brand-600)] via-[var(--color-brand-500)] to-[var(--color-brand-600)] text-white">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, var(--color-accent-500) 0%, transparent 40%), radial-gradient(circle at 80% 70%, var(--color-accent-300) 0%, transparent 40%)",
          }}
        />
        <div className="container-igarden relative py-20 md:py-28">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-accent-500)]/30 bg-[var(--color-accent-500)]/10 text-[var(--color-accent-300)] text-sm font-semibold mb-8">
              <MapPin className="h-4 w-4" />
              <span>جدة · المملكة العربية السعودية</span>
            </div>
            <p className="heading-eyebrow mb-6 text-[var(--color-accent-300)]">من نحن</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-white mb-6">
              نقود التحول الرقمي الزراعي
              <br />
              <span className="text-[var(--color-accent-300)]">في المنطقة.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-3xl">
              <span className="font-bold text-white">{COMPANY.legalEn}</span> — شركة سعودية مقرها جدة،
              مرخّصة من وزارة الاستثمار، نؤمن بأن مستقبل الأمن الغذائي يبدأ بدمج التقنية في الزراعة —
              وأن هذا المستقبل يُصنع محلياً، ويبدأ من هنا.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          2. رحلتنا — Timeline
          ============================================================ */}
      <section className="bg-[var(--color-surface)] section-padding">
        <div className="container-igarden">
          <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
            <p className="heading-eyebrow mb-4">رحلتنا</p>
            <h2 className="heading-section mb-6">من فكرة إلى شركة مسجّلة</h2>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed">
              رحلة قصيرة زمنياً، لكن مليئة بالعمل والتعلّم والتحقّق من كل قرار.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* الخط العمودي */}
            <div
              className="absolute top-0 bottom-0 right-6 md:right-1/2 md:translate-x-1/2 w-0.5 bg-[var(--color-brand-200)]"
              aria-hidden
            />

            <div className="space-y-10 md:space-y-14">
              <TimelineItem
                side="right"
                year="2025"
                title="انطلاق الفكرة والتطوير"
                description="بدأت رحلة iGarden بفكرة دمج IoT مع الزراعة الذكية. قضينا العام في بناء النماذج الأولية، تجربة التقنيات (Hydroponics, Aquaponics, Aeroponics)، وتطوير أنظمة التحكم بالحساسات ودرجة الحموضة والتحكم المناخي."
              />
              <TimelineItem
                side="left"
                year="2026"
                title="تأسيس الشركة رسمياً"
                description="سجّلنا الشركة بترخيص استثماري رسمي من وزارة الاستثمار (رقم 24926249716)، وحصلنا على نموذج صناعي مسجل لـ iGarden Tower — انطلاقاً من جدة نحو تحول رقمي زراعي في المنطقة."
              />
              <TimelineItem
                side="right"
                year="2026"
                title="المشاركات والشراكات"
                description="شاركنا في معرض Agrofood 2025، وبدأنا بناء شراكات استراتيجية مع جهات حكومية وأكاديمية وتجارية، مع التحضير لإطلاق أول الحلول التجارية في السوق السعودي."
                future
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          3. الرؤية والرسالة
          ============================================================ */}
      <section className="bg-white section-padding">
        <div className="container-igarden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            <PurposeCard
              icon={<Eye className="h-7 w-7" />}
              eyebrow="رؤيتنا"
              title="الخيار الأول للتحول الرقمي الزراعي"
              description="أن نكون الخيار الأول في التحول الرقمي الزراعي بالمنطقة، وقيادة مستقبل الأمن الغذائي عبر تقنيات ذكية ومستدامة."
            />
            <PurposeCard
              icon={<Target className="h-7 w-7" />}
              eyebrow="رسالتنا"
              title="تمكين الجميع من زراعة ذكية"
              description="تمكين الجميع من زراعة ذكية ومستدامة عبر أحدث تقنيات IoT & AI، لتحويل الزراعة التقليدية إلى منظومة منتجة وكفؤة."
              accent
            />
          </div>
        </div>
      </section>

      {/* ============================================================
          4. الدوافع — Why
          ============================================================ */}
      <section className="bg-[var(--color-surface)] section-padding">
        <div className="container-igarden">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="heading-eyebrow mb-4">لماذا iGarden؟</p>
            <h2 className="heading-section mb-6">الدوافع التي تحرّكنا</h2>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed">
              كل قرار نتخذه، وكل منتج نطوّره، ينبع من قناعة عميقة بأربعة محاور مترابطة.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            <DriverCard
              icon={<Globe className="h-6 w-6" />}
              number="01"
              title="دعم رؤية 2030"
              description="توطين التقنية الزراعية المتقدمة محلياً، وبناء قدرات وطنية في AgriTech تُقلّل الاعتماد على الاستيراد وتدعم أهداف التنمية المستدامة."
            />
            <DriverCard
              icon={<Shield className="h-6 w-6" />}
              number="02"
              title="تحديات الأمن الغذائي"
              description="تستورد المنطقة نسبة كبيرة من احتياجاتها الغذائية، ومواردها المائية محدودة. نسعى لأن نكون جزءاً من الحل عبر حلول زراعية كفؤة ومتوطّنة."
            />
            <DriverCard
              icon={<Leaf className="h-6 w-6" />}
              number="03"
              title="حلول مستدامة"
              description="نقدّم للمجتمع حلولاً تحترم الموارد وتحفظ البيئة — 95% توفير في المياه، 50% خفض للأسمدة، وكفاءة طاقة عالية في كل أنظمتنا."
            />
            <DriverCard
              icon={<Rocket className="h-6 w-6" />}
              number="04"
              title="فرصة سوقية كبيرة"
              description="قطاع الزراعة الذكية في الخليج ينمو بوتيرة متسارعة، والسوق السعودي وحده فرصة واعدة لم تُستغل بعد بشكل كافٍ — ونحن هنا لنكون في المقدمة."
            />
          </div>
        </div>
      </section>

      {/* ============================================================
          5. الفريق المؤسس
          ============================================================ */}
      <section className="bg-white section-padding">
        <div className="container-igarden">
          <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
            <p className="heading-eyebrow mb-4">فريق التأسيس</p>
            <h2 className="heading-section mb-6">ثلاثة شركاء · رؤية واحدة</h2>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed">
              فريق مؤسس يجمع بين الخبرة التقنية والرؤية الاستراتيجية والتنفيذ العملي —
              مع التزام راسخ بقيم المنطقة وأهداف رؤية المملكة.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <FounderCard
              name="علي محمد غنيمه"
              nameEn="Ali M. Ghanimah"
              role="المؤسس والمدير العام"
              roleEn="Founder & CEO"
              bio="قائد الرؤية الاستراتيجية في iGarden ومهندس المنظومة التكاملية بين العتاد والبرمجيات والمعرفة. يشرف على مجمل عمليات الشركة والعلاقات مع الشركاء والجهات الحكومية."
              highlight
            />
            <FounderCard
              name="محمد يعن الله الكثيري"
              nameEn="Mohammed Y. Alkathiri"
              role="شريك تنفيذي"
              roleEn="Executive Partner"
              bio="مسؤول عن التنفيذ التشغيلي والتطوير التجاري في المملكة، ويقود جهود التوسّع وبناء العلاقات مع العملاء والمستثمرين المحليين."
            />
            <FounderCard
              name="أيمن حسين المخزوم"
              nameEn="Ayman H. Almakhzoum"
              role="شريك تقني"
              roleEn="Technical Partner"
              bio="يقود الجانب التقني في تطوير الأنظمة والحلول الذكية — من تصميم العتاد إلى تطوير منصة iGarden Cloud ودمج الذكاء الاصطناعي وإنترنت الأشياء."
            />
          </div>
        </div>
      </section>

      {/* ============================================================
          6. القيم
          ============================================================ */}
      <section className="bg-[var(--color-brand-600)] text-white section-padding">
        <div className="container-igarden">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="heading-eyebrow mb-4 text-[var(--color-accent-300)]">قيمنا الراسخة</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              المبادئ التي نبني عليها
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <ValueCard icon={<Sparkles className="h-6 w-6" />} title="الابتكار" description="حلول إبداعية تسبق التطلعات." />
            <ValueCard icon={<Award className="h-6 w-6" />} title="الجودة" description="الالتزام بأعلى معايير الدقة." />
            <ValueCard icon={<Heart className="h-6 w-6" />} title="العميل أولاً" description="شراكة حقيقية لنجاح العميل." />
            <ValueCard icon={<Leaf className="h-6 w-6" />} title="الاستدامة" description="ضمان مستقبل أخضر للأجيال." />
          </div>

          <div className="text-center mt-14">
            <Button variant="accent" size="lg" asChild>
              <Link href="/contact">
                تحدّث معنا
                <ArrowLeft className="rotate-180" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

/* ============================================================
   مكونات داخلية
   ============================================================ */

function TimelineItem({
  side,
  year,
  title,
  description,
  future = false,
}: {
  side: "right" | "left";
  year: string;
  title: string;
  description: string;
  future?: boolean;
}) {
  const isRight = side === "right";
  return (
    <div className="relative grid md:grid-cols-2 gap-6 items-start">
      {/* نقطة الخط */}
      <div className="absolute right-6 md:right-1/2 md:translate-x-1/2 top-2 z-10" aria-hidden>
        <div className={`h-4 w-4 rounded-full border-4 ${future ? "bg-white border-[var(--color-accent-500)]" : "bg-[var(--color-accent-500)] border-[var(--color-brand-600)]"}`} />
      </div>

      <div className={isRight ? "md:order-2 md:pl-10" : "md:order-1 md:pr-10 md:text-left"}>
        {!isRight && <div />}
      </div>

      <div className={`pr-16 md:pr-0 ${isRight ? "md:order-1 md:pr-10 md:text-end" : "md:order-2 md:pl-10"}`}>
        <div className="bg-white rounded-2xl p-6 md:p-7 border border-[var(--color-border)] shadow-[var(--shadow-soft)]">
          <div className="flex items-center gap-3 mb-3">
            {future && (
              <Badge variant="accent">قادم</Badge>
            )}
            <span
              className="inline-flex items-center gap-2 text-sm font-bold text-[var(--color-brand-600)]"
              data-num
            >
              <Calendar className="h-4 w-4" />
              {year}
            </span>
          </div>
          <h3 className="text-xl font-bold text-[var(--color-brand-600)] mb-3">{title}</h3>
          <p className="text-sm md:text-base text-[var(--color-muted)] leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}

function PurposeCard({
  icon, eyebrow, title, description, accent = false,
}: {
  icon: React.ReactNode;
  eyebrow: string;
  title: string;
  description: string;
  accent?: boolean;
}) {
  return (
    <Card className="p-2">
      <CardHeader>
        <div
          className={`h-14 w-14 rounded-2xl flex items-center justify-center mb-4 ${
            accent
              ? "bg-[var(--color-accent-500)] text-[var(--color-brand-700)]"
              : "bg-[var(--color-brand-50)] text-[var(--color-brand-600)]"
          }`}
        >
          {icon}
        </div>
        <p className="heading-eyebrow mb-2">{eyebrow}</p>
        <CardTitle className="text-2xl md:text-3xl mb-3">{title}</CardTitle>
        <CardDescription className="text-base leading-relaxed">{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}

function DriverCard({
  icon, number, title, description,
}: {
  icon: React.ReactNode;
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-7 border border-[var(--color-border)] hover:border-[var(--color-accent-500)] transition-colors">
      <div className="flex items-start justify-between mb-5">
        <div className="h-12 w-12 rounded-xl bg-[var(--color-brand-600)] text-[var(--color-accent-300)] flex items-center justify-center">
          {icon}
        </div>
        <span className="text-3xl font-extrabold text-[var(--color-brand-100)] leading-none" data-num>{number}</span>
      </div>
      <h3 className="text-xl font-bold text-[var(--color-brand-600)] mb-3">{title}</h3>
      <p className="text-sm md:text-base text-[var(--color-muted)] leading-relaxed">{description}</p>
    </div>
  );
}

function FounderCard({
  name, nameEn, role, roleEn, bio, highlight = false,
}: {
  name: string;
  nameEn: string;
  role: string;
  roleEn: string;
  bio: string;
  highlight?: boolean;
}) {
  const initials = nameEn.split(" ").map((n) => n[0]).slice(0, 2).join("");
  return (
    <div
      className={`rounded-2xl p-7 md:p-8 border-2 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col ${
        highlight
          ? "bg-[var(--color-brand-600)] border-[var(--color-accent-500)] text-white shadow-[var(--shadow-md)]"
          : "bg-white border-[var(--color-border)] hover:border-[var(--color-brand-300)] shadow-[var(--shadow-soft)]"
      }`}
    >
      {/* Avatar دائري مع الأحرف الأولى */}
      <div
        className={`h-20 w-20 rounded-full flex items-center justify-center mb-6 font-bold text-2xl ${
          highlight
            ? "bg-[var(--color-accent-500)] text-[var(--color-brand-700)]"
            : "bg-[var(--color-brand-50)] text-[var(--color-brand-600)]"
        }`}
        data-num
      >
        {initials}
      </div>

      <h3 className={`text-xl md:text-2xl font-bold mb-1 ${highlight ? "text-white" : "text-[var(--color-brand-600)]"}`}>
        {name}
      </h3>
      <p className={`text-sm mb-4 ${highlight ? "text-white/70" : "text-[var(--color-muted)]"}`} dir="ltr">
        {nameEn}
      </p>

      <div className={`inline-flex self-start px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 ${
        highlight
          ? "bg-[var(--color-accent-500)]/20 text-[var(--color-accent-300)]"
          : "bg-[var(--color-brand-50)] text-[var(--color-brand-600)]"
      }`}>
        {role}
      </div>

      <p className={`text-sm md:text-base leading-relaxed ${highlight ? "text-white/80" : "text-[var(--color-muted)]"}`}>
        {bio}
      </p>
    </div>
  );
}

function ValueCard({
  icon, title, description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 md:p-6 hover:bg-white/10 hover:border-[var(--color-accent-500)]/50 transition-all">
      <div className="h-11 w-11 rounded-xl bg-[var(--color-accent-500)] text-[var(--color-brand-700)] flex items-center justify-center mb-4">
        {icon}
      </div>
      <h4 className="text-base md:text-lg font-bold text-white mb-2">{title}</h4>
      <p className="text-xs md:text-sm text-white/70 leading-relaxed">{description}</p>
    </div>
  );
}
