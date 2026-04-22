import type { Metadata } from "next";
import { Eye, Target, Sparkles, Award, Users, Leaf } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "من نحن",
  description:
    "iGarden — شركة سعودية تقود التحول الرقمي الزراعي في المنطقة عبر منظومة متكاملة تجمع الذكاء الاصطناعي وإنترنت الأشياء.",
};

export default function AboutPage() {
  return (
    <>
      {/* ============================================================
          Hero
          ============================================================ */}
      <section className="bg-[var(--color-surface)] section-padding">
        <div className="container-igarden">
          <div className="max-w-4xl">
            <p className="heading-eyebrow mb-6">من نحن</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-[var(--color-brand-600)] mb-6">
              نقود التحول الرقمي الزراعي
              <br />
              <span className="text-[var(--color-accent-500)]">في المنطقة.</span>
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-muted)] leading-relaxed max-w-3xl">
              <span className="font-bold text-[var(--color-foreground)]">
                {COMPANY.legalEn} ({COMPANY.legalAr})
              </span>{" "}
              — شركة سعودية مقرها جدة، متخصصة في الحلول الزراعية الذكية المدعومة
              بالذكاء الاصطناعي وإنترنت الأشياء، ومصممة محلياً لتحديات مناخ المملكة
              ومتطلبات الأمن الغذائي ضمن رؤية 2030.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          الرؤية والرسالة
          ============================================================ */}
      <section className="bg-white section-padding">
        <div className="container-igarden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            <PurposeCard
              icon={<Eye className="h-7 w-7" />}
              eyebrow="رؤيتنا"
              title="الخيار الأول للتحول الرقمي الزراعي"
              description="أن نكون الخيار الأول في التحول الرقمي الزراعي بالمنطقة، وقيادة مستقبل الأمن الغذائي."
            />
            <PurposeCard
              icon={<Target className="h-7 w-7" />}
              eyebrow="رسالتنا"
              title="تمكين الجميع من زراعة ذكية ومستدامة"
              description="تمكين الجميع من زراعة ذكية ومستدامة عبر أحدث تقنيات IoT & AI، لتحويل الزراعة التقليدية إلى منظومة منتجة."
              accent
            />
          </div>
        </div>
      </section>

      {/* ============================================================
          قيمنا الراسخة
          ============================================================ */}
      <section className="bg-[var(--color-surface)] section-padding">
        <div className="container-igarden">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="heading-eyebrow mb-4">قيمنا الراسخة</p>
            <h2 className="heading-section">المبادئ التي نبني عليها</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ValueCard
              icon={<Sparkles className="h-6 w-6" />}
              title="الابتكار"
              description="حلول إبداعية تسبق التطلعات."
            />
            <ValueCard
              icon={<Award className="h-6 w-6" />}
              title="الجودة"
              description="الالتزام بأعلى معايير الدقة."
            />
            <ValueCard
              icon={<Users className="h-6 w-6" />}
              title="العميل أولاً"
              description="شراكة حقيقية لنجاح العميل."
            />
            <ValueCard
              icon={<Leaf className="h-6 w-6" />}
              title="الاستدامة"
              description="ضمان مستقبل أخضر للأجيال."
            />
          </div>
        </div>
      </section>

      {/* ============================================================
          المنظومة المتكاملة
          ============================================================ */}
      <section className="bg-white section-padding">
        <div className="container-igarden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="heading-eyebrow mb-4">منهجنا</p>
              <h2 className="heading-section mb-6">تكامل 3 في 1</h2>
              <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-4">
                ما يميز iGarden ليس منتجاً منفرداً، بل منظومة كاملة تربط بين العتاد
                والبرمجيات والمعرفة في تجربة واحدة سلسة.
              </p>
              <p className="text-lg text-[var(--color-muted)] leading-relaxed">
                هذا التكامل يقلل الحاجة إلى موردين متعددين، ويضمن أن كل مكوّن مصمم
                ليعمل مع البقية بأقصى كفاءة.
              </p>
            </div>

            <div className="space-y-4">
              <IntegrationItem
                badge="hardware"
                badgeLabel="HARDWARE"
                title="العتاد المصمم محلياً"
                description="أبراج Aeroponic، بيوت محمية، أنظمة Aquaponics، وحساسات pH/TDS/درجة الحرارة."
              />
              <IntegrationItem
                badge="software"
                badgeLabel="SOFTWARE"
                title="منصة iGarden Cloud"
                description="تحكم سحابي مركزي، تحليلات تنبؤية، تنبيهات لحظية، وتكامل API مع أنظمة ERP."
              />
              <IntegrationItem
                badge="knowledge"
                badgeLabel="KNOWLEDGE"
                title="iGarden Knowledge"
                description="إرشاد فني، برامج تدريبية، وشراكات أكاديمية لنقل الخبرة الزراعية الذكية."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ----- مكونات داخلية ----- */

function PurposeCard({
  icon,
  eyebrow,
  title,
  description,
  accent = false,
}: {
  icon: React.ReactNode;
  eyebrow: string;
  title: string;
  description: string;
  accent?: boolean;
}) {
  return (
    <Card className="p-2">
      <CardHeader>
        <div
          className={`h-14 w-14 rounded-2xl flex items-center justify-center mb-4 ${
            accent
              ? "bg-[var(--color-accent-500)] text-[var(--color-brand-700)]"
              : "bg-[var(--color-brand-50)] text-[var(--color-brand-600)]"
          }`}
        >
          {icon}
        </div>
        <p className="heading-eyebrow mb-2">{eyebrow}</p>
        <CardTitle className="text-2xl md:text-3xl mb-3">{title}</CardTitle>
        <CardDescription className="text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}

function ValueCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-2xl border border-[var(--color-border)] p-6 hover:border-[var(--color-accent-500)] transition-colors duration-300 group">
      <div className="h-12 w-12 rounded-xl bg-[var(--color-brand-50)] text-[var(--color-brand-600)] flex items-center justify-center mb-4 group-hover:bg-[var(--color-accent-500)] group-hover:text-[var(--color-brand-700)] transition-colors">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-[var(--color-brand-600)] mb-2">{title}</h3>
      <p className="text-sm text-[var(--color-muted)]">{description}</p>
    </div>
  );
}

function IntegrationItem({
  badge,
  badgeLabel,
  title,
  description,
}: {
  badge: "hardware" | "software" | "knowledge";
  badgeLabel: string;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-[var(--color-surface)] rounded-2xl p-6 border-r-4 border-[var(--color-accent-500)]">
      <Badge variant={badge} className="mb-3">
        {badgeLabel}
      </Badge>
      <h4 className="text-lg font-bold text-[var(--color-brand-600)] mb-2">{title}</h4>
      <p className="text-sm text-[var(--color-muted)] leading-relaxed">{description}</p>
    </div>
  );
}
