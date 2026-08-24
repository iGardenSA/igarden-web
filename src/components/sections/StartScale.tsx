import Link from "next/link";
import { ArrowLeft, Home, Sprout, Building2, Landmark } from "lucide-react";

type Step = {
  Icon: typeof Home;
  title: string;
  desc: string;
  href: string;
  emphasis?: boolean;
};

/** سلّم نقطة البداية — الثقل البصري على «منشأة تجارية». */
const STEPS: Step[] = [
  {
    Icon: Home,
    title: "نظام منزلي",
    desc: "تبدأ بنظام صغير في المنزل أو الاستراحة.",
    href: "/home-solutions",
  },
  {
    Icon: Sprout,
    title: "مزرعة صغيرة",
    desc: "لديك إنتاج قائم وتريد توسيعه أو ضبطه.",
    href: "/products",
  },
  {
    Icon: Building2,
    title: "منشأة تجارية",
    desc: "تشغيل يومي بفريق ومسؤوليات — وتحتاج وضوحاً في القرار.",
    href: "/how-we-work",
    emphasis: true,
  },
  {
    Icon: Landmark,
    title: "مشروع مؤسسي",
    desc: "نطاق أكبر يجمع الإنتاج والتحكّم والبيانات في منظومة واحدة.",
    href: "/products",
  },
];

export function StartScale() {
  return (
    <section className="bg-[var(--color-surface)] section-padding" dir="rtl">
      <div className="container-igarden">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="heading-section mb-5">أين تقف اليوم؟</h2>
          <p className="body-base text-medium-gray leading-relaxed">
            حين يعتمد التشغيل على حضور شخص واحد، يصبح الغياب فجوة في المعرفة.
            وحين تتغيّر ظروف الصيف وتبقى القرارات بلا سجلّ، يصعب معرفة ما حدث.
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {STEPS.map(({ Icon, title, desc, href, emphasis }) => (
            <li key={title} className={emphasis ? "lg:-mt-3" : ""}>
              <Link
                href={href}
                className={[
                  "group flex flex-col h-full rounded-2xl p-7 transition-all",
                  emphasis
                    ? "bg-white border-2 border-[var(--color-accent-500)] shadow-[var(--shadow-soft)] lg:py-9"
                    : "bg-white border border-[var(--color-border)] shadow-[var(--shadow-soft)] hover:border-[var(--color-accent-500)]",
                ].join(" ")}
              >
                <Icon
                  className={
                    emphasis
                      ? "w-10 h-10 text-[var(--color-brand-600)] mb-4"
                      : "w-8 h-8 text-[var(--color-brand-600)] mb-4"
                  }
                  aria-hidden="true"
                />
                <h3
                  className={
                    emphasis
                      ? "text-xl md:text-2xl font-bold text-deep-green mb-2"
                      : "text-lg font-bold text-deep-green mb-2"
                  }
                >
                  {title}
                </h3>
                <p className="body-sm text-medium-gray leading-relaxed flex-1 mb-5">
                  {desc}
                </p>
                <span className="inline-flex items-center gap-2 min-h-[44px] font-semibold text-[var(--color-brand-600)] group-hover:text-deep-green transition-colors">
                  ابدأ من هنا
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
