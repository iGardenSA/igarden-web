import { CTAButton } from "@/components/shared/CTAButton";
import { IGardenName } from "@/components/shared/BilingualText";

export function HeroSection() {
  return (
    <section className="section-light py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Text */}
          <div>
            <p className="text-lime font-medium text-sm md:text-base mb-4 tracking-wide">
              AgriTech سعودية · ريادية · مُبتكرة
            </p>
            <h1 className="h1 text-deep-green mb-6">
              نبني ونُوطّن ونُطوّر
              <br />
              أنظمة الزراعة الذكية
            </h1>
            <p className="body-base text-medium-gray max-w-xl mb-8">
              شركة سعودية لبناء المزارع وأنظمة التحكم الزراعي — نأخذ التقنية
              العالمية ونُعيد تنفيذها بمدخلات محلية، ونختبرها في مناخك قبل أن
              تصل إليك.
            </p>
            <div className="flex flex-wrap gap-4">
              <CTAButton href="/contact" variant="lime">
                احجز استشارة مجانية
              </CTAButton>
              <CTAButton href="/osfan-station" variant="outline-green">
                تعرّف على محطّة عسفان
              </CTAButton>
            </div>
            <p className="mt-6 text-sm text-medium-gray">
              <a
                href="https://demo.igarden.sa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lime hover:text-deep-green underline-offset-4 hover:underline transition-colors"
              >
                شاهد الديمو التفاعلي ↗
              </a>
            </p>
          </div>

          {/* Visual — placeholder for hero-osfan.jpg */}
          <div className="relative aspect-[4/3] rounded-card overflow-hidden shadow-lg bg-gradient-to-br from-brand-100 to-brand-200 flex items-center justify-center">
            {/* [CONTENT_NEEDED] /images/osfan/hero-osfan.jpg — 1600px+, 4:3 */}
            <div className="text-center text-brand-400 p-6">
              <p className="text-lg font-medium text-brand-500">محطة عسفان</p>
              <p className="text-sm mt-1 opacity-70">المختبر الميداني الرئيسي</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
