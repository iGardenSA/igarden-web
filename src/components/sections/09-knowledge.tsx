import Link from "next/link";
import { BookOpen, Users, Video, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export function KnowledgeSection() {
  const offerings = [
    { icon: Users, title: "إرشاد فني", description: "فريق متخصص يرافقك في كل مرحلة — من أول نبتة حتى الحصاد الأول." },
    { icon: BookOpen, title: "دورات تدريبية", description: "برامج عملية للمزارعين وفرق التشغيل — في مقرك أو في مراكزنا التدريبية." },
    { icon: Video, title: "محتوى تعليمي", description: "مكتبة متنامية من المقالات والفيديوهات لنشر ثقافة الزراعة الذكية محلياً." },
  ];
  return (
    <section className="relative overflow-hidden bg-[var(--color-brand-600)] text-white section-padding">
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 90% 20%, var(--color-accent-500) 0%, transparent 50%), radial-gradient(circle at 10% 80%, var(--color-accent-300) 0%, transparent 40%)" }} />
      <div className="container-igarden relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="heading-eyebrow mb-4 text-[var(--color-accent-300)]">iGarden Knowledge</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              التقنية وحدها لا تكفي —<br /><span className="text-[var(--color-accent-300)]">المعرفة تصنع الفرق.</span>
            </h2>
            <p className="text-lg text-white/85 leading-relaxed mb-8">
              نؤمن أن أفضل عتاد لا يحقق نتائجه ما لم يكن وراءه فريق يعرف كيف يُشغّله ويتطوّر به. لذلك جعلنا <strong>المعرفة</strong> ركيزة ثالثة أساسية في منظومتنا — بجانب العتاد والبرمجيات.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="accent" size="lg" asChild>
                <Link href="/knowledge">اكتشف برامجنا التدريبية<ArrowLeft className="rotate-180" /></Link>
              </Button>
              <Button variant="light" size="lg" asChild>
                <Link href="/insights">تصفّح المقالات</Link>
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            {offerings.map((o) => {
              const Icon = o.icon;
              return (
                <div key={o.title} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-7 hover:bg-white/10 hover:border-[var(--color-accent-500)]/50 transition-all">
                  <div className="flex items-start gap-5">
                    <div className="shrink-0 h-12 w-12 rounded-xl bg-[var(--color-accent-500)] text-[var(--color-brand-700)] flex items-center justify-center">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-white mb-2">{o.title}</h3>
                      <p className="text-sm md:text-base text-white/75 leading-relaxed">{o.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
