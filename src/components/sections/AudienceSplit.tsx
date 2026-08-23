import Link from "next/link";
import { ArrowLeft, Building2, Landmark } from "lucide-react";

export function AudienceSplit() {
  return (
    <section className="bg-[var(--color-surface)] section-padding" dir="rtl">
      <div className="container-igarden">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="heading-section">ابدأ من موقعك</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 max-w-5xl mx-auto">
          {/* بطاقة أساسية · عريضة */}
          <article className="lg:col-span-3 bg-white rounded-2xl border-2 border-[var(--color-accent-500)] p-8 shadow-[var(--shadow-soft)] flex flex-col">
            <Building2
              className="w-9 h-9 text-[var(--color-brand-600)] mb-4"
              aria-hidden="true"
            />
            <h3 className="text-xl md:text-2xl font-bold text-deep-green mb-3">
              للمنشآت والمزارع التجارية
            </h3>
            <p className="body-base text-medium-gray leading-relaxed mb-6 flex-1">
              مشروع جديد تؤسّسه، أو منشأة قائمة تطوّر تشغيلها — نبدأ من نقطتك
              ونتوسّع معك.
            </p>
            <Link
              href="#assessment"
              className="inline-flex items-center gap-2 font-semibold text-[var(--color-brand-600)] hover:text-deep-green transition-colors"
            >
              ابدأ بتقييم جاهزية مزرعتك
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            </Link>
          </article>

          {/* بطاقة ثانية · بارزة */}
          <article className="lg:col-span-2 bg-white rounded-2xl border border-[var(--color-border)] p-8 shadow-[var(--shadow-soft)] flex flex-col">
            <Landmark
              className="w-9 h-9 text-[var(--color-brand-600)] mb-4"
              aria-hidden="true"
            />
            <h3 className="text-xl font-bold text-deep-green mb-3">
              للجهات الحكومية والمشاريع المؤسسية
            </h3>
            <p className="body-base text-medium-gray leading-relaxed mb-6 flex-1">
              تشغيل أوضح، وسجلّات تدعم الجاهزية للمتطلبات المعلَنة — بمنظومة مصمَّمة
              وفق متطلبات MEWA المعلَنة.
            </p>
            <Link
              href="/contact?cta=book_consultation"
              className="inline-flex items-center gap-2 font-semibold text-[var(--color-brand-600)] hover:text-deep-green transition-colors"
            >
              تحدّث إلينا عن مشروعك
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
