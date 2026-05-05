import type { Metadata } from "next";
import Link from "next/link";
import { FileText, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "الشروط والأحكام | iGarden",
  description:
    "شروط وأحكام استخدام موقع iGarden (igarden.sa) — شركة انتيليجنت غاردن (ذات مسؤولية محدودة).",
  robots: { index: true, follow: false },
};

const LAST_UPDATED = "1 مايو 2026";

export default function TermsPage() {
  return (
    <main className="bg-[#FAFAF7] min-h-screen pt-24 pb-20" dir="rtl">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0F3D2E]/10 text-[#0F3D2E] text-sm font-semibold mb-6">
            <FileText className="h-4 w-4" strokeWidth={1.5} />
            <span>وثيقة قانونية</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#0F3D2E] mb-4">
            الشروط والأحكام
          </h1>
          <p className="text-[#6B7280] text-base">
            آخر تحديث: {LAST_UPDATED}
          </p>
        </div>

        <div className="space-y-10 text-[#1A1A1A]">

          {/* 1 */}
          <section>
            <h2 className="text-xl font-bold text-[#0F3D2E] mb-3">1. الأطراف المتعاقدة</h2>
            <p className="leading-relaxed text-[#374151]">
              هذه الشروط والأحكام تحكم العلاقة بينك وبين{" "}
              <strong>شركة انتيليجنت غاردن (ذات مسؤولية محدودة)</strong>، المُسجَّلة في
              المملكة العربية السعودية بترخيص هيئة الاستثمار رقم{" "}
              <span dir="ltr">MISA #24926249716</span>، والمُشغِّلة لموقع{" "}
              <span dir="ltr">igarden.sa</span>.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-xl font-bold text-[#0F3D2E] mb-3">2. قبول الشروط</h2>
            <p className="leading-relaxed text-[#374151]">
              باستخدامك هذا الموقع أو أي خدمة مرتبطة به، فإنك تُقرّ بقراءة هذه الشروط
              وفهمها والموافقة عليها. إن لم توافق على أي بند فيها، يرجى التوقف عن
              استخدام الموقع.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-xl font-bold text-[#0F3D2E] mb-3">3. طبيعة الموقع وحدوده</h2>
            <p className="leading-relaxed text-[#374151] mb-3">
              يُعدّ موقع <span dir="ltr">igarden.sa</span> موقعاً مؤسسياً للتعريف بشركة
              انتيليجنت غاردن ومنتجاتها وخدماتها. الموقع:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#374151] marker:text-[#7CB342]">
              <li>يهدف إلى التعريف بالشركة ومنتجاتها وطلب التواصل</li>
              <li>لا يُجري معاملات تجارية أو مدفوعات مباشرة</li>
              <li>المعلومات الواردة فيه للأغراض التعريفية وقابلة للتغيير دون إشعار مسبق</li>
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-xl font-bold text-[#0F3D2E] mb-3">4. الملكية الفكرية</h2>
            <p className="leading-relaxed text-[#374151]">
              جميع المحتويات الواردة في هذا الموقع — بما يشمل النصوص، التصاميم، الشعارات،
              الصور، والكود — هي ملك حصري لشركة انتيليجنت غاردن أو مرخَّصة لها.
            </p>
            <p className="leading-relaxed text-[#374151] mt-3">
              يُحظر نسخ أو إعادة نشر أو توزيع أي محتوى من هذا الموقع دون إذن كتابي مسبق
              من الشركة. علامة <span dir="ltr">iGarden</span> والحديقة الذكية علامات
              تجارية قيد التسجيل الرسمي لدى هيئة الملكية الفكرية السعودية (SAIP).
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-xl font-bold text-[#0F3D2E] mb-3">5. استخدام نماذج التواصل</h2>
            <p className="leading-relaxed text-[#374151]">
              عند إرسالك نموذج التواصل أو طلب الاستشارة، فإنك:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#374151] mt-3 marker:text-[#7CB342]">
              <li>تُقرّ بصحة المعلومات المُدخَلة</li>
              <li>توافق على تخزين بياناتك وفق{" "}
                <Link href="/privacy" className="text-[#0F3D2E] font-semibold underline underline-offset-2 hover:text-[#1B5E3F] transition-colors">
                  سياسة الخصوصية
                </Link>
              </li>
              <li>تفهم أن استلام النموذج لا يُنشئ التزاماً تعاقدياً بين الطرفين</li>
              <li>توافق على أن يتواصل معك فريق iGarden ردًا على طلبك</li>
            </ul>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-xl font-bold text-[#0F3D2E] mb-3">6. إخلاء المسؤولية</h2>
            <p className="leading-relaxed text-[#374151]">
              يُقدَّم الموقع وخدماته «كما هي» دون أي ضمانات صريحة أو ضمنية. لا تضمن
              شركة انتيليجنت غاردن:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#374151] mt-3 marker:text-[#7CB342]">
              <li>استمرارية الوصول إلى الموقع دون انقطاع</li>
              <li>خلوّ الموقع من الأخطاء التقنية بشكل كامل في جميع الأوقات</li>
              <li>دقة المعلومات التقنية التعريفية على نحو مطلق</li>
            </ul>
            <p className="leading-relaxed text-[#374151] mt-4">
              لا تتحمل الشركة المسؤولية عن أي أضرار مباشرة أو غير مباشرة تنتج عن
              استخدام الموقع أو عدم إمكانية الوصول إليه.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-xl font-bold text-[#0F3D2E] mb-3">7. الروابط الخارجية</h2>
            <p className="leading-relaxed text-[#374151]">
              قد يحتوي الموقع على روابط لمواقع خارجية (مثل المتجر الإلكتروني، العرض
              التجريبي). لا تتحمل شركة انتيليجنت غاردن مسؤولية محتوى هذه المواقع
              أو سياسات خصوصيتها.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-xl font-bold text-[#0F3D2E] mb-3">8. القانون الحاكم وحل النزاعات</h2>
            <p className="leading-relaxed text-[#374151]">
              تخضع هذه الشروط لأنظمة المملكة العربية السعودية ولوائحها. في حال نشوء
              أي نزاع، يُسعى أولاً إلى حلّه ودياً. وإن تعذّر ذلك، يُحال النزاع إلى
              المحاكم السعودية المختصة في مدينة جدة.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-xl font-bold text-[#0F3D2E] mb-3">9. التعديلات</h2>
            <p className="leading-relaxed text-[#374151]">
              تحتفظ شركة انتيليجنت غاردن بحق تعديل هذه الشروط في أي وقت. ستُشير إلى
              تاريخ آخر تحديث في أعلى الصفحة. استمرارك في استخدام الموقع يُعدّ موافقةً
              على الشروط المُعدَّلة.
            </p>
          </section>

          {/* 10 — Contact */}
          <section>
            <h2 className="text-xl font-bold text-[#0F3D2E] mb-3">10. التواصل</h2>
            <p className="leading-relaxed text-[#374151] mb-6">
              لأي استفسار قانوني يخص هذه الشروط:
            </p>
            <div className="bg-white rounded-2xl border border-[#E5E7EB] p-6">
              <div className="flex items-center gap-3 text-[#374151]">
                <Mail className="h-5 w-5 text-[#7CB342] shrink-0" strokeWidth={1.5} />
                <a href="mailto:info@igarden.sa" className="hover:text-[#0F3D2E] transition-colors font-medium" dir="ltr">
                  info@igarden.sa
                </a>
              </div>
              <p className="text-[#6B7280] text-sm mt-4 pt-4 border-t border-[#E5E7EB]">
                شركة انتيليجنت غاردن (ذات مسؤولية محدودة)
                <br />
                السجل التجاري MISA: <span dir="ltr">24926249716</span> · الرقم الضريبي:{" "}
                <span dir="ltr">312554598200003</span>
              </p>
            </div>
          </section>
        </div>

        {/* Footer nav */}
        <div className="mt-16 pt-8 border-t border-[#E5E7EB] flex flex-wrap gap-4 text-sm text-[#6B7280]">
          <Link href="/privacy" className="hover:text-[#0F3D2E] transition-colors">سياسة الخصوصية</Link>
          <span aria-hidden="true">·</span>
          <Link href="/contact" className="hover:text-[#0F3D2E] transition-colors">تواصل معنا</Link>
          <span aria-hidden="true">·</span>
          <Link href="/" className="hover:text-[#0F3D2E] transition-colors">الرئيسية</Link>
        </div>
      </div>
    </main>
  );
}
