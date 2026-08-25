import type { Metadata } from "next";
import { ArticleGrid } from "./_components/ArticleGrid";

export const metadata: Metadata = {
  title: "المعرفة — قبل أن تشتري اقرأ",
  description:
    "مقالات تعليمية وتأملات عملية في الزراعة الذكية، الزراعة المائية، أنظمة التحكم، وتصميم المرافق الزراعية.",
  alternates: { canonical: "https://igarden.sa/learn" },
  robots: { index: true, follow: true },
};

export default function LearnPage() {
  return (
    <main className="min-h-screen" dir="rtl">
      {/* Hero */}
      <section className="bg-gradient-to-b from-emerald-50/40 to-white py-16 md:py-24 border-b border-gray-100">
        <div className="container mx-auto max-w-5xl px-6">
          <p className="text-sm text-emerald-700 font-medium mb-3">
            المعرفة في iGarden
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            قبل أن تشتري — اقرأ.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl">
            نُؤمن أن المعرفة في الزراعة الذكية لا تُحتكر — تُبنى بالممارسة،
            وتُنضج بالمشاركة. هنا نُحرّر ما نتعلّمه من التشغيل الميداني ومرفق R&D
            في عسفان، ومن تجارب مجهّلة في بيئات صناعية مختلفة، لمن يريد أن يبني مثلنا.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-6">
          <ArticleGrid />
        </div>
      </section>
    </main>
  );
}
