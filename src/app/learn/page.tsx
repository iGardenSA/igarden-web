import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";
import { BreadcrumbSchema } from "@/components/shared/SchemaJsonLd";

export const metadata: Metadata = {
  title: "المعرفة — أكاديمية iGarden | iGarden",
  description:
    "مكتبة معرفية عملية حول الزراعة الذكية، الحساسات، أنظمة التحكم، والزراعة المائية في البيئة السعودية. مقالات موضوعية وصادقة بدون مبالغات.",
  alternates: { canonical: "https://igarden.sa/learn" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "المعرفة — أكاديمية iGarden | iGarden",
    description:
      "مقالات عملية عن الزراعة الذكية والهيدروبونيك في البيئة السعودية.",
    images: [
      {
        url: "/api/og?title=%D8%A3%D9%83%D8%A7%D8%AF%D9%8A%D9%85%D9%8A%D8%A9+iGarden&sub=%D9%85%D8%B9%D8%B1%D9%81%D8%A9+%D8%B9%D9%85%D9%84%D9%8A%D8%A9+%D9%84%D9%84%D9%85%D8%B2%D8%A7%D8%B1%D8%B9",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
    locale: "ar_SA",
  },
};

const BREADCRUMB = [
  { name: "الرئيسية", url: "/" },
  { name: "المعرفة", url: "/learn" },
];

const ARTICLES = [
  {
    slug: "when-do-you-need-smart-controller",
    title: "متى تحتاج مزرعتك إلى Smart Controller؟",
    excerpt:
      "ليست كل مزرعة بحاجة إلى وحدة تحكم ذكية اليوم. خمس علامات واضحة تدلّك على أن الوقت حان — وثلاثة حالات لا تحتاجه فيها بعد.",
    tag: "Smart Controllers",
    readTime: "5 دقائق",
  },
  {
    slug: "daily-measurements-smart-farm",
    title: "ما الذي يجب قياسه يومياً في المزرعة الذكية؟",
    excerpt:
      "ليست كل القراءات متساوية الأهمية. تعرّف على المؤشرات الأساسية وروتين القياس الصباحي الذي يكفيك لمتابعة صحة نظامك.",
    tag: "إدارة المزرعة",
    readTime: "6 دقائق",
  },
  {
    slug: "operational-logs-farm-decisions",
    title: "كيف تساعد سجلات التشغيل في تحسين قرارات المزرعة؟",
    excerpt:
      "البيانات بدون تسجيل حكمة ضائعة. سجلات التشغيل تُحوّل مزرعتك من عمليّة تعتمد على الذاكرة إلى نظام متعلّم.",
    tag: "إدارة المزرعة",
    readTime: "5 دقائق",
  },
  {
    slug: "why-hydroponic-fail-summer",
    title: "لماذا تفشل بعض أنظمة الزراعة المائية في الصيف؟",
    excerpt:
      "الصيف السعودي يختلف عمّا صُمِّمت له معظم الأنظمة المستوردة. أربعة أسباب رئيسية وثمانية خطوات للتحضير.",
    tag: "الزراعة المائية",
    readTime: "6 دقائق",
  },
  {
    slug: "hydroponic-vs-traditional",
    title: "الفرق بين الزراعة المائية والزراعة التقليدية",
    excerpt:
      "ليست الأفضل أو الأسوأ — كل منهما مناسب لظروف مختلفة. مقارنة موضوعية تُساعدك على اختيار النظام الصحيح.",
    tag: "مقارنة الأنظمة",
    readTime: "7 دقائق",
  },
];

export default function LearnPage() {
  return (
    <>
      <BreadcrumbSchema items={BREADCRUMB} />

      <main dir="rtl">
        {/* Header */}
        <header className="bg-[#0F3D2E] py-16 md:py-20">
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 mb-5">
              <BookOpen className="w-7 h-7 text-[#A5D63F]" aria-hidden="true" />
            </div>
            <p className="text-[#A5D63F] text-sm font-bold uppercase tracking-widest mb-3">
              المعرفة
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-[#FAFAF7] mb-4">
              أكاديمية iGarden
            </h1>
            <p className="text-white/70 text-lg max-w-xl mx-auto leading-relaxed">
              مقالات عملية وموضوعية عن الزراعة الذكية والهيدروبونيك — مكتوبة من تجربة ميدانية حقيقية في محطة عسفان.
            </p>
          </div>
        </header>

        {/* Articles grid */}
        <div className="container mx-auto px-4 max-w-5xl py-14 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ARTICLES.map((article) => (
              <Link
                key={article.slug}
                href={`/learn/${article.slug}`}
                className="group flex flex-col bg-white rounded-2xl border border-[#E5E7EB] shadow-[0_2px_8px_rgba(15,61,46,0.06)] hover:border-[#7CB342] hover:shadow-[0_4px_16px_rgba(15,61,46,0.10)] transition-all duration-200 overflow-hidden"
              >
                <div className="p-6 flex flex-col flex-1">
                  {/* Tag + read time */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#7CB342] bg-[#7CB342]/10 px-2.5 py-1 rounded-full">
                      {article.tag}
                    </span>
                    <span className="text-xs text-[#6B7280]">{article.readTime}</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-lg font-bold text-[#0F3D2E] group-hover:text-[#7CB342] transition-colors leading-snug mb-3">
                    {article.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-[#6B7280] text-sm leading-relaxed flex-1">
                    {article.excerpt}
                  </p>

                  {/* Read more */}
                  <div className="flex items-center gap-1 mt-5 text-sm font-semibold text-[#7CB342] group-hover:text-[#0F3D2E] transition-colors">
                    <span>اقرأ المقال</span>
                    <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-14 text-center bg-[#0F3D2E]/5 rounded-2xl border border-[#0F3D2E]/10 py-10 px-6">
            <h2 className="text-xl font-bold text-[#0F3D2E] mb-3">هل لديك سؤال محدد عن مزرعتك؟</h2>
            <p className="text-[#6B7280] max-w-md mx-auto mb-6 leading-relaxed">
              المقالات تُجيب على الأسئلة العامة — لكن كل مزرعة لها خصوصيتها. تحدّث معنا مباشرة.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#0F3D2E] hover:bg-[#1B5E3F] text-white px-7 py-3.5 rounded-lg font-semibold transition-colors"
            >
              <span>احجز استشارة</span>
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
