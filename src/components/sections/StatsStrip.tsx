const STATS = [
  { num: "95%", label: "توفير مياه", sub: "iGarden Tower" },
  { num: "3×", label: "إنتاجية أعلى", sub: "Vertical Systems" },
  { num: "+45°C", label: "تحمّل ميداني", sub: "اختُبر في عسفان" },
  { num: "208", label: "اختبار وحدوي", sub: "Smart OS — ناجح" },
  { num: "5", label: "ورش «ازرع بذكاء»", sub: "مُنفَّذة 2025" },
];

export function StatsStrip() {
  return (
    <section className="section-dark py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
          {STATS.map((s) => (
            <div key={s.num} className="flex flex-col items-center">
              <p className="stat-num mb-1">{s.num}</p>
              <p className="text-cream font-medium text-sm mb-0.5">{s.label}</p>
              <p className="text-cream/50 text-xs">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
