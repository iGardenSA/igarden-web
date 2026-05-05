import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/shared/SchemaJsonLd";

export const metadata: Metadata = {
  title: "الشروط والأحكام | iGarden",
  description:
    "شروط وأحكام استخدام موقع iGarden — حقوق الملكية الفكرية، حدود المسؤولية، وقواعد الاستخدام.",
  alternates: { canonical: "https://igarden.sa/terms" },
  robots: { index: true, follow: true },
};

const BREADCRUMB = [
  { name: "الرئيسية", url: "/" },
  { name: "الشروط والأحكام", url: "/terms" },
];

const LAST_UPDATED = "1 مايو 2026";

export default function TermsPage() {
  return (
    <>
      <BreadcrumbSchema items={BREADCRUMB} />

      {/* ─── Hero ─────────────────────────────────────────────── */}
      <section className="bg-deep-green py-16 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-lime text-lg font-bold uppercase tracking-widest mb-3">
            Legal
          </p>
          <h1 className="text-cream text-3xl md:text-4xl font-bold mb-3">
            الشروط والأحكام
          </h1>
          <p className="text-cream/60 text-lg">
            آخر تحديث: {LAST_UPDATED}
          </p>
        </div>
      </section>

      {/* ─── المحتوى ──────────────────────────────────────────── */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-10 text-dark-text leading-relaxed">

            {/* المقدمة */}
            <div className="text-medium-gray">
              <p>
                باستخدامك موقع{" "}
                <span dir="ltr" className="ltr-inline font-latin">
                  igarden.sa
                </span>{" "}
                فإنك توافق على الشروط والأحكام التالية الصادرة عن شركة
                انتيليجنت غاردن (ذات مسؤولية محدودة) — المشغّلة للعلامة
                التجارية{" "}
                <span dir="ltr" className="ltr-inline font-latin font-bold">
                  iGarden
                </span>
                .
              </p>
            </div>

            <TermsSection title="1. تعريف الخدمة">
              <p>
                يُقدّم هذا الموقع معلومات تعريفية بشركة انتيليجنت غاردن
                ومنتجاتها وخدماتها في مجال الزراعة الذكية، ويُتيح التواصل مع
                الشركة عبر نماذج الاستشارة والزيارة.
              </p>
              <p>
                الخدمات المذكورة في الموقع (Smart Controllers، المحميات الذكية،
                أنظمة الزراعة المائية) تُقدَّم وفق عقود منفصلة يتم التفاوض
                عليها مباشرة مع الشركة.
              </p>
            </TermsSection>

            <TermsSection title="2. الملكية الفكرية">
              <p>
                جميع محتويات هذا الموقع — نصوص، صور، تصاميم، شعارات، أكواد
                برمجية — هي ملك حصري لشركة انتيليجنت غاردن أو مُرخَّصة لها، ومحمية
                بموجب نظام الملكية الفكرية السعودي.
              </p>
              <ul>
                <li>
                  <strong>iGarden</strong> و<strong>الحديقة الذكية</strong>{" "}
                  علامتان تجاريتان لشركة انتيليجنت غاردن (قيد التسجيل الرسمي
                  في SAIP).
                </li>
                <li>
                  نموذج{" "}
                  <span dir="ltr" className="ltr-inline font-latin">
                    iGarden Tower
                  </span>{" "}
                  مُسجَّل كنموذج صناعي في SAIP تحت الرقم{" "}
                  <span dir="ltr" className="ltr-inline font-latin">
                    #423450193
                  </span>
                  .
                </li>
              </ul>
              <p>
                يُحظر نسخ أي محتوى أو إعادة نشره أو استخدامه تجارياً دون
                إذن كتابي مسبق من الشركة.
              </p>
            </TermsSection>

            <TermsSection title="3. دقة المعلومات">
              <p>
                تسعى الشركة إلى دقة المعلومات المنشورة، إلا أن المواصفات
                التقنية والأسعار والتوافر قابلة للتغيير دون إشعار مسبق.
              </p>
              <p>
                المعلومات الواردة في الموقع لأغراض توجيهية فقط ولا تُشكّل عرضاً
                ملزماً. أي التزام يستوجب توقيع عقد رسمي مع الشركة.
              </p>
            </TermsSection>

            <TermsSection title="4. حدود المسؤولية">
              <p>
                لا تتحمل شركة انتيليجنت غاردن المسؤولية عن أي أضرار مباشرة أو
                غير مباشرة ناتجة عن:
              </p>
              <ul>
                <li>استخدام معلومات الموقع خارج سياقها.</li>
                <li>انقطاع الخدمة أو أي خطأ تقني في الموقع.</li>
                <li>روابط خارجية مُضمَّنة في الموقع وتقودك لمواقع أخرى.</li>
              </ul>
            </TermsSection>

            <TermsSection title="5. الاستخدام المقبول">
              <p>يُحظر استخدام هذا الموقع أو أي من خدماته بهدف:</p>
              <ul>
                <li>نشر أي محتوى مضلّل أو ضار أو غير قانوني.</li>
                <li>
                  محاولة اختراق الموقع أو التأثير على أدائه أو بنيته التحتية.
                </li>
                <li>استخراج بيانات بطرق آلية دون إذن كتابي.</li>
              </ul>
            </TermsSection>

            <TermsSection title="6. الاتصالات والنماذج">
              <p>
                عند إرسال نموذج التواصل أو الاستشارة فإنك توافق على أن تتواصل
                معك الشركة عبر البيانات التي قدّمتها ضمن نطاق طلبك فقط.
              </p>
            </TermsSection>

            <TermsSection title="7. القانون الواجب التطبيق">
              <p>
                تخضع هذه الشروط وتُفسَّر وفقاً لأنظمة المملكة العربية
                السعودية، وتختص المحاكم السعودية بالفصل في أي نزاع.
              </p>
            </TermsSection>

            <TermsSection title="8. التعديلات">
              <p>
                تحتفظ الشركة بحق تعديل هذه الشروط في أي وقت. يُشار إلى تاريخ
                آخر تحديث في أعلى الصفحة. استمرار استخدامك الموقع بعد التعديل
                يعني موافقتك الضمنية.
              </p>
            </TermsSection>

            <TermsSection title="9. التواصل">
              <p>لأي استفسار قانوني أو بخصوص هذه الشروط:</p>
              <ul>
                <li>
                  البريد الإلكتروني:{" "}
                  <a
                    href="mailto:info@igarden.sa"
                    className="text-lime hover:text-deep-green transition-colors font-medium"
                  >
                    info@igarden.sa
                  </a>
                </li>
                <li>
                  الهاتف:{" "}
                  <a
                    href="tel:+966570340500"
                    dir="ltr"
                    className="ltr-inline text-lime hover:text-deep-green transition-colors font-medium"
                  >
                    +966 57 034 0500
                  </a>
                </li>
              </ul>
            </TermsSection>

            {/* التذييل القانوني */}
            <div className="border-t border-light-gray pt-8 text-medium-gray text-lg">
              <p>
                <strong>شركة انتيليجنت غاردن (ذات مسؤولية محدودة)</strong>
                <br />
                سجل تجاري MISA:{" "}
                <span dir="ltr" className="ltr-inline font-latin">
                  24926249716
                </span>
                {" · "}
                رقم ضريبي:{" "}
                <span dir="ltr" className="ltr-inline font-latin">
                  312554598200003
                </span>
              </p>
            </div>
          </div>

          {/* روابط ذات صلة */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/privacy"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-light-gray text-medium-gray hover:text-deep-green hover:border-deep-green transition-colors text-lg"
            >
              سياسة الخصوصية
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-lime text-deep-green font-medium hover:bg-accent-bright transition-colors text-lg"
            >
              تواصل معنا
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function TermsSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-deep-green text-xl font-bold mb-4 pb-2 border-b border-light-gray">
        {title}
      </h2>
      <div className="text-medium-gray space-y-3 [&_ul]:list-disc [&_ul]:pr-6 [&_ul]:space-y-2 [&_strong]:text-dark-text">
        {children}
      </div>
    </div>
  );
}
