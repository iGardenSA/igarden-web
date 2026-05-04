import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Sprout,
  LineChart,
  MessageCircle,
  BookOpen,
  Smartphone,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Activity,
  Cpu,
  Users,
  Zap,
} from "lucide-react";
import AppWaitlistForm from "./AppWaitlistForm";

export const metadata: Metadata = {
  title: "التطبيق · الحديقة الذكية في جيبك | iGarden",
  description:
    "تطبيق الحديقة الذكية — رفيقك في الزراعة المائية. حاسبات دقيقة لـ EC و pH، يوميات نظامك، ومرشد تقني عربي. للهواة الجادّين والمزارعين المنزليين في السعودية. قريباً.",
  keywords: [
    "تطبيق الحديقة الذكية",
    "iGarden App",
    "زراعة مائية السعودية",
    "هيدروبونيك تطبيق",
    "DWC تطبيق",
    "حاسبة المحلول الغذائي",
    "EC pH calculator",
    "Hydroponics Saudi Arabia",
  ],
  openGraph: {
    title: "التطبيق · الحديقة الذكية في جيبك",
    description:
      "أرقام دقيقة، لا تخمين. EC · pH · PPM · توقيت الري — مرافق عربي للزراعة المائية.",
    images: ["/images/og/app.jpg"],
  },
};

const FOR_WHOM = [
  {
    Icon: Sprout,
    label: "هاوٍ مبتدئ",
    title: "تبدأ رحلتك الأولى",
    desc: "ضِعت بين عشرات الفيديوهات المتناقضة على يوتيوب؟ التطبيق يعطيك خط بداية واضح لمحصولك الأول، بأرقام مُكيَّفة لمناخنا.",
  },
  {
    Icon: Activity,
    label: "هاوٍ جادّ",
    title: "عندك نظام منزلي",
    desc: "بنيت DWC أو NFT في حديقتك أو سطحك. تريد فهم البيانات بدلاً من التخمين، وتتبّع كل قراءة بدل التذكُّر من الذاكرة.",
  },
  {
    Icon: Users,
    label: "مزارع صغير",
    title: "في طور التوسّع التجاري",
    desc: "تبيع جزءاً من إنتاجك أو تخطّط لذلك. التطبيق هو خطوتك الأولى نحو منصة iGarden الكاملة للمزارع التجارية.",
  },
] as const;

const FEATURES = [
  {
    Icon: LineChart,
    title: "حاسبات دقيقة",
    subtitle: "أرقام، لا تقدير",
    desc: "حاسبة المحلول الغذائي (GHE 3-Part وغيرها)، pH الهدف لكل مرحلة نمو، معدل التدفق المثالي. تختار المحصول والمرحلة، تحصل على الأرقام.",
    bullets: [
      "30+ محصول معايَر للمناخ السعودي",
      "نطاقات EC و pH لكل مرحلة نمو",
      "تحويل تلقائي بين الوحدات",
    ],
    img: "/images/app/mockup-03-calculator.png",
    alt: "حاسبة المحلول الغذائي — تطبيق الحديقة الذكية",
  },
  {
    Icon: BookOpen,
    title: "يوميات النظام",
    subtitle: "ذاكرة تنمو معك",
    desc: "تسجّل قراءاتك اليدوية، النظام يرسم الاتجاهات. ترى متى ارتفع EC ومتى انخفض pH، وتفهم نظامك موسماً بعد موسم.",
    bullets: [
      "رسوم بيانية لـ 7 و 30 و 90 يوماً",
      "تنبيهات عند الخروج من النطاق",
      "تصدير CSV للنسخ الاحتياطي",
    ],
    img: "/images/app/mockup-04-journal.png",
    alt: "يوميات النظام — تطبيق الحديقة الذكية",
  },
  {
    Icon: MessageCircle,
    title: "المرشد التقني",
    subtitle: "إجابات بالعربية",
    desc: "محادثة بالعربية لكل سؤال تقني — لماذا انخفض الـ EC؟ متى أُعاير الـ pH؟ كم نسبة المغذّيات لمرحلة الإنبات؟ ردود مبنيّة على بيانات نظامك.",
    bullets: [
      "يفهم سياق محصولك الحالي",
      "اقتراحات بالأرقام لا الكلمات",
      "ذاكرة لكل محادثة",
    ],
    img: "/images/app/mockup-05-guide.png",
    alt: "المرشد التقني — تطبيق الحديقة الذكية",
  },
  {
    Icon: BookOpen,
    title: "دليل المحاصيل",
    subtitle: "30 محصولاً معايراً",
    desc: "لكل محصول: مدة الحصاد، الإنتاج المتوقع، 4 مراحل نمو بـ EC و pH، وملاحظات للمناخ السعودي تحديداً (شتاء/صيف/منطقة).",
    bullets: [
      "خس · ريحان · طماطم · نعنع · رشاد...",
      "موسمية لكل منطقة",
      "ملاحظات من تجاربنا الميدانية",
    ],
    img: "/images/app/mockup-06-library.png",
    alt: "دليل المحاصيل — تطبيق الحديقة الذكية",
  },
] as const;

const ROADMAP = [
  {
    phase: "00",
    title: "التحقق من السوق",
    when: "الشهر 1",
    status: "current",
    desc: "صفحة هبوط، 10 مقابلات مع هواة، إثبات أن السوق موجود قبل أي تطوير.",
  },
  {
    phase: "01",
    title: "MVP محتوى + متابعة",
    when: "الشهر 2-4",
    status: "next",
    desc: "30 محصولاً، حاسبات، يوميات، مرشد. على iOS و Android. مجاني للمستخدمين الأوائل.",
  },
  {
    phase: "02",
    title: "iGarden Hydro Kit",
    when: "الشهر 5-9",
    status: "future",
    desc: "أول هاردوير: حساسات EC و pH ودرجة حرارة، ربط BLE، قراءات لحظية بدلاً من اليدوية.",
  },
  {
    phase: "03",
    title: "جسر إلى B2B",
    when: "الشهر 10-15",
    status: "future",
    desc: "للمزارعين الصغار الذين توسّعوا: تقارير امتثال أولية، استشارة ميدانية، مدخل لمنصة iGarden الكاملة.",
  },
] as const;

const MOCKUP_SLIDES = [
  { idx: 1, title: "الترحيب", desc: "مدخل بسيط — ثلاث قيم محورية: حاسبات، يوميات، مرشد." },
  { idx: 2, title: "الرئيسية", desc: "آخر قراءات نظامك، مهام اليوم، ومحاصيلك النشطة في لمحة." },
  { idx: 3, title: "حاسبة المحلول", desc: "اختر المحصول والمرحلة وحجم الخزان — يحسب لك المطلوب من كل مكوّن." },
  { idx: 4, title: "يوميات النظام", desc: "اتجاه EC خلال 7 أيام، آخر القراءات، تنبيهات عند الخروج." },
  { idx: 5, title: "المرشد التقني", desc: "محادثة بالعربية تشرح لماذا انخفض EC وتقترح الحلّ بالأرقام." },
  { idx: 6, title: "دليل المحاصيل", desc: "30 محصولاً معايَراً — تصفية حسب الصعوبة والنوع." },
  { idx: 7, title: "تفاصيل المحصول", desc: "4 مراحل نمو، EC/pH لكل مرحلة، ملاحظات للمناخ السعودي." },
  { idx: 8, title: "حسابي + Hydro Kit", desc: "ملفك الشخصي ومدخل قائمة الانتظار للهاردوير القادم." },
] as const;

export default function AppPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center bg-deep-green overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none" aria-hidden>
          <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-lime blur-3xl" />
          <div className="absolute bottom-10 left-20 w-72 h-72 rounded-full bg-brand-500 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10 py-24 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lime/20 border border-lime/30 backdrop-blur-sm text-lime text-sm font-bold tracking-widest uppercase mb-6">
                <Smartphone className="w-4 h-4" />
                <span>Phase 2 · قريباً</span>
              </div>

              <h1 className="text-cream text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                ازرع بذكاء.
                <br />
                <span className="text-lime">من جيبك.</span>
              </h1>

              <p className="text-cream/85 text-lg md:text-xl leading-relaxed mb-4 font-semibold">
                رفيقك في الزراعة المائية — EC، pH، PPM، توقيت الري.
              </p>
              <p className="text-cream/75 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                أرقام دقيقة، لا تخمين. للهواة الجادّين والمزارعين المنزليين الذين
                يبنون أنظمة DWC و NFT في السعودية.
              </p>

              <div className="flex items-center gap-4 flex-wrap mb-8">
                <Link
                  href="#waitlist"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-lime hover:bg-bright-lime text-deep-green rounded-button font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-lime/40 focus:ring-offset-2 focus:ring-offset-deep-green"
                >
                  انضم لقائمة الانتظار
                  <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                </Link>
                <Link
                  href="#features"
                  className="text-cream hover:text-lime transition-colors text-sm font-semibold underline-offset-4 hover:underline"
                >
                  شاهد الميزات ↓
                </Link>
              </div>

              <div className="flex items-center gap-6 flex-wrap text-cream/60 text-sm pt-6 border-t border-lime/10">
                <div className="flex items-center gap-2">
                  <span className="bg-lime rounded-full w-2 h-2 animate-pulse" />
                  <span>قيد التطوير</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-cream/20" />
                <div className="flex items-center gap-2">
                  <span className="text-lime font-bold">عربي</span>
                  <span>أوّلاً</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-cream/20" />
                <div className="flex items-center gap-2">
                  <span className="text-lime font-bold">iOS · Android</span>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-8 bg-lime/10 blur-3xl rounded-full" aria-hidden />
                <Image
                  src="/images/app/mockup-01-welcome.png"
                  alt="الشاشة الرئيسية لتطبيق الحديقة الذكية — صفحة الترحيب"
                  width={400}
                  height={820}
                  priority
                  className="relative drop-shadow-2xl max-w-[320px] lg:max-w-[380px] w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* لمن — 3 شرائح */}
      <section className="bg-cream py-20 lg:py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-14">
            <p className="text-brand-600 text-sm font-bold uppercase tracking-widest mb-3">
              لمن · For Whom
            </p>
            <h2 className="text-deep-green text-3xl md:text-4xl font-bold mb-4">
              ثلاث شرائح · رحلة واحدة متدرّجة
            </h2>
            <p className="text-medium-gray max-w-2xl mx-auto leading-relaxed">
              التطبيق ينمو معك — من أول محصول، إلى أول نظام، إلى أول عميل تجاري.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {FOR_WHOM.map((persona) => (
              <article
                key={persona.label}
                className="bg-white rounded-card p-6 lg:p-8 border border-deep-green/10 hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 rounded-full bg-brand-600 flex items-center justify-center mb-5">
                  <persona.Icon className="w-7 h-7 text-cream" aria-hidden />
                </div>
                <p className="text-medium-gray text-xs font-bold uppercase tracking-wider mb-1">
                  {persona.label}
                </p>
                <h3 className="text-deep-green text-xl font-bold mb-3">
                  {persona.title}
                </h3>
                <p className="text-medium-gray text-sm leading-relaxed">
                  {persona.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* الميزات */}
      <section id="features" className="bg-white py-20 lg:py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-14">
            <p className="text-brand-600 text-sm font-bold uppercase tracking-widest mb-3">
              الميزات · What&apos;s Inside
            </p>
            <h2 className="text-deep-green text-3xl md:text-4xl font-bold mb-4">
              أربع أدوات · بنية واحدة متكاملة
            </h2>
            <p className="text-medium-gray max-w-2xl mx-auto">
              كل ميزة مبنيّة على بيانات حقيقية من الميدان — ومُكيَّفة للمناخ السعودي.
            </p>
          </div>

          <div className="space-y-16 lg:space-y-24">
            {FEATURES.map((feature, i) => {
              const reversed = i % 2 === 1;
              return (
                <div
                  key={feature.title}
                  className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
                >
                  <div className={reversed ? "lg:order-2" : ""}>
                    <div className="w-12 h-12 rounded-full bg-brand-600/10 flex items-center justify-center mb-4">
                      <feature.Icon className="w-6 h-6 text-brand-600" aria-hidden />
                    </div>
                    <p className="text-medium-gray text-xs font-bold uppercase tracking-wider mb-2">
                      {feature.subtitle}
                    </p>
                    <h3 className="text-deep-green text-2xl lg:text-3xl font-bold mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-medium-gray text-base lg:text-lg leading-relaxed mb-6">
                      {feature.desc}
                    </p>
                    <ul className="space-y-2.5">
                      {feature.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2 text-deep-green text-sm lg:text-base"
                        >
                          <CheckCircle2 className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`flex justify-center ${reversed ? "lg:order-1" : ""}`}>
                    <div className="relative">
                      <div className="absolute -inset-6 bg-lime/15 blur-3xl rounded-full" aria-hidden />
                      <Image
                        src={feature.img}
                        alt={feature.alt}
                        width={380}
                        height={780}
                        className="relative drop-shadow-xl max-w-[280px] lg:max-w-[340px] w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* خارطة الطريق */}
      <section className="bg-deep-green py-20 lg:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-lime text-sm font-bold uppercase tracking-widest mb-3">
              خارطة الطريق · Roadmap
            </p>
            <h2 className="text-cream text-3xl md:text-4xl font-bold mb-4">
              أربع مراحل · 15 شهراً · معايير عبور صارمة
            </h2>
            <p className="text-cream/75 max-w-2xl mx-auto leading-relaxed">
              لا نُطلق ميزة قبل أن تُثبت سابقتها. كل مرحلة لها بوّابة — لو لم نعبرها، نتوقف ونصلح.
            </p>
          </div>

          <div className="space-y-4">
            {ROADMAP.map((stage) => {
              const isCurrent = stage.status === "current";
              const isFuture = stage.status === "future";
              return (
                <article
                  key={stage.phase}
                  className={`rounded-card p-6 lg:p-7 border-2 transition-colors ${
                    isCurrent
                      ? "bg-lime/10 border-lime/40"
                      : isFuture
                      ? "bg-corp-green/30 border-cream/10"
                      : "bg-corp-green/40 border-lime/20"
                  }`}
                >
                  <div className="flex items-start gap-5">
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg shrink-0 ${
                        isCurrent
                          ? "bg-lime text-deep-green"
                          : "bg-corp-green text-lime border-2 border-lime/30"
                      }`}
                    >
                      {stage.phase}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-baseline gap-3 flex-wrap mb-2">
                        <h3 className="text-cream text-lg lg:text-xl font-bold">
                          {stage.title}
                        </h3>
                        <span className="text-lime text-xs font-semibold">
                          {stage.when}
                        </span>
                        {isCurrent && (
                          <span className="text-deep-green bg-lime text-xs font-bold px-2 py-0.5 rounded-full">
                            الحالية
                          </span>
                        )}
                      </div>
                      <p className="text-cream/75 text-sm lg:text-base leading-relaxed">
                        {stage.desc}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <p className="text-cream/60 text-sm italic max-w-2xl mx-auto">
              المراحل اللاحقة تتطلّب نجاح المراحل السابقة. لن نلتزم بمواعيد إطلاق رسمية قبل أن تُثبت كل مرحلة جدواها.
            </p>
          </div>
        </div>
      </section>

      {/* معرض الـ mockups */}
      <section className="bg-cream py-20 lg:py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-14">
            <p className="text-brand-600 text-sm font-bold uppercase tracking-widest mb-3">
              لمحة · Sneak Peek
            </p>
            <h2 className="text-deep-green text-3xl md:text-4xl font-bold mb-4">
              ثمان شاشات من النسخة قيد التطوير
            </h2>
            <p className="text-medium-gray max-w-2xl mx-auto">
              التصميم النهائي قد يختلف. نُشارك التصور الحالي للشفافية مع المسجَّلين الأوائل.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {MOCKUP_SLIDES.map((slide) => (
              <figure
                key={slide.idx}
                className="bg-white rounded-card p-4 border border-deep-green/10 hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-[9/19] mb-3 overflow-hidden rounded-lg bg-cream">
                  <Image
                    src={`/images/app/mockup-0${slide.idx}.png`}
                    alt={`${slide.title} — تطبيق الحديقة الذكية`}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-contain"
                  />
                </div>
                <figcaption className="text-center">
                  <p className="text-deep-green font-bold text-sm mb-1">
                    {slide.idx}. {slide.title}
                  </p>
                  <p className="text-medium-gray text-xs leading-relaxed">
                    {slide.desc}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* التكامل مع iGarden */}
      <section className="bg-white py-20 lg:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-brand-600 text-sm font-bold uppercase tracking-widest mb-3">
              التكامل · Integration
            </p>
            <h2 className="text-deep-green text-3xl md:text-4xl font-bold mb-4">
              التطبيق طبقة من منصة iGarden
            </h2>
            <p className="text-medium-gray max-w-2xl mx-auto leading-relaxed">
              ليس منتجاً معزولاً — هو الذراع الاستهلاكية لمنصة iGarden للزراعة الذكية في السعودية.
            </p>
          </div>

          <div className="bg-cream rounded-card p-6 lg:p-10 border border-deep-green/10">
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-brand-600 flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-8 h-8 text-cream" aria-hidden />
                </div>
                <h3 className="text-deep-green font-bold text-base mb-2">
                  المنزل
                </h3>
                <p className="text-medium-gray text-sm leading-relaxed">
                  تطبيق الحديقة الذكية — للهواة والمزارعين المنزليين.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-brand-600 flex items-center justify-center mx-auto mb-4">
                  <Cpu className="w-8 h-8 text-cream" aria-hidden />
                </div>
                <h3 className="text-deep-green font-bold text-base mb-2">
                  المزرعة الصغيرة
                </h3>
                <p className="text-medium-gray text-sm leading-relaxed">
                  iGarden Hydro Kit — أول هاردوير محمول للهواة الجادّين.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-brand-600 flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-cream" aria-hidden />
                </div>
                <h3 className="text-deep-green font-bold text-base mb-2">
                  المزرعة التجارية
                </h3>
                <p className="text-medium-gray text-sm leading-relaxed">
                  iGarden Smart OS — منصة كاملة للمزارع المُمتثلة.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-deep-green/10 text-center">
              <p className="text-deep-green text-sm lg:text-base leading-relaxed max-w-2xl mx-auto">
                نفس الهوية، نفس الفلسفة، نفس الفريق — في ثلاث مستويات تخدم رحلة المزارع السعودي
                من النبتة الأولى إلى الإنتاج التجاري.
              </p>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 mt-5 text-brand-600 hover:text-deep-green text-sm font-semibold underline-offset-4 hover:underline"
              >
                اكتشف منصة iGarden الكاملة
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* نموذج Waitlist */}
      <section
        id="waitlist"
        className="bg-gradient-to-br from-deep-green via-brand-600 to-deep-green py-20 lg:py-24 scroll-mt-20"
      >
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lime/20 text-lime text-sm font-bold mb-6">
              <Calendar className="w-4 h-4" />
              <span>قائمة الانتظار · مفتوحة الآن</span>
            </div>

            <h2 className="text-cream text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
              كن أول من يجرّب
              <br />
              <span className="text-lime">قبل الإطلاق</span>
            </h2>

            <p className="text-cream/85 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
              أوّل نسخة تجريبية تذهب للمسجَّلين أولاً. لن تتلقى إعلانات — فقط تحديثات حقيقية من الميدان.
            </p>
          </div>

          <AppWaitlistForm source="website" />
        </div>
      </section>
    </>
  );
}
