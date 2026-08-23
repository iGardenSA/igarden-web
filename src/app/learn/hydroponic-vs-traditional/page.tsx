import type { Metadata } from "next";
import Link from "next/link";
import { FAQSchema, BreadcrumbSchema } from "@/components/shared/SchemaJsonLd";
import { CheckCircle2, AlertCircle, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "الفرق بين الزراعة المائية والزراعة التقليدية | iGarden",
  description:
    "ليست الأفضل أو الأسوأ — كل منهما مناسب لظروف مختلفة. مقارنة موضوعية تُساعدك على اختيار النظام الزراعي المناسب لوضعك الفعلي.",
  alternates: { canonical: "https://igarden.sa/learn/hydroponic-vs-traditional" },
  openGraph: {
    title: "الفرق بين الزراعة المائية والزراعة التقليدية",
    description:
      "مقارنة موضوعية بين الزراعة الهيدروبونيكية والتقليدية: المياه، المساحة، التكلفة، أنواع المحاصيل، ومتطلبات الخبرة.",
    images: [
      {
        url: "/api/og?title=%D8%A7%D9%84%D8%B2%D8%B1%D8%A7%D8%B9%D8%A9+%D8%A7%D9%84%D9%85%D8%A7%D8%A6%D9%8A%D8%A9+%D9%85%D9%82%D8%A7%D8%A8%D9%84+%D8%A7%D9%84%D8%AA%D9%82%D9%84%D9%8A%D8%AF%D9%8A%D8%A9&sub=%D9%85%D9%82%D8%A7%D8%B1%D9%86%D8%A9+%D9%85%D9%88%D8%B6%D9%88%D8%B9%D9%8A%D8%A9",
        width: 1200,
        height: 630,
        alt: "الزراعة المائية مقابل التقليدية",
      },
    ],
    type: "article",
    locale: "ar_SA",
  },
  twitter: {
    card: "summary_large_image",
    title: "الفرق بين الزراعة المائية والزراعة التقليدية",
    description:
      "مقارنة موضوعية تُساعدك على اختيار النظام الزراعي المناسب لوضعك.",
    images: ["/api/og?title=%D8%A7%D9%84%D8%B2%D8%B1%D8%A7%D8%B9%D8%A9+%D8%A7%D9%84%D9%85%D8%A7%D8%A6%D9%8A%D8%A9+%D9%85%D9%82%D8%A7%D8%A8%D9%84"],
  },
};

const BREADCRUMB = [
  { name: "الرئيسية", url: "/" },
  { name: "المعرفة", url: "/learn" },
  { name: "الزراعة المائية مقابل التقليدية", url: "/learn/hydroponic-vs-traditional" },
];

const FAQ_ITEMS = [
  {
    question: "هل الزراعة المائية أرخص من التقليدية؟",
    answer:
      "التكلفة التشغيلية لكلّ كيلو منتَج قد تكون أقل في الهيدروبونيك بسبب كفاءة المياه والإنتاجية المرتفعة — لكن تكلفة الإعداد الأولى أعلى بكثير. الزراعة التقليدية أرخص في البداية، لكنها قد تكون أعلى تكلفة على المدى البعيد بسبب هدر المياه وضعف الإنتاجية.",
  },
  {
    question: "أيّ المحاصيل تنجح في الزراعة المائية؟",
    answer:
      "الأفضل أداءً: الخضروات الورقية (خس، سبانخ، ريحان، نعناع)، الطماطم والخيار والفلفل، الفراولة. صعوبة متوسطة: البطيخ والقرع (تحتاج دعامات). غير مناسب تجارياً: القمح والأرز والذرة والبطاطس (تنجح تقنياً لكن الجدوى الاقتصادية محدودة مقارنة بالزراعة التقليدية).",
  },
  {
    question: "هل يمكن تحويل مزرعة تقليدية إلى هيدروبونيك؟",
    answer:
      "نعم، لكن هذا ليس مجرّد استبدال معدات. الزراعة الهيدروبونيكية تتطلب فهم مختلف لإدارة العناصر الغذائية، ومراقبة مختلفة، وخبرة تتراكم تدريجياً. التحول الجزئي (تخصيص قسم محدود للهيدروبونيك) أحكم من التحول الكامل دفعة واحدة.",
  },
];

const COMPARISON = [
  {
    aspect: "استهلاك المياه",
    hydro: "أقل بشكل ملحوظ للنبات الواحد (إعادة تدوير مستمرة)",
    trad: "استهلاك مرتفع — معظمه يتبخر أو ينضح في التربة",
    winner: "hydro",
  },
  {
    aspect: "كثافة الإنتاج",
    hydro: "إنتاجية أعلى في نفس المساحة (زراعة عمودية)",
    trad: "محدود بمساحة التربة المتاحة",
    winner: "hydro",
  },
  {
    aspect: "تكلفة الإعداد",
    hydro: "أعلى (بنية تحتية، خزانات، حساسات، مضخات)",
    trad: "أقل بكثير في الأنظمة البسيطة",
    winner: "trad",
  },
  {
    aspect: "الخبرة المطلوبة",
    hydro: "متخصصة: إدارة pH وEC وعناصر غذائية",
    trad: "عامة: خبرة في التربة والتسميد التقليدي",
    winner: "neutral",
  },
  {
    aspect: "أنواع المحاصيل",
    hydro: "مثالي للخضروات الورقية والطماطم والخيار — محدود للمحاصيل الجذرية الكبيرة",
    trad: "يدعم كل أنواع المحاصيل",
    winner: "trad",
  },
  {
    aspect: "التكلفة التشغيلية",
    hydro: "كهرباء للمضخات والإضاءة، عناصر غذائية متخصصة",
    trad: "أسمدة، مبيدات (أحياناً)، آليات حراثة",
    winner: "neutral",
  },
  {
    aspect: "الإيرادات المتكررة",
    hydro: "دورات إنتاج أسرع = دخل أكثر تكراراً",
    trad: "موسمي — قد يمتد إلى شهور بين الدورات",
    winner: "hydro",
  },
  {
    aspect: "التوسع",
    hydro: "قابل للتوسع بإضافة وحدات وتكرار النظام",
    trad: "يتطلب مساحة إضافية من الأرض",
    winner: "hydro",
  },
];

const SELF_ASSESSMENT = [
  "هل المياه مكلفة أو محدودة في موقعي؟",
  "هل المساحة الأرضية المتاحة محدودة؟",
  "هل أستهدف محاصيل ذات قيمة عالية كالخضروات الورقية؟",
  "هل لدي قدرة على التعلم والإدارة التقنية (أو فريق يستطيع ذلك)؟",
  "هل الميزانية الأولية تتحمّل تكلفة البنية التحتية؟",
  "هل أستهدف بيئة محكومة (محمية أو داخلية)؟",
  "هل الإنتاج على مدار السنة ضرورة لمشروعي؟",
];

export default function ArticlePage() {
  const winnerStyle = (w: string, side: "hydro" | "trad") => {
    if (w === "hydro" && side === "hydro")
      return "bg-[#f0f7f3] border-[#7CB342]/40 text-[#0F3D2E]";
    if (w === "trad" && side === "trad")
      return "bg-[#f0f7f3] border-[#7CB342]/40 text-[#0F3D2E]";
    return "bg-white border-[#E5E7EB] text-[#1A1A1A]";
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
              <span className="text-white/80">هيدروبونيك مقابل تقليدي</span>
            </nav>
            <p className="text-[#A5D63F] text-sm font-bold uppercase tracking-widest mb-3">
              المعرفة · مقارنة الأنظمة
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-[#FAFAF7] mb-4 leading-snug">
              الفرق بين الزراعة المائية والزراعة التقليدية
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              ليست الأفضل أو الأسوأ — كل منهما مناسب لظروف مختلفة. مقارنة موضوعية لمساعدتك.
            </p>
          </div>
        </header>

        {/* Article body */}
        <div className="container mx-auto px-4 max-w-4xl py-12 md:py-16">

          {/* 1. مقدمة */}
          <section className="mb-10">
            <p className="text-[#1A1A1A] text-lg leading-relaxed mb-4">
              تنتشر في السوق ادعاءات مبالغ فيها من الجانبين: «الهيدروبونيك أفضل في كل شيء» أو «الزراعة التقليدية هي الأصل ولا تُعوَّض». الحقيقة أبسط وأكثر نفعاً: كل نظام متفوّق في سياق معيّن، وضعيف في سياق آخر.
            </p>
            <p className="text-[#1A1A1A] text-lg leading-relaxed">
              المشكلة الحقيقية: الناس يشترون أنظمة هيدروبونيك بتوقعات غير واقعية ويُصابون بخيبة أمل. أو يتمسكون بالزراعة التقليدية في مواضع يكون فيها التحول مربحاً جداً. هذا المقال يضع الصورة كاملة.
            </p>
          </section>

          <hr className="border-[#E5E7EB] mb-10" />

          {/* 2. المشكلة */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#0F3D2E] mb-4">لماذا يفشل كثيرون في الاختيار الصحيح؟</h2>
            <p className="text-[#1A1A1A] leading-relaxed mb-4">
              القرار يُبنى على ما رآه المزارع في فيديو على يوتيوب، أو ما فعله جار، أو على توصية مورّد له مصلحة في بيع منتج بعينه. نادراً ما يُبنى القرار على تقييم حقيقي للموقع والميزانية والمهارات المتاحة.
            </p>
            <p className="text-[#1A1A1A] leading-relaxed">
              النتيجة: منشآت هيدروبونيك تفشل لأن أصحابها لم يكونوا مستعدين تقنياً، أو مزارع تقليدية تستنزف مياه جوفية بتكلفة باهظة في مناطق يمكن للهيدروبونيك فيها تحقيق تقليصٍ جوهري في استهلاك المياه.
            </p>
          </section>

          <hr className="border-[#E5E7EB] mb-10" />

          {/* 3. الشرح العملي — جدول المقارنة */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#0F3D2E] mb-6">المقارنة المباشرة</h2>
            <p className="text-[#6B7280] text-sm mb-5">
              الخلفية الخضراء الفاتحة تُشير إلى الجانب الأقوى في كل محور. "محايد" يعني أن المقارنة تعتمد على الوضع.
            </p>

            <div className="space-y-3">
              {/* Header */}
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3 bg-[#0F3D2E] text-[#A5D63F] font-bold text-sm rounded-lg text-center">المحور</div>
                <div className="p-3 bg-[#0F3D2E] text-[#A5D63F] font-bold text-sm rounded-lg text-center">هيدروبونيك</div>
                <div className="p-3 bg-[#0F3D2E] text-[#A5D63F] font-bold text-sm rounded-lg text-center">تقليدي</div>
              </div>

              {COMPARISON.map((row) => (
                <div key={row.aspect} className="grid grid-cols-3 gap-3 items-stretch">
                  <div className="p-3 bg-white border border-[#E5E7EB] rounded-lg font-semibold text-[#0F3D2E] text-sm flex items-center">
                    {row.aspect}
                  </div>
                  <div className={`p-3 border rounded-lg text-sm leading-relaxed ${winnerStyle(row.winner, "hydro")}`}>
                    {row.hydro}
                  </div>
                  <div className={`p-3 border rounded-lg text-sm leading-relaxed ${winnerStyle(row.winner, "trad")}`}>
                    {row.trad}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <hr className="border-[#E5E7EB] mb-10" />

          {/* 4. متى ينطبق الهيدروبونيك */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#0F3D2E] mb-4">متى الهيدروبونيك هو الاختيار الصحيح؟</h2>
            <ul className="space-y-2 text-[#1A1A1A]">
              {[
                "المياه شحيحة أو مكلفة في موقعك (أغلب مناطق السعودية)",
                "الأرض محدودة وتريد زيادة الإنتاجية لكل متر مربع",
                "تستهدف محاصيل ذات قيمة عالية: خس، بقدونس، طماطم شيري، خيار",
                "تريد إنتاجاً على مدار السنة في بيئة محكومة",
                "لديك (أو ستُكوّن) القدرة على إدارة المنظومة تقنياً",
                "تستهدف سوق المطاعم أو التجزئة الراقية التي تدفع أسعار مميزة",
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
                <h2 className="text-xl font-bold text-amber-900">متى الزراعة التقليدية أنسب؟</h2>
              </div>
              <ul className="space-y-3">
                {[
                  {
                    title: "المحاصيل الكبيرة بالجملة (Commodity Crops)",
                    body: "قمح، شعير، ذرة — هذه محاصيل يعتمد ربحها على الحجم الكبير وتكلفة الإنتاج المنخفضة. الهيدروبونيك غير مجدٍ اقتصادياً لها في معظم الحالات.",
                  },
                  {
                    title: "الميزانية المحدودة جداً للإعداد",
                    body: "إذا لم تكن الميزانية تسمح بنظام مصمّم ومركّب بشكل صحيح، الزراعة التقليدية أأمن. نظام هيدروبونيك رخيص مبني بشكل خاطئ أسوأ من لا شيء.",
                  },
                  {
                    title: "غياب الكادر التقني",
                    body: "إذا لم يكن هناك شخص في الفريق يفهم إدارة pH وEC والعناصر الغذائية، أو الرغبة في التعلّم، فإن الفشل في الهيدروبونيك مرجّح بغض النظر عن جودة المعدات.",
                  },
                  {
                    title: "مناطق بتربة خصبة طبيعية",
                    body: "في المناطق التي تتميز بتربة زراعية طبيعية عالية الجودة، الزراعة التقليدية تظل خياراً قوياً لكثير من أنواع المحاصيل.",
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
            <h2 className="text-2xl font-bold text-[#0F3D2E] mb-2">قبل أن تختار — اسأل نفسك</h2>
            <p className="text-[#6B7280] mb-5">
              أجب على هذه الأسئلة بصدق قبل اتخاذ القرار. لا توجد إجابات صحيحة أو خاطئة — هي فقط لمساعدتك على تقييم وضعك.
            </p>
            <div className="space-y-3">
              {SELF_ASSESSMENT.map((item, i) => (
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
              إذا أجبت بـ«نعم» على أغلب هذه الأسئلة، الهيدروبونيك خيار يستحق الدراسة الجدية.
            </p>
          </section>

          <hr className="border-[#E5E7EB] mb-10" />

          {/* 7. ربط بـ iGarden */}
          <section className="mb-10 bg-[#0F3D2E]/5 rounded-xl p-6 border border-[#0F3D2E]/10">
            <p className="text-[#1A1A1A] leading-relaxed">
              <span dir="ltr" className="font-semibold">iGarden</span> لا تدفع نحو حل بعينه — نُقيّم وضعك أولاً ثم نُوصي بما يناسبك فعلاً، حتى لو كان هذا يعني إخبارك أن الهيدروبونيك ليس الأنسب لك في الوقت الحالي.
            </p>
            <Link
              href="/products/hydroponics"
              className="inline-flex items-center gap-1 mt-3 text-[#7CB342] hover:text-[#0F3D2E] font-medium text-sm transition-colors"
            >
              <span>أنظمة الزراعة المائية من iGarden</span>
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            </Link>
          </section>

          {/* 8. CTA */}
          <section className="text-center py-8">
            <h2 className="text-xl font-bold text-[#0F3D2E] mb-3">هل تريد تقييماً لموقعك ووضعك؟</h2>
            <p className="text-[#6B7280] mb-6 max-w-md mx-auto">
              صِف لنا مزرعتك أو مشروعك وسنُعطيك رأياً صادقاً في أيّ النظامين أنسب لوضعك — دون ضغط للبيع.
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
                href="/learn/why-hydroponic-fail-summer"
                className="group p-4 bg-white rounded-xl border border-[#E5E7EB] hover:border-[#7CB342] transition-colors"
              >
                <p className="font-semibold text-[#0F3D2E] group-hover:text-[#7CB342] transition-colors leading-snug">
                  لماذا تفشل بعض أنظمة الزراعة المائية في الصيف؟
                </p>
                <p className="text-[#6B7280] text-sm mt-1">الأسباب والحلول الخاصة بالمناخ السعودي</p>
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
