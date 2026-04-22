import { Droplets, Thermometer, TrendingDown, Sprout } from "lucide-react";

export function ProblemSection() {
  const challenges = [
    { icon: Droplets, stat: "84%", title: "من المياه للزراعة", description: "أكثر من 84% من استهلاك المياه في المملكة يذهب للقطاع الزراعي — بينما تتناقص الموارد الجوفية بسرعة." },
    { icon: Thermometer, stat: "+45°C", title: "صيف قاسٍ يوقف الإنتاج", description: "درجات حرارة الصيف تُعطّل الزراعة التقليدية لأشهر، وتستنزف كلفة التبريد والطاقة في البيوت المحمية غير الذكية." },
    { icon: TrendingDown, stat: "80%", title: "اعتماد على الاستيراد", description: "تستورد المملكة نحو 80% من احتياجاتها الغذائية — فجوة تهدد الأمن الغذائي وتضغط على الاقتصاد." },
    { icon: Sprout, stat: "1x", title: "إنتاجية محدودة بالمساحة", description: "الزراعة التقليدية الأفقية تحدّ الإنتاجية بمساحة الأرض المتاحة، ولا تستفيد من البُعد الرأسي." },
  ];
  return (
    <section className="bg-[var(--color-surface)] section-padding">
      <div className="container-igarden">
        <div className="max-w-3xl mb-14 md:mb-16">
          <p className="heading-eyebrow mb-4">التحدي</p>
          <h2 className="heading-section mb-6">الزراعة التقليدية<br /><span className="text-[var(--color-muted)]">لم تعد تكفي.</span></h2>
          <p className="text-lg text-[var(--color-muted)] leading-relaxed">
            رؤية 2030 وضعت الأمن الغذائي هدفاً استراتيجياً — لكن التحديات المناخية وشح المياه والاعتماد على الاستيراد يجعلون التحوّل الرقمي الزراعي ضرورة، لا خياراً.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {challenges.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="bg-white rounded-2xl p-6 md:p-7 border border-[var(--color-border)] hover:border-[var(--color-brand-300)] transition-colors">
                <div className="h-12 w-12 rounded-xl bg-[var(--color-brand-50)] text-[var(--color-brand-600)] flex items-center justify-center mb-5">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="text-4xl md:text-5xl font-extrabold text-[var(--color-brand-600)] leading-none mb-3" data-num>{item.stat}</p>
                <h3 className="text-base md:text-lg font-bold text-[var(--color-brand-600)] mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
