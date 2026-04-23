import { ShieldCheck, Rocket, Sprout, Users, Award, Briefcase } from "lucide-react";
import { GlowAccent } from "@/components/ui/glow-accent";
import { FadeIn } from "@/components/ui/fade-in";

const achievements = [
  {
    icon: ShieldCheck,
    title: "ترخيص استثماري رسمي",
    value: "24926249716",
    description: "من وزارة الاستثمار للنشاط الزراعي الذكي",
  },
  {
    icon: Rocket,
    title: "انطلاق فعلي",
    value: "Q2 2025",
    description: "بدء التشغيل مع تحقيق مبيعات أولية",
  },
  {
    icon: Sprout,
    title: "محمية التجارب",
    value: "عسفان",
    description: "مقر الشركة — حقل تطبيقي للابتكار",
  },
  {
    icon: Users,
    title: "ورش عمل مجتمعية",
    value: "+5",
    description: "لتشجيع التحول نحو الزراعة المائية الذكية",
  },
  {
    icon: Award,
    title: "نموذج صناعي مسجل",
    value: "#423450193",
    description: "SAIP — iGarden Tower محمي قانونياً",
  },
  {
    icon: Briefcase,
    title: "فريق متكامل",
    value: "+15 سنة",
    description: "خبرة تراكمية جاهزة للتنفيذ الفوري",
  },
];

export function AchievementsSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-brand-600)] text-white section-padding">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 90%, var(--color-accent-500) 0%, transparent 50%), radial-gradient(circle at 90% 10%, var(--color-accent-300) 0%, transparent 40%)",
        }}
      />
      <GlowAccent position="top-right"  intensity="strong" color="lime"   />
      <GlowAccent position="bottom-left" intensity="medium" color="accent" />

      <div className="container-igarden relative">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-14">
          <p className="heading-eyebrow mb-4 text-[var(--color-accent-300)]">إنجازاتنا المبكرة</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            سجل تراكشن حقيقي
          </h2>
          <p className="text-lg text-white/85 leading-relaxed">
            لسنا فكرة على ورق — نحن شركة شغّالة بترخيص رسمي ومنتج مسجل وفريق منفّذ، وانطلاقة فعلية في السوق السعودي.
          </p>
        </div>

        {/* بطاقات الإنجازات */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {achievements.map((item, i) => {
            const Icon = item.icon;
            return (
              <FadeIn key={item.title} delay={i * 80}>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 md:p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-500 h-full flex flex-col">
                  <div className="h-10 w-10 rounded-xl bg-[var(--color-accent-500)]/20 text-[var(--color-accent-300)] flex items-center justify-center mb-4 shrink-0">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p
                    className="text-3xl md:text-4xl font-extrabold text-[var(--color-accent-300)] leading-tight mb-2"
                    data-num
                  >
                    {item.value}
                  </p>
                  <p className="text-base font-bold text-white mb-1">{item.title}</p>
                  <p className="text-sm text-white/70 leading-relaxed mt-auto">{item.description}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
