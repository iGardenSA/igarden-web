import type { Metadata } from "next";
import Link from "next/link";
import { GraduationCap, Sprout, Cpu, Building2, ArrowLeft } from "lucide-react";
import { BreadcrumbSchema } from "@/components/shared/SchemaJsonLd";
import { CTAButton } from "@/components/shared/CTAButton";
import { FounderCard, type FounderCardProps } from "@/components/team/FounderCard";

export const metadata: Metadata = {
  title: "فريقنا · iGarden",
  description:
    "فريق متعدد التخصصات يجمع الزراعة الأكاديمية، الهندسة، والبرمجة. شركة سعودية ريادية مُرخّصة من وزارة الاستثمار.",
  alternates: { canonical: "https://igarden.sa/team" },
  openGraph: {
    title: "فريق iGarden — خبرات تُبنى عليها الزراعة الذكية",
    description: "فريق متخصص يجمع الزراعة الأكاديمية، الهندسة، والبرمجة — يعمل في مرفق R&D بعسفان.",
    type: "website",
    locale: "ar_SA",
  },
};

// TODO: Awaiting Ali's input — academic background, work history, LinkedIn URL, professional photo
// TODO: Awaiting Ayman's input — academic background, work history, LinkedIn URL, professional photo
// TODO: Awaiting Mohammed's input — academic background, work history, LinkedIn URL, professional photo
const FOUNDERS: FounderCardProps[] = [
  {
    name: "علي محمد غنيمة",
    role: "المؤسس والرئيس التنفيذي",
    photoUrl: "/team/placeholder.webp",
    academic: { degree: "TBD", field: "TBD", university: "TBD" },
    specialties: ["استراتيجية المنتج", "هندسة الأنظمة", "تطوير Smart OS", "بناء الفريق"],
    linkedinUrl: "#",
  },
  {
    name: "أيمن المخزوم",
    role: "الشريك المؤسس · البحث والتطوير",
    photoUrl: "/team/placeholder.webp",
    academic: { degree: "TBD", field: "TBD", university: "TBD" },
    specialties: ["البحث الزراعي", "تطوير الأنظمة المائية", "الاختبار الميداني في عسفان"],
    linkedinUrl: "#",
  },
  {
    name: "محمد الكثيري",
    role: "الشريك المؤسس · المالية والامتثال",
    photoUrl: "/team/placeholder.webp",
    academic: { degree: "TBD", field: "TBD", university: "TBD" },
    specialties: ["الإدارة المالية", "الامتثال التنظيمي", "علاقات العملاء B2B/B2G"],
    linkedinUrl: "#",
  },
];

const PILLARS = [
  {
    Icon: GraduationCap,
    title: "الخلفية الأكاديمية",
    description: "تخصصات متنوعة في الزراعة، الهندسة، والإدارة",
  },
  {
    Icon: Sprout,
    title: "الخبرة الميدانية",
    description: "عمل مباشر في عسفان وبيئات سعودية واقعية",
  },
  {
    Icon: Cpu,
    title: "الإتقان التقني",
    description: "برمجة وIoT وتحليل بيانات مُكيَّف للبيئة المحلية",
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
            خبرات تُبنى عليها الزراعة الذكية في السعودية
          </h1>
          <p className="body-base text-cream/80 max-w-3xl leading-relaxed">
            فريق متعدد التخصصات يجمع الزراعة الأكاديمية، الهندسة، والبرمجة —
            يعمل في مرفق R&D خاص في عسفان.
          </p>
        </div>
      </section>

      {/* ─── Philosophy ──────────────────────────────────────── */}
      <section className="section-light py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="body-base text-medium-gray leading-relaxed">
            في{" "}
            <span dir="ltr" className="font-latin font-bold text-deep-green">
              iGarden
            </span>
            ، نؤمن بأن المعرفة العملية تتقدّم على الادعاءات. نُدير مرفق R&D
            خاص في عسفان حيث نختبر ما نقدّمه قبل أن نُسلّمه. وكل عضو في
            الفريق يجلب خلفية أكاديمية ومهنية محدّدة تخدم رسالتنا.
          </p>
        </div>
      </section>

      {/* ─── Founders ────────────────────────────────────────── */}
      <section className="bg-white py-20">
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

      {/* ─── Operations Team ─────────────────────────────────── */}
      <section className="section-light py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10">
            <p className="text-lime text-sm font-bold uppercase tracking-widest mb-2">
              فريق العمليات
            </p>
            <h2 className="h3 text-deep-green">من يُشغّل عسفان يومياً</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
            {[
              { name: "كمال الشجري", role: "العمليات الميدانية — مرفق عسفان" },
              { name: "عبدالله", role: "إدخال البيانات والأرشفة التشغيلية" },
            ].map((m) => (
              <div
                key={m.name}
                className="bg-white rounded-card border border-light-gray p-5 shadow-soft"
              >
                <div className="w-10 h-10 rounded-full bg-deep-green/5 flex items-center justify-center mb-3">
                  <span className="text-lg font-bold text-deep-green/40">{m.name[0]}</span>
                </div>
                <p className="font-bold text-deep-green">{m.name}</p>
                <p className="text-sm text-medium-gray mt-0.5">{m.role}</p>
              </div>
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
            <ArrowLeft className="w-4 h-4 mr-2" aria-hidden />
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
