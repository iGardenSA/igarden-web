import Link from "next/link";
import { Sprout, Wrench } from "lucide-react";

/** مساران متوازيان — ⛔ لا تفضيل بصري لأحدهما ولا رابط صغير يعوّض الاختلال. */
const PATHS = [
  {
    Icon: Sprout,
    title: "مشروع جديد",
    href: "/how-we-work#new-project",
    steps: [
      "تحديد الاحتياج",
      "تصميم المنظومة",
      "الإنشاء والتجهيز",
      "التشغيل الأولي",
    ],
  },
  {
    Icon: Wrench,
    title: "منشأة قائمة",
    href: "/how-we-work#existing-facility",
    steps: [
      "قراءة التشغيل",
      "تحديد القياس",
      "التحكّم والأتمتة",
      "السجلّ وبيانات التشغيل",
    ],
  },
] as const;

export function DeliveryPaths() {
  return (
    <section className="bg-white section-padding" dir="rtl">
      <div className="container-igarden">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="heading-eyebrow mb-3">طريقة التنفيذ</p>
          <h2 className="heading-section">مساران يبدآن من حيث أنت</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {PATHS.map(({ Icon, title, href, steps }) => (
            <Link
              key={href}
              href={href}
              className="group flex flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-[var(--shadow-soft)] hover:border-[var(--color-accent-500)] transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-11 h-11 rounded-full bg-[var(--color-brand-600)] flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-white" aria-hidden="true" />
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-deep-green">
                  {title}
                </h3>
              </div>

              <ol className="space-y-3">
                {steps.map((step, i) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="shrink-0 w-7 h-7 rounded-full bg-white border border-[var(--color-border)] text-[var(--color-brand-600)] text-sm font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <span className="body-base text-medium-gray pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
