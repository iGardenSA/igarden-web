import { FOUNDERS } from "@/data/founders";
import { FounderCard } from "@/components/team/FounderCard";

export function FoundersSection() {
  return (
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="text-center mb-12">
        <p className="text-lime text-sm font-bold uppercase tracking-widest mb-2">
          المؤسسون
        </p>
        <h2 className="h2 text-deep-green">الفريق التأسيسي</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {FOUNDERS.map((f) => (
          <FounderCard key={f.name} {...f} />
        ))}
      </div>
    </div>
  );
}
