import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";

/* العناوين حرفياً من metadata كل مقال على القرص (بلا لاحقة العلامة « | iGarden»). */
const ARTICLES = [
  {
    href: "/learn/when-do-you-need-smart-controller",
    title: "متى تحتاج مزرعتك إلى Smart Controller؟",
  },
  {
    href: "/learn/why-hydroponic-fail-summer",
    title: "لماذا تفشل بعض أنظمة الزراعة المائية في الصيف؟",
  },
  {
    href: "/learn/daily-measurements-smart-farm",
    title: "ما الذي يجب قياسه يومياً في المزرعة الذكية؟",
  },
  {
    href: "/learn/operational-logs-farm-decisions",
    title: "كيف تساعد سجلات التشغيل في تحسين قرارات المزرعة؟",
  },
  {
    href: "/learn/hydroponic-vs-traditional",
    title: "الفرق بين الزراعة المائية والزراعة التقليدية",
  },
] as const;

export function KnowledgeGrid() {
  return (
    <section className="bg-white section-padding" dir="rtl">
      <div className="container-igarden">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="heading-eyebrow mb-3">المعرفة</p>
          <h2 className="heading-section">قبل أن تشتري — اقرأ</h2>
        </div>

        {/* شبكة تسع خمس بطاقات: ثلاث ثمّ اثنتان */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {ARTICLES.map(({ href, title }) => (
            <li key={href}>
              <Link
                href={href}
                className="group h-full flex flex-col bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-6 hover:border-[var(--color-accent-500)] transition-colors"
              >
                <BookOpen
                  className="w-6 h-6 text-[var(--color-brand-600)] mb-4"
                  aria-hidden="true"
                />
                <h3 className="text-base font-bold text-deep-green leading-snug flex-1">
                  {title}
                </h3>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-brand-600)] group-hover:text-deep-green transition-colors mt-4">
                  اقرأ المقال
                  <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
