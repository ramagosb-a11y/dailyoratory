import { catholicLifeSections } from "@/data/catholicLifeRoadmap";
import { CatholicLifeSectionCard } from "@/components/catholic-life/CatholicLifeSectionCard";

export function CatholicLifeSectionGrid() {
  return (
    <section>
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Main roadmap sections</p>
      <h2 className="mt-2 font-display text-4xl font-semibold text-navy sm:text-5xl">Find Your Place in the Catholic Life</h2>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {catholicLifeSections.map((section) => (
          <CatholicLifeSectionCard key={section.id} section={section} />
        ))}
      </div>
    </section>
  );
}
