import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/shared/SchemaJsonLd";
import { CTAButton } from "@/components/shared/CTAButton";
import { VisitForm } from "./VisitForm";
import { CheckCircle2, Users, Microscope, Sprout } from "lucide-react";

export const metadata: Metadata = {
  title: "محطّة عسفان للتجارب والتطوير | iGarden",
  description:
    "المختبر الميداني لـ iGarden في عسفان شمال جدة. حيث نُجرّب كلّ نظام في ظروف السعودية الحقيقية قبل أن يصل إلى عميل.",
  alternates: { canonical: "https://igarden.sa/osfan-station" },
  openGraph: {
    title: "محطّة عسفان — حيث نُجرّب قبل أن نُسلّم",
    description:
      "المختبر الميداني لـ iGarden. أنظمة زراعة مائية + ورش «ازرع بذكاء» في ظروف +45°C.",
    images: ["/images/og/osfan-station.jpg"],
    type: "website",
    locale: "ar_SA",
  },
};

/* ─── Section 1: Hero (full-width banner) ─────────────────── */
function Hero() {
  return (
    <section
      className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-corp-green"
      style={{
        backgroundImage: "url(/images/osfan/hero-banner.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* [CONTENT_NEEDED: /images/osfan/hero-banner.jpg — أفضل صورة بانورامية لمحطة عسفان] */}
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(15, 61, 46, 0.6)" }}
        aria-hidden
      />
      <div className="relative container mx-auto px-4 max-w-4xl text-center py-24">
        <p className="text-lime text-lg font-bold uppercase tracking-widest mb-4">
          عسفان، شمال جدة · منذ 2025
        </p>
        <h1 className="h1 text-cream mb-4">
          محطّة عسفان — حيث نُجرّب قبل أن نُسلّم
        </h1>
        <p className="body-base text-cream/80 max-w-2xl mx-auto">
          المختبر الميداني لـ{" "}
          <span dir="ltr" className="ltr-inline font-latin font-bold">
            iGarden
          </span>{" "}
          في عسفان، شمال جدة
        </p>
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
          <div
            className="aspect-[4/3] rounded-card overflow-hidden bg-brand-500/30 flex items-center justify-center"
            style={{
              backgroundImage: "url(/images/osfan/plant-closeup.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            role="img"
            aria-label="نباتات نامية في محطة عسفان"
          >
            {/* [CONTENT_NEEDED: /images/osfan/plant-closeup.jpg — صورة قريبة لنبتة في النظام] */}
            <Sprout className="w-16 h-16 text-white/20" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Section 3: Gallery ──────────────────────────────────── */
const GALLERY_IMAGES = [
  { src: "/images/osfan/gallery-1.jpg", alt: "منظر عام لمحطة عسفان" },
  { src: "/images/osfan/gallery-2.jpg", alt: "البنية التحتية والمساحة المغطّاة" },
  { src: "/images/osfan/gallery-3.jpg", alt: "مدخل المحطة وترتيبها الخارجي" },
  { src: "/images/osfan/gallery-4.jpg", alt: "نظام NFT يعمل في المحطة" },
  { src: "/images/osfan/gallery-5.jpg", alt: "نظام DWC — خزانات الزراعة المائية" },
  { src: "/images/osfan/gallery-6.jpg", alt: "iGarden Tower في وضع التشغيل" },
  { src: "/images/osfan/gallery-7.jpg", alt: "نبتة خس في مرحلة الحصاد" },
  { src: "/images/osfan/gallery-8.jpg", alt: "جذور نظام Aeroponics — لقطة قريبة" },
  { src: "/images/osfan/gallery-9.jpg", alt: "ورشة «ازرع بذكاء» — المشاركون يتعرّفون على الأنظمة" },
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
          {/* [CONTENT_NEEDED: 9-12 صورة منظَّمة من عسفان — انظر Brief §7.1 القسم 3 للتصنيفات المطلوبة] */}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {GALLERY_IMAGES.map((img) => (
            <div
              key={img.src}
              className="relative aspect-square rounded-card overflow-hidden bg-brand-500/20"
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
    learned: "[CONTENT_NEEDED: ما تعلّمناه]",
    changed: "[CONTENT_NEEDED: كيف غيّر منتجاتنا]",
  },
  {
    Icon: Microscope,
    name: "DWC — Deep Water Culture",
    learned: "[CONTENT_NEEDED: ما تعلّمناه]",
    changed: "[CONTENT_NEEDED: كيف غيّر منتجاتنا]",
  },
  {
    Icon: Microscope,
    name: "iGarden Tower — النموذج الأوّل",
    learned: "[CONTENT_NEEDED: ما تعلّمناه من النموذج الأوّل]",
    changed: "[CONTENT_NEEDED: ما تغيّر في النموذج الحالي]",
  },
  {
    Icon: Microscope,
    name: "Smart Controller v0.1",
    learned: "[CONTENT_NEEDED: ما تعلّمناه من الإصدار الأوّل]",
    changed: "[CONTENT_NEEDED: ما تغيّر في الإصدار الحالي]",
  },
  {
    Icon: Microscope,
    name: "نظام Foggers للتبريد",
    learned: "[CONTENT_NEEDED: ما تعلّمناه]",
    changed: "[CONTENT_NEEDED: كيف غيّر تصميم المحميات]",
  },
  {
    Icon: Microscope,
    name: "Drip Hydroponics",
    learned: "[CONTENT_NEEDED: ما تعلّمناه]",
    changed: "[CONTENT_NEEDED: كيف غيّر منتجاتنا]",
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
          <div
            className="aspect-[4/3] rounded-card overflow-hidden bg-brand-600/20 flex items-center justify-center"
            style={{
              backgroundImage: "url(/images/osfan/workshop-panorama.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            role="img"
            aria-label="ورشة «ازرع بذكاء» في محطة عسفان"
          >
            {/* [CONTENT_NEEDED: /images/osfan/workshop-panorama.jpg — صورة بانورامية من إحدى الورش] */}
            <Users className="w-16 h-16 text-white/20" aria-hidden />
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

            <CTAButton href="/contact?interest=workshop" variant="lime">
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
            بعد سنبلة
          </p>
          <h2 className="h2 text-cream">ما يأتي بعد ذلك في عسفان</h2>
          <p className="body-base text-cream/70 max-w-xl mx-auto mt-3">
            بدعم من حاضنة سنبلة (عند الفوز بها)، نخطّط لتوسعة المحطّة
            لتشمل:
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
  { name: "محطّة عسفان", url: "/osfan-station" },
];

export default function OsfanStationPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={BREADCRUMB} />
      <Hero />
      <WhyOsfan />
      <Gallery />
      {/* HIDDEN IN WAVE 1 — TestedSystems content needed from م. أيمن (Wave 2) */}
      {/* <TestedSystems /> */}
      <WorkshopsSection />
      <ExpansionPlans />
      <BookVisit />
    </>
  );
}
