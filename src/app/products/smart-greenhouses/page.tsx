import type { Metadata } from "next";
import { ProductSchema, BreadcrumbSchema } from "@/components/shared/SchemaJsonLd";
import { CTAButton } from "@/components/shared/CTAButton";
import { Building2, Cpu, Wind, CheckCircle2, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Smart Greenhouses — محميات ذكية تصمد في +45°C | iGarden",
  description:
    "محميات ذكية بأتمتة IoT كاملة. هياكل مقاومة للرياح، عزل حراري، تحكم مناخي مُختَبَر في عسفان. حلول للمزارع التجارية والحكومية.",
  alternates: { canonical: "https://igarden.sa/products/smart-greenhouses" },
  openGraph: {
    title: "Smart Greenhouses — محميات ذكية تصمد في +45°C",
    description: "هيكل + أتمتة + تحكم مناخي. مُختَبَرة في عسفان.",
    images: ["/images/og/smart-greenhouses.jpg"],
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
            <p className="text-lime text-lg font-bold uppercase tracking-widest mb-3">
              المحميات الذكية · IoT-Enabled
            </p>
            <h1 className="h1 text-deep-green mb-5">
              Smart Greenhouses —{" "}
              <span className="block">محميات ذكية تصمد في مناخك</span>
            </h1>
            <p className="body-base text-medium-gray mb-8 max-w-lg">
              محميات بأتمتة{" "}
              <span dir="ltr" className="ltr-inline font-latin">IoT</span>{" "}
              كاملة، هياكل مقاومة لرياح الخليج، وتحكم مناخي اختُبر في
              عسفان عند +45°C.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <CTAButton href="/contact?interest=greenhouses" variant="lime">
                اطلب عرض مخصّص
              </CTAButton>
              <CTAButton href="/osfan-station" variant="outline-green">
                شاهد محطّة عسفان
              </CTAButton>
            </div>
          </div>

          {/* Hero image placeholder */}
          <div
            className="relative aspect-[4/3] rounded-card overflow-hidden bg-brand-500 flex items-center justify-center"
            role="img"
            aria-label="محمية ذكية من iGarden في محطة عسفان"
          >
            {/* [CONTENT_NEEDED: /images/products/smart-greenhouses/hero.jpg — صورة محمية حقيقية من عسفان] */}
            <Building2 className="w-20 h-20 text-white/20" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Section 2: Values ───────────────────────────────────── */
const VALUES = [
  {
    Icon: Building2,
    title: "هيكل مُصمَّم لمناخك",
    text: "مقاوم لرياح الخليج. عزل حراري عالٍ. مواد مُختارة لظروف +45°C والرطوبة العالية.",
  },
  {
    Icon: Cpu,
    title: "أتمتة IoT كاملة",
    text: "تحكم آلي بالتهوية والتبريد والريّ والإضاءة. لوحة Smart Controller داخلية متكاملة.",
  },
  {
    Icon: Wind,
    title: "تحكم مناخي ذكي",
    text: "الحفاظ على درجة الحرارة والرطوبة المثاليتين 24/7 — حتى في ذروة الصيف.",
  },
];

function ValuesSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-10">
          <h2 className="h2 text-deep-green">لماذا Smart Greenhouses من iGarden؟</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VALUES.map(({ Icon, title, text }) => (
            <div
              key={title}
              className="bg-cream rounded-card p-8 shadow-soft hover:shadow-md transition-shadow"
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

/* ─── Section 3: Tech Specs ───────────────────────────────── */
const STRUCTURE_ITEMS = [
  "أعمدة فولاذية مجلفنة",
  "تغطية بلاستيكية UV-resistant",
  "نظام تهوية جانبي + علوي",
];

const SMART_ITEMS = [
  "Smart Controller (راجع صفحة Controllers)",
  "مرشّات ضباب — Fogger system",
  "مراوح استخراج بمستشعرات حرارة",
  "شبكات تظليل آلية",
  "نظام ريّ آلي (Drip / Hydroponics)",
];

const MONITORING_ITEMS = [
  "Dashboard لمراقبة الظروف 24/7",
  "تنبيهات الانحرافات لحظياً",
];

function TechSpecs() {
  return (
    <section className="section-light py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-lime text-lg font-bold uppercase tracking-widest mb-2">
            المواصفات التقنية
          </p>
          <h2 className="h2 text-deep-green">ما تحصل عليه</h2>
          {/* [CONTENT_NEEDED: تأكيد قائمة المكوّنات مع م. أيمن قبل النشر] */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Structure */}
          <div className="bg-white rounded-card p-6 shadow-soft">
            <h3 className="h4 text-deep-green mb-4 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-lime" aria-hidden />
              الهيكل
            </h3>
            <ul className="space-y-3">
              {STRUCTURE_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-lime flex-shrink-0 mt-0.5" aria-hidden />
                  <span className="body-sm text-medium-gray">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Smart Systems */}
          <div className="bg-white rounded-card p-6 shadow-soft">
            <h3 className="h4 text-deep-green mb-4 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-lime" aria-hidden />
              الأنظمة الذكية
            </h3>
            <ul className="space-y-3">
              {SMART_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-lime flex-shrink-0 mt-0.5" aria-hidden />
                  <span className="body-sm text-medium-gray">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Monitoring */}
          <div className="bg-white rounded-card p-6 shadow-soft">
            <h3 className="h4 text-deep-green mb-4 flex items-center gap-2">
              <Wind className="w-5 h-5 text-lime" aria-hidden />
              المراقبة
            </h3>
            <ul className="space-y-3">
              {MONITORING_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-lime flex-shrink-0 mt-0.5" aria-hidden />
                  <span className="body-sm text-medium-gray">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Section 4: How It Works ─────────────────────────────── */
/*
  [CONTENT_NEEDED: 4 مراحل كاملة مع تفاصيل — مقترح:
   01 استشارة وزيارة الموقع
   02 تصميم وحجم مخصّص
   03 تصنيع وتركيب
   04 تشغيل ودعم مستمرّ
   يُراجعها م. أيمن قبل النشر]
*/
const HOW_STEPS = [
  {
    num: "01",
    title: "استشارة وزيارة الموقع",
    desc: "[CONTENT_NEEDED: وصف المرحلة — زيارة ميدانية، تقييم المناخ والتربة والمساحة]",
  },
  {
    num: "02",
    title: "تصميم مخصّص لمشروعك",
    desc: "[CONTENT_NEEDED: وصف مرحلة التصميم — الحجم، نوع الهيكل، أنظمة التحكم]",
  },
  {
    num: "03",
    title: "التصنيع والتركيب",
    desc: "[CONTENT_NEEDED: مدّة التصنيع والتركيب، الفريق الميداني، آلية الجودة]",
  },
  {
    num: "04",
    title: "التشغيل والدعم المستمرّ",
    desc: "[CONTENT_NEEDED: التدريب، عقود الصيانة، دعم Smart OS المستمرّ]",
  },
];

function HowItWorks() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-lime text-lg font-bold uppercase tracking-widest mb-2">
            من الفكرة إلى الحصاد
          </p>
          <h2 className="h2 text-deep-green">كيف نُنفّذ مشروعك</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          <div
            className="absolute top-8 right-0 left-0 h-px bg-light-gray hidden lg:block"
            aria-hidden
          />
          {HOW_STEPS.map((s) => (
            <div
              key={s.num}
              className="relative flex flex-col items-center text-center"
            >
              <div className="relative z-10 w-16 h-16 rounded-full bg-cream border-2 border-lime flex items-center justify-center mb-4 shadow-soft">
                <span className="font-latin font-bold text-deep-green text-lg">
                  {s.num}
                </span>
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

/* ─── Section 5: Osfan Gallery ───────────────────────────── */
const GALLERY = [
  { src: "/images/products/smart-greenhouses/osfan-1.jpg", alt: "محمية ذكية في محطة عسفان — جانب خارجي" },
  { src: "/images/products/smart-greenhouses/osfan-2.jpg", alt: "نظام التهوية الجانبي في المحمية" },
  { src: "/images/products/smart-greenhouses/osfan-3.jpg", alt: "الداخل — نباتات تحت التحكم المناخي" },
  { src: "/images/products/smart-greenhouses/osfan-4.jpg", alt: "لوحة التحكم داخل المحمية" },
  { src: "/images/products/smart-greenhouses/osfan-5.jpg", alt: "نظام الريّ الآلي" },
  { src: "/images/products/smart-greenhouses/osfan-6.jpg", alt: "محطة عسفان — منظر عام للمحميات" },
];

function OsfanGallery() {
  return (
    <section className="section-light py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-10">
          <p className="text-lime text-lg font-bold uppercase tracking-widest mb-2">
            اختُبرت في عسفان
          </p>
          <h2 className="h2 text-deep-green">مُختَبَرة في ظروف سعودية حقيقية</h2>
          <p className="body-base text-medium-gray max-w-2xl mx-auto mt-3">
            ما تراه هنا ليس نماذج افتراضية — هي محميات تعمل فعلياً في عسفان
            منذ 2025 تحت +45°C.
          </p>
        </div>

        {/* [CONTENT_NEEDED: 6 صور حقيقية من محميات عسفان — /images/products/smart-greenhouses/osfan-1..6.jpg] */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
          {GALLERY.map((img) => (
            <div
              key={img.src}
              className="relative aspect-[4/3] rounded-card overflow-hidden bg-brand-500/30 flex items-center justify-center"
              style={{
                backgroundImage: `url(${img.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              role="img"
              aria-label={img.alt}
            >
              <span className="sr-only">{img.alt}</span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <CTAButton href="/osfan-station" variant="outline-green">
            تعرّف على محطّة عسفان كاملاً
          </CTAButton>
        </div>
      </div>
    </section>
  );
}

/* ─── Section 6: Scales ───────────────────────────────────── */
const SCALES = [
  {
    tier: "صناعي",
    title: "محميات تجارية كبرى",
    desc: "للمشاريع التجارية والحكومية. مساحات 1,000–10,000+ م². تصميم مخصّص وفريق تركيب متكامل.",
    cta: { label: "اطلب عرضاً", href: "/contact?interest=greenhouses-industrial" },
    external: false,
    highlight: false,
  },
  {
    tier: "متوسط",
    title: "محميات للمزارع المتوسطة",
    desc: "200–1,000 م². للمزارعين والمنتجين المحلّيين الراغبين في رفع الكفاءة وتقليل التكاليف.",
    cta: { label: "اطلب عرضاً", href: "/contact?interest=greenhouses-mid" },
    external: false,
    highlight: true,
  },
  {
    tier: "منزلي",
    title: "محميات منزلية صغيرة",
    desc: "للفلل والاستراحات. حلول شبه جاهزة بأسعار مناسبة — متاحة عبر متجرنا الإلكتروني.",
    cta: { label: "استكشف المتجر ↗", href: "https://shop.igarden.sa" },
    external: true,
    highlight: false,
  },
];

function ScalesSection() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-lime text-lg font-bold uppercase tracking-widest mb-2">
            حلول بكل الأحجام
          </p>
          <h2 className="h2 text-deep-green">
            من المشاريع الصناعية إلى الفلل والاستراحات
          </h2>
          <p className="body-base text-medium-gray max-w-2xl mx-auto mt-3">
            لكل حجم حلٌّ مناسب — لا نبيع قوالب جاهزة.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {SCALES.map((s) => (
            <div
              key={s.tier}
              className={`rounded-card p-6 flex flex-col shadow-soft ${
                s.highlight
                  ? "bg-deep-green text-cream ring-2 ring-lime"
                  : "bg-cream"
              }`}
            >
              <span
                className={`text-lg font-bold uppercase tracking-widest mb-3 ${
                  s.highlight ? "text-lime" : "text-lime"
                }`}
              >
                {s.tier}
              </span>
              <h3
                className={`h3 mb-3 ${
                  s.highlight ? "text-cream" : "text-deep-green"
                }`}
              >
                {s.title}
              </h3>
              <p
                className={`body-sm flex-1 mb-5 ${
                  s.highlight ? "text-cream/80" : "text-medium-gray"
                }`}
              >
                {s.desc}
              </p>
              {s.external ? (
                <a
                  href={s.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-lime font-medium hover:text-bright-lime transition-colors text-lg"
                >
                  {s.cta.label}
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden />
                </a>
              ) : (
                <CTAButton
                  href={s.cta.href}
                  variant={s.highlight ? "lime" : "outline-green"}
                >
                  {s.cta.label}
                </CTAButton>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section 7: FAQ ──────────────────────────────────────── */
/*
  [CONTENT_NEEDED: إجابات الأسئلة الخمسة — يراجعها م. أيمن]
*/
const FAQS = [
  {
    q: "ما حجم المحمية المُناسب لمشروعي؟",
    a: "[CONTENT_NEEDED: يُحدَّد بعد الاستشارة الميدانية — يعتمد على المحصول والمساحة والميزانية]",
  },
  {
    q: "هل تستوردون المواد أم تُصنَّع محلياً؟",
    a: "[CONTENT_NEEDED: تفاصيل مصادر المواد — محلي/مستورد وما نسبة كل منهما]",
  },
  {
    q: "ما مدّة التركيب الكامل؟",
    a: "[CONTENT_NEEDED: مدّة التركيب حسب الحجم — أسابيع لكل فئة]",
  },
  {
    q: "ما تكلفة التشغيل الشهرية؟",
    a: "[CONTENT_NEEDED: تقدير تكلفة التشغيل — طاقة، مياه، صيانة — حسب الحجم]",
  },
  {
    q: "هل تقدّمون عقود صيانة سنوية؟",
    a: "[CONTENT_NEEDED: تفاصيل عقود الصيانة وما تشمله]",
  },
];

function FAQ() {
  return (
    <section className="section-light py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-10">
          <h2 className="h2 text-deep-green">أسئلة شائعة</h2>
        </div>
        <div className="space-y-4">
          {FAQS.map(({ q, a }) => (
            <div key={q} className="bg-white rounded-card p-6 shadow-soft">
              <h3 className="h4 text-deep-green mb-2">{q}</h3>
              <p className="body-base text-medium-gray">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section 8: Final CTA ────────────────────────────────── */
function FinalCTA() {
  return (
    <section className="bg-deep-green py-24">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <p className="text-lime text-lg font-bold uppercase tracking-widest mb-4">
          ابدأ بزيارة مجانية
        </p>
        <h2 className="h2 text-cream mb-5">
          اطلب زيارة موقعك المجانية — نُصمّم محمية مبنيّة على ظروفك الفعلية
        </h2>
        <p className="body-base text-cream/80 max-w-2xl mx-auto mb-10">
          زيارة ميدانية، تقييم المناخ والمساحة، وعرض مخصّص — بلا التزام
          مسبق.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton href="/contact?interest=greenhouses" variant="lime">
            اطلب عرض مخصّص
          </CTAButton>
          <CTAButton href="/osfan-station" variant="outline-green">
            شاهد نتائجنا في عسفان
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
  { name: "Smart Greenhouses", url: "/products/smart-greenhouses" },
];

// FAQSchema مُحذوف لهذه الصفحة — جميع إجابات FAQ لا تزال [CONTENT_NEEDED]
// يُضاف بعد توفّر الإجابات الحقيقية

export default function SmartGreenhousesPage() {
  return (
    <>
      <ProductSchema
        name="Smart Greenhouses — المحميات الذكية"
        description="محميات ذكية بأتمتة IoT كاملة. هياكل مقاومة للرياح، عزل حراري، تحكم مناخي مُختَبَر في عسفان. حلول للمزارع التجارية والحكومية."
        image="/images/products/smart-greenhouses/hero.jpg"
        url="/products/smart-greenhouses"
        category="Smart Agricultural Greenhouses"
      />
      <BreadcrumbSchema items={BREADCRUMB} />
      <Hero />
      <ValuesSection />
      <TechSpecs />
      <HowItWorks />
      <OsfanGallery />
      <ScalesSection />
      <FAQ />
      <FinalCTA />
    </>
  );
}
