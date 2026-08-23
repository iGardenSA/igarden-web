import type { Metadata } from "next";
import { OrganizationSchema, WebSiteSchema } from "@/components/shared/SchemaJsonLd";

export const metadata: Metadata = {
  title: "iGarden — رقمنة تشغيل المزارع والمنشآت الزراعية في السعودية",
  description:
    "مزرعة تُدار بالبيانات — نبنيها معك مرحلةً مرحلة. تربط iGarden القياس والتحكّم والأتمتة وبيانات التشغيل فوق بنيتك القائمة. ازرع بذكاء.",
  alternates: { canonical: "https://igarden.sa/" },
  openGraph: {
    title: "iGarden — رقمنة تشغيل المزارع والمنشآت الزراعية في السعودية",
    description:
      "رقمنة تشغيل مزرعتك على مراحل — قياس وتحكّم وأتمتة وبيانات تشغيل فوق بنيتك القائمة. ازرع بذكاء.",
    images: ["/images/og/home.jpg"],
    type: "website",
    locale: "ar_SA",
  },
};

import { SalesHero } from "@/components/sections/SalesHero";
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

      {/* ① Hero */}
      <SalesHero />

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
