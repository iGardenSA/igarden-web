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
      {/* -mt-16 pulls the hero up behind the transparent Header (64px) so the
          dark video background shows through instead of the cream body bg */}
      <div className="-mt-16">
        <HeroSection />
      </div>
      <HeroTrustBar />
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
