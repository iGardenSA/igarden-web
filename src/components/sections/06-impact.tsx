import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Stat } from "@/components/ui/stat";
import { FadeIn } from "@/components/ui/fade-in";
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
          <div className="grid grid-cols-2 gap-5 md:gap-6">
            {[
              { value: STATS.waterSavingsMax.value,    unit: "%",   label: "توفير في المياه",    delay: 0 },
              { value: STATS.productivity.value,       unit: "x",   label: "زيادة الإنتاجية",   delay: 80 },
              { value: STATS.fertilizerReduction.value,unit: "%",   label: "خفض الأسمدة",        delay: 160 },
              { value: STATS.opexReduction.value,      unit: "%",   label: "خفض التكاليف",       delay: 240 },
              { value: STATS.energyEfficiency.value,   unit: "%",   label: "كفاءة الطاقة",       delay: 320 },
              { value: STATS.waterRecycle.value,       unit: "%",   label: "إعادة تدوير المياه", delay: 400 },
            ].map((s) => (
              <FadeIn key={s.label} delay={s.delay}>
                <div className="bg-[var(--color-surface)] rounded-2xl p-6 md:p-7 h-full">
                  <Stat value={s.value} unit={s.unit} label={s.label} size="lg" />
                </div>
              </FadeIn>
            ))}
            <FadeIn delay={480} className="col-span-2">
              <div className="bg-[var(--color-brand-600)] text-white rounded-2xl p-6 md:p-7">
                <div className="flex items-baseline gap-2" data-num>
                  <span className="text-5xl md:text-6xl font-extrabold text-[var(--color-accent-300)] leading-none">{STATS.climateTolerance.value}</span>
                  <span className="text-2xl md:text-3xl font-bold">°C+</span>
                </div>
                <p className="text-sm md:text-base text-white/80 mt-3 font-medium">تحمّل مناخي — مصمّمة خصيصاً لصيف المملكة الحار</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
