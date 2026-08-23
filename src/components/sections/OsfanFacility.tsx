import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

const GALLERY = [
  {
    src: "/images/osfan-full/responsive/04_greenhouse_wide_tablet.webp",
    alt: "منظر داخلي لمحمية iGarden في عسفان — صفوف محاصيل ذكية",
  },
  {
    src: "/images/osfan-full/responsive/05_tomato_tunnel_tablet.webp",
    alt: "نفق الطماطم بنظام Dutch Bucket في مرفق R&D في عسفان",
  },
  {
    src: "/images/osfan-full/responsive/03_cabbage_diversity_tablet.webp",
    alt: "تنوّع محاصيل الخضار في منظومة الزراعة المائية بعسفان",
  },
  {
    src: "/images/osfan-full/responsive/02_tower_closeup_tablet.webp",
    alt: "نظام iGarden Tower للزراعة العمودية الهوائية في مرفق R&D في عسفان",
  },
] as const;

export function OsfanFacility() {
  return (
    <section className="bg-[var(--color-surface)] section-padding" dir="rtl">
      <div className="container-igarden">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="heading-section mb-5">
            مرفق R&amp;D في عسفان — حيث نختبر قبل أن نركّب عندك
          </h2>
          <p className="body-base text-medium-gray leading-relaxed mb-8">
            شمال جدة. نطوّر فيه المنظومات ونختبرها في ظروف تشغيل حقيقية، ونستقبل
            زيارات تقنية وعروضاً ميدانية للمنشآت والجهات.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
            {GALLERY.map((img) => (
              <div
                key={img.src}
                className="relative aspect-square rounded-2xl overflow-hidden"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>

          <Link
            href="/contact?interest=osfan-visit&cta=osfan_visit_request"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-[#7CB342] hover:bg-[#A5D63F] text-[#0F3D2E] font-semibold transition-colors"
          >
            اطلب زيارة تقنية إلى عسفان
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
