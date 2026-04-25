import type { Metadata } from "next";
import { ThreePillarsSection } from "@/components/sections/ThreePillarsSection";
import { ComplementaryProducts } from "@/components/sections/ComplementaryProducts";
import { CTAButton } from "@/components/shared/CTAButton";

export const metadata: Metadata = {
  title: "المنتجات — منصّة منتجات زراعية متكاملة | iGarden",
  description:
    "ثلاث ركائز منتجات مُختَبَرة في عسفان: Smart Controllers (Flagship) + Smart Greenhouses + Hydroponic Systems. يشمل iGarden Tower المُسجَّل صناعياً.",
  alternates: { canonical: "https://igarden.sa/products" },
  openGraph: {
    title: "المنتجات — منصّة منتجات زراعية متكاملة",
    description: "ثلاث ركائز + منتجات تكميلية. كلّها مُختَبَرة في عسفان لمناخ السعودية.",
    images: ["/images/og/products.jpg"],
    type: "website",
    locale: "ar_SA",
  },
};

function Hero() {
  return (
    <section className="section-light py-16 md:py-20">
      <div className="container mx-auto px-4 max-w-7xl text-center">
        <p className="text-lime text-xs font-bold uppercase tracking-widest mb-3">
          نبني · نُوطّن · نُطوّر
        </p>
        <h1 className="h1 text-deep-green mb-5">منصّة منتجات متكاملة</h1>
        <p className="body-base text-medium-gray max-w-2xl mx-auto">
          ثلاث ركائز مُختَبَرة في ظروف المناخ السعودي الحقيقية في محطّة عسفان
          — من لوحات التحكم إلى المحميات إلى أنظمة الزراعة المائية.
        </p>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="bg-deep-green py-20">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="h2 text-cream mb-5">
          لا تعرف من أين تبدأ؟ ابدأ بالاستشارة المجانية
        </h2>
        <p className="body-base text-cream/80 max-w-xl mx-auto mb-8">
          30 دقيقة مع فريقنا تُحدّد الحلّ الأنسب لمشروعك — بلا التزام.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton href="/contact" variant="lime">
            احجز استشارة مجانية
          </CTAButton>
          <CTAButton href="/osfan-station" variant="outline-green">
            شاهد عسفان أولاً
          </CTAButton>
        </div>
      </div>
    </section>
  );
}

export default function ProductsPage() {
  return (
    <>
      <Hero />
      <ThreePillarsSection />
      <ComplementaryProducts />
      <FinalCTA />
    </>
  );
}
