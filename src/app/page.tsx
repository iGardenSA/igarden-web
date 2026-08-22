import type { Metadata } from "next";
import { OrganizationSchema, WebSiteSchema } from "@/components/shared/SchemaJsonLd";

export const metadata: Metadata = {
  title: "iGarden — الحديقة الذكية | أنظمة الزراعة الذكية في السعودية",
  description:
    "الحديقة الذكية شركة سعودية تبني أنظمة الزراعة الذكية: حساسات، تحكم، وبرمجيات تشغيل ميدانية مكيّفة للمناخ السعودي منذ 2024. ازرع بذكاء.",
  alternates: { canonical: "https://igarden.sa/" },
  openGraph: {
    title: "iGarden — الحديقة الذكية | أنظمة الزراعة الذكية في السعودية",
    description:
      "شركة سعودية تبني أنظمة تحكم وزراعة مائية مكيّفة للمناخ السعودي. ازرع بذكاء.",
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
