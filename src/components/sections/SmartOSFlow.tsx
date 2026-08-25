import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Database, BrainCircuit, Send } from "lucide-react";

const STEPS = [
  {
    Icon: Database,
    title: "البيانات",
    text: "قراءات التشغيل تصل إلى مكان واحد.",
  },
  {
    Icon: BrainCircuit,
    title: "رشيد",
    text: "طبقة الذكاء التي نطوّرها: تفرز ما يحتاج انتباهك، وتجهّز الأسئلة والتقارير، وتُصعّد القرار إلى الإنسان.",
  },
  {
    Icon: Send,
    title: "التنفيذ",
    text: "برامج وأوامر وتنبيهات تعود إلى أنظمة الحقل.",
  },
] as const;

export function SmartOSFlow() {
  return (
    <section
      className="bg-[var(--color-brand-600)] text-white section-padding"
      dir="rtl"
    >
      <div className="container-igarden">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-sm font-bold uppercase tracking-widest text-white/60 mb-3">
            Smart OS
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
            ما يحتاج انتباهك يظهر في مكان واحد — لا يضيع بين القراءات
          </h2>
        </div>

        {/* لقطة لوحة التشغيل داخل إطار متصفّح */}
        <div className="relative max-w-5xl mx-auto mb-12">
          <div
            className="absolute -inset-6 rounded-3xl opacity-25 blur-3xl pointer-events-none -z-10"
            style={{ background: "radial-gradient(ellipse, #7CB342 0%, transparent 70%)" }}
            aria-hidden="true"
          />
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#A5D63F]/20">
            <div className="bg-[#1B2631] px-4 py-3 flex items-center gap-3 border-b border-white/10">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex-1 mx-3">
                <div className="bg-[#0D1117] rounded px-3 py-1 text-xs text-white/50 font-latin inline-flex items-center gap-1.5">
                  demo.igarden.sa
                </div>
              </div>
            </div>
            <Image
              src="/smart-os/dashboard-preview.png"
              alt="لوحة تشغيل Smart OS — قراءات التشغيل في مكان واحد"
              width={1349}
              height={661}
              className="w-full h-auto block"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1280px"
            />
          </div>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {STEPS.map(({ Icon, title, text }) => (
            <li
              key={title}
              className="bg-white/5 border border-white/10 rounded-2xl p-7"
            >
              <Icon className="w-8 h-8 text-[#A5D63F] mb-4" aria-hidden="true" />
              <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
              <p className="text-sm text-white/80 leading-relaxed">{text}</p>
            </li>
          ))}
        </ol>

        <p className="text-center text-white/75 max-w-3xl mx-auto mt-10 leading-relaxed">
          نبني المنظومة بطبقة تكامل مرنة تربط التجهيزات القائمة والجديدة، وتقلّل
          الارتهان لمنظومة عتاد واحدة.
        </p>

        <div className="flex justify-center mt-8">
          <Link
            href="/products/smart-os"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border-2 border-white/40 text-white font-semibold hover:bg-white/10 transition-colors"
          >
            تعرّف على منصة Smart OS
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        {/* حدّ النطاق — مرة واحدة في نهاية القسم */}
        <p className="text-center text-sm text-white/60 mt-8 max-w-3xl mx-auto leading-relaxed">
          تُفعَّل السجلات والتنبيهات والتقارير والتكاملات بحسب نطاق المشروع
          وتجهيزاته.
        </p>
      </div>
    </section>
  );
}
