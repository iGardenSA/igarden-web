import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { MethodologySection } from "@/components/sections/MethodologySection";
import { ThreePillarsSection } from "@/components/sections/ThreePillarsSection";
import { ComplementaryProducts } from "@/components/sections/ComplementaryProducts";
import { OsfanStationPreview } from "@/components/sections/OsfanStationPreview";
import { SmartOSDemoSection } from "@/components/sections/SmartOSDemoSection";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { KnowledgeSection } from "@/components/sections/KnowledgeSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <MethodologySection />
      <ThreePillarsSection />
      <ComplementaryProducts />
      <OsfanStationPreview />
      <SmartOSDemoSection />
      <StatsStrip />
      <HowWeWork />
      <KnowledgeSection />
      <FinalCTA />
    </>
  );
}
