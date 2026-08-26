import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ProductSchema, FAQSchema, BreadcrumbSchema } from "@/components/shared/SchemaJsonLd";
import { CTAButton } from "@/components/shared/CTAButton";
import { RelatedPaths, type RelatedLink } from "@/components/shared/RelatedPaths";
import { StageHonesty } from "@/components/shared/StageHonesty";
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
  Users,
  AlertTriangle,
  BarChart3,
  MonitorSmartphone,
  Bell,
} from "lucide-react";

export const metadata: Metadata = {
  title: "أنظمة الزراعة المائية في السعودية — اختر التقنية المناسبة",
  description:
    "كيف تختار بين NFT وDWC وAeroponics والأبراج الرأسية؟ نحدّد التقنية المناسبة لمحصولك وموقعك، ونصمّم النظام ونجهّزه ونربطه بالتشغيل. يشمل iGarden Tower المُسجَّل صناعياً (SAIP #423450193).",
  alternates: { canonical: "https://igarden.sa/products/hydroponics" },
  openGraph: {
    title: "أنظمة الزراعة المائية — أيّ تقنية تناسب محصولك؟",
    description:
      "NFT · DWC · Aeroponics · الأبراج الرأسية — نختار التقنية بعد تقييم المحصول والموقع، ويشمل النطاق iGarden Tower المُسجَّل.",
    images: [
      {
        url: "/api/og?title=Hydroponic+Systems+%E2%80%94+iGarden&sub=%D9%86%D8%AE%D8%AA%D8%A7%D8%B1+%D8%A7%D9%84%D8%AA%D9%82%D9%86%D9%8A%D8%A9+%D8%A7%D9%84%D9%85%D9%86%D8%A7%D8%B3%D8%A8%D8%A9+%D9%85%D9%86+7+%D8%AA%D9%82%D9%86%D9%8A%D8%A7%D8%AA",
        width: 1200,
        height: 630,
        alt: "Hydroponic Systems — iGarden",
      },
    ],
    type: "website",
    locale: "ar_SA",
  },
  twitter: {
    card: "summary_large_image",
    title: "أنظمة الزراعة المائية — أيّ تقنية تناسب محصولك؟",
    description: "نختار التقنية المناسبة من 7 تقنيات — لا نبيع تقنية واحدة للجميع.",
    images: ["/api/og?title=Hydroponic+Systems+%E2%80%94+iGarden&sub=%D9%86%D8%AE%D8%AA%D8%A7%D8%B1+%D8%A7%D9%84%D8%AA%D9%82%D9%86%D9%8A%D8%A9+%D8%A7%D9%84%D9%85%D9%86%D8%A7%D8%B3%D8%A8%D8%A9+%D9%85%D9%86+7+%D8%AA%D9%82%D9%86%D9%8A%D8%A7%D8%AA"],
  },
};

/* ─── Section 1: Hero ─────────────────────────────────────── */
function Hero() {
  return (
    <section className="section-light py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lime text-lg font-bold uppercase tracking-widest mb-3">
              الزراعة المائية · 7 تقنيات
            </p>
            <h1 className="h1 text-deep-green mb-5">
              نظام زراعة مائية يناسب محصولك —
              <span className="block">لا تقنية واحدة للجميع.</span>
            </h1>
            <p className="body-base text-medium-gray mb-4 max-w-lg">
              ٧ تقنيات زراعة مائية مُختَبَرة في عسفان — NFT · DWC · Drip ·
              Aeroponics · Tower وغيرها. نَختار النظام الأنسب لمحصولك ومساحتك
              وميزانيتك، لا الأشهر تسويقياً.
            </p>
            <p className="body-sm text-medium-gray mb-8 max-w-lg">
              كفاءة مائية عالية ورفع الإنتاجية لكل متر مربع بحسب التقنية والمحصول. يَشمل{" "}
              <span className="font-medium text-deep-green">iGarden Tower</span>{" "}
              المُسجَّل صناعياً (SAIP #423450193).
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <CTAButton href="/contact?interest=hydroponics&cta=request_quote" variant="lime">
                أيّ تقنية تُناسب محصولك؟
              </CTAButton>
              <CTAButton href="/osfan-station" variant="outline-green">
                شاهدها تَعمل في عسفان
              </CTAButton>
            </div>
          </div>

          {/* محمية منزلية مُشغَّلة — أصل قُصَّ إلى 4:3 و`object-cover`، بلا شرائط جانبية.
              ⛔ منشأة منزلية: لا تُقدَّم كمشروع تجاري ولا كمشروع عميل.
              ⛔ ولا يُذكر اسم المالك أو الموقع. */}
          <figure className="m-0">
            <div className="relative aspect-[4/3] rounded-card overflow-hidden bg-corp-green">
              <Image
                src="/images/projects/home-greenhouse/home-greenhouse-hydroponic-rows.webp"
                alt="صفوف زراعة مائية مُثمرة داخل محمية منزلية مع برج زراعة رأسية"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                style={{ objectPosition: "50% 45%" }}
              />
            </div>
            <figcaption className="body-sm text-medium-gray mt-3 text-center">
              محمية منزلية بأنظمة زراعة مائية — تشغيل فعلي.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

/* ─── Section 1.5: لمن هذا الحل؟ ─────────────────────────── */
const FOR_WHOM = [
  {
    title: "مزارعون حضريون وأصحاب مساحات محدودة",
    desc: "تريد إنتاج أعلى في مساحة أقل — الزراعة المائية ترفع الإنتاجية لكل متر مربع بحسب التقنية والمحصول.",
  },
  {
    title: "مستثمرون في الإنتاج الغذائي كثيف الكثافة",
    desc: "تبحث عن نموذج عائد واضح من الزراعة — نعرض 7 تقنيات ونُرشّح منها الأنسب لمحصولك وميزانيتك.",
  },
  {
    title: "مزارعون في مناطق شحيحة المياه",
    desc: "الزراعة التقليدية تستهلك مياهاً هائلة — أنظمتنا المائية تستهدف تقليصاً جوهرياً في الاستهلاك عبر إعادة تدوير المياه.",
  },
  {
    title: "مشغّلو هيدروبونيك يريدون الأتمتة",
    desc: "لديك نظام زراعة مائية قائم لكن المراقبة يدوية — نُضيف Smart Controllers والمتابعة التلقائية.",
  },
];

function ForWhomSection() {
  return (
    <section className="bg-white py-16" dir="rtl">
      <div className="container mx-auto px-4 max-w-7xl">
        <p className="text-lime text-sm font-bold uppercase tracking-widest mb-3">لمن هذا الحل؟</p>
        <h2 className="h2 text-deep-green mb-8">
          نختار التقنية المناسبة من 7 تقنيات — لا نبيع تقنية واحدة للجميع
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

/* ─── Section 2: Values ───────────────────────────────────── */
const VALUES = [
  {
    Icon: Droplets,
    title: "كفاءة مائية عالية",
    text: "أنظمة مغلقة تُعيد تدوير المياه باستمرار — تقليص جوهري في الاستهلاك مقارنةً بالزراعة التقليدية المفتوحة.",
  },
  {
    Icon: TrendingUp,
    title: "زيادة إنتاجية ملموسة",
    text: "زراعة عمودية + دورة نمو أقصر = إنتاج أعلى لكل متر مربع في نفس المساحة.",
  },
  {
    Icon: Leaf,
    title: "بلا تربة، مع إدارة أدق للمياه والمغذّيات",
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
    desc: "أعمدة عمودية ترفع الإنتاجية لكل م² بحسب التقنية والمحصول — أساس iGarden Tower.",
  },
];

function TechniquesSection() {
  return (
    <section className="section-light py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-lime text-lg font-bold uppercase tracking-widest mb-2">
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
              <p className="font-latin font-bold text-deep-green text-lg mb-0.5">
                {name}
              </p>
              <p className="text-medium-gray text-lg mb-2">{fullName}</p>
              <p className="body-sm text-medium-gray text-lg leading-relaxed flex-1">
                {desc}
              </p>
            </div>
          ))}

          {/* 8th cell — anchor to Tower section */}
          <div className="bg-lime/10 border-2 border-lime rounded-card p-5 flex flex-col items-center justify-center text-center">
            <Award className="w-8 h-8 text-lime mb-2" aria-hidden />
            <p className="font-bold text-deep-green text-lg mb-1">iGarden Tower</p>
            <p className="text-lg text-medium-gray">
              منتجنا المُسجَّل — اكتشفه أدناه ↓
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Section 3.5: Pick by Crop ──────────────────────────── */
const CROP_GUIDE = [
  {
    crops: "ورقيات سريعة",
    examples: "خس · جرجير · بقدونس · ريحان",
    techniques: ["NFT", "DWC"],
    why: "دورة قصيرة (٢٨-٤٢ يوم)، جذور صغيرة، استهلاك مياه منخفض، مَرونة في الحجم.",
    color: "from-lime/10 to-lime/5",
  },
  {
    crops: "ثماريات",
    examples: "طماطم · فلفل · خيار · فراولة",
    techniques: ["Drip", "Dutch Buckets"],
    why: "نباتات تَحتاج جذوراً قويّة وتَهوية للأوساط الصلبة. التَنقيط يَضمن تَغذية مستقرّة.",
    color: "from-amber-100/40 to-amber-50/30",
  },
  {
    crops: "زراعة عمودية / ضيقة المساحة",
    examples: "خس عمودي · أعشاب · فراولة معلّقة",
    techniques: ["iGarden Tower", "Aeroponics"],
    why: "إنتاج أعلى لكلّ متر مربّع، وتقليص جوهري في استهلاك المياه يُقاس فردياً. مناسبة للمساحات المغطّاة الصغيرة.",
    color: "from-lime/15 to-lime/5",
    flagship: true,
  },
  {
    crops: "أعلاف خضراء طازجة",
    examples: "شعير مُستنبَت · أعلاف للماشية والدواجن",
    techniques: ["Hydroponic Fodder"],
    why: "إنتاج يومي مُتجدّد بتقليص جوهري في استهلاك المياه مقارنةً بالأعلاف التقليدية.",
    color: "from-amber-100/40 to-amber-50/30",
  },
];

function CropGuideSection() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-lime text-lg font-bold uppercase tracking-widest mb-2">
            دليل الاختيار
          </p>
          <h2 className="h2 text-deep-green">أيّ تقنية لأيّ محصول؟</h2>
          <p className="body-base text-medium-gray max-w-2xl mx-auto mt-3">
            الاختيار يَعتمد على نوع المحصول، حجم المشروع، والميزانية. هذا
            الدليل يُساعدك تَبدأ — ثم نَضبط التَفاصيل في الاستشارة.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {CROP_GUIDE.map((g) => (
            <article
              key={g.crops}
              className={`rounded-card p-6 shadow-soft border ${
                g.flagship ? "border-lime/40" : "border-light-gray"
              } bg-gradient-to-br ${g.color} flex flex-col`}
            >
              <div className="flex items-center justify-between gap-3 mb-3">
                <h3 className="h4 text-deep-green">{g.crops}</h3>
                {g.flagship && (
                  <span className="bg-lime text-white text-xs font-bold px-2.5 py-0.5 rounded-pill">
                    iGarden Tower
                  </span>
                )}
              </div>

              <p className="body-sm text-medium-gray mb-4">
                <span className="font-medium text-deep-green">أمثلة:</span>{" "}
                {g.examples}
              </p>

              <div className="mb-4">
                <p className="text-xs font-bold uppercase tracking-widest text-lime mb-2">
                  التقنية الموصى بها
                </p>
                <div className="flex flex-wrap gap-2">
                  {g.techniques.map((t) => (
                    <span
                      key={t}
                      className="bg-deep-green text-cream text-sm font-medium px-3 py-1 rounded-pill font-latin"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <p className="body-sm text-medium-gray border-t border-light-gray pt-3 mt-auto">
                <span className="font-medium text-deep-green">لماذا:</span>{" "}
                {g.why}
              </p>
            </article>
          ))}
        </div>

        <p className="text-center text-medium-gray text-sm mt-8 max-w-2xl mx-auto">
          محصول مختلف؟{" "}
          <a
            href="/contact?interest=hydroponics&cta=book_consultation"
            className="text-lime hover:text-deep-green font-medium"
          >
            اسأل عن النظام الأنسب لمشروعك ←
          </a>
        </p>
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
          <span className="bg-lime text-white text-lg font-bold px-4 py-1.5 rounded-pill flex items-center gap-2">
            <Award className="w-4 h-4" aria-hidden />
            نموذج صناعي مُسجَّل · SAIP
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Tower image — left in LTR layout (visual right in RTL) */}
          <div className="order-2 lg:order-1">
            {/* Product Card مربّعة بخلفية محايدة مصمَّمة — الأصل مربّع 1:1 فيملأ
                الإطار تماماً بلا شرائط جانبية. تفصيل المنفذ inset صغير داخل
                البطاقة نفسها، ⛔ لا لقطة Detail ضخمة مستقلة تحتها. */}
            <figure className="m-0">
              <div className="relative aspect-square rounded-card overflow-hidden bg-[#F6F5F0] ring-1 ring-black/5 shadow-lg">
                <Image
                  src="/images/products/hydroponics/igarden-tower-product.webp"
                  alt="iGarden Tower — برج الزراعة الرأسية"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                {/* SAIP badge on image — مقاس مضغوط على الجوال لتقليل التداخل
                    مع قاعدة البرج، ويعود لحجمه الكامل من md فأعلى. */}
                <div className="absolute bottom-3 start-3 md:bottom-4 md:start-4 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1.5 md:px-3 md:py-2 shadow">
                  <p className="text-deep-green font-bold text-xs md:text-lg leading-tight">
                    نموذج صناعي مُسجَّل
                  </p>
                  <p
                    dir="ltr"
                    className="ltr-inline font-latin text-lime font-bold text-xs md:text-lg leading-tight"
                  >
                    SAIP #423450193
                  </p>
                </div>
                {/* تفصيل منفذ الزراعة — inset صغير داخل البطاقة */}
                <div className="absolute bottom-4 end-4 w-[22%] max-w-[120px] aspect-square rounded-lg overflow-hidden bg-white ring-1 ring-black/10 shadow">
                  <Image
                    src="/images/products/hydroponics/igarden-tower-port-detail.webp"
                    alt="تفصيل منفذ الزراعة والكوب الشبكي في iGarden Tower"
                    fill
                    sizes="120px"
                    className="object-cover"
                  />
                </div>
              </div>
              <figcaption className="body-sm text-medium-gray mt-3 text-center">
                iGarden Tower — صورة المنتج · والإطار الصغير تفصيل منفذ الزراعة
                والكوب الشبكي.
              </figcaption>
            </figure>
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
                «مرّ بثلاث مراحل تطوير داخل مرفق R&D في عسفان قبل أن يصل إلى مرحلة
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
                <p className="text-deep-green text-lg font-medium">
                  SAIP — مسجَّل
                </p>
              </div>
              <div className="text-center bg-white rounded-card p-4 shadow-soft">
                <p className="stat-num !text-3xl mb-1">3</p>
                <p className="text-deep-green text-lg font-medium">
                  مراحل تطوير في عسفان
                </p>
              </div>
              <div className="text-center bg-white rounded-card p-4 shadow-soft">
                <p className="stat-num !text-3xl mb-1">رأسي</p>
                <p className="text-deep-green text-lg font-medium">
                  استغلال مساحة الزراعة عمودياً
                </p>
              </div>
            </div>

            <CTAButton href="/contact?interest=tower&cta=request_quote" variant="lime">
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
  { src: "/images/osfan-full/01_tower_visitors.webp", alt: "أبراج iGarden للزراعة الرأسية داخل مرفق R&D في عسفان" },
  { src: "/images/osfan-full/02_tower_closeup.webp", alt: "لقطة قريبة لبرج iGarden داخل مرفق R&D في عسفان" },
  { src: "/images/osfan-full/03_cabbage_diversity.webp", alt: "تنوّع محاصيل الخضار في منظومة الزراعة المائية داخل مرفق R&D في عسفان" },
];

function OsfanGallery() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-10">
          <p className="text-lime text-lg font-bold uppercase tracking-widest mb-2">
            كلّها تعمل الآن في عسفان
          </p>
          <h2 className="h2 text-deep-green">الأنظمة داخل مرفق R&amp;D في عسفان</h2>
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
            تعرّف على مرفق R&D في عسفان كاملاً
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
    cta: { label: "اطلب عرضاً", href: "/contact?interest=hydroponics-industrial&cta=request_quote" },
    external: false,
    highlight: false,
  },
  {
    tier: "متوسط",
    title: "أنظمة للمزارع المتوسطة",
    desc: "حلول مرنة 50–500 م². نُختار التقنية الأنسب لمحصولك وميزانيتك.",
    cta: { label: "اطلب عرضاً", href: "/contact?interest=hydroponics-mid&cta=request_quote" },
    external: false,
    highlight: true,
  },
  {
    tier: "منزلي",
    title: "أنظمة منزلية + iGarden Tower مصغّر",
    desc: "للفلل والشرفات والاستراحات. يشمل iGarden Tower المصغّر — حلول جاهزة عبر iGarden Home Solutions.",
    cta: { label: "استكشف الحلول المنزلية ↗", href: "https://shop.igarden.sa" },
    external: true,
    highlight: false,
  },
];

function ScalesSection() {
  return (
    <section className="section-light py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-lime text-lg font-bold uppercase tracking-widest mb-2">
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
              <span className="text-lime text-lg font-bold uppercase tracking-widest mb-3">
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
  "تصميم النظام واختيار التقنية المناسبة من 7 تقنيات معروضة",
  "توريد المعدات والهيكل وتوصيل الأنابيب والمحاليل",
  "التركيب الكامل وضبط القيم المثلى للمحصول",
  "التدريب على التشغيل اليومي والمحلول المغذّي",
  "متابعة تشغيلية مكثّفة لمدّة أسبوع بعد التسليم",
  "ربط النظام بـ Smart OS للمراقبة والتنبيهات التلقائية",
];

const SCOPE_EXCLUDES = [
  "استشارة زراعية أو تقديم خدمة مزارع متخصّص (Agronomist)",
  "شراء الأسمدة والمحاليل المغذّية الجارية",
  "الإدارة اليومية للمزرعة (تحصيل، تعبئة، تسويق)",
  "تسويق المحصول أو إيجاد مشترين",
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

/* ─── Section 6.2: Prerequisites ──────────────────────────── */
const PREREQUISITES = [
  {
    title: "مساحة مغطّاة مناسبة (20م² على الأقل)",
    desc: "مستودع، محمية، أو أيّ مساحة مغلقة يمكن التحكم في درجة حرارتها وإضاءتها.",
  },
  {
    title: "مصدر كهرباء ومياه",
    desc: "وصلة 220V وخط مياه نظيف. لا يشترط أن يكون ثلاثياً للأنظمة الصغيرة والمتوسطة.",
  },
  {
    title: "مشغّل ملتزم بالمتابعة",
    desc: "مزرعة هيدروبونيك ناجحة تحتاج مشغّلاً يراجع التنبيهات ويُعدّل المحلول أسبوعياً على الأقل.",
  },
  {
    title: "وضوح المحصول المستهدف",
    desc: "كلّما عرفنا محصولك مسبقاً، دقّ اختيار التقنية وتحسّنت نتائج الأسابيع الأولى.",
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

/* ─── Section 6.3: Client Outputs ─────────────────────────── */
const CLIENT_OUTPUTS = [
  {
    Icon: Leaf,
    title: "نظام هيدروبونيك يعمل",
    desc: "تركيب كامل ومُختَبَر — من أوّل دورة مياه إلى أوّل نبتة جاهزة.",
  },
  {
    Icon: MonitorSmartphone,
    title: "مشغّل مدرَّب ومستقلّ",
    desc: "تدريب عملي حتى يتمكّن المشغّل من تعديل المحلول وقراءة الحساسات وحلّ المشاكل الشائعة.",
  },
  {
    Icon: Bell,
    title: "مراقبة Smart OS فعّالة",
    desc: "تنبيهات عند تجاوز العتبات المحددة لـpH أو EC أو حرارة الماء — بحسب نطاق المشروع.",
  },
  {
    Icon: BarChart3,
    title: "سجل تشغيلي قابل للمراجعة",
    desc: "القراءات ودورات الريّ التي يشملها نطاق الربط تُحفظ بطابع زمني — لمراجعة الأداء ومقارنة الموسم بالموسم.",
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

/* ─── Section 6.4: علاقته بـ Smart OS ────────────────────── */
function SmartOSSection() {
  return (
    <section className="bg-white py-14" dir="rtl">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="bg-[#0F3D2E] rounded-2xl p-8 md:p-10 text-center">
          <p className="text-[#A5D63F] text-sm font-bold uppercase tracking-widest mb-3">علاقته بـ Smart OS</p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#FAFAF7] mb-4">
            مزرعتك متصلة — تُراقَب وتُدار عن بُعد
          </h2>
          <p className="text-white/70 text-lg mb-6 max-w-2xl mx-auto">
            أنظمة الهيدروبونيك تُربط بـ Smart OS ضمن نطاق المشروع — بيانات pH وEC والحرارة والريّ
            مرئية في أيّ وقت من Dashboard أو عبر تنبيهات واتساب.
          </p>
          <Link
            href="https://demo.igarden.sa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#7CB342] hover:bg-[#A5D63F] text-[#0F3D2E] rounded-lg font-semibold transition-colors"
          >
            جرّب الديمو الحيّ ↗
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
          عند تفعيل طبقة التسجيل ضمن نطاق المشروع، تُسجَّل قراءات pH وEC والحرارة
          وقرارات التشغيل بطابع زمني دقيق، ويصبح السجل قابلاً للمراجعة بصيغة قابلة للتدقيق.
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
const FAQS = [
  {
    q: "ما الفرق بين NFT و DWC وأيّهما يناسبني؟",
    a: "NFT مثالي للورقيات سريعة الدورة (20-40 يوم) بتيار مائي رفيع. DWC أبسط في التشغيل وأفضل للأصناف الأثقل. نُرشّحك للأنسب بعد تقييم محصولك والميزانية.",
  },
  {
    q: "كم تستهلك الأنظمة من الكهرباء يومياً؟",
    a: "الاستهلاك يتفاوت بحسب حجم النظام ونوع المضخات. أنظمتنا مُحسَّنة للكفاءة — نُقدّم تقدير واضح عند تصميم النظام.",
  },
  {
    q: "ما المحاصيل الأنسب للزراعة المائية في السعودية؟",
    a: "اختُبر في عسفان: الخضراوات الورقية (جرجير، سبانخ، خس)، الأعشاب، الفراولة، والطماطم الكرزية. مناسب لأي محصول قصير الجذر.",
  },
  {
    q: "هل أحتاج خبير لتشغيل النظام يومياً؟",
    a: "لا — تُفعَّل المراقبة والتنبيهات بحسب نطاق النظام والتجهيزات المتصلة. نُوفّر تدريباً كاملاً عند التسليم حتى تتمكّن من إدارة المزرعة بنفسك.",
  },
  {
    q: "كيف يختلف iGarden Tower عن الأبراج المستوردة؟",
    a: "iGarden Tower مصمَّم للحرارة والرطوبة العالية، ومُختبَر ميدانياً في مرفق R&D في عسفان. المستوردة مُصمَّمة لمناخات أوروبية وتحتاج تعديلات مكلفة. علاوةً على أنّ قطع الغيار محلية — لا انتظار لشحنات.",
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
/* مسارات ذات صلة — الوجهات خاصّة بهذه الصفحة؛ العرض مشترك في
   @/components/shared/RelatedPaths. ⛔ كلّها وجهات منشورة قائمة. */
const RELATED_LINKS: RelatedLink[] = [
  {
    label: "متى تحتاج Smart Controller؟",
    desc: "خمس علامات تدلّ أن المراقبة اليدوية لم تعد كافية.",
    href: "/learn/when-do-you-need-smart-controller",
  },
  {
    label: "لماذا تفشل الزراعة المائية في الصيف؟",
    desc: "أسباب شائعة وحلول عملية قبل بدء الموسم.",
    href: "/learn/why-hydroponic-fail-summer",
  },
  {
    label: "الزراعة المائية مقابل التقليدية",
    desc: "مقارنة موضوعية تساعدك على تحديد المسار.",
    href: "/learn/hydroponic-vs-traditional",
  },
  {
    label: "Smart Controllers",
    desc: "لوحات التحكّم التي تُدير الريّ والتسميد والمناخ.",
    href: "/products/smart-controllers",
  },
  {
    label: "منصة Smart OS",
    desc: "بيانات التشغيل والإشراف عن بُعد في لوحة واحدة.",
    href: "/products/smart-os",
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
          شاهد بعينك
        </p>
        <h2 className="h2 text-cream mb-5">
          احجز زيارة لمرفق R&D في عسفان — شاهد التقنيات السبع تعمل أمامك
        </h2>
        <p className="body-base text-cream/80 max-w-2xl mx-auto mb-10">
          زيارة ميدانية مجانية لمحطّتنا في عسفان — ترى النظام حيّاً، تسأل
          الفريق مباشرة، وتقرّر بثقة.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton href="/contact?interest=osfan-visit&cta=osfan_visit_request" variant="lime">
            احجز زيارة مجانية لعسفان
          </CTAButton>
          <CTAButton href="/contact?interest=hydroponics&cta=request_quote" variant="outline-light">
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
  { name: "الحلول", url: "/products" },
  { name: "Hydroponic Systems", url: "/products/hydroponics" },
];

// Only FAQs with real (non-placeholder) answers go into the schema
const SCHEMA_FAQS = [
  {
    question: "هل أحتاج خبير لتشغيل النظام يومياً؟",
    answer:
      "لا — تُفعَّل المراقبة والتنبيهات بحسب نطاق النظام والتجهيزات المتصلة. نُوفّر تدريباً كاملاً عند التسليم حتى تتمكّن من إدارة المزرعة بنفسك.",
  },
  {
    question: "كيف يختلف iGarden Tower عن الأبراج المستوردة؟",
    answer:
      "iGarden Tower مصمَّم للحرارة والرطوبة العالية، ومُختبَر ميدانياً في مرفق R&D في عسفان. المستوردة مُصمَّمة لمناخات أوروبية وتحتاج تعديلات مكلفة. علاوةً على أنّ قطع الغيار محلية — لا انتظار لشحنات.",
  },
];

export default function HydroponicsPage() {
  return (
    <>
      <ProductSchema
        name="Hydroponic Systems — أنظمة الزراعة المائية + iGarden Tower"
        description="7 تقنيات زراعة مائية معروضة — من NFT إلى DWC إلى Aeroponics — نُرشّح منها الأنسب لمحصولك وموقعك. يشمل iGarden Tower المُسجَّل صناعياً (SAIP #423450193)."
        image="/images/osfan-full/02_tower_closeup.webp"
        url="/products/hydroponics"
        category="Hydroponic Systems"
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
      <ValuesSection />
      <TechniquesSection />
      <CropGuideSection />
      <IGardenTowerSection />
      <OsfanGallery />
      <ScalesSection />
      <ScopeSection />
      <PrerequisitesSection />
      <ClientOutputsSection />
      <SmartOSSection />
      <OperationalLogsSection />
      <FAQ />
      <RelatedPaths links={RELATED_LINKS} />
      <FinalCTA />
    </>
  );
}
