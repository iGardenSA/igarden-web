import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlowAccent } from "@/components/ui/glow-accent";
import { KEY_MESSAGES, STATS } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[var(--color-brand-700)] via-[var(--color-brand-600)] to-[var(--color-brand-500)] text-white">
      {/* طبقة radial gradient أساسية */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, var(--color-accent-500) 0%, transparent 40%), radial-gradient(circle at 80% 70%, var(--color-accent-300) 0%, transparent 40%)",
        }}
      />

      {/* نقاط ضوئية */}
      <GlowAccent position="top-left"     intensity="strong" color="lime"   />
      <GlowAccent position="bottom-right" intensity="medium" color="accent" />

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

        {/* إحصائيات Glass Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mt-14 md:mt-20">
          <HeroStat value={STATS.waterSavingsMax.value} unit="%" label="توفير في المياه" />
          <HeroStat value={STATS.productivity.value}    unit="x" label="زيادة في الإنتاجية" />
          <HeroStat value={STATS.opexReduction.value}   unit="%" label="خفض التكاليف" />
          <HeroStat value={STATS.climateTolerance.value} unit="°C+" label="تحمل مناخي" />
        </div>
      </div>
    </section>
  );
}

function HeroStat({ value, unit, label }: { value: number; unit: string; label: string }) {
  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 md:p-6 shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:bg-white/10 hover:border-white/20 transition-all duration-500 text-center">
      <div className="flex items-baseline gap-1 justify-center" data-num>
        <span className="text-5xl sm:text-6xl font-extrabold text-[var(--color-accent-300)] leading-none">
          {value}
        </span>
        <span className="text-2xl md:text-3xl font-bold text-white/80">{unit}</span>
      </div>
      <div className="w-10 h-0.5 bg-[var(--color-accent-500)] mt-3 mb-2 mx-auto" />
      <p className="text-sm text-white/70">{label}</p>
    </div>
  );
}
