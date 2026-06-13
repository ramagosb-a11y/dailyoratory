import { SectionHeader } from "@/components/section-header";
import { getPapalInfallibilityCards } from "@/lib/pope";

export function PapalInfallibilityExplainer() {
  const cards = getPapalInfallibilityCards();

  return (
    <section>
      <SectionHeader
        eyebrow="Precision"
        title="Papal Infallibility: What It Means and What It Does Not Mean"
        summary="Papal authority should be understood with humility, precision, and trust in the Holy Spirit."
      />
      <div className="mt-7 grid gap-5 lg:grid-cols-2">
        <article className="card-parchment p-6">
          <h3 className="font-display text-3xl font-semibold text-navy">It means...</h3>
          <ul className="mt-4 space-y-2 text-sm leading-7 text-muted">
            {cards.means.map((item) => (
              <li key={item} className="border-l-2 border-[var(--liturgical-primary)] pl-4">
                {item}
              </li>
            ))}
          </ul>
        </article>
        <article className="card-parchment p-6">
          <h3 className="font-display text-3xl font-semibold text-navy">It does not mean...</h3>
          <ul className="mt-4 space-y-2 text-sm leading-7 text-muted">
            {cards.doesNotMean.map((item) => (
              <li key={item} className="border-l-2 border-burgundy pl-4">
                {item}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
