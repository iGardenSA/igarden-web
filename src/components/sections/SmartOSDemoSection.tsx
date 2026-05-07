import { CTAButton } from "@/components/shared/CTAButton";
import { MonitorSmartphone, Cpu, FlaskConical } from "lucide-react";

const FEATURES = [
  { Icon: MonitorSmartphone, text: "لوحة تحكّم حيّة — راقب pH وEC والحرارة لحظياً" },
  { Icon: Cpu, text: "يعمل على Raspberry Pi 5 + ESP32" },
  { Icon: FlaskConical, text: "208 اختبار وحدوي ناجح — جاهز للميدان" },
];

export function SmartOSDemoSection() {
  return (
    <section className="section-dark py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text side */}
          <div>
            <p className="text-lime text-lg font-bold uppercase tracking-widest mb-3">
              Smart OS — نظام التحكم الذكي
            </p>
            <h2 className="h2 text-cream mb-5">
              جرّب نظام التحكم قبل أن تقتنيه
            </h2>
            <p className="body-base text-cream/80 mb-8">
              Smart OS ليس وعداً — هو نظام يعمل الآن. راقب مزرعتك من أيّ مكان،
              تحكّم في الريّ والتغذية تلقائياً، وتلقَّ تنبيهات لحظية عند أي انحراف.
              نسخة التجريب الحيّة مفتوحة أمامك الآن.
            </p>

            <ul className="space-y-4 mb-8">
              {FEATURES.map(({ Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-lime/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-lime" aria-hidden />
                  </div>
                  <span className="body-base text-cream/90">{text}</span>
                </li>
              ))}
            </ul>

            <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-6 text-right">
              <p className="text-cream/70 text-sm leading-relaxed mb-2">
                <span className="text-[#A5D63F] font-semibold">ملاحظة:</span>{" "}
                هذا نموذج تفاعلي يوضح معمارية Smart OS. القراءات المعروضة محاكاة لأغراض
                العرض، بينما تعكس البنية طريقة عمل النظام في الميدان.
              </p>
              <ul className="space-y-1 text-cream/60 text-sm">
                <li>· يراقب pH وEC والحرارة والرطوبة</li>
                <li>· يسجّل كل قراءة وكل أمر تشغيل</li>
                <li>· يمهّد لتقارير تشغيل وامتثال قابلة للمراجعة</li>
              </ul>
            </div>
            <CTAButton href="https://demo.igarden.sa" variant="lime" external>
              افتح الديمو
            </CTAButton>
          </div>

          {/* Demo mockup placeholder */}
          <div className="relative">
            <div className="rounded-card overflow-hidden bg-corp-green/40 border border-lime/20 aspect-[4/3] flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-16 h-16 rounded-full bg-lime/20 flex items-center justify-center mx-auto mb-4">
                  <MonitorSmartphone className="w-8 h-8 text-lime" aria-hidden />
                </div>
                <p className="text-cream/60 text-lg">
                  {/* [CONTENT_NEEDED: Smart OS dashboard screenshot] */}
                  demo.igarden.sa
                </p>
              </div>
            </div>
            {/* Glow effect */}
            <div
              className="absolute -inset-4 rounded-card opacity-20 blur-2xl -z-10"
              style={{ background: "radial-gradient(circle, #7CB342, transparent 70%)" }}
              aria-hidden
            />
          </div>
        </div>
      </div>
    </section>
  );
}
