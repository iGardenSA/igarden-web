import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/shared/SchemaJsonLd";
import { CTAButton } from "@/components/shared/CTAButton";
import {
  Hammer,
  Globe2,
  Microscope,
  User,
  CheckCircle2,
  Sprout,
} from "lucide-react";

export const metadata: Metadata = {
  title: "من نحن — شركة سعودية لتطوير المزارع | iGarden",
  description:
    "iGarden — العلامة التجارية لشركة انتيليجنت غاردن. نبني ونُوطّن ونُطوّر أنظمة الزراعة الذكية. تأسّست 2024، مُرخَّصة 2026.",
  alternates: { canonical: "https://igarden.sa/about" },
  openGraph: {
    title: "من نحن — iGarden",
    description:
      "شركة سعودية لتطوير المزارع. سلاحنا الابتكار، ومنهجنا «نبني · نُوطّن · نُطوّر».",
    images: ["/images/og/about.jpg"],
    type: "website",
    locale: "ar_SA",
  },
};

/* ─── Section 1: Hero ─────────────────────────────────────── */
function Hero() {
  return (
    <section className="section-light py-20 md:py-28">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <p className="text-lime text-xs font-bold uppercase tracking-widest mb-3">
          منذ 2024 · AgriTech سعودية ريادية
        </p>
        <h1 className="h1 text-deep-green mb-5">
          شركة ريادية سعودية، سلاحها الابتكار
        </h1>
        <p className="body-base text-medium-gray max-w-2xl mx-auto">
          <span dir="ltr" className="ltr-inline font-latin font-bold">
            iGarden
          </span>{" "}
          — العلامة التجارية لشركة انتيليجنت غاردن (ذات مسؤولية محدودة).
          نُطوّر أنظمة الزراعة الذكية المُكيَّفة لمناخ السعودية ومدخلاتها
          المحلية.
        </p>
      </div>
    </section>
  );
}

/* ─── Section 2: Why We Started ──────────────────────────── */
function WhyWeStarted() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-8">
          <p className="text-lime text-xs font-bold uppercase tracking-widest mb-2">
            القصة
          </p>
          <h2 className="h2 text-deep-green">لماذا بدأنا؟</h2>
        </div>
        {/*
          [CONTENT_NEEDED: قصّة 120-150 كلمة عن سبب بدء iGarden.
           المحاور المقترحة:
           - الفجوة في حلول الزراعة الذكية المُكيَّفة محلياً
           - رؤية المملكة 2030 + الأمن الغذائي
           - شغف الفريق المؤسّس
           - تجربة مع منتجات مستوردة لا تصمد في الصيف]
        */}
        <div className="bg-cream rounded-card p-8 shadow-soft">
          <p className="body-base text-medium-gray leading-relaxed">
            [CONTENT_NEEDED: القصّة الكاملة — سبب بدء iGarden بقلم المؤسّس
            علي غنيمة. 120-150 كلمة. المحاور: الفجوة المحلية، رؤية 2030،
            تجربة مع منتجات مستوردة لا تصمد في +45°C.]
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── Section 3: Timeline ─────────────────────────────────── */
const TIMELINE = [
  {
    year: "2024",
    title: "البداية والتأسيس",
    items: [
      "تأسيس فريق العمل المؤسّس",
      "بحث وتطوير أوّلي في تقنيات الزراعة المائية",
      "تحديد المنهج «نبني · نُوطّن · نُطوّر»",
    ],
  },
  {
    year: "2025",
    title: "النماذج والتجارب",
    items: [
      "بناء النماذج الأوّلية لـ Smart Controllers",
      "إطلاق محطّة عسفان للتجارب والتطوير",
      "تنفيذ 5 ورش «ازرع بذكاء»",
      "208 اختبار وحدوي ناجح على Smart OS",
    ],
  },
  {
    year: "2026",
    title: "الترخيص والإطلاق",
    items: [
      "الترخيص الرسمي MISA — فبراير 2026",
      "تسجيل iGarden Tower في SAIP (#423450193)",
      "إطلاق المنصّة الرقمية الكاملة",
      "الإعداد لمنحة سنبلة",
    ],
  },
];

function TimelineSection() {
  return (
    <section className="section-light py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <p className="text-lime text-xs font-bold uppercase tracking-widest mb-2">
            الرحلة
          </p>
          <h2 className="h2 text-deep-green">3 سنوات من التطوير</h2>
          {/* [CONTENT_NEEDED: تأكيد التواريخ والإنجازات الدقيقة من Master Doc §1.5] */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TIMELINE.map((t) => (
            <div key={t.year} className="bg-white rounded-card p-6 shadow-soft">
              <div className="w-16 h-16 rounded-full bg-lime/10 border-2 border-lime flex items-center justify-center mb-4">
                <span className="font-latin font-bold text-deep-green text-lg">
                  {t.year}
                </span>
              </div>
              <h3 className="h4 text-deep-green mb-4">{t.title}</h3>
              <ul className="space-y-2">
                {t.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2
                      className="w-4 h-4 text-lime flex-shrink-0 mt-0.5"
                      aria-hidden
                    />
                    <span className="body-sm text-medium-gray">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section 4: Methodology Deep Dive ───────────────────── */
const METHODOLOGY = [
  {
    Icon: Hammer,
    verb: "نبني",
    title: "من الحساس إلى الحصاد",
    body: "نُصمّم ونُنشئ مزارع وأنظمة تحكّم ذكي من الألف إلى الياء. فريقنا الميداني يبني — لا يوجّه فقط.",
    example:
      "[CONTENT_NEEDED: مثال عملي — مشروع بناه الفريق ميدانياً من الصفر حتى التسليم]",
  },
  {
    Icon: Globe2,
    verb: "نُوطّن",
    title: "التقنية العالمية بمدخلات سعودية",
    body: "نأخذ التقنية العالمية ونُعيد تنفيذها بمواد ومدخلات محلية. ما يصلك صُنع لمناخك — لا لمناخ أوروبا.",
    example:
      "[CONTENT_NEEDED: مثال عملي — مثلاً: «اختبرنا 4 مضخّات محلية لـ Tower قبل اعتماد الأفضل بدلاً من الاستيراد»]",
  },
  {
    Icon: Microscope,
    verb: "نُطوّر",
    title: "R&D داخلي مستمرّ",
    body: "نُواجه الصعوبات بالابتكار، لا بالاستسلام لحدود المنتج المستورد. كل فشل في عسفان يُترجَم إلى تحسين.",
    example:
      "[CONTENT_NEEDED: مثال عملي — تحدٍّ واجهه الفريق في عسفان وكيف طوّر حلاً داخلياً]",
  },
];

function MethodologyDeepDive() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-lime text-xs font-bold uppercase tracking-widest mb-2">
            المنهج
          </p>
          <h2 className="h2 text-deep-green">ننفّذ · نُوطّن · نُطوّر</h2>
          <p className="body-base text-medium-gray max-w-2xl mx-auto mt-3">
            ليس شعاراً — هو الوصف الحرفي لما نفعله كل يوم.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {METHODOLOGY.map(({ Icon, verb, title, body, example }) => (
            <div
              key={verb}
              className="bg-cream rounded-card p-8 shadow-soft hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 rounded-full bg-lime/10 flex items-center justify-center mb-6">
                <Icon className="w-7 h-7 text-deep-green" aria-hidden />
              </div>
              <p className="text-lime font-bold text-xl mb-1">{verb}</p>
              <h3 className="h4 text-deep-green mb-3">{title}</h3>
              <p className="body-base text-medium-gray mb-4">{body}</p>
              <div className="border-t border-light-gray pt-4">
                <p className="text-xs text-lime font-bold uppercase tracking-wider mb-1">
                  مثال حقيقي
                </p>
                <p className="body-sm text-medium-gray italic">{example}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section 5: Team ─────────────────────────────────────── */
const TEAM = [
  {
    name: "علي محمد غنيمة",
    role: "المؤسس والمدير التنفيذي",
    expertise: "Hydroponics · Aquaponics · IoT · Raspberry Pi",
  },
  {
    name: "م. أيمن المخزومي",
    role: "شريك ومسؤول R&D",
    expertise: "[CONTENT_NEEDED: خلفية م. أيمن العملية والتخصص]",
  },
  {
    name: "محمد الكثيري",
    role: "شريك ممول",
    expertise: "[CONTENT_NEEDED: خلفية محمد والدور الاستراتيجي]",
  },
];

function TeamSection() {
  return (
    <section className="section-light py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <p className="text-lime text-xs font-bold uppercase tracking-widest mb-2">
            الفريق المؤسّس
          </p>
          <h2 className="h2 text-deep-green">الأشخاص خلف iGarden</h2>
          {/* [CONTENT_NEEDED: صور احترافية للفريق بعد جلسة التصوير (P1)] */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TEAM.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-card p-6 shadow-soft text-center"
            >
              {/* Photo placeholder — يُستبدل بعد جلسة التصوير */}
              <div className="w-24 h-24 rounded-full border-2 border-lime bg-cream flex items-center justify-center mx-auto mb-4">
                <User className="w-10 h-10 text-lime" aria-hidden />
              </div>
              <h3 className="h4 text-deep-green mb-1">{member.name}</h3>
              <p className="text-lime text-sm font-medium mb-3">{member.role}</p>
              <p className="body-sm text-medium-gray font-latin text-xs leading-relaxed">
                {member.expertise}
              </p>
            </div>
          ))}
        </div>
        <p className="text-center text-medium-gray text-xs mt-6">
          الصور الاحترافية قيد التصوير — ستُضاف قريباً.
        </p>
      </div>
    </section>
  );
}

/* ─── Section 6: Osfan Link ──────────────────────────────── */
const OSFAN_IMAGES = [
  { src: "/images/osfan/preview-1.jpg", alt: "نظام زراعة مائية في عسفان" },
  { src: "/images/osfan/preview-2.jpg", alt: "ورشة «ازرع بذكاء» في عسفان" },
  { src: "/images/osfan/preview-3.jpg", alt: "نباتات الخس في المحطة" },
];

function OsfanLinkSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="grid grid-cols-3 gap-3">
            {OSFAN_IMAGES.map((img) => (
              <div
                key={img.src}
                className="aspect-square rounded-card overflow-hidden bg-brand-500/20"
                style={{
                  backgroundImage: `url(${img.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                role="img"
                aria-label={img.alt}
              >
                <span className="sr-only">{img.alt}</span>
              </div>
            ))}
          </div>
          <div>
            <p className="text-lime text-xs font-bold uppercase tracking-widest mb-3">
              مختبرنا الميداني
            </p>
            <h2 className="h2 text-deep-green mb-4">
              نحن نملك ما لا تملكه شركات «AgriTech» الورقية
            </h2>
            <p className="body-base text-medium-gray mb-6">
              مختبرٌ ميداني حقيقي في عسفان — حيث نختبر كلّ نظام في ظروف
              المناخ السعودي قبل تسليمه لأيّ عميل.
            </p>
            <CTAButton href="/osfan-station" variant="outline-green">
              استكشف محطّة عسفان
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Section 7: Values ───────────────────────────────────── */
const VALUES = [
  { title: "احترافية", desc: "في كلّ تفصيلة — من الاتّصال الأوّل إلى التسليم النهائي." },
  { title: "ابتكار", desc: "نحلّ المشاكل بدل تجاوزها. R&D داخلي مستمرّ." },
  { title: "استدامة", desc: "كفاءة الموارد ليست شعاراً — هي معيار التصميم." },
  { title: "محلية", desc: "مدخلات سعودية، تصنيع سعودي، اختبار سعودي." },
  { title: "ثقة بالبيانات", desc: "قراراتنا مبنيّة على قياسات وليس على افتراضات." },
];

function ValuesSection() {
  return (
    <section className="section-light py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-10">
          <h2 className="h2 text-deep-green">قيمنا الخمس</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {VALUES.map((v) => (
            <div
              key={v.title}
              className="bg-white rounded-card p-5 shadow-soft text-center hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-full bg-lime/10 flex items-center justify-center mx-auto mb-3">
                <Sprout className="w-5 h-5 text-lime" aria-hidden />
              </div>
              <h3 className="font-bold text-deep-green text-sm mb-2">{v.title}</h3>
              <p className="text-medium-gray text-xs leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section 8: Final CTA ────────────────────────────────── */
function FinalCTA() {
  return (
    <section className="bg-deep-green py-24">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="h2 text-cream mb-5">
          هل أنت جاهز للعمل مع شركة تُجرّب قبل أن تُسلّم؟
        </h2>
        <p className="body-base text-cream/80 max-w-xl mx-auto mb-10">
          استشارة مجانية أو زيارة لمحطّة عسفان — ابدأ من أيّ نقطة تريدها.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton href="/contact" variant="lime">
            احجز استشارة مجانية
          </CTAButton>
          <CTAButton href="/osfan-station" variant="outline-green">
            احجز زيارة لمحطّة عسفان
          </CTAButton>
        </div>
      </div>
    </section>
  );
}

/* ─── Page ────────────────────────────────────────────────── */
const BREADCRUMB = [
  { name: "الرئيسية", url: "/" },
  { name: "من نحن", url: "/about" },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema items={BREADCRUMB} />
      <Hero />
      <WhyWeStarted />
      <TimelineSection />
      <MethodologyDeepDive />
      <TeamSection />
      <OsfanLinkSection />
      <ValuesSection />
      <FinalCTA />
    </>
  );
}
