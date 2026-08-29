import Image from "next/image";
import { CTAButton } from "@/components/shared/CTAButton";
import { Zap, Droplets, FlaskConical, Thermometer } from "lucide-react";

const SWITCHES = [
  { Icon: Zap,         label: "الطاقة",   en: "Energy Switch"     },
  { Icon: Droplets,    label: "الري",     en: "Irrigation Switch"  },
  { Icon: FlaskConical,label: "التسميد",  en: "Fertigation Switch" },
  { Icon: Thermometer, label: "المناخ",   en: "Climate Switch"     },
];

export function SmartOSDemoSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0F3D2E] to-[#0a2920]" dir="rtl">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Header */}
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <p className="text-lime text-sm font-bold uppercase tracking-widest mb-3">
            Smart OS — نظام التحكم الذكي
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-cream leading-tight mb-5">
            منصة تعمل اليوم — لا وعد للغد
          </h2>
          <p className="text-cream/75 text-lg leading-relaxed">
            واجهة تجريبية ببيانات محاكاة تعرض لوحة الاستشعار و4 مفاتيح ذكية.
            المنصّة مُختبَرة في مرفق R&D في عسفان.
          </p>
        </div>

        {/* Browser mockup + screenshot */}
        <div className="relative max-w-5xl mx-auto mb-12">
          {/* Glow */}
          <div
            className="absolute -inset-6 rounded-3xl opacity-25 blur-3xl pointer-events-none -z-10"
            style={{ background: "radial-gradient(ellipse, #7CB342 0%, transparent 70%)" }}
            aria-hidden
          />

          <div className="rounded-2xl overflow-hidden shadow-2xl border border-lime/20 transition-transform duration-500 hover:scale-[1.01]">
            {/* Browser chrome */}
            <div className="bg-[#1B2631] px-4 py-3 flex items-center gap-3 border-b border-white/10">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex-1 mx-3">
                <div className="bg-[#0D1117] rounded px-3 py-1 text-xs text-white/50 font-latin inline-flex items-center gap-1.5">
                  <span className="text-lime text-[10px]">🔒</span>
                  demo.igarden.sa
                </div>
              </div>
            </div>

            {/* Dashboard screenshot */}
            <Image
              src="/smart-os/dashboard-preview.png"
              alt="Smart OS Dashboard — لوحة المعطيات الحية: 3 محميات، 4 مفاتيح ذكية، وبيانات pH وEC والحرارة في الوقت الفعلي"
              width={1349}
              height={661}
              className="w-full h-auto block"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1280px"
              priority={false}
            />
          </div>
        </div>

        {/* 4 switches row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
          {SWITCHES.map(({ Icon, label, en }) => (
            <div
              key={en}
              className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:bg-white/8 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-lime/15 flex items-center justify-center mx-auto mb-2">
                <Icon className="w-5 h-5 text-lime" aria-hidden />
              </div>
              <p className="text-cream font-semibold text-sm mb-0.5">{label}</p>
              <p className="text-cream/40 text-xs font-latin">{en}</p>
            </div>
          ))}
        </div>

        {/* Disclaimer + CTA */}
        <div className="text-center">
          <CTAButton href="/contact?interest=demo&cta=demo_access_request" variant="lime">
            اطلب وصولاً إلى الديمو
          </CTAButton>
          <p className="text-cream/40 text-xs mt-3">
            نموذج تفاعلي — بيانات محاكاة لأغراض العرض · ليس بديلاً عن شهادة Saudi GAP
          </p>
        </div>

      </div>
    </section>
  );
}
