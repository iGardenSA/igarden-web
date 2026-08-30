import type { Metadata } from "next";
import Link from "next/link";
import { FAQSchema, BreadcrumbSchema } from "@/components/shared/SchemaJsonLd";
import { CheckCircle2, AlertCircle, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "لماذا تفشل بعض أنظمة الزراعة المائية في الصيف؟ | iGarden",
  description:
    "الصيف السعودي تحدٍّ حقيقي لأنظمة الزراعة المائية. تعرّف على أربعة أسباب رئيسية للفشل في الحرارة الشديدة وكيف تتجنّبها قبل أن تبدأ الموسم.",
  alternates: { canonical: "https://igarden.sa/learn/why-hydroponic-fail-summer" },
  openGraph: {
    title: "لماذا تفشل بعض أنظمة الزراعة المائية في الصيف؟",
    description:
      "أربعة أسباب رئيسية لفشل أنظمة الهيدروبونيك في الصيف السعودي — وقائمة من 8 خطوات للتحضير قبل الذروة الحرارية.",
    images: [
      {
        url: "/api/og?title=%D9%81%D8%B4%D9%84+%D8%A7%D9%84%D8%B2%D8%B1%D8%A7%D8%B9%D8%A9+%D8%A7%D9%84%D9%85%D8%A7%D8%A6%D9%8A%D8%A9+%D9%81%D9%8A+%D8%A7%D9%84%D8%B5%D9%8A%D9%81&sub=%D8%A3%D8%B3%D8%A8%D8%A7%D8%A8+%D9%88%D8%AD%D9%84%D9%88%D9%84",
        width: 1200,
        height: 630,
        alt: "فشل الزراعة المائية في الصيف",
      },
    ],
    type: "article",
    locale: "ar_SA",
  },
  twitter: {
    card: "summary_large_image",
    title: "لماذا تفشل بعض أنظمة الزراعة المائية في الصيف؟",
    description:
      "أربعة أسباب رئيسية وقائمة تحضير للصيف السعودي.",
    images: ["/api/og?title=%D9%81%D8%B4%D9%84+%D8%A7%D9%84%D8%B2%D8%B1%D8%A7%D8%B9%D8%A9+%D8%A7%D9%84%D9%85%D8%A7%D8%A6%D9%8A%D8%A9"],
  },
};

const BREADCRUMB = [
  { name: "الرئيسية", url: "/" },
  { name: "المعرفة", url: "/learn" },
  { name: "لماذا تفشل الزراعة المائية في الصيف؟", url: "/learn/why-hydroponic-fail-summer" },
];

const FAQ_ITEMS = [
  {
    question: "ما درجة الحرارة المثالية لجذور النباتات في الهيدروبونيك؟",
    answer:
      "النطاق المثالي لمعظم المحاصيل بين 18 و24 درجة مئوية. فوق 28°C تبدأ المشاكل: تتراجع الأكسجين الذائبة في الماء، وتنشط الكائنات الدقيقة الضارة، ويتراجع امتصاص العناصر الغذائية. فوق 32°C تدخل كثير من الأنواع في إجهاد حراري حاد.",
  },
  {
    question: "كيف أحمي الخزان من ارتفاع درجة الحرارة في الصيف؟",
    answer:
      "أولاً: العزل الحراري للخزان (رغوة بولي يوريثان أو تغليف عاكس). ثانياً: الدفن الجزئي في الأرض إذا كان ذلك ممكناً. ثالثاً: التظليل الكامل بعيداً عن أشعة الشمس المباشرة. رابعاً: تشغيل المضخات ليلاً لإعادة تدوير الماء وتبريده جزئياً.",
  },
  {
    question: "هل الزراعة المائية ممكنة في جدة والمناطق الساحلية الحارة؟",
    answer:
      "نعم، لكنها تتطلب تصميماً مختلفاً عما يُستخدم في المناخات المعتدلة. المفتاح: إدارة حرارة المياه، تهوية قوية، خزانات معزولة ومظلّلة، ومراقبة مستمرة خلال ساعات الذروة. اختُبرت أنظمة iGarden في عسفان شمال جدة وتُشغَّل بنجاح في هذه الظروف.",
  },
];

const SUMMER_CHECKLIST = [
  "قياس درجة حرارة المياه يومياً (صباحاً + بعد الذروة الحرارية)",
  "عزل الخزان حرارياً أو تظليله بالكامل قبل يونيو",
  "التحقق من وضع المضخات الاحتياطية وجاهزيتها",
  "جدولة تغيير المحلول وفق حجم النظام وجودة المياه والمحصول ومؤشرات المحلول.",
  "مراجعة فلاتر الهواء وتهوية المنطقة الزراعية",
  "ضبط حساسات التنبيه لدرجة حرارة 26°C (قبل الوصول للحرج)",
  "تعديل هدف EC تدريجياً في أوج الصيف بحسب المحصول وجودة المياه واستجابة النبات",
  "توفير إضاءة اصطناعية إذا احتجت تظليل المحمية بشكل كامل",
];

const FAILURE_MODES = [
  {
    num: "١",
    title: "ارتفاع حرارة المنطقة الجذرية فوق 28°C",
    detail:
      "الجذور تحتاج أكسجيناً ذائباً. الماء الدافئ يحمل أكسجيناً أقل. عند 28°C يتراجع DO إلى مستويات تُجهد النبات. عند 32°C تنمو الكائنات الدقيقة الضارة بسرعة، خاصة الـ Pythium (العفن الجذري).",
    risk: "عالٍ جداً",
  },
  {
    num: "٢",
    title: "الخزان مكشوف أو غير معزول",
    detail:
      "خزان بلاستيكي مكشوف في يوم صيفي سعودي قد يصل ماؤه إلى 35°C+ في غضون ساعات. الحل ليس فقط التظليل — العزل الحراري ضروري لأن الشمس المنعكسة والحرارة المحيطة تُسخّن الماء حتى في الظل الجزئي.",
    risk: "عالٍ جداً",
  },
  {
    num: "٣",
    title: "المضخات تعمل عند حدود قدرتها",
    detail:
      "درجات الحرارة العالية ترفع ضغط التشغيل على المحركات. مع ارتفاع الحرارة قد تعمل المضخات لفترات أطول وتقترب من حدودها التشغيلية، بحسب الحمل والتصميم. ترتفع احتمالية العطل، وأي توقّف حتى لساعات قليلة قد يُسبّب خسائر كاملة في المحصول.",
    risk: "متوسط-عالٍ",
  },
  {
    num: "٤",
    title: "فجوات المراقبة في ساعات الذروة",
    detail:
      "الصيف يعني أن أخطر الأوقات (12 ظهراً - 4 عصراً) هي ذاتها أوقات الغياب البشري. مشاكل تحدث في هذا الوقت قد لا يُكتشف عنها إلا بعد ساعات — وهو ما يُحوّل مشكلة قابلة للحل إلى كارثة.",
    risk: "متوسط",
  },
];

export default function ArticlePage() {
  const riskColor = (r: string) => {
    if (r === "عالٍ جداً") return "bg-red-100 text-red-700 border-red-200";
    if (r === "متوسط-عالٍ") return "bg-orange-100 text-orange-700 border-orange-200";
    return "bg-amber-100 text-amber-700 border-amber-200";
  };

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
              <span className="text-white/80">الصيف والهيدروبونيك</span>
            </nav>
            <p className="text-[#A5D63F] text-sm font-bold uppercase tracking-widest mb-3">
              المعرفة · الزراعة المائية
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-[#FAFAF7] mb-4 leading-snug">
              لماذا تفشل بعض أنظمة الزراعة المائية في الصيف؟
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              الصيف السعودي يختلف عمّا صُمِّمت له معظم الأنظمة المستوردة. أربعة أسباب وثمانية حلول.
            </p>
          </div>
        </header>

        {/* Article body */}
        <div className="container mx-auto px-4 max-w-4xl py-12 md:py-16">

          {/* 1. مقدمة */}
          <section className="mb-10">
            <p className="text-[#1A1A1A] text-lg leading-relaxed mb-4">
              كثير من أنظمة الزراعة المائية المتاحة في السوق صُمِّمت في هولندا أو الولايات المتحدة أو كوريا. الجو هناك في الصيف يتراوح بين 20 و30 درجة. الصيف في جدة أو الرياض أو الأحساء شيء مختلف تماماً.
            </p>
            <p className="text-[#1A1A1A] text-lg leading-relaxed mb-4">
              هذا لا يعني أن الهيدروبونيك لا يعمل هنا — بل يعني أنه يحتاج تصميماً يأخذ هذا المناخ بالحسبان من البداية، ليس بعد الفشل الأول.
            </p>
          </section>

          <hr className="border-[#E5E7EB] mb-10" />

          {/* 2. المشكلة */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#0F3D2E] mb-4">لماذا المناخ السعودي تحدٍّ خاص؟</h2>
            <p className="text-[#1A1A1A] leading-relaxed mb-4">
              في درجات الحرارة المرتفعة خلال ذروة الصيف، ومع رطوبة ساحلية عالية في جدة، وأحمال كهربائية ضخمة على معدات التبريد — هذا المزيج يخلق ضغطاً تشغيلياً لم تُختبر فيه معظم المعدات المستوردة.
            </p>
            <p className="text-[#1A1A1A] leading-relaxed">
              المشكلة الأخطر أن الإخفاق لا يحدث تدريجياً — يحدث بسرعة. نبات يبدو بصحة جيدة صباحاً قد يكون في حالة حرجة ظهراً إذا وصلت حرارة المياه إلى الحد الحرج.
            </p>
          </section>

          <hr className="border-[#E5E7EB] mb-10" />

          {/* 3. الشرح العملي */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#0F3D2E] mb-6">الأسباب الأربعة الرئيسية للفشل الصيفي</h2>

            <div className="space-y-6">
              {FAILURE_MODES.map((m) => (
                <div
                  key={m.num}
                  className="p-5 bg-white rounded-xl border border-[#E5E7EB] shadow-[0_2px_8px_rgba(15,61,46,0.06)]"
                >
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-full bg-[#0F3D2E] text-[#A5D63F] font-bold flex items-center justify-center flex-shrink-0" aria-hidden="true">
                      {m.num}
                    </div>
                    <h3 className="font-bold text-[#0F3D2E] flex-1">{m.title}</h3>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${riskColor(m.risk)}`}>
                      خطر {m.risk}
                    </span>
                  </div>
                  <p className="text-[#6B7280] leading-relaxed text-sm">{m.detail}</p>
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
                "أي نظام هيدروبونيك في المناطق الساحلية الحارة: جدة، ينبع، الجبيل، الدمام",
                "المزارع في المناطق الداخلية ذات الحرارة الجافة: الرياض، بريدة، حائل",
                "الأنظمة المكشوفة أو شبه المكشوفة دون تبريد مناخي",
                "أي منشأة تستخدم خزانات من البلاستيك غير المعزول",
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
                <h2 className="text-xl font-bold text-amber-900">متى تكون هذه المخاوف أقل حدة؟</h2>
              </div>
              <ul className="space-y-3">
                {[
                  {
                    title: "البيئات المُكيَّفة بالكامل",
                    body: "إذا كانت المزرعة داخل مبنى مُبرَّد ومُحكم والخزانات داخل نفس المنطقة، تنخفض مخاطر ارتفاع الحرارة بشكل كبير.",
                  },
                  {
                    title: "المرتفعات المعتدلة",
                    body: "مناطق كأبها وتنومة وبعض أجزاء الطائف تتمتع بصيف أكثر اعتدالاً. المشاكل المذكورة هنا أقل حدة هناك.",
                  },
                  {
                    title: "الأنظمة التجريبية الصغيرة داخلياً",
                    body: "إذا كنت تُجرّب على نطاق صغير في مساحة مُكيَّفة، يمكنك تأجيل بعض هذه الاستعدادات حتى توسيع العملية.",
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
            <h2 className="text-2xl font-bold text-[#0F3D2E] mb-2">قائمة التحضير الصيفي — 8 خطوات</h2>
            <p className="text-[#6B7280] mb-5">
              أكمل هذه الخطوات قبل بداية أبريل (قبل أن تبدأ الحرارة في الارتفاع التدريجي).
            </p>
            <div className="space-y-3">
              {SUMMER_CHECKLIST.map((item, i) => (
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
              <span dir="ltr" className="font-semibold">iGarden</span> تُصمّم أنظمتها الزراعية بأخذ مناخ السعودية نقطة البداية — لا تكيّفاً لاحقاً. توضح ظروف الصيف أهمية مواءمة التصميم والتشغيل مع الحرارة الفعلية في الموقع.
            </p>
            <Link
              href="/osfan-station"
              className="inline-flex items-center gap-1 mt-3 text-[#7CB342] hover:text-[#0F3D2E] font-medium text-sm transition-colors"
            >
              <span>شاهد مرفق R&D في عسفان</span>
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            </Link>
          </section>

          {/* 8. CTA */}
          <section className="text-center py-8">
            <h2 className="text-xl font-bold text-[#0F3D2E] mb-3">هل نظامك مستعد للصيف القادم؟</h2>
            <p className="text-[#6B7280] mb-6 max-w-md mx-auto">
              أنظمة iGarden الهيدروبونيكية مُصمَّمة لمناخ السعودية — تُجهّز المنظومة وفق ظروف الموقع ومتطلبات التشغيل الصيفية.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/products/hydroponics"
                className="inline-block bg-[#7CB342] hover:bg-[#A5D63F] text-[#0F3D2E] px-7 py-3.5 rounded-lg font-semibold transition-colors"
              >
                تعرّف على أنظمة الزراعة المائية
              </Link>
              <Link
                href="/osfan-station"
                className="inline-block border border-[#0F3D2E] text-[#0F3D2E] hover:bg-[#0F3D2E] hover:text-white px-7 py-3.5 rounded-lg font-semibold transition-colors"
              >
                شاهد مرفق R&D في عسفان
              </Link>
            </div>
          </section>

          <hr className="border-[#E5E7EB] my-8" />

          {/* Related articles */}
          <section>
            <h3 className="text-lg font-bold text-[#0F3D2E] mb-4">مقالات ذات صلة</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/learn/hydroponic-vs-traditional"
                className="group p-4 bg-white rounded-xl border border-[#E5E7EB] hover:border-[#7CB342] transition-colors"
              >
                <p className="font-semibold text-[#0F3D2E] group-hover:text-[#7CB342] transition-colors leading-snug">
                  الفرق بين الزراعة المائية والزراعة التقليدية
                </p>
                <p className="text-[#6B7280] text-sm mt-1">مقارنة موضوعية لمساعدتك على الاختيار الصحيح</p>
              </Link>
              <Link
                href="/learn/daily-measurements-smart-farm"
                className="group p-4 bg-white rounded-xl border border-[#E5E7EB] hover:border-[#7CB342] transition-colors"
              >
                <p className="font-semibold text-[#0F3D2E] group-hover:text-[#7CB342] transition-colors leading-snug">
                  ما الذي يجب قياسه يومياً في المزرعة الذكية؟
                </p>
                <p className="text-[#6B7280] text-sm mt-1">المؤشرات الأساسية ونطاقاتها الآمنة</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
