/**
 * سطر نشر مرئي لمقالات /learn — الكاتب وتاريخ النشر.
 * التاريخ يُصاغ بأرقام لاتينية ومعزول الاتجاه كي لا ينقلب في سياق RTL،
 * ويحمل <time dateTime> بصيغة ISO لقارئ الآلة.
 */
const MONTHS = [
  "يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو",
  "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر",
];

export function ArticleByline({
  datePublished,
  className = "",
}: {
  datePublished: string;
  className?: string;
}) {
  const [y, m, d] = datePublished.split("-");
  const label = `${Number(d)} ${MONTHS[Number(m) - 1]} ${y}`;
  return (
    <p className={`flex flex-wrap items-center gap-x-2 gap-y-1 text-sm ${className}`}>
      <span>فريق iGarden</span>
      <span aria-hidden="true">·</span>
      <span>نُشر في</span>
      <time dateTime={datePublished} dir="ltr" className="ltr-inline">
        {label}
      </time>
    </p>
  );
}
