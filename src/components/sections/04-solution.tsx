import { Cpu, Cloud, GraduationCap, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { KEY_MESSAGES } from "@/lib/constants";

export function SolutionSection() {
  const pillars = [
    { badge: "hardware" as const, badgeLabel: "HARDWARE", icon: Cpu, title: "العتاد الذكي", description: "أبراج Aeroponic، بيوت محمية، أنظمة Aquaponics، وشبكة حساسات دقيقة لقياس pH و TDS ودرجة الحرارة بدقة متناهية.", points: ["مصمّم محلياً لمناخ المملكة (+45°C)", "نموذج صناعي مسجل", "تركيب وصيانة في الموقع"] },
    { badge: "software" as const, badgeLabel: "SOFTWARE", icon: Cloud, title: "منصة iGarden Cloud", description: "لوحة تحكم سحابية مركزية مع تحليلات تنبؤية بالذكاء الاصطناعي، تنبيهات لحظية، وتكامل API مع أنظمة ERP.", points: ["تحكم كامل من أي مكان", "تنبؤ بالمحاصيل والأمراض (AI)", "تقارير قابلة للتصدير"] },
    { badge: "knowledge" as const, badgeLabel: "KNOWLEDGE", icon: GraduationCap, title: "iGarden Knowledge", description: "برامج إرشاد فني وتدريب متخصص للمزارعين والشركاء الحكوميين والأكاديميين لضمان أعلى كفاءة تشغيل.", points: ["إرشاد تقني مستمر", "دورات تدريبية عملية", "شراكات أكاديمية"] },
  ];
  return (
    <section id="solutions" className="bg-white section-padding">
      <div className="container-igarden">
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <p className="heading-eyebrow mb-4">ميزتنا التنافسية</p>
          <h2 className="heading-section mb-6">{KEY_MESSAGES.competitive}</h2>
          <p className="text-lg text-[var(--color-muted)] leading-relaxed">منظومة واحدة متكاملة تُغنيك عن تعدد الموردين — كل مكوّن مصمّم ليعمل مع البقية بأعلى كفاءة ممكنة.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className="bg-white rounded-2xl border border-[var(--color-border)] p-7 md:p-8 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-md)] hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div className="h-14 w-14 rounded-2xl bg-[var(--color-brand-50)] text-[var(--color-brand-600)] flex items-center justify-center">
                    <Icon className="h-7 w-7" />
                  </div>
                  <Badge variant={p.badge}>{p.badgeLabel}</Badge>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[var(--color-brand-600)] mb-3">{p.title}</h3>
                <p className="text-sm md:text-base text-[var(--color-muted)] leading-relaxed mb-6">{p.description}</p>
                <ul className="space-y-2.5 mt-auto pt-5 border-t border-[var(--color-border)]">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-sm">
                      <Check className="h-4 w-4 shrink-0 mt-0.5 text-[var(--color-accent-500)]" />
                      <span className="text-[var(--color-foreground)]">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
