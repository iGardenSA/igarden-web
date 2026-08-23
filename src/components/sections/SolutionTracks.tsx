import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Sprout, Cpu, MonitorCog, Sun } from "lucide-react";

type Track = {
  Icon: typeof Sprout;
  num: string;
  title: string;
  text: string;
  href: string;
  cta: string;
  badge?: string;
  img: { src: string; alt: string };
};

const TRACKS: Track[] = [
  {
    Icon: Sprout,
    num: "١",
    title: "نخطّط ونَبني أنظمة الإنتاج",
    text: "للمشاريع الجديدة: دراسة الاحتياج وتخطيط المنظومة، وتصميم وإنشاء وتجهيز البيوت المحمية والزراعة المائية والأبراج الرأسية وأنظمة الاستنبات — حتى التركيب والتشغيل الأولي.",
    href: "/products",
    cta: "اعرف أكثر",
    img: {
      src: "/images/osfan-full/01_tower_visitors.webp",
      alt: "أبراج iGarden للزراعة الرأسية داخل مرفق R&D في عسفان",
    },
  },
  {
    Icon: Cpu,
    num: "٢",
    title: "نؤتمت التشغيل",
    text: "للمنشآت الجديدة والقائمة: الريّ والتسميد والمناخ والمضخّات والمحابس ولوحات التحكّم، ببرامج تشغيل وحمايات تناسب الموقع.",
    href: "/products/smart-controllers",
    cta: "اعرف أكثر",
    img: {
      src: "/images/osfan-full/03_cabbage_diversity.webp",
      alt: "محاصيل خضار تحت مراقبة Smart Controllers داخل مرفق R&D في عسفان",
    },
  },
  {
    Icon: MonitorCog,
    num: "٣",
    title: "نرقمن المزرعة",
    badge: "أولويتنا الحالية",
    text: "للقائمة والجديدة: القياس وSmart OS وبيانات التشغيل والإشراف عن بُعد والسجلّ والتنبيهات والتقارير.",
    href: "/products/smart-os",
    cta: "اعرف أكثر",
    img: {
      src: "/smart-os/dashboard-preview.png",
      alt: "لوحة تشغيل Smart OS — سجلّات وقراءات التشغيل في مكان واحد",
    },
  },
  {
    Icon: Sun,
    num: "٤",
    title: "ندمج الاستدامة",
    text: "حلول طاقة شمسية مساندة، وتحسين كفاءة المياه والطاقة والتشغيل — تُدمج في تصميم المشروع الجديد أو ضمن تطوير منشأة قائمة.",
    href: "/contact?cta=sustainability_solutions",
    cta: "ناقش احتياج مشروعك",
    img: {
      src: "/images/osfan-full/06_inspector_crops.webp",
      alt: "فحص ميداني للمحاصيل داخل مرفق R&D في عسفان",
    },
  },
];

export function SolutionTracks() {
  return (
    <section className="bg-white section-padding" dir="rtl">
      <div className="container-igarden">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="heading-eyebrow mb-3">حلول متكاملة</p>
          <h2 className="heading-section mb-4">
            من التخطيط والإنشاء إلى التشغيل والتحسين
          </h2>
          <p className="body-base text-medium-gray leading-relaxed">
            مشروع جديد أو منشأة قائمة — نصمّم المنظومة كوحدة مترابطة، لا كأجهزة
            وخدمات متفرّقة.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {TRACKS.map(({ Icon, num, title, text, href, cta, badge, img }) => (
            <Link
              key={title}
              href={href}
              className="group bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] overflow-hidden hover:border-[var(--color-accent-500)] transition-colors flex flex-col"
            >
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-9 h-9 shrink-0 rounded-full bg-[var(--color-brand-600)] text-white flex items-center justify-center text-base font-bold">
                    {num}
                  </span>
                  <Icon
                    className="w-6 h-6 text-[var(--color-accent-500)]"
                    aria-hidden="true"
                  />
                  {badge && (
                    <span className="ms-auto text-xs font-semibold px-3 py-1 rounded-full bg-[var(--color-accent-500)]/15 text-[var(--color-brand-600)]">
                      {badge}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-deep-green mb-2">{title}</h3>
                <p className="text-sm text-medium-gray leading-relaxed mb-5 flex-1">
                  {text}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-brand-600)] group-hover:text-deep-green transition-colors">
                  {cta}
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
