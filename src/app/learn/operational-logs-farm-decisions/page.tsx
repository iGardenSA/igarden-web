import type { Metadata } from "next";
import Link from "next/link";
import { FAQSchema, BreadcrumbSchema } from "@/components/shared/SchemaJsonLd";
import { CheckCircle2, AlertCircle, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "كيف تساعد سجلات التشغيل في تحسين قرارات المزرعة؟ | iGarden",
  description:
    "البيانات بدون تسجيل حكمة ضائعة. تعرّف على كيف تُحوّل سجلات التشغيل مزرعتك من عمليّة تعتمد على الذاكرة إلى نظام متعلّم يُحسّن قراراته بمرور الوقت.",
  alternates: { canonical: "https://igarden.sa/learn/operational-logs-farm-decisions" },
  openGraph: {
    title: "كيف تساعد سجلات التشغيل في تحسين قرارات المزرعة؟",
    description:
      "سجلات التشغيل تُحوّل مزرعتك من عمليّة تعتمد على الذاكرة إلى نظام متعلّم. كيف تبني هذا النظام بخطوات عملية.",
    images: [
      {
        url: "/api/og?title=%D8%B3%D8%AC%D9%84%D8%A7%D8%AA+%D8%A7%D9%84%D8%AA%D8%B4%D8%BA%D9%8A%D9%84&sub=%D9%83%D9%8A%D9%81+%D8%AA%D8%AD%D8%B3%D9%86+%D9%82%D8%B1%D8%A7%D8%B1%D8%A7%D8%AA%D9%83",
        width: 1200,
        height: 630,
        alt: "سجلات التشغيل وقرارات المزرعة",
      },
    ],
    type: "article",
    locale: "ar_SA",
  },
  twitter: {
    card: "summary_large_image",
    title: "كيف تساعد سجلات التشغيل في تحسين قرارات المزرعة؟",
    description:
      "سجلات التشغيل تُحوّل مزرعتك من عمليّة تعتمد على الذاكرة إلى نظام متعلّم.",
    images: ["/api/og?title=%D8%B3%D8%AC%D9%84%D8%A7%D8%AA+%D8%A7%D9%84%D8%AA%D8%B4%D8%BA%D9%8A%D9%84"],
  },
};

const BREADCRUMB = [
  { name: "الرئيسية", url: "/" },
  { name: "المعرفة", url: "/learn" },
  { name: "سجلات التشغيل وقرارات المزرعة", url: "/learn/operational-logs-farm-decisions" },
];

const FAQ_ITEMS = [
  {
    question: "ما الحد الأدنى من المعلومات التي يجب تسجيلها؟",
    answer:
      "الحد الأدنى: الطابع الزمني (التاريخ والوقت)، قيمة pH وEC، وأي تدخّل يدوي قمت به (إضافة عناصر، تغيير محلول، تعديل جرعة). هذه الثلاثة وحدها تُحدث فرقاً كبيراً عند البحث عن أسباب المشاكل.",
  },
  {
    question: "هل يكفي Excel أو ورق مكتبي للتسجيل؟",
    answer:
      "في البداية نعم. الجدول اليدوي أفضل من لا شيء. لكن مع الوقت، التسجيل التلقائي يُعطي بيانات أكثر وأدق لأنه لا يعتمد على ذاكرة الإنسان ولا وقته. المهم البداية، ثم الترقية تدريجياً.",
  },
  {
    question: "كيف أستفيد من السجلات القديمة عند التخطيط لموسم جديد؟",
    answer:
      "راجع: متى حدثت أكبر الانحرافات في pH أو EC؟ أي مراحل النمو كانت أكثر استهلاكاً للعناصر؟ هل الصيف أحدث مشاكل متكررة؟ هذه الأنماط تُخبرك ماذا تُعدّ له مسبقاً في الموسم القادم.",
  },
];

const WHAT_TO_LOG = [
  { item: "الطابع الزمني الدقيق لكل قراءة (تاريخ + وقت)", freq: "كل قراءة" },
  { item: "قيم pH وEC/TDS — الفعلية لا التقديرية", freq: "يومياً" },
  { item: "درجة حرارة المياه والهواء", freq: "يومياً" },
  { item: "أي تدخّل يدوي: إضافة عناصر، تغيير محلول، تعديل جرعة دوزر", freq: "عند الحدوث" },
  { item: "حالة المحصول: لون الأوراق، معدل النمو الملحوظ، أي مشكلة بصرية", freq: "أسبوعياً" },
  { item: "قراءة مستوى المياه في الخزان", freq: "يومياً" },
  { item: "أي عطل أو توقّف غير مخطط", freq: "عند الحدوث" },
];

const MONTHLY_QUESTIONS = [
  "ما أكثر الأوقات التي انحرف فيها pH عن النطاق؟ (صباحاً؟ أثناء الذروة الحرارية؟)",
  "هل هناك علاقة بين ارتفاع درجة الحرارة وتراجع EC؟",
  "أي الأسابيع كانت استهلاك المياه فيها أعلى من المعتاد؟",
  "هل تكرّرت مشكلة معينة في نفس مرحلة النمو؟",
  "ما متوسط وقت الاستجابة حين ظهر انحراف وحين تم تصحيحه؟",
];

export default function ArticlePage() {
  return (
    <>
      <BreadcrumbSchema items={BREADCRUMB} />
      <FAQSchema faqs={FAQ_ITEMS} />

      <article dir="rtl">
        {/* Header */}
        <header className="bg-[#0F3D2E] py-16 md:py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <nav aria-label="مسار التنقل" className="flex items-center gap-2 text-white/50 text-sm mb-6">
              <Link href="/" className="hover:text-white transition-colors">الرئيسية</Link>
              <span aria-hidden="true">/</span>
              <Link href="/learn" className="hover:text-white transition-colors">المعرفة</Link>
              <span aria-hidden="true">/</span>
              <span className="text-white/80">سجلات التشغيل</span>
            </nav>
            <p className="text-[#A5D63F] text-sm font-bold uppercase tracking-widest mb-3">
              المعرفة · إدارة المزرعة
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-[#FAFAF7] mb-4 leading-snug">
              كيف تساعد سجلات التشغيل في تحسين قرارات المزرعة؟
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              البيانات بدون تسجيل حكمة ضائعة. سجّل الآن — وتعلّم لاحقاً.
            </p>
          </div>
        </header>

        {/* Article body */}
        <div className="container mx-auto px-4 max-w-4xl py-12 md:py-16">

          {/* 1. مقدمة */}
          <section className="mb-10">
            <p className="text-[#1A1A1A] text-lg leading-relaxed mb-4">
              كل مرة تقيس pH وتسجّلها في ذاكرتك فقط — تلك القراءة ضاعت. كل حادثة تصحّحها دون توثيق — ستتكرر المشكلة لأنك لن تعرف أين بدأت. كل موسم ناجح بدون تسجيل — سيصعب تكراره.
            </p>
            <p className="text-[#1A1A1A] text-lg leading-relaxed mb-4">
              سجلات التشغيل ليست ورقاً إدارياً — هي الذاكرة المؤسسية لمزرعتك. تُحوّلها من عمليّة تعتمد على الإنسان إلى نظام متعلّم.
            </p>
          </section>

          <hr className="border-[#E5E7EB] mb-10" />

          {/* 2. المشكلة */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#0F3D2E] mb-4">المشكلة: الذاكرة لا تكفي</h2>
            <p className="text-[#1A1A1A] leading-relaxed mb-4">
              حين تسوء الأمور، تحاول التذكّر: «متى بدأت؟ ماذا غيّرنا قبلها؟ هل حدث هذا في الموسم الماضي؟». غالباً الجواب: لا تعرف.
            </p>
            <p className="text-[#1A1A1A] leading-relaxed mb-4">
              وحين تسير الأمور على ما يُرام، لا تسجّل لأنه «لا يوجد ما يستدعي التسجيل». ثم يمضي الموسم وتبدأ من الصفر في الموسم التالي.
            </p>
            <p className="text-[#1A1A1A] leading-relaxed">
              هذا يعني أن كل موسم ناجح هو اكتشاف يُعاد من جديد بدلاً من أن يكون إضافة على ما هو قائم.
            </p>
          </section>

          <hr className="border-[#E5E7EB] mb-10" />

          {/* 3. الشرح العملي */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#0F3D2E] mb-6">كيف تعمل سجلات التشغيل؟</h2>

            <div className="space-y-6">
              {[
                {
                  title: "الطابع الزمني: العمود الفقري",
                  body: "كل قراءة بدون تاريخ ووقت تقريباً لا قيمة لها عند التحليل. الطابع الزمني هو ما يُحوّل قراءة منفردة إلى نقطة في سلسلة زمنية يمكن قراءة اتجاهها.",
                },
                {
                  title: "رصد الأنماط: من البيانات إلى الحكمة",
                  body: "قراءة pH منخفضة يوماً واحداً مشكلة. قراءة pH منخفضة كل أسبوع في نفس اليوم نمط. النمط يُشير إلى سبب متكرر يمكن معالجته — ربما تغيير جدول الجرعات أو تغيير توقيت القياس.",
                },
                {
                  title: "التشخيص السريع عند المشاكل",
                  body: "حين يبدأ المحصول في الاصفرار، السؤال الأول هو: «ماذا تغيّر قبل ثلاثة أيام؟». مع السجلات يستغرق هذا دقيقتين. بدونها، قد لا تجد إجابة أبداً.",
                },
                {
                  title: "التحسين عبر الأموسم",
                  body: "بعد موسم كامل من التسجيل، ستعرف: أي مراحل النمو تستهلك أكثر عناصر، متى تتراجع الأكسجين الذائبة، وأي تعديلات أحدثت الفرق الأكبر في الإنتاجية.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-5 bg-white rounded-xl border border-[#E5E7EB] shadow-[0_2px_8px_rgba(15,61,46,0.06)]"
                >
                  <h3 className="font-bold text-[#0F3D2E] mb-2">{item.title}</h3>
                  <p className="text-[#6B7280] leading-relaxed text-sm">{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          <hr className="border-[#E5E7EB] mb-10" />

          {/* 4. متى ينطبق */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#0F3D2E] mb-4">متى ينطبق هذا عليك؟</h2>
            <ul className="space-y-2 text-[#1A1A1A]">
              {[
                "أي عملية زراعية تريد تحسينها بمرور الوقت",
                "المزارع التي تُجري مراجعات دورية للأداء",
                "المشاريع التي تُعدّ لتوسيع أو تكرار النظام",
                "أي منشأة تحتاج توثيق العمليات لأغراض التدقيق أو التمويل",
                "فرق العمل التي تتناوب على المراقبة — تضمن السجلات استمرارية المعرفة",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#7CB342] mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <hr className="border-[#E5E7EB] mb-10" />

          {/* 5. متى لا ينطبق */}
          <section className="mb-10">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <div className="flex items-start gap-3 mb-4">
                <AlertCircle className="w-6 h-6 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <h2 className="text-xl font-bold text-amber-900">متى تكون السجلات أقل فائدة؟</h2>
              </div>
              <p className="text-amber-800 leading-relaxed mb-3">
                سجلات التشغيل لا تُضيف قيمة إذا:
              </p>
              <ul className="space-y-3">
                {[
                  {
                    title: "لا أحد يراجعها",
                    body: "التسجيل دون مراجعة دورية هو عمل بلا عائد. إذا لم تُخصّص وقتاً للمراجعة الشهرية، ستتراكم بيانات لا تستفيد منها.",
                  },
                  {
                    title: "التسجيل غير منتظم",
                    body: "فجوات كبيرة في السجل تجعل التحليل صعباً. أفضل بيانات غير كاملة بانتظام من بيانات مثالية متقطعة.",
                  },
                  {
                    title: "الوضع لا يحتاج تكراراً",
                    body: "إذا كنت تزرع مرة واحدة فقط ولا تنوي الاستمرار، عائد الاستثمار في التسجيل ينخفض.",
                  },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1 flex-shrink-0">!</span>
                    <div>
                      <span className="font-semibold text-amber-900">{item.title}:</span>{" "}
                      <span className="text-amber-800">{item.body}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <hr className="border-[#E5E7EB] mb-10" />

          {/* 6. قائمة تحقق */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#0F3D2E] mb-2">ماذا تُسجّل؟ — القائمة الأساسية</h2>
            <p className="text-[#6B7280] mb-5">
              هذه الحد الأدنى الموصى به لأي نظام زراعي مُشغَّل.
            </p>

            {/* ما تُسجّله */}
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#0F3D2E] text-white">
                    <th className="text-right p-3 font-semibold rounded-tr-lg">ما تُسجّله</th>
                    <th className="text-right p-3 font-semibold rounded-tl-lg">التكرار</th>
                  </tr>
                </thead>
                <tbody>
                  {WHAT_TO_LOG.map((row, i) => (
                    <tr
                      key={i}
                      className={`border-b border-[#E5E7EB] ${i % 2 === 0 ? "bg-white" : "bg-[#FAFAF7]"}`}
                    >
                      <td className="p-3 text-[#1A1A1A]">{row.item}</td>
                      <td className="p-3 text-[#6B7280] whitespace-nowrap">{row.freq}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* الأسئلة الشهرية */}
            <h3 className="text-lg font-bold text-[#0F3D2E] mb-3">الأسئلة التي تطرحها شهرياً</h3>
            <div className="space-y-3">
              {MONTHLY_QUESTIONS.map((q, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 bg-white rounded-lg border border-[#E5E7EB]"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#7CB342] mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-[#1A1A1A] leading-relaxed">{q}</span>
                </div>
              ))}
            </div>
          </section>

          <hr className="border-[#E5E7EB] mb-10" />

          {/* 7. ربط بـ iGarden */}
          <section className="mb-10 bg-[#0F3D2E]/5 rounded-xl p-6 border border-[#0F3D2E]/10">
            <p className="text-[#1A1A1A] leading-relaxed">
              سجلات التشغيل مدمجة في كل تركيب <span dir="ltr" className="font-semibold">iGarden Smart OS</span> — كل قراءة وكل تدخّل يُحفظ تلقائياً مع الطابع الزمني ويمكن تصديره للمراجعة والتحليل.
            </p>
            <Link
              href="/products/smart-controllers"
              className="inline-flex items-center gap-1 mt-3 text-[#7CB342] hover:text-[#0F3D2E] font-medium text-sm transition-colors"
            >
              <span>اقرأ عن Smart Controllers</span>
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            </Link>
          </section>

          {/* 8. CTA */}
          <section className="text-center py-8">
            <h2 className="text-xl font-bold text-[#0F3D2E] mb-3">هل تريد نظام تسجيل تلقائي لمزرعتك؟</h2>
            <p className="text-[#6B7280] mb-6 max-w-md mx-auto">
              تحدّث معنا عن وضع مزرعتك وسنُساعدك في تحديد النظام المناسب لاحتياجاتك.
            </p>
            <Link
              href="/contact?cta=book_consultation"
              className="inline-block bg-[#7CB342] hover:bg-[#A5D63F] text-[#0F3D2E] px-7 py-3.5 rounded-lg font-semibold transition-colors"
            >
              احجز استشارة
            </Link>
          </section>

          <hr className="border-[#E5E7EB] my-8" />

          {/* Related articles */}
          <section>
            <h3 className="text-lg font-bold text-[#0F3D2E] mb-4">مقالات ذات صلة</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/learn/daily-measurements-smart-farm"
                className="group p-4 bg-white rounded-xl border border-[#E5E7EB] hover:border-[#7CB342] transition-colors"
              >
                <p className="font-semibold text-[#0F3D2E] group-hover:text-[#7CB342] transition-colors leading-snug">
                  ما الذي يجب قياسه يومياً في المزرعة الذكية؟
                </p>
                <p className="text-[#6B7280] text-sm mt-1">المؤشرات الأساسية ونطاقاتها الآمنة</p>
              </Link>
              <Link
                href="/learn/when-do-you-need-smart-controller"
                className="group p-4 bg-white rounded-xl border border-[#E5E7EB] hover:border-[#7CB342] transition-colors"
              >
                <p className="font-semibold text-[#0F3D2E] group-hover:text-[#7CB342] transition-colors leading-snug">
                  متى تحتاج مزرعتك إلى Smart Controller؟
                </p>
                <p className="text-[#6B7280] text-sm mt-1">خمس علامات تدلّك على الوقت المناسب</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
