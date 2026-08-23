import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { BreadcrumbSchema, ServiceSchema } from "@/components/shared/SchemaJsonLd";

export const metadata: Metadata = {
  title: "كيف نعمل — من أول اتصال حتى التشغيل | iGarden",
  description:
    "iGarden لا تبيع نظاماً جاهزاً وتغادر. ندخل المزرعة، نفهم الماء والمناخ والمحصول، ثم نبني حلاً يناسبها — من الحساس إلى التقرير.",
  alternates: { canonical: "https://igarden.sa/how-we-work" },
  openGraph: {
    title: "كيف نعمل — من أول اتصال حتى التشغيل | iGarden",
    description: "6 خطوات من الاستشارة حتى التسليم — من الحساس إلى التقرير. ازرع بذكاء.",
    images: [{ url: "/api/og?title=%D9%83%D9%8A%D9%81+%D9%86%D8%B9%D9%85%D9%84+%E2%80%94+iGarden&sub=%D9%85%D9%86+%D8%A3%D9%88%D9%84+%D8%A7%D8%AA%D8%B5%D8%A7%D9%84+%D8%AD%D8%AA%D9%89+%D8%A7%D9%84%D8%AA%D8%B4%D8%BA%D9%8A%D9%84", width: 1200, height: 630 }],
    type: "website",
    locale: "ar_SA",
  },
  twitter: {
    card: "summary_large_image",
    title: "كيف نعمل | iGarden",
    description: "6 خطوات من الاستشارة حتى التسليم.",
    images: ["/api/og?title=%D9%83%D9%8A%D9%81+%D9%86%D8%B9%D9%85%D9%84"],
  },
};

const STEPS = [
  {
    num: "01",
    title: "نسمع المشكلة",
    desc: "جلسة استشارة أولى — نفهم طبيعة مشروعك، حجمه، محصولك، والتحديات الحالية. لا نفترض، نسأل.",
    detail: "30–60 دقيقة · يمكن عن بُعد · مجانية",
  },
  {
    num: "02",
    title: "نراجع الموقع أو البيانات",
    desc: "زيارة ميدانية أو مراجعة مخططات المزرعة ومصادر الماء والبنية التحتية القائمة. نفهم الواقع قبل أي توصية.",
    detail: "ضمن منطقة جدة والمناطق المجاورة · أو تحليل عن بُعد",
  },
  {
    num: "03",
    title: "نصمم النظام المناسب",
    desc: "نختار الحساسات، نصمم لوحة التحكم، ونحدد بروتوكول الري والتغذية بناءً على محصولك وبيئتك — لا حلول قياسية جاهزة.",
    detail: "تقرير مكتوب بالمواصفات والتكلفة التقديرية",
  },
  {
    num: "04",
    title: "نركّب الحساسات والتحكم",
    desc: "فريقنا الميداني يتولّى التركيب من البداية إلى النهاية. pH، EC، حرارة، رطوبة، مستوى ماء، ومضخات التشغيل.",
    detail: "جدول تركيب واضح · لا تحتاج فريق تقني مسبقاً",
  },
  {
    num: "05",
    title: "ندرّب الفريق",
    desc: "جلسة تدريب عملية على لوحة Smart OS — كيف تقرأ القياسات، كيف تفهم التنبيهات، وكيف تتعامل مع الانحرافات.",
    detail: "تدريب ميداني + وثائق مرجعية",
  },
  {
    num: "06",
    title: "نتابع التشغيل",
    desc: "الأيام الأولى بعد التركيب حرجة. نبقى على تواصل مباشر لمتابعة القراءات والتأكد من أن النظام يعمل كما صُمِّم.",
    detail: "متابعة مكثفة خلال الأسبوع الأول حسب نطاق العقد · دعم فني مستمر",
  },
  {
    num: "07",
    title: "نطوّر مع كل موسم",
    desc: "نحن شريك لا بائع. نراجع البيانات بعد كل موسم، نُحسّن البروتوكول، ونضيف قدرات جديدة بناءً على ما تعلّمناه من مزرعتك.",
    detail: "مراجعة دورية · تحديثات Smart OS · تطوير مستمر",
  },
];

const WHAT_WE_NEED = [
  "مخططات المزرعة أو أبعادها التقريبية",
  "نوع المحصول والدورة الزراعية المستهدفة",
  "مصدر المياه وتقرير التحليل إن توفّر",
  "البنية التحتية القائمة (كهرباء، شبكة، مضخات)",
  "الميزانية التقديرية أو النطاق السعري المتوقّع",
];

const BREADCRUMB = [
  { name: "الرئيسية", url: "/" },
  { name: "كيف نعمل", url: "/how-we-work" },
];

export default function HowWeWorkPage() {
  return (
    <>
      <BreadcrumbSchema items={BREADCRUMB} />
      <ServiceSchema
        name="خدمة تنفيذ أنظمة الزراعة الذكية"
        description="iGarden تُنفّذ أنظمة الزراعة الذكية من الاستشارة الأولى حتى التسليم والمتابعة — 6 خطوات ميدانية."
        url="/how-we-work"
        serviceType="Smart Agriculture Implementation"
      />
      {/* Hero */}
      <section className="bg-[#0F3D2E] py-20 md:py-28" dir="rtl">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-[#A5D63F] text-sm font-bold uppercase tracking-widest mb-4">
            منهجية العمل
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FAFAF7] mb-6 leading-tight">
            كيف نعمل؟
          </h1>
          <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-4">
            لا نبيع نظاماً جاهزاً ونغادر.
          </p>
          <p className="text-white/65 text-base leading-relaxed max-w-2xl mx-auto">
            ندخل المزرعة، نفهم الماء والمناخ والمحصول، ثم نبني حلاً يناسبها —
            من الحساس إلى التقرير.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-[#FAFAF7] py-20" dir="rtl">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-0">
            {STEPS.map((step, idx) => (
              <div key={step.num} className="flex gap-6 md:gap-10">
                {/* Number + connector */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-[#0F3D2E] border-2 border-[#7CB342] flex items-center justify-center flex-shrink-0 shadow-sm">
                    <span className="text-[#A5D63F] font-bold text-base font-mono">{step.num}</span>
                  </div>
                  {idx < STEPS.length - 1 && (
                    <div className="w-px flex-1 bg-[#E5E7EB] my-2" aria-hidden="true" />
                  )}
                </div>

                {/* Content */}
                <div className={`pb-12 flex-1 ${idx === STEPS.length - 1 ? "pb-4" : ""}`}>
                  <h2 className="text-xl md:text-2xl font-bold text-[#0F3D2E] mb-2">
                    {step.title}
                  </h2>
                  <p className="text-[#6B7280] leading-relaxed mb-3">{step.desc}</p>
                  <span className="inline-block bg-[#7CB342]/10 text-[#0F3D2E] text-sm font-medium px-3 py-1 rounded-full border border-[#7CB342]/20">
                    {step.detail}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we need from the client */}
      <section className="bg-white py-16 border-y border-[#E5E7EB]" dir="rtl">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-[#7CB342] text-sm font-bold uppercase tracking-widest mb-3">
                تسريع العملية
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0F3D2E] mb-4">
                ما الذي نحتاجه منك؟
              </h2>
              <p className="text-[#6B7280] leading-relaxed">
                كلما وفّرت هذه المعلومات مسبقاً، كلما وصلنا لتوصية دقيقة أسرع —
                وقلّصنا الوقت من أول اتصال حتى بدء التركيب.
              </p>
            </div>
            <ul className="space-y-3">
              {WHAT_WE_NEED.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#7CB342] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-[#1A1A1A]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Transparency tables — time + cost */}
      <section className="bg-[#FAFAF7] py-20" dir="rtl">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-[#7CB342] text-sm font-bold uppercase tracking-widest mb-3">
              شفافية كاملة
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F3D2E] mb-3">
              كم نأخذ من وقتك؟ كم نأخذ من مالك؟
            </h2>
            <p className="text-[#6B7280] leading-relaxed max-w-2xl mx-auto">
              نَفضّل أن نَبدأ بأرقام واضحة قبل العقد، حتى تَعرف ما الذي تَدخل
              فيه. التَفاصيل النهائية تُحدَّد في العرض المكتوب.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Time table */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#E5E7EB] overflow-hidden">
              <div className="bg-[#0F3D2E] text-white p-5">
                <h3 className="text-lg font-bold mb-1">⏱️ الوقت</h3>
                <p className="text-white/70 text-sm">
                  كم تأخذ كلّ مرحلة منك ومنّا
                </p>
              </div>
              <table className="w-full text-sm">
                <thead className="bg-[#FAFAF7] border-b border-[#E5E7EB]">
                  <tr>
                    <th className="text-right p-3 font-bold text-[#0F3D2E]">المرحلة</th>
                    <th className="text-right p-3 font-bold text-[#0F3D2E]">وقتك</th>
                    <th className="text-right p-3 font-bold text-[#0F3D2E]">وقتنا</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["١. الاستشارة", "٣٠ دقيقة", "٣٠ دقيقة"],
                    ["٢. الزيارة الميدانية", "٢ ساعة", "يوم كامل"],
                    ["٣. التَصميم والعرض", "—", "٧-١٠ أيام"],
                    ["٤. التَركيب", "ساعة/يوم متابعة", "٢-٤ أسابيع"],
                    ["٥. التَدريب", "٤ ساعات", "٤ ساعات"],
                    ["٦. المتابعة الأولى", "حسب الحاجة", "أسبوع متابعة مكثفة"],
                  ].map(([phase, you, us], i) => (
                    <tr
                      key={phase}
                      className={i % 2 === 0 ? "bg-white" : "bg-[#FAFAF7]/50"}
                    >
                      <td className="p-3 text-[#1A1A1A] font-medium border-b border-[#E5E7EB]">
                        {phase}
                      </td>
                      <td className="p-3 text-[#6B7280] border-b border-[#E5E7EB]">
                        {you}
                      </td>
                      <td className="p-3 text-[#6B7280] border-b border-[#E5E7EB]">
                        {us}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Cost table */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#E5E7EB] overflow-hidden">
              <div className="bg-[#7CB342] text-[#0F3D2E] p-5">
                <h3 className="text-lg font-bold mb-1">💰 التَكلفة</h3>
                <p className="text-[#0F3D2E]/70 text-sm">
                  ما الذي يُدفع متى — بلا مفاجآت
                </p>
              </div>
              <ul className="divide-y divide-[#E5E7EB]">
                {[
                  {
                    label: "الاستشارة الأولى",
                    cost: "مجانية",
                    detail: "هاتف أو فيديو · بلا التزام",
                    free: true,
                  },
                  {
                    label: "الزيارة الميدانية",
                    cost: "مجانية",
                    detail: "ضمن جدة + ٢٠٠ كم · خارجها بترتيب",
                    free: true,
                  },
                  {
                    label: "التصميم والعرض الفنّي",
                    cost: "مجاني",
                    detail: "تَقرير مكتوب بالمواصفات والتقدير",
                    free: true,
                  },
                  {
                    label: "التَنفيذ",
                    cost: "حسب المشروع",
                    detail: "من Smart Controller واحد إلى محمية كاملة",
                  },
                  {
                    label: "Smart OS — الاشتراك",
                    cost: "٣ أشهر مجانية",
                    detail: "بعدها رسوم سنوية حسب نطاق الاستخدام",
                  },
                  {
                    label: "الصيانة والدعم",
                    cost: "عقد سنوي اختياري",
                    detail: "زيارات دورية + تحديثات + دعم فنّي",
                  },
                ].map((row) => (
                  <li key={row.label} className="p-4">
                    <div className="flex items-center justify-between gap-3 mb-1">
                      <span className="font-medium text-[#1A1A1A]">
                        {row.label}
                      </span>
                      <span
                        className={`text-sm font-bold whitespace-nowrap ${
                          row.free ? "text-[#7CB342]" : "text-[#0F3D2E]"
                        }`}
                      >
                        {row.cost}
                      </span>
                    </div>
                    <p className="text-xs text-[#6B7280]">{row.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-center text-[#6B7280] text-sm mt-8 max-w-2xl mx-auto leading-relaxed">
            الأرقام التَقديرية تَتغيّر حسب المحصول والموقع وحجم المشروع.
            العرض الفنّي المُفصَّل يَأتي بعد الزيارة الميدانية.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0F3D2E] py-20" dir="rtl">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#FAFAF7] mb-5">
            جاهز تبدأ؟
          </h2>
          <p className="text-white/75 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
            أرسل لنا تفاصيل مشروعك وسنرد بتقييم مبدئي خلال يوم عمل.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?cta=readiness_assessment"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#7CB342] hover:bg-[#A5D63F] text-[#0F3D2E] rounded-lg font-semibold text-base transition-colors"
            >
              اطلب تقييم مزرعتك
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link
              href="/osfan-station"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white/60 text-white hover:bg-white/10 rounded-lg font-medium text-base transition-colors"
            >
              تعرّف على مرفق R&D في عسفان
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
