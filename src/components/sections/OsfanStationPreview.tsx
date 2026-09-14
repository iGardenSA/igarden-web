import Link from "next/link";
import { ArrowLeft, MapPin, Clock, Users } from "lucide-react";

/* ────────────────────────────────────────────────────────────────
   عرض الزيارة — شريط مضغوط مباشرة تحت الهيرو (SALES-3 · 2026-09-14).
   السبب: الطلبات الحقيقية كلّها جاءت من نموذج الزيارة في /osfan-station،
   والرئيسية لم تكن تصل إليه إطلاقاً. العرض هنا فعل ملموس (زيارة مجانية،
   تشاهد الأنظمة تعمل) لا «تقييم» مجرّد.
   ⛔ لا أرقام مطلقة (Tier 0) · المصطلح المقفل #5: «مرفق R&D في عسفان».
   ⛔ لا معرض صور هنا — معرض عسفان في FieldEvidence، والهيرو نفسه مشاهد المرفق.
   ──────────────────────────────────────────────────────────────── */

const FACTS = [
  { icon: MapPin, text: "عسفان · شمال جدة" },
  { icon: Clock, text: "زيارة مجانية — بموعد تختاره" },
  { icon: Users, text: "تلتقي الفريق وتسأل بلا قيود" },
] as const;

export function OsfanStationPreview() {
  return (
    <section
      aria-labelledby="osfan-visit-offer"
      className="bg-[var(--color-surface)] border-b border-[var(--color-border)]"
      dir="rtl"
    >
      <div className="container-igarden py-8 md:py-10">
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
          <div className="flex-1">
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent-600)] mb-2">
              ابدأ بما تراه بعينك
            </p>
            <h2
              id="osfan-visit-offer"
              className="text-2xl md:text-3xl font-extrabold text-deep-green leading-tight mb-3"
            >
              احجز زيارة إلى مرفق R&D في عسفان — تشاهد الأنظمة تعمل
            </h2>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm md:text-base text-medium-gray">
              {FACTS.map(({ icon: Icon, text }) => (
                <li key={text} className="inline-flex items-center gap-2">
                  <Icon className="w-4 h-4 text-[#7CB342]" aria-hidden="true" />
                  {text}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
            <Link
              href="/osfan-station#احجز-زيارة"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-[#7CB342] hover:bg-[#A5D63F] text-[#0F3D2E] font-bold transition-colors"
            >
              احجز موعد الزيارة
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link
              href="/osfan-station"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg border-2 border-deep-green/20 text-deep-green font-semibold hover:border-deep-green transition-colors"
            >
              ماذا سترى في المرفق
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
