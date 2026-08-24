import type { Metadata } from "next";
import Link from "next/link";
import { Cpu, Wifi, Thermometer, Gauge, Zap, ArrowLeft } from "lucide-react";
import { BreadcrumbSchema } from "@/components/shared/SchemaJsonLd";
import { CTAButton } from "@/components/shared/CTAButton";

export const metadata: Metadata = {
  title: "إنترنت الأشياء الزراعي · iGarden",
  description:
    "حلول IoT للمزارع التجارية: الاستشعار والتحكم والتكامل مع منصة Smart OS تُحدَّد حسب تجهيز المشروع. مختبرة ميدانياً في ظروف صيفية سعودية وبيئات مرتفعة الحرارة والرطوبة في مرفق R&D في عسفان.",
  alternates: { canonical: "https://igarden.sa/products/iot" },
  openGraph: {
    title: "إنترنت الأشياء الزراعي | iGarden",
    description: "الاستشعار والتحكم والتكامل تُحدَّد حسب تجهيز المشروع — مختبرة ميدانياً في مرفق R&D في عسفان.",
    images: [{ url: "/api/og?title=%D8%A5%D9%86%D8%AA%D8%B1%D9%86%D8%AA+%D8%A7%D9%84%D8%A3%D8%B4%D9%8A%D8%A7%D8%A1+%D8%A7%D9%84%D8%B2%D8%B1%D8%A7%D8%B9%D9%8A&sub=%D9%82%D9%8A%D8%A7%D8%B3+%D9%88%D8%AA%D8%AD%D9%83%D9%91%D9%85+%D9%84%D9%84%D9%85%D8%B2%D8%A7%D8%B1%D8%B9+%D8%A7%D9%84%D8%AA%D8%AC%D8%A7%D8%B1%D9%8A%D8%A9", width: 1200, height: 630 }],
    type: "website",
    locale: "ar_SA",
  },
};

const SENSORS = [
  {
    Icon: Gauge,
    name: "قياس الحموضة",
    spec: "pH 0–14 · دقة ±0.1 بعد المعايرة ووفق المجس",
    note: "قراءة عبر ADC عالي الدقة (ADS1115) للإشارة التناظرية. الدقة النهائية تعتمد على المجس والمعايرة والتركيب — ADR داخلي T002.",
  },
  {
    Icon: Gauge,
    name: "الإجمالي الذائب",
    spec: "EC / TDS عبر UART",
    note: "قراءة رقمية عبر UART تقلّل تأثر مسار الإشارة التناظرية — ADR T003.",
  },
  {
    Icon: Thermometer,
    name: "الحرارة والرطوبة",
    spec: "DS18B20 + SHT31",
    note: "مستشعرات صناعية مختبرة ميدانياً في ظروف صيفية سعودية وبيئات مرتفعة الحرارة والرطوبة.",
  },
  {
    Icon: Zap,
    name: "مستوى الخزانات",
    spec: "Ultrasonic + Float",
    note: "رصد مستوى المحلول وفق دورية القياس، مع تنبيه عند تجاوز العتبة المحددة.",
  },
];

const CONTROLLERS = [
  {
    name: "Smart Controller v2",
    platform: "Raspberry Pi 5 + ESP32",
    protocol: "MQTT 5.0 over TLS",
    relays: "8 channels في التكوين المرجعي (مضخات + دوزرات)",
    tests: "تغطية اختبارات برمجية موسّعة للتكوين المرجعي",
  },
];

const BREADCRUMB = [
  { name: "الرئيسية", url: "/" },
  { name: "خدماتنا", url: "/products" },
  { name: "إنترنت الأشياء الزراعي", url: "/products/iot" },
];

export default function IoTPage() {
  return (
    <>
      <BreadcrumbSchema items={BREADCRUMB} />

      {/* ─── Hero ──────────────────────────────────────────── */}
      <section className="bg-deep-green text-cream py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-lime text-sm font-bold uppercase tracking-widest mb-4">
            عتاد وأنظمة
          </p>
          <h1 className="h1 text-cream mb-6">
            إنترنت الأشياء الزراعي
          </h1>
          <p className="body-base text-cream/80 max-w-3xl leading-relaxed">
            الاستشعار والتحكم والتكامل مع منصة Smart OS تُحدَّد حسب تجهيز
            المشروع. تخضع الوحدات لاختبار وظيفي قبل التسليم، وتُختبر المنظومة
            ميدانياً في مرفق R&D في عسفان.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <CTAButton href="/contact?interest=controllers&cta=readiness_assessment" variant="lime">
              اطلب تقييماً أولياً
            </CTAButton>
            <CTAButton href="/products/smart-os" variant="outline-green">
              منصة Smart OS →
            </CTAButton>
          </div>
        </div>
      </section>

      {/* ─── What we measure ───────────────────────────────── */}
      <section className="section-light py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <p className="text-lime text-sm font-bold uppercase tracking-widest mb-2">
              الاستشعار
            </p>
            <h2 className="h2 text-deep-green">ما نقيسه</h2>
            <p className="body-base text-medium-gray max-w-2xl mx-auto mt-3">
              مستشعرات تُختار وتُعاير وفق بيئة الموقع، مع مراعاة أثر الحرارة
              وطريقة التركيب في جودة القراءة.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SENSORS.map(({ Icon, name, spec, note }) => (
              <div
                key={name}
                className="bg-white rounded-card border border-light-gray shadow-soft p-6"
              >
                <div className="w-11 h-11 rounded-full bg-lime/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-deep-green" aria-hidden />
                </div>
                <h3 className="font-bold text-deep-green mb-1">{name}</h3>
                <p className="text-xs font-mono text-lime mb-3">{spec}</p>
                <p className="body-sm text-medium-gray">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Smart Controller ──────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <p className="text-lime text-sm font-bold uppercase tracking-widest mb-2">
              وحدة التحكم
            </p>
            <h2 className="h2 text-deep-green">Smart Controller</h2>
          </div>

          {CONTROLLERS.map((c) => (
            <div
              key={c.name}
              className="bg-cream rounded-card border border-light-gray shadow-soft p-8 grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div>
                <h3 className="h3 text-deep-green mb-6">{c.name}</h3>
                <dl className="space-y-3">
                  {[
                    { label: "المنصة", value: c.platform },
                    { label: "البروتوكول", value: c.protocol },
                    { label: "المخرجات", value: c.relays },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex gap-3">
                      <dt className="text-sm text-medium-gray w-28 flex-shrink-0">{label}:</dt>
                      <dd className="text-sm font-mono font-medium text-deep-green">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="flex flex-col justify-center">
                <div className="bg-deep-green/5 rounded-xl p-5 text-center">
                  <p className="text-2xl font-bold text-lime mb-2">تغطية موسّعة</p>
                  <p className="text-sm text-medium-gray">{c.tests}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Integration ───────────────────────────────────── */}
      <section className="section-light py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Wifi className="w-8 h-8 text-lime" aria-hidden />
            <Cpu className="w-8 h-8 text-deep-green" aria-hidden />
          </div>
          <h2 className="h3 text-deep-green mb-4">
            يتكامل مع منصة Smart OS ضمن إعداد المشروع
          </h2>
          <p className="body-base text-medium-gray mb-8 max-w-2xl mx-auto">
            التجهيزات المتوافقة تُربط بمنصة Smart OS عبر MQTT ضمن إعداد
            المشروع، فتظهر قراءاتها على لوحة واحدة بحسب النطاق المتفق عليه.
          </p>
          <Link
            href="/products/smart-os"
            className="inline-flex items-center gap-2 text-lime font-semibold hover:text-deep-green transition-colors"
          >
            اكتشف منصة Smart OS
            <ArrowLeft className="w-4 h-4" aria-hidden />
          </Link>
        </div>
      </section>

      {/* ─── Osfan + CTA ───────────────────────────────────── */}
      <section className="bg-deep-green py-20 text-cream text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-lime text-sm font-bold uppercase tracking-widest mb-3">
            مُختبَر في عسفان
          </p>
          <h2 className="h2 text-cream mb-5">
            اختبار وظيفي قبل التسليم واختبار ميداني في عسفان
          </h2>
          <p className="body-base text-cream/80 mb-8 max-w-xl mx-auto">
            تخضع الوحدات لاختبار وظيفي قبل التسليم، وتُختبر المنظومة ميدانياً
            في مرفق R&D في عسفان — في ظروف صيفية سعودية وبيئات مرتفعة الحرارة
            والرطوبة، لا في معمل مُكيَّف.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <CTAButton href="/contact?interest=controllers&cta=readiness_assessment" variant="lime">
              اطلب تقييماً أولياً
            </CTAButton>
            <CTAButton href="/osfan-station" variant="outline-green">
              زر مرفق عسفان
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
