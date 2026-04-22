import { MessageCircle, PencilRuler, Wrench, Activity } from "lucide-react";

export function ProcessSection() {
  const steps = [
    { number: "01", icon: MessageCircle, title: "استشارة مجانية", description: "نلتقي معك لفهم احتياجاتك — المساحة، نوع المحصول، الميزانية، الأهداف الإنتاجية — خلال جلسة استشارية مجانية (حضورية أو عن بُعد)." },
    { number: "02", icon: PencilRuler, title: "تصميم مخصّص", description: "فريقنا الهندسي يُعدّ تصميماً تفصيلياً خاصاً بمشروعك: اختيار المنتج المناسب، دراسة جدوى مبدئية، وخطة تركيب واضحة." },
    { number: "03", icon: Wrench, title: "تركيب وتشغيل", description: "نُنفّذ التركيب في موقعك بأيدي فنيين مدرّبين، ونُفعّل منظومة iGarden Cloud، ونُجري أول دورة تشغيل تجريبية لضمان الجودة." },
    { number: "04", icon: Activity, title: "متابعة ودعم", description: "علاقة طويلة المدى — مراقبة عن بُعد عبر السحابة، صيانة دورية، دعم فني مستمر، وتدريب فريقك عبر iGarden Knowledge." },
  ];
  return (
    <section className="bg-[var(--color-surface)] section-padding">
      <div className="container-igarden">
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <p className="heading-eyebrow mb-4">كيف نعمل</p>
          <h2 className="heading-section mb-6">من أول تواصل حتى حصادك الأول</h2>
          <p className="text-lg text-[var(--color-muted)] leading-relaxed">أربع مراحل واضحة — بلا مفاجآت، بلا تكاليف خفية.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative">
                <div className="relative bg-white rounded-2xl p-6 md:p-7 border border-[var(--color-border)] h-full flex flex-col hover:border-[var(--color-accent-500)] transition-colors">
                  <div className="flex items-start justify-between mb-5">
                    <div className="h-14 w-14 rounded-2xl bg-[var(--color-brand-600)] text-[var(--color-accent-300)] flex items-center justify-center shadow-[var(--shadow-soft)]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-3xl font-extrabold text-[var(--color-brand-100)] leading-none" data-num>{step.number}</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-[var(--color-brand-600)] mb-3">{step.title}</h3>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
