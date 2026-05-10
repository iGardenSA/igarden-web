import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { COMPANY, CONTACT } from "@/lib/constants";
import { BreadcrumbSchema } from "@/components/shared/SchemaJsonLd";

export const metadata: Metadata = {
  title: "Fact Sheet — بيانات الشركة الرسمية | iGarden",
  description:
    "البيانات القانونية والتشغيلية الرسمية لشركة انتيليجنت غاردن (iGarden) — السجل التجاري، رخصة MISA، النموذج الصناعي SAIP، والنطاقات الرسمية.",
  alternates: { canonical: "https://igarden.sa/fact-sheet" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Fact Sheet — بيانات الشركة الرسمية | iGarden",
    description: "البيانات القانونية والتشغيلية الرسمية — MISA · SAIP · CR.",
    images: [{ url: "/api/og?title=Fact+Sheet+%E2%80%94+iGarden&sub=%D8%A8%D9%8A%D8%A7%D9%86%D8%A7%D8%AA+%D8%A7%D9%84%D8%B4%D8%B1%D9%83%D8%A9+%D8%A7%D9%84%D8%B1%D8%B3%D9%85%D9%8A%D8%A9", width: 1200, height: 630 }],
    type: "website",
    locale: "ar_SA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fact Sheet — iGarden",
    description: "البيانات القانونية الرسمية — MISA · SAIP · CR.",
    images: ["/api/og?title=Fact+Sheet+%E2%80%94+iGarden"],
  },
};

const BREADCRUMB = [
  { name: "الرئيسية", url: "/" },
  { name: "Fact Sheet", url: "/fact-sheet" },
];

export default function FactSheetPage() {
  return (
    <>
      <BreadcrumbSchema items={BREADCRUMB} />
      {/* Hero */}
      <section className="bg-deep-green py-16 md:py-20" dir="rtl">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-lime text-sm font-bold uppercase tracking-widest mb-3">
            وثيقة رسمية
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-cream mb-4">
            Fact Sheet
          </h1>
          <p className="text-cream/70 text-base max-w-xl mx-auto leading-relaxed">
            البيانات القانونية والتشغيلية الرسمية لشركة{" "}
            <span dir="ltr" className="ltr-inline font-latin">iGarden</span>
            . هذه الصفحة تمنع أي تضارب في الأسماء أو الأرقام الرسمية.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-white py-16" dir="rtl">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-10">

            {/* الهوية التجارية */}
            <FactBlock title="الهوية التجارية">
              <FactRow label="الاسم التجاري (عربي)" value="iGarden — الحديقة الذكية" />
              <FactRow label="الاسم التجاري (لاتيني)" value="iGarden" mono />
              <FactRow label="الاسم القانوني" value={COMPANY.legalFull} />
              <FactRow label="الاسم القانوني (إنجليزي)" value="Intelligent Garden Company (L.L.C.)" mono />
              <FactRow
                label="ملاحظة"
                value='العلامة التجارية «iGarden — الحديقة الذكية» قيد التسجيل الرسمي في SAIP'
                muted
              />
            </FactBlock>

            {/* التراخيص والسجلات */}
            <FactBlock title="التراخيص والسجلات الرسمية">
              <FactRow label="السجل التجاري" value="4030579637" mono />
              <FactRow label="رخصة الاستثمار MISA" value="24926249716" mono />
              <FactRow label="نموذج صناعي SAIP" value="#423450193 (iGarden Tower)" mono />
              <FactRow label="الرقم الضريبي" value="312554598200003" mono />
              <FactRow label="رقم الكيان" value="1490078" mono />
              <FactRow label="رأس المال المسجل" value="100,000 ريال سعودي" />
            </FactBlock>

            {/* الموقع والتأسيس */}
            <FactBlock title="الموقع والتأسيس">
              <FactRow label="المقر الرئيسي" value={COMPANY.hq} />
              <FactRow label="سنة التأسيس" value="2024 (مرحلة الفكرة والنماذج)" />
              <FactRow label="الإطلاق الرسمي" value="2026 (ترخيص MISA — فبراير 2026)" />
              <FactRow label="مجال العمل" value="أنظمة الزراعة الذكية، التحكم الزراعي، الزراعة المائية، المحميات الذكية، سجلات التشغيل" />
              <FactRow label="محطة الاختبار الميداني" value="عسفان، شمال جدة (منذ 2025)" />
            </FactBlock>

            {/* النطاقات الرسمية */}
            <FactBlock title="النطاقات الرسمية">
              <FactRow
                label="الموقع الرسمي"
                value="igarden.sa"
                mono
                href="https://igarden.sa"
              />
              <FactRow
                label="المتجر الإلكتروني"
                value="shop.igarden.sa"
                mono
                href="https://shop.igarden.sa"
              />
              <FactRow
                label="الديمو التفاعلي"
                value="demo.igarden.sa"
                mono
                href="https://demo.igarden.sa"
              />
              <FactRow label="البريد الرسمي" value={CONTACT.email} mono />
              <FactRow label="الهاتف" value={CONTACT.phone} mono />
            </FactBlock>

            {/* التواصل الاجتماعي */}
            <FactBlock title="التواصل الاجتماعي">
              <FactRow label="LinkedIn" value="linkedin.com/company/igarden-sa" mono />
              <FactRow label="Instagram" value="instagram.com/igarden.sa" mono />
              <FactRow label="X (Twitter)" value="x.com/igarden_sa" mono />
            </FactBlock>

          </div>

          {/* Footer note */}
          <div className="mt-12 p-5 bg-[#FAFAF7] rounded-2xl border border-[#E5E7EB]">
            <p className="text-sm text-[#6B7280] leading-relaxed">
              هذه الصفحة تُحدَّث عند أي تغيير في البيانات القانونية أو التشغيلية.
              للتحقق من أي بيانات أو طلب وثائق رسمية، تواصل مع{" "}
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-[#0F3D2E] font-medium hover:text-[#7CB342] transition-colors"
              >
                <span dir="ltr" className="ltr-inline font-latin">{CONTACT.email}</span>
              </a>
              .
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/privacy"
              className="text-sm text-[#0F3D2E] hover:text-[#7CB342] transition-colors font-medium"
            >
              سياسة الخصوصية
            </Link>
            <Link
              href="/terms"
              className="text-sm text-[#0F3D2E] hover:text-[#7CB342] transition-colors font-medium"
            >
              الشروط والأحكام
            </Link>
            <Link
              href="/contact"
              className="text-sm text-[#0F3D2E] hover:text-[#7CB342] transition-colors font-medium"
            >
              تواصل معنا
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function FactBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-xl font-bold text-[#0F3D2E] mb-4 pb-2 border-b-2 border-[#7CB342]/30">
        {title}
      </h2>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

function FactRow({
  label,
  value,
  mono = false,
  muted = false,
  href,
}: {
  label: string;
  value: string;
  mono?: boolean;
  muted?: boolean;
  href?: string;
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 py-2 border-b border-[#E5E7EB] last:border-0">
      <span className="text-sm text-[#6B7280] sm:w-48 flex-shrink-0 font-medium">{label}</span>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-sm text-[#0F3D2E] hover:text-[#7CB342] transition-colors font-medium ltr-inline"
          dir="ltr"
        >
          {value}
          <ExternalLink className="w-3 h-3" aria-hidden="true" />
        </a>
      ) : (
        <span
          className={`text-sm flex-1 leading-relaxed ${
            mono ? "font-mono text-[#0F3D2E] ltr-inline" : muted ? "text-[#6B7280] italic" : "text-[#1A1A1A]"
          }`}
          dir={mono ? "ltr" : undefined}
        >
          {value}
        </span>
      )}
    </div>
  );
}
