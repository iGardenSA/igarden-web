import type { Metadata } from "next";
import { OrganizationSchema, WebSiteSchema } from "@/components/shared/SchemaJsonLd";

export const metadata: Metadata = {
  title: "iGarden — انتيليجنت غاردن | أنظمة الزراعة الذكية في السعودية",
  description:
    "iGarden (انتيليجنت غاردن): شركة سعودية تبني أنظمة الزراعة الذكية — حساسات، تحكم، وبرمجيات تشغيل ميدانية مكيّفة للمناخ السعودي. نبني · نُوطّن · نُطوّر.",
  alternates: { canonical: "https://igarden.sa/" },
  openGraph: {
    title: "iGarden — انتيليجنت غاردن | أنظمة الزراعة الذكية في السعودية",
    description:
      "شركة سعودية لتطوير المزارع وأنظمة التحكم الزراعي الذكي مكيّفة للمناخ السعودي. نبني · نُوطّن · نُطوّر.",
    images: [{ url: "/api/og?title=iGarden+%E2%80%94+%D8%A7%D9%84%D8%AD%D8%AF%D9%8A%D9%82%D8%A9+%D8%A7%D9%84%D8%B0%D9%83%D9%8A%D8%A9&sub=%D9%86%D9%86%D9%81%D9%91%D8%B0+%C2%B7+%D9%86%D9%8F%D9%88%D8%B7%D9%91%D9%86+%C2%B7+%D9%86%D9%8F%D8%B7%D9%88%D9%91%D8%B1", width: 1200, height: 630 }],
    type: "website",
    locale: "ar_SA",
  },
  twitter: {
    card: "summary_large_image",
    title: "iGarden — انتيليجنت غاردن | أنظمة الزراعة الذكية في السعودية",
    description: "شركة سعودية تبني أنظمة الزراعة الذكية للمناخ السعودي. نبني · نُوطّن · نُطوّر.",
    images: ["/api/og"],
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
