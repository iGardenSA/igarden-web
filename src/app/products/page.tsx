import type { Metadata } from "next";
import Link from "next/link";
import { PortfolioFamilies } from "@/components/sections/PortfolioFamilies";
import { SpecializedSolutions } from "@/components/sections/SpecializedSolutions";
import { CTAButton } from "@/components/shared/CTAButton";
import { Sprout, Wrench, ArrowLeft } from "lucide-react";
import { BreadcrumbSchema, ServiceSchema } from "@/components/shared/SchemaJsonLd";

const OG_TITLE =
  "%D8%A7%D9%84%D8%AD%D9%84%D9%88%D9%84+%D9%88%D8%A7%D9%84%D9%85%D9%86%D8%B8%D9%88%D9%85%D8%A7%D8%AA+%D8%A7%D9%84%D8%B2%D8%B1%D8%A7%D8%B9%D9%8A%D8%A9+%D8%A7%D9%84%D9%85%D8%AA%D9%83%D8%A7%D9%85%D9%84%D8%A9";
const OG_SUB =
  "%D8%A3%D9%86%D8%B8%D9%85%D8%A9+%D8%A7%D9%84%D8%A5%D9%86%D8%AA%D8%A7%D8%AC+%C2%B7+%D8%A7%D9%84%D8%AA%D8%AD%D9%83%D9%85+%C2%B7+%D8%A7%D9%84%D8%B1%D9%82%D9%85%D9%86%D8%A9+%C2%B7+%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D8%AF%D8%A7%D9%85%D8%A9";
const OG_SUB_SHORT =
  "%D9%84%D9%84%D9%85%D8%B4%D8%A7%D8%B1%D9%8A%D8%B9+%D8%A7%D9%84%D8%AC%D8%AF%D9%8A%D8%AF%D8%A9+%D9%88%D8%A7%D9%84%D9%85%D9%86%D8%B4%D8%A2%D8%AA+%D8%A7%D9%84%D9%82%D8%A7%D8%A6%D9%85%D8%A9";

const DESCRIPTION =
  "تخطط iGarden وتبني أنظمة الإنتاج، وتؤتمت التشغيل، وترقمن المزرعة، وتدمج حلول الاستدامة وكفاءة التشغيل للمشاريع الجديدة والمنشآت القائمة.";

export const metadata: Metadata = {
  title: "الحلول والمنظومات الزراعية المتكاملة",
  description: DESCRIPTION,
  alternates: { canonical: "https://igarden.sa/products" },
  openGraph: {
    title: "الحلول والمنظومات الزراعية المتكاملة | iGarden",
    description: DESCRIPTION,
    images: [
      {
        url: `/api/og?title=${OG_TITLE}&sub=${OG_SUB}`,
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
    locale: "ar_SA",
  },
  twitter: {
    card: "summary_large_image",
    title: "الحلول والمنظومات الزراعية المتكاملة | iGarden",
    description:
      "أنظمة الإنتاج والتحكم والرقمنة والاستدامة — للمشاريع الجديدة والمنشآت القائمة.",
    images: [`/api/og?title=${OG_TITLE}&sub=${OG_SUB_SHORT}`],
  },
};

/* ─── Section 1: Hero ─────────────────────────────────────── */
function Hero() {
  return (
    <section className="section-light py-16 md:py-20">
      <div className="container mx-auto px-4 max-w-7xl text-center">
        <h1 className="h1 text-deep-green mb-5">
          منظومة متكاملة — تبدأ من احتياجك.
        </h1>
        <p className="body-base text-medium-gray max-w-3xl mx-auto">
          نؤسس مشروعاً زراعياً جديداً من التخطيط والتجهيز، أو نطوّر منشأة قائمة
          بالتحكم والأتمتة وبيانات التشغيل. ويمكن أن يبدأ النطاق بحل واحد ثم
          يتوسع.
        </p>
      </div>
    </section>
  );
}

/* ─── Section 2: نقطة البداية — مساران ────────────────────── */
const START_POINTS = [
  {
    Icon: Sprout,
    title: "مشروع جديد",
    text: "تخطيط منظومة الإنتاج وتجهيزها وربطها بالتشغيل والتحكم.",
    href: "/how-we-work#new-project",
    cta: "اطّلع على المسار",
  },
  {
    Icon: Wrench,
    title: "منشأة قائمة",
    text: "تقييم التشغيل الحالي ثم إضافة القياس والتحكم والأتمتة والبيانات على مراحل.",
    href: "/how-we-work#existing-facility",
    cta: "اطّلع على المسار",
  },
];

function StartPoints() {
  return (
    <section className="bg-white py-16" id="start">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-10">
          <p className="text-lime text-lg font-bold uppercase tracking-widest mb-2">
            نقطة البداية
          </p>
          <h2 className="h2 text-deep-green">من أين يبدأ مشروعك؟</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {START_POINTS.map(({ Icon, title, text, href, cta }) => (
            <article
              key={title}
              className="bg-cream rounded-card p-7 shadow-soft flex flex-col"
            >
              <span className="w-12 h-12 rounded-full bg-deep-green flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-bright-lime" aria-hidden />
              </span>
              <h3 className="text-xl font-bold text-deep-green mb-2">{title}</h3>
              <p className="body-sm text-medium-gray flex-1 mb-5">{text}</p>
              <Link
                href={href}
                className="inline-flex items-center gap-1 text-lime hover:text-deep-green font-medium transition-colors"
              >
                {cta}
                <ArrowLeft className="w-4 h-4" aria-hidden />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section 5: Final CTA ────────────────────────────────── */
function FinalCTA() {
  return (
    <section className="bg-deep-green py-20">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="h2 text-cream mb-5">
          لا تَعرف من أين تَبدأ؟ ابدأ بالمحادثة.
        </h2>
        <p className="body-base text-cream/80 max-w-xl mx-auto mb-8">
          نَسمع، نَسأل، ونَقترح — أو نُصارحك إن كان مشروعك ليس جاهزاً بعد.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton
            href="/contact?interest=consultation&cta=readiness_assessment"
            variant="lime"
          >
            اطلب تقييماً أولياً لمشروعك
          </CTAButton>
          <CTAButton href="/how-we-work" variant="outline-green">
            كيف نعمل
          </CTAButton>
        </div>
      </div>
    </section>
  );
}

const BREADCRUMB = [
  { name: "الرئيسية", url: "/" },
  { name: "الحلول", url: "/products" },
];

export default function ProductsPage() {
  return (
    <>
      <BreadcrumbSchema items={BREADCRUMB} />
      <ServiceSchema
        name="الحلول والمنظومات الزراعية المتكاملة — iGarden"
        description={DESCRIPTION}
        url="/products"
        serviceType="Integrated Agricultural Systems"
      />
      <Hero />
      <StartPoints />
      <PortfolioFamilies />
      <SpecializedSolutions />
      <FinalCTA />
    </>
  );
}
