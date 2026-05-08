import Link from "next/link";
import { Cpu, Building2, Droplets } from "lucide-react";

const PILLARS = [
  {
    Icon: Cpu,
    badge: "Flagship · صناعة سعودية",
    titleAr: "لوحات التحكّم الذكية",
    titleEn: "Smart Controllers",
    headline: "حوّل أيّ مزرعة قائمة إلى ذكية",
    desc: "اربط لوحاتنا بنظامك الحالي — لا تَستبدل معدّاتك. قراءة pH/EC/حرارة كل ٣٠ ثانية، تنبيهات على جوّالك، وقطع غيار محلية.",
    metric: "208 اختبار وحدوي ناجح",
    cta: "كيف تَربط لوحتك؟",
    href: "/products/smart-controllers",
    bgClass: "bg-brand-600",
  },
  {
    Icon: Building2,
    badge: "للمزارع التجارية",
    titleAr: "المحميات الذكية",
    titleEn: "Smart Greenhouses",
    headline: "محميات تَحمي إنتاجك من الصيف",
    desc: "هياكل مقاومة لرياح الخليج، أتمتة IoT كاملة، وتحكّم مناخي مُختبَر تحت +45°C. كفاءة طاقة 40% بحسب التصميم والمحصول.",
    metric: "+45°C اختُبرت في عسفان",
    cta: "اطلب عرضاً مخصّصاً",
    href: "/products/smart-greenhouses",
    bgClass: "bg-brand-500",
  },
  {
    Icon: Droplets,
    badge: "يَشمل iGarden Tower المُسجَّل SAIP",
    titleAr: "أنظمة الزراعة المائية",
    titleEn: "Hydroponic Systems",
    headline: "نَختار لك التقنية الأنسب",
    desc: "٧ تقنيات (NFT, DWC, Drip, Aeroponics, Tower…) — نَختار الأنسب لمحصولك ومساحتك وميزانيتك. حتى ٩٥٪ توفير مياه و٣× إنتاجية.",
    metric: "SAIP #423450193",
    cta: "أيّ تقنية تُناسب محصولك؟",
    href: "/products/hydroponics",
    bgClass: "bg-corp-green",
  },
];

export function ThreePillarsSection() {
  return (
    <section className="bg-white py-20" id="pillars">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-lime text-lg font-bold uppercase tracking-widest mb-3">
            الركائز الثلاث
          </p>
          <h2 className="h2 text-deep-green mb-4">
            اختَر مَدخلك حسب وضعك الحالي
          </h2>
          <p className="body-base text-medium-gray max-w-2xl mx-auto">
            تَبدأ من نقطة واحدة في مزرعتك، ثم نُوسّع المنظومة موسماً بعد موسم —
            كلّ ركيزة مُختبَرة في عسفان قبل أن تَصلك.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {PILLARS.map((p) => (
            <article
              key={p.titleEn}
              className="bg-cream rounded-card overflow-hidden shadow-soft hover:shadow-md transition-shadow flex flex-col"
            >
              <div
                className={`relative aspect-[4/3] ${p.bgClass} flex items-center justify-center overflow-hidden`}
              >
                <span className="absolute top-4 right-4 bg-lime text-white text-sm font-medium px-3 py-1 rounded-full max-w-[80%] text-right">
                  {p.badge}
                </span>
                <p.Icon className="w-24 h-24 text-white/15" aria-hidden />
                <span className="absolute bottom-4 left-4 text-white/60 text-sm font-medium font-latin">
                  {p.metric}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <p className="text-medium-gray text-sm mb-1 font-latin">
                  {p.titleEn}
                </p>
                <h3 className="h3 text-deep-green mb-2">{p.titleAr}</h3>
                <p className="body-base text-deep-green font-medium mb-3">
                  {p.headline}
                </p>
                <p className="body-base text-medium-gray flex-1 mb-4">
                  {p.desc}
                </p>
                <Link
                  href={p.href}
                  className="text-lime font-medium hover:text-deep-green transition-colors inline-flex items-center gap-1"
                >
                  {p.cta} <span aria-hidden>←</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
