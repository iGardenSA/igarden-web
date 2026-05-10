import Link from "next/link";
import { ArrowLeft, FileCheck, Database, Eye, AlertCircle } from "lucide-react";

const PILLARS = [
  {
    icon: Database,
    title: "بيانات من الميدان، لا من Excel",
    desc: "كل قراءة pH وEC وحرارة ومستوى ماء تُسجَّل تلقائياً مع طابع زمني دقيق — لا أوراق ولا ذاكرة فنّي يَنسى.",
  },
  {
    icon: Eye,
    title: "كل قرار قابل للتتبّع",
    desc: "كل أمر ريّ وكل تعديل تَشغيلي يَدخل سجلّاً يُمكن مراجعته بعد ٦ أشهر أو ٦ سنوات — متى ما طلبتَه.",
  },
  {
    icon: FileCheck,
    title: "تقارير جاهزة للمراجعة",
    desc: "بدلاً من تَجهيز ملفّات يدوية كل تفتيش، يُولّد النظام تقارير تشغيل آلياً من بيانات اللحظة — بصيغة قابلة للتدقيق.",
  },
];

export function ComplianceSection() {
  return (
    <section className="bg-[#0F3D2E] py-20" dir="rtl">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-3xl mb-12">
          <p className="text-[#A5D63F] text-sm font-bold uppercase tracking-widest mb-3">
            Smart OS · التوثيق الرقمي
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#FAFAF7] mb-5 leading-tight">
            سجلات التشغيل القابلة للمراجعة
          </h2>
          <p className="text-white/75 text-lg leading-relaxed">
            مزرعتك الحديثة تُولّد بيانات بمعدّل آلاف القراءات يومياً.
            نُحوّل هذه البيانات إلى سجلّ تَشغيلي رقمي قابل للمراجعة — يَخدمك في التدقيق
            الداخلي ويُجهّز ملفّاتك للجهات المختصّة.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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

        {/* Disclaimer */}
        <div className="flex items-start gap-2 mb-8 p-4 bg-white/5 rounded-xl border border-white/10">
          <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-white/55 text-sm leading-relaxed">
            هذه السجلات لا تمثّل شهادة امتثال رسمية، ولا تغني عن الجهات التنظيمية أو المتطلبات
            النظامية المعتمدة. تُستخدم لدعم فرق التشغيل والجودة والاستعداد للمراجعات الداخلية.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#7CB342] hover:bg-[#A5D63F] text-[#0F3D2E] rounded-lg font-semibold text-base transition-colors"
          >
            اطلب تقييم مشروعك
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          </Link>
          <a
            href="https://demo.igarden.sa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-transparent border-2 border-white/40 hover:border-[#A5D63F] text-white hover:text-[#A5D63F] rounded-lg font-medium text-base transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-[#A5D63F] animate-pulse" />
            شاهد البيانات في Smart OS
          </a>
        </div>
      </div>
    </section>
  );
}
