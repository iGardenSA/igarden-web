import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function OsfanFacility() {
  return (
    <section className="bg-[var(--color-surface)] section-padding" dir="rtl">
      <div className="container-igarden">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-section mb-5">
            مرفق R&amp;D في عسفان — حيث نختبر قبل أن نركّب عندك
          </h2>
          <p className="body-base text-medium-gray leading-relaxed mb-8">
            شمال جدة. نطوّر فيه المنظومات ونختبرها في ظروف تشغيل حقيقية، ونستقبل
            زيارات تقنية وعروضاً ميدانية للمنشآت والجهات.
          </p>
          <Link
            href="/contact?interest=osfan-visit&cta=osfan_visit_request"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-[#7CB342] hover:bg-[#A5D63F] text-[#0F3D2E] font-semibold transition-colors"
          >
            اطلب زيارة تقنية إلى عسفان
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
