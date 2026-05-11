import type { Metadata } from "next";
import { GraduationCap, Sprout, Cpu, Building2, Rocket, FileText, BarChart3, Target } from "lucide-react";
import { BreadcrumbSchema } from "@/components/shared/SchemaJsonLd";
import { CTAButton } from "@/components/shared/CTAButton";
import { FounderCard, type FounderCardProps } from "@/components/team/FounderCard";

export const metadata: Metadata = {
  title: "فريقنا · iGarden",
  description:
    "ثلاثة مؤسسين بخبرات متكاملة: هندسة زراعية معتمدة، قيادة موثّقة في AgriTech منذ 2017، وعلاقات حكومية راسخة. شركة سعودية ريادية مُرخّصة من وزارة الاستثمار.",
  alternates: { canonical: "https://igarden.sa/team" },
  openGraph: {
    title: "فريق iGarden — ثلاثة مؤسسين · خبرات متكاملة",
    description:
      "هندسة زراعية معتمدة، قيادة في AgriTech منذ 2017، وعلاقات حكومية — يعملون في مرفق R&D بعسفان.",
    type: "website",
    locale: "ar_SA",
  },
};

const FOUNDERS: FounderCardProps[] = [
  {
    name: "علي محمد غنيمة",
    nameEn: "Ali Ghanimah",
    role: "المؤسس والرئيس التنفيذي المشارك",
    roleEn: "Co-Founder & Co-CEO",
    photoUrl: "/team/team-ali.jpg",
    expertise: "IoT · AgriTech · القيادة الاستراتيجية",
    experience: "+9 سنوات في الزراعة الذكية",
    bullets: [
      "يقود iGarden منذ 2025 بتركيز على الحلول الزراعية الذكية والمستدامة",
      "مؤسس ورئيس تنفيذي سابق لمؤسسة تقنيات الزراعة الحديثة (2017–2022)",
      "يقود منظومة العملاء والشراكات والتوجّه الاستراتيجي للشركة",
      "مالك نموذج صناعي مُسجَّل لدى هيئة الملكية الفكرية السعودية SAIP",
    ],
    background: {
      education: "دبلوم تجارة — جامعة دمشق",
      location: "جدة، المملكة العربية السعودية",
    },
    linkedinUrl: "https://www.linkedin.com/in/ali-ghanimah",
  },
  {
    name: "م. أيمن حسين المخزوم",
    nameEn: "Eng. Ayman Makhzoum",
    role: "الشريك المؤسس · رئيس البحث والتطوير",
    roleEn: "Co-Founder & Head of R&D",
    photoUrl: "/team/team-ayman.jpg",
    expertise: "الهندسة الزراعية · IoT · Smart OS",
    certification: "عضو الهيئة السعودية للمهندسين #1191492",
    bullets: [
      "مهندس زراعي معتمد من الهيئة السعودية للمهندسين",
      "متخصص في تقنيات التحكم الذكي والأتمتة الزراعية",
      "خبير في إنترنت الأشياء وأنظمة الري الذكية",
      "يقود تطوير منظومة الحساسات ومنصة Smart OS في عسفان",
    ],
    background: {
      education: "هندسة زراعية — جامعة البعث",
      location: "جدة، المملكة العربية السعودية",
    },
    linkedinUrl: "https://www.linkedin.com/in/ayman-makhzoum-608061321",
  },
  {
    name: "محمد يعن الله الكثيري",
    nameEn: "Mohammed Al-Kuthairi",
    role: "الشريك المؤسس · العمليات والامتثال",
    roleEn: "Co-Founder & Operations",
    photoUrl: "/team/team-mohammed.jpg",
    expertise: "العلاقات الحكومية · الامتثال · تطوير الأعمال",
    bullets: [
      "إدارة العلاقات الحكومية وملفات التراخيص الرسمية",
      "الهيكلة القانونية والامتثال التنظيمي للشركة",
      "تطوير الأعمال وبناء الشراكات الاستراتيجية",
      "إدارة ملف الترخيص الاستثماري من وزارة الاستثمار",
    ],
    background: {
      location: "جدة، المملكة العربية السعودية",
    },
  },
];

const PILLARS = [
  {
    Icon: GraduationCap,
    title: "الخلفية الأكاديمية",
    description: "هندسة زراعية معتمدة + تجارة وإدارة أعمال",
  },
  {
    Icon: Sprout,
    title: "الخبرة الميدانية",
    description: "تأسيس وتشغيل مشاريع AgriTech في السعودية منذ 2017",
  },
  {
    Icon: Cpu,
    title: "الإتقان التقني",
    description: "IoT وأتمتة زراعية وتطوير منصات تحليل بيانات",
  },
  {
    Icon: Building2,
    title: "بيئة ريادية مدعومة",
    description: "مُرخَّصون من وزارة الاستثمار ضمن منظومة ريادة الأعمال السعودية",
  },
];

const BREADCRUMB = [
  { name: "الرئيسية", url: "/" },
  { name: "فريقنا", url: "/team" },
];

export default function TeamPage() {
  return (
    <>
      <BreadcrumbSchema items={BREADCRUMB} />

      {/* ─── Hero ────────────────────────────────────────────── */}
      <section className="bg-deep-green text-cream py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-lime text-sm font-bold uppercase tracking-widest mb-4">
            الفريق التأسيسي
          </p>
          <h1 className="h1 text-cream mb-6">
            ثلاثة مؤسسين · خبرات متكاملة
          </h1>
          <p className="body-base text-cream/80 max-w-3xl leading-relaxed">
            هندسة زراعية معتمدة، قيادة موثّقة في{" "}
            <span dir="ltr" className="font-latin">AgriTech</span>{" "}
            منذ 2017، وعلاقات حكومية راسخة — يعملون في مرفق R&D خاص في عسفان.
          </p>
        </div>
      </section>

      {/* ─── Founders Grid ───────────────────────────────────── */}
      <section className="section-light py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-lime text-sm font-bold uppercase tracking-widest mb-2">
              المؤسسون
            </p>
            <h2 className="h2 text-deep-green">الفريق التأسيسي</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FOUNDERS.map((f) => (
              <FounderCard key={f.name} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── What sets us apart ──────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="h2 text-deep-green">ما يميّز فريقنا</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILLARS.map(({ Icon, title, description }) => (
              <div
                key={title}
                className="bg-cream rounded-card p-6 border border-light-gray shadow-soft text-center"
              >
                <div className="w-12 h-12 rounded-full bg-lime/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-deep-green" aria-hidden />
                </div>
                <h3 className="h4 text-deep-green mb-2">{title}</h3>
                <p className="body-sm text-medium-gray">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── AI-Augmented Operations ─────────────────────────── */}
      <section className="bg-deep-green py-20 text-cream">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-full bg-lime/20 flex items-center justify-center flex-shrink-0">
              <Rocket className="w-7 h-7 text-lime" aria-hidden />
            </div>
            <div>
              <p className="text-lime font-medium text-sm tracking-widest uppercase font-latin">
                AI-Augmented Operations
              </p>
              <h2 className="h2 text-cream mt-1">سرعة التنفيذ — ميزتنا التنافسية</h2>
            </div>
          </div>
          <p className="body-base text-cream/90 max-w-3xl mb-10">
            نتبنّى منهجاً منظّماً في استخدام أدوات الذكاء الاصطناعي للتوثيق والتحليل واتخاذ القرار.
            ثلاثة مؤسسين يُنفّذون ما يحتاج عادةً فريقاً أكبر — دون التضحية بالجودة.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                Icon: FileText,
                title: "التوثيق الذكي",
                desc: "أنظمة مُنظَّمة لتوثيق القرارات والعمليات بشكل منهجي وقابل للمراجعة",
              },
              {
                Icon: BarChart3,
                title: "التحليل المُسرَّع",
                desc: "معالجة بيانات الميدان وتقارير العمليات بكفاءة عالية وسرعة استجابة أكبر",
              },
              {
                Icon: Target,
                title: "القرار المدعوم بالبيانات",
                desc: "اتخاذ قرارات استراتيجية مبنية على تحليل دقيق للسوق والعمليات",
              },
            ].map(({ Icon, title, desc }) => (
              <div key={title} className="bg-white/5 p-6 rounded-card border border-white/10">
                <Icon className="w-6 h-6 text-lime mb-3" aria-hidden />
                <h3 className="font-bold mb-2 text-cream">{title}</h3>
                <p className="body-sm text-cream/70">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Osfan link ──────────────────────────────────────── */}
      <section className="bg-deep-green py-20 text-cream">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-lime text-sm font-bold uppercase tracking-widest mb-3">
            المرفق الميداني
          </p>
          <h2 className="h2 text-cream mb-5">
            مرفق عسفان — امتداد طبيعي لفريقنا
          </h2>
          <p className="body-base text-cream/80 max-w-2xl mx-auto mb-8">
            مرفق R&D الذي نعمل فيه يومياً ليس عرضاً تسويقياً — بل امتداد
            طبيعي لفريقنا حيث نختبر كل نظام قبل أن يصل إلى عميل.
          </p>
          <CTAButton href="/osfan-station" variant="lime">
            زر مرفق عسفان
          </CTAButton>
        </div>
      </section>

      {/* ─── Final CTA ───────────────────────────────────────── */}
      <section className="section-light py-16">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="h3 text-deep-green mb-4">تحدّث مع الفريق مباشرة</h2>
          <p className="body-base text-medium-gray mb-8">
            استشارة مجانية — نسمع فكرتك ونقيّم جاهزيتها بصدق.
          </p>
          <CTAButton href="/contact" variant="lime">
            احجز استشارة
          </CTAButton>
        </div>
      </section>
    </>
  );
}
