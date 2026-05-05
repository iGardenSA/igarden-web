import type { Metadata } from "next";
import Link from "next/link";
import { GraduationCap, BookOpen, Video, Sprout, Bell } from "lucide-react";
import { CTAButton } from "@/components/shared/CTAButton";
import { BreadcrumbSchema } from "@/components/shared/SchemaJsonLd";

export const metadata: Metadata = {
  title: "أكاديمية iGarden — تعلّم الزراعة الذكية | iGarden",
  description:
    "أكاديمية iGarden قريباً — مقاطع تعليمية، أدلة عملية، وورش زراعية متخصصة مُكيَّفة للبيئة السعودية.",
  alternates: { canonical: "https://igarden.sa/learn" },
  openGraph: {
    title: "أكاديمية iGarden — قريباً",
    description:
      "محتوى تعليمي متخصص في الزراعة الذكية — بالعربية، من خبراء ميدانيين حقيقيين.",
    images: ["/images/og/learn.jpg"],
    type: "website",
    locale: "ar_SA",
  },
};

const BREADCRUMB = [
  { name: "الرئيسية", url: "/" },
  { name: "الأكاديمية", url: "/learn" },
];

const COMING_MODULES = [
  {
    Icon: BookOpen,
    title: "أدلة عملية",
    desc: "خطوة بخطوة من اختيار النظام إلى أول حصاد — مُكيَّفة لمناخ السعودية.",
  },
  {
    Icon: Video,
    title: "مقاطع الفيديو",
    desc: "تسجيلات حيّة من محطة عسفان — أنظمة تعمل فعلياً لا رسوم بيانية.",
  },
  {
    Icon: Sprout,
    title: "ورش «ازرع بذكاء»",
    desc: "ورش تطبيقية موثّقة — تأخذك من الفكرة إلى نظام شغّال في يوم واحد.",
  },
];

export default function LearnPage() {
  return (
    <>
      <BreadcrumbSchema items={BREADCRUMB} />

      {/* ─── Hero ──────────────────────────────────────────────── */}
      <section className="bg-deep-green py-24 md:py-32 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="w-20 h-20 rounded-full bg-lime/15 border-2 border-lime flex items-center justify-center mx-auto mb-8">
            <GraduationCap className="w-10 h-10 text-lime" aria-hidden />
          </div>
          <p className="text-lime text-lg font-bold uppercase tracking-widest mb-4">
            قريباً · Coming Soon
          </p>
          <h1 className="text-cream text-4xl md:text-5xl font-bold leading-tight mb-5">
            أكاديمية{" "}
            <span dir="ltr" className="ltr-inline font-latin">
              iGarden
            </span>
          </h1>
          <p className="text-cream/75 text-lg md:text-xl leading-relaxed max-w-xl mx-auto mb-10">
            محتوى تعليمي متخصّص في الزراعة الذكية — بالعربية، من خبراء ميدانيين
            حقيقيين، مُختبَر في عسفان.
          </p>
          <CTAButton href="/contact?interest=academy" variant="lime">
            <Bell className="w-4 h-4 ml-2" aria-hidden />
            نبّهني عند الإطلاق
          </CTAButton>
        </div>
      </section>

      {/* ─── ما يأتي ──────────────────────────────────────────── */}
      <section className="section-light py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-lime text-lg font-bold uppercase tracking-widest mb-2">
              ما يأتي
            </p>
            <h2 className="h2 text-deep-green">محتوى الأكاديمية</h2>
            <p className="body-base text-medium-gray max-w-xl mx-auto mt-3">
              نبني المحتوى بنفس المنهج الذي نبني به أنظمتنا — من الميدان، لا
              من المكتب.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {COMING_MODULES.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-card p-8 shadow-soft text-center"
              >
                <div className="w-14 h-14 rounded-full bg-lime/10 flex items-center justify-center mx-auto mb-5">
                  <Icon className="w-7 h-7 text-deep-green" aria-hidden />
                </div>
                <h3 className="h4 text-deep-green mb-3">{title}</h3>
                <p className="body-base text-medium-gray">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── في انتظار الأكاديمية ─────────────────────────────── */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-cream rounded-card p-8 md:p-12 shadow-soft text-center">
            <p className="text-lime text-lg font-bold uppercase tracking-widest mb-3">
              في انتظار الأكاديمية
            </p>
            <h2 className="h3 text-deep-green mb-4">
              ابدأ بورشة «ازرع بذكاء» في محطة عسفان
            </h2>
            <p className="body-base text-medium-gray max-w-xl mx-auto mb-8">
              ورش تطبيقية حيّة — تُشاهد الأنظمة تعمل، تسأل الفريق مباشرة،
              وتنتهي بفهم عملي حقيقي.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/osfan-station" variant="outline-green">
                استكشف محطة عسفان
              </CTAButton>
              <CTAButton href="/contact" variant="lime">
                احجز استشارة مجانية
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
