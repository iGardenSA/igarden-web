import Image from "next/image";
import { CTAButton } from "@/components/shared/CTAButton";

const GALLERY = [
  {
    src: "/images/osfan-full/responsive/04_greenhouse_wide_tablet.webp",
    alt: "منظر داخلي لمحمية iGarden في عسفان — صفوف محاصيل ذكية",
  },
  {
    src: "/images/osfan-full/responsive/05_tomato_tunnel_tablet.webp",
    alt: "نفق الطماطم بنظام Dutch Bucket في محطة iGarden عسفان",
  },
  {
    src: "/images/osfan-full/responsive/03_cabbage_diversity_tablet.webp",
    alt: "تنوّع محاصيل الخضار في منظومة الزراعة المائية بعسفان",
  },
  {
    src: "/images/osfan-full/responsive/02_tower_closeup_tablet.webp",
    alt: "نظام iGarden Tower للزراعة العمودية الهوائية في المحطة",
  },
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

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {GALLERY.map((img) => (
            <div
              key={img.src}
              className="relative aspect-square rounded-card overflow-hidden"
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
