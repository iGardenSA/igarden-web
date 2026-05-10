"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[90vh] md:min-h-screen flex flex-col justify-center overflow-hidden pt-28 md:pt-32 pb-16 md:pb-20"
      dir="rtl"
      aria-labelledby="hero-headline"
    >
      <video autoPlay muted loop playsInline preload="metadata" poster="/images/hero-poster.jpg" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover -z-20">
        <source src="/videos/hero-video.webm" type="video/webm" />
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(15,61,46,0.55) 0%, rgba(15,61,46,0.40) 50%, rgba(15,61,46,0.65) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto w-full px-4 md:px-8">
        <div className="inline-flex items-center self-start bg-[#0F3D2E]/40 backdrop-blur-sm border border-[#A5D63F]/40 text-[#A5D63F] px-4 py-1.5 rounded-full text-sm font-medium shadow-sm shadow-black/20 mb-6">
          منذ 2024 · شركة سعودية · مُختبَرة ميدانياً في عسفان
        </div>

        <h1
          id="hero-headline"
          className="font-arabic font-bold text-[#FAFAF7] text-4xl md:text-5xl lg:text-6xl leading-[1.15] mb-5 max-w-3xl"
          style={{ fontFeatureSettings: '"liga", "dlig"' }}
        >
          شركة سعودية تبني أنظمة الزراعة الذكية
          <span className="block text-[#A5D63F]">للمناخ السعودي.</span>
        </h1>

        <p className="text-white/85 text-lg md:text-xl leading-relaxed max-w-2xl mb-6">
          من الحساس إلى الحصاد، نُصمّم ونُنفّذ ونُطوّر حلول التحكم الزراعي،
          الزراعة المائية، المحميات الذكية، وسجلات التشغيل القابلة للمراجعة.
        </p>

        <div className="flex items-center gap-3 mb-8 text-[#A5D63F]/80">
          <span className="text-sm font-medium tracking-wider uppercase">
            ننفّذ · نُوطّن · نُطوّر
          </span>
          <span className="text-white/30">|</span>
          <span className="text-sm">
            ازرع بذكاء{" "}
            <span dir="ltr" className="font-latin">
              · Plant Smart
            </span>
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-start">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#7CB342] hover:bg-[#A5D63F] text-[#0F3D2E] rounded-lg text-lg md:text-lg font-semibold transition-colors focus:ring-2 focus:ring-[#A5D63F]/50 focus:outline-none min-w-[220px]"
          >
            اطلب تقييم مشروعك
          </Link>

          <a
            href="https://demo.igarden.sa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white/80 text-white hover:bg-white/10 rounded-lg text-lg md:text-lg font-medium transition-all duration-200 min-w-[220px]"
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#A5D63F] animate-pulse flex-shrink-0" />
              شاهد Smart OS Demo
            </span>
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
