import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export function SalesHero() {
  return (
    <section
      className="relative min-h-[90vh] md:min-h-screen flex flex-col justify-center overflow-hidden pt-28 md:pt-32 pb-16 md:pb-20 text-white"
      dir="rtl"
      aria-labelledby="hero-headline"
    >
      {/* فيديو الرئيسية — يمتدّ خلف الهيدر الشفّاف */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/hero-poster.jpg"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover -z-20"
      >
        <source src="/videos/hero-video.webm" type="video/webm" />
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>

      {/* طبقة التعتيم — تضمن وضوح النصّ والهيدر الأبيض فوق الفيديو */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(15,61,46,0.55) 0%, rgba(15,61,46,0.40) 50%, rgba(15,61,46,0.65) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="container-igarden relative">
        <div className="max-w-4xl">
          <p className="text-sm md:text-base font-semibold text-[#A5D63F] mb-4">
            شركة سعودية ريادية ومبتكرة في التقنيات الزراعية
          </p>

          <h1
            id="hero-headline"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.15] tracking-tight text-white mb-6"
          >
            ازرع بذكاء.
          </h1>

          <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-3xl mb-10">
            نَبني ونُوطّن ونُطوّر منظومات زراعية متكاملة — نؤسّس مشروعك من التخطيط
            والإنشاء، أو نطوّر منشأتك القائمة بالتحكّم والأتمتة وبيانات التشغيل.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#assessment"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#7CB342] hover:bg-[#A5D63F] text-[#0F3D2E] rounded-lg text-base md:text-lg font-semibold transition-colors focus:ring-2 focus:ring-[#A5D63F]/50 focus:outline-none"
            >
              اطلب تقييماً أولياً لمشروعك الزراعي
            </Link>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border-2 border-white/40 text-white text-base md:text-lg font-semibold hover:bg-white/10 transition-colors"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              تواصل سريع عبر واتساب
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
