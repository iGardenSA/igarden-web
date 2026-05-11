import Link from "next/link";
import { BadgeCheck, Brain, Cpu } from "lucide-react";

const CARDS = [
  {
    Icon: BadgeCheck,
    title: "شركة ريادية مُرخّصة",
    description:
      "بترخيص استثمار ريادي من وزارة الاستثمار، ضمن منظومة ريادة الأعمال السعودية.",
    meta: "CR: 7041878278 · MISA: 24926249716",
    link: null,
    accent: "text-lime",
  },
  {
    Icon: Brain,
    title: "ذكاء اصطناعي للزراعة المحلية",
    description:
      "نُطوّر منصة Smart OS بقدرات تحليلية مُكيَّفة للبيئة السعودية، مُختبَرة ميدانياً في مرفق عسفان.",
    meta: null,
    link: { label: "اكتشف المنصة", href: "/products/smart-os" },
    accent: "text-lime",
  },
  {
    Icon: Cpu,
    title: "إنترنت الأشياء الزراعي",
    description:
      "حلول IoT متكاملة: استشعار، تحكّم، وتحليل بيانات في الوقت الفعلي للمزارع التجارية والصناعية.",
    meta: null,
    link: { label: "استكشف العتاد", href: "/products/iot" },
    accent: "text-lime",
  },
] as const;

export function OperationalIdentity() {
  return (
    <section className="section-light py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-lime text-sm font-bold uppercase tracking-widest mb-2">
            هويتنا التشغيلية
          </p>
          <h2 className="h2 text-deep-green">شركة سعودية ريادية — ماذا يعني ذلك؟</h2>
          <p className="body-base text-medium-gray max-w-2xl mx-auto mt-3">
            ليست مجرد لافتة — هي التزام بالاختبار الميداني، والتوطين الحقيقي،
            والعمل ضمن الإطار التنظيمي السعودي.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CARDS.map(({ Icon, title, description, meta, link }) => (
            <div
              key={title}
              className="bg-white rounded-card border border-light-gray shadow-soft p-7 flex flex-col hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-deep-green/5 flex items-center justify-center mb-5">
                <Icon className="w-6 h-6 text-deep-green" aria-hidden />
              </div>
              <h3 className="h4 text-deep-green mb-3">{title}</h3>
              <p className="body-sm text-medium-gray mb-4 flex-1">{description}</p>
              {meta && (
                <p className="text-xs font-mono text-medium-gray/60 mb-3">{meta}</p>
              )}
              {link && (
                <Link
                  href={link.href}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-lime hover:text-deep-green transition-colors mt-auto"
                >
                  {link.label} ←
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
