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
import HeroSection from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { MethodologySection } from "@/components/sections/MethodologySection";
import { SmartOSDemoSection } from "@/components/sections/SmartOSDemoSection";
import { OsfanStationPreview } from "@/components/sections/OsfanStationPreview";
import { ThreePillarsSection } from "@/components/sections/ThreePillarsSection";
import { ComplianceSection } from "@/components/sections/ComplianceSection";
import { OperationalIdentity } from "@/components/sections/OperationalIdentity";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { HomeSolutions } from "@/components/sections/HomeSolutions";
import { ComplementaryProducts } from "@/components/sections/ComplementaryProducts";
import { KnowledgeSection } from "@/components/sections/KnowledgeSection";

export default function HomePage() {
  return (
    <>
      <OrganizationSchema />
      <WebSiteSchema />
      {/* Pull hero up behind sticky Header (64px) so transparent nav shows video */}
      <div className="-mt-[64px]">
        <HeroSection />
      </div>

      {/* 2. لماذا الحديقة الذكية */}
      <TrustBar />
      <MethodologySection />

      {/* 4. Smart OS */}
      <SmartOSDemoSection />

      {/* 5. محطة عسفان */}
      <OsfanStationPreview />

      {/* 6. حلول المزارع التجارية */}
      <ThreePillarsSection />

      {/* 7. هويتنا التشغيلية */}
      <OperationalIdentity />

      {/* 8. من التحكم إلى الامتثال */}
      <ComplianceSection />

      {/* 8. أرقام + كيف نعمل */}
      <StatsStrip />
      <HowWeWork />

      {/* 9. دعوة للتواصل */}
      <FinalCTA />

      {/* 10. ثانوي: B2C + أكاديمية */}
      <ComplementaryProducts />
      <KnowledgeSection />

      {/* 11. B2C path — شريط خفيف قبل الفوتر */}
      <HomeSolutions />
    </>
  );
}
