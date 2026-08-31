import Link from "next/link";
import { ArrowLeft, FileCheck, Database, Eye } from "lucide-react";

const PILLARS = [
  {
    icon: Database,
    title: "بيانات من الميدان",
    desc: "كل قراءة pH وEC وحرارة ومستوى ماء تُسجَّل تلقائياً مع طابع زمني دقيق.",
  },
  {
    icon: Eye,
    title: "مراقبة مستمرة",
    desc: "كل أمر ري وكل تعديل في النظام يُسجَّل ويصبح قابلاً للمراجعة.",
  },
  {
    icon: FileCheck,
    title: "تقارير قابلة للتدقيق",
    desc: "نعمل على تطوير طبقة امتثال لتحويل بيانات الميدان إلى تقارير واضحة للجهات التنظيمية.",
  },
];

export function ComplianceSection() {
  return (
    <section className="bg-[#0F3D2E] py-20" dir="rtl">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-3xl mb-12">
          <p className="text-[#A5D63F] text-sm font-bold uppercase tracking-widest mb-3">
            قيد التطوير
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#FAFAF7] mb-5 leading-tight">
            من التحكم إلى الامتثال
          </h2>
          <p className="text-white/75 text-lg leading-relaxed">
            كل قراءة من الحساس، وكل أمر ري، وكل تعديل في النظام يمكن أن يتحوّل
            إلى سجل تشغيلي قابل للمراجعة. نعمل على تطوير طبقة امتثال تساعد
            المزارع على تجهيز تقارير واضحة للجهات التنظيمية — من بيانات الميدان
            لا من ملفات يدوية متفرقة.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {PILLARS.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-[#1B5E3F]/40 border border-[#1B5E3F] rounded-2xl p-7"
            >
              <div className="w-11 h-11 rounded-xl bg-[#7CB342]/15 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-[#A5D63F]" aria-hidden="true" />
              </div>
              <h3 className="text-[#FAFAF7] font-bold text-lg mb-2">{title}</h3>
              <p className="text-white/65 text-base leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <Link
          href="/contact?interest=demo&cta=demo_access_request"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#7CB342] hover:bg-[#A5D63F] text-[#0F3D2E] rounded-lg font-semibold text-base transition-colors"
        >
          شاهد نموذج Smart OS
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
