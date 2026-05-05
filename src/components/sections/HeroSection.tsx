"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[90vh] md:min-h-screen flex flex-col justify-center overflow-hidden pt-24 md:pt-28 pb-16 md:pb-20"
      dir="rtl"
      aria-labelledby="hero-headline"
    >
      <video autoPlay muted loop playsInline preload="metadata" poster="/images/hero-poster.jpg" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover -z-20">
        <source src="/videos/hero-video.webm" type="video/webm" />
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 -z-10 bg-[#0F3D2E]/55" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0F3D2E]/85 via-[#0F3D2E]/30 to-transparent" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto w-full px-4 md:px-8">
        <div className="inline-flex items-center self-start bg-[#7CB342]/15 border border-[#7CB342]/30 text-[#A5D63F] px-3.5 py-1.5 rounded-full text-lg md:text-lg font-medium tracking-wide mb-6">
          AgriTech سعودية · ريادية · مُبتكرة
        </div>

        <h1
          id="hero-headline"
          className="font-arabic font-bold text-[#FAFAF7] text-4xl md:text-5xl lg:text-6xl leading-[1.2] mb-4"
          style={{ fontFeatureSettings: '"liga", "dlig"' }}
        >
          <span className="block">نَبني ونُوطّن ونُطوّر</span>
          <span className="block">أنظمة الزراعة الذكية</span>
        </h1>

        <p className="text-[#7CB342] text-xl md:text-2xl font-medium mb-5">ازرع بذكاء · Plant Smart</p>

        <p className="text-white/80 text-lg md:text-lg leading-relaxed max-w-xl mb-8">
          شركة سعودية تُوطّن التقنية الزراعية لمناخ +45°C. نختبر كل نظام في عسفان قبل أن يصل إليك.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-start">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#7CB342] hover:bg-[#A5D63F] text-[#0F3D2E] rounded-lg text-lg md:text-lg font-semibold transition-colors focus:ring-2 focus:ring-[#A5D63F]/50 focus:outline-none min-w-[220px]"
          >
            احجز استشارة 30 دقيقة
          </Link>

          <a
            href="https://demo.igarden.sa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white/80 text-white hover:bg-white/10 rounded-lg text-lg md:text-lg font-medium transition-all duration-200 min-w-[220px]"
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#A5D63F] animate-pulse flex-shrink-0" />
              شاهد النظام الحيّ
            </span>
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
