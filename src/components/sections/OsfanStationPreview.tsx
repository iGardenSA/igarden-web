import { CTAButton } from "@/components/shared/CTAButton";

const GALLERY = [
  { src: "/images/osfan/preview-1.jpg", alt: "نظام زراعة مائية في محطة عسفان" },
  { src: "/images/osfan/preview-2.jpg", alt: "ورشة ازرع بذكاء — مشاركون يتعرّفون على الأنظمة" },
  { src: "/images/osfan/preview-3.jpg", alt: "نباتات الخس النامية في محطة عسفان" },
  { src: "/images/osfan/preview-4.jpg", alt: "برج iGarden Tower في وضع تشغيل ميداني" },
];

const NUMBERS = [
  { num: "5", label: "ورش «ازرع بذكاء» مُنفَّذة" },
  { num: "متعدد", label: "نماذج أنظمة زراعة مائية" },
  { num: "قيد الاختبار", label: "نماذج Smart Controllers" },
];

export function OsfanStationPreview() {
  return (
    <section className="section-light py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-10">
          <h2 className="h2 text-deep-green mb-4">
            في عسفان، نُجرّب قبل أن نُسلّم
          </h2>
          <p className="body-base text-medium-gray max-w-3xl mx-auto">
            محطّتنا في عسفان ليست مشروعاً عابراً — هي المختبر الميداني حيث نختبر
            كلّ نظام في ظروف السعودية الحقيقية قبل تسليمه لعميل.
          </p>
        </div>

        {/* Gallery — [CONTENT_NEEDED: 4 photos from Osfan] */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {GALLERY.map((img, i) => (
            <div
              key={img.src}
              className="relative aspect-square rounded-card overflow-hidden bg-brand-100 flex items-center justify-center"
              style={{ backgroundImage: `url(${img.src})`, backgroundSize: "cover", backgroundPosition: "center" }}
              role="img"
              aria-label={img.alt}
            >
              <span className="text-brand-300 text-lg text-center p-2 sr-only">
                {img.alt}
              </span>
            </div>
          ))}
        </div>

        {/* Numbers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-center">
          {NUMBERS.map((n) => (
            <div key={n.label}>
              <p className="stat-num mb-2">{n.num}</p>
              <p className="text-deep-green font-medium">{n.label}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <CTAButton href="/osfan-station" variant="lime">
            تعرّف على محطّة عسفان
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
