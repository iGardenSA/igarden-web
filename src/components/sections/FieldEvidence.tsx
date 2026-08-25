import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

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

/* صور مشروع ميداني في الأحساء — مجموعة مستقلة تماماً عن مجموعة عسفان.
   ⛔ قاعدة حاكمة: لا تُخلط داخل `OSFAN_GALLERY` ولا تُنسب إلى عسفان، ولا تُقدَّم
   كمشروع مكتمل أو مُسلَّم أو كنتيجة إنتاجية — هي مشاهد تجهيز وتركيب فقط.
   ⛔ ولا يُذكر اسم العميل أو الجهة في أيّ نصّ مرئي أو alt.
   الحالة: preview-candidate — موثّقة في docs/IMAGE-ASSET-MANIFEST.md */
const AL_AHSA_GALLERY = [
  {
    src: "/images/projects/al-ahsa/al-ahsa-towers-installation.webp",
    alt: "أبراج زراعة رأسية أثناء التجهيز في مشروع ميداني بالأحساء",
  },
  {
    src: "/images/projects/al-ahsa/al-ahsa-greenhouse-layout.webp",
    alt: "تجهيز صفوف الزراعة داخل محمية لمشروع ميداني بالأحساء",
  },
  {
    src: "/images/projects/al-ahsa/al-ahsa-drip-irrigation-detail.webp",
    alt: "تفصيل شبكة الري بالتنقيط داخل مشروع ميداني بالأحساء",
  },
] as const;

export function FieldEvidence() {
  return (
    <section className="bg-[var(--color-surface)] section-padding" dir="rtl">
      <div className="container-igarden">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="heading-eyebrow mb-3">من الميدان</p>
          <h2 className="heading-section mb-5">
            مشاريع نؤسّسها ومنشآت نطوّرها
          </h2>
          <p className="body-base text-medium-gray leading-relaxed">
            نؤسّس أنظمة إنتاج زراعي جديدة، ونطوّر منشآت قائمة بالتحكّم والأتمتة
            وبيانات التشغيل — في عدّة مناطق سعودية.
            <br />
            ومرفق R&amp;D في عسفان مفتوح للزيارات التقنية.
          </p>
        </div>

        {/* صور المرفق وحده.
            ⛔ قاعدة حاكمة: هذه الصور تُنسب إلى مرفق R&D في عسفان حصراً،
            ولا يجوز تقديمها كصور مشاريع عملاء. القاعدة موثّقة أيضاً في
            docs/SITE-ARCHITECTURE.md — ⛔ ولا تُكتب في النصّ المرئي. */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl mx-auto mb-4">
          {OSFAN_GALLERY.map((img) => (
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
        <p className="text-center text-xs text-medium-gray mb-12">
          مشاهد من مرفق R&amp;D في عسفان · شمال جدة
        </p>

        {/* مجموعة الأحساء — مستقلة بعنوانها ونسبتها، بمقاس عمودي يميّزها بصرياً
            عن شبكة عسفان المربّعة. ⛔ لا تُدمج المصفوفتان. */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="text-center mb-5">
            <h3 className="text-xl md:text-2xl font-bold text-deep-green mb-2">
              تنفيذ ميداني في الأحساء
            </h3>
            <p className="body-sm text-medium-gray leading-relaxed max-w-2xl mx-auto">
              مشاهد من تجهيز وتركيب أنظمة الإنتاج والري داخل مشروع ميداني، دون
              إظهار اسم العميل.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {AL_AHSA_GALLERY.map((img) => (
              <figure key={img.src} className="m-0">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-corp-green">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 33vw, 280px"
                  />
                </div>
              </figure>
            ))}
          </div>
          <p className="text-center text-xs text-medium-gray mt-4">
            مشاهد تجهيز وتركيب من مشروع ميداني في الأحساء
          </p>
        </div>

        <div className="text-center">
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
