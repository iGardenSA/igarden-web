import type { Metadata } from "next";
import Link from "next/link";
import { ProductSchema, FAQSchema, BreadcrumbSchema } from "@/components/shared/SchemaJsonLd";
import { CTAButton } from "@/components/shared/CTAButton";
import {
  Factory,
  Plug,
  Thermometer,
  Cpu,
  Radio,
  Gauge,
  MonitorSmartphone,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Smart Controllers — لوحات التحكم الزراعي بصناعة سعودية | iGarden",
  description:
    "لوحات تحكم زراعية مُصمَّمة ومُصنَّعة في السعودية. تُربط بأيّ نظام زراعي قائم. اختُبرت في عسفان لتحمّل +45°C ورطوبة الخليج.",
  alternates: { canonical: "https://igarden.sa/products/smart-controllers" },
  openGraph: {
    title: "Smart Controllers — لوحات التحكم الزراعي بصناعة سعودية",
    description: "تصميم وبرمجة وتصنيع 100% سعودي. قابلة للربط مع أيّ نظام قائم.",
    images: ["/images/og/smart-controllers.jpg"],
    type: "website",
    locale: "ar_SA",
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
                Flagship · صناعة سعودية
              </span>
            </div>
            <p className="text-lime text-lg font-bold uppercase tracking-widest mb-3">
              المنتج الرائد · Smart OS Powered
            </p>
            <h1 className="h1 text-deep-green mb-5">
              Smart Controllers —{" "}
              <span className="block">لوحات التحكم الزراعي بصناعتنا</span>
            </h1>
            <p className="body-base text-medium-gray mb-8 max-w-lg">
              تصميم وبرمجة وتصنيع 100% سعودي — قابلة للربط مع أيّ نظام زراعة
              قائم. لا حاجة لاستبدال معداتك، فقط أضف الذكاء.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <CTAButton href="/contact?interest=controllers" variant="lime">
                سجّل اهتمامك — Early Access
              </CTAButton>
              <CTAButton
                href="https://demo.igarden.sa"
                variant="outline-green"
                external
              >
                افتح الديمو التفاعلي ↗
              </CTAButton>
            </div>
          </div>

          {/* Hero image placeholder */}
          <div
            className="relative aspect-[4/3] rounded-card overflow-hidden bg-brand-600 flex items-center justify-center"
            role="img"
            aria-label="لوحة Smart Controller من محطة عسفان"
          >
            {/* [CONTENT_NEEDED: /images/products/smart-controllers/hero.jpg — لوحة Controller الحقيقية من عسفان] */}
            <Cpu className="w-20 h-20 text-white/20" aria-hidden />
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
            شفافية ريادية
          </p>
          <h2 className="h4 text-deep-green mb-3">منتج قيد التطوير الميداني</h2>
          <p className="body-base text-medium-gray mb-4">
            نحن شركة ريادية — عدّة نماذج أوّلية قيد الاختبار في محطّة عسفان.
            نقبل اهتمام عملاء{" "}
            <span dir="ltr" className="ltr-inline font-latin font-medium">
              Early Access
            </span>{" "}
            للمشاركة في مرحلة الاختبار الميداني والحصول على أولوية في الإصدار
            التجاري.
          </p>
          <Link
            href="/contact?interest=controllers&type=early-access"
            className="text-lime font-medium hover:text-deep-green transition-colors text-lg"
          >
            انضمّ لـ Early Access ←
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
    title: "صناعة محلية",
    text: "قطع الغيار متاحة في السعودية. لا انتظار لشحنات دولية. لا ترجمة لمشاكل دعم فنّي بعيد.",
  },
  {
    Icon: Plug,
    title: "قابلية الربط",
    text: "تتكامل مع أيّ نظام زراعة قائم — لا حاجة لاستبدال معداتك الحالية. فقط أضف الذكاء.",
  },
  {
    Icon: Thermometer,
    title: "تحمّل +45°C",
    text: "مُصمَّمة لظروف الخليج — حرارة قاسية، رطوبة عالية، غبار، وأعطال شبكة كهرباء.",
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
  "pH meter — دقّة ±0.01",
  "EC / TDS meter — للمحاليل المغذّية",
  "DHT22 — حرارة + رطوبة",
  "DS18B20 — حرارة الماء",
  "Float switch — مستوى الخزّانات",
  "Light sensor — قياس الإضاءة",
];

const SOFTWARE = [
  "Smart OS — Python + n8n",
  "MQTT Broker محلي + اتصال سحابي",
  "Dashboard ويب محلي",
  "تنبيهات WhatsApp + Email لحظية",
];

function TechSpecs() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-lime text-lg font-bold uppercase tracking-widest mb-2">
            المواصفات التقنية
          </p>
          <h2 className="h2 text-deep-green">ما داخل الصندوق</h2>
          {/* [CONTENT_NEEDED: مراجعة دقة المواصفات التقنية مع م. أيمن قبل النشر] */}
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
                  <span className="text-lg text-medium-gray font-latin">Pi 5</span>
                </div>
                <div className="flex flex-col items-center gap-2 self-center">
                  <div className="h-px w-full bg-lime" aria-hidden />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded bg-corp-green flex items-center justify-center">
                    <Radio className="w-6 h-6 text-white" aria-hidden />
                  </div>
                  <span className="text-lg text-medium-gray font-latin">ESP32</span>
                </div>
              </div>
              <p className="text-medium-gray text-lg mt-6">
                [Diagram قيد الإعداد]
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
                  "Raspberry Pi 5 — العقل المركزي",
                  "ESP32 — Edge nodes للحساسات البعيدة",
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
    desc: "الحساسات تقرأ pH وEC والحرارة والرطوبة كل ثانية — بيانات حقيقية، لا تخمين.",
  },
  {
    num: "02",
    title: "التحليل",
    desc: "Smart OS يقارن القراءات بالقيم المثلى لمحصولك ويكتشف الانحرافات فور حدوثها.",
  },
  {
    num: "03",
    title: "التحكم",
    desc: "المضخات والصمّامات والدوزرات تُعمل/تُطفأ تلقائياً — بلا تدخّل يدوي.",
  },
  {
    num: "04",
    title: "التنبيه",
    desc: "أيّ انحراف خارج النطاق → إشعار WhatsApp + Email خلال ثوانٍ، أينما كنت.",
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
              حقيقية من محطّة عسفان.
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
    { year: "2024", title: "البحث الأوّلي", desc: "[CONTENT_NEEDED]" },
    { year: "2024–25", title: "أول Prototype", desc: "[CONTENT_NEEDED]" },
    { year: "2025", title: "الاختبار في عسفان", desc: "208 اختبار وحدوي ناجح. اختبار ميداني مستمرّ." },
    { year: "2026", title: "الإصدار التجاري القادم", desc: "[CONTENT_NEEDED: موعد متوقّع]" },
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
          <CTAButton href="/contact?interest=controllers&type=b2b" variant="outline-green">
            تواصل مع فريق المشاريع
          </CTAButton>
        </div>
      </div>
    </section>
  );
}

/* ─── Section 9: FAQ ──────────────────────────────────────── */
/* [CONTENT_NEEDED: إجابات الأسئلة الخمسة — يراجعها م. أيمن] */
const FAQS = [
  {
    q: "متى الإصدار التجاري المتوقّع؟",
    a: "[CONTENT_NEEDED: موعد الإصدار التجاري — تُحدَّد مع م. أيمن]",
  },
  {
    q: "هل يعمل مع نظامي الزراعي الحالي؟",
    a: "نعم — Smart Controllers مُصمَّمة للتكامل مع أيّ نظام زراعة قائم (هيدروبونيك، تربة، أيروبونيك). نُقيّم نظامك الحالي في الاستشارة المجانية.",
  },
  {
    q: "ما النطاق السعري المتوقّع؟",
    a: "[CONTENT_NEEDED: نطاق سعري — يُحدَّد بعد اعتماد الإصدار التجاري]",
  },
  {
    q: "هل يحتاج تركيباً من فريقكم؟",
    a: "فريقنا الميداني يتولّى التركيب والتشغيل والتدريب. لا تحتاج خبرة تقنية مسبقة.",
  },
  {
    q: "ما الضمان وفترة الدعم الفنّي؟",
    a: "[CONTENT_NEEDED: شروط الضمان والدعم — تُحدَّد قبل الإصدار التجاري]",
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
          Early Access
        </p>
        <h2 className="h2 text-cream mb-5">
          هل أنت جاهز لتجربة لوحة تحكم صُنعت لمناخك؟
        </h2>
        <p className="body-base text-cream/80 max-w-2xl mx-auto mb-10">
          سجّل اهتمامك الآن وكُن من أوائل من يحصل على النظام عند إطلاقه
          التجاري — مع أولوية في التركيب والتسعير.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton href="/contact?interest=controllers&type=early-access" variant="lime">
            سجّل اهتمامك — Early Access
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
  { name: "خدماتنا", url: "/products" },
  { name: "Smart Controllers", url: "/products/smart-controllers" },
];

// Only FAQs with real (non-placeholder) answers go into the schema
const SCHEMA_FAQS = [
  {
    question: "هل يعمل مع نظامي الزراعي الحالي؟",
    answer:
      "نعم — Smart Controllers مُصمَّمة للتكامل مع أيّ نظام زراعة قائم (هيدروبونيك، تربة، أيروبونيك). نُقيّم نظامك الحالي في الاستشارة المجانية.",
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
        description="لوحات تحكم زراعية مُصمَّمة ومُصنَّعة في السعودية. تُربط بأيّ نظام زراعي قائم. اختُبرت في عسفان لتحمّل +45°C."
        image="/images/products/smart-controllers/hero.jpg"
        url="/products/smart-controllers"
        category="Agricultural Smart Controllers"
      />
      <FAQSchema faqs={SCHEMA_FAQS} />
      <BreadcrumbSchema items={BREADCRUMB} />
      <Hero />
      <StatusCard />
      <ValuesSection />
      <TechSpecs />
      <HowItWorks />
      <DemoSection />
      <DevTimeline />
      <B2BSection />
      <FAQ />
      <FinalCTA />
    </>
  );
}
