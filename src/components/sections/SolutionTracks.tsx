import Link from "next/link";
import { ArrowLeft, Network, Cpu, Sprout, MonitorCog } from "lucide-react";

const TRACKS = [
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
  },
  {
    Icon: Sprout,
    title: "أنظمة الإنتاج",
    text: "أنظمة زراعة مائية وبيوت محمية وأبراج رأسية، تشمل نموذج iGarden Tower المسجّل لدى SAIP.",
    href: "/products/hydroponics",
  },
  {
    Icon: MonitorCog,
    title: "Smart OS وجاهزية الامتثال",
    text: "لوحة تشغيل موحّدة، وسجلّات تدعم الجاهزية لمتطلبات Saudi GAP.",
    href: "/products/smart-os",
  },
] as const;

export function SolutionTracks() {
  return (
    <section className="bg-white section-padding" dir="rtl">
      <div className="container-igarden">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="heading-eyebrow mb-3">الحلول</p>
          <h2 className="heading-section">ما الذي نبنيه معك</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {TRACKS.map(({ Icon, title, text, href }) => (
            <Link
              key={title}
              href={href}
              className="group bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-7 hover:border-[var(--color-accent-500)] transition-colors flex flex-col"
            >
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
