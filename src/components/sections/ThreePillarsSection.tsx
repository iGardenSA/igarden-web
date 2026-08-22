import Link from "next/link";
import Image from "next/image";

const PILLARS = [
  {
    badge: "رأس الحربة التقني · صناعة سعودية",
    title: "Smart Controllers",
    desc: "لوحات تحكم زراعية بصناعتنا. تُربط بأيّ نظام قائم وتُراقب pH وEC والحرارة لحظياً.",
    href: "/products/smart-controllers",
    img: { src: "/images/osfan-full/03_cabbage_diversity.webp", alt: "محاصيل خضار تحت مراقبة Smart Controllers في مرفق R&D في عسفان" },
  },
  {
    badge: null,
    title: "Smart Greenhouses",
    desc: "محميات ذكية مُختبَرة ميدانياً في حرارة عسفان المرتفعة وتُؤتمت بالكامل. كفاءة طاقة محسّنة وتحكّم مناخي دقيق.",
    href: "/products/smart-greenhouses",
    img: { src: "/images/osfan-full/04_greenhouse_wide.webp", alt: "منظر داخلي لمحمية ذكية في محطة iGarden عسفان" },
  },
  {
    badge: "يشمل iGarden Tower — منتجنا المسجَّل",
    title: "Hydroponic Systems",
    desc: "7 تقنيات زراعة مائية + برج iGarden المُسجَّل SAIP. كفاءة مائية عالية مُختبَرة في عسفان.",
    href: "/products/hydroponics",
    img: { src: "/images/osfan-full/02_tower_closeup.webp", alt: "نظام iGarden Tower للزراعة العمودية — مُختبَر في مرفق R&D في عسفان" },
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
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={p.img.src}
                  alt={p.img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-deep-green/20" aria-hidden />
                {p.badge && (
                  <span className="absolute top-4 right-4 bg-lime text-white text-sm font-medium px-3 py-1 rounded-full z-10">
                    {p.badge}
                  </span>
                )}
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
