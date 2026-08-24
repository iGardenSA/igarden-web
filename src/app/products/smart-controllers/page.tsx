import type { Metadata } from "next";
import Link from "next/link";
import { ProductSchema, FAQSchema, BreadcrumbSchema } from "@/components/shared/SchemaJsonLd";
import { CTAButton } from "@/components/shared/CTAButton";
import { StageHonesty } from "@/components/shared/StageHonesty";
import {
  Factory,
  Plug,
  Thermometer,
  Cpu,
  Radio,
  Gauge,
  MonitorSmartphone,
  CheckCircle2,
  AlertTriangle,
  ArrowLeft,
  Users,
  BarChart3,
  FileText,
  Bell,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Smart Controllers — لوحات التحكم الزراعي | iGarden",
  description:
    "لوحات تحكم زراعية مصمَّمة ومطوَّرة ومجمَّعة في السعودية. تتكامل مع الأنظمة ذات الواجهات والتجهيزات المدعومة. مختبرة ميدانياً في ظروف صيفية سعودية وبيئات مرتفعة الحرارة والرطوبة.",
  alternates: { canonical: "https://igarden.sa/products/smart-controllers" },
  openGraph: {
    title: "Smart Controllers — لوحات التحكم الزراعي",
    description: "مصمَّمة ومطوَّرة ومجمَّعة في السعودية · تتكامل مع الأنظمة ذات الواجهات والتجهيزات المدعومة.",
    images: [
      {
        url: "/api/og?title=Smart+Controllers+%E2%80%94+iGarden&sub=%D8%AA%D8%AD%D8%AF%D9%8A%D8%AB+%D9%85%D8%B2%D8%B1%D8%B9%D8%AA%D9%83+%D8%AF%D9%88%D9%86+%D8%A7%D8%B3%D8%AA%D8%A8%D8%AF%D8%A7%D9%84+%D9%83%D8%A7%D9%85%D9%84",
        width: 1200,
        height: 630,
        alt: "Smart Controllers — iGarden",
      },
    ],
    type: "website",
    locale: "ar_SA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Controllers — لوحات التحكم الزراعي",
    description: "مصمَّمة ومطوَّرة ومجمَّعة في السعودية · تتكامل مع الأنظمة ذات الواجهات والتجهيزات المدعومة.",
    images: ["/api/og?title=Smart+Controllers+%E2%80%94+iGarden&sub=%D8%AA%D8%AD%D8%AF%D9%8A%D8%AB+%D9%85%D8%B2%D8%B1%D8%B9%D8%AA%D9%83+%D8%AF%D9%88%D9%86+%D8%A7%D8%B3%D8%AA%D8%A8%D8%AF%D8%A7%D9%84+%D9%83%D8%A7%D9%85%D9%84"],
  },
};

/* ─── Section 1: Hero ─────────────────────────────────────── */
function Hero() {
  return (
    <section className="section-light py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-lime text-white text-lg font-bold px-3 py-1 rounded-pill">
                رأس الحربة التقني · تطوير وتجميع سعودي
              </span>
            </div>
            <p className="text-lime text-lg font-bold uppercase tracking-widest mb-3">
              لوحات التحكّم · Smart OS Powered
            </p>
            <h1 className="h1 text-deep-green mb-5">
              لا تُغيّر نظامك الزراعي.
              <span className="block">أَضف له عقلاً.</span>
            </h1>
            <p className="body-base text-medium-gray mb-4 max-w-lg">
              Smart Controllers من iGarden تَربط حسّاساتك ومضخّاتك ونظام الري
              الحالي بلوحة تَحكّم واحدة. تَعرف حالة الماء والتغذية والمناخ
              وفق دورية القياس وإعدادات الاتصال — ما يساعد على اكتشاف
              الانحراف مبكراً وتقليص زمن الاستجابة.
            </p>
            <p className="body-sm text-medium-gray mb-8 max-w-lg">
              مصمَّمة ومطوَّرة ومجمَّعة في السعودية · مكوّنات عالمية · دعم فني داخل السعودية · توفير ودعم قطع الغيار محلياً بحسب نطاق المشروع.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <CTAButton href="/contact?interest=controllers&cta=readiness_assessment" variant="lime">
                اطلب تقييماً أولياً
              </CTAButton>
              <CTAButton
                href="https://demo.igarden.sa"
                variant="outline-green"
                external
              >
                شاهد البيانات الحيّة ↗
              </CTAButton>
            </div>
          </div>

          <div
            className="relative aspect-[4/3] rounded-card overflow-hidden bg-brand-600 flex items-center justify-center"
            role="img"
            aria-label="لوحة Smart Controller من مرفق R&D في عسفان"
          >
            <Cpu className="w-20 h-20 text-white/20" aria-hidden />
            <span className="absolute bottom-4 left-4 text-white/60 text-sm font-medium">
              اختبار وظيفي وميداني · مجمَّعة في السعودية
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Section 2: Status (Flagship-exclusive) ──────────────── */
function StatusCard() {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-3xl mx-auto bg-cream rounded-card p-6 border-s-4 border-lime shadow-soft">
          <p className="text-lime text-lg font-bold uppercase tracking-widest mb-2">
            جاهز للتشغيل
          </p>
          <h2 className="h4 text-deep-green mb-3">نظام تحكّم ذكي متكامل، مُختبَر ميدانياً</h2>
          <p className="body-base text-medium-gray mb-4">
            نظام تحكّم زراعي متكامل، مختبر ميدانياً في ظروف صيفية سعودية وبيئات
            مرتفعة الحرارة والرطوبة داخل مرفق R&D في عسفان. اللوحة ليست منتجاً
            رفّياً موحّداً — تُصمَّم وتُجهَّز بحسب المشروع: نبدأ بتقييم ميداني
            لمزرعتك، ثم نُحدّد النطاق والتجهيزات الأنسب لمحصولك وبيئتك.
          </p>
          <Link
            href="/contact?interest=controllers&cta=readiness_assessment"
            className="text-lime font-medium hover:text-deep-green transition-colors text-lg"
          >
            اطلب تقييماً أولياً ←
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Section 2.1: حالة القدرة ─────────────────────────────
   تصنيف صريح يمنع قراءة القدرات على أنها كلّها جاهزة افتراضياً. */
const CAPABILITY_STATE = [
  {
    tier: "متاح ضمن التجهيز",
    items: ["القياس", "الربط", "لوحة العرض", "التشغيل المحلي وعن بُعد بحسب التجهيز"],
  },
  {
    tier: "حسب نطاق المشروع",
    items: ["الأتمتة", "التنبيهات", "السجلات", "التقارير", "واتساب والتكاملات"],
  },
  {
    tier: "قيد التطوير",
    items: ["التحليلات المتقدمة", "اكتشاف الشذوذ", "رشيد التشغيلي"],
  },
];

function CapabilityState() {
  return (
    <section className="section-light py-12" dir="rtl">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="h4 text-deep-green mb-6 text-center">حالة القدرة</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {CAPABILITY_STATE.map((c) => (
            <div key={c.tier} className="bg-white rounded-card p-5 border border-light-gray shadow-soft">
              <p className="text-xs font-bold uppercase tracking-widest text-lime mb-3">
                {c.tier}
              </p>
              <ul className="space-y-1.5">
                {c.items.map((it) => (
                  <li key={it} className="body-sm text-medium-gray">
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section 2: لمن هذا الحل؟ ───────────────────────────── */
const FOR_WHOM = [
  {
    title: "مزارعون قائمون يريدون الرقابة",
    desc: "تملك مزرعة تعمل بالري التقليدي أو الهيدروبونيك، لكن المراقبة يدوية وأخطاء التشغيل تُكلّفك يومياً.",
  },
  {
    title: "مشغّلو أنظمة هيدروبونيك",
    desc: "نظامك الحالي يحتاج قياس pH وEC وتغذية مستمرّة — بدون لوحة مركزية تجمعها وتُنبّهك فور الانحراف.",
  },
  {
    title: "مديرو محميات تجارية",
    desc: "لديك حساسات ومضخات، لكن لا توجد طريقة لإدارتها جميعاً من مكان واحد وتتبّع السجل التشغيلي.",
  },
  {
    title: "مشاريع حكومية وزراعية",
    desc: "تحتاج منظومة تحكم موثوقة وقابلة للتدقيق — مع سجلات وتقارير تُفعَّل بحسب نطاق المشروع.",
  },
];

function ForWhomSection() {
  return (
    <section className="bg-white py-16" dir="rtl">
      <div className="container mx-auto px-4 max-w-7xl">
        <p className="text-lime text-sm font-bold uppercase tracking-widest mb-3">لمن هذا الحل؟</p>
        <h2 className="h2 text-deep-green mb-8">
          Smart Controllers مُصمَّمة لمن يملك مزرعة — ويريد أن يُضيف لها عقلاً
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FOR_WHOM.map((t) => (
            <div key={t.title} className="bg-[#FAFAF7] rounded-2xl p-6 border border-[#E5E7EB]">
              <div className="w-10 h-10 rounded-full bg-lime/10 flex items-center justify-center mb-4">
                <Users className="w-5 h-5 text-deep-green" aria-hidden />
              </div>
              <h3 className="text-[#0F3D2E] font-bold text-lg mb-2">{t.title}</h3>
              <p className="text-[#6B7280] text-base leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section 2.5: Pain Scenarios ────────────────────────── */
const SCENARIOS = [
  {
    pain: "المراقبة اليدوية تَستهلك العامل وتَتأخّر",
    detail: "عامل يَفحص pH وEC كل ٤ ساعات. ليلاً ونهاراً. التَكلفة تَرتفع، والأخطاء تَحدث.",
    solution: "قراءات وفق الدورية المحددة للمشروع",
    benefit: "تنبيه عند تجاوز العتبة المحددة — ما يساعد على اكتشاف الانحراف مبكراً.",
  },
  {
    pain: "اكتشاف المشاكل عند ذبول النباتات",
    detail: "مضخّة تَتعطّل في الفجر. تَكتشف المشكلة الظهر، بعد فقدان دورة ريّ كاملة في يوم صيفي حارّ.",
    solution: "تنبيه عند تجاوز العتبة — بحسب نطاق المشروع",
    benefit: "يساعد على اكتشاف الانحراف مبكراً وتقليص زمن الاستجابة.",
  },
  {
    pain: "بيانات الموسم الماضي ضائعة",
    detail: "تُريد مَعرفة لماذا نَجح موسم الخس في يناير، لكن البيانات على ورق فنّي غادر العمل.",
    solution: "سجلّ مُؤرشَف قابل للبحث",
    benefit: "القراءات والأوامر التي يشملها نطاق الربط تُحفظ بطابع زمني.",
  },
];

function PainScenarios() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-lime text-lg font-bold uppercase tracking-widest mb-2">
            ما الذي يَتغيّر؟
          </p>
          <h2 className="h2 text-deep-green">٣ مَواقف يَومية — قبل وبعد</h2>
          <p className="body-base text-medium-gray max-w-2xl mx-auto mt-3">
            ليست ميزات تَقنية مُجرَّدة. هذه مَشاهد حقيقية من المزارع التي
            رأيناها قبل التَركيب وبعده.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SCENARIOS.map((s, i) => (
            <article
              key={i}
              className="bg-cream rounded-card overflow-hidden shadow-soft flex flex-col"
            >
              {/* قبل */}
              <div className="p-6 border-b-2 border-amber-200 bg-amber-50/40 flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle
                    className="w-4 h-4 text-amber-700"
                    aria-hidden
                  />
                  <p className="text-amber-800 text-xs font-bold uppercase tracking-widest">
                    قبل
                  </p>
                </div>
                <p className="font-bold text-deep-green text-base mb-2 leading-snug">
                  {s.pain}
                </p>
                <p className="body-sm text-medium-gray">{s.detail}</p>
              </div>

              {/* بعد */}
              <div className="p-6 bg-gradient-to-br from-lime/5 to-cream flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-4 h-4 text-lime" aria-hidden />
                  <p className="text-lime text-xs font-bold uppercase tracking-widest">
                    بعد · مع Smart Controllers
                  </p>
                </div>
                <p className="font-bold text-deep-green text-base mb-2 leading-snug">
                  {s.solution}
                </p>
                <p className="body-sm text-medium-gray">{s.benefit}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/contact?interest=controllers&cta=readiness_assessment"
            className="inline-flex items-center gap-2 text-lime font-medium hover:text-deep-green transition-colors"
          >
            ناقش وضع مزرعتك معنا <ArrowLeft className="w-4 h-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Section 3: Values ───────────────────────────────────── */
const VALUES = [
  {
    Icon: Factory,
    title: "تطوير وتجميع سعودي",
    text: "دعم فني داخل السعودية، وتوفير ودعم قطع الغيار محلياً بحسب نطاق المشروع.",
  },
  {
    Icon: Plug,
    title: "قابلية الربط",
    text: "تتكامل مع الأنظمة ذات الواجهات والتجهيزات المدعومة — دون استبدال معداتك الحالية.",
  },
  {
    Icon: Thermometer,
    title: "مختبرة ميدانياً",
    text: "مختبرة ميدانياً في ظروف صيفية سعودية وبيئات مرتفعة الحرارة والرطوبة، مع الغبار وتذبذب شبكة الكهرباء.",
  },
];

function ValuesSection() {
  return (
    <section className="section-light py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-10">
          <h2 className="h2 text-deep-green">لماذا Smart Controllers من iGarden؟</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VALUES.map(({ Icon, title, text }) => (
            <div
              key={title}
              className="bg-white rounded-card p-8 shadow-soft hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 rounded-full bg-lime/10 flex items-center justify-center mb-6">
                <Icon className="w-7 h-7 text-deep-green" aria-hidden />
              </div>
              <h3 className="h3 text-deep-green mb-3">{title}</h3>
              <p className="body-base text-medium-gray">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section 4: Tech Specs ───────────────────────────────── */
const SENSORS = [
  "حموضة الماء (pH)",
  "التوصيلية الكهربائية (EC/TDS) للمحاليل المغذّية",
  "الحرارة والرطوبة",
  "حرارة الماء",
  "مستوى الخزّانات",
  "قياس الإضاءة",
];

const SOFTWARE = [
  "منصّة Smart OS للمراقبة والتحكّم",
  "اتصال محلي + سحابي",
  "لوحة تحكّم ويب",
  "تنبيهات عند تجاوز العتبات — بحسب نطاق المشروع",
];

function TechSpecs() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-lime text-lg font-bold uppercase tracking-widest mb-2">
            نظرة على النظام
          </p>
          <h2 className="h2 text-deep-green">ما الذي يقيسه ويتحكّم به</h2>
          {/* [CONTENT_NEEDED: تفاصيل المواصفات الدقيقة تُؤجَّل لجولة منتجات مخصّصة لاحقة] */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Diagram placeholder */}
          <div className="rounded-card bg-cream border border-light-gray aspect-square flex items-center justify-center">
            {/* [CONTENT_NEEDED: Diagram/SVG يوضح اتصالات النظام: Pi 5 ↔ ESP32 ↔ حساسات ↔ مضخات] */}
            <div className="text-center p-8">
              <div className="grid grid-cols-3 gap-4 opacity-30">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded bg-brand-600 flex items-center justify-center">
                    <Cpu className="w-6 h-6 text-white" aria-hidden />
                  </div>
                  <span className="text-lg text-medium-gray">وحدة مركزية</span>
                </div>
                <div className="flex flex-col items-center gap-2 self-center">
                  <div className="h-px w-full bg-lime" aria-hidden />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded bg-corp-green flex items-center justify-center">
                    <Radio className="w-6 h-6 text-white" aria-hidden />
                  </div>
                  <span className="text-lg text-medium-gray">وحدات طرفية</span>
                </div>
              </div>
              <p className="text-medium-gray text-lg mt-6">
                وحدة مركزية تُدير المنظومة · وحدات طرفية تَستشعر وتُنفّذ ميدانياً
              </p>
            </div>
          </div>

          {/* Specs list */}
          <div className="space-y-8">
            {/* Controllers */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Cpu className="w-5 h-5 text-lime" aria-hidden />
                <h3 className="h4 text-deep-green">المتحكّمات الدقيقة</h3>
              </div>
              <ul className="space-y-2 ms-7">
                {[
                  "وحدة مركزية تُدير المنظومة",
                  "وحدات طرفية للحساسات البعيدة",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-lime flex-shrink-0 mt-0.5" aria-hidden />
                    <span className="body-sm text-medium-gray">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sensors */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Gauge className="w-5 h-5 text-lime" aria-hidden />
                <h3 className="h4 text-deep-green">الحساسات المدعومة</h3>
              </div>
              <ul className="space-y-2 ms-7">
                {SENSORS.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-lime flex-shrink-0 mt-0.5" aria-hidden />
                    <span className="body-sm text-medium-gray">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Software */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <MonitorSmartphone className="w-5 h-5 text-lime" aria-hidden />
                <h3 className="h4 text-deep-green">البرمجيات والاتصال</h3>
              </div>
              <ul className="space-y-2 ms-7">
                {SOFTWARE.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-lime flex-shrink-0 mt-0.5" aria-hidden />
                    <span className="body-sm text-medium-gray">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Section 5: How It Works ─────────────────────────────── */
const HOW_STEPS = [
  {
    num: "01",
    title: "القياس",
    desc: "الحساسات تقرأ pH وEC والحرارة والرطوبة وفق الدورية المحددة للمشروع — قياس فعلي، لا تخمين.",
  },
  {
    num: "02",
    title: "التحليل",
    desc: "Smart OS يقارن القراءات بالنطاقات المضبوطة لمحصولك ويرصد تجاوز العتبات المحددة.",
  },
  {
    num: "03",
    title: "التحكم",
    desc: "المضخات والصمّامات والدوزرات تُشغَّل وفق البرامج المضبوطة — والأتمتة تُفعَّل بحسب نطاق المشروع.",
  },
  {
    num: "04",
    title: "التنبيه",
    desc: "تجاوز العتبة المحددة → إشعار عبر القناة المفعَّلة في نطاق المشروع.",
  },
];

function HowItWorks() {
  return (
    <section className="section-light py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-lime text-lg font-bold uppercase tracking-widest mb-2">
            من القياس إلى التحكم
          </p>
          <h2 className="h2 text-deep-green">كيف يعمل النظام</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          <div
            className="absolute top-8 right-0 left-0 h-px bg-light-gray hidden lg:block"
            aria-hidden
          />
          {HOW_STEPS.map((s) => (
            <div key={s.num} className="relative flex flex-col items-center text-center">
              <div className="relative z-10 w-16 h-16 rounded-full bg-white border-2 border-lime flex items-center justify-center mb-4 shadow-soft">
                <span className="font-latin font-bold text-deep-green text-lg">{s.num}</span>
              </div>
              <h3 className="h4 text-deep-green mb-2">{s.title}</h3>
              <p className="body-sm text-medium-gray">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section 5.1: Scope (Includes / Excludes) ────────────── */
const SCOPE_INCLUDES = [
  "تقييم ميداني أوّلي للمزرعة (زيارة أو مكالمة تقنية)",
  "توريد لوحة Smart Controller (وحدة التحكّم + وحدة حساسات)",
  "تركيب وتوصيل الحساسات بالمعدات القائمة",
  "ربط النظام بـ Smart OS وضبط قيم التشغيل المثلى",
  "متابعة تشغيلية بعد التركيب وفق خطة التسليم المتفق عليها",
  "توثيق تقني كامل للنظام (كتيّب تشغيل)",
];

const SCOPE_EXCLUDES = [
  "استبدال أنظمة الري أو البنية التحتية الحالية",
  "أعمال مدنية أو سباكة جديدة",
  "شراء حساسات إضافية (متاح بعرض منفصل إن احتجت)",
  "رسوم اشتراك الخدمة السحابية المستمرّة (تُحدَّد بالعقد)",
  "شهادة امتثال من جهات حكومية — نوفّر السجلات والتوثيق، لكن الاعتماد الرسمي يبقى مسؤوليتك",
];

function ScopeSection() {
  return (
    <section className="bg-[#FAFAF7] py-16" dir="rtl">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="h2 text-deep-green mb-10 text-center">نطاق التنفيذ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-7 border border-[#E5E7EB]">
            <h3 className="text-[#0F3D2E] font-bold text-xl mb-5 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#A5D63F]/20 flex items-center justify-center text-[#7CB342] font-bold text-sm">✓</span>
              يشمل التنفيذ
            </h3>
            <ul className="space-y-3">
              {SCOPE_INCLUDES.map((item) => (
                <li key={item} className="flex items-start gap-2 text-[#374151]">
                  <CheckCircle2 className="w-4 h-4 text-[#7CB342] mt-0.5 flex-shrink-0" aria-hidden />
                  <span className="body-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-7 border border-amber-200">
            <h3 className="text-[#0F3D2E] font-bold text-xl mb-5 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-bold text-sm">✕</span>
              لا يشمل التنفيذ
            </h3>
            <ul className="space-y-3">
              {SCOPE_EXCLUDES.map((item) => (
                <li key={item} className="flex items-start gap-2 text-[#6B7280]">
                  <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" aria-hidden />
                  <span className="body-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Section 5.2: Prerequisites ──────────────────────────── */
const PREREQUISITES = [
  {
    title: "مزرعة قائمة مع معدات قابلة للاستشعار",
    desc: "نظام ري أو زراعة مائية يعمل مع مضخات أو صمّامات أو حساسات موجودة.",
  },
  {
    title: "مصدر كهرباء مستقرّ في موقع التركيب",
    desc: "يكفي مقبس 220V في مكان التركيب. التركيب على طاقة شمسية مُتاح بعرض منفصل.",
  },
  {
    title: "اتصال إنترنت أو SIM ثابت",
    desc: "لتَلقّي التنبيهات عن بُعد وسحب البيانات إلى السحابة. يعمل محلياً بدون إنترنت أيضاً.",
  },
  {
    title: "مشاركة المشغّل في التشغيل الأولي",
    desc: "يشارك المشغّل المسؤول خلال مرحلة التشغيل الأولي لضبط القيم ومراجعة التنبيهات مع الفريق.",
  },
];

function PrerequisitesSection() {
  return (
    <section className="bg-white py-16" dir="rtl">
      <div className="container mx-auto px-4 max-w-7xl">
        <p className="text-lime text-sm font-bold uppercase tracking-widest mb-3">قبل البدء</p>
        <h2 className="h2 text-deep-green mb-8">المتطلبات قبل التركيب</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PREREQUISITES.map((p, i) => (
            <div key={p.title} className="bg-[#FAFAF7] rounded-2xl p-6 border border-[#E5E7EB] flex gap-4">
              <div className="w-10 h-10 rounded-full bg-lime/10 flex items-center justify-center flex-shrink-0">
                <span className="font-latin font-bold text-deep-green text-sm">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div>
                <h3 className="font-bold text-deep-green mb-1">{p.title}</h3>
                <p className="text-[#6B7280] body-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section 5.3: Client Outputs ─────────────────────────── */
const CLIENT_OUTPUTS = [
  {
    Icon: MonitorSmartphone,
    title: "لوحة بيانات موحّدة",
    desc: "Dashboard يعرض pH وEC والحرارة والرطوبة ومستوى الخزّانات وفق دورية القياس وإعدادات الاتصال، من أيّ جهاز.",
  },
  {
    Icon: Bell,
    title: "تنبيهات واتساب — بحسب نطاق المشروع",
    desc: "إشعار عند تجاوز العتبة المحددة، مع تحديد الحساس والقيمة والوقت.",
  },
  {
    Icon: FileText,
    title: "تقارير أداء — بحسب نطاق المشروع",
    desc: "ملخّص دوري: استهلاك الماء، دورات التشغيل، أعلى وأدنى قراءة لكل حساس.",
  },
  {
    Icon: BarChart3,
    title: "سجل تشغيلي — يُفعَّل بحسب النطاق",
    desc: "القراءات وأوامر التشغيل التي يشملها نطاق الربط تُحفظ بطابع زمني دقيق وقابلة للتصدير.",
  },
];

function ClientOutputsSection() {
  return (
    <section className="section-light py-16" dir="rtl">
      <div className="container mx-auto px-4 max-w-7xl">
        <p className="text-lime text-sm font-bold uppercase tracking-widest mb-3">مخرجات العميل</p>
        <h2 className="h2 text-deep-green mb-8">ماذا ستحصل بعد التركيب؟</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CLIENT_OUTPUTS.map(({ Icon, title, desc }) => (
            <div key={title} className="bg-white rounded-card p-6 shadow-soft">
              <div className="w-12 h-12 rounded-full bg-lime/10 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-deep-green" aria-hidden />
              </div>
              <h3 className="h4 text-deep-green mb-2">{title}</h3>
              <p className="body-sm text-medium-gray">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section 5.4: Operational Logs ──────────────────────── */
function OperationalLogsSection() {
  return (
    <section className="bg-[#0F3D2E] py-14" dir="rtl">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <p className="text-[#A5D63F] text-sm font-bold uppercase tracking-widest mb-3">سجلات التشغيل القابلة للمراجعة</p>
        <h2 className="text-2xl md:text-3xl font-bold text-[#FAFAF7] mb-4">
سجل يشمل ما يغطّيه نطاق الربط.
        </h2>
        <p className="text-white/70 text-lg mb-6 max-w-2xl mx-auto">
          عند تفعيل طبقة التسجيل ضمن نطاق المشروع، تُسجَّل قراءات pH وEC والحرارة
          وأوامر التشغيل بطابع زمني دقيق، ويصبح السجل قابلاً للمراجعة بصيغة قابلة للتدقيق.
        </p>
        <Link
          href="/compliance"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#7CB342] hover:bg-[#A5D63F] text-[#0F3D2E] rounded-lg font-semibold transition-colors"
        >
          تعرّف على سجلات التشغيل
        </Link>
      </div>
    </section>
  );
}

/* ─── Section 6: Demo ─────────────────────────────────────── */
function DemoSection() {
  return (
    <section className="section-dark py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lime text-lg font-bold uppercase tracking-widest mb-3">
              تجربة حيّة قبل الشراء
            </p>
            <h2 className="h2 text-cream mb-5">
              جرّب لوحة التحكم بنفسك — قبل أن تقتنيها
            </h2>
            <p className="body-base text-cream/80 mb-4">
              الديمو الحيّ يعرض 7 حسّاسات + 10 شاشات تفاعلية مبنية على بيانات
              حقيقية من مرفق R&D في عسفان.
            </p>
            <p className="body-sm text-cream/60 mb-8">
              لا تسجيل مطلوب — افتح وجرّب مباشرة.
            </p>
            <CTAButton href="https://demo.igarden.sa" variant="lime" external>
              افتح الديمو التفاعلي ↗
            </CTAButton>
          </div>

          {/* Dashboard screenshot placeholder */}
          <div className="rounded-card bg-corp-green/40 border border-lime/20 aspect-[4/3] flex items-center justify-center">
            {/* [CONTENT_NEEDED: /images/products/smart-controllers/dashboard-screenshot.jpg — Screenshot من Smart OS Dashboard] */}
            <div className="text-center p-6">
              <MonitorSmartphone className="w-16 h-16 text-lime/40 mx-auto mb-3" aria-hidden />
              <p className="text-cream/40 text-lg">demo.igarden.sa</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Section 7: Development Timeline ────────────────────── */
function DevTimeline() {
  /* [CONTENT_NEEDED: Timeline 4 مراحل — البحث الأوّلي → أول Prototype → الاختبار في عسفان → الإصدار القادم.
     مع تواريخ وصور حقيقية. م. أيمن مصدر المعلومات. */
  const PHASES = [
    { year: "01", title: "البحث الأولي", desc: "دراسة السوق المحلي وتحديد الفجوة — حلول موجودة لا تناسب ظروف التشغيل المحلية." },
    { year: "02", title: "النموذج الأولي", desc: "بناء النموذج الأوّلي واختباره في بيئة مختبرية — حساسات الحموضة والتوصيلية والحرارة." },
    { year: "03", title: "الاختبار الميداني", desc: "تغطية اختبارات موسّعة، واختبار ميداني مستمرّ في مرفق R&D في عسفان." },
    { year: "04", title: "التخصيص والتنفيذ", desc: "تجهيز النظام وتخصيص نطاقه وفق احتياج المنشأة والتجهيزات المطلوب ربطها." },
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-lime text-lg font-bold uppercase tracking-widest mb-2">
            رحلة التطوير
          </p>
          <h2 className="h2 text-deep-green">من فكرة إلى نظام يعمل</h2>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div
            className="absolute top-0 bottom-0 end-8 md:start-1/2 w-px bg-light-gray"
            aria-hidden
          />
          <div className="space-y-8">
            {PHASES.map((p, i) => (
              <div
                key={p.year}
                className={`relative flex gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className="relative z-10 w-16 h-16 rounded-full bg-cream border-2 border-lime flex items-center justify-center flex-shrink-0 shadow-soft">
                  <span className="text-deep-green font-bold text-lg text-center leading-tight font-latin px-1">
                    {p.year}
                  </span>
                </div>
                <div className="bg-cream rounded-card p-5 shadow-soft flex-1">
                  <h3 className="h4 text-deep-green mb-1">{p.title}</h3>
                  <p className="body-sm text-medium-gray">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Section 8: B2B Sectors ──────────────────────────────── */
/* [CONTENT_NEEDED: لائحة 3-5 قطاعات مستهدفة — مزارع تمور، ورود، ورقيات … لتوضع كـ chips] */
const SECTORS = [
  "مزارع تمور",
  "محميات ورقيات",
  "مزارع ورود وزهور",
  "مشاريع حكومية زراعية",
  "شركات الإنتاج الغذائي",
];

function B2BSection() {
  return (
    <section className="section-light py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lime text-lg font-bold uppercase tracking-widest mb-2">
            للمشاريع التجارية والحكومية
          </p>
          <h2 className="h3 text-deep-green mb-4">
            مُصمَّمة للمزارع التجارية والمشاريع الحكومية
          </h2>
          <p className="body-base text-medium-gray mb-8">
            حلول مخصَّصة لكل مشروع — لا قوالب جاهزة. نُقيّم احتياجاتك
            ونُصمّم الحلّ الأمثل لمحصولك وبيئتك.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {SECTORS.map((s) => (
              <span
                key={s}
                className="bg-white border border-light-gray rounded-pill px-4 py-2 text-lg text-deep-green font-medium shadow-soft"
              >
                {s}
              </span>
            ))}
          </div>
          <CTAButton href="/contact?interest=controllers&type=b2b&cta=readiness_assessment" variant="outline-green">
            ابدأ تقييم مشروعك
          </CTAButton>
        </div>
      </div>
    </section>
  );
}

/* ─── Section 9: FAQ ──────────────────────────────────────── */
const FAQS = [
  {
    q: "هل النظام جاهز للتشغيل الآن؟",
    a: "نعم — نظام مُختبَر ميدانياً في عسفان وجاهز للتركيب لدى المنشآت التجارية والحكومية. نبدأ معك بتقييم ميداني لمشروعك.",
  },
  {
    q: "هل يعمل مع نظامي الزراعي الحالي؟",
    a: "تتكامل Smart Controllers مع الأنظمة ذات الواجهات والتجهيزات المدعومة (هيدروبونيك، تربة، أيروبونيك). نُقيّم نظامك الحالي في التقييم الأولي ونحدّد ما يلزم لربطه.",
  },
  {
    q: "كيف نبدأ؟",
    a: "نبدأ بتقييم ميداني لمزرعتك، ثم نُقدّم عرضاً مخصّصاً حسب نطاق مشروعك ومحصولك — تقييم أوّلي مجاني.",
  },
  {
    q: "هل يحتاج تركيباً من فريقكم؟",
    a: "فريقنا الميداني يتولّى التركيب والتشغيل والتدريب. لا تحتاج خبرة تقنية مسبقة.",
  },
  {
    q: "ما الضمان وفترة الدعم الفنّي؟",
    a: "ندعم كل تركيب بمتابعة تشغيلية مستمرة. شروط الضمان التفصيلية تُحدَّد في العقد حسب نوع النظام.",
  },
];

function FAQ() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-10">
          <h2 className="h2 text-deep-green">أسئلة شائعة</h2>
        </div>
        <div className="space-y-4">
          {FAQS.map(({ q, a }) => (
            <div key={q} className="bg-cream rounded-card p-6 shadow-soft">
              <h3 className="h4 text-deep-green mb-2">{q}</h3>
              <p className="body-base text-medium-gray">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section 10: Final CTA ───────────────────────────────── */
function FinalCTA() {
  return (
    <section className="bg-deep-green py-24">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <p className="text-lime text-lg font-bold uppercase tracking-widest mb-4">
          ابدأ الآن
        </p>
        <h2 className="h2 text-cream mb-5">
          هل تحتاج لوحة تحكم مطوَّرة لظروف موقعك؟
        </h2>
        <p className="body-base text-cream/80 max-w-2xl mx-auto mb-10">
          نظام مختبر ميدانياً في ظروف صيفية سعودية وبيئات مرتفعة الحرارة والرطوبة.
          نبدأ معك بتقييم ميداني لمشروعك، ثم نُحدّد النطاق والعرض المناسب لمحصولك وبيئتك.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton href="/contact?interest=controllers&cta=readiness_assessment" variant="lime">
            اطلب تقييماً أولياً
          </CTAButton>
          <CTAButton href="https://demo.igarden.sa" variant="outline-green" external>
            جرّب الديمو أولاً ↗
          </CTAButton>
        </div>
      </div>
    </section>
  );
}

/* ─── Page ────────────────────────────────────────────────── */
const BREADCRUMB = [
  { name: "الرئيسية", url: "/" },
  { name: "الحلول", url: "/products" },
  { name: "Smart Controllers", url: "/products/smart-controllers" },
];

// Only FAQs with real (non-placeholder) answers go into the schema
const SCHEMA_FAQS = [
  {
    question: "هل يعمل مع نظامي الزراعي الحالي؟",
    answer:
      "تتكامل Smart Controllers مع الأنظمة ذات الواجهات والتجهيزات المدعومة (هيدروبونيك، تربة، أيروبونيك). نُقيّم نظامك الحالي في التقييم الأولي ونحدّد ما يلزم لربطه.",
  },
  {
    question: "هل يحتاج تركيباً من فريقكم؟",
    answer:
      "فريقنا الميداني يتولّى التركيب والتشغيل والتدريب. لا تحتاج خبرة تقنية مسبقة.",
  },
];

export default function SmartControllersPage() {
  return (
    <>
      <ProductSchema
        name="Smart Controllers — لوحات التحكم الزراعي"
        description="لوحات تحكم زراعية مصمَّمة ومطوَّرة ومجمَّعة في السعودية. تتكامل مع الأنظمة ذات الواجهات والتجهيزات المدعومة. مختبرة ميدانياً في ظروف صيفية سعودية وبيئات مرتفعة الحرارة والرطوبة."
        image="/images/products/smart-controllers/hero.jpg"
        url="/products/smart-controllers"
        category="Agricultural Smart Controllers"
      />
      <FAQSchema faqs={SCHEMA_FAQS} />
      <BreadcrumbSchema items={BREADCRUMB} />
      <Hero />
      <StatusCard />
      <CapabilityState />
      <section className="bg-[#FAFAF7] py-6">
        <div className="container mx-auto px-4 max-w-7xl">
          <StageHonesty />
        </div>
      </section>
      <ForWhomSection />
      <PainScenarios />
      <ValuesSection />
      <TechSpecs />
      <HowItWorks />
      <ScopeSection />
      <PrerequisitesSection />
      <ClientOutputsSection />
      <OperationalLogsSection />
      <DemoSection />
      <DevTimeline />
      <B2BSection />
      <FAQ />
      <FinalCTA />
    </>
  );
}
