import type { Metadata } from "next";
import { ProductSchema, FAQSchema, BreadcrumbSchema } from "@/components/shared/SchemaJsonLd";
import { CTAButton } from "@/components/shared/CTAButton";
import {
  Droplets,
  TrendingUp,
  Leaf,
  Waves,
  FlaskConical,
  Layers,
  Sprout,
  Wind,
  Zap,
  CheckCircle2,
  ExternalLink,
  Award,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Hydroponic Systems — أنظمة الزراعة المائية + iGarden Tower | iGarden",
  description:
    "7 تقنيات زراعة مائية مُختَبَرة في عسفان. من NFT إلى DWC إلى Aeroponics. يشمل iGarden Tower المُسجَّل صناعياً (SAIP #423450193).",
  alternates: { canonical: "https://igarden.sa/products/hydroponics" },
  openGraph: {
    title: "Hydroponic Systems — أنظمة الزراعة المائية + iGarden Tower",
    description:
      "7 تقنيات + iGarden Tower المُسجَّل. توفير 95% من المياه و3x إنتاجية.",
    images: ["/images/og/hydroponics.jpg"],
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
          <div>
            <p className="text-lime text-xs font-bold uppercase tracking-widest mb-3">
              الزراعة المائية · 7 تقنيات
            </p>
            <h1 className="h1 text-deep-green mb-5">
              Hydroponic Systems —{" "}
              <span className="block">زراعة بلا تربة، بكفاءة استثنائية</span>
            </h1>
            <p className="body-base text-medium-gray mb-8 max-w-lg">
              7 تقنيات زراعة مائية مُختَبَرة في عسفان — توفّر 95% من المياه
              وتُنتج 3× مقارنة بالزراعة التقليدية. يشمل{" "}
              <span className="font-medium text-deep-green">iGarden Tower</span>{" "}
              المُسجَّل صناعياً.
            </p>
            <CTAButton href="/contact?interest=hydroponics" variant="lime">
              اطلب استشارة
            </CTAButton>
          </div>

          {/* Hero image placeholder */}
          <div
            className="relative aspect-[4/3] rounded-card overflow-hidden bg-corp-green flex items-center justify-center"
            role="img"
            aria-label="أنظمة الزراعة المائية من iGarden في محطة عسفان"
          >
            {/* [CONTENT_NEEDED: /images/products/hydroponics/hero.jpg — صورة نظام هيدروبونيك من عسفان] */}
            <Droplets className="w-20 h-20 text-white/20" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Section 2: Values ───────────────────────────────────── */
const VALUES = [
  {
    Icon: Droplets,
    title: "توفير 95% من المياه",
    text: "أنظمة مغلقة تُعيد تدوير المياه باستمرار — مقارنة بالزراعة التقليدية المفتوحة.",
  },
  {
    Icon: TrendingUp,
    title: "3× إنتاجية",
    text: "زراعة عمودية + دورة نمو أقصر = إنتاج أعلى لكل متر مربع في نفس المساحة.",
  },
  {
    Icon: Leaf,
    title: "بلا تربة، بلا مبيدات",
    text: "بيئة معقّمة محكومة — أقلّ آفات، أقلّ كيماويات، محصول أنظف وأكثر أماناً.",
  },
];

function ValuesSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 max-w-7xl">
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

/* ─── Section 3: 7 Techniques ─────────────────────────────── */
const TECHNIQUES = [
  {
    Icon: Waves,
    name: "NFT",
    fullName: "Nutrient Film Technique",
    desc: "تيار رقيق من المحلول المغذّي يمرّ عبر الجذور. مثالي للورقيات السريعة.",
  },
  {
    Icon: Droplets,
    name: "DWC",
    fullName: "Deep Water Culture",
    desc: "الجذور غاطسة كلّياً في محلول مُهوّى. سريع النمو، بسيط التشغيل.",
  },
  {
    Icon: FlaskConical,
    name: "Drip",
    fullName: "Drip Hydroponics",
    desc: "تنقيط محلول مغذّي إلى أوساط صلبة (Perlite / Coco). مرن ومُجرَّب.",
  },
  {
    Icon: Zap,
    name: "Ebb & Flow",
    fullName: "Ebb & Flow",
    desc: "غمر دوري + تصريف. توازن جيد بين الهواء والماء عند الجذور.",
  },
  {
    Icon: Sprout,
    name: "Wick",
    fullName: "Wick System",
    desc: "حبل ينقل المحلول للجذور بالخاصية الشعرية. بسيط ومنخفض التكلفة.",
  },
  {
    Icon: Wind,
    name: "Aeroponics",
    fullName: "Aeroponics",
    desc: "الجذور في الهواء + رشّ ضباب مغذّي. أعلى كفاءة واستهلاك مياه أقلّ.",
  },
  {
    Icon: Layers,
    name: "Vertical",
    fullName: "Vertical Towers",
    desc: "أعمدة عمودية تُضاعف الإنتاج لكل م² — أساس iGarden Tower.",
  },
];

function TechniquesSection() {
  return (
    <section className="section-light py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-lime text-xs font-bold uppercase tracking-widest mb-2">
            التقنيات المُختَبَرة في عسفان
          </p>
          <h2 className="h2 text-deep-green">7 تقنيات لـ 7 احتياجات</h2>
          <p className="body-base text-medium-gray max-w-2xl mx-auto mt-3">
            لكلّ محصول ومشروع وميزانية — نختار التقنية الأنسب، لا الأكثر
            شهرة.
          </p>
          {/* [CONTENT_NEEDED: مراجعة هذه التقنيات السبع مع م. أيمن — تأكيد الترتيب وأنّ كلها مُختَبَرة في عسفان] */}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {TECHNIQUES.map(({ Icon, name, fullName, desc }) => (
            <div
              key={name}
              className="bg-white rounded-card p-5 shadow-soft hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="w-10 h-10 rounded-full bg-lime/10 flex items-center justify-center mb-3">
                <Icon className="w-5 h-5 text-lime" aria-hidden />
              </div>
              <p className="font-latin font-bold text-deep-green text-sm mb-0.5">
                {name}
              </p>
              <p className="text-medium-gray text-xs mb-2">{fullName}</p>
              <p className="body-sm text-medium-gray text-xs leading-relaxed flex-1">
                {desc}
              </p>
            </div>
          ))}

          {/* 8th cell — anchor to Tower section */}
          <div className="bg-lime/10 border-2 border-lime rounded-card p-5 flex flex-col items-center justify-center text-center">
            <Award className="w-8 h-8 text-lime mb-2" aria-hidden />
            <p className="font-bold text-deep-green text-sm mb-1">iGarden Tower</p>
            <p className="text-xs text-medium-gray">
              منتجنا المُسجَّل — اكتشفه أدناه ↓
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Section 4: iGarden Tower (HERO OF THE PAGE) ─────────── */
function IGardenTowerSection() {
  return (
    <section
      className="py-24 border-t-4 border-lime"
      style={{
        background: "linear-gradient(135deg, var(--color-cream) 0%, color-mix(in srgb, var(--color-lime) 5%, white) 100%)",
      }}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <span className="bg-lime text-white text-xs font-bold px-4 py-1.5 rounded-pill flex items-center gap-2">
            <Award className="w-4 h-4" aria-hidden />
            نموذج صناعي مُسجَّل · SAIP
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Tower image — left in LTR layout (visual right in RTL) */}
          <div
            className="order-2 lg:order-1 relative aspect-[3/4] rounded-card overflow-hidden bg-corp-green flex items-center justify-center shadow-lg"
            role="img"
            aria-label="iGarden Tower — برج الزراعة المائية العمودي"
          >
            {/* [CONTENT_NEEDED: /images/products/hydroponics/igarden-tower.jpg — صورة كاملة للبرج] */}
            <div className="text-center p-8">
              <Layers className="w-24 h-24 text-white/20 mx-auto mb-4" aria-hidden />
              <p className="text-white/40 text-sm font-latin">iGarden Tower</p>
            </div>
            {/* SAIP badge on image */}
            <div className="absolute bottom-4 start-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow">
              <p className="text-deep-green font-bold text-xs">نموذج صناعي مُسجَّل</p>
              <p
                dir="ltr"
                className="ltr-inline font-latin text-lime font-bold text-xs"
              >
                SAIP #423450193
              </p>
            </div>
          </div>

          {/* Text — right side */}
          <div className="order-1 lg:order-2">
            <h2 className="h2 text-deep-green mb-3">
              iGarden Tower
            </h2>
            <p className="body-base text-medium-gray mb-2">
              منتجنا المُسجَّل صناعياً
            </p>
            <p className="body-sm text-medium-gray mb-6">
              نموذج Aeroponics عمودي صُمِّم وطُوِّر محلياً، مسجَّل في الهيئة
              السعودية للملكية الفكرية{" "}
              <span dir="ltr" className="ltr-inline font-latin font-medium text-deep-green">
                SAIP
              </span>{" "}
              بالرقم{" "}
              <span dir="ltr" className="ltr-inline font-latin font-bold text-deep-green">
                #423450193
              </span>
              .
            </p>

            <blockquote className="border-s-4 border-lime ps-4 mb-6">
              <p className="body-base text-medium-gray italic">
                «مرّ بثلاث مراحل تطوير في محطّة عسفان قبل أن يصل إلى مرحلة
                الاعتماد. كلّ مدخل فيه — من المضخّات إلى الأنابيب — اختُرنا
                أفضل بديل متاح من السوق المحلي قبل اللجوء للاستيراد.»
              </p>
            </blockquote>

            {/* [CONTENT_NEEDED: قصّة التَوطين الكاملة — أيّ مكوّنات حُلّت محلياً؟ ما المشاكل التي ووجهت وكيف حُلّت؟] */}

            {/* 3 numbers */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center bg-white rounded-card p-4 shadow-soft">
                <p
                  dir="ltr"
                  className="ltr-inline font-latin font-bold text-lime text-lg leading-tight mb-1"
                >
                  #423450193
                </p>
                <p className="text-deep-green text-xs font-medium">
                  SAIP — مسجَّل
                </p>
              </div>
              <div className="text-center bg-white rounded-card p-4 shadow-soft">
                <p className="stat-num !text-3xl mb-1">3</p>
                <p className="text-deep-green text-xs font-medium">
                  مراحل تطوير في عسفان
                </p>
              </div>
              <div className="text-center bg-white rounded-card p-4 shadow-soft">
                <p className="stat-num !text-3xl mb-1">×4</p>
                <p className="text-deep-green text-xs font-medium">
                  يُضاعف الإنتاج عمودياً
                </p>
              </div>
            </div>

            <CTAButton href="/contact?interest=tower" variant="lime">
              اطلب iGarden Tower لمشروعك
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Section 5: Osfan Gallery ───────────────────────────── */
const GALLERY = [
  { src: "/images/products/hydroponics/osfan-1.jpg", alt: "نظام NFT يعمل في محطة عسفان" },
  { src: "/images/products/hydroponics/osfan-2.jpg", alt: "DWC — جذور في محلول مُهوّى" },
  { src: "/images/products/hydroponics/osfan-3.jpg", alt: "iGarden Tower في وضع التشغيل الميداني" },
  { src: "/images/products/hydroponics/osfan-4.jpg", alt: "نباتات الخس في مرحلة الحصاد" },
  { src: "/images/products/hydroponics/osfan-5.jpg", alt: "لقطة قريبة — جذور نظام Aeroponics" },
  { src: "/images/products/hydroponics/osfan-6.jpg", alt: "منظر عام لقسم الهيدروبونيك في عسفان" },
];

function OsfanGallery() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-10">
          <p className="text-lime text-xs font-bold uppercase tracking-widest mb-2">
            كلّها تعمل الآن في عسفان
          </p>
          <h2 className="h2 text-deep-green">الأنظمة في الميدان</h2>
          {/* [CONTENT_NEEDED: 4-6 صور حقيقية لأنظمة Hydroponics في محطة عسفان — /images/products/hydroponics/osfan-1..6.jpg] */}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
          {GALLERY.map((img) => (
            <div
              key={img.src}
              className="relative aspect-[4/3] rounded-card overflow-hidden bg-brand-600/20 flex items-center justify-center"
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
    title: "مزارع مائية تجارية",
    desc: "مشاريع تجارية كبرى. NFT + Towers بمقاييس صناعية. تصميم مخصّص وفريق تركيب متكامل.",
    cta: { label: "اطلب عرضاً", href: "/contact?interest=hydroponics-industrial" },
    external: false,
    highlight: false,
  },
  {
    tier: "متوسط",
    title: "أنظمة للمزارع المتوسطة",
    desc: "حلول مرنة 50–500 م². نُختار التقنية الأنسب لمحصولك وميزانيتك.",
    cta: { label: "اطلب عرضاً", href: "/contact?interest=hydroponics-mid" },
    external: false,
    highlight: true,
  },
  {
    tier: "منزلي",
    title: "أنظمة منزلية + iGarden Tower مصغّر",
    desc: "للفلل والشرفات والاستراحات. يشمل iGarden Tower المصغّر — حلول جاهزة عبر متجرنا.",
    cta: { label: "استكشف المتجر ↗", href: "https://shop.igarden.sa" },
    external: true,
    highlight: false,
  },
];

function ScalesSection() {
  return (
    <section className="section-light py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-lime text-xs font-bold uppercase tracking-widest mb-2">
            حلول بكل الأحجام
          </p>
          <h2 className="h2 text-deep-green">
            من المزارع التجارية إلى الشرفات المنزلية
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {SCALES.map((s) => (
            <div
              key={s.tier}
              className={`rounded-card p-6 flex flex-col shadow-soft ${
                s.highlight
                  ? "bg-deep-green text-cream ring-2 ring-lime"
                  : "bg-white"
              }`}
            >
              <span className="text-lime text-xs font-bold uppercase tracking-widest mb-3">
                {s.tier}
              </span>
              <h3 className={`h3 mb-3 ${s.highlight ? "text-cream" : "text-deep-green"}`}>
                {s.title}
              </h3>
              <p className={`body-sm flex-1 mb-5 ${s.highlight ? "text-cream/80" : "text-medium-gray"}`}>
                {s.desc}
              </p>
              {s.external ? (
                <a
                  href={s.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-lime font-medium hover:text-bright-lime transition-colors text-sm"
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
/* [CONTENT_NEEDED: إجابات الأسئلة الخمسة — يراجعها م. أيمن] */
const FAQS = [
  {
    q: "ما الفرق بين NFT و DWC وأيّهما يناسبني؟",
    a: "[CONTENT_NEEDED: مقارنة مبسَّطة بين التقنيتين + معيار الاختيار حسب نوع المحصول والميزانية]",
  },
  {
    q: "كم تستهلك الأنظمة من الكهرباء يومياً؟",
    a: "[CONTENT_NEEDED: أرقام استهلاك الكهرباء لكل نظام — بالكيلوواط/ساعة — م. أيمن المصدر]",
  },
  {
    q: "ما المحاصيل الأنسب للزراعة المائية في السعودية؟",
    a: "[CONTENT_NEEDED: قائمة بالمحاصيل الأفضل أداءً في ظروف عسفان — خضراوات ورقية، أعشاب، فراولة…]",
  },
  {
    q: "هل أحتاج خبير لتشغيل النظام يومياً؟",
    a: "لا — Smart OS يُراقب الأنظمة تلقائياً ويُرسل تنبيهات عند أيّ انحراف. نُوفّر تدريباً كاملاً عند التسليم حتى تتمكّن من إدارة المزرعة بنفسك.",
  },
  {
    q: "كيف يختلف iGarden Tower عن الأبراج المستوردة؟",
    a: "iGarden Tower مُصمَّم ومُختَبَر في +45°C وبرطوبة الخليج. المستوردة مُصمَّمة لمناخات أوروبية وتحتاج تعديلات مكلفة. علاوةً على أنّ قطع الغيار محلية — لا انتظار لشحنات.",
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

/* ─── Section 8: Final CTA ────────────────────────────────── */
function FinalCTA() {
  return (
    <section className="bg-deep-green py-24">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <p className="text-lime text-xs font-bold uppercase tracking-widest mb-4">
          شاهد بعينك
        </p>
        <h2 className="h2 text-cream mb-5">
          احجز زيارة لمحطّة عسفان — شاهد التقنيات السبع تعمل أمامك
        </h2>
        <p className="body-base text-cream/80 max-w-2xl mx-auto mb-10">
          زيارة ميدانية مجانية لمحطّتنا في عسفان — ترى النظام حيّاً، تسأل
          الفريق مباشرة، وتقرّر بثقة.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton href="/contact?interest=osfan-visit" variant="lime">
            احجز زيارة مجانية لعسفان
          </CTAButton>
          <CTAButton href="/contact?interest=hydroponics" variant="outline-green">
            اطلب استشارة عن بُعد
          </CTAButton>
        </div>
      </div>
    </section>
  );
}

/* ─── Page ────────────────────────────────────────────────── */
const BREADCRUMB = [
  { name: "الرئيسية", url: "/" },
  { name: "المنتجات", url: "/products" },
  { name: "Hydroponic Systems", url: "/products/hydroponics" },
];

// Only FAQs with real (non-placeholder) answers go into the schema
const SCHEMA_FAQS = [
  {
    question: "هل أحتاج خبير لتشغيل النظام يومياً؟",
    answer:
      "لا — Smart OS يُراقب الأنظمة تلقائياً ويُرسل تنبيهات عند أيّ انحراف. نُوفّر تدريباً كاملاً عند التسليم حتى تتمكّن من إدارة المزرعة بنفسك.",
  },
  {
    question: "كيف يختلف iGarden Tower عن الأبراج المستوردة؟",
    answer:
      "iGarden Tower مُصمَّم ومُختَبَر في +45°C وبرطوبة الخليج. المستوردة مُصمَّمة لمناخات أوروبية وتحتاج تعديلات مكلفة. علاوةً على أنّ قطع الغيار محلية — لا انتظار لشحنات.",
  },
];

export default function HydroponicsPage() {
  return (
    <>
      <ProductSchema
        name="Hydroponic Systems — أنظمة الزراعة المائية + iGarden Tower"
        description="7 تقنيات زراعة مائية مُختَبَرة في عسفان. من NFT إلى DWC إلى Aeroponics. يشمل iGarden Tower المُسجَّل صناعياً (SAIP #423450193)."
        image="/images/products/hydroponics/hero.jpg"
        url="/products/hydroponics"
        category="Hydroponic Systems"
      />
      <FAQSchema faqs={SCHEMA_FAQS} />
      <BreadcrumbSchema items={BREADCRUMB} />
      <Hero />
      <ValuesSection />
      <TechniquesSection />
      <IGardenTowerSection />
      <OsfanGallery />
      <ScalesSection />
      <FAQ />
      <FinalCTA />
    </>
  );
}
