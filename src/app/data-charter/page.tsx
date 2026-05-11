import type { Metadata } from "next";
import { CTAButton } from "@/components/shared/CTAButton";

export const metadata: Metadata = {
  title: "ميثاق بيانات العميل",
  description:
    "ميثاق بيانات العميل — التزامات iGarden تجاه بيانات عملائها وفق نظام PDPL السعودي.",
  alternates: { canonical: "https://igarden.sa/data-charter" },
};

const COMMITMENTS = [
  {
    num: "١",
    title: "لا نبيع بياناتك",
    desc: "بيانات تشغيل مزرعتك — قراءات pH وEC ودرجات الحرارة وسجلات الري — ملكٌ لك. لا نبيعها ولا نشاركها مع طرف ثالث لأغراض تجارية.",
  },
  {
    num: "٢",
    title: "نحتجز ما نحتاجه فقط",
    desc: "نحتفظ ببيانات التشغيل طوال فترة العقد، وبيانات الدعم الفني لمدة 12 شهراً بعد انتهاء العقد، ثم تُحذف وفق جدول واضح.",
  },
  {
    num: "٣",
    title: "تحكّم كامل لك",
    desc: "يحق لك طلب نسخة من بياناتك أو حذفها في أي وقت. نردّ على طلبات البيانات خلال 30 يوم عمل وفق نظام PDPL.",
  },
  {
    num: "٤",
    title: "نُبلّغك عند أي حادثة",
    desc: "في حال أي حادثة تؤثر على بياناتك، نُبلّغك خلال 72 ساعة ونوضّح الإجراءات المتّخذة — وفق التزاماتنا تحت PDPL.",
  },
  {
    num: "٥",
    title: "البيانات مشفَّرة ومحمية",
    desc: "بياناتك مُخزَّنة على Supabase (المنطقة الأوروبية الوسطى — فرانكفورت) مع تشفير AES-256 في التخزين و TLS 1.3 في النقل.",
  },
  {
    num: "٦",
    title: "نستخدمها لتحسين خدمتك فقط",
    desc: "نستخدم بيانات التشغيل لتقديم الدعم الفني، اكتشاف الأعطال مبكراً، وتحسين توصياتنا — لا لأغراض تسويقية بدون إذنك الصريح.",
  },
];

export default function DataCharterPage() {
  return (
    <section className="section-light py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <p className="text-lime text-sm font-bold uppercase tracking-widest mb-3">
          قانوني · PDPL
        </p>
        <h1 className="h1 text-deep-green mb-4">ميثاق بيانات العميل</h1>
        <p className="body-base text-medium-gray max-w-2xl mb-12">
          التزاماتنا الواضحة تجاه بياناتك — بدون غموض، بدون تحايل. هذه الوثيقة
          تُكمّل سياسة الخصوصية وتُحدّد حقوقك كعميل iGarden.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {COMMITMENTS.map(({ num, title, desc }) => (
            <div
              key={num}
              className="bg-white rounded-card p-6 shadow-soft border border-light-gray"
            >
              <div className="flex items-start gap-4">
                <span className="text-lime font-bold text-2xl font-latin flex-shrink-0 mt-0.5">
                  {num}
                </span>
                <div>
                  <h2 className="h4 text-deep-green mb-2">{title}</h2>
                  <p className="body-sm text-medium-gray leading-relaxed">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-deep-green rounded-card p-8 text-cream">
          <h2 className="h3 text-cream mb-3">لممارسة حقوقك</h2>
          <p className="body-base text-cream/80 mb-6">
            لطلب بياناتك أو حذفها أو الاستفسار عن أي شيء متعلّق بخصوصيتك:
          </p>
          <div className="flex flex-wrap gap-4">
            <CTAButton href="mailto:info@igarden.sa" variant="lime" external>
              info@igarden.sa
            </CTAButton>
            <CTAButton href="/privacy" variant="outline-green">
              سياسة الخصوصية الكاملة
            </CTAButton>
          </div>
        </div>

        <p className="text-sm text-medium-gray/60 mt-8 text-center">
          آخر تحديث: مايو 2026 · يسري هذا الميثاق على جميع عملاء iGarden
        </p>
      </div>
    </section>
  );
}
