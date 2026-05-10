import { CTAButton } from "@/components/shared/CTAButton";
import { CONTACT } from "@/lib/constants";

export function FinalCTA() {
  return (
    <section className="bg-deep-green py-24">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <p className="text-lime text-lg font-bold uppercase tracking-widest mb-4">
          الخطوة الأولى محادثة
        </p>
        <h2 className="h2 text-cream mb-5">
          لا التزام، لا توقيع NDA، لا مندوب مبيعات.
        </h2>
        <p className="body-base text-cream/80 max-w-2xl mx-auto mb-10">
          نَسمع فكرتك، نُصارحك إن كانت غير جاهزة بعد، ونَقترح مساراً عملياً
          إن كانت جاهزة. هاتف، واتساب، أو زيارة لمحطّة عسفان — اختَر الأنسب لك.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton href="/contact" variant="lime">
            اطلب تقييم مشروعك
          </CTAButton>
          <CTAButton
            href={CONTACT.whatsapp}
            variant="outline-green"
            external
          >
            راسلنا على واتساب
          </CTAButton>
        </div>

        <p className="text-cream/40 text-lg mt-8">
          أو مباشرة:{" "}
          <a
            href={`mailto:${CONTACT.email}`}
            className="text-lime hover:text-bright-lime transition-colors font-latin"
            dir="ltr"
          >
            {CONTACT.email}
          </a>
        </p>
      </div>
    </section>
  );
}
