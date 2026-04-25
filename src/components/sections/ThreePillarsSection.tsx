import Link from "next/link";

const PILLARS = [
  {
    badge: "Flagship · صناعة سعودية",
    title: "Smart Controllers",
    desc: "لوحات تحكم زراعية بصناعتنا. تُربط بأيّ نظام قائم وتُراقب pH وEC والحرارة لحظياً.",
    href: "/products/smart-controllers",
    bgClass: "bg-brand-600",
  },
  {
    badge: null,
    title: "Smart Greenhouses",
    desc: "محميات ذكية تصمد في +45°C وتُؤتمت بالكامل. كفاءة طاقة 40% وتحكّم مناخي دقيق.",
    href: "/products/smart-greenhouses",
    bgClass: "bg-brand-500",
  },
  {
    badge: "يشمل iGarden Tower — منتجنا المسجَّل",
    title: "Hydroponic Systems",
    desc: "7 تقنيات زراعة مائية + برج iGarden المُسجَّل SAIP. توفير 95% من المياه.",
    href: "/products/hydroponics",
    bgClass: "bg-corp-green",
  },
];

export function ThreePillarsSection() {
  return (
    <section className="bg-white py-20" id="pillars">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="h2 text-deep-green mb-4">
            ثلاث ركائز · منصّة منتجات متكاملة
          </h2>
          <p className="body-base text-medium-gray max-w-2xl mx-auto">
            لكلّ مرحلة من مراحل مزرعتك — حلٌّ مُختَبَر في عسفان.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {PILLARS.map((p) => (
            <article
              key={p.title}
              className="bg-cream rounded-card overflow-hidden shadow-soft hover:shadow-md transition-shadow flex flex-col"
            >
              {/* Image placeholder [CONTENT_NEEDED] */}
              <div
                className={`relative aspect-[4/3] ${p.bgClass} flex items-center justify-center`}
              >
                {p.badge && (
                  <span className="absolute top-4 right-4 bg-lime text-white text-xs font-medium px-3 py-1 rounded-full">
                    {p.badge}
                  </span>
                )}
                <span className="text-white/40 text-sm">
                  {/* [CONTENT_NEEDED: card image] */}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="h3 text-deep-green mb-2 font-latin">{p.title}</h3>
                <p className="body-base text-medium-gray flex-1 mb-4">{p.desc}</p>
                <Link
                  href={p.href}
                  className="text-lime font-medium hover:text-deep-green transition-colors"
                >
                  استكشف ←
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
