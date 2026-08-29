import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Brain,
  Wifi,
  BarChart3,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";
import { BreadcrumbSchema } from "@/components/shared/SchemaJsonLd";
import { CTAButton } from "@/components/shared/CTAButton";

export const metadata: Metadata = {
  title: "Smart OS — لوحة تشغيل موحّدة لمزرعتك",
  description:
    "لوحة تشغيل موحّدة تجمع القراءات والتحكّم والإشراف عن بُعد والبرامج المجدولة ضمن نطاق مشروعك — والسجلّات والتنبيهات والتقارير تُفعَّل بحسبه. طبقات التحليل المتقدّم قيد التطوير.",
  alternates: { canonical: "https://igarden.sa/products/smart-os" },
  openGraph: {
    title: "Smart OS — لوحة تشغيل موحّدة لمزرعتك | iGarden",
    description: "لوحة تشغيل موحّدة: ربط وعرض وتحكّم وإشراف عن بُعد ضمن نطاق المشروع — والتحليلات المتقدّمة قيد التطوير.",
    images: [{ url: "/api/og?title=Smart+OS&sub=%D9%84%D9%88%D8%AD%D8%A9+%D8%AA%D8%B4%D8%BA%D9%8A%D9%84+%D9%85%D9%88%D8%AD%D9%91%D8%AF%D8%A9+%D9%84%D9%85%D8%B2%D8%B1%D8%B9%D8%AA%D9%83", width: 1200, height: 630 }],
    type: "website",
    locale: "ar_SA",
  },
};

/* ─── Technical Layers ─────────────────────────────────── */
const CAPABILITY_TIERS = [
  {
    tier: "متاح ضمن نطاق المشروع",
    Icon: Wifi,
    items: ["الربط", "العرض على لوحة واحدة", "التحكّم والإشراف عن بُعد", "البرامج المجدولة"],
    note: "بحسب التجهيزات المركَّبة.",
  },
  {
    tier: "يُفعَّل حسب نطاق المشروع",
    Icon: BarChart3,
    items: ["السجلّات", "التنبيهات", "التقارير", "التكاملات"],
    note: null,
  },
  {
    tier: "قيد التطوير",
    Icon: Brain,
    items: ["رشيد التشغيلي", "اكتشاف الشذوذ", "التحليلات والتوصيات المتقدّمة", "إدارة المزرعة الأوسع"],
    note: null,
  },
];

const WORKFLOW_STEPS = [
  { step: "01", title: "التركيب", desc: "نشر المستشعرات والـ Gateway" },
  { step: "02", title: "المعايرة", desc: "ضبط العتبات حسب المحصول والموقع" },
  { step: "03", title: "التشغيل", desc: "تدفّق البيانات وتفعيل التنبيهات" },
  { step: "04", title: "المراجعة", desc: "مراجعة إعدادات التشغيل والعتبات وتوسعة الربط بحسب نطاق المشروع." },
];

const BREADCRUMB = [
  { name: "الرئيسية", url: "/" },
  { name: "خدماتنا", url: "/products" },
  { name: "Smart OS", url: "/products/smart-os" },
];

export default function SmartOSPage() {
  return (
    <>
      <BreadcrumbSchema items={BREADCRUMB} />

      {/* ─── Hero ──────────────────────────────────────────── */}
      <section className="bg-deep-green text-cream py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-lime text-sm font-bold uppercase tracking-widest mb-4">
            Smart OS · منصة تشغيل المزرعة
          </p>
          <h1 className="h1 text-cream mb-6">
            ما يحتاج انتباهك يظهر في مكان واحد — لا يضيع بين القراءات
          </h1>
          <p className="body-base text-cream/80 max-w-3xl leading-relaxed">
            لوحة تشغيل موحّدة تجمع القراءات والتحكّم والإشراف عن بُعد
            والبرامج المجدولة — بحسب التجهيزات المركَّبة ونطاق المشروع.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <CTAButton
              href="/contact?interest=farm_digitization&cta=readiness_assessment"
              variant="lime"
            >
              اطلب تقييماً أولياً
            </CTAButton>
            <CTAButton href="/contact?interest=demo&cta=demo_access_request" variant="outline-light">
              اطلب وصولاً إلى الديمو
            </CTAButton>
          </div>
        </div>
      </section>

      {/* ─── Technical Layers ──────────────────────────────── */}
      <section className="section-light py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-14">
            <p className="text-lime text-sm font-bold uppercase tracking-widest mb-2">
              البنية التقنية
            </p>
            <h2 className="h2 text-deep-green">القدرات — ثلاث مجموعات</h2>
            <p className="body-base text-medium-gray max-w-2xl mx-auto mt-3">
              ما يعمل اليوم ضمن نطاق المشروع، وما يُفعَّل بحسبه، وما هو قيد
              التطوير — مفصولة بوضوح.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CAPABILITY_TIERS.map(({ tier, Icon, items, note }) => (
              <div
                key={tier}
                className="bg-white rounded-card border border-light-gray shadow-soft p-7"
              >
                <div className="flex items-center gap-3 mb-5">
                  <Icon className="w-6 h-6 text-lime" aria-hidden />
                  <h3 className="font-bold text-deep-green text-lg">{tier}</h3>
                </div>
                <ul className="space-y-2.5">
                  {items.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-medium-gray body-sm">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-lime flex-shrink-0" aria-hidden />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
                {note && (
                  <p className="text-xs text-medium-gray mt-4 leading-relaxed">{note}</p>
                )}
              </div>
            ))}
          </div>
              </div>
      </section>

      {/* ─── رشيد ───────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-12 h-12 rounded-full bg-lime/10 flex items-center justify-center">
              <Brain className="w-6 h-6 text-deep-green" aria-hidden />
            </span>
            <p className="text-lime text-sm font-bold uppercase tracking-widest">
              طبقة الذكاء
            </p>
          </div>
          <h2 className="h2 text-deep-green mb-6">رشيد</h2>
          <p className="body-base text-medium-gray leading-relaxed max-w-3xl">
            رشيد — طبقة الذكاء التي نطوّرها داخل Smart OS: تفرز ما يحتاج
            انتباهك، وتجهّز الأسئلة والتقارير، وتُصعّد القرار إلى الإنسان.
            ⟵ قيد التطوير، وليست جاهزة اليوم.
          </p>
        </div>
      </section>

      {/* ─── Where we test ─────────────────────────────────── */}
      <section className="section-light py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-lime text-sm font-bold uppercase tracking-widest mb-3">
            الاختبار الميداني
          </p>
          <h2 className="h2 text-deep-green mb-6">أين نختبر؟</h2>
          <p className="body-base text-medium-gray mb-6 leading-relaxed">
            في مرفق R&D في عسفان. تخضع الوحدات والتكاملات لاختبار وظيفي
            وميداني قبل التسليم، ضمن منظومة مختبرة ميدانياً في ظروف صيفية
            سعودية وبيئات مرتفعة الحرارة والرطوبة.
          </p>

          {/* أصل مؤقّت آمن — imageStatus: "temporary-safe"
              الصورة تحمل شارات Demo Mode وSimulated Readings ضمن اللقطة نفسها.
              ⛔ لا تُقصّ الشارات ولا تُستبدل بلقطة تحمل بيانات عميل. */}
          <figure className="mb-6">
            <div className="relative aspect-[1346/690] rounded-card overflow-hidden border border-light-gray shadow-soft">
              <Image
                src="/smart-os/dashboard-preview.png"
                alt="واجهة Smart OS التجريبية بقراءات محاكاة"
                fill
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-cover"
              />
            </div>
            <figcaption className="body-sm text-medium-gray mt-3">
              واجهة تجريبية ببيانات محاكاة — لا تعرض بيانات عميل.
            </figcaption>
          </figure>
          <Link
            href="/osfan-station"
            className="inline-flex items-center gap-2 text-lime font-semibold hover:text-deep-green transition-colors"
          >
            تعرّف على عسفان
            <ArrowLeft className="w-4 h-4" aria-hidden />
          </Link>
        </div>
      </section>

      {/* ─── Integration Workflow ──────────────────────────── */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="h2 text-deep-green">كيف تتكامل المنصة مع عملياتك؟</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {WORKFLOW_STEPS.map(({ step, title, desc }) => (
              <div key={step} className="border-s-4 border-lime ps-4">
                <p className="text-3xl font-bold text-deep-green/20 font-latin mb-2">
                  {step}
                </p>
                <h3 className="font-bold text-deep-green mb-1">{title}</h3>
                <p className="body-sm text-medium-gray">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Checklist ─────────────────────────────────────── */}
      <section className="section-light py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="h3 text-deep-green mb-8 text-center">
            ما تحصل عليه مع المنصة
          </h2>
          <ul className="space-y-4">
            {[
              "عرض قراءات مزرعتك وربطها على لوحة واحدة — بحسب التجهيزات المركَّبة",
              "تنبيهات عند تجاوز العتبات المحددة — عند تضمينها في نطاق المشروع",
              "السجلات والتقارير الدورية — عند تضمينها في نطاق المشروع",
              "الدعم والتحديثات بحسب عقد الخدمة",
              "إمكانية توسعة الربط عند إضافة تجهيزات جديدة",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2
                  className="w-5 h-5 text-lime flex-shrink-0 mt-0.5"
                  aria-hidden
                />
                <span className="body-base text-medium-gray">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─── CTA ───────────────────────────────────────────── */}
      <section className="bg-deep-green py-20 text-cream text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="h2 text-cream mb-5">
            هل تريد معرفة كيف تتكامل المنصة مع مزرعتك؟
          </h2>
          <p className="body-base text-cream/80 mb-8 max-w-2xl mx-auto">
            ابدأ بتقييم أولي لنطاق الربط والتشغيل المناسب لمزرعتك، أو استكشف
            الديمو للتعرّف على تجربة المنصة.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton
              href="/contact?interest=farm_digitization&cta=readiness_assessment"
              variant="lime"
            >
              اطلب تقييماً أولياً
            </CTAButton>
            <CTAButton href="/contact?interest=demo&cta=demo_access_request" variant="outline-light">
              اطلب وصولاً إلى الديمو
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
