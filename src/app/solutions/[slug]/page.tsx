import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "الحلول — قريباً",
  robots: { index: false, follow: false },
};

export default function SolutionSlugPage() {
  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#7CB342] mb-4">
        قريباً
      </p>
      <h1 className="text-3xl md:text-4xl font-bold text-[#0F3D2E] mb-4">
        نُجهّز هذا القسم
      </h1>
      <p className="text-[#6B7280] max-w-md mb-8">
        صفحة الحل التفصيلية قيد الإعداد. تواصل معنا مباشرةً وسنُجيب على جميع أسئلتك.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 items-center">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-[#0F3D2E] text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-[#1B5E3F] transition-colors"
        >
          <span>تواصل معنا</span>
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
        </Link>
        <Link
          href="/solutions"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#0F3D2E] hover:text-[#7CB342] transition-colors"
        >
          <span>كل الحلول</span>
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
        </Link>
      </div>
    </main>
  );
}
