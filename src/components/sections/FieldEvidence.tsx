import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

/* بطاقة نصّية بلا إطار صورة — حتى تصل صور الميدان.
   ⛔ صور عسفان أدناه لا تُنسب إلى هذا المشروع. */
const PROJECT_BLOCKS = [
  {
    label: "ما أُنشئ",
    text: "نظام زراعة مائية جديد في صالتين، ومنظومة تحكّم ونقاط قياس.",
  },
  {
    label: "ما يعمل اليوم",
    text: "ريّ آلي على بيت مزروع منذ يوليو، مع تحكّم وإشراف عن بُعد ضمن نطاق التشغيل الحالي.",
  },
  {
    label: "ما نبنيه الآن",
    text: "طبقة التسميد وبرامج الدورة، وسجلّ التشغيل اليومي.",
  },
] as const;

/* صور المرفق — منسوبة صراحةً إلى عسفان. */
const OSFAN_GALLERY = [
  {
    src: "/images/osfan-full/responsive/04_greenhouse_wide_tablet.webp",
    alt: "منظر داخلي لمحمية داخل مرفق R&D في عسفان",
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

export function FieldEvidence() {
  return (
    <section className="bg-[var(--color-surface)] section-padding" dir="rtl">
      <div className="container-igarden">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="heading-eyebrow mb-3">من الميدان</p>
          <h2 className="heading-section">
            ما نبنيه عند العميل، وما نختبره في عسفان
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
          {/* ① المشروع التجاري — نصّي بلا صور */}
          <article className="bg-white rounded-2xl border border-[var(--color-border)] shadow-[var(--shadow-soft)] p-8 h-full">
            <span className="inline-block text-xs font-semibold tracking-wide px-3 py-1.5 rounded-full bg-[var(--color-brand-600)]/10 text-[var(--color-brand-600)] mb-5">
              منشأة زراعية تجارية · المنطقة الشرقية · قيد التنفيذ
            </span>

            <h3 className="text-xl md:text-2xl font-bold text-deep-green mb-4">
              إنشاء نظام زراعة مائية جديد داخل منشأة قائمة
            </h3>

            <p className="body-base text-medium-gray leading-relaxed mb-7">
              مشروع يجمع المسارين: تأسيس نظام إنتاج جديد، وربطه بتشغيل المنشأة
              القائمة بالتحكّم والإشراف عن بُعد.
            </p>

            <dl className="space-y-5">
              {PROJECT_BLOCKS.map(({ label, text }) => (
                <div key={label}>
                  <dt className="text-sm font-bold text-[var(--color-brand-600)] mb-1.5">
                    {label}
                  </dt>
                  <dd className="text-sm text-medium-gray leading-relaxed">{text}</dd>
                </div>
              ))}
            </dl>
          </article>

          {/* ② مرفق عسفان — الصور هنا وحدها */}
          <article className="bg-white rounded-2xl border border-[var(--color-border)] shadow-[var(--shadow-soft)] p-8 h-full">
            <span className="inline-block text-xs font-semibold tracking-wide px-3 py-1.5 rounded-full bg-[var(--color-accent-500)]/15 text-deep-green mb-5">
              مرفق R&amp;D في عسفان · شمال جدة
            </span>

            <h3 className="text-xl md:text-2xl font-bold text-deep-green mb-4">
              حيث نختبر قبل أن نركّب عندك
            </h3>

            <p className="body-base text-medium-gray leading-relaxed mb-6">
              نطوّر فيه المنظومات ونختبرها في ظروف تشغيل حقيقية، ونستقبل زيارات
              تقنية وعروضاً ميدانية للمنشآت والجهات.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-4">
              {OSFAN_GALLERY.map((img) => (
                <div
                  key={img.src}
                  className="relative aspect-square rounded-xl overflow-hidden"
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
            <p className="text-xs text-medium-gray">
              صور من مرفق R&amp;D في عسفان — لا تُنسب إلى مشروع عميل.
            </p>
          </article>
        </div>

        {/* CTA وحيد للقسم */}
        <div className="text-center mt-10">
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
