/**
 * CapabilityStatus — حالة القدرة التجارية.
 *
 * ⛔ لا يُستنتج التوفّر من وجود كود أو واجهة أو اختبار. الحالة قرار تجاري
 *    يُعتمد في docs/CAPABILITY-MATRIX.md، لا وصف تقني.
 * ⛔ مقصور على قسم «حالة القدرة» في /products/smart-controllers.
 *    لا يُطبَّق على قوائم الحساسات أو الخدمات أو الأسئلة الشائعة أو Schema.
 *
 * اللون ليس الحامل الوحيد للمعنى: لكل حالة نصّ ظاهر ومعنى تعاقدي مكتوب،
 * فتبقى مقروءة عند عمى الألوان أو الطباعة بالأبيض والأسود (WCAG 1.4.1).
 */

export type CapabilityStatusValue =
  | "available"
  | "scoped"
  | "field-test"
  | "wip";

type Meta = { label: string; meaning: string; className: string };

export const CAPABILITY_STATUS_META: Record<CapabilityStatusValue, Meta> = {
  available: {
    label: "متاح الآن",
    meaning: "يمكن التعاقد والتنفيذ عليه اليوم.",
    className:
      "bg-[var(--color-accent-100)] text-[var(--color-accent-800)] border-[var(--color-accent-500)]",
  },
  scoped: {
    label: "حسب نطاق المشروع",
    meaning: "يحتاج دراسة وتجهيزات محددة.",
    className:
      "bg-[var(--color-brand-50)] text-[var(--color-brand-700)] border-[var(--color-brand-400)]",
  },
  "field-test": {
    label: "تجربة ميدانية",
    meaning: "يعمل ضمن اختبار ميداني محدود.",
    className: "bg-amber-50 text-amber-900 border-amber-500",
  },
  wip: {
    label: "قيد التطوير",
    meaning: "غير معروض كتسليم تجاري.",
    className: "bg-[#F3F4F6] text-[#374151] border-[#9CA3AF]",
  },
};

export function CapabilityStatus({
  value,
  id,
}: {
  value: CapabilityStatusValue;
  id?: string;
}) {
  const meta = CAPABILITY_STATUS_META[value];
  return (
    <span
      id={id}
      data-status={value}
      className={`inline-flex items-center rounded-full border px-3 py-1 text-sm font-bold ${meta.className}`}
    >
      {meta.label}
    </span>
  );
}
