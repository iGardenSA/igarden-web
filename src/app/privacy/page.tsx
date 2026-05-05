import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/shared/SchemaJsonLd";

export const metadata: Metadata = {
  title: "سياسة الخصوصية | iGarden",
  description:
    "سياسة خصوصية شركة انتيليجنت غاردن — كيف نجمع بياناتك ونحميها ونستخدمها وفق نظام PDPL السعودي.",
  alternates: { canonical: "https://igarden.sa/privacy" },
  robots: { index: true, follow: true },
};

const BREADCRUMB = [
  { name: "الرئيسية", url: "/" },
  { name: "سياسة الخصوصية", url: "/privacy" },
];

const LAST_UPDATED = "1 مايو 2026";

export default function PrivacyPage() {
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
            سياسة الخصوصية
          </h1>
          <p className="text-cream/60 text-lg">
            آخر تحديث: {LAST_UPDATED}
          </p>
        </div>
      </section>

      {/* ─── المحتوى ──────────────────────────────────────────── */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-lg max-w-none text-dark-text leading-relaxed space-y-10">

            {/* المقدمة */}
            <div>
              <p className="text-medium-gray">
                تلتزم شركة انتيليجنت غاردن (ذات مسؤولية محدودة) — المشغّل للعلامة
                التجارية{" "}
                <span dir="ltr" className="ltr-inline font-latin font-bold">
                  iGarden
                </span>{" "}
                — بحماية خصوصية زوّار الموقع الإلكتروني{" "}
                <span dir="ltr" className="ltr-inline font-latin">
                  igarden.sa
                </span>{" "}
                وفق أحكام نظام حماية البيانات الشخصية السعودي (PDPL) ولوائحه
                التنفيذية.
              </p>
            </div>

            <PolicySection title="1. البيانات التي نجمعها">
              <p>نجمع البيانات التالية فقط عند تفاعلك المباشر معنا:</p>
              <ul>
                <li>
                  <strong>بيانات التواصل:</strong> الاسم، رقم الهاتف، البريد
                  الإلكتروني — عند ملء نموذج الاستشارة أو طلب الزيارة.
                </li>
                <li>
                  <strong>بيانات الاهتمام:</strong> نوع الطلب والملاحظات التي
                  تُدخلها طوعاً في النموذج.
                </li>
                <li>
                  <strong>بيانات الاستخدام التقنية:</strong> عنوان IP، نوع
                  المتصفح، الصفحات المزارة — عبر أدوات تحليل مجهولة الهوية
                  (Vercel Analytics).
                </li>
              </ul>
              <p>
                <strong>لا نجمع:</strong> بيانات بطاقات ائتمان، أرقام هويات، أو
                أي بيانات حسّاسة.
              </p>
            </PolicySection>

            <PolicySection title="2. لماذا نجمع هذه البيانات؟">
              <ul>
                <li>للردّ على استفساراتك وطلبات الاستشارة.</li>
                <li>لتنظيم زياراتك لمحطة عسفان.</li>
                <li>لتحسين تجربة الموقع وأداء خدماتنا.</li>
                <li>لإرسال معلومات تتعلق بالخدمات التي طلبتها (بموافقتك).</li>
              </ul>
              <p>
                لا نستخدم بياناتك للتسويق المباشر دون موافقة صريحة، ولا نبيعها
                أو نشاركها مع أي طرف ثالث لأغراض تجارية.
              </p>
            </PolicySection>

            <PolicySection title="3. كيف نحفظ بياناتك؟">
              <p>
                تُخزَّن بيانات نماذج التواصل في قاعدة بيانات{" "}
                <span dir="ltr" className="ltr-inline font-latin">
                  Supabase
                </span>{" "}
                المستضافة في فرانكفورت (ألمانيا) ضمن بيئة مؤمّنة بحماية
                مستوى المؤسسات وصلاحيات وصول مقيّدة.
              </p>
              <p>
                نحتفظ ببياناتك للمدة اللازمة للتواصل معك، وبحد أقصى 3 سنوات ما
                لم تطلب حذفها قبل ذلك.
              </p>
            </PolicySection>

            <PolicySection title="4. حقوقك">
              <p>وفق نظام PDPL، يحق لك:</p>
              <ul>
                <li>الاطلاع على البيانات الشخصية التي نحتفظ بها عنك.</li>
                <li>طلب تصحيح أي بيانات غير دقيقة.</li>
                <li>طلب حذف بياناتك بالكامل.</li>
                <li>سحب موافقتك على أي تواصل تسويقي في أي وقت.</li>
              </ul>
              <p>
                لممارسة أيٍّ من هذه الحقوق، تواصل معنا عبر:{" "}
                <a
                  href="mailto:info@igarden.sa"
                  className="text-lime hover:text-deep-green transition-colors font-medium"
                >
                  info@igarden.sa
                </a>
              </p>
            </PolicySection>

            <PolicySection title="5. ملفات تعريف الارتباط (Cookies)">
              <p>
                يستخدم الموقع ملفات تعريف ارتباط تقنية ضرورية فقط (مثل: تفضيلات
                اللغة، جلسات الأمان). لا نستخدم ملفات تتبّع تسويقية من طرف ثالث.
              </p>
            </PolicySection>

            <PolicySection title="6. التعديلات على هذه السياسة">
              <p>
                قد نُحدّث هذه السياسة دورياً. سيُشار إلى تاريخ آخر تحديث في
                أعلى الصفحة. التعديلات الجوهرية تُبلَّغ عبر البريد الإلكتروني
                للمشتركين.
              </p>
            </PolicySection>

            <PolicySection title="7. التواصل">
              <p>لأي استفسار حول هذه السياسة:</p>
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
                <li>العنوان: جدة، المملكة العربية السعودية</li>
              </ul>
            </PolicySection>

            {/* التذييل القانوني */}
            <div className="border-t border-light-gray pt-8 text-medium-gray text-lg">
              <p>
                <strong>شركة انتيليجنت غاردن (ذات مسؤولية محدودة)</strong>
                <br />
                سجل تجاري MISA:{" "}
                <span dir="ltr" className="ltr-inline font-latin">
                  24926249716
                </span>
              </p>
            </div>
          </div>

          {/* روابط ذات صلة */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/terms"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-light-gray text-medium-gray hover:text-deep-green hover:border-deep-green transition-colors text-lg"
            >
              الشروط والأحكام
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

function PolicySection({
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
