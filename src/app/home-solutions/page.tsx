import type { Metadata } from "next";
import Link from "next/link";
import { Smartphone, ShoppingBag, ArrowLeft } from "lucide-react";
import { CTAButton } from "@/components/shared/CTAButton";

export const metadata: Metadata = {
  title: "للأفراد — الحديقة الذكية في منزلك",
  description:
    "iGarden تقدّم للأفراد المهتمّين بالزراعة المنزلية منصّتين: تطبيق الحديقة الذكية للإرشاد والتعلّم، و iGarden Home Solutions لشراء الأنظمة والمستلزمات الجاهزة للمنزل.",
  alternates: { canonical: "https://igarden.sa/home-solutions" },
  openGraph: {
    title: "للأفراد — الحديقة الذكية في منزلك",
    description:
      "منصّتان للأفراد المهتمّين بالزراعة المنزلية: تطبيق الحديقة الذكية للإرشاد والتعلّم، و iGarden Home Solutions للأنظمة والمستلزمات الجاهزة للمنزل.",
    url: "https://igarden.sa/home-solutions",
    siteName: "iGarden",
    images: [
      {
        url: "/api/og?title=%D9%84%D9%84%D8%A3%D9%81%D8%B1%D8%A7%D8%AF&sub=%D8%A7%D9%84%D8%AD%D8%AF%D9%8A%D9%82%D8%A9+%D8%A7%D9%84%D8%B0%D9%83%D9%8A%D8%A9+%D9%81%D9%8A+%D9%85%D9%86%D8%B2%D9%84%D9%83",
        width: 1200,
        height: 630,
        alt: "حلول الأفراد والمنازل",
      },
    ],
    type: "website",
    locale: "ar_SA",
  },
  twitter: {
    card: "summary_large_image",
    title: "للأفراد — الحديقة الذكية في منزلك",
    description: "منصّتان للزراعة المنزلية: تطبيق للإرشاد، ومتجر للأنظمة الجاهزة.",
    images: ["/api/og?title=%D9%84%D9%84%D8%A3%D9%81%D8%B1%D8%A7%D8%AF&sub=%D8%A7%D9%84%D8%AD%D8%AF%D9%8A%D9%82%D8%A9+%D8%A7%D9%84%D8%B0%D9%83%D9%8A%D8%A9+%D9%81%D9%8A+%D9%85%D9%86%D8%B2%D9%84%D9%83"],
  },
};

const OPTIONS = [
  {
    Icon: Smartphone,
    badge: "قريباً",
    title: "تطبيق الحديقة الذكية",
    subtitle: "الحديقة الذكية في راحة يدك",
    desc: "تطبيق إرشادي للمبتدئين والمتحمّسين — خطوات زراعة مُكيَّفة لمناخ السعودية، وتتبّع النمو، وحساب جدوى الإنتاج. مبني من تجاربنا الميدانية في عسفان.",
    cta: { label: "انضم لقائمة الانتظار", href: "/app", variant: "lime" as const },
    bg: "bg-cream",
  },
  {
    Icon: ShoppingBag,
    badge: "متاح الآن",
    title: "iGarden Home Solutions",
    subtitle: "حلول جاهزة للمنزل",
    desc: "حلول زراعة مائية مُوطَّنة للمنازل والشقق — أبراج aeroponics، مستلزمات NFT، ومكمّلات غذائية مُختارة. بمواصفات مستمدّة من أنظمتنا التجارية، بمقاسات منزلية.",
    cta: { label: "تصفّح الحلول المنزلية", href: "https://shop.igarden.sa", variant: "outline-green" as const, external: true },
    bg: "bg-white",
  },
];

export default function HomeSolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-light py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-lime text-sm font-bold uppercase tracking-widest mb-3">
            للأفراد والمنازل
          </p>
          <h1 className="h1 text-deep-green mb-5">
            ابدأ حديقتك الذكية من المنزل
          </h1>
          <p className="body-base text-medium-gray max-w-2xl mx-auto">
            نُقدّم للأفراد نسخة مُصغَّرة من تقنياتنا التجارية — مُصمَّمة لمناخ
            السعودية، ومُختبَرة في عسفان قبل أن تصل إليك.
          </p>
        </div>
      </section>

      {/* Two options */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {OPTIONS.map(({ Icon, badge, title, subtitle, desc, cta, bg }) => (
              <div
                key={title}
                className={`${bg} rounded-card p-8 shadow-soft flex flex-col border border-light-gray`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-full bg-lime/10 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-deep-green" aria-hidden />
                  </div>
                  <span className="text-xs font-bold text-lime bg-lime/10 px-3 py-1 rounded-full">
                    {badge}
                  </span>
                </div>
                <h2 className="h3 text-deep-green mb-1">{title}</h2>
                <p className="text-lime font-medium text-base mb-4">{subtitle}</p>
                <p className="body-base text-medium-gray mb-8 flex-1">{desc}</p>
                <CTAButton
                  href={cta.href}
                  variant={cta.variant}
                  external={"external" in cta ? cta.external : false}
                >
                  {cta.label}
                </CTAButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B2B note */}
      <section className="section-light py-16">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="body-base text-medium-gray mb-4">
            هل تبحث عن حلول تجارية لمزرعة أو منشأة؟
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-lime font-medium hover:text-deep-green transition-colors"
          >
            تصفّح الحلول التجارية
            <ArrowLeft className="w-4 h-4" aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
}
