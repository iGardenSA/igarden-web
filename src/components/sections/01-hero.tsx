import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { KEY_MESSAGES, STATS } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[var(--color-brand-600)] via-[var(--color-brand-500)] to-[var(--color-brand-600)] text-white">
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, var(--color-accent-500) 0%, transparent 40%), radial-gradient(circle at 80% 70%, var(--color-accent-300) 0%, transparent 40%)",
        }}
      />
      <div className="container-igarden relative py-12 md:py-20 lg:py-28">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-accent-500)]/30 bg-[var(--color-accent-500)]/10 text-[var(--color-accent-300)] text-sm font-semibold mb-8">
            <ShieldCheck className="h-4 w-4" />
            <span>مرخّصة من وزارة الاستثمار · جدة</span>
          </div>
          <p className="heading-eyebrow mb-6 text-[var(--color-accent-300)]">AgriTech · IoT · AI</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-white mb-6">
            {KEY_MESSAGES.hero}
          </h1>
          <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl mb-10">
            منظومة متكاملة من الزراعة المائية (Hydroponics) والاستزراع السمكي (Aquaponics) والزراعة الهوائية (Aeroponics)، مدعومة بالذكاء الاصطناعي وإنترنت الأشياء — ومصممة محلياً لمناخ المملكة.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="accent" size="xl" asChild>
              <Link href="/contact">احجز استشارة مجانية<ArrowLeft className="rotate-180" /></Link>
            </Button>
            <Button variant="light" size="xl" asChild>
              <Link href="#solutions">اكتشف الحلول</Link>
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 md:mt-20 pt-10 border-t border-white/15">
          <HeroStat value={STATS.waterSavingsMax.value} unit="%" label="توفير في المياه" />
          <HeroStat value={STATS.productivity.value} unit="x" label="زيادة في الإنتاجية" />
          <HeroStat value={STATS.opexReduction.value} unit="%" label="خفض التكاليف" />
          <HeroStat value={STATS.climateTolerance.value} unit="°C+" label="تحمل مناخي" />
        </div>
      </div>
    </section>
  );
}

function HeroStat({ value, unit, label }: { value: number; unit: string; label: string }) {
  return (
    <div className="text-center md:text-start">
      <div className="flex items-baseline gap-1 justify-center md:justify-start" data-num>
        <span className="text-4xl md:text-5xl font-extrabold text-[var(--color-accent-300)] leading-none">{value}</span>
        <span className="text-xl md:text-2xl font-bold text-white/90">{unit}</span>
      </div>
      <p className="text-sm text-white/70 mt-2">{label}</p>
    </div>
  );
}
