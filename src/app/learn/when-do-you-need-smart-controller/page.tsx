import type { Metadata } from "next";
import Link from "next/link";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/shared/SchemaJsonLd";
import { ArticleByline } from "@/components/shared/ArticleByline";
import { CheckCircle2, AlertCircle, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "متى تحتاج مزرعتك إلى Smart Controller؟",
  description:
    "ليست كل مزرعة بحاجة إلى وحدة تحكم ذكية اليوم. خمس علامات واضحة تدلّك على أن الوقت قد حان للتحول من المراقبة اليدوية إلى أنظمة التحكم الذكي.",
  alternates: { canonical: "https://igarden.sa/learn/when-do-you-need-smart-controller" },
  openGraph: {
    title: "متى تحتاج مزرعتك إلى Smart Controller؟",
    description:
      "خمس علامات تدلّك على أن مزرعتك مستعدة للتحول نحو التحكم الذكي — وثلاثة حالات لا تحتاجه فيها بعد.",
    images: [
      {
        url: "/api/og?title=%D9%85%D8%AA%D9%89+%D8%AA%D8%AD%D8%AA%D8%A7%D8%AC+Smart+Controller%3F&sub=%D8%AE%D9%85%D8%B3+%D8%B9%D9%84%D8%A7%D9%85%D8%A7%D8%AA+%D9%88%D8%A7%D8%B6%D8%AD%D8%A9",
        width: 1200,
        height: 630,
        alt: "متى تحتاج مزرعتك إلى Smart Controller؟",
      },
    ],
    type: "article",
    locale: "ar_SA",
  },
  twitter: {
    card: "summary_large_image",
    title: "متى تحتاج مزرعتك إلى Smart Controller؟",
    description:
      "خمس علامات تدلّك على أن مزرعتك مستعدة للتحول نحو التحكم الذكي.",
    images: ["/api/og?title=%D9%85%D8%AA%D9%89+%D8%AA%D8%AD%D8%AA%D8%A7%D8%AC+Smart+Controller%3F"],
  },
};

const BREADCRUMB = [
  { name: "الرئيسية", url: "/" },
  { name: "المعرفة", url: "/learn" },
  { name: "متى تحتاج مزرعتك إلى Smart Controller؟", url: "/learn/when-do-you-need-smart-controller" },
];

const FAQ_ITEMS = [
  {
    question: "ما الفرق بين Smart Controller ووحدة التحكم العادية؟",
    answer:
      "وحدة التحكم العادية تُشغّل وتُوقف الأجهزة بناءً على جدول زمني ثابت. Smart Controller يقرأ بيانات حيّة من الحساسات ويتخذ قرارات تلقائية بناءً على قيم pH وEC ودرجة الحرارة والرطوبة — ويُسجّل كل ذلك لمراجعتها لاحقاً.",
  },
  {
    question: "ما مساحة المزرعة التي تستدعي Smart Controller؟",
    answer:
      "لا يوجد حدّ ثابت. كلما اتسعت المساحة وتعددت نقاط القياس، تراكمت كلفة المتابعة اليدوية. وفي المساحات الأصغر قد تكون المراقبة اليدوية كافية إذا كان لديك وقت كافٍ.",
  },
  {
    question: "هل يمكن ربط Smart Controller بنظام ري قائم؟",
    answer:
      "نعم. Smart Controllers مُصمَّمة لتعمل مع الأنظمة القائمة دون استبدالها بالكامل. يمكن ربطها بمضخات ودوزرات وصمامات موجودة عبر الـ GPIO والـ relays.",
  },
];

const CHECKLIST = [
  "هل تتفقد مستوى pH أو TDS يدوياً أكثر من ثلاث مرات أسبوعياً؟",
  "هل عانيت من خسائر غير مفسَّرة في المحصول خلال العام الماضي؟",
  "هل تتجاوز مساحة نظامك الزراعي 50 متراً مربعاً؟",
  "هل تُشغّل نظامك ليلاً دون مراقبة بشرية؟",
  "هل تريد توسيع عمليّتك خلال الأشهر الـ 12 القادمة؟",
  "هل لديك كهرباء مستقرّة واتصال بالإنترنت في الموقع؟",
  "هل جرّبت حلولاً يدوية وما زالت المشكلة قائمة؟",
];

export default function ArticlePage() {
  return (
    <>
      <ArticleSchema
        headline="متى تحتاج مزرعتك إلى Smart Controller؟"
        description="ليست كل مزرعة بحاجة إلى وحدة تحكم ذكية اليوم. خمس علامات واضحة تدلّك على أن الوقت قد حان للتحول من المراقبة اليدوية إلى أنظمة التحكم الذكي."
        slug="when-do-you-need-smart-controller"
        datePublished="2026-05-05"
        dateModified="2026-08-30"
        image="/api/og?title=%D9%85%D8%AA%D9%89+%D8%AA%D8%AD%D8%AA%D8%A7%D8%AC+Smart+Controller%3F&sub=%D8%AE%D9%85%D8%B3+%D8%B9%D9%84%D8%A7%D9%85%D8%A7%D8%AA+%D9%88%D8%A7%D8%B6%D8%AD%D8%A9"
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
              <span className="text-white/80">Smart Controller</span>
            </nav>
            <p className="text-[#A5D63F] text-sm font-bold uppercase tracking-widest mb-3">
              المعرفة · الزراعة الذكية
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-[#FAFAF7] mb-4 leading-snug">
              متى تحتاج مزرعتك إلى Smart Controller؟
            </h1>
            <ArticleByline datePublished="2026-05-05" className="text-white/60 mb-4" />
            <p className="text-white/70 text-lg leading-relaxed">
              خمس علامات عملية تدلّك على أن الوقت حان — وثلاثة حالات لا تحتاجه فيها بعد.
            </p>
          </div>
        </header>

        {/* Article body */}
        <div className="container mx-auto px-4 max-w-4xl py-12 md:py-16">

          {/* 1. مقدمة */}
          <section className="mb-10">
            <p className="text-[#1A1A1A] text-lg leading-relaxed mb-4">
              ليست كل مزرعة بحاجة إلى وحدة تحكم ذكية اليوم. هذه حقيقة يجب قولها قبل أيّ شيء آخر. التكنولوجيا تُضيف قيمة فقط حين تُحلّ مشكلة حقيقية — وإلا فهي تكلفة إضافية بلا عائد.
            </p>
            <p className="text-[#1A1A1A] text-lg leading-relaxed mb-4">
              السؤال الصحيح ليس «هل Smart Controller جيد؟» بل «هل مزرعتي في المرحلة التي يُضيف فيها قيمة ملموسة؟». هذا المقال يُساعدك على الإجابة بموضوعية.
            </p>
          </section>

          <hr className="border-[#E5E7EB] mb-10" />

          {/* 2. المشكلة */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#0F3D2E] mb-4">المشكلة التي يحلّها التحكم الذكي</h2>
            <p className="text-[#1A1A1A] leading-relaxed mb-4">
              في المزارع التقليدية والهيدروبونيك اليدوي، القرارات تعتمد على التخمين أو الجداول الثابتة. تُضبط المضخة على توقيت محدد بغضّ النظر عما يحدث فعلياً في الماء. تُضاف العناصر الغذائية بجرعات ثابتة دون مراعاة التغيّر اليومي في درجة الحرارة أو مرحلة نمو النبات.
            </p>
            <p className="text-[#1A1A1A] leading-relaxed mb-4">
              النتيجة: تغيّرات pH مفاجئة تمرّ دون رصد، هدر في المياه، وخسائر في المحصول لا تعرف سببها الحقيقي. الأسوأ أنك لا تملك بيانات تاريخية تستطيع الرجوع إليها عند البحث عن المشكلة.
            </p>
          </section>

          <hr className="border-[#E5E7EB] mb-10" />

          {/* 3. الشرح العملي */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#0F3D2E] mb-6">خمس علامات تدل على أنك مستعد</h2>

            <div className="space-y-6">
              {[
                {
                  num: "١",
                  title: "تتفقّد المياه يدوياً أكثر من ثلاث مرات أسبوعياً",
                  body: "إذا وجدت نفسك تكرّر قياس pH أو TDS يدوياً بهذه الوتيرة، فأنت بالفعل تحتاج قراءات مستمرة. Smart Controller يقرأ كل ساعة أو بشكل مستمر ويُنبّهك فقط عند الانحراف عن النطاق المثالي.",
                },
                {
                  num: "٢",
                  title: "عانيت من خسائر غير مفسَّرة في المحصول",
                  body: "إذا مات نبات أو تراجع المحصول ولم تستطع تحديد السبب، غالباً هناك حدث أو سلسلة أحداث حدثت بين قراءاتك اليدوية. السجلات التلقائية تُحوّل هذه الأحداث من ذاكرة مفقودة إلى بيانات يمكن تحليلها.",
                },
                {
                  num: "٣",
                  title: "مساحة نظامك تتجاوز 50 متراً مربعاً",
                  body: "ليس هذا حدّاً مطلقاً، لكنه نقطة مرجعية مفيدة. عند هذه المساحة تبدأ تكلفة الوقت البشري في المراقبة اليدوية في التراكم. كلما كبرت المساحة، زاد الفرق بين ما تستطيع رصده وما يحدث فعلاً.",
                },
                {
                  num: "٤",
                  title: "نظامك يعمل ليلاً دون مراقبة",
                  body: "المضخات والدوزرات تعمل في الظلام. إذا حدث عطل أو خروج قيمة عن النطاق الآمن الساعة الثالثة صباحاً، ماذا يحدث؟ Smart Controller يُرسل تنبيهاً فورياً ويُوقف الأجهزة عند الحاجة.",
                },
                {
                  num: "٥",
                  title: "تخطّط للتوسع خلال العام القادم",
                  body: "إذا كنت ستُضيف وحدات أو تكرّر النظام في موقع آخر، التحكم الذكي يجعل هذا التوسع قابلاً للتكرار بشكل منتظم. بدونه، كل توسّع يعني مراقبة بشرية أكثر وعمل أكثر.",
                },
              ].map((item) => (
                <div
                  key={item.num}
                  className="flex gap-4 p-5 bg-white rounded-xl border border-[#E5E7EB] shadow-[0_2px_8px_rgba(15,61,46,0.06)]"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0F3D2E] text-[#A5D63F] font-bold flex items-center justify-center text-lg" aria-hidden="true">
                    {item.num}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0F3D2E] mb-1">{item.title}</h3>
                    <p className="text-[#6B7280] leading-relaxed text-sm">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <hr className="border-[#E5E7EB] mb-10" />

          {/* 4. متى ينطبق */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#0F3D2E] mb-4">متى ينطبق هذا عليك؟</h2>
            <p className="text-[#1A1A1A] leading-relaxed mb-3">
              Smart Controllers تُناسب بشكل خاص:
            </p>
            <ul className="space-y-2 text-[#1A1A1A]">
              {[
                "المزارع الهيدروبونيكية بأي حجم تتجاوز المستوى التجريبي",
                "المحميات الزراعية التي تعمل في ظروف مناخية متغيّرة",
                "المزارع التي لديها بنية تحتية قائمة وتريد الترقية تدريجياً",
                "أي منشأة تُنتج للبيع وتحتاج إلى اتساق في الجودة",
                "المشاريع التي تُدار عن بُعد أو بفريق محدود",
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
                <h2 className="text-xl font-bold text-amber-900">متى لا تحتاجه بعد؟</h2>
              </div>
              <p className="text-amber-800 leading-relaxed mb-4">
                الصدق يقتضي ذكر الحالات التي لا يُضيف فيها Smart Controller قيمة حقيقية:
              </p>
              <ul className="space-y-3">
                {[
                  {
                    title: "الحديقة المنزلية الهاوية تحت 10 أمتار مربعة",
                    body: "المراقبة اليدوية أسهل وأسرع. التعقيد غير مبرّر للحجم.",
                  },
                  {
                    title: "مزرعة بها مشرف متفرّغ على مدار الساعة",
                    body: "إذا كان هناك شخص متابع بشكل مستمر وفعلي، قيمة التشغيل التلقائي تنخفض. قد تكون الجدوى الاقتصادية محدودة.",
                  },
                  {
                    title: "مواقع بدون كهرباء مستقرة أو إنترنت",
                    body: "يحتاج Smart Controller بنية تحتية أساسية. بدون كهرباء مستقرة، ستواجه مشاكل أكبر من التي يحلّها.",
                  },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1 flex-shrink-0">✕</span>
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
            <h2 className="text-2xl font-bold text-[#0F3D2E] mb-2">قائمة تحقق: هل أنت مستعد؟</h2>
            <p className="text-[#6B7280] mb-5">
              أجب بصدق على هذه الأسئلة. كلما كانت إجاباتك «نعم» أكثر، كلما كان الوقت مناسباً.
            </p>
            <div className="space-y-3">
              {CHECKLIST.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 bg-white rounded-lg border border-[#E5E7EB]"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#7CB342] mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-[#1A1A1A] leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-[#6B7280] text-sm mt-4">
              أجبت بـ«نعم» على 4 أو أكثر؟ على الأرجح أنت في المرحلة المناسبة للتحول.
            </p>
          </section>

          <hr className="border-[#E5E7EB] mb-10" />

          {/* 7. ربط بـ iGarden */}
          <section className="mb-10 bg-[#0F3D2E]/5 rounded-xl p-6 border border-[#0F3D2E]/10">
            <p className="text-[#1A1A1A] leading-relaxed">
              <span dir="ltr" className="font-semibold">iGarden Smart Controllers</span> مُصمَّمة لهذه المرحلة تحديداً — الانتقال من المراقبة اليدوية إلى التشغيل القائم على البيانات، دون استبدال البنية التحتية القائمة بالكامل. اختُبرت داخل مرفق R&D في عسفان لتحمّل حرارة الصيف السعودي.
            </p>
            <Link
              href="/products/smart-controllers"
              className="inline-flex items-center gap-1 mt-3 text-[#7CB342] hover:text-[#0F3D2E] font-medium text-sm transition-colors"
            >
              <span>تفاصيل Smart Controllers</span>
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            </Link>
          </section>

          {/* 8. CTA */}
          <section className="text-center py-8">
            <h2 className="text-xl font-bold text-[#0F3D2E] mb-3">غير متأكد من وضع مزرعتك؟</h2>
            <p className="text-[#6B7280] mb-6 max-w-md mx-auto">
              أرسل لنا وصفاً مختصراً لوضعك الحالي وسنعطيك رأياً صادقاً — حتى لو كان الجواب «لا تحتاجه بعد».
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
                <p className="text-[#6B7280] text-sm mt-1">قراءات أساسية ومواعيد القياس</p>
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
