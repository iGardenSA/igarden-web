import type { Metadata } from "next";
import Link from "next/link";
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
  title: "منصة Smart OS · الذكاء التشغيلي للزراعة · iGarden",
  description:
    "منصة تحليلية متكاملة بقدرات AI (LSTM, Anomaly Detection) وIoT (MQTT 5.0)، مُختبَرة ميدانياً في مرفق عسفان. حلول للزراعة التجارية والصناعية في السعودية.",
  alternates: { canonical: "https://igarden.sa/products/smart-os" },
  openGraph: {
    title: "Smart OS — الذكاء التشغيلي للزراعة | iGarden",
    description: "منصة IoT + AI لتحليل بيانات المزرعة وتحويلها إلى قرارات تشغيلية — مُختبَرة في عسفان.",
    type: "website",
    locale: "ar_SA",
  },
};

/* ─── Technical Layers ─────────────────────────────────── */
const TECHNICAL_LAYERS = [
  {
    layer: "01",
    Icon: Brain,
    title: "طبقة التحليل الذكي",
    capabilities: [
      {
        name: "اكتشاف الشذوذ",
        tech: "Isolation Forest · Statistical Process Control",
        description:
          "رصد القراءات الشاذة في pH وEC والحرارة قبل أن تؤثر على المحصول.",
      },
      {
        name: "التنبّؤ بالإنتاجية",
        tech: "LSTM · Time Series Analysis",
        description:
          "نماذج تنبّؤ مُدرَّبة على بيانات الموسم الحالي مع تحديث دوري.",
      },
      {
        name: "توصيات التحكّم المناخي",
        tech: "Rule-based + ML Hybrid",
        description:
          "توصيات لإعدادات التهوية والتبريد والإضاءة بناءً على ظروف الموقع.",
      },
    ],
  },
  {
    layer: "02",
    Icon: Wifi,
    title: "طبقة التكامل (IoT)",
    capabilities: [
      {
        name: "بروتوكول الاتصال",
        tech: "MQTT 5.0 over TLS",
        description: "اتصال موثوق منخفض الاستهلاك مع طبقة أمان كاملة.",
      },
      {
        name: "الاستشعار المدعوم",
        tech: "pH · EC/TDS · Temperature · Humidity · CO₂ · Light",
        description:
          "دعم لمستشعرات صناعية وأخرى مفتوحة المصدر.",
      },
      {
        name: "الأجهزة المُتكاملة",
        tech: "Raspberry Pi 5 · ESP32 · Industrial PLCs",
        description:
          "مرونة في النشر من المزارع الصغيرة إلى المنشآت الصناعية.",
      },
    ],
  },
  {
    layer: "03",
    Icon: BarChart3,
    title: "طبقة التقارير والتنبيهات",
    capabilities: [
      {
        name: "لوحات تحكّم للعميل",
        tech: "Real-time Dashboards · Custom KPIs",
        description:
          "لوحة لكل موقع مع مؤشرات قابلة للتخصيص حسب نوع المحصول.",
      },
      {
        name: "تقارير دورية آلية",
        tech: "Scheduled Reports · PDF/Email",
        description: "تقارير أسبوعية وشهرية تُولَّد تلقائياً وتُرسَل لفريق العميل.",
      },
      {
        name: "تنبيهات في الوقت الفعلي",
        tech: "Webhook · WhatsApp · SMS",
        description: "تنبيهات فورية عند تجاوز العتبات أو رصد شذوذ.",
      },
    ],
  },
];

const WORKFLOW_STEPS = [
  { step: "01", title: "التركيب", desc: "نشر المستشعرات والـ Gateway" },
  { step: "02", title: "المعايرة", desc: "ضبط العتبات حسب المحصول والموقع" },
  { step: "03", title: "التشغيل", desc: "تدفّق البيانات وتفعيل التنبيهات" },
  { step: "04", title: "التحسين", desc: "تحديثات دورية للنماذج التحليلية" },
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
            منصة برمجية
          </p>
          <h1 className="h1 text-cream mb-6">
            Smart OS — الذكاء التشغيلي للزراعة
          </h1>
          <p className="body-base text-cream/80 max-w-3xl leading-relaxed">
            منصة تحليلية متكاملة تُحوّل بيانات الاستشعار إلى قرارات تشغيلية
            قابلة للتنفيذ، مُختبَرة في مرفق عسفان قبل أن تصل إلى أي عميل.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <CTAButton href="/contact" variant="lime">
              احجز جلسة عرض
            </CTAButton>
            <CTAButton href="https://demo.igarden.sa" variant="outline-green" external>
              Live Demo ←
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
            <h2 className="h2 text-deep-green">ثلاث طبقات متكاملة</h2>
            <p className="body-base text-medium-gray max-w-2xl mx-auto mt-3">
              من الحساس إلى القرار — كل طبقة مُصمَّمة لتعمل بشكل مستقل أو
              متكامل حسب احتياج المنشأة.
            </p>
          </div>

          <div className="space-y-10">
            {TECHNICAL_LAYERS.map(({ layer, Icon, title, capabilities }) => (
              <div
                key={layer}
                className="bg-white rounded-card border border-light-gray shadow-soft overflow-hidden"
              >
                <div className="flex items-center gap-4 px-8 py-5 border-b border-light-gray bg-cream">
                  <span className="text-3xl font-bold text-deep-green/20 font-latin">
                    {layer}
                  </span>
                  <Icon className="w-6 h-6 text-lime" aria-hidden />
                  <h3 className="h3 text-deep-green">{title}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-light-gray rtl:md:divide-x-reverse">
                  {capabilities.map((cap) => (
                    <div key={cap.name} className="p-6">
                      <p className="font-bold text-deep-green mb-1">{cap.name}</p>
                      <p className="text-xs font-mono text-lime mb-3 leading-relaxed">
                        {cap.tech}
                      </p>
                      <p className="body-sm text-medium-gray">{cap.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Where we test ─────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-lime text-sm font-bold uppercase tracking-widest mb-3">
            الاختبار الميداني
          </p>
          <h2 className="h2 text-deep-green mb-6">أين نختبر؟</h2>
          <p className="body-base text-medium-gray mb-6 leading-relaxed">
            في مرفق عسفان. كل وحدة قبل أن تصل لعميل تمرّ بدورة اختبار كاملة
            في بيئتنا الخاصة. هذا يعني أن ما تستلمه ليس نموذجاً أوّلياً —
            بل نظام مُختبَر تحت ظروف سعودية حقيقية (+٤٥°C، رطوبة ساحلية).
          </p>
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
      <section className="section-light py-20">
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
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="h3 text-deep-green mb-8 text-center">
            ما تحصل عليه مع المنصة
          </h2>
          <ul className="space-y-4">
            {[
              "وصول كامل لبيانات مزرعتك في الوقت الفعلي",
              "تنبيهات فورية عند أي شذوذ في القراءات",
              "تقارير دورية آلية لفريقك",
              "اشتراك سنوي مع دعم فني مباشر من الفريق",
              "تحديثات دورية للنماذج التحليلية",
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
            هل تريد رؤية المنصة على بياناتك؟
          </h2>
          <p className="body-base text-cream/80 mb-8 max-w-2xl mx-auto">
            نُقدّم جلسة عرض تقنية للعملاء الجادّين — استعراض مباشر للمنصة
            على بيانات واقعية من مرفق عسفان.
          </p>
          <CTAButton href="/contact" variant="lime">
            احجز جلسة عرض
          </CTAButton>
        </div>
      </section>
    </>
  );
}
