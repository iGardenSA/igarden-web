import Link from "next/link";
import Image from "next/image";
import { Sprout, Cpu, MonitorCog, Sun, ArrowLeft } from "lucide-react";

type FamilyLink = { label: string; href: string };

type Family = {
  Icon: typeof Sprout;
  num: string;
  title: string;
  text: string;
  badge?: string;
  note?: string;
  links: FamilyLink[];
  cta?: { label: string; href: string };
  /** أصل مؤقّت — تمريرة الصور النهائية تأتي بعد تثبيت الهيكل.
   *  للجرد: rg 'imageStatus: "temporary"' */
  img: { src: string; alt: string; imageStatus: "temporary" };
};

const FAMILIES: Family[] = [
  {
    Icon: Sprout,
    num: "١",
    title: "أنظمة الإنتاج",
    text: "تخطيط منظومة الإنتاج وتصميمها وتجهيزها — للمشاريع الجديدة وللتوسّعات داخل منشأة قائمة.",
    links: [
      { label: "المحميات الزراعية", href: "/products/smart-greenhouses" },
      { label: "أنظمة الزراعة المائية", href: "/products/hydroponics" },
      { label: "الأبراج الرأسية", href: "/contact?interest=tower&cta=request_quote" },
      { label: "أنظمة الاستنبات", href: "/contact?interest=fodder&cta=request_quote" },
    ],
    img: {
      src: "/images/osfan-full/01_tower_visitors.webp",
      alt: "أبراج زراعة رأسية داخل مرفق R&D في عسفان",
      imageStatus: "temporary",
    },
  },
  {
    Icon: Cpu,
    num: "٢",
    title: "التحكم والأتمتة",
    text: "لوحات التحكّم والقياس وبرامج التشغيل والحمايات — تُركَّب على منظومة جديدة أو تُضاف إلى معدّات قائمة.",
    note: "يشمل الريّ والتسميد والمناخ والمضخّات والمحابس حسب نطاق المشروع.",
    links: [
      { label: "Smart Controllers", href: "/products/smart-controllers" },
      { label: "القياس وإنترنت الأشياء", href: "/products/iot" },
    ],
    img: {
      src: "/images/osfan-full/03_cabbage_diversity.webp",
      alt: "محاصيل خضار تحت القياس والتحكّم داخل مرفق R&D في عسفان",
      imageStatus: "temporary",
    },
  },
  {
    Icon: MonitorCog,
    num: "٣",
    title: "رقمنة تشغيل المزرعة",
    badge: "أولويتنا الحالية",
    text: "بيانات التشغيل في مكان واحد — للمنشآت القائمة وللمشاريع الجديدة على السواء.",
    note: "القياس، الإشراف عن بُعد، التنبيهات والتقارير.",
    links: [
      { label: "Smart OS", href: "/products/smart-os" },
      { label: "السجلات والامتثال", href: "/compliance" },
    ],
    img: {
      src: "/smart-os/dashboard-preview.png",
      alt: "لوحة تشغيل Smart OS — قراءات وسجلّات التشغيل في مكان واحد",
      imageStatus: "temporary",
    },
  },
  {
    Icon: Sun,
    num: "٤",
    title: "الاستدامة وكفاءة التشغيل",
    text: "حلول المياه والطاقة الشمسية المساندة وكفاءة التشغيل.",
    note: "تُدمج حسب احتياج المشروع، لا كحزمة ثابتة.",
    links: [],
    cta: {
      label: "ناقش احتياج مشروعك",
      href: "/contact?cta=sustainability_solutions",
    },
    img: {
      src: "/images/osfan-full/06_inspector_crops.webp",
      alt: "فحص ميداني للمحاصيل داخل مرفق R&D في عسفان",
      imageStatus: "temporary",
    },
  },
];

export function PortfolioFamilies() {
  return (
    <section className="bg-white py-20" id="families">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-lime text-lg font-bold uppercase tracking-widest mb-2">
            المحفظة
          </p>
          <h2 className="h2 text-deep-green">أربع عائلات تُبنى حسب نطاق مشروعك</h2>
          <p className="body-base text-medium-gray max-w-2xl mx-auto mt-3">
            يمكن أن يبدأ النطاق بعائلة واحدة ثم يتوسّع، أو أن يُصمَّم متكاملاً من
            البداية.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {FAMILIES.map(({ Icon, num, title, text, badge, note, links, cta, img }) => (
            <article
              key={title}
              className="bg-cream rounded-card shadow-soft overflow-hidden flex flex-col"
            >
              <div className="relative w-full aspect-[16/9]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <span className="w-11 h-11 rounded-full bg-deep-green flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-bright-lime" aria-hidden />
                  </span>
                  <span className="text-lime font-bold text-lg">{num}</span>
                  <h3 className="text-xl font-bold text-deep-green leading-snug">
                    {title}
                  </h3>
                  {badge && (
                    <span className="bg-lime text-white text-xs font-bold px-2.5 py-0.5 rounded-pill shrink-0">
                      {badge}
                    </span>
                  )}
                </div>

                <p className="body-sm text-medium-gray mb-3">{text}</p>
                {note && (
                  <p className="body-sm text-medium-gray/80 mb-4">{note}</p>
                )}

                {links.length > 0 && (
                  <ul className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-light-gray">
                    {links.map((l) => (
                      <li key={l.href}>
                        <Link
                          href={l.href}
                          className="inline-flex items-center gap-1 min-h-[44px] bg-white text-deep-green hover:text-lime border border-light-gray rounded-pill px-4 py-2.5 text-sm font-medium transition-colors"
                        >
                          {l.label}
                          <ArrowLeft className="w-3.5 h-3.5" aria-hidden />
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}

                {cta && (
                  <div className="mt-auto pt-4 border-t border-light-gray">
                    <Link
                      href={cta.href}
                      className="inline-flex items-center gap-1 min-h-[44px] py-2 text-lime hover:text-deep-green font-medium transition-colors"
                    >
                      {cta.label}
                      <ArrowLeft className="w-4 h-4" aria-hidden />
                    </Link>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
