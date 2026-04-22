import { Award, FileCheck, Building2, Trophy } from "lucide-react";

export function TrustBarSection() {
  const items = [
    { icon: FileCheck, title: "ترخيص استثماري", subtitle: "وزارة الاستثمار", detail: "رقم 24926249716" },
    { icon: Award, title: "نموذج صناعي مسجل", subtitle: "iGarden Tower", detail: "رقم 423450193" },
    { icon: Trophy, title: "Agrofood 2025", subtitle: "المعرض الزراعي", detail: "مشاركة رسمية — جدة" },
    { icon: Building2, title: "شراكات استراتيجية", subtitle: "شركاء مؤسسيون", detail: "حكومي · أكاديمي · تجاري" },
  ];
  return (
    <section className="bg-white border-y border-[var(--color-border)]">
      <div className="container-igarden py-10 md:py-14">
        <p className="text-center text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-muted)] mb-8">
          موثوقية مبنية على التوثيق والشراكات
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex items-center gap-4 md:gap-5 group">
                <div className="shrink-0 h-12 w-12 md:h-14 md:w-14 rounded-xl bg-[var(--color-brand-50)] text-[var(--color-brand-600)] flex items-center justify-center group-hover:bg-[var(--color-accent-500)] group-hover:text-[var(--color-brand-700)] transition-colors">
                  <Icon className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <div className="leading-tight">
                  <p className="text-sm md:text-base font-bold text-[var(--color-brand-600)]">{item.title}</p>
                  <p className="text-xs text-[var(--color-muted)] mt-0.5">{item.subtitle}</p>
                  <p className="text-[11px] text-[var(--color-muted)]/70 mt-0.5 font-medium" dir="ltr">{item.detail}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
