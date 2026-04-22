import Link from "next/link";
import { ArrowLeft, Sprout, Thermometer, Fish, Wind, Cloud } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function ProductsSection() {
  const products = [
    { id: "tower", name: "iGarden Tower", nameAr: "البرج الزراعي الذكي", category: "hardware" as const, icon: Sprout, description: "برج Aeroponics عمودي يرفع الإنتاجية 3 أضعاف على نفس المساحة — نموذج صناعي مسجل.", stats: [{ value: "95%", label: "توفير مياه" }, { value: "3x", label: "إنتاجية" }], featured: true },
    { id: "greenhouse", name: "Smart Greenhouses", nameAr: "البيوت المحمية الذكية", category: "hardware" as const, icon: Thermometer, description: "بيوت محمية مؤتمتة بالكامل مع تحكم مناخي ذكي وكفاءة طاقة 40% مقارنة بالبيوت التقليدية.", stats: [{ value: "40%", label: "كفاءة طاقة" }, { value: "45°C+", label: "تحمل مناخي" }] },
    { id: "aquaponics", name: "Aquaponics", nameAr: "الاستزراع السمكي المتكامل", category: "hardware" as const, icon: Fish, description: "منظومة تكاملية تربط الزراعة بالاستزراع السمكي مع إعادة تدوير 90% من المياه.", stats: [{ value: "90%", label: "إعادة تدوير" }, { value: "50%", label: "خفض أسمدة" }] },
    { id: "aeroponics", name: "Aeroponics", nameAr: "الزراعة الهوائية", category: "hardware" as const, icon: Wind, description: "زراعة الجذور في الهواء مع رذاذ مغذّي — أعلى كفاءة مائية في قطاع الزراعة المحمية.", stats: [{ value: "60%", label: "توفير مياه" }, { value: "2x", label: "سرعة نمو" }] },
    { id: "cloud", name: "iGarden Cloud", nameAr: "منصة التحكم السحابية", category: "software" as const, icon: Cloud, description: "لوحة تحكم مركزية بالذكاء الاصطناعي لإدارة كل منظومتك من أي مكان وفي أي وقت.", stats: [{ value: "24/7", label: "مراقبة" }, { value: "AI", label: "تنبؤ ذكي" }] },
  ];
  return (
    <section className="bg-[var(--color-surface)] section-padding">
      <div className="container-igarden">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="heading-eyebrow mb-4">منتجاتنا</p>
            <h2 className="heading-section">حلول متكاملة لكل احتياج زراعي</h2>
          </div>
          <Link href="/products" className="text-[var(--color-brand-600)] font-semibold hover:text-[var(--color-accent-600)] inline-flex items-center gap-2 group">
            عرض كل المنتجات
            <ArrowLeft className="h-4 w-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 md:gap-6 auto-rows-fr">
          {products.map((product) => {
            const Icon = product.icon;
            const isFeatured = product.featured;
            return (
              <Link key={product.id} href={`/products/${product.id}`} className="group relative bg-white rounded-2xl border border-[var(--color-border)] p-6 md:p-7 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-md)] hover:-translate-y-1 transition-all duration-300 flex flex-col lg:col-span-3">
                <div className="flex items-center justify-between mb-5">
                  <div className={`h-12 w-12 rounded-xl flex items-center justify-center transition-colors ${isFeatured ? "bg-[var(--color-accent-500)] text-[var(--color-brand-700)]" : "bg-[var(--color-brand-50)] text-[var(--color-brand-600)] group-hover:bg-[var(--color-accent-500)] group-hover:text-[var(--color-brand-700)]"}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <Badge variant={product.category}>{product.category.toUpperCase()}</Badge>
                </div>
                <p className="text-xs text-[var(--color-muted)] uppercase tracking-wider mb-1">{product.nameAr}</p>
                <h3 className="text-xl md:text-2xl font-bold text-[var(--color-brand-600)] mb-3">{product.name}</h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-5">{product.description}</p>
                <div className="flex items-center gap-5 mt-auto pt-5 border-t border-[var(--color-border)]">
                  {product.stats.map((s) => (
                    <div key={s.label}>
                      <p className="text-2xl font-extrabold text-[var(--color-accent-500)] leading-none" data-num>{s.value}</p>
                      <p className="text-xs text-[var(--color-muted)] mt-1">{s.label}</p>
                    </div>
                  ))}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
