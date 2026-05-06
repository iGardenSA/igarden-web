import { OrganizationSchema, WebSiteSchema } from "@/components/shared/SchemaJsonLd";
import HeroSection from "@/components/sections/HeroSection";
import HeroTrustBar from "@/components/sections/HeroTrustBar";
import { TrustBar } from "@/components/sections/TrustBar";
import { MethodologySection } from "@/components/sections/MethodologySection";
import { ThreePillarsSection } from "@/components/sections/ThreePillarsSection";
import { ComplementaryProducts } from "@/components/sections/ComplementaryProducts";
import { OsfanStationPreview } from "@/components/sections/OsfanStationPreview";
import { SmartOSDemoSection } from "@/components/sections/SmartOSDemoSection";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { KnowledgeSection } from "@/components/sections/KnowledgeSection";
import { HomeSolutions } from "@/components/sections/HomeSolutions";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <OrganizationSchema />
      <WebSiteSchema />
      {/* Pull hero up behind both sticky TopBar (36px) + Header (64px) = 100px
          so the transparent nav shows the dark hero video through both layers */}
      <div className="-mt-[100px]">
        <HeroSection />
      </div>
      <HeroTrustBar />
      <div
        className="h-12 w-full"
        style={{ background: "linear-gradient(to bottom, #0F3D2E 0%, #FAFAF7 100%)" }}
        aria-hidden="true"
      />
      <TrustBar />
      <MethodologySection />
      <ThreePillarsSection />
      <ComplementaryProducts />
      <OsfanStationPreview />
      <SmartOSDemoSection />
      <StatsStrip />
      <HowWeWork />
      <KnowledgeSection />
      <HomeSolutions />
      <FinalCTA />
    </>
  );
}
