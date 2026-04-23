import { Leaf, Building2 } from "lucide-react";

export function EWAxSection() {
  return (
    <section className="bg-[var(--color-surface)] border-y border-[var(--color-border)]">
      <div className="container-igarden py-8 md:py-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-center">
          {/* جانب EWAx */}
          <div className="flex items-center gap-2 text-[var(--color-brand-600)]">
            <Leaf className="h-5 w-5 text-[var(--color-accent-500)]" />
            <span className="text-sm font-bold uppercase tracking-widest">EWAx</span>
          </div>

          {/* النص المركزي */}
          <p className="text-sm md:text-base text-[var(--color-muted)] leading-relaxed max-w-2xl">
            نُشارك أهداف{" "}
            <span className="text-[var(--color-brand-600)] font-bold">EWAx</span>{" "}
            و{" "}
            <span className="text-[var(--color-brand-600)] font-bold">وزارة البيئة والمياه والزراعة</span>{" "}
            في بناء قطاع زراعي سعودي مستدام ومتقدّم تقنياً.
          </p>

          {/* جانب الوزارة */}
          <div className="flex items-center gap-2 text-[var(--color-brand-600)]">
            <span className="text-sm font-bold text-center leading-snug">وزارة البيئة<br className="hidden sm:block" /> والمياه</span>
            <Building2 className="h-5 w-5 text-[var(--color-accent-500)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
