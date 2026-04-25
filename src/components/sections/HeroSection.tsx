import { CTAButton } from "@/components/shared/CTAButton";

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-deep-green min-h-[80vh] md:min-h-[90vh] flex items-center">
      {/* Background Video Layer */}
      <div className="absolute inset-0 w-full h-full" aria-hidden="true">
        <video
          poster="/images/hero-poster.jpg"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover motion-reduce:hidden"
        >
          <source src="/videos/hero-video.webm" type="video/webm" />
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>

        <div
          className="absolute inset-0 w-full h-full hidden motion-reduce:block bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-poster.jpg')" }}
        />
      </div>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-deep-green/70 via-deep-green/55 to-deep-green/85"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 max-w-5xl text-center">
        <p className="text-lime font-medium text-sm md:text-base mb-6 tracking-[0.2em] uppercase">
          AgriTech سعودية · ريادية · مُبتكرة
        </p>

        <h1 className="text-cream font-bold mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.15] tracking-tight drop-shadow-[0_2px_20px_rgba(0,0,0,0.4)]">
          نَبني ونُوطّن ونُطوّر
          <br />
          <span className="text-lime">أنظمة الزراعة الذكية</span>
        </h1>

        <p className="text-cream/90 max-w-2xl mx-auto mb-10 text-lg md:text-xl leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
          شركة سعودية لبناء المزارع وأنظمة التحكم الزراعي — نأخذ التقنية العالمية ونُعيد تنفيذها بمدخلات محلية، ونختبرها في مناخك قبل أن تصل إليك.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <CTAButton href="/contact" variant="lime">
            احجز استشارة مجانية
          </CTAButton>
          <CTAButton href="/osfan-station" variant="outline-green">
            تعرّف على محطّة عسفان
          </CTAButton>
        </div>

        <p className="text-sm text-cream/80">
          <a
            href="https://demo.igarden.sa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lime hover:text-cream underline-offset-4 hover:underline transition-colors duration-200"
          >
            شاهد الديمو التفاعلي ↗
          </a>
        </p>
      </div>
    </section>
  );
}
