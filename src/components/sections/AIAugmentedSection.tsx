import { Rocket, FileText, BarChart3, Target } from "lucide-react";

const CARDS = [
  {
    Icon: FileText,
    title: "التوثيق الذكي",
    desc: "أنظمة مُنظَّمة لتوثيق القرارات والعمليات بشكل منهجي وقابل للمراجعة",
  },
  {
    Icon: BarChart3,
    title: "التحليل المُسرَّع",
    desc: "معالجة بيانات الميدان وتقارير العمليات بكفاءة عالية وسرعة استجابة أكبر",
  },
  {
    Icon: Target,
    title: "القرار المدعوم بالبيانات",
    desc: "اتخاذ قرارات استراتيجية مبنية على تحليل دقيق للسوق والعمليات",
  },
];

export function AIAugmentedSection() {
  return (
    <section className="bg-deep-green py-20 text-cream">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 rounded-full bg-lime/20 flex items-center justify-center flex-shrink-0">
            <Rocket className="w-7 h-7 text-lime" aria-hidden />
          </div>
          <div>
            <p className="text-lime font-medium text-sm tracking-widest uppercase font-latin">
              AI-Augmented Operations
            </p>
            <h2 className="h2 text-cream mt-1">سرعة التنفيذ — ميزتنا التنافسية</h2>
          </div>
        </div>
        <p className="body-base text-cream/90 max-w-3xl mb-10">
          نتبنّى منهجاً منظّماً في استخدام أدوات الذكاء الاصطناعي للتوثيق والتحليل واتخاذ القرار.
          ثلاثة مؤسسين يُنفّذون ما يحتاج عادةً فريقاً أكبر — دون التضحية بالجودة.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CARDS.map(({ Icon, title, desc }) => (
            <div key={title} className="bg-white/5 p-6 rounded-card border border-white/10">
              <Icon className="w-6 h-6 text-lime mb-3" aria-hidden />
              <h3 className="font-bold mb-2 text-cream">{title}</h3>
              <p className="body-sm text-cream/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
