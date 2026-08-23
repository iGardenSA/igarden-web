import type { Metadata } from "next";
import Image from "next/image";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/shared/SchemaJsonLd";
import { CTAButton } from "@/components/shared/CTAButton";
import { VisitForm } from "./VisitForm";
import { CheckCircle2, Microscope } from "lucide-react";

export const metadata: Metadata = {
  title: "مرفق R&D في عسفان للتجارب والتطوير | iGarden",
  description:
    "المختبر الميداني لـ iGarden في عسفان شمال جدة. حيث نُجرّب كلّ نظام في ظروف السعودية الحقيقية قبل أن يصل إلى عميل.",
  alternates: { canonical: "https://igarden.sa/osfan-station" },
  openGraph: {
    title: "مرفق R&D في عسفان — حيث نُجرّب قبل أن نُسلّم",
    description:
      "المختبر الميداني لـ iGarden. أنظمة زراعة مائية وورش «ازرع بذكاء» في مرفق R&D في عسفان.",
    images: [{ url: "/api/og?title=%D9%85%D8%B1%D9%81%D9%82+R%26D+%D9%81%D9%8A+%D8%B9%D8%B3%D9%81%D8%A7%D9%86+%E2%80%94+%D8%A7%D9%84%D9%85%D8%AE%D8%AA%D8%A8%D8%B1+%D8%A7%D9%84%D9%85%D9%8A%D8%AF%D8%A7%D9%86%D9%8A&sub=%D9%86%D8%AC%D8%B1%D9%91%D8%A8+%D9%82%D8%A8%D9%84+%D8%A3%D9%86+%D9%86%D9%8F%D8%B3%D9%84%D9%91%D9%85", width: 1200, height: 630 }],
    type: "website",
    locale: "ar_SA",
  },
  twitter: {
    card: "summary_large_image",
    title: "مرفق R&D في عسفان — المختبر الميداني | iGarden",
    description:
      "نُجرّب الأنظمة في ظروف تشغيل سعودية قبل أن تصل إلى العميل.",
    images: ["/api/og?title=%D9%85%D8%B1%D9%81%D9%82+R%26D+%D9%81%D9%8A+%D8%B9%D8%B3%D9%81%D8%A7%D9%86"],
  },
};

/* ─── Section 1: Hero (full-width banner) ─────────────────── */
function Hero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#0A2920]">
      <Image
        src="/images/osfan-full/04_greenhouse_wide.webp"
        alt="مرفق R&D في عسفان — المختبر الميداني لـ iGarden شمال جدة"
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 bg-[#0F3D2E]/65" aria-hidden />
      <div className="relative container mx-auto px-4 max-w-4xl text-center py-24">
        <p className="text-lime text-lg font-bold uppercase tracking-widest mb-4">
          عسفان، شمال جدة · منذ 2025
        </p>
        <h1 className="h1 text-cream mb-5">
          قبل أن نُنفّذ في مزرعتك،
          <span className="block text-[#A5D63F]">نَكسر النظام في عسفان.</span>
        </h1>
        <p className="body-base text-cream/85 max-w-2xl mx-auto leading-relaxed">
          المختبر الميداني لـ{" "}
          <span dir="ltr" className="ltr-inline font-latin font-bold">
            iGarden
          </span>{" "}
          — حيث تَمرّ كلّ تقنية بصيف +٤٥°C، رطوبة ساحلية، رياح الخليج، وغبار
          قبل أن تَصل إلى عميل.
        </p>

        <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-4 text-cream/70 text-sm">
          <span className="font-latin">7 تقنيات نشطة</span>
          <span className="text-[#A5D63F]/40">·</span>
          <span>5 ورش مُنفَّذة</span>
          <span className="text-[#A5D63F]/40">·</span>
          <span className="font-latin">Comprehensive QA</span>
        </div>
      </div>
    </section>
  );
}

/* ─── Section 2: Why Osfan ────────────────────────────────── */
function WhyOsfan() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lime text-lg font-bold uppercase tracking-widest mb-3">
              لماذا عسفان؟
            </p>
            <h2 className="h2 text-deep-green mb-6">
              الحلول تُقاس في الميدان، لا في المختبر
            </h2>
            <blockquote className="border-s-4 border-lime ps-5 mb-6 space-y-4">
              <p className="body-base text-medium-gray">
                «في عسفان، كلّ نظام قبل أن يصل إليك، اختُبر في ظروف المناخ
                السعودي الحقيقية — درجات حرارة تتجاوز +45°C، رطوبة ساحلية،
                رياح، وغبار.»
              </p>
              <p className="body-base text-medium-gray">
                «ما يصلك من{" "}
                <span dir="ltr" className="ltr-inline font-latin font-bold">
                  iGarden
                </span>{" "}
                ليس منتجاً مستورَداً مع كتيّب ترجمة. هو حلٌّ مرّ بأيدينا،
                وقاسى مناخك قبل أن يصل إلى مزرعتك.»
              </p>
            </blockquote>
            <CTAButton href="#احجز-زيارة" variant="outline-green">
              احجز زيارة للمحطّة ↓
            </CTAButton>
          </div>

          {/* Close-up plant image */}
          <div className="aspect-[4/3] rounded-card overflow-hidden relative">
            <Image
              src="/images/osfan-full/03_cabbage_diversity.webp"
              alt="نباتات نامية داخل مرفق R&D في عسفان"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Section 3: Gallery ──────────────────────────────────── */
const GALLERY_IMAGES = [
  {
    src: "/images/osfan-full/04_greenhouse_wide.webp",
    label: "منظر عام للمحطة",
    detail: "شمال جدة — ظروف مناخية حقيقية",
  },
  {
    src: "/images/osfan-full/01_tower_visitors.webp",
    label: "البنية التَحتية المغطّاة",
    detail: "هيكل مقاوم لرياح الخليج",
  },
  {
    src: "/images/osfan-full/03_cabbage_diversity.webp",
    label: "تنوع المحاصيل",
    detail: "ورقيات مُنتجة في ظروف +٤٥°C",
  },
  {
    src: "/images/osfan-full/02_tower_closeup.webp",
    label: "iGarden Tower",
    detail: "النموذج المُسجَّل SAIP في وضع تَشغيل",
  },
  {
    src: "/images/osfan-full/05_tomato_tunnel.webp",
    label: "نفق الطماطم",
    detail: "اختبار Drip Hydroponics ميدانياً",
  },
  {
    src: "/images/osfan-full/06_inspector_crops.webp",
    label: "متابعة المحاصيل",
    detail: "مراقبة آنية لأداء الأنظمة",
  },
];

function Gallery() {
  return (
    <section className="section-light py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-10">
          <p className="text-lime text-lg font-bold uppercase tracking-widest mb-2">
            الصور الحقيقية
          </p>
          <h2 className="h2 text-deep-green">عسفان بالصور</h2>
          <p className="body-base text-medium-gray max-w-2xl mx-auto mt-3">
            كلّ صورة مَوقع فعلي في عسفان — لا صور stock، ولا renders.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {GALLERY_IMAGES.map((img) => (
            <figure
              key={img.src}
              className="relative aspect-square rounded-card overflow-hidden group"
            >
              <Image
                src={img.src}
                alt={`${img.label} — ${img.detail}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(min-width: 768px) 33vw, 50vw"
              />
              <figcaption className="absolute bottom-0 inset-x-0 px-4 py-3 bg-gradient-to-t from-deep-green/95 via-deep-green/70 to-transparent text-cream">
                <p className="font-bold text-sm leading-snug mb-0.5">
                  {img.label}
                </p>
                <p className="text-xs text-cream/75 leading-snug">
                  {img.detail}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section 4: Tested Systems ──────────────────────────── */
/*
  [CONTENT_NEEDED: قائمة الأنظمة المُختَبَرة فعلياً مع م. أيمن —
   لكل نظام: ما تعلّمناه منه + كيف غيّر منتجاتنا.
   الأنظمة المقترحة: NFT بأنابيب 4"، DWC مفرد، Tower النموذج الأوّل،
   نظام Foggers، Smart Controller v0.1، إلخ.]
*/
const SYSTEMS = [
  {
    Icon: Microscope,
    name: "NFT — Nutrient Film Technique",
    learned: "الأنابيب الرفيعة تتسدّ بسرعة في الصيف بسبب تكلّس الماء — اكتشفنا الحاجة لفلاتر متخصّصة للمناخ الخليجي.",
    changed: "أضفنا مرحلة ترشيح بلوري لكل وحدة NFT نُركّبها — تُمدَّد عمر الأنظمة وتقلّل الصيانة.",
  },
  {
    Icon: Microscope,
    name: "DWC — Deep Water Culture",
    learned: "الجذور تتعفّن عند درجات حرارة الماء >26°C بدون تبريد إضافي — المناخ السعودي يتطلّب تبريد قاعدي.",
    changed: "كل وحدة DWC الآن مُجهَّزة بمبدّل حرارة صغير للحفاظ على 18-22°C في الصيف.",
  },
  {
    Icon: Microscope,
    name: "iGarden Tower — النموذج الأوّل",
    learned: "الهيكل الأوّلي فقد صلابته بعد 6 أشهر تحت الحرارة الشديدة — الألومنيوم المُعالَج حرارياً ضروري لا اختياري.",
    changed: "النموذج الحالي مُسجَّل صناعياً (SAIP #423450193) بهيكل أثقل وفتحات تشريب مُحسَّنة.",
  },
  {
    Icon: Microscope,
    name: "Smart Controller v0.1",
    learned: "الإصدار الأوّل استخدم قراءة pH تناظرية مباشرة — درجة الحرارة تُشوّه القراءات بنسبة تصل 15%.",
    changed: "الإصدار الحالي يستخدم ADS1115 (ADR الداخلي T002) — تعويض تلقائي لدرجة الحرارة يضمن دقة ±0.1 pH.",
  },
  {
    Icon: Microscope,
    name: "نظام Foggers للتبريد",
    learned: "الضباب الدقيق يخفّض حرارة المحمية 6-8°C لكنه يرفع الرطوبة — فطريات الجذور في الأصناف الحسّاسة.",
    changed: "الآن نُوازن الفوجرز مع تهوية جانبية مُتزامنة — التبريد بدون ارتفاع في الرطوبة فوق 75%.",
  },
  {
    Icon: Microscope,
    name: "Drip Hydroponics",
    learned: "الريّ التقطيري يعمل جيداً مع Coco Coir لكن يحتاج تدفقاً أعلى في +45°C لتجنّب التجفيف بين الجرعات.",
    changed: "برمجنا Smart OS لزيادة تردد الريّ تلقائياً عند الحرارة العالية — بدون تدخل يدوي.",
  },
];

function TestedSystems() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-lime text-lg font-bold uppercase tracking-widest mb-2">
            من الفشل أتعلّمنا
          </p>
          <h2 className="h2 text-deep-green">ما اختبرناه في عسفان</h2>
          <p className="body-base text-medium-gray max-w-2xl mx-auto mt-3">
            كلّ نظام مرّ بعسفان علّمنا شيئاً لم تُخبرنا به كتالوجات
            الموردين.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SYSTEMS.map((s) => (
            <div
              key={s.name}
              className="bg-cream rounded-card p-6 shadow-soft hover:shadow-md transition-shadow"
            >
              <h3 className="h4 text-deep-green mb-4 font-latin text-lg">
                {s.name}
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-lime text-lg font-bold uppercase tracking-wider mb-1">
                    ما تعلّمناه
                  </p>
                  <p className="body-sm text-medium-gray">{s.learned}</p>
                </div>
                <div>
                  <p className="text-lime text-lg font-bold uppercase tracking-wider mb-1">
                    كيف غيّر منتجاتنا
                  </p>
                  <p className="body-sm text-medium-gray">{s.changed}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section 5: Workshops ────────────────────────────────── */
function WorkshopsSection() {
  return (
    <section className="section-light py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Workshop image */}
          <div className="aspect-[4/3] rounded-card overflow-hidden relative">
            <Image
              src="/images/osfan-full/01_tower_visitors.webp"
              alt="ورشة «ازرع بذكاء» داخل مرفق R&D في عسفان"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>

          {/* Text + numbers */}
          <div>
            <p className="text-lime text-lg font-bold uppercase tracking-widest mb-3">
              «ازرع بذكاء»
            </p>
            <h2 className="h2 text-deep-green mb-4">
              5 ورش مُنفَّذة — والقادمة تنتظركم
            </h2>
            <p className="body-base text-medium-gray mb-8">
              ورش عمل تطبيقية بدلاً من المحاضرات النظرية. كلّ ورشة تأخذ
              المشارك من الفكرة إلى نظام شغّال — في يوم واحد.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="text-center bg-white rounded-card p-4 shadow-soft">
                <p className="stat-num !text-3xl mb-1">5</p>
                <p className="text-deep-green text-lg font-medium">ورش مُنفَّذة</p>
              </div>
              <div className="text-center bg-white rounded-card p-4 shadow-soft">
                <p className="stat-num !text-3xl mb-1">+45°C</p>
                <p className="text-deep-green text-lg font-medium">اختبار ميداني</p>
              </div>
              {/* HIDDEN IN WAVE 1 — Workshop quote needed from team (Wave 2) */}
            </div>

            <CTAButton href="/contact?interest=workshop&cta=workshop_signup" variant="lime">
              اشترك للتنبيه بالورشة القادمة
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Section 6: Expansion Plans ─────────────────────────── */
const EXPANSION_PLANS = [
  "توسعة المساحة المُغطّاة بالمحميات الذكية",
  "إضافة معمل Tissue Culture (زراعة الأنسجة) — تكثير النباتات النادرة",
  "نماذج Smart Controllers v2 و Tower v2 للاختبار الميداني",
  "مقهى زراعي تعليمي يُتيح للزوّار رؤية الأنظمة في عملها",
];

function ExpansionPlans() {
  return (
    <section className="section-dark py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10">
          <p className="text-lime text-lg font-bold uppercase tracking-widest mb-2">
            المرحلة القادمة
          </p>
          <h2 className="h2 text-cream">ما يأتي بعد ذلك في عسفان</h2>
          <p className="body-base text-cream/70 max-w-xl mx-auto mt-3">
            نعمل على توسعة مرفق R&D في عسفان كمساحة اختبار وتشغيل ميداني
            لأنظمة الزراعة الذكية في ظروف سعودية حقيقية. الخطوات القادمة:
          </p>
        </div>
        <ul className="space-y-4 max-w-2xl mx-auto">
          {EXPANSION_PLANS.map((plan) => (
            <li key={plan} className="flex items-start gap-3">
              <CheckCircle2
                className="w-5 h-5 text-lime flex-shrink-0 mt-0.5"
                aria-hidden
              />
              <span className="body-base text-cream/90">{plan}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ─── Section 7: Visit Booking ────────────────────────────── */
function BookVisit() {
  return (
    <section id="احجز-زيارة" className="bg-white py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-10">
          <p className="text-lime text-lg font-bold uppercase tracking-widest mb-2">
            نرحّب بزيارتك
          </p>
          <h2 className="h2 text-deep-green">
            احجز موعداً لرؤية الأنظمة في عملها
          </h2>
          <p className="body-base text-medium-gray max-w-xl mx-auto mt-3">
            زيارة مجانية — تُشاهد الأنظمة تعمل حيّاً، تلتقي الفريق، وتسأل
            بلا قيود.
          </p>
        </div>

        <div className="bg-cream rounded-card p-8 shadow-soft">
          <VisitForm />
        </div>

        <p className="text-center text-medium-gray text-lg mt-6">
          أو تواصل مباشرة:{" "}
          <a
            href="https://wa.me/966570340500"
            className="text-lime hover:text-deep-green transition-colors font-medium"
          >
            واتساب
          </a>
        </p>
      </div>
    </section>
  );
}

/* ─── Page ────────────────────────────────────────────────── */
const BREADCRUMB = [
  { name: "الرئيسية", url: "/" },
  { name: "مرفق R&D في عسفان", url: "/osfan-station" },
];

export default function OsfanStationPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={BREADCRUMB} />
      <Hero />
      <WhyOsfan />
      <Gallery />
      <TestedSystems />
      <WorkshopsSection />
      <ExpansionPlans />
      <BookVisit />
    </>
  );
}
