import type { SacredSpace } from "@/types/mass";
import { SacredSpaceCard } from "@/components/mass/SacredSpaceCard";

export function SacredSpacesGuide({ spaces }: { spaces: SacredSpace[] }) {
  return (
    <section id="sacred-spaces" className="scroll-mt-28 border-t border-stone/70 pt-10">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Sacred spaces in the church</p>
      <h2 className="mt-2 font-display text-4xl font-semibold text-navy sm:text-5xl">
        Learn the shape of Catholic worship
      </h2>
      <p className="mt-4 max-w-4xl text-sm leading-7 text-muted">
        Church buildings teach with space as well as words. Altar, ambo, tabernacle, font, and
        sanctuary all help the faithful understand what is happening in the liturgy and how to act
        reverently.
      </p>
      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        {spaces.map((space) => (
          <SacredSpaceCard key={space.id} space={space} />
        ))}
      </div>
    </section>
  );
}
