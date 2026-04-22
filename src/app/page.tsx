import Link from "next/link";
import { ArrowLeft, Cpu, Cloud, GraduationCap, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Stat } from "@/components/ui/stat";
import { Badge } from "@/components/ui/badge";
import { KEY_MESSAGES, STATS } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      {/* ============================================================
          Hero Section
          ============================================================ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--color-brand-600)] via-[var(--color-brand-500)] to-[var(--color-brand-600)] text-white">
        {/* خلفية تزيينية ناعمة */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, var(--color-accent-500) 0%, transparent 40%), radial-gradient(circle at 80% 70%, var(--color-accent-300) 0%, transparent 40%)",
          }}
        />

        <div className="container-igarden relative section-padding">
          <div className="max-w-4xl">
            <p className="heading-eyebrow mb-6 text-[var(--color-accent-300)]">
              AgriTech · IoT · AI
            </p>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-white mb-6">
              {KEY_MESSAGES.hero}
            </h1>

            <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl mb-10">
              منظومة متكاملة من الزراعة المائية (Hydroponics) والاستزراع السمكي
              (Aquaponics) والزراعة الهوائية (Aeroponics)، مدعومة بالذكاء الاصطناعي
              وإنترنت الأشياء — ومصممة محلياً لمناخ المملكة.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="accent" size="xl" asChild>
                <Link href="/contact">
                  احجز استشارة مجانية
                  <ArrowLeft className="rotate-180" />
                </Link>
              </Button>
              <Button variant="light" size="xl" asChild>
                <Link href="/solutions">اكتشف الحلول</Link>
              </Button>
            </div>
          </div>

          {/* شريط الإحصائيات */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 md:mt-20 pt-10 border-t border-white/15">
            <HeroStat value={STATS.waterSavingsMax.value} unit="%" label="توفير في المياه" />
            <HeroStat value={STATS.productivity.value} unit="x" label="زيادة في الإنتاجية" />
            <HeroStat value={STATS.opexReduction.value} unit="%" label="خفض التكاليف" />
            <HeroStat value={STATS.climateTolerance.value} unit="°C+" label="تحمل مناخي" />
          </div>
        </div>
      </section>

      {/* ============================================================
          ميزتنا التنافسية: 3 في 1
          ============================================================ */}
      <section className="section-padding bg-[var(--color-surface)]">
        <div className="container-igarden">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="heading-eyebrow mb-4">ميزتنا التنافسية</p>
            <h2 className="heading-section mb-6">{KEY_MESSAGES.competitive}</h2>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed">
              منظومة واحدة تجمع كل ما تحتاجه المزرعة الذكية الحديثة — من العتاد إلى
              السحابة إلى المعرفة.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <PillarCard
              badge="HARDWARE"
              icon={<Cpu className="h-6 w-6" />}
              title="العتاد الذكي"
              description="أبراج Aeroponic، بيوت محمية، أنظمة Aquaponics، شبكة حساسات دقيقة لقياس pH و TDS ودرجة الحرارة."
              variant="hardware"
            />
            <PillarCard
              badge="SOFTWARE"
              icon={<Cloud className="h-6 w-6" />}
              title="منصة سحابية"
              description="iGarden Cloud — لوحة تحكم مركزية مع تحليلات تنبؤية بالذكاء الاصطناعي، تنبيهات لحظية، وتكامل API مع ERP."
              variant="software"
            />
            <PillarCard
              badge="KNOWLEDGE"
              icon={<GraduationCap className="h-6 w-6" />}
              title="المعرفة والإرشاد"
              description="iGarden Knowledge — برامج تدريب وإرشاد فني للمزارعين والشركاء الأكاديميين والحكوميين."
              variant="knowledge"
            />
          </div>
        </div>
      </section>

      {/* ============================================================
          الأثر بالأرقام
          ============================================================ */}
      <section className="section-padding bg-white">
        <div className="container-igarden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="heading-eyebrow mb-4">الأثر بالأرقام</p>
              <h2 className="heading-section mb-6">{KEY_MESSAGES.trust}</h2>
              <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-8">
                كل عدد هنا مأخوذ من تشغيل فعلي لأنظمتنا — لا أرقام تسويقية مجردة. هذه
                هي قاعدة الثقة التي نبني عليها كل شراكة.
              </p>
              <Button variant="primary" size="lg" asChild>
                <Link href="/about">
                  تعرف على قصتنا
                  <ArrowLeft className="rotate-180" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6 md:gap-8">
              <Stat value={STATS.waterSavingsMax.value} unit="%" label="توفير في المياه" />
              <Stat value={STATS.fertilizerReduction.value} unit="%" label="خفض الأسمدة" />
              <Stat value={STATS.energyEfficiency.value} unit="%" label="كفاءة الطاقة" />
              <Stat value={STATS.waterRecycle.value} unit="%" label="إعادة تدوير المياه" />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA النهائي
          ============================================================ */}
      <section className="container-igarden pb-16 md:pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-[var(--color-brand-600)] text-white p-10 md:p-16">
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 90% 50%, var(--color-accent-500) 0%, transparent 50%)",
            }}
          />
          <div className="relative max-w-2xl">
            <Leaf className="h-10 w-10 text-[var(--color-accent-300)] mb-6" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
              جاهز لبدء رحلتك في الزراعة الذكية؟
            </h2>
            <p className="text-lg text-white/85 mb-8">
              احجز استشارة مجانية مع فريقنا التقني، وسنصمم لك حلاً يناسب موقعك ومناخك
              وأهدافك الإنتاجية.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="accent" size="xl" asChild>
                <Link href="/contact">احجز استشارة الآن</Link>
              </Button>
              <Button variant="light" size="xl" asChild>
                <Link href="/products">تصفح المنتجات</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ----- مكونات داخلية ----- */

function HeroStat({
  value,
  unit,
  label,
}: {
  value: number;
  unit: string;
  label: string;
}) {
  return (
    <div className="text-center md:text-start">
      <div className="flex items-baseline gap-1 justify-center md:justify-start" data-num>
        <span className="text-4xl md:text-5xl font-extrabold text-[var(--color-accent-300)] leading-none">
          {value}
        </span>
        <span className="text-xl md:text-2xl font-bold text-white/90">{unit}</span>
      </div>
      <p className="text-sm text-white/70 mt-2">{label}</p>
    </div>
  );
}

function PillarCard({
  badge,
  icon,
  title,
  description,
  variant,
}: {
  badge: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  variant: "hardware" | "software" | "knowledge";
}) {
  return (
    <Card className="h-full p-2">
      <CardHeader>
        <div className="flex items-center justify-between mb-4">
          <div className="h-12 w-12 rounded-xl bg-[var(--color-brand-50)] text-[var(--color-brand-600)] flex items-center justify-center">
            {icon}
          </div>
          <Badge variant={variant}>{badge}</Badge>
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
