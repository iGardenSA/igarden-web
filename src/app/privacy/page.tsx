import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Mail, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "سياسة الخصوصية | iGarden",
  description:
    "سياسة خصوصية شركة انتيليجنت غاردن — كيف نجمع بياناتك ونحميها وفقاً لنظام حماية البيانات الشخصية السعودي (PDPL).",
  robots: { index: true, follow: false },
};

const LAST_UPDATED = "1 مايو 2026";

export default function PrivacyPage() {
  return (
    <main className="bg-[#FAFAF7] min-h-screen pt-24 pb-20" dir="rtl">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0F3D2E]/10 text-[#0F3D2E] text-sm font-semibold mb-6">
            <Shield className="h-4 w-4" strokeWidth={1.5} />
            <span>وثيقة قانونية</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#0F3D2E] mb-4">
            سياسة الخصوصية
          </h1>
          <p className="text-[#6B7280] text-base">
            آخر تحديث: {LAST_UPDATED}
          </p>
        </div>

        <div className="prose prose-lg prose-slate max-w-none space-y-10 text-[#1A1A1A]">

          {/* 1 */}
          <section>
            <h2 className="text-xl font-bold text-[#0F3D2E] mb-3">1. مقدمة</h2>
            <p className="leading-relaxed text-[#374151]">
              تُقدِّم شركة انتيليجنت غاردن (ذات مسؤولية محدودة) — المُسجَّلة بموجب ترخيص
              هيئة الاستثمار MISA #24926249716 — هذه السياسة التزاماً بنظام حماية
              البيانات الشخصية السعودي (<span dir="ltr">PDPL</span>) ولوائحه التنفيذية.
            </p>
            <p className="leading-relaxed text-[#374151] mt-3">
              باستخدامك موقع <span dir="ltr">igarden.sa</span> أو تعاملك مع أيٍّ من نماذجنا،
              فإنك توافق على الشروط الواردة في هذه السياسة.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-xl font-bold text-[#0F3D2E] mb-3">2. البيانات التي نجمعها</h2>
            <p className="leading-relaxed text-[#374151] mb-4">
              نجمع فقط البيانات اللازمة لتقديم خدماتنا والرد على استفساراتك:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#374151] marker:text-[#7CB342]">
              <li><strong>بيانات الهوية:</strong> الاسم الكامل</li>
              <li><strong>بيانات التواصل:</strong> البريد الإلكتروني، رقم الجوال</li>
              <li><strong>محتوى الرسالة:</strong> موضوع الاستفسار أو طلب الخدمة</li>
              <li><strong>بيانات الاستخدام:</strong> صفحات الموقع التي تزورها (عبر Vercel Analytics — مجهولة الهوية)</li>
            </ul>
            <p className="leading-relaxed text-[#374151] mt-4">
              <strong>لا نجمع:</strong> بيانات الدفع (لا معاملات مالية على هذا الموقع)،
              بيانات موقعك الجغرافي الدقيق، أو أي بيانات حساسة وفق تعريف PDPL.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-xl font-bold text-[#0F3D2E] mb-3">3. كيف نستخدم بياناتك</h2>
            <ul className="list-disc list-inside space-y-2 text-[#374151] marker:text-[#7CB342]">
              <li>الرد على استفساراتك وطلبات الاستشارة</li>
              <li>التواصل معك بشأن منتجاتنا وخدماتنا ذات الصلة بطلبك</li>
              <li>تحسين موقعنا وخدماتنا بناءً على بيانات الاستخدام المجهولة</li>
              <li>الامتثال للالتزامات القانونية والتنظيمية</li>
            </ul>
            <p className="leading-relaxed text-[#374151] mt-4">
              <strong>لا نستخدم</strong> بياناتك في الإعلانات المدفوعة أو نشاركها مع أطراف
              ثالثة لأغراض تسويقية.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-xl font-bold text-[#0F3D2E] mb-3">4. تخزين البيانات ومعالجتها</h2>
            <p className="leading-relaxed text-[#374151]">
              تُخزَّن بياناتك في قاعدة بيانات{" "}
              <span dir="ltr">Supabase</span> الموجودة في مركز بيانات{" "}
              <strong>فرانكفورت، ألمانيا</strong> (منطقة{" "}
              <span dir="ltr">eu-central-1</span>). يستوفي هذا المزود متطلبات{" "}
              <span dir="ltr">GDPR</span> الأوروبية وهو متوافق مع الاشتراطات التقنية
              لـ PDPL السعودي.
            </p>
            <p className="leading-relaxed text-[#374151] mt-3">
              الوصول إلى بياناتك مقيَّد بموظفي iGarden المعنيين بخدمة العملاء، وهم
              ملزمون بسياسة سرية داخلية.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-xl font-bold text-[#0F3D2E] mb-3">5. مدة الاحتفاظ بالبيانات</h2>
            <p className="leading-relaxed text-[#374151]">
              نحتفظ ببيانات الاتصال والاستفسارات لمدة <strong>سنتين (2)</strong> من تاريخ
              آخر تواصل، ثم نحذفها أو نُجهِّلها ما لم توجد التزامات قانونية تستوجب الاحتفاظ بها.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-xl font-bold text-[#0F3D2E] mb-3">6. حقوقك وفق PDPL</h2>
            <p className="leading-relaxed text-[#374151] mb-4">
              يمنحك نظام حماية البيانات الشخصية السعودي الحقوق التالية:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#374151] marker:text-[#7CB342]">
              <li><strong>حق الاطلاع:</strong> طلب نسخة من بياناتك المحفوظة لدينا</li>
              <li><strong>حق التصحيح:</strong> تصحيح أي بيانات غير دقيقة</li>
              <li><strong>حق الحذف:</strong> طلب حذف بياناتك متى انتفت الحاجة القانونية للاحتفاظ بها</li>
              <li><strong>حق الاعتراض:</strong> الاعتراض على معالجة بياناتك لأغراض تسويقية</li>
            </ul>
            <p className="leading-relaxed text-[#374151] mt-4">
              لممارسة أيٍّ من هذه الحقوق، تواصل معنا عبر البريد الإلكتروني أدناه.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-xl font-bold text-[#0F3D2E] mb-3">7. ملفات تعريف الارتباط (Cookies)</h2>
            <p className="leading-relaxed text-[#374151]">
              يستخدم الموقع ملفات تعريف ارتباط ضرورية فقط لضمان الأداء الصحيح. لا نستخدم
              ملفات تتبع لأغراض إعلانية. تحليلات الموقع تتم عبر{" "}
              <span dir="ltr">Vercel Analytics</span> دون تخزين بيانات تعريف شخصية.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-xl font-bold text-[#0F3D2E] mb-3">8. التعديلات على هذه السياسة</h2>
            <p className="leading-relaxed text-[#374151]">
              قد نُحدِّث هذه السياسة دورياً. سنُشير إلى تاريخ آخر تحديث في أعلى الصفحة.
              استمرارك في استخدام الموقع بعد نشر التعديلات يُعدّ قبولاً لها.
            </p>
          </section>

          {/* 9 — Contact */}
          <section>
            <h2 className="text-xl font-bold text-[#0F3D2E] mb-3">9. التواصل بشأن الخصوصية</h2>
            <p className="leading-relaxed text-[#374151] mb-6">
              لأي استفسار يخص خصوصيتك أو لممارسة حقوقك وفق PDPL:
            </p>
            <div className="bg-white rounded-2xl border border-[#E5E7EB] p-6 space-y-4">
              <div className="flex items-center gap-3 text-[#374151]">
                <Mail className="h-5 w-5 text-[#7CB342] shrink-0" strokeWidth={1.5} />
                <a href="mailto:info@igarden.sa" className="hover:text-[#0F3D2E] transition-colors font-medium" dir="ltr">
                  info@igarden.sa
                </a>
              </div>
              <div className="flex items-center gap-3 text-[#374151]">
                <Phone className="h-5 w-5 text-[#7CB342] shrink-0" strokeWidth={1.5} />
                <a href="tel:+966570340500" className="hover:text-[#0F3D2E] transition-colors font-medium" dir="ltr">
                  +966 57 034 0500
                </a>
              </div>
              <p className="text-[#6B7280] text-sm pt-2 border-t border-[#E5E7EB]">
                شركة انتيليجنت غاردن (ذات مسؤولية محدودة) — جدة، المملكة العربية السعودية
              </p>
            </div>
          </section>
        </div>

        {/* Footer nav */}
        <div className="mt-16 pt-8 border-t border-[#E5E7EB] flex flex-wrap gap-4 text-sm text-[#6B7280]">
          <Link href="/terms" className="hover:text-[#0F3D2E] transition-colors">الشروط والأحكام</Link>
          <span aria-hidden="true">·</span>
          <Link href="/contact" className="hover:text-[#0F3D2E] transition-colors">تواصل معنا</Link>
          <span aria-hidden="true">·</span>
          <Link href="/" className="hover:text-[#0F3D2E] transition-colors">الرئيسية</Link>
        </div>
      </div>
    </main>
  );
}
