import type { Metadata } from "next";
import Link from "next/link";
import { OrganizationSchema, WebSiteSchema } from "@/components/shared/SchemaJsonLd";

export const metadata: Metadata = {
  title: "iGarden — منظومات زراعية متكاملة ورقمنة تشغيل المزارع",
  description:
    "شركة سعودية ريادية ومبتكرة في التقنيات الزراعية، تقدّم منظومات متكاملة تشمل البيوت المحمية والزراعة المائية والتحكّم والأتمتة ورقمنة التشغيل في السعودية. ازرع بذكاء.",
  alternates: { canonical: "https://igarden.sa/" },
  openGraph: {
    title: "iGarden — منظومات زراعية متكاملة ورقمنة تشغيل المزارع",
    description:
      "من أنظمة الإنتاج إلى التحكّم والأتمتة وبيانات التشغيل — منظومة زراعية متكاملة لمشروعك. ازرع بذكاء.",
    images: ["/api/og?title=%D9%85%D9%86%D8%B8%D9%88%D9%85%D8%A7%D8%AA+%D8%B2%D8%B1%D8%A7%D8%B9%D9%8A%D8%A9+%D9%85%D8%AA%D9%83%D8%A7%D9%85%D9%84%D8%A9&sub=%D8%B1%D9%82%D9%85%D9%86%D8%A9+%D8%AA%D8%B4%D8%BA%D9%8A%D9%84+%D8%A7%D9%84%D9%85%D8%B2%D8%A7%D8%B1%D8%B9+%C2%B7+%D8%A7%D8%B2%D8%B1%D8%B9+%D8%A8%D8%B0%D9%83%D8%A7%D8%A1"],
    type: "website",
    locale: "ar_SA",
  },
};

import { SalesHero } from "@/components/sections/SalesHero";
import { StartScale } from "@/components/sections/StartScale";
import { DeliveryPaths } from "@/components/sections/DeliveryPaths";
import { FieldEvidence } from "@/components/sections/FieldEvidence";
import { SolutionTracks } from "@/components/sections/SolutionTracks";
import { SpecializedCapabilities } from "@/components/sections/SpecializedCapabilities";
import { SmartOSFlow } from "@/components/sections/SmartOSFlow";
import { InnovationTracks } from "@/components/sections/InnovationTracks";
import { KnowledgeGrid } from "@/components/sections/KnowledgeGrid";
import { AssessmentSection } from "@/components/sections/AssessmentSection";

export default function HomePage() {
  return (
    <>
      <OrganizationSchema />
      <WebSiteSchema />

      {/* ① Hero — يمتدّ خلف الهيدر اللاصق (64px) ليظهر التنقّل الأبيض فوق الفيديو */}
      <div className="-mt-[64px]">
        <SalesHero />
      </div>

      {/* ⛔ حُذف شريط «تعرّف على iGarden» (Wave 2E): سطر معزول تحت الهيرو
          بلا وظيفة تحويل، و/about مبلوغ من الهيدر والفوتر والميجا. */}

      {/* ③ سلّم نقطة البداية */}
      <StartScale />

      {/* ④ العائلات الأربع */}
      <SolutionTracks />

      {/* ④ب القدرات المتخصّصة — مضغوط */}
      <SpecializedCapabilities />

      {/* ⑤ الدليل الميداني */}
      <FieldEvidence />

      {/* ⑥ طريقة التنفيذ — مساران متوازيان، ثم Smart OS */}
      <DeliveryPaths />
      <SmartOSFlow />

      {/* ⑦ الابتكار */}
      <InnovationTracks />

      {/* ⑧ المعرفة */}
      <KnowledgeGrid />

      {/* ⑨ التقييم */}
      <AssessmentSection />

      {/* ⑩ شريط الأفراد — سطران، روابط نصّية، بلا صور وبلا CTA رابع */}
      <section className="bg-white border-t border-light-gray py-8" dir="rtl">
        <div className="container-igarden text-center">
          <p className="body-sm text-medium-gray leading-relaxed max-w-2xl mx-auto">
            تبحث عن نظام لمنزلك أو استراحتك؟ لدينا مسار مستقلّ للأفراد بأنظمة
            جاهزة ومواد قياسية.
            <br />
            <Link
              href="/home-solutions"
              className="underline underline-offset-4 hover:text-[var(--color-brand-600)] transition-colors"
            >
              حلول الأفراد
            </Link>
            {" · "}
            <a
              href="https://shop.igarden.sa"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-[var(--color-brand-600)] transition-colors"
            >
              المتجر
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
