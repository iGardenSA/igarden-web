import Link from "next/link";
import { Sprout, Fish, Building2, Leaf, ArrowLeft } from "lucide-react";

type Solution = {
  Icon: typeof Sprout;
  title: string;
  desc: string;
  cta: string;
  href: string;
};

const SOLUTIONS: Solution[] = [
  {
    Icon: Sprout,
    title: "غرف الاستنبات والأعلاف الخضراء",
    desc: "وحدات استنبات مغلقة لإنتاج علف أخضر طازج على مدار السنة، تُصمَّم حسب حجم القطيع ودورة التغذية.",
    cta: "ناقش نطاق مشروعك",
    href: "/contact?interest=fodder&cta=request_quote",
  },
  {
    Icon: Fish,
    title: "Aquaponics والاستزراع المائي المدمج",
    desc: "منظومة مغلقة تجمع الاستزراع السمكي والإنتاج النباتي في دورة واحدة، بنطاق يُحدَّد حسب الموقع والمحصول المستهدف.",
    cta: "ناقش نطاق مشروعك",
    href: "/contact?interest=aquaponics&cta=request_quote",
  },
  {
    Icon: Building2,
    title: "الزراعة الرأسية والجدارية",
    desc: "أبراج وأنظمة رأسية وجدارية للمساحات المحدودة والبيئات الحضرية، تُدمج مع التحكّم والقياس حسب النطاق.",
    cta: "ناقش نطاق مشروعك",
    href: "/contact?interest=tower&cta=request_quote",
  },
  {
    Icon: Leaf,
    title: "الزراعة المائية العضوية وBioponics",
    desc: "التطبيق العضوي الميداني متاح ضمن نطاق المشروع. أمّا Bioponics — التغذية من مصادر حيوية بالكامل — فهو مسار قيد التطوير في مرفق R&D في عسفان، ولا يُعرض كحلّ جاهز للتسليم.",
    cta: "ناقش نطاق مشروعك",
    href: "/contact?interest=hydroponics&cta=bioponics_inquiry",
  },
];

export function SpecializedSolutions() {
  return (
    <section className="bg-brand-50 py-16" id="specialized">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-10">
          <h2 className="h2 text-deep-green mb-3">حلول متخصصة حسب المشروع</h2>
          <p className="body-base text-medium-gray max-w-2xl mx-auto">
            أنظمة تُبنى عند وجود احتياج محدّد، خارج العائلات الأربع الأساسية.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SOLUTIONS.map(({ Icon, title, desc, cta, href }) => (
            <article
              key={title}
              className="bg-white rounded-card p-6 shadow-soft flex flex-col"
            >
              <span className="w-12 h-12 rounded-full bg-deep-green flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-bright-lime" aria-hidden />
              </span>
              <h3 className="text-lg font-bold text-deep-green mb-2 leading-snug">
                {title}
              </h3>
              <p className="body-sm text-medium-gray flex-1 mb-4">{desc}</p>
              <Link
                href={href}
                className="inline-flex items-center gap-1 text-lime hover:text-deep-green font-medium transition-colors"
              >
                {cta}
                <ArrowLeft className="w-4 h-4" aria-hidden />
              </Link>
            </article>
          ))}
        </div>

        <p className="text-center text-medium-gray body-sm mt-8 max-w-2xl mx-auto">
          للأفراد: الأنظمة المنزلية والمواد القياسية عبر{" "}
          <Link href="/home-solutions" className="text-lime hover:text-deep-green font-medium">
            حلول المنزل
          </Link>{" "}
          و
          <a
            href="https://shop.igarden.sa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lime hover:text-deep-green font-medium"
          >
            shop.igarden.sa
          </a>
          .
        </p>
      </div>
    </section>
  );
}
