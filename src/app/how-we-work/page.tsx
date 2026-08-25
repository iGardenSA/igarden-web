import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle2, Sprout, Wrench } from "lucide-react";
import { BreadcrumbSchema, ServiceSchema } from "@/components/shared/SchemaJsonLd";

const OG_TITLE =
  "%D9%83%D9%8A%D9%81+%D9%86%D8%B9%D9%85%D9%84+%E2%80%94+%D9%85%D8%B3%D8%A7%D8%B1%D8%A7%D9%86+%D9%84%D9%84%D8%AA%D9%86%D9%81%D9%8A%D8%B0";
const OG_SUB =
  "%D9%85%D8%B4%D8%B1%D9%88%D8%B9+%D8%AC%D8%AF%D9%8A%D8%AF+%D8%A3%D9%88+%D9%85%D9%86%D8%B4%D8%A3%D8%A9+%D9%82%D8%A7%D8%A6%D9%85%D8%A9";
const OG_TITLE_SHORT = "%D9%83%D9%8A%D9%81+%D9%86%D8%B9%D9%85%D9%84";

const DESCRIPTION =
  "مشروع جديد من التخطيط حتى التشغيل الأولي، أو منشأة قائمة من التقييم حتى الرقمنة والتوسع المرحلي. في الحالتين يبدأ العمل بفهم الموقع والهدف.";

export const metadata: Metadata = {
  title: "كيف نعمل — مساران للتنفيذ",
  description: DESCRIPTION,
  alternates: { canonical: "https://igarden.sa/how-we-work" },
  openGraph: {
    title: "كيف نعمل — مساران للتنفيذ | iGarden",
    description: DESCRIPTION,
    images: [
      { url: `/api/og?title=${OG_TITLE}&sub=${OG_SUB}`, width: 1200, height: 630 },
    ],
    type: "website",
    locale: "ar_SA",
  },
  twitter: {
    card: "summary_large_image",
    title: "كيف نعمل | iGarden",
    description:
      "مشروع جديد من التخطيط حتى التشغيل الأولي، أو منشأة قائمة بتطوير مرحلي.",
    images: [`/api/og?title=${OG_TITLE_SHORT}&sub=${OG_SUB}`],
  },
};

/* ─── المساران ─────────────────────────────────────────────
   أصول الصور مؤقّتة — تمريرة الصور النهائية بعد تثبيت الهيكل.
   للجرد: rg 'imageStatus: "temporary"'
   `verified-field-preview` = أصل ميداني حقيقي منسوب، بانتظار اعتماد الدمج. */

type Path = {
  id: string;
  Icon: typeof Sprout;
  label: string;
  title: string;
  steps: string[];
  img: {
    src: string;
    alt: string;
    imageStatus: "temporary" | "verified-field-preview";
    /* الإطار عمودي داخل موضع 4:3 → contain بدل قصّ يقطع السياق */
    fit?: "cover" | "contain";
  };
};

const PATHS: Path[] = [
  {
    id: "new-project",
    Icon: Sprout,
    label: "المسار الأول",
    title: "مشروع جديد — من دراسة الاحتياج إلى التشغيل الأولي",
    steps: [
      "فهم الفكرة والموقع والمحصول والطاقة المستهدفة.",
      "بناء التصور الأولي ونطاق أنظمة الإنتاج والمياه والطاقة.",
      "التصميم الفني والعرض التنفيذي.",
      "التجهيز والإنشاء والتركيب حسب نطاق العقد.",
      "التشغيل الأولي وتدريب الفريق.",
      "التوسع أو الإدارة والتشغيل وفق اتفاق مستقل.",
    ],
    img: {
      src: "/images/projects/al-ahsa/al-ahsa-greenhouse-layout.webp",
      alt: "تجهيز مشروع زراعي جديد في الأحساء — صفوف الإنتاج والبنية الداخلية للمحمية",
      imageStatus: "verified-field-preview",
      fit: "contain",
    },
  },
  {
    id: "existing-facility",
    Icon: Wrench,
    label: "المسار الثاني",
    title: "منشأة قائمة — نبدأ بفهم ما لديك، لا ببيع ما لدينا",
    steps: [
      "تقييم التشغيل والبنية الحالية.",
      "تحديد نقاط القياس والتحكم والأولوية.",
      "تنفيذ مرحلة مستقلة قابلة للقياس.",
      "ربط البيانات وSmart OS حسب النطاق.",
      "تدريب الفريق ومتابعة التشغيل الأولي.",
      "توسيع المنظومة بناءً على النتائج والاحتياج.",
    ],
    img: {
      src: "/smart-os/dashboard-preview.png",
      alt: "لوحة تشغيل Smart OS — قراءات وسجلّات التشغيل في مكان واحد",
      imageStatus: "temporary",
    },
  },
];

const WHAT_WE_NEED = [
  {
    title: "للمشروع الجديد",
    items: [
      "الموقع",
      "المساحة",
      "المحصول أو الهدف",
      "المياه والطاقة",
      "الميزانية والتوقيت",
    ],
  },
  {
    title: "للمنشأة القائمة",
    items: [
      "المخطط",
      "المعدات الحالية",
      "المشكلة التشغيلية",
      "البيانات المتاحة",
      "أولوية التطوير",
    ],
  },
];

const SCOPE_FACTORS = [
  "حجم الموقع",
  "جاهزية البنية",
  "نظام الإنتاج",
  "مستوى التكامل",
  "موقع المشروع",
  "المرحلة التي يبدأ منها العميل",
];

const BREADCRUMB = [
  { name: "الرئيسية", url: "/" },
  { name: "كيف نعمل", url: "/how-we-work" },
];

export default function HowWeWorkPage() {
  return (
    <>
      <BreadcrumbSchema items={BREADCRUMB} />
      <ServiceSchema
        name="تنفيذ المنظومات الزراعية — iGarden"
        description={DESCRIPTION}
        url="/how-we-work"
        serviceType="Agricultural Systems Delivery"
      />

      {/* Hero */}
      <section className="bg-[#0F3D2E] py-20 md:py-28" dir="rtl">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-[#A5D63F] text-sm font-bold uppercase tracking-widest mb-4">
            منهجية العمل
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FAFAF7] mb-6 leading-tight">
            مساران للتنفيذ — حسب نقطة بداية مشروعك.
          </h1>
          <p className="text-lg md:text-xl text-[#FAFAF7]/80 leading-relaxed max-w-3xl mx-auto">
            نؤسس مشروعك الزراعي الجديد، أو نطوّر منشأتك القائمة. في الحالتين يبدأ
            العمل بفهم الموقع والهدف، ثم تحديد نطاق واضح قابل للتنفيذ.
          </p>
        </div>
      </section>

      {/* المساران */}
      {PATHS.map((p, idx) => (
        <section
          key={p.id}
          id={p.id}
          className={idx % 2 === 0 ? "bg-[#FAFAF7] py-20" : "bg-white py-20"}
          dir="rtl"
        >
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-12 h-12 rounded-full bg-[#0F3D2E] flex items-center justify-center shrink-0">
                    <p.Icon className="w-6 h-6 text-[#A5D63F]" aria-hidden />
                  </span>
                  <p className="text-[#7CB518] text-sm font-bold uppercase tracking-widest">
                    {p.label}
                  </p>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0F3D2E] mb-6 leading-snug">
                  {p.title}
                </h2>
                <ol className="space-y-4">
                  {p.steps.map((step, i) => (
                    <li key={step} className="flex gap-3">
                      <span className="shrink-0 w-7 h-7 rounded-full bg-[#0F3D2E] text-[#A5D63F] text-sm font-bold flex items-center justify-center">
                        {i + 1}
                      </span>
                      <p className="text-[#4B5563] leading-relaxed pt-0.5">
                        {step}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>

              <div
                className={`relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg ${
                  p.img.fit === "contain" ? "bg-[#0F3D2E]" : ""
                }`}
              >
                <Image
                  src={p.img.src}
                  alt={p.img.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className={
                    p.img.fit === "contain" ? "object-contain" : "object-cover"
                  }
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ما نحتاجه */}
      <section className="bg-white py-16 border-y border-[#E5E7EB]" dir="rtl">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F3D2E] mb-8 text-center">
            ما الذي نحتاجه منك للبداية؟
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {WHAT_WE_NEED.map((g) => (
              <div key={g.title} className="bg-[#FAFAF7] rounded-2xl p-7">
                <h3 className="text-lg font-bold text-[#0F3D2E] mb-4">
                  {g.title}
                </h3>
                <ul className="space-y-2.5">
                  {g.items.map((it) => (
                    <li key={it} className="flex items-start gap-2.5">
                      <CheckCircle2
                        className="w-5 h-5 text-[#7CB518] shrink-0 mt-0.5"
                        aria-hidden
                      />
                      <span className="text-[#4B5563]">{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ما الذي يحدد نطاق المشروع ومدته؟ */}
      <section className="bg-[#FAFAF7] py-20" dir="rtl">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F3D2E] mb-8 text-center">
            ما الذي يحدد نطاق المشروع ومدته؟
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {SCOPE_FACTORS.map((f) => (
              <li
                key={f}
                className="bg-white rounded-xl px-5 py-4 border border-[#E5E7EB] text-[#0F3D2E] font-medium"
              >
                {f}
              </li>
            ))}
          </ul>
          <p className="text-center text-[#4B5563] leading-relaxed max-w-2xl mx-auto">
            تُحدَّد المدة والتكلفة ونطاق الدعم في العرض المكتوب بعد فهم المشروع.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0F3D2E] py-20" dir="rtl">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#FAFAF7] mb-5">
            ابدأ من واقع مشروعك.
          </h2>
          <p className="text-lg text-[#FAFAF7]/80 mb-8 leading-relaxed">
            أرسل لنا تفاصيل مشروعك، ونعود إليك بتقييم مبدئي ونطاق مقترح.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?interest=consultation&cta=readiness_assessment"
              className="inline-flex items-center justify-center gap-2 bg-[#A5D63F] text-[#0F3D2E] font-bold px-7 py-3.5 rounded-full hover:bg-[#7CB518] hover:text-white transition-colors"
            >
              اطلب تقييماً أولياً لمشروعك
              <ArrowLeft className="w-4 h-4" aria-hidden />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 border border-[#FAFAF7]/40 text-[#FAFAF7] font-bold px-7 py-3.5 rounded-full hover:bg-[#FAFAF7]/10 transition-colors"
            >
              استكشف الحلول
              <ArrowLeft className="w-4 h-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
