import { OrganizationSchema, WebSiteSchema } from "@/components/shared/SchemaJsonLd";
import HeroSection from "@/components/sections/HeroSection";
import HeroTrustBar from "@/components/sections/HeroTrustBar";
import { TrustBar } from "@/components/sections/TrustBar";
import { MethodologySection } from "@/components/sections/MethodologySection";
import { SmartOSDemoSection } from "@/components/sections/SmartOSDemoSection";
import { OsfanStationPreview } from "@/components/sections/OsfanStationPreview";
import { ThreePillarsSection } from "@/components/sections/ThreePillarsSection";
import { ComplianceSection } from "@/components/sections/ComplianceSection";
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

      {/* 2. شريط أرقام الثقة */}
      <HeroTrustBar />
      <div
        className="h-12 w-full"
        style={{ background: "linear-gradient(to bottom, #0F3D2E 0%, #FAFAF7 100%)" }}
        aria-hidden="true"
      />

      {/* 3. لماذا الحديقة الذكية */}
      <TrustBar />
      <MethodologySection />

      {/* 4. Smart OS */}
      <SmartOSDemoSection />

      {/* 5. محطة عسفان */}
      <OsfanStationPreview />

      {/* 6. حلول المزارع التجارية */}
      <ThreePillarsSection />

      {/* 7. من التحكم إلى الامتثال */}
      <ComplianceSection />

      {/* 8. أرقام + كيف نعمل */}
      <StatsStrip />
      <HowWeWork />

      {/* 9. دعوة للتواصل */}
      <FinalCTA />

      {/* 10. ثانوي: B2C + أكاديمية */}
      <HomeSolutions />
      <ComplementaryProducts />
      <KnowledgeSection />
    </>
  );
}
