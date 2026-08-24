import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Construction, Database, Cpu, FileText, CheckCircle2, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "سجلات التشغيل القابلة للمراجعة — Smart OS | iGarden",
  description:
    "iGarden تبني سجلات تشغيل رقمية قابلة للمراجعة — القراءات والأوامر والتدخلات التي يشملها نطاق الربط تُسجّل بتوقيت دقيق لدعم فرق التشغيل والجودة.",
  alternates: { canonical: "https://igarden.sa/compliance" },
  robots: { index: true, follow: true },
};

export default function CompliancePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0F3D2E] py-20 md:py-24" dir="rtl">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="inline-flex items-center gap-2 bg-amber-400/15 border border-amber-400/30 text-amber-300 text-sm font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
            <Construction className="w-4 h-4" aria-hidden="true" />
            قيد التطوير الميداني
          </div>
          <p className="text-[#A5D63F] text-sm font-bold uppercase tracking-widest mb-4">
            سجلات التشغيل · Smart OS
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#FAFAF7] mb-5 leading-tight">
            سجلات التشغيل القابلة للمراجعة
          </h1>
          <p className="text-white/75 text-lg leading-relaxed max-w-2xl">
            القراءات والأوامر والتدخلات التي يشملها نطاق الربط تُسجّل بتوقيت دقيق
            وتصبح قابلة للمراجعة، لدعم فرق التشغيل والجودة والاستعداد للمراجعات
            الداخلية والخارجية.
          </p>
        </div>
      </section>

      {/* Transparency notice */}
      <section className="bg-amber-50 border-b border-amber-200 py-5" dir="rtl">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex items-start gap-3">
            <Construction className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-amber-800 text-sm leading-relaxed">
              <strong>إخلاء مسؤولية:</strong> سجلات التشغيل القابلة للمراجعة لا تمثّل شهادة امتثال
              رسمية، ولا تغني عن الجهات التنظيمية أو المتطلبات النظامية المعتمدة. هذا النموذج قيد
              التطوير الميداني وتنسيقات التقارير قابلة للتعديل عند صدور المتطلبات الرسمية.
            </p>
          </div>
        </div>
      </section>

      {/* Why compliance matters */}
      <section className="bg-[#FAFAF7] py-16" dir="rtl">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-[#7CB342] text-sm font-bold uppercase tracking-widest mb-3">
            السياق
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F3D2E] mb-5">
            لماذا سجلات التشغيل مهمة للمزارع الذكية؟
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {[
              {
                title: "الأمن الغذائي",
                body: "المزارع التي تستهدف سلاسل التوريد الغذائية بحاجة لتوثيق كل مرحلة إنتاج — من البذرة إلى الحصاد.",
              },
              {
                title: "الجهات التمويلية",
                body: "قد تطلب البنوك والمسرّعات والجهات الحكومية بيانات تشغيل وملفات داعمة بحسب البرنامج.",
              },
              {
                title: "الشهادات المستقبلية",
                body: "تستفيد إجراءات الجاهزية والمراجعة من سجلات موثقة — بما فيها مسارات GAP وGlobalG.A.P وSFDA، بحسب متطلبات كل جهة.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl border border-[#E5E7EB] p-6 shadow-sm"
              >
                <h3 className="font-bold text-[#0F3D2E] mb-2">{item.title}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What the system logs */}
      <section className="bg-white py-16" dir="rtl">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-[#7CB342] text-sm font-bold uppercase tracking-widest mb-3">
            ما يُسجَّل
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F3D2E] mb-5">
            ما الذي يمكن تسجيله ضمن نطاق الربط؟
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-[#FAFAF7] rounded-2xl border border-[#E5E7EB] p-6">
              <div className="w-10 h-10 rounded-xl bg-[#0F3D2E]/8 flex items-center justify-center mb-4">
                <Database className="w-5 h-5 text-[#0F3D2E]" aria-hidden="true" />
              </div>
              <h3 className="font-bold text-[#0F3D2E] mb-3">قراءات الحساسات</h3>
              <ul className="space-y-1.5 text-sm text-[#6B7280]">
                <li>· pH بتوقيت دقيق</li>
                <li>· EC / TDS</li>
                <li>· درجة حرارة الماء والهواء</li>
                <li>· رطوبة نسبية</li>
                <li>· مستوى الخزانات</li>
              </ul>
            </div>
            <div className="bg-[#FAFAF7] rounded-2xl border border-[#E5E7EB] p-6">
              <div className="w-10 h-10 rounded-xl bg-[#0F3D2E]/8 flex items-center justify-center mb-4">
                <Cpu className="w-5 h-5 text-[#0F3D2E]" aria-hidden="true" />
              </div>
              <h3 className="font-bold text-[#0F3D2E] mb-3">أوامر التشغيل</h3>
              <ul className="space-y-1.5 text-sm text-[#6B7280]">
                <li>· تشغيل/إيقاف المضخات</li>
                <li>· جرعات التغذية (دوزرات)</li>
                <li>· دورات الري التلقائية</li>
                <li>· الأوامر الحرارية</li>
                <li>· توقيت كل أمر بالثانية</li>
              </ul>
            </div>
            <div className="bg-[#FAFAF7] rounded-2xl border border-[#E5E7EB] p-6">
              <div className="w-10 h-10 rounded-xl bg-[#0F3D2E]/8 flex items-center justify-center mb-4">
                <FileText className="w-5 h-5 text-[#0F3D2E]" aria-hidden="true" />
              </div>
              <h3 className="font-bold text-[#0F3D2E] mb-3">التدخلات اليدوية</h3>
              <ul className="space-y-1.5 text-sm text-[#6B7280]">
                <li>· التعديلات اليدوية قابلة للإدخال والتوثيق</li>
                <li>· سبب التدخل (اختياري)</li>
                <li>· هوية المشغّل</li>
                <li>· القيمة قبل وبعد</li>
                <li>· ربط بدورة الإنتاج</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How it becomes a report */}
      <section className="bg-[#FAFAF7] py-16" dir="rtl">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-[#7CB342] text-sm font-bold uppercase tracking-widest mb-3">
            التدفق
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F3D2E] mb-8">
            من الحساس إلى التقرير
          </h2>
          <div className="space-y-4">
            {[
              {
                step: "01",
                title: "الحساس يقيس",
                body: "ESP32 يقرأ pH وEC والحرارة والرطوبة وفق الدورية المضبوطة للمشروع.",
              },
              {
                step: "02",
                title: "MQTT ينقل",
                body: "MQTT ينقل القراءات إلى الـ Hub عبر الاتصال المهيأ للموقع.",
              },
              {
                step: "03",
                title: "قاعدة البيانات تُسجَّل",
                body: "قاعدة البيانات تسجّل القراءات المستلمة بتوقيت دقيق مع معرّف الجهاز والموقع والنوع.",
              },
              {
                step: "04",
                title: "البيانات جاهزة للتقارير",
                body: "تصبح البيانات المسجَّلة جاهزة لبناء التقارير الدورية. توليد التقارير الآلي وإرسالها قيد التطوير.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex items-start gap-5 bg-white rounded-2xl border border-[#E5E7EB] p-6"
              >
                <span className="font-mono text-2xl font-bold text-[#A5D63F] flex-shrink-0 w-10 text-center">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-bold text-[#0F3D2E] mb-1">{item.title}</h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current phase */}
      <section className="bg-white py-16" dir="rtl">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-[#7CB342] text-sm font-bold uppercase tracking-widest mb-3">
            الحالة الآن
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F3D2E] mb-8">
            المرحلة الحالية
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#A5D63F]/8 border border-[#A5D63F]/30 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 className="w-5 h-5 text-[#2E6B1A]" aria-hidden="true" />
                <span className="font-bold text-[#2E6B1A] text-sm">متاح اليوم ضمن نطاق التجهيز</span>
              </div>
              <ul className="space-y-2 text-sm text-[#1A1A1A]">
                <li>✓ تسجيل قراءات pH وEC والحرارة ضمن نطاق الربط</li>
                <li>✓ تسجيل أوامر التشغيل بالتوقيت الدقيق</li>
                <li>✓ واجهة Smart OS للعرض الميداني</li>
                <li>✓ اختبار ميداني في مرفق R&D في عسفان — ظروف صيفية سعودية وبيئات مرتفعة الحرارة والرطوبة</li>
                <li>✓ تغطية اختبارات وحدوية موسّعة على الـ backend</li>
              </ul>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-amber-700" aria-hidden="true" />
                <span className="font-bold text-amber-700 text-sm">قيد التطوير</span>
              </div>
              <ul className="space-y-2 text-sm text-[#1A1A1A]">
                <li>· تقارير PDF تلقائية للمزارعين</li>
                <li>· ربط بشهادات GAP / SFDA</li>
                <li>· واجهة مراجعة خارجية للمدقّقين</li>
                <li>· Pilot رسمي مع جهة امتثال معتمدة</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0F3D2E] py-16" dir="rtl">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#FAFAF7] mb-4">
            هل مشروعك يحتاج سجلات تشغيل قابلة للمراجعة؟
          </h2>
          <p className="text-white/70 leading-relaxed mb-8">
            إذا كنت تستهدف تمويلاً حكومياً، شهادات جودة، أو سلاسل توريد — تواصل معنا لنناقش
            كيف تساعدك سجلات التشغيل الرقمية.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
            <Link
              href="/contact?interest=farm_digitization&cta=readiness_assessment"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#7CB342] hover:bg-[#A5D63F] text-[#0F3D2E] rounded-lg font-semibold text-base transition-colors"
            >
              اطلب تقييماً أولياً
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            </Link>
            <a
              href="https://demo.igarden.sa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white hover:bg-white/10 rounded-lg font-semibold text-base transition-colors"
            >
              شاهد Smart OS
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
