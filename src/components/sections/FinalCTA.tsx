import { CTAButton } from "@/components/shared/CTAButton";

export function FinalCTA() {
  return (
    <section className="bg-deep-green py-24">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <p className="text-lime text-lg font-bold uppercase tracking-widest mb-4">
          ابدأ اليوم
        </p>
        <h2 className="h2 text-cream mb-5">
          مشروعك الزراعي يستحق شريكاً يفهم المناخ السعودي
        </h2>
        <p className="body-base text-cream/80 max-w-2xl mx-auto mb-10">
          استشارة مجانية لمدة 30 دقيقة — نُقيّم وضعك الحالي ونقترح المسار الأمثل.
          بلا التزام، بلا مبالغة.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton href="/contact" variant="lime">
            احجز استشارة مجانية
          </CTAButton>
          <CTAButton href="https://demo.igarden.sa" variant="outline-green" external>
            جرّب الـ Demo أولاً
          </CTAButton>
        </div>

        <p className="text-cream/40 text-lg mt-8">
          أو تواصل مباشرة:{" "}
          <a
            href="mailto:info@igarden.sa"
            className="text-lime hover:text-bright-lime transition-colors"
          >
            info@igarden.sa
          </a>
        </p>
      </div>
    </section>
  );
}
