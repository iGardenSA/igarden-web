import type { Metadata } from "next";
import { OrganizationSchema, WebSiteSchema } from "@/components/shared/SchemaJsonLd";

export const metadata: Metadata = {
  title: "iGarden — الحديقة الذكية | أنظمة الزراعة الذكية في السعودية",
  description:
    "الحديقة الذكية شركة سعودية تبني أنظمة الزراعة الذكية: حساسات، تحكم، وبرمجيات تشغيل ميدانية مكيّفة للمناخ السعودي. ننفّذ · نُوطّن · نُطوّر.",
  alternates: { canonical: "https://igarden.sa/" },
  openGraph: {
    title: "iGarden — الحديقة الذكية | أنظمة الزراعة الذكية في السعودية",
    description:
      "شركة سعودية لتطوير المزارع وأنظمة التحكم الزراعي الذكي مكيّفة للمناخ السعودي. ننفّذ · نُوطّن · نُطوّر.",
    images: ["/images/og/home.jpg"],
    type: "website",
    locale: "ar_SA",
  },
};
import HeroSection from "@/components/sections/HeroSection";
import HeroTrustBar from "@/components/sections/HeroTrustBar";
import { MethodologySection } from "@/components/sections/MethodologySection";
import { ThreePillarsSection } from "@/components/sections/ThreePillarsSection";
import { SmartOSDemoSection } from "@/components/sections/SmartOSDemoSection";
import { ComplianceSection } from "@/components/sections/ComplianceSection";
import { OsfanStationPreview } from "@/components/sections/OsfanStationPreview";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { ComplementaryProducts } from "@/components/sections/ComplementaryProducts";
import { WhatWeDontClaim } from "@/components/sections/WhatWeDontClaim";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <OrganizationSchema />
      <WebSiteSchema />

      {/* 1. Hero — pulled up behind transparent sticky header */}
      <div className="-mt-[64px]">
        <HeroSection />
      </div>

      {/* 2. شريط أرقام الثقة (٥ أرقام دستورية) */}
      <HeroTrustBar />
      <div
        className="h-12 w-full"
        style={{ background: "linear-gradient(to bottom, #0F3D2E 0%, #FAFAF7 100%)" }}
        aria-hidden="true"
      />

      {/* 3. ما تحصل عليه — ثلاثة فروق ملموسة */}
      <MethodologySection />

      {/* 4. الركائز الثلاث */}
      <ThreePillarsSection />

      {/* 5. Smart OS Demo */}
      <SmartOSDemoSection />

      {/* 6. سجلات التشغيل القابلة للمراجعة */}
      <ComplianceSection />

      {/* 7. محطّة عسفان */}
      <OsfanStationPreview />

      {/* 8. أرقام + كيف نعمل */}
      <StatsStrip />
      <HowWeWork />

      {/* 9. منتجات تكميلية (Fodder + Aquaponics — دستورياً بطاقات في الرئيسية) */}
      <ComplementaryProducts />

      {/* 10. ما لا ندّعيه — الشفافية */}
      <WhatWeDontClaim />

      {/* 11. دعوة للتواصل */}
      <FinalCTA />
    </>
  );
}
