import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Stat } from "@/components/ui/stat";
import { STATS, KEY_MESSAGES } from "@/lib/constants";

export function ImpactSection() {
  return (
    <section className="bg-white section-padding">
      <div className="container-igarden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="lg:sticky lg:top-28">
            <p className="heading-eyebrow mb-4">الأثر بالأرقام</p>
            <h2 className="heading-section mb-6">{KEY_MESSAGES.trust}</h2>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-6">
              كل رقم هنا مأخوذ من تشغيل فعلي لأنظمتنا — لا أرقام تسويقية مجرّدة. هذه قاعدة الثقة التي نبني عليها كل شراكة.
            </p>
            <p className="text-base text-[var(--color-muted)] leading-relaxed mb-8">
              الهدف ليس الأرقام بحد ذاتها — الهدف هو <span className="text-[var(--color-brand-600)] font-bold">أمن غذائي مستدام</span>، <span className="text-[var(--color-brand-600)] font-bold">موارد محفوظة</span>، و<span className="text-[var(--color-brand-600)] font-bold">استدامة اقتصادية قابلة للقياس</span>.
            </p>
            <Button variant="primary" size="lg" asChild>
              <Link href="/about">تعرّف على قصتنا<ArrowLeft className="rotate-180" /></Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-6 md:gap-8">
            <div className="bg-[var(--color-surface)] rounded-2xl p-6 md:p-7"><Stat value={STATS.waterSavingsMax.value} unit="%" label="توفير في المياه" size="lg" /></div>
            <div className="bg-[var(--color-surface)] rounded-2xl p-6 md:p-7"><Stat value={STATS.productivity.value} unit="x" label="زيادة الإنتاجية" size="lg" /></div>
            <div className="bg-[var(--color-surface)] rounded-2xl p-6 md:p-7"><Stat value={STATS.fertilizerReduction.value} unit="%" label="خفض الأسمدة" size="lg" /></div>
            <div className="bg-[var(--color-surface)] rounded-2xl p-6 md:p-7"><Stat value={STATS.opexReduction.value} unit="%" label="خفض التكاليف" size="lg" /></div>
            <div className="bg-[var(--color-surface)] rounded-2xl p-6 md:p-7"><Stat value={STATS.energyEfficiency.value} unit="%" label="كفاءة الطاقة" size="lg" /></div>
            <div className="bg-[var(--color-surface)] rounded-2xl p-6 md:p-7"><Stat value={STATS.waterRecycle.value} unit="%" label="إعادة تدوير المياه" size="lg" /></div>
            <div className="bg-[var(--color-brand-600)] text-white rounded-2xl p-6 md:p-7 col-span-2">
              <div className="flex items-baseline gap-2" data-num>
                <span className="text-5xl md:text-6xl font-extrabold text-[var(--color-accent-300)] leading-none">{STATS.climateTolerance.value}</span>
                <span className="text-2xl md:text-3xl font-bold">°C+</span>
              </div>
              <p className="text-sm md:text-base text-white/80 mt-3 font-medium">تحمّل مناخي — مصمّمة خصيصاً لصيف المملكة الحار</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
