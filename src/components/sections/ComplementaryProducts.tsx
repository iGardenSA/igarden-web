import { Sprout, Fish } from "lucide-react";
import { CTAButton } from "@/components/shared/CTAButton";

const PRODUCTS = [
  {
    Icon: Sprout,
    title: "Hydroponic Fodder — استنبات الشعير",
    desc: "إنتاج علف أخضر طازج بكفاءة مياه عالية، مثالي لقطاعات الإنتاج الحيواني. توفير 98% من المياه مقارنةً بالزراعة التقليدية.",
    cta: "اطلب استشارة",
    href: "/contact?interest=fodder",
  },
  {
    Icon: Fish,
    title: "Aquaponics — نظام تكاملي سمكي-نباتي",
    desc: "منظومة مغلقة تُنتج الأسماك والخضراوات في تناغم بيئي تامّ. إعادة تدوير 90% من المياه.",
    cta: "اطلب استشارة",
    href: "/contact?interest=aquaponics",
  },
];

export function ComplementaryProducts() {
  return (
    <section className="bg-brand-50 py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-10">
          <p className="text-lime text-xs font-bold uppercase tracking-widest mb-2">
            منتجات تكميلية
          </p>
          <h2 className="h3 text-deep-green">
            محفظتنا أوسع من الركائز الثلاث
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {PRODUCTS.map(({ Icon, title, desc, cta, href }) => (
            <div
              key={title}
              className="bg-white rounded-card p-6 shadow-soft hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-lime/10 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-lime" aria-hidden />
              </div>
              <h3 className="h4 text-deep-green mb-3">{title}</h3>
              <p className="body-sm text-medium-gray mb-4">{desc}</p>
              <CTAButton href={href} variant="outline-green" className="text-sm px-4 py-2">
                {cta}
              </CTAButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
