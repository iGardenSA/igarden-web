import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export function SalesHero() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-[var(--color-brand-700)] via-[var(--color-brand-600)] to-[var(--color-brand-500)] text-white"
      dir="rtl"
      aria-labelledby="hero-headline"
    >
      <div className="container-igarden section-padding">
        <div className="max-w-4xl">
          <h1
            id="hero-headline"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] tracking-tight text-white mb-6"
          >
            مزرعة تُدار بالبيانات — نبنيها معك مرحلةً مرحلة.
          </h1>

          <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-3xl mb-8">
            تربط iGarden القياس والتحكّم والأتمتة وبيانات التشغيل فوق بنيتك القائمة.
            نبدأ بنطاق عملي واضح، ثمّ نوسّعه نحو منظومة رقمية متكاملة لمتابعة المزرعة
            وإدارة تشغيلها وتوثيق قراراتها.
          </p>

          <div className="bg-white/10 border border-white/15 rounded-2xl p-5 md:p-6 mb-10 max-w-3xl">
            <p className="text-base md:text-lg text-white/90 leading-relaxed">
              المرحلة الأولى تعمل اليوم على أرض الواقع: ريّ آلي على بيت مزروع في منشأة
              زراعية تجارية بالمنطقة الشرقية — وتقنيات نطوّرها ونختبرها ميدانياً في
              مرفق R&amp;D في عسفان.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#assessment"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#7CB342] hover:bg-[#A5D63F] text-[#0F3D2E] rounded-lg text-base md:text-lg font-semibold transition-colors focus:ring-2 focus:ring-[#A5D63F]/50 focus:outline-none"
            >
              اطلب تقييماً أولياً لجاهزية مزرعتك
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
