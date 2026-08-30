import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ProductSchema, FAQSchema, BreadcrumbSchema } from "@/components/shared/SchemaJsonLd";
import { CTAButton } from "@/components/shared/CTAButton";
import { RelatedPaths, type RelatedLink } from "@/components/shared/RelatedPaths";
import { StageHonesty } from "@/components/shared/StageHonesty";
import {
  Building2,
  Cpu,
  Wind,
  CheckCircle2,
  ExternalLink,
  AlertTriangle,
  Zap,
  TrendingUp,
  Users,
  BarChart3,
  MonitorSmartphone,
  Bell,
} from "lucide-react";

export const metadata: Metadata = {
  title: "المحميات الزراعية الذكية في السعودية — التصميم والتحكم",
  description:
    "محميات ذكية للمزارع التجارية والحكومية: الهيكل والعزل والتحكم المناخي وأتمتة IoT تُحدَّد بحسب نطاق المشروع.",
  alternates: { canonical: "https://igarden.sa/products/smart-greenhouses" },
  openGraph: {
    title: "المحميات الزراعية الذكية — التصميم والتحكم المناخي",
    description: "كيف تُصمَّم محمية تعمل في الصيف السعودي؟ الهيكل والعزل والتحكم المناخي والأتمتة — بحسب نطاق المشروع.",
    images: [
      {
        url: "/api/og?title=Smart+Greenhouses+%E2%80%94+iGarden&sub=%D9%85%D8%AD%D9%85%D9%8A%D8%A7%D8%AA+%D8%B0%D9%83%D9%8A%D8%A9+%D9%84%D8%B8%D8%B1%D9%88%D9%81+%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9",
        width: 1200,
        height: 630,
        alt: "Smart Greenhouses — iGarden",
      },
    ],
    type: "website",
    locale: "ar_SA",
  },
  twitter: {
    card: "summary_large_image",
    title: "المحميات الزراعية الذكية — التصميم والتحكم المناخي",
    description: "كيف تُصمَّم محمية تعمل في الصيف السعودي؟ الهيكل والعزل والتحكم المناخي والأتمتة — بحسب نطاق المشروع.",
    images: ["/api/og?title=Smart+Greenhouses+%E2%80%94+iGarden&sub=%D9%85%D8%AD%D9%85%D9%8A%D8%A7%D8%AA+%D8%B0%D9%83%D9%8A%D8%A9+%D9%84%D8%B8%D8%B1%D9%88%D9%81+%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9"],
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
              المحميات الزراعية الذكية · للمزارع التجارية
            </p>
            <h1 className="h1 text-deep-green mb-5">
              محمية زراعية تُصمَّم مع تشغيلها —
              <span className="block">لا كهيكل منفصل.</span>
            </h1>
            <p className="body-base text-medium-gray mb-4 max-w-lg">
              نُصمّم المحمية حول محصولك ومناخك وهدفك الإنتاجي — بمواصفات هيكل
              تُحدَّد بحسب الموقع، وتبريد متعدّد المراحل، وريّ ذكي، وتحكّم مناخي
              نختبره ميدانياً في مرفق R&D في عسفان.
            </p>
            <p className="body-sm text-medium-gray mb-8 max-w-lg">
              كفاءة طاقة محسّنة بحسب التصميم والمحصول. توريد وتركيب وربط وتشغيل أولي بحسب الباقة. دعم
              ميداني بعد التَسليم.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <CTAButton href="/contact?interest=greenhouses&cta=request_quote" variant="lime">
                اطلب عرضاً مخصّصاً
              </CTAButton>
              <CTAButton href="/osfan-station" variant="outline-green">
                شاهد المحميات في عسفان
              </CTAButton>
            </div>
          </div>

          <div>
            {/* أصل مؤقّت منسوب — imageStatus: "temporary" · صورة من مرفق R&D
                في عسفان، ⛔ ليست مشروع عميل ولا محمية تجارية مسلَّمة. */}
            <figure>
              <div className="relative aspect-[4/3] rounded-card overflow-hidden bg-brand-500">
                <Image
                  src="/images/osfan-full/04_greenhouse_wide.webp"
                  alt="داخل محمية زراعية في مرفق R&D في عسفان"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <span className="absolute bottom-4 left-4 text-white/80 text-sm font-medium font-latin drop-shadow">
                  Field-tested · iGarden R&D Facility, Osfan
                </span>
              </div>
              <figcaption className="body-sm text-medium-gray mt-3">
                داخل إحدى المحميات في مرفق R&D في عسفان — صورة ميدانية.
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Section 1.2: لمن هذا الحل؟ ─────────────────────────── */
const FOR_WHOM = [
  {
    title: "مستثمرون يبنون مزارع تجارية جديدة",
    desc: "تريد محمية تُصمَّم من الصفر لمحصولك ومناخك — لا قوالب جاهزة بل تصميم يُراعي درجات الحرارة الفعلية في موقعك.",
  },
  {
    title: "مشغّلو مزارع كبيرة يريدون خفض التكاليف",
    desc: "فاتورة الكهرباء والعمالة ترتفع مع كل صيف — منظومة التحكم المناخي تهدف إلى ترشيد التشغيل، ويُقاس أثرها فردياً لكل مشروع.",
  },
  {
    title: "مشاريع حكومية وزراعية مُمَوَّلة",
    desc: "تحتاج منظومة موثّقة وقابلة للتدقيق، مع تقارير أداء ومتابعة ميدانية منظّمة.",
  },
  {
    title: "من يريد بيئة مناخية محكومة للمحاصيل الحساسة",
    desc: "محاصيل كالفراولة والورد والطماطم الكرزية تحتاج نطاق حرارة ورطوبة دقيق — المحمية الذكية توفّر ذلك على مدار السنة.",
  },
];

function ForWhomSection() {
  return (
    <section className="bg-white py-16" dir="rtl">
      <div className="container mx-auto px-4 max-w-7xl">
        <p className="text-lime text-sm font-bold uppercase tracking-widest mb-3">لمن هذا الحل؟</p>
        <h2 className="h2 text-deep-green mb-8">
          محميات ذكية مُصمَّمة لظروف السعودية — لمن يريد الإنتاج طوال العام
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

/* ─── Section 1.5: Pain Scenarios ────────────────────────── */
const SCENARIOS = [
  {
    Icon: Zap,
    pain: "فاتورة كهرباء قاتلة في الصيف",
    detail: "قد ترتفع فاتورة التشغيل صيفاً مع زيادة أحمال التبريد والتهوية، بما يضغط على هامش الربح.",
    solution: "تحسين كفاءة الطاقة (يُقاس فردياً)",
    benefit: "تَهوية ذكية + ظلّ آلي + Foggers تَعمل بتَنسيق — تَشغيل أقلّ، نفس درجة الحرارة الداخلية.",
  },
  {
    Icon: AlertTriangle,
    pain: "محصول يَخسر ٧ أيام من ضغطة حرارية",
    detail: "في سيناريوهات الأعطال أو تغيّر الطقس، قد ترتفع الحرارة سريعاً قبل أن تلتقطها الجولة اليدوية التالية.",
    solution: "ضبط آلي قبل الانحراف",
    benefit: "تُفتح المنافذ وتُشغَّل المراوح عند تجاوز العتبة المحددة للمشروع — قبل أن يَتأثّر المحصول.",
  },
  {
    Icon: TrendingUp,
    pain: "تَوسعة محدودة بسبب التَشغيل اليدوي",
    detail: "كلما اتسعت المساحة، زادت الحاجة إلى تنظيم التهوية والري والمراقبة وتقليل الاعتماد على الجولات اليدوية.",
    solution: "أتمتة تَوسّع ميزانيّتك",
    benefit: "تساعد منظومة Smart OS على توحيد المتابعة والتشغيل، بينما يُحدَّد حجم فريق التشغيل وفق تصميم المنشأة ونطاقها.",
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
          <h2 className="h2 text-deep-green">
            ٣ آلام يَعيشها كلّ صاحب محمية في السعودية
          </h2>
          <p className="body-base text-medium-gray max-w-2xl mx-auto mt-3">
            ليست تَهديدات نَظرية — هذه المَشاهد التي رأيناها قبل أن نَبدأ
            بناء Smart Greenhouses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SCENARIOS.map((s, i) => (
            <article
              key={i}
              className="bg-cream rounded-card overflow-hidden shadow-soft flex flex-col"
            >
              <div className="p-6 border-b-2 border-amber-200 bg-amber-50/40 flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <s.Icon className="w-4 h-4 text-amber-700" aria-hidden />
                  <p className="text-amber-800 text-xs font-bold uppercase tracking-widest">
                    قبل
                  </p>
                </div>
                <p className="font-bold text-deep-green text-base mb-2 leading-snug">
                  {s.pain}
                </p>
                <p className="body-sm text-medium-gray">{s.detail}</p>
              </div>

              <div className="p-6 bg-gradient-to-br from-lime/5 to-cream flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-4 h-4 text-lime" aria-hidden />
                  <p className="text-lime text-xs font-bold uppercase tracking-widest">
                    بعد · مع Smart Greenhouses
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
      </div>
    </section>
  );
}

/* ─── Section 2: Values ───────────────────────────────────── */
const VALUES = [
  {
    Icon: Building2,
    title: "هيكل مُصمَّم لمناخك",
    text: "تُحدَّد مواصفات الهيكل وفق موقع المشروع ومتطلبات التصميم الإنشائي. عزل حراري عالٍ. مواد مُختارة للحرارة والرطوبة العالية.",
  },
  {
    Icon: Cpu,
    title: "أتمتة IoT بحسب النطاق",
    text: "تحكم آلي بالتهوية والتبريد والريّ والإضاءة — يُحدَّد نطاقه بحسب المشروع، مع لوحة Smart Controller داخلية.",
  },
  {
    Icon: Wind,
    title: "تحكم مناخي ذكي",
    text: "مراقبة وتحكم للحرارة والرطوبة بحسب تجهيزات المشروع وإعداداته — حتى في ذروة الصيف.",
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
  "تنبيهات عند تجاوز العتبات",
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
    desc: "نزور موقع مزرعتك، نقيس المساحة، ندرس المناخ المحلي ودرجات الحرارة الفعلية، ونستمع لمتطلبات المحصول والميزانية.",
  },
  {
    num: "02",
    title: "تصميم مخصّص لمشروعك",
    desc: "نُعدّ مخطط محمية بالحجم والهيكل المناسبَين — مع اختيار أنظمة التحكم المناخي والري المناسبة لمحصولك وظروفك.",
  },
  {
    num: "03",
    title: "التصنيع والتركيب",
    desc: "الهيكل يُصنَّع بمواصفاتك، والتركيب يتولاّه فريقنا الميداني مع مراقبة جودة مُستمرّة — من الهيكل إلى الحساسات.",
  },
  {
    num: "04",
    title: "التشغيل والدعم المستمرّ",
    desc: "نُدرّب فريقك على التشغيل اليومي، ونُهيّئ Smart OS للتحكم والمراقبة، ونوفّر دعماً ميدانياً مستمراً.",
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
  { src: "/images/osfan-full/04_greenhouse_wide.webp", alt: "منظر داخلي لمحمية ذكية داخل مرفق R&D في عسفان" },
  { src: "/images/osfan-full/05_tomato_tunnel.webp", alt: "نفق الطماطم بنظام Dutch Bucket داخل مرفق R&D في عسفان" },
];

function OsfanGallery() {
  return (
    <section className="section-light py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-10">
          <p className="text-lime text-lg font-bold uppercase tracking-widest mb-2">
            اختُبرت في عسفان
          </p>
          <h2 className="h2 text-deep-green">من مرفق R&amp;D في عسفان</h2>
          <p className="body-base text-medium-gray max-w-2xl mx-auto mt-3">
            الصور من مرفق R&D في عسفان، حيث يجري تشغيل وتطوير نماذج ميدانية
            منذ 2025.
          </p>
        </div>
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
            تعرّف على مرفق R&D في عسفان كاملاً
          </CTAButton>
        </div>
      </div>
    </section>
  );
}

/* ─── Section 5.5: بطاقة تنفيذ ميداني واحدة ──────────────────
   ⛔ بطاقة واحدة فقط — لا معرض. مستقلة عن `GALLERY` الخاصة بعسفان.
   ⛔ لا تُوصف بأنها «محمية ذكية مسلَّمة» ولا «تشغيل آلي» — الصورة لا تثبت ذلك.
   ⛔ ولا يُذكر اسم العميل. docs/IMAGE-ASSET-MANIFEST.md */
function AlAhsaField() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-8">
          <h2 className="h2 text-deep-green">من تنفيذ ميداني في الأحساء</h2>
          <p className="body-base text-medium-gray mt-3">
            مشهد من تجهيز صفوف الإنتاج والبنية الداخلية لمحمية بمقياس تجاري،
            ضمن مشروع ميداني، دون إظهار اسم العميل.
          </p>
        </div>
        <figure className="m-0">
          <div className="relative aspect-[4/3] rounded-card overflow-hidden bg-corp-green">
            <Image
              src="/images/projects/al-ahsa/al-ahsa-greenhouse-layout.webp"
              alt="تجهيز صفوف الزراعة والبنية الداخلية لمحمية بمقياس تجاري في مشروع ميداني بالأحساء"
              fill
              sizes="(max-width: 768px) 100vw, 672px"
              className="object-cover"
              style={{ objectPosition: "50% 50%" }}
            />
          </div>
          {/* ⛔ حدّ الادّعاء: مرحلة تجهيز وتركيب — ليست دليل تشغيل أو إنتاج.
              يبقى هذا القيد تعليقاً برمجياً، ولا يُكتب في النصّ المرئي. */}
          <figcaption className="body-sm text-medium-gray mt-3 text-center">
            مرحلة التجهيز والتركيب.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

/* ─── Section 6: Scales ───────────────────────────────────── */
const SCALES = [
  {
    tier: "صناعي",
    title: "محميات تجارية كبرى",
    desc: "للمشاريع التجارية والحكومية. مساحات من 1,000 إلى 10,000 م² وأكثر. تصميم مخصّص وفريق تركيب متكامل.",
    cta: { label: "اطلب عرضاً", href: "/contact?interest=greenhouses-industrial&cta=request_quote" },
    external: false,
    highlight: false,
  },
  {
    tier: "متوسط",
    title: "محميات للمزارع المتوسطة",
    desc: "من 200 إلى 1,000 م². للمزارعين والمنتجين المحلّيين الراغبين في رفع الكفاءة وتقليل التكاليف.",
    cta: { label: "اطلب عرضاً", href: "/contact?interest=greenhouses-mid&cta=request_quote" },
    external: false,
    highlight: true,
  },
  {
    tier: "منزلي",
    title: "محميات منزلية صغيرة",
    desc: "للفلل والاستراحات. حلول شبه جاهزة — متاحة عبر iGarden Home Solutions.",
    cta: { label: "استكشف الحلول المنزلية", href: "/home-solutions" },
    external: false,
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

/* ─── Section 6.1: Scope (Includes / Excludes) ────────────── */
const SCOPE_INCLUDES = [
  "استشارة تصميمية أوّلية وزيارة الموقع (أو مكالمة تقنية)",
  "تصميم الهيكل والاختيار من المواد المناسبة لمناخك",
  "توريد وتركيب الهيكل الفولاذي المجلفن والتغطية",
  "تركيب أنظمة التهوية والتبريد والريّ الآلية",
  "دمج Smart Controller وضبط Smart OS للتحكم المناخي",
  "تسليم المفتاح وتدريب فريق التشغيل",
];

const SCOPE_EXCLUDES = [
  "أعمال مدنية وأساسات الموقع (يُكمل بها صاحب العمل قبل التسليم)",
  "البنية التحتية الكهربائية قبل لوحة التحكم",
  "معدات التبريد (HVAC) ما لم تُدرَج صراحةً في العقد",
  "استشارة اختيار المحصول أو الاستعانة بمزارع متخصّص",
  "شهادة امتثال من جهات حكومية — نوفّر التوثيق والسجلات، لكن الاعتماد الرسمي يبقى مسؤوليتك",
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

/* ─── Section 6.2: نطاق التنفيذ — باقتان ─────────────────── */
const PACKAGES = [
  {
    tag: "لمشروع جديد",
    title: "التأسيس المتكامل",
    items: [
      "دراسة الاحتياج والموقع",
      "التخطيط والتصميم",
      "توريد وتجهيز المحمية وأنظمة الإنتاج",
      "التركيب والربط",
      "التشغيل الأولي والتدريب",
    ],
  },
  {
    tag: "لموقع جاهز",
    title: "التجهيز والتركيب",
    items: [
      "يجهّز العميل الأرض والأساسات والكهرباء وفق مواصفات iGarden",
      "تتولّى iGarden التوريد والتركيب والربط",
      "التشغيل الأولي والتدريب حسب العقد",
    ],
  },
];

function ScopePackagesSection() {
  return (
    <section className="bg-white py-16" dir="rtl">
      <div className="container mx-auto px-4 max-w-7xl">
        <p className="text-lime text-sm font-bold uppercase tracking-widest mb-3">
          كيف نعمل معك
        </p>
        <h2 className="h2 text-deep-green mb-8">نطاق التنفيذ — باقتان</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PACKAGES.map((pkg, i) => (
            <div
              key={pkg.title}
              className="bg-[#FAFAF7] rounded-2xl p-7 border border-[#E5E7EB]"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-9 h-9 rounded-full bg-lime/10 flex items-center justify-center flex-shrink-0">
                  <span className="font-latin font-bold text-deep-green text-sm">
                    {String.fromCharCode(1571 + i)}
                  </span>
                </span>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-deep-green/10 text-deep-green">
                  {pkg.tag}
                </span>
              </div>

              <h3 className="font-bold text-deep-green text-lg mb-4">{pkg.title}</h3>

              <ul className="space-y-2.5">
                {pkg.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-[#6B7280] body-sm leading-relaxed"
                  >
                    <CheckCircle2
                      className="w-4 h-4 text-lime mt-0.5 flex-shrink-0"
                      aria-hidden
                    />
                    <span>{item}</span>
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

/* ─── Section 6.3: Client Outputs ─────────────────────────── */
const CLIENT_OUTPUTS = [
  {
    Icon: Building2,
    title: "محمية جاهزة للإنتاج",
    desc: "من التوريد والتركيب إلى الربط والتشغيل الأولي — بحسب الباقة المتّفق عليها.",
  },
  {
    Icon: MonitorSmartphone,
    title: "تحكم مناخي آلي",
    desc: "Smart OS يضبط الحرارة والرطوبة ضمن النطاقات المحددة للمحصول وفق البرامج المضبوطة — من أيّ جهاز.",
  },
  {
    Icon: Bell,
    title: "تنبيهات الانحراف — بحسب نطاق المشروع",
    desc: "إشعار عند تجاوز العتبة المحددة للحرارة أو الرطوبة أو ضغط الريّ — قبل أن يتأثّر المحصول.",
  },
  {
    Icon: BarChart3,
    title: "سجل تشغيلي — يُفعَّل بحسب النطاق",
    desc: "القراءات والقرارات الآلية التي يشملها نطاق الربط تُحفظ بطابع زمني — لمراجعة الأداء وتحسين الموسم القادم.",
  },
];

function ClientOutputsSection() {
  return (
    <section className="section-light py-16" dir="rtl">
      <div className="container mx-auto px-4 max-w-7xl">
        <p className="text-lime text-sm font-bold uppercase tracking-widest mb-3">مخرجات العميل</p>
        <h2 className="h2 text-deep-green mb-8">ماذا ستحصل بعد التسليم؟</h2>
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

/* ─── Section 6.4: علاقته بـ Smart OS ────────────────────── */
function SmartOSSection() {
  return (
    <section className="bg-white py-14" dir="rtl">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="bg-[#0F3D2E] rounded-2xl p-8 md:p-10 text-center">
          <p className="text-[#A5D63F] text-sm font-bold uppercase tracking-widest mb-3">علاقته بـ Smart OS</p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#FAFAF7] mb-4">
            محميتك متصلة — تُراقَب وتُدار عن بُعد
          </h2>
          <p className="text-white/70 text-lg mb-6 max-w-2xl mx-auto">
            المحميات تُربط بـ Smart OS ضمن نطاق المشروع — بيانات الحرارة والرطوبة والتهوية مرئية
            في Dashboard أو عبر تنبيهات واتساب.
          </p>
          <Link
            href="/contact?interest=demo&cta=demo_access_request"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#7CB342] hover:bg-[#A5D63F] text-[#0F3D2E] rounded-lg font-semibold transition-colors"
          >
            اطلب وصولاً إلى الديمو
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Section 6.5: Operational Logs ──────────────────────── */
function OperationalLogsSection() {
  return (
    <section className="bg-[#0F3D2E] py-14" dir="rtl">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <p className="text-[#A5D63F] text-sm font-bold uppercase tracking-widest mb-3">سجلات التشغيل القابلة للمراجعة</p>
        <h2 className="text-2xl md:text-3xl font-bold text-[#FAFAF7] mb-4">
          سجل يشمل ما يغطّيه نطاق الربط.
        </h2>
        <p className="text-white/70 text-lg mb-6 max-w-2xl mx-auto">
          عند تفعيل طبقة التسجيل ضمن نطاق المشروع، تُسجَّل قراءات الحرارة وقرارات
          التهوية ودورات الريّ بطابع زمني دقيق.
          السجل قابل للمراجعة في أيّ وقت بصيغة قابلة للتدقيق.
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

/* ─── Section 7: FAQ ──────────────────────────────────────── */
/*
  [CONTENT_NEEDED: إجابات الأسئلة الخمسة — يراجعها م. أيمن]
*/
const FAQS = [
  {
    q: "ما حجم المحمية المُناسب لمشروعي؟",
    a: "الحجم يعتمد على المحصول المستهدف والمساحة المتاحة والميزانية. نُحدّد ذلك معك في استشارة مجانية — تواصل معنا.",
  },
  {
    q: "هل تستوردون المواد أم تُصنَّع محلياً؟",
    a: "نُوطّن ما أمكن — الهياكل الفولاذية والتغطيات تُصنَّع بمواصفاتنا داخل المملكة. بعض مكوّنات الأتمتة مستوردة وتُدمَج محلياً.",
  },
  {
    q: "ما مدّة التركيب الكامل؟",
    a: "تُقدَّر مدة التركيب بعد تحديد نطاق المشروع والموقع والتجهيزات المطلوبة.",
  },
  {
    q: "ما تكلفة التشغيل الشهرية؟",
    a: "الطاقة والمياه تُقدَّر حسب حجم المحمية والمحصول. Smart Controllers يساعد على ترشيد التشغيل بحسب التجهيزات والإعدادات، ويُقدَّر الأثر عند التصميم.",
  },
  {
    q: "هل تقدّمون عقود صيانة سنوية؟",
    a: "يمكن توفير خطة صيانة دورية بحسب نطاق المشروع، وتُحدَّد بنودها في العقد.",
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
/* مسارات ذات صلة — الوجهات خاصّة بهذه الصفحة؛ العرض مشترك في
   @/components/shared/RelatedPaths. ⛔ كلّها وجهات منشورة قائمة. */
const RELATED_LINKS: RelatedLink[] = [
  {
    label: "قياسات المزرعة الذكية",
    desc: "المؤشرات اليومية التي تستحقّ المتابعة داخل المحمية.",
    href: "/learn/daily-measurements-smart-farm",
  },
  {
    label: "سجلات التشغيل وقرارات المزرعة",
    desc: "كيف يُحسّن السجل الموثّق قراراتك بين المواسم.",
    href: "/learn/operational-logs-farm-decisions",
  },
  {
    label: "Smart Controllers",
    desc: "لوحات التحكّم في التهوية والتبريد والريّ.",
    href: "/products/smart-controllers",
  },
  {
    label: "منصة Smart OS",
    desc: "بيانات المحمية والإشراف عن بُعد في لوحة واحدة.",
    href: "/products/smart-os",
  },
  {
    label: "السجلات وجاهزية الامتثال",
    desc: "ما الذي يمكن تسجيله ضمن نطاق الربط.",
    href: "/compliance",
  },
  {
    label: "كيف نعمل",
    desc: "مشروع جديد أو منشأة قائمة — مساران واضحان.",
    href: "/how-we-work",
  },
];

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
          <CTAButton href="/contact?interest=greenhouses&cta=request_quote" variant="lime">
            اطلب عرضاً مخصّصاً
          </CTAButton>
          <CTAButton href="/osfan-station" variant="outline-light">
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
  { name: "الحلول", url: "/products" },
  { name: "Smart Greenhouses", url: "/products/smart-greenhouses" },
];

const SCHEMA_FAQS = [
  {
    question: "هل تستوردون المواد أم تُصنَّع محلياً؟",
    answer:
      "نُوطّن ما أمكن — الهياكل الفولاذية والتغطيات تُصنَّع بمواصفاتنا داخل المملكة. بعض مكوّنات الأتمتة مستوردة وتُدمَج محلياً.",
  },
  {
    question: "هل تقدّمون عقود صيانة سنوية؟",
    answer:
      "يمكن توفير خطة صيانة دورية بحسب نطاق المشروع، وتُحدَّد بنودها في العقد.",
  },
  {
    question: "ما مدّة التركيب الكامل؟",
    answer:
      "تُقدَّر مدة التركيب بعد تحديد نطاق المشروع والموقع والتجهيزات المطلوبة.",
  },
];

export default function SmartGreenhousesPage() {
  return (
    <>
      <ProductSchema
        name="Smart Greenhouses — المحميات الذكية"
        description="محميات ذكية للمزارع التجارية والحكومية: الهيكل والعزل والتحكم المناخي وأتمتة IoT تُحدَّد بحسب نطاق المشروع."
        image="/images/osfan-full/04_greenhouse_wide.webp"
        url="/products/smart-greenhouses"
        category="Smart Agricultural Greenhouses"
      />
      <FAQSchema faqs={SCHEMA_FAQS} />
      <BreadcrumbSchema items={BREADCRUMB} />
      <Hero />
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
      <OsfanGallery />
      <AlAhsaField />
      <ScalesSection />
      <ScopeSection />
      <ScopePackagesSection />
      <ClientOutputsSection />
      <SmartOSSection />
      <OperationalLogsSection />
      <FAQ />
      <RelatedPaths links={RELATED_LINKS} />
      <FinalCTA />
    </>
  );
}
