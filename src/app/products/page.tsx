import type { Metadata } from "next";
import Link from "next/link";
import { ThreePillarsSection } from "@/components/sections/ThreePillarsSection";
import { ComplementaryProducts } from "@/components/sections/ComplementaryProducts";
import { CTAButton } from "@/components/shared/CTAButton";
import { Cpu, Building2, Droplets, ArrowLeft } from "lucide-react";
import { BreadcrumbSchema, ServiceSchema } from "@/components/shared/SchemaJsonLd";

export const metadata: Metadata = {
  title: "الحلول — أيّ ركيزة تُناسبك؟ | iGarden",
  description:
    "ثلاث ركائز مُختَبَرة في عسفان: Smart Controllers (رأس الحربة التقني) + المحميات الذكية + أنظمة الزراعة المائية. يَشمل iGarden Tower المُسجَّل صناعياً.",
  alternates: { canonical: "https://igarden.sa/products" },
  openGraph: {
    title: "الحلول — أيّ ركيزة تُناسبك؟ | iGarden",
    description: "ثلاث ركائز + منتجات تكميلية. كلّها مُختَبَرة في عسفان لمناخ السعودية.",
    images: [{ url: "/api/og?title=%D8%A7%D9%84%D8%AD%D9%84%D9%88%D9%84+%E2%80%94+iGarden&sub=Smart+Controllers+%2B+%D8%A7%D9%84%D9%85%D8%AD%D9%85%D9%8A%D8%A7%D8%AA+%2B+%D8%A7%D9%84%D8%B2%D8%B1%D8%A7%D8%B9%D8%A9+%D8%A7%D9%84%D9%85%D8%A7%D8%A6%D9%8A%D8%A9", width: 1200, height: 630 }],
    type: "website",
    locale: "ar_SA",
  },
  twitter: {
    card: "summary_large_image",
    title: "الحلول — أيّ ركيزة تُناسبك؟ | iGarden",
    description: "ثلاث ركائز مُختَبَرة في عسفان للمناخ السعودي.",
    images: ["/api/og?title=%D8%A7%D9%84%D8%AD%D9%84%D9%88%D9%84"],
  },
};

/* ─── Section 1: Hero ─────────────────────────────────────── */
function Hero() {
  return (
    <section className="section-light py-16 md:py-20">
      <div className="container mx-auto px-4 max-w-7xl text-center">
        <p className="text-lime text-lg font-bold uppercase tracking-widest mb-3">
          منهجنا: نَبني · نُوطّن · نُطوّر
        </p>
        <h1 className="h1 text-deep-green mb-5">أيّ ركيزة تَبدأ بها؟</h1>
        <p className="body-base text-medium-gray max-w-2xl mx-auto">
          نَبدأ من نقطة واحدة في مزرعتك، ثم نُوسّع المنظومة موسماً بعد موسم.
          اختَر مَدخلك حسب وضعك الحالي — أو اطلب استشارة مجانية لنُساعدك في
          القرار.
        </p>
      </div>
    </section>
  );
}

/* ─── Section 2: Decision Tree ────────────────────────────── */
const DECISIONS = [
  {
    Icon: Cpu,
    situation: "لديّ مزرعة قائمة وأريد تَذكيتها",
    detail: "حسّاسات، مضخّات، نظام ري — لكن بدون مراقبة لحظية أو تنبيهات.",
    recommendation: "Smart Controllers",
    why: "تَربط لوحاتنا بمعدّاتك الحالية في ١-٣ أيام، دون استبدال شيء.",
    href: "/products/smart-controllers",
    bg: "bg-brand-600",
  },
  {
    Icon: Building2,
    situation: "أَبدأ مشروعاً جديداً بمساحة كبيرة",
    detail: "أَملك أرضاً أو موقعاً، وأحتاج بنية تحتية كاملة من الصفر.",
    recommendation: "Smart Greenhouses",
    why: "نُصمّم المحمية حول محصولك ومناخك، ونُسلّم مفتاح-باليد في ٦-١٢ أسبوعاً.",
    href: "/products/smart-greenhouses",
    bg: "bg-brand-500",
  },
  {
    Icon: Droplets,
    situation: "أريد إنتاجاً عالياً في مساحة محدودة",
    detail: "محاصيل ورقية، أعشاب، أو نباتات تُحقّق زيادة إنتاجية ملموسة في نفس المتر المربّع.",
    recommendation: "أنظمة الزراعة المائية",
    why: "نَختار التقنية الأنسب من ٧ تقنيات (NFT/DWC/Tower…) — تقليص جوهري في استهلاك المياه يُقاس فردياً.",
    href: "/products/hydroponics",
    bg: "bg-corp-green",
  },
];

function DecisionTree() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-lime text-lg font-bold uppercase tracking-widest mb-2">
            ابدأ من هنا
          </p>
          <h2 className="h2 text-deep-green">ما الذي يَصِف وضعك؟</h2>
          <p className="body-base text-medium-gray max-w-2xl mx-auto mt-3">
            ثلاث حالات شائعة لعملائنا. اختَر الأقرب إليك، وسنُوصلك للحلّ الأنسب.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {DECISIONS.map((d) => (
            <Link
              key={d.recommendation}
              href={d.href}
              className="group bg-cream rounded-card p-7 shadow-soft hover:shadow-md transition-all hover:-translate-y-1 flex flex-col"
            >
              <div
                className={`w-14 h-14 rounded-full ${d.bg} flex items-center justify-center mb-5`}
              >
                <d.Icon className="w-7 h-7 text-white" aria-hidden />
              </div>

              <p className="text-lg font-bold text-deep-green mb-2 leading-snug">
                {d.situation}
              </p>
              <p className="body-sm text-medium-gray mb-5 flex-1">
                {d.detail}
              </p>

              <div className="border-t border-light-gray pt-4">
                <p className="text-xs font-bold uppercase tracking-widest text-lime mb-1">
                  المُقترَح
                </p>
                <p className="text-deep-green font-bold text-lg mb-2">
                  {d.recommendation}
                </p>
                <p className="body-sm text-medium-gray mb-4">{d.why}</p>
                <span className="inline-flex items-center gap-1 text-lime font-medium group-hover:text-deep-green transition-colors">
                  استكشف الركيزة <ArrowLeft className="w-4 h-4" aria-hidden />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <p className="text-center text-medium-gray text-sm mt-10">
          مَوقفك مختلف؟{" "}
          <Link href="/contact?cta=book_consultation" className="text-lime hover:text-deep-green font-medium">
            احجز استشارة ←
          </Link>
        </p>
      </div>
    </section>
  );
}

/* ─── Section 3: Comparison Table ─────────────────────────── */
const COMPARISON_ROWS = [
  {
    label: "الأنسب لـ",
    controllers: "مزارع قائمة تُريد التَذكية",
    greenhouses: "مشاريع جديدة تجارية",
    hydroponics: "إنتاج عالي · مساحة محدودة",
  },
  {
    label: "المساحة المناسبة",
    controllers: "أيّ حجم — يَبدأ بنظام واحد",
    greenhouses: "١٠٠٠ م² وأكثر",
    hydroponics: "٥٠ م² وأكثر",
  },
  {
    label: "وقت التنفيذ",
    controllers: "١-٣ أيام للتركيب",
    greenhouses: "٦-١٢ أسبوع",
    hydroponics: "٢-٤ أسابيع",
  },
  {
    label: "نِطاق الاستثمار",
    controllers: "يَبدأ بنظام واحد",
    greenhouses: "متوسّط إلى كبير",
    hydroponics: "صغير إلى متوسّط",
  },
  {
    label: "الميزة الأبرز",
    controllers: "تَذكية بدون استبدال",
    greenhouses: "تحسين كفاءة الطاقة (يُقاس فردياً)",
    hydroponics: "تقليص جوهري في استهلاك المياه (يُقاس فردياً)",
  },
  {
    label: "Smart OS مُدمَج",
    controllers: "نعم — افتراضياً",
    greenhouses: "نعم — يَشمل لوحة تحكّم",
    hydroponics: "اختياري — حسب التقنية",
  },
];

function ComparisonTable() {
  return (
    <section className="section-light py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-lime text-lg font-bold uppercase tracking-widest mb-2">
            المقارنة السريعة
          </p>
          <h2 className="h2 text-deep-green">جدول المقارنة بين الركائز</h2>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block bg-white rounded-card shadow-soft overflow-hidden">
          <table className="w-full">
            <thead className="bg-deep-green text-cream">
              <tr>
                <th className="text-right p-5 font-bold text-base">الخاصيّة</th>
                <th className="text-right p-5 font-bold text-base">
                  Smart Controllers
                  <span className="block text-xs font-normal text-bright-lime/80 mt-0.5">
                    رأس الحربة التقني
                  </span>
                </th>
                <th className="text-right p-5 font-bold text-base">
                  المحميات الذكية
                </th>
                <th className="text-right p-5 font-bold text-base">
                  أنظمة الزراعة المائية
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row, i) => (
                <tr
                  key={row.label}
                  className={i % 2 === 0 ? "bg-cream/30" : "bg-white"}
                >
                  <td className="p-4 font-medium text-deep-green border-b border-light-gray">
                    {row.label}
                  </td>
                  <td className="p-4 text-medium-gray border-b border-light-gray">
                    {row.controllers}
                  </td>
                  <td className="p-4 text-medium-gray border-b border-light-gray">
                    {row.greenhouses}
                  </td>
                  <td className="p-4 text-medium-gray border-b border-light-gray">
                    {row.hydroponics}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Stacked */}
        <div className="md:hidden space-y-6">
          {[
            { name: "Smart Controllers", badge: "رأس الحربة التقني", key: "controllers" },
            { name: "المحميات الذكية", badge: null, key: "greenhouses" },
            { name: "أنظمة الزراعة المائية", badge: null, key: "hydroponics" },
          ].map((p) => (
            <div
              key={p.name}
              className="bg-white rounded-card p-5 shadow-soft border border-light-gray"
            >
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-light-gray">
                <h3 className="font-bold text-deep-green text-lg">{p.name}</h3>
                {p.badge && (
                  <span className="bg-lime text-white text-xs font-bold px-2.5 py-0.5 rounded-pill">
                    {p.badge}
                  </span>
                )}
              </div>
              <ul className="space-y-3">
                {COMPARISON_ROWS.map((row) => (
                  <li key={row.label}>
                    <p className="text-xs uppercase tracking-widest text-lime font-bold mb-0.5">
                      {row.label}
                    </p>
                    <p className="body-sm text-medium-gray">
                      {row[p.key as "controllers" | "greenhouses" | "hydroponics"]}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-center text-medium-gray text-sm mt-8 leading-relaxed max-w-2xl mx-auto">
          الأرقام والمدد التَقديرية تَتغيّر بحسب المحصول والموقع وحجم المشروع.
          تقييم مشروعك يُحدّد الأرقام الفعلية.
        </p>
      </div>
    </section>
  );
}

/* ─── Section 4: Final CTA ────────────────────────────────── */
function FinalCTA() {
  return (
    <section className="bg-deep-green py-20">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="h2 text-cream mb-5">
          لا تَعرف من أين تَبدأ؟ ابدأ بالمحادثة.
        </h2>
        <p className="body-base text-cream/80 max-w-xl mx-auto mb-8">
          نَسمع، نَسأل، ونَقترح — أو نُصارحك إن كان مشروعك ليس جاهزاً بعد.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton href="/contact?cta=book_consultation" variant="lime">
            احجز استشارة
          </CTAButton>
          <CTAButton href="/osfan-station" variant="outline-green">
            شاهد عسفان أوّلاً
          </CTAButton>
        </div>
      </div>
    </section>
  );
}

const BREADCRUMB = [
  { name: "الرئيسية", url: "/" },
  { name: "الحلول", url: "/products" },
];

export default function ProductsPage() {
  return (
    <>
      <BreadcrumbSchema items={BREADCRUMB} />
      <ServiceSchema
        name="أنظمة الزراعة الذكية — iGarden"
        description="ثلاث ركائز: Smart Controllers (رأس الحربة التقني) + المحميات الذكية + أنظمة الزراعة المائية. مُختبَرة في عسفان للمناخ السعودي."
        url="/products"
        serviceType="Smart Agriculture Systems"
      />
      <Hero />
      <DecisionTree />
      <ComparisonTable />
      <ThreePillarsSection />
      <ComplementaryProducts />
      <FinalCTA />
    </>
  );
}
