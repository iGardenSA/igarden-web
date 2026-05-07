import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "أكاديمية الحديقة الذكية",
  description:
    "مكتبة معرفية عملية حول الزراعة الذكية، الحساسات، أنظمة التحكم، والزراعة المائية في البيئة السعودية.",
  robots: { index: false, follow: false },
};

export default function LearnPage() {
  return (
    <main className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center bg-[#FAFAF7]">
      <div className="w-16 h-16 rounded-2xl bg-[#0F3D2E]/8 flex items-center justify-center mb-6">
        <BookOpen className="w-8 h-8 text-[#7CB342]" aria-hidden="true" />
      </div>
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#7CB342] mb-4">
        قريباً
      </p>
      <h1 className="text-3xl md:text-4xl font-bold text-[#0F3D2E] mb-4">
        أكاديمية الحديقة الذكية
      </h1>
      <p className="text-[#6B7280] max-w-md leading-relaxed mb-8">
        نعمل على بناء مكتبة معرفية عملية حول الزراعة الذكية، الحساسات،
        أنظمة التحكم، والزراعة المائية في البيئة السعودية.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 items-center">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-[#0F3D2E] text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-[#1B5E3F] transition-colors"
        >
          <span>أبلغني عند الإطلاق</span>
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
        </Link>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#0F3D2E] hover:text-[#7CB342] transition-colors"
        >
          <span>الرئيسية</span>
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
        </Link>
      </div>
    </main>
  );
}
