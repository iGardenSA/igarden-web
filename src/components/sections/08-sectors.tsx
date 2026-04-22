import Link from "next/link";
import { Landmark, Store, GraduationCap, TrendingUp, ArrowLeft } from "lucide-react";

export function SectorsSection() {
  const sectors = [
    { icon: Landmark, title: "القطاع الحكومي", description: "مشاريع الأمن الغذائي، البلديات، الوزارات، والمؤسسات التعليمية — حلول بمواصفات اعتمادية تلبّي أعلى المعايير.", useCases: ["أمن غذائي", "مشاريع توعوية", "حدائق مدرسية ذكية"] },
    { icon: Store, title: "القطاع التجاري", description: "المزارع التجارية، الفنادق، المطاعم، وسلاسل التجزئة — إنتاج موثوق وسلسلة تبريد أقصر من المزرعة للطاولة.", useCases: ["مزارع عمودية", "إنتاج للفنادق", "سلاسل البيع"] },
    { icon: GraduationCap, title: "القطاع الأكاديمي", description: "الجامعات ومراكز الأبحاث — مختبرات تجريبية، شراكات بحثية، وتطوير مناهج الزراعة الذكية للجيل القادم.", useCases: ["مختبرات بحثية", "شراكات علمية", "تدريب طلابي"] },
    { icon: TrendingUp, title: "المستثمرون والشركاء", description: "فرص استثمار في منظومة AgriTech سعودية صاعدة ضمن رؤية 2030 — عوائد مستدامة وأثر بيئي قابل للقياس.", useCases: ["شراكات توسعية", "فرص استثمار", "امتيازات تجارية"] },
  ];
  return (
    <section className="bg-white section-padding">
      <div className="container-igarden">
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <p className="heading-eyebrow mb-4">قطاعات نخدمها</p>
          <h2 className="heading-section mb-6">حلول مُصمّمة لكل قطاع</h2>
          <p className="text-lg text-[var(--color-muted)] leading-relaxed">من المشاريع الحكومية الكبرى إلى الشركاء الأكاديميين والمستثمرين — نُصمّم الحل بما يناسب احتياجاتك.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {sectors.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="group bg-[var(--color-surface)] rounded-2xl p-7 md:p-8 border border-transparent hover:border-[var(--color-brand-300)] hover:bg-white transition-all duration-300">
                <div className="flex items-start gap-5">
                  <div className="shrink-0 h-14 w-14 rounded-2xl bg-[var(--color-brand-600)] text-[var(--color-accent-300)] flex items-center justify-center">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[var(--color-brand-600)] mb-3">{s.title}</h3>
                    <p className="text-sm md:text-base text-[var(--color-muted)] leading-relaxed mb-5">{s.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {s.useCases.map((uc) => (
                        <span key={uc} className="inline-flex items-center px-3 py-1 rounded-full bg-white border border-[var(--color-border)] text-xs font-medium text-[var(--color-brand-600)]">{uc}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-12">
          <Link href="/contact" className="inline-flex items-center gap-2 text-[var(--color-brand-600)] font-semibold hover:text-[var(--color-accent-600)] group">
            تحدّث معنا عن احتياجات قطاعك
            <ArrowLeft className="h-4 w-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
