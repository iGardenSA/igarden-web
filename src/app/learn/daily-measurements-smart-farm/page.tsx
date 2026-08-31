import type { Metadata } from "next";
import Link from "next/link";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/shared/SchemaJsonLd";
import { ArticleByline } from "@/components/shared/ArticleByline";
import { CheckCircle2, AlertCircle, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "ما الذي يجب قياسه يومياً في المزرعة الذكية؟",
  description:
    "ليست كل القراءات متساوية الأهمية. تعرّف على المؤشرات الأساسية التي يجب رصدها يومياً في المزارع الهيدروبونيكية والمحميات الذكية — وتلك التي يمكن تأجيلها.",
  alternates: { canonical: "https://igarden.sa/learn/daily-measurements-smart-farm" },
  openGraph: {
    title: "ما الذي يجب قياسه يومياً في المزرعة الذكية؟",
    description:
      "المؤشرات الأساسية للمزارع الهيدروبونيكية والمحميات الذكية، مع النطاقات الآمنة وروتين القياس الصباحي.",
    images: [
      {
        url: "/api/og?title=%D9%82%D9%8A%D8%A7%D8%B3%D8%A7%D8%AA+%D8%A7%D9%84%D9%85%D8%B2%D8%B1%D8%B9%D8%A9+%D8%A7%D9%84%D8%B0%D9%83%D9%8A%D8%A9&sub=%D8%A7%D9%84%D9%85%D8%A4%D8%B4%D8%B1%D8%A7%D8%AA+%D8%A7%D9%84%D9%8A%D9%88%D9%85%D9%8A%D8%A9+%D8%A7%D9%84%D8%A3%D8%B3%D8%A7%D8%B3%D9%8A%D8%A9",
        width: 1200,
        height: 630,
        alt: "قياسات المزرعة الذكية",
      },
    ],
    type: "article",
    locale: "ar_SA",
  },
  twitter: {
    card: "summary_large_image",
    title: "ما الذي يجب قياسه يومياً في المزرعة الذكية؟",
    description:
      "المؤشرات الأساسية ونطاقاتها الآمنة في المزارع الهيدروبونيكية والمحميات الذكية.",
    images: ["/api/og?title=%D9%82%D9%8A%D8%A7%D8%B3%D8%A7%D8%AA+%D8%A7%D9%84%D9%85%D8%B2%D8%B1%D8%B9%D8%A9"],
  },
};

const BREADCRUMB = [
  { name: "الرئيسية", url: "/" },
  { name: "المعرفة", url: "/learn" },
  { name: "ما الذي يجب قياسه يومياً؟", url: "/learn/daily-measurements-smart-farm" },
];

const FAQ_ITEMS = [
  {
    question: "ما هو النطاق الآمن لـ pH في الزراعة الهيدروبونيكية؟",
    answer:
      "النطاق العام الآمن لمعظم المحاصيل الهيدروبونيكية هو 5.5 إلى 6.5. الخضروات الورقية كالخس والسبانخ تُفضّل 5.5 إلى 6.0، بينما تُفضّل الطماطم والخيار 5.8 إلى 6.2. خروج pH عن هذا النطاق يمنع النبات من امتصاص العناصر الغذائية حتى لو كانت موجودة في الماء.",
  },
  {
    question: "ما الفرق بين EC وTDS؟",
    answer:
      "EC (قياس التوصيل الكهربائي) يقيس تركيز الأملاح الكلي في الماء. TDS (المواد الذائبة الكلية) يُعبّر عن نفس القيمة لكن بوحدة ppm. العلاقة تقريبية: TDS = EC × 500 إلى EC × 700 حسب نوع العناصر. كلاهما مفيد لكن EC أكثر دقة للاستخدام المهني.",
  },
  {
    question: "كم مرة يجب قياس pH يومياً؟",
    answer:
      "في المزارع اليدوية: مرتان على الأقل، صباحاً وعصراً. درجة الحرارة المرتفعة تُسرّع التغيّرات، خاصة في الصيف السعودي. في الأنظمة الآلية: القياس المستمر (كل 15 دقيقة) هو المثالي لرصد الانحرافات المفاجئة.",
  },
];

const MORNING_CHECKLIST = [
  "قياس pH المحلول الغذائي (مقارنة بالأمس)",
  "قياس EC أو TDS (هل تراجع؟ يُشير إلى استهلاك النبات)",
  "درجة حرارة المياه في الخزان (هدف: أقل من 24°C)",
  "درجة حرارة الهواء داخل المحمية أو المنطقة الزراعية",
  "مستوى الرطوبة النسبية للهواء",
  "الفحص البصري السريع للنباتات (اصفرار؟ ذبول؟)",
  "مستوى الماء في الخزان (هل يحتاج تعبئة؟)",
];

const MEASUREMENTS = [
  {
    label: "pH",
    range: "5.5 – 6.5",
    why: "يتحكم في قدرة النبات على امتصاص العناصر الغذائية. انحراف بسيط (0.5 درجة) كافٍ لمنع امتصاص عناصر بعينها.",
    priority: "حرج",
  },
  {
    label: "EC / TDS",
    range: "1.2 – 2.5 mS/cm",
    why: "يقيس تركيز العناصر الغذائية الكلي. منخفض جداً = جوع النبات. مرتفع جداً = حرق الجذور.",
    priority: "حرج",
  },
  {
    label: "درجة حرارة المياه",
    range: "18 – 24°C",
    why: "فوق 28°C تنمو البكتيريا الضارة وتتراجع الأكسجين الذائبة. عامل رئيسي في إخفاقات الصيف السعودي.",
    priority: "حرج",
  },
  {
    label: "درجة حرارة الهواء",
    range: "18 – 30°C (حسب المحصول)",
    why: "تؤثر على معدل التبخر وبالتالي على تركيز العناصر في المحلول. ترتفع EC بارتفاع الحرارة.",
    priority: "مهم",
  },
  {
    label: "الرطوبة النسبية",
    range: "50 – 70%",
    why: "رطوبة منخفضة = إجهاد مائي. رطوبة عالية = بيئة مثالية للفطريات والأمراض الورقية.",
    priority: "مهم",
  },
  {
    label: "الأكسجين الذائب (DO)",
    range: "6 – 8 mg/L",
    why: "مهم بشكل خاص في أنظمة Aquaponics والـ DWC. انخفاضه يُجهد الجذور ويُضعف مناعة النبات.",
    priority: "للأنظمة المتقدمة",
  },
  {
    label: "ضغط النظام",
    range: "حسب المواصفات",
    why: "للتحقق من سلامة المضخات والتوزيع المتساوي في الأنابيب. أهمّ في الأنظمة الكبيرة.",
    priority: "للأنظمة الكبيرة",
  },
];

export default function ArticlePage() {
  const priorityColor = (p: string) => {
    if (p === "حرج") return "bg-red-50 text-red-700 border-red-200";
    if (p === "مهم") return "bg-amber-50 text-amber-700 border-amber-200";
    return "bg-[#f0f7f3] text-[#0F3D2E] border-[#b3d7c3]";
  };

  return (
    <>
      <ArticleSchema
        headline="ما الذي يجب قياسه يومياً في المزرعة الذكية؟"
        description="ليست كل القراءات متساوية الأهمية. تعرّف على المؤشرات الأساسية التي يجب رصدها يومياً في المزارع الهيدروبونيكية والمحميات الذكية — وتلك التي يمكن تأجيلها."
        slug="daily-measurements-smart-farm"
        datePublished="2026-04-15"
        dateModified="2026-08-29"
        image="/api/og?title=%D9%82%D9%8A%D8%A7%D8%B3%D8%A7%D8%AA+%D8%A7%D9%84%D9%85%D8%B2%D8%B1%D8%B9%D8%A9+%D8%A7%D9%84%D8%B0%D9%83%D9%8A%D8%A9&sub=%D8%A7%D9%84%D9%85%D8%A4%D8%B4%D8%B1%D8%A7%D8%AA+%D8%A7%D9%84%D9%8A%D9%88%D9%85%D9%8A%D8%A9+%D8%A7%D9%84%D8%A3%D8%B3%D8%A7%D8%B3%D9%8A%D8%A9"
      />
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
              <span className="text-white/80">القياسات اليومية</span>
            </nav>
            <p className="text-[#A5D63F] text-sm font-bold uppercase tracking-widest mb-3">
              المعرفة · الزراعة الذكية
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-[#FAFAF7] mb-4 leading-snug">
              ما الذي يجب قياسه يومياً في المزرعة الذكية؟
            </h1>
            <ArticleByline datePublished="2026-04-15" className="text-white/60 mb-4" />
            <p className="text-white/70 text-lg leading-relaxed">
              ليست كل القراءات متساوية الأهمية. هذا ما يهمّ فعلاً — ولماذا.
            </p>
          </div>
        </header>

        {/* Article body */}
        <div className="container mx-auto px-4 max-w-4xl py-12 md:py-16">

          {/* 1. مقدمة */}
          <section className="mb-10">
            <p className="text-[#1A1A1A] text-lg leading-relaxed mb-4">
              في عالم الزراعة الذكية، هناك وفرة من البيانات التي يمكن قياسها. قد يبدو هذا ميزة، لكنه في الواقع يُربك الكثيرين. يجد المزارع نفسه أمام لوحة قراءات لا يعرف أيّها يُعطيها الأولوية — وأيّها مجرّد ضجيج.
            </p>
            <p className="text-[#1A1A1A] text-lg leading-relaxed mb-4">
              المبدأ العملي: ابدأ بالمؤشرات التي تؤثر مباشرة على صحة النبات، ثم أضف التفاصيل كلما نضجت عمليّتك. هذا المقال يضع لك هذا الترتيب بوضوح.
            </p>
          </section>

          <hr className="border-[#E5E7EB] mb-10" />

          {/* 2. المشكلة */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#0F3D2E] mb-4">المشكلة: الغرق في الأرقام</h2>
            <p className="text-[#1A1A1A] leading-relaxed mb-4">
              يحدث هذا كثيراً: يُثبّت المزارع حساسات عديدة، تتراكم القراءات على الشاشة، لكن القرارات تبقى مبنية على الحدس لأنه لا يعرف تفسير ما يرى. الأسوأ: قد يُغفل المؤشر الحرج الذي كان بالفعل أمام عينيه.
            </p>
            <p className="text-[#1A1A1A] leading-relaxed">
              الحل ليس في قياس أكثر — بل في فهم ما تعنيه الأرقام وإيلاء كل مؤشر أهميته الصحيحة.
            </p>
          </section>

          <hr className="border-[#E5E7EB] mb-10" />

          {/* 3. الشرح العملي — جدول المؤشرات */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#0F3D2E] mb-6">المؤشرات الأساسية ومعانيها</h2>

            <div className="space-y-4">
              {MEASUREMENTS.map((m) => (
                <div
                  key={m.label}
                  className="p-5 bg-white rounded-xl border border-[#E5E7EB] shadow-[0_2px_8px_rgba(15,61,46,0.06)]"
                >
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="font-bold text-[#0F3D2E] text-lg">{m.label}</h3>
                    <span
                      className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${priorityColor(m.priority)}`}
                    >
                      {m.priority}
                    </span>
                    <span className="text-sm font-medium text-[#6B7280] bg-[#FAFAF7] px-3 py-0.5 rounded-full border border-[#E5E7EB] ltr-inline">
                      {m.range}
                    </span>
                  </div>
                  <p className="text-[#6B7280] text-sm leading-relaxed">{m.why}</p>
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
                "أي نظام هيدروبونيك بصرف النظر عن الحجم",
                "المحميات الزراعية التي تتحكم في مناخها",
                "أنظمة Aquaponics (مع زيادة أهمية قياس DO)",
                "أي منشأة تُنتج للبيع وتحتاج إلى اتساق في الجودة",
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
                <h2 className="text-xl font-bold text-amber-900">متى تختلف الأولويات؟</h2>
              </div>
              <ul className="space-y-3">
                {[
                  {
                    title: "الزراعة التقليدية في التربة",
                    body: "pH التربة يُقاس بطريقة مختلفة وبتكرار أقل. EC وTDS بالشكل المذكور هنا تُطبَّق على المحاليل المائية، ليس التربة.",
                  },
                  {
                    title: "النباتات المائية الخارجية",
                    body: "في البيئات المكشوفة، تُلعب العوامل الخارجية (الريح، الأمطار، الضوء المباشر) دوراً أكبر من المؤشرات المذكورة هنا.",
                  },
                  {
                    title: "مراحل التجربة الأولى",
                    body: "إذا كنت في أول تجربة هيدروبونيك، ركّز على pH وEC فقط في البداية. أضف المؤشرات الأخرى تدريجياً مع فهمك لنظامك.",
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
            <h2 className="text-2xl font-bold text-[#0F3D2E] mb-2">روتين الصباح — قائمة تحقق يومية</h2>
            <p className="text-[#6B7280] mb-5">
              خصّص 10 دقائق كل صباح لهذه القراءات قبل بدء التشغيل.
            </p>
            <div className="space-y-3">
              {MORNING_CHECKLIST.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 bg-white rounded-lg border border-[#E5E7EB]"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#7CB342] mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-[#1A1A1A] leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <hr className="border-[#E5E7EB] mb-10" />

          {/* 7. ربط بـ iGarden */}
          <section className="mb-10 bg-[#0F3D2E]/5 rounded-xl p-6 border border-[#0F3D2E]/10">
            <p className="text-[#1A1A1A] leading-relaxed">
              <span dir="ltr" className="font-semibold">iGarden Smart OS</span> يُسجّل هذه المؤشرات تلقائياً مع الطابع الزمني لكل قراءة — دون أن تحمل قلماً أو تملأ جدولاً. يُنبّهك فقط عند الانحراف عن النطاقات التي تُحدّدها.
            </p>
            <Link
              href="/contact?interest=demo&cta=demo_access_request"
              className="inline-flex items-center gap-1 mt-3 text-[#7CB342] hover:text-[#0F3D2E] font-medium text-sm transition-colors"
            >
              <span>اطلب وصولاً إلى الديمو</span>
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            </Link>
          </section>

          {/* 8. CTA */}
          <section className="text-center py-8">
            <h2 className="text-xl font-bold text-[#0F3D2E] mb-3">هل تريد أتمتة هذه القياسات؟</h2>
            <p className="text-[#6B7280] mb-6 max-w-md mx-auto">
              <span dir="ltr">Smart Controllers</span> من iGarden يُسجّل هذه المؤشرات تلقائياً ويُنبّهك عند الانحراف — دون أن تحمل قلماً.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/products/smart-controllers"
                className="inline-block bg-[#7CB342] hover:bg-[#A5D63F] text-[#0F3D2E] px-7 py-3.5 rounded-lg font-semibold transition-colors"
              >
                تعرّف على Smart Controllers
              </Link>
              <Link
                href="/contact?interest=demo&cta=demo_access_request"
                className="inline-block border border-[#0F3D2E] text-[#0F3D2E] hover:bg-[#0F3D2E] hover:text-white px-7 py-3.5 rounded-lg font-semibold transition-colors"
              >
                اطلب وصولاً إلى الديمو
              </Link>
            </div>
          </section>

          <hr className="border-[#E5E7EB] my-8" />

          {/* Related articles */}
          <section>
            <h3 className="text-lg font-bold text-[#0F3D2E] mb-4">مقالات ذات صلة</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/learn/when-do-you-need-smart-controller"
                className="group p-4 bg-white rounded-xl border border-[#E5E7EB] hover:border-[#7CB342] transition-colors"
              >
                <p className="font-semibold text-[#0F3D2E] group-hover:text-[#7CB342] transition-colors leading-snug">
                  متى تحتاج مزرعتك إلى Smart Controller؟
                </p>
                <p className="text-[#6B7280] text-sm mt-1">خمس علامات تدلّك على الوقت المناسب</p>
              </Link>
              <Link
                href="/learn/operational-logs-farm-decisions"
                className="group p-4 bg-white rounded-xl border border-[#E5E7EB] hover:border-[#7CB342] transition-colors"
              >
                <p className="font-semibold text-[#0F3D2E] group-hover:text-[#7CB342] transition-colors leading-snug">
                  كيف تساعد سجلات التشغيل في تحسين قراراتك؟
                </p>
                <p className="text-[#6B7280] text-sm mt-1">البيانات التي تحوّل مزرعتك إلى نظام متعلّم</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
