/* بطاقة نصّية بلا إطار صورة — حتى تصل صور الميدان. */
const BLOCKS = [
  {
    label: "التحدّي",
    text: "صالتان إنتاجيتان كان التشغيل فيهما يعتمد بدرجة كبيرة على المتابعة اليدوية، مع غياب سجلّ تشغيل موحّد.",
  },
  {
    label: "ما رُكّب",
    text: "نقاط قياس ومنظومة تحكّم في صالتين، مع إشراف عن بُعد.",
  },
  {
    label: "ما يعمل اليوم",
    text: "ريّ آلي على بيت مزروع منذ يوليو، مع تحكّم وإشراف عن بُعد ضمن نطاق التشغيل الحالي.",
  },
  {
    label: "ما نبنيه الآن",
    text: "طبقة التسميد وبرامج الدورة، وسجلّ التشغيل اليومي.",
  },
] as const;

export function FieldProjectCard() {
  return (
    <section className="bg-[var(--color-surface)] section-padding" dir="rtl">
      <div className="container-igarden">
        <div className="max-w-4xl mx-auto">
          <p className="heading-eyebrow mb-3 text-center">من الميدان</p>

          <div className="bg-white rounded-2xl border border-[var(--color-border)] shadow-[var(--shadow-soft)] p-8 md:p-10">
            <span className="inline-block text-xs font-semibold tracking-wide px-3 py-1.5 rounded-full bg-[var(--color-brand-600)]/10 text-[var(--color-brand-600)] mb-5">
              منشأة زراعية تجارية · المنطقة الشرقية · قيد التنفيذ
            </span>

            <h2 className="text-2xl md:text-3xl font-bold text-deep-green mb-8">
              من متابعة يدوية إلى تشغيل مقاس
            </h2>

            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {BLOCKS.map(({ label, text }) => (
                <div key={label}>
                  <dt className="text-sm font-bold text-[var(--color-accent-600,var(--color-brand-600))] mb-1.5">
                    {label}
                  </dt>
                  <dd className="text-sm text-medium-gray leading-relaxed">{text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
