const STATS = [
  { num: "3+", label: "سنوات من التطوير", sub: "بحث وتطوير متواصل" },
  { num: "إنتاجية", label: "زيادة ملموسة", sub: "تُقاس فردياً" },
  { num: "+45°C", label: "تحمّل ميداني", sub: "اختُبر في عسفان" },
  { num: "5", label: "ورش «ازرع بذكاء»", sub: "مُنفَّذة 2025" },
];

export function StatsStrip() {
  return (
    <section className="section-dark py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map((s) => (
            <div key={s.num} className="flex flex-col items-center">
              <p className="stat-num mb-1">{s.num}</p>
              <p className="text-cream font-medium text-lg mb-0.5">{s.label}</p>
              <p className="text-cream/50 text-lg">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
