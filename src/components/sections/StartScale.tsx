import Link from "next/link";
import { ArrowLeft, Sprout, Wrench } from "lucide-react";

type Gate = {
  Icon: typeof Sprout;
  title: string;
  desc: string;
  href: string;
};

/** بوّابتان لا سلّم أحجام — الأفراد يبقون في الشريط الختامي وحده. */
const GATES: Gate[] = [
  {
    Icon: Sprout,
    title: "أؤسّس مشروعاً جديداً",
    desc: "من تحديد الاحتياج والتصميم إلى الإنشاء والتجهيز والتشغيل الأولي.",
    href: "/how-we-work#new-project",
  },
  {
    Icon: Wrench,
    title: "أطوّر منشأة قائمة",
    desc: "من قراءة التشغيل إلى القياس والتحكّم والسجلّ وبيانات التشغيل.",
    href: "/how-we-work#existing-facility",
  },
];

export function StartScale() {
  return (
    <section className="bg-[var(--color-surface)] section-padding" dir="rtl">
      <div className="container-igarden">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="heading-section">من أين تبدأ؟</h2>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {GATES.map(({ Icon, title, desc, href }) => (
            <li key={href}>
              <Link
                href={href}
                className="group flex flex-col h-full rounded-2xl p-8 bg-white border border-[var(--color-border)] shadow-[var(--shadow-soft)] hover:border-[var(--color-accent-500)] transition-all"
              >
                <Icon
                  className="w-10 h-10 text-[var(--color-brand-600)] mb-4"
                  aria-hidden="true"
                />
                <h3 className="text-xl md:text-2xl font-bold text-deep-green mb-3">
                  {title}
                </h3>
                <p className="body-base text-medium-gray leading-relaxed flex-1 mb-6">
                  {desc}
                </p>
                <span className="inline-flex items-center gap-2 min-h-[44px] font-semibold text-[var(--color-brand-600)] group-hover:text-deep-green transition-colors">
                  اطّلع على المسار
                  <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* الجهات الحكومية — رابط ثانوي لا بطاقة مساوية */}
        <p className="text-center text-sm text-medium-gray mt-8">
          جهة حكومية أو برنامج تمويلي؟{" "}
          <Link
            href="/compliance"
            className="underline underline-offset-4 hover:text-[var(--color-brand-600)] transition-colors"
          >
            اطّلع على السجلات وجاهزية الامتثال
          </Link>
        </p>
      </div>
    </section>
  );
}
