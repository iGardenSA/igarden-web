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
    images: ["/images/og/home.jpg"],
    type: "website",
    locale: "ar_SA",
  },
};

import { SalesHero } from "@/components/sections/SalesHero";
import { TrustBar } from "@/components/sections/TrustBar";
import { AudienceSplit } from "@/components/sections/AudienceSplit";
import { DigitizationStages } from "@/components/sections/DigitizationStages";
import { FieldProjectCard } from "@/components/sections/FieldProjectCard";
import { SolutionTracks } from "@/components/sections/SolutionTracks";
import { SmartOSFlow } from "@/components/sections/SmartOSFlow";
import { InnovationTracks } from "@/components/sections/InnovationTracks";
import { OsfanFacility } from "@/components/sections/OsfanFacility";
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

      {/* شريط الثقة */}
      <TrustBar />

      <div className="bg-white pb-6 text-center" dir="rtl">
        <Link
          href="/about"
          className="text-sm text-medium-gray underline underline-offset-4 hover:text-[var(--color-brand-600)] transition-colors"
        >
          تعرّف على iGarden
        </Link>
      </div>

      {/* ② فرز الجمهور */}
      <AudienceSplit />

      {/* ③ أربع مراحل */}
      <DigitizationStages />

      {/* ⑤ من الميدان — بطاقة مشروع */}
      <FieldProjectCard />

      {/* ④ الحلول */}
      <SolutionTracks />

      {/* ⑥ Smart OS */}
      <SmartOSFlow />

      {/* ⑦ بطاقة الابتكار */}
      <InnovationTracks />

      {/* ⑧ مرفق R&D في عسفان */}
      <OsfanFacility />

      {/* ⑨ المعرفة */}
      <KnowledgeGrid />

      {/* ⑩ الإغلاق والنموذج */}
      <AssessmentSection />
    </>
  );
}
