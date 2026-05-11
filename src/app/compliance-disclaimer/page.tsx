import type { Metadata } from "next";
import { CTAButton } from "@/components/shared/CTAButton";

export const metadata: Metadata = {
  title: "إخلاء الامتثال",
  description:
    "إخلاء مسؤولية الامتثال — iGarden تقدّم دعماً لجاهزية الامتثال الزراعي ولا تضمن الحصول على شهادات أو تراخيص.",
  alternates: { canonical: "https://igarden.sa/compliance-disclaimer" },
  robots: { index: false, follow: true },
};

export default function ComplianceDisclaimerPage() {
  return (
    <section className="section-light py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <p className="text-lime text-sm font-bold uppercase tracking-widest mb-3">
          قانوني
        </p>
        <h1 className="h1 text-deep-green mb-8">إخلاء مسؤولية الامتثال</h1>

        <div className="bg-white rounded-card p-8 shadow-soft space-y-6 body-base text-medium-gray leading-relaxed">
          <section>
            <h2 className="h3 text-deep-green mb-3">1. طبيعة خدمات الامتثال</h2>
            <p>
              تقدّم شركة انتيليجنت غاردن (ذ.م.م) — المُشار إليها بـ «iGarden» — خدمات
              مساندة لجاهزية الامتثال الزراعي، تشمل توثيق سجلات التشغيل، إعداد التقارير،
              وتهيئة الأنظمة لمتطلبات الجهات التنظيمية. هذه الخدمات مساندة استشارية ولا
              ترقى إلى مستوى الخدمات القانونية أو التنظيمية المتخصّصة.
            </p>
          </section>

          <section>
            <h2 className="h3 text-deep-green mb-3">2. لا ضمان على الشهادات والتراخيص</h2>
            <p>
              لا تضمن iGarden حصول العميل على أي شهادة أو ترخيص تنظيمي، بما يشمل على
              سبيل المثال لا الحصر: شهادة Saudi GAP، تراخيص وزارة البيئة والمياه والزراعة،
              أو أي اعتماد آخر. قرار منح الشهادة يعود حصراً للجهات التنظيمية المختصّة.
            </p>
          </section>

          <section>
            <h2 className="h3 text-deep-green mb-3">3. مسؤولية العميل</h2>
            <p>
              يتحمّل العميل المسؤولية الكاملة عن الامتثال للأنظمة والتشريعات المعمول بها في
              المملكة العربية السعودية. توصيات iGarden تقنية وتشغيلية، ولا تُغني عن الاستشارة
              القانونية أو التنظيمية المتخصّصة.
            </p>
          </section>

          <section>
            <h2 className="h3 text-deep-green mb-3">4. تحديث المعلومات</h2>
            <p>
              تتغيّر متطلبات الامتثال بمرور الوقت. يلتزم العميل بمتابعة التحديثات التنظيمية
              من المصادر الرسمية. تبذل iGarden جهدها لمواكبة هذه التحديثات لكنّها لا تضمن
              دقّة المعلومات في كل وقت.
            </p>
          </section>

          <p className="text-sm opacity-60 border-t border-light-gray pt-4">
            آخر تحديث: مايو 2026 · للاستفسار:{" "}
            <a href="mailto:info@igarden.sa" className="text-lime hover:underline">
              info@igarden.sa
            </a>
          </p>
        </div>

        <div className="mt-8">
          <CTAButton href="/contact" variant="outline-green">
            تواصل معنا للاستفسار
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
