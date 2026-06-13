import type { RosaryMysterySetRecord } from "@/types/rosary";
import { RosaryHowToPray } from "./RosaryHowToPray";
import { RosaryMysteryCard } from "./RosaryMysteryCard";
import { RosaryRelatedLinks } from "./RosaryRelatedLinks";

export function RosaryMysterySetPage({ mysterySet }: { mysterySet: RosaryMysterySetRecord }) {
  return (
    <div className="grid gap-12">
      <header className="border-b border-stone pb-8">
        <div className="flex flex-wrap gap-2">
          <span className="season-pill">{mysterySet.name}</span>
          <span className="season-pill">{mysterySet.traditionalDays.join(" and ")}</span>
        </div>
        <h1 className="font-display mt-5 text-5xl font-semibold leading-none text-navy sm:text-6xl">{mysterySet.title}</h1>
        <p className="mt-4 text-lg leading-8 text-muted">{mysterySet.description}</p>
        <p className="mt-5 rounded-md border border-stone bg-parchment p-4 text-sm font-semibold leading-7 text-navy">
          {mysterySet.theme}
        </p>
      </header>

      <section>
        <p className="text-xs font-bold uppercase text-burgundy">Mysteries and fruits</p>
        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          {mysterySet.mysteries.map((mystery) => (
            <RosaryMysteryCard key={mystery.id} mystery={mystery} />
          ))}
        </div>
      </section>

      <RosaryHowToPray />

      <RosaryRelatedLinks />
    </div>
  );
}
