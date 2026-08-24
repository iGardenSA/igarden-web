import Link from "next/link";

export type RelatedLink = { label: string; desc: string; href: string };

/**
 * مسارات ذات صلة — روابط صاعدة داخلية.
 * العرض مشترك؛ مصفوفة الوجهات تبقى خاصّة بكل صفحة.
 * ⛔ كل الوجهات منشورة قائمة — لا صفحات ولا مقالات جديدة.
 */
export function RelatedPaths({
  links,
  title = "مسارات ذات صلة",
  intro = "تابع من هنا حسب سؤالك التالي.",
}: {
  links: RelatedLink[];
  title?: string;
  intro?: string;
}) {
  return (
    <section className="section-light py-16" dir="rtl">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="h3 text-deep-green mb-2 text-center">{title}</h2>
        <p className="body-sm text-medium-gray text-center mb-8 max-w-2xl mx-auto">
          {intro}
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="flex flex-col gap-1 min-h-[44px] bg-white rounded-card border border-light-gray p-5 shadow-soft hover:border-lime transition-colors h-full"
              >
                <span className="font-bold text-deep-green">{l.label}</span>
                <span className="body-sm text-medium-gray">{l.desc}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
