import Link from "next/link";
import { ArrowLeft } from "lucide-react";

/**
 * قسم مضغوط — يُعيد استعمال عناوين البطاقات القائمة في /products#specialized.
 * ⛔ لا وصف جديد لأي قدرة · ⛔ ولا وعد جاهزية لما هو قيد التطوير.
 */
type Capability = { label: string; note?: string };

const CAPABILITIES: Capability[] = [
  { label: "غرف الاستنبات والأعلاف الخضراء" },
  { label: "Aquaponics والاستزراع المائي المدمج" },
  { label: "الزراعة الرأسية والجدارية" },
  { label: "الزراعة المائية العضوية وBioponics", note: "قيد التطوير" },
];

export function SpecializedCapabilities() {
  return (
    <section className="bg-white section-padding" dir="rtl">
      <div className="container-igarden">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="heading-section mb-4">قدرات متخصّصة حسب المشروع</h2>
          <p className="body-base text-medium-gray">
            أنظمة تُبنى عند وجود احتياج محدّد، خارج العائلات الأربع الأساسية.
          </p>
        </div>

        <ul className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto mb-8">
          {CAPABILITIES.map(({ label, note }) => (
            <li
              key={label}
              className="inline-flex items-center gap-2 rounded-pill border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-3 text-sm font-medium text-deep-green"
            >
              {label}
              {note && (
                <span className="text-[11px] font-bold text-amber-700 bg-amber-100 rounded-full px-2 py-0.5">
                  {note}
                </span>
              )}
            </li>
          ))}
        </ul>

        <div className="text-center">
          <Link
            href="/products#specialized"
            className="inline-flex items-center gap-2 min-h-[44px] font-semibold text-[var(--color-brand-600)] hover:text-deep-green transition-colors"
          >
            استعرض القدرات المتخصّصة
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
