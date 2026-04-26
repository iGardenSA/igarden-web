import Link from "next/link";
import { BookOpen, Rss, Mail } from "lucide-react";

const CARDS = [
  {
    Icon: BookOpen,
    tag: "أكاديمية iGarden",
    title: "تعلّم الزراعة المائية من الصفر",
    desc: "دورات مُبسَّطة، أدلّة فنية، ووثائق تشغيل مجانية — لكلّ من يريد البدء بثقة.",
    href: "/learn",
    cta: "اكتشف الأكاديمية",
  },
  {
    Icon: Rss,
    tag: "المدوّنة",
    title: "مقالات مبنية على تجارب ميدانية حقيقية",
    desc: "نشارك ما تعلّمناه في عسفان — من فشل الأنظمة إلى نجاح المحاصيل — بلا تجميل.",
    href: "/blog",
    cta: "اقرأ المدوّنة",
  },
  {
    Icon: Mail,
    tag: "النشرة الأسبوعية",
    title: "حكمة الحقل — كلّ أسبوع في بريدك",
    desc: "نصائح عملية، أخبار القطاع، وحالات دراسية من مزارعينا. لا spam، فقط قيمة.",
    href: "/contact?interest=newsletter",
    cta: "اشترك مجاناً",
  },
];

export function KnowledgeSection() {
  return (
    <section className="section-light py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-lime text-lg font-bold uppercase tracking-widest mb-2">
            نُشارك ما نعرفه
          </p>
          <h2 className="h2 text-deep-green">المعرفة جزء من المنتج</h2>
          <p className="body-base text-medium-gray max-w-2xl mx-auto mt-3">
            نُؤمن أنّ المزارع الناجح هو المزارع المتعلّم. لهذا نُتيح معرفتنا مجاناً.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CARDS.map(({ Icon, tag, title, desc, href, cta }) => (
            <article
              key={title}
              className="bg-white rounded-card p-6 shadow-soft hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="w-12 h-12 rounded-full bg-lime/10 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-lime" aria-hidden />
              </div>
              <p className="text-lime text-lg font-bold uppercase tracking-widest mb-2">{tag}</p>
              <h3 className="h4 text-deep-green mb-3 flex-1">{title}</h3>
              <p className="body-sm text-medium-gray mb-4">{desc}</p>
              <Link
                href={href}
                className="text-lime font-medium hover:text-deep-green transition-colors text-lg mt-auto"
              >
                {cta} ←
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
