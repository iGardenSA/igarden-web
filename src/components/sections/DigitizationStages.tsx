import { Search, Gauge, SlidersHorizontal, LineChart } from "lucide-react";

const STAGES = [
  {
    num: "١",
    Icon: Search,
    title: "نقرأ مزرعتك",
    text: "زيارة ميدانية، وفحص للبنية القائمة، وتحديد نقاط القياس والتحكّم — وخارطة مراحل مع نطاق وميزانية تقديرية لكل مرحلة.",
  },
  {
    num: "٢",
    Icon: Gauge,
    title: "نقيس",
    text: "حسّاسات وقراءات تصل إلى لوحة واحدة: الريّ، والخزّانات، والمناخ، والمضخّات.",
  },
  {
    num: "٣",
    Icon: SlidersHorizontal,
    title: "نتحكّم ونؤتمت",
    text: "برامج مجدولة، وتشغيل يدوي وعن بُعد، وقواعد وحمايات تمنع الأوامر الخاطئة.",
  },
  {
    num: "٤",
    Icon: LineChart,
    title: "ندير بالبيانات",
    text: "سجلّ تشغيل يومي، وتنبيهات، وتقارير — ومنها نوسّع نحو إدارة المزرعة الكاملة.",
  },
] as const;

export function DigitizationStages() {
  return (
    <section className="bg-white section-padding" dir="rtl">
      <div className="container-igarden">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="heading-eyebrow mb-3">كيف نرقمن تشغيل مزرعتك؟</p>
          <h2 className="heading-section">أربع مراحل، تبدأ من حيث أنت</h2>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {STAGES.map(({ num, Icon, title, text }) => (
            <li
              key={num}
              className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-6 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 shrink-0 rounded-full bg-[var(--color-brand-600)] text-white flex items-center justify-center text-lg font-bold">
                  {num}
                </span>
                <Icon
                  className="w-6 h-6 text-[var(--color-accent-500)]"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-lg font-bold text-deep-green mb-2">{title}</h3>
              <p className="text-sm text-medium-gray leading-relaxed">{text}</p>
            </li>
          ))}
        </ol>

        <p className="text-center body-base text-medium-gray max-w-3xl mx-auto mt-10 leading-relaxed">
          كل مرحلة نطاق تنفيذي مستقلّ، مصمَّمة لتتكامل مع التي تليها. تبدأ بما تحتاجه،
          وتتوسّع حين تجهز.
        </p>
      </div>
    </section>
  );
}
