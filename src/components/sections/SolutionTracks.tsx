import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Network, Cpu, Sprout, MonitorCog } from "lucide-react";

type Track = {
  Icon: typeof Network;
  title: string;
  text: string;
  href: string;
  img?: { src: string; alt: string };
};

const TRACKS: Track[] = [
  {
    Icon: Network,
    title: "رقمنة تشغيل المزرعة",
    text: "المظلّة: قياس وتحكّم وبيانات تشغيل فوق مزرعة قائمة — بلا استبدال شامل.",
    href: "/products",
  },
  {
    Icon: Cpu,
    title: "التحكّم والأتمتة",
    text: "ريّ وتسميد ومناخ ومضخّات ومحابس، بجدولة وتشغيل عن بُعد.",
    href: "/products/smart-controllers",
    img: {
      src: "/images/osfan-full/03_cabbage_diversity.webp",
      alt: "محاصيل خضار تحت مراقبة Smart Controllers داخل مرفق R&D في عسفان",
    },
  },
  {
    Icon: Sprout,
    title: "أنظمة الإنتاج",
    text: "أنظمة زراعة مائية وبيوت محمية وأبراج رأسية، تشمل نموذج iGarden Tower المسجّل لدى SAIP.",
    href: "/products/hydroponics",
    img: {
      src: "/images/osfan-full/02_tower_closeup.webp",
      alt: "نظام iGarden Tower للزراعة العمودية — مُختبَر داخل مرفق R&D في عسفان",
    },
  },
  {
    Icon: MonitorCog,
    title: "Smart OS وجاهزية الامتثال",
    text: "لوحة تشغيل موحّدة، وسجلّات تدعم الجاهزية لمتطلبات Saudi GAP.",
    href: "/products/smart-os",
  },
];

export function SolutionTracks() {
  return (
    <section className="bg-white section-padding" dir="rtl">
      <div className="container-igarden">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="heading-eyebrow mb-3">الحلول</p>
          <h2 className="heading-section">ما الذي نبنيه معك</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {TRACKS.map(({ Icon, title, text, href, img }) => (
            <Link
              key={title}
              href={href}
              className="group bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] overflow-hidden hover:border-[var(--color-accent-500)] transition-colors flex flex-col"
            >
              {img && (
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              )}
              <div className="p-7 flex flex-col flex-1">
              <Icon
                className="w-8 h-8 text-[var(--color-brand-600)] mb-4"
                aria-hidden="true"
              />
              <h3 className="text-lg font-bold text-deep-green mb-2">{title}</h3>
              <p className="text-sm text-medium-gray leading-relaxed mb-5 flex-1">
                {text}
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-brand-600)] group-hover:text-deep-green transition-colors">
                اعرف أكثر
                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
