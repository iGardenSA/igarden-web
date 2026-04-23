import { Droplets, Thermometer, TrendingDown, Sprout, AlertTriangle } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

const featuredChallenge = {
  icon: AlertTriangle,
  stat: "70%",
  title: "تفشل خلال 3 سنوات",
  description:
    "من المزارع الصغيرة والمتوسطة تتعثر وتخرج من السوق خلال السنوات الثلاث الأولى — فجوة يجب سدّها لحماية الأمن الغذائي الوطني.",
};

const challenges = [
  { icon: Droplets,    stat: "84%",   title: "من المياه للزراعة",        description: "أكثر من 84% من استهلاك المياه في المملكة يذهب للقطاع الزراعي — بينما تتناقص الموارد الجوفية بسرعة." },
  { icon: Thermometer, stat: "+45°C", title: "صيف قاسٍ يوقف الإنتاج",   description: "درجات حرارة الصيف تُعطّل الزراعة التقليدية لأشهر، وتستنزف كلفة التبريد والطاقة في البيوت المحمية غير الذكية." },
  { icon: TrendingDown, stat: "80%",  title: "اعتماد على الاستيراد",     description: "تستورد المملكة نحو 80% من احتياجاتها الغذائية — فجوة تهدد الأمن الغذائي وتضغط على الاقتصاد." },
  { icon: Sprout,      stat: "1x",    title: "إنتاجية محدودة بالمساحة", description: "الزراعة التقليدية الأفقية تحدّ الإنتاجية بمساحة الأرض المتاحة، ولا تستفيد من البُعد الرأسي." },
];

export function ProblemSection() {
  const FeaturedIcon = featuredChallenge.icon;
  return (
    <section className="relative bg-[var(--color-surface)] section-padding overflow-hidden">
      {/* انتقال ناعم من قسم Achievements الأخضر */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[var(--color-brand-600)]/10 to-transparent pointer-events-none"
      />

      <div className="container-igarden">
        <div className="max-w-3xl mb-12 md:mb-14">
          <p className="heading-eyebrow mb-4">التحدي</p>
          <h2 className="heading-section mb-6">
            الزراعة التقليدية<br />
            <span className="text-[var(--color-muted)]">لم تعد تكفي.</span>
          </h2>
          <p className="text-lg text-[var(--color-muted)] leading-relaxed">
            رؤية 2030 وضعت الأمن الغذائي هدفاً استراتيجياً — لكن التحديات المناخية وشح المياه والاعتماد على الاستيراد يجعلون التحوّل الرقمي الزراعي ضرورة، لا خياراً.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {/* البطاقة البارزة — 70% تأخذ العرض الكامل */}
          <FadeIn className="col-span-1 md:col-span-2 lg:col-span-4">
            <div className="relative overflow-hidden bg-[var(--color-brand-600)] text-white rounded-2xl p-7 md:p-9 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 80% 50%, var(--color-accent-500) 0%, transparent 60%)",
                }}
              />
              <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 flex-1">
                <div className="shrink-0">
                  <div className="h-14 w-14 rounded-2xl bg-[var(--color-accent-500)]/20 text-[var(--color-accent-300)] flex items-center justify-center">
                    <FeaturedIcon className="h-7 w-7" />
                  </div>
                </div>
                <div className="flex-1">
                  <p
                    className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-[var(--color-accent-300)] leading-none mb-3"
                    data-num
                  >
                    {featuredChallenge.stat}
                  </p>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {featuredChallenge.title}
                  </h3>
                  <p className="text-base text-white/85 leading-relaxed max-w-2xl">
                    {featuredChallenge.description}
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* البطاقات الأربع الأخرى */}
          {challenges.map((item, i) => {
            const Icon = item.icon;
            return (
              <FadeIn key={item.title} delay={(i + 1) * 100}>
                <div className="bg-white rounded-2xl p-6 md:p-7 border border-[var(--color-border)] hover:border-[var(--color-brand-300)] transition-colors h-full">
                  <div className="h-12 w-12 rounded-xl bg-[var(--color-brand-50)] text-[var(--color-brand-600)] flex items-center justify-center mb-5">
                    <Icon className="h-6 w-6" />
                  </div>
                  <p
                    className="text-4xl md:text-5xl font-extrabold text-[var(--color-brand-600)] leading-none mb-3"
                    data-num
                  >
                    {item.stat}
                  </p>
                  <h3 className="text-base md:text-lg font-bold text-[var(--color-brand-600)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
