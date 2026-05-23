import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/shared/SchemaJsonLd";
import { CTAButton } from "@/components/shared/CTAButton";
import { FoundersSection } from "@/components/sections/FoundersSection";
import { AIAugmentedSection } from "@/components/sections/AIAugmentedSection";
import {
  Hammer,
  Globe2,
  Microscope,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "من نحن — شركة سعودية لأنظمة الزراعة الذكية | iGarden",
  description:
    "iGarden (انتيليجنت غاردن): شركة سعودية متخصّصة في تطوير المزارع وأنظمة التحكم الزراعي الذكي. تأسّست 2024، مُرخَّصة 2026. ازرع بذكاء.",
  alternates: { canonical: "https://igarden.sa/about" },
  openGraph: {
    title: "من نحن — iGarden",
    description:
      "شركة سعودية تبني أنظمة الزراعة الذكية للمناخ السعودي. ازرع بذكاء.",
    images: [{ url: "/api/og?title=%D9%85%D9%86+%D9%86%D8%AD%D9%86+%E2%80%94+%D8%A7%D9%84%D8%AD%D8%AF%D9%8A%D9%82%D8%A9+%D8%A7%D9%84%D8%B0%D9%83%D9%8A%D8%A9&sub=%D8%B4%D8%B1%D9%83%D8%A9+%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9+%D9%84%D8%A3%D9%86%D8%B8%D9%85%D8%A9+%D8%A7%D9%84%D8%B2%D8%B1%D8%A7%D8%B9%D8%A9+%D8%A7%D9%84%D8%B0%D9%83%D9%8A%D8%A9", width: 1200, height: 630 }],
    type: "website",
    locale: "ar_SA",
  },
  twitter: {
    card: "summary_large_image",
    title: "من نحن — iGarden | iGarden",
    description: "شركة سعودية تبني أنظمة الزراعة الذكية للمناخ السعودي. ازرع بذكاء.",
    images: ["/api/og?title=%D9%85%D9%86+%D9%86%D8%AD%D9%86"],
  },
};

/* ─── Section 1: Hero ─────────────────────────────────────── */
function Hero() {
  return (
    <section className="section-light py-20 md:py-28">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <p className="text-lime text-lg font-bold uppercase tracking-widest mb-3">
          شركة AgriTech سعودية · مُختبَرة في الميدان · ترخيص استثماري ريادي
        </p>
        <h1 className="h1 text-deep-green mb-5">
          شركة سعودية تبني أنظمة الزراعة الذكية للمناخ السعودي
        </h1>
        <p className="body-base text-medium-gray max-w-2xl mx-auto">
          انتيليجنت غاردن (iGarden) — شركة سعودية لأنظمة الزراعة الذكية.
          نُنفّذ المشاريع، نُشغّل الأنظمة، ونُطوّرها مع كل موسم — مُكيَّفة لمناخ المملكة
          ومدخلاتها المحلية.
        </p>
      </div>
    </section>
  );
}

/* ─── Section 2: Why We Started ──────────────────────────── */
function WhyWeStarted() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-8">
          <p className="text-lime text-lg font-bold uppercase tracking-widest mb-2">
            القصة
          </p>
          <h2 className="h2 text-deep-green">لماذا بدأنا؟</h2>
        </div>
        <div className="bg-cream rounded-card p-8 md:p-10 shadow-soft">
          <div className="space-y-4 body-base text-medium-gray leading-relaxed">
            <p>
              في 2023 جرّبتُ أوّل نظام Hydroponics مستورَد في حديقة المنزل بجدة.
              النشرة قالت إنّه «يَعمل في كل المناخات». في يونيو انفجرت ٣ مواسير،
              تكلّس النظام، وماتت ٢٢ نبتة من أصل ٣٠.
            </p>
            <p>
              اتّصلتُ بالموزّع. قال: «المنتج لم يُختبَر فوق ٣٥°C — هذه مشكلتك،
              لا مشكلتنا». بحثتُ في السوق المحلي: لا حلّ متوفّر. كل ما يُباع
              ترجمة لكتالوج أوروبي، أو محاكاة لنظام صيني صُمّم لشتاء بكين.
            </p>
            <p>
              هنا تَوضّحت الفكرة: لا نَستورد ونُعيد البيع — نَبني نسختنا.
              كلّ خطّ في كلّ لوحة Smart Controller مَرسوم في جدة. كلّ نظام يَمرّ
              بصيف عسفان قبل أن يَصل إلى عميل. وكلّ ما نتعلّمه من فشل النموذج،
              نُترجمه إلى إصدار أفضل.
            </p>
            <p>
              iGarden ليست مشروعاً تجارياً وحده. هي محاولة بناء صناعة محلية
              للزراعة الذكية — بأيدٍ سعودية، لمناخنا، لطعامنا.
            </p>
            <p className="pt-4 border-t border-light-gray text-deep-green font-medium">
              — علي محمد غنيمة، المؤسس
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Section 3: Identity ─────────────────────────────────── */
const REGISTRATION_BADGES = [
  { label: "السجل التجاري", value: "4030579637" },
  { label: "الرقم الموحد", value: "7041878278" },
  { label: "وزارة الاستثمار", value: "24926249716" },
  { label: "الملكية الفكرية", value: "423450193" },
  { label: "التصنيف", value: "ريادية" },
];

function IdentitySection() {
  return (
    <section id="identity" className="bg-white py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <p className="text-lime text-sm font-bold uppercase tracking-widest mb-3">
          هويتنا التشغيلية
        </p>
        <h2 className="h2 text-deep-green mb-8">شركة ريادية مُرخّصة</h2>

        <div className="space-y-4 body-base text-medium-gray leading-relaxed mb-12">
          <p>
            <span dir="ltr" className="font-latin font-bold text-deep-green">iGarden</span>{" "}
            شركة سعودية ريادية مُرخّصة، تعمل بترخيص استثمار ريادي رسمي من وزارة
            الاستثمار، وتُسجَّل ضمن منظومة ريادة الأعمال السعودية.
          </p>
          <p>
            نُركّز على تطوير حلول الزراعة المُحكَمة باستخدام تقنيات إنترنت الأشياء
            و الذكاء الاصطناعي، ونختبر منتجاتنا ميدانياً في مرفق R&D خاص بنا
            في عسفان قبل تقديمها للعملاء.
          </p>
          <p>
            نخدم القطاعَين التجاري والحكومي بحلول مُكيَّفة للبيئة السعودية، مع
            التزام صارم بمعايير الجودة والامتثال.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {REGISTRATION_BADGES.map(({ label, value }) => (
            <div
              key={label}
              className="bg-cream p-4 rounded-card border border-light-gray"
            >
              <p className="text-xs text-medium-gray/60 mb-1">{label}</p>
              <p className="font-mono font-bold text-deep-green text-sm">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section 4: Timeline ─────────────────────────────────── */
const TIMELINE = [
  {
    year: "2024",
    title: "البداية والتأسيس",
    items: [
      "تأسيس فريق العمل المؤسّس",
      "بحث وتطوير أوّلي في تقنيات الزراعة المائية",
      "تحديد المنهج «نَبني · نُوطّن · نُطوّر»",
    ],
  },
  {
    year: "2025",
    title: "النماذج والتجارب",
    items: [
      "بناء النماذج الأوّلية لـ Smart Controllers",
      "إطلاق محطّة عسفان للتجارب والتطوير",
      "تنفيذ 5 ورش «ازرع بذكاء»",
      "تغطية اختبارات وحدوية موسّعة على Smart OS",
    ],
  },
  {
    year: "2026",
    title: "الترخيص والإطلاق",
    items: [
      "الترخيص الرسمي MISA — فبراير 2026",
      "تسجيل iGarden Tower في SAIP (#423450193)",
      "إطلاق المنصّة الرقمية الكاملة",
      "استكمال طبقة Compliance OS",
    ],
  },
];

function TimelineSection() {
  return (
    <section className="section-light py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <p className="text-lime text-lg font-bold uppercase tracking-widest mb-2">
            الرحلة
          </p>
          <h2 className="h2 text-deep-green">3 سنوات من التطوير</h2>
          {/* [CONTENT_NEEDED: تأكيد التواريخ والإنجازات الدقيقة من Master Doc §1.5] */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TIMELINE.map((t) => (
            <div key={t.year} className="bg-white rounded-card p-6 shadow-soft">
              <div className="w-16 h-16 rounded-full bg-lime/10 border-2 border-lime flex items-center justify-center mb-4">
                <span className="font-latin font-bold text-deep-green text-lg">
                  {t.year}
                </span>
              </div>
              <h3 className="h4 text-deep-green mb-4">{t.title}</h3>
              <ul className="space-y-2">
                {t.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2
                      className="w-4 h-4 text-lime flex-shrink-0 mt-0.5"
                      aria-hidden
                    />
                    <span className="body-sm text-medium-gray">{item}</span>
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

/* ─── Section 4: Methodology Deep Dive ───────────────────── */
const METHODOLOGY = [
  {
    Icon: Hammer,
    verb: "نَبني",
    title: "من الحسّاس إلى الحصاد",
    body: "نُصمّم ونُنشئ مزارع وأنظمة تحكّم ذكي من الألف إلى الياء. فريقنا الميداني ينفّذ — لا يوجّه فقط.",
    example: "في صيف 2025 نفّذنا أوّل نظام DWC في عسفان. تعفّنت الجذور في 14 يوماً تحت الحرارة. أعَدنا التنفيذ بـ Heat Exchanger مُدمَج — وكلّ وحدة DWC اليوم تُسلَّم به.",
  },
  {
    Icon: Globe2,
    verb: "نُوطّن",
    title: "التقنية العالمية بمدخلات سعودية",
    body: "نأخذ التقنية العالمية ونُعيد تنفيذها بمواد ومدخلات محلية. ما يصلك صُنع لمناخك — لا لمناخ أوروبا.",
    example: "كنّا نَستورد لوحات تحكّم بأسعار مرتفعة وقطع غيار بانتظار شحنات. صَنعنا نسختنا في جدة بتكلفة أقلّ — نفس الدقّة، قطع غيار محلية، وفريق دعم في نفس المدينة.",
  },
  {
    Icon: Microscope,
    verb: "نُطوّر",
    title: "R&D داخلي مستمرّ",
    body: "نُواجه الصعوبات بالابتكار، لا بالاستسلام لحدود المنتج المستورد. كل فشل في عسفان يُترجَم إلى تحسين.",
    example: "Smart Controller v0.1 كان يَخطئ في قراءة pH تحت حرارة الصيف. v0.2 يَستخدم ADS1115 بتعويض حراري تلقائي — الدقّة الآن ±0.1 pH، مدعومة بتغطية اختبارات وحدوية موسّعة.",
  },
];

function MethodologyDeepDive() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-lime text-lg font-bold uppercase tracking-widest mb-2">
            المنهج
          </p>
          <h2 className="h2 text-deep-green">نَبني · نُوطّن · نُطوّر</h2>
          <p className="body-base text-medium-gray max-w-2xl mx-auto mt-3">
            ليس شعاراً — هو الوصف الحرفي لما نفعله كل يوم.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {METHODOLOGY.map(({ Icon, verb, title, body, example }) => (
            <div
              key={verb}
              className="bg-cream rounded-card p-8 shadow-soft hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 rounded-full bg-lime/10 flex items-center justify-center mb-6">
                <Icon className="w-7 h-7 text-deep-green" aria-hidden />
              </div>
              <p className="text-lime font-bold text-xl mb-1">{verb}</p>
              <h3 className="h4 text-deep-green mb-3">{title}</h3>
              <p className="body-base text-medium-gray mb-4">{body}</p>
              {/* HIDDEN IN WAVE 1 — Real field examples needed from team (Wave 2) */}
              {example && (
                <div className="border-t border-light-gray pt-4">
                  <p className="text-lg text-lime font-bold uppercase tracking-wider mb-1">
                    مثال حقيقي
                  </p>
                  <p className="body-sm text-medium-gray italic">{example}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section 5: Founders ─────────────────────────────────── */
function FoundersSectionWrapper() {
  return (
    <section id="team" className="section-light py-20">
      <FoundersSection />
    </section>
  );
}

/* ─── Section 6: Osfan Link ──────────────────────────────── */
const OSFAN_IMAGES = [
  { src: "/images/osfan/preview-1.jpg", alt: "نظام زراعة مائية في عسفان" },
  { src: "/images/osfan/preview-2.jpg", alt: "ورشة «ازرع بذكاء» في عسفان" },
  { src: "/images/osfan/preview-3.jpg", alt: "نباتات الخس في المحطة" },
];

function OsfanLinkSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="grid grid-cols-3 gap-3">
            {OSFAN_IMAGES.map((img) => (
              <div
                key={img.src}
                className="aspect-square rounded-card overflow-hidden bg-brand-500/20"
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
          <div>
            <p className="text-lime text-lg font-bold uppercase tracking-widest mb-3">
              مختبرنا الميداني
            </p>
            <h2 className="h2 text-deep-green mb-4">
              كل نظام اختُبر في عسفان قبل أن يصل إليك
            </h2>
            <p className="body-base text-medium-gray mb-6">
              محطّتنا في عسفان ليست واجهة تسويقية — هي مختبر ميداني نُجرّب فيه
              كل نظام في ظروف المناخ السعودي الحقيقية قبل تسليمه لأيّ عميل.
            </p>
            <CTAButton href="/osfan-station" variant="outline-green">
              استكشف محطّة عسفان
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Section 7: Values ───────────────────────────────────── */
const VALUES = [
  {
    title: "محلي بحق",
    desc: "نُصمّم بمدخلات سعودية، لمناخ سعودي، بفريق سعودي. التوطين ليس شعاراً — هو قيد تصميمي.",
  },
  {
    title: "الأرقام لا الكلام",
    desc: "كل ادّعاء نُطلقه مَبني على قياس ميداني في عسفان. إذا لم نَقسه، لا نَذكره.",
  },
  {
    title: "نَختبر قبل أن نُسلّم",
    desc: "كل تقنية تمرّ بدورة اختبار كاملة في عسفان قبل أن تصل لعميل. لا prototype في موقعك — نُسلّم ما أثبت نفسه.",
  },
  {
    title: "شريك لا بائع",
    desc: "نَنتهي بعد التسليم بأسبوع متابعة مكثّف — ثم نَبقى متاحين. نجاحك يَبني سمعتنا.",
  },
  {
    title: "بناء يتراكم",
    desc: "كل مشروع يُضيف إلى قاعدة معرفتنا. ما نَتعلّمه اليوم يُحسّن عرضنا لك غداً.",
  },
  {
    title: "الامتثال أصيل",
    desc: "سجلات التشغيل القابلة للمراجعة ليست ميزة إضافية — هي جزء لا يتجزّأ من كل نظام نُسلّمه.",
  },
];

function ValuesSection() {
  return (
    <section className="section-light py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-lime text-sm font-bold uppercase tracking-widest mb-3">
            قيمنا
          </p>
          <h2 className="h2 text-deep-green">ما يحكم قراراتنا يومياً</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {VALUES.map(({ title, desc }) => (
            <div
              key={title}
              className="bg-white border border-[#E5E7EB] rounded-2xl p-7"
            >
              <h3 className="text-[#0F3D2E] font-bold text-xl mb-3">{title}</h3>
              <p className="text-[#6B7280] text-base leading-relaxed">{desc}</p>
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
        <h2 className="h2 text-cream mb-5">
          هل أنت جاهز للعمل مع شركة تُجرّب قبل أن تُسلّم؟
        </h2>
        <p className="body-base text-cream/80 max-w-xl mx-auto mb-10">
          تقييم مجاني أو زيارة لمحطّة عسفان — ابدأ من أيّ نقطة تريدها.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton href="/contact" variant="lime">
            احجز استشارة
          </CTAButton>
          <CTAButton href="/osfan-station" variant="outline-green">
            زُر محطّة عسفان
          </CTAButton>
        </div>
      </div>
    </section>
  );
}

/* ─── Page ────────────────────────────────────────────────── */
const BREADCRUMB = [
  { name: "الرئيسية", url: "/" },
  { name: "من نحن", url: "/about" },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema items={BREADCRUMB} />
      <Hero />
      <WhyWeStarted />
      <IdentitySection />
      <TimelineSection />
      <MethodologyDeepDive />
      <FoundersSectionWrapper />
      <AIAugmentedSection />
      <OsfanLinkSection />
      <ValuesSection />
      <FinalCTA />
    </>
  );
}
