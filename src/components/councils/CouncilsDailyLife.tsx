import { SectionHeader } from "@/components/section-header";
import { getCouncilDailyLifeCards } from "@/lib/councils";

export function CouncilsDailyLife() {
  const cards = getCouncilDailyLifeCards();

  return (
    <section>
      <SectionHeader eyebrow="Daily life" title="Why Councils Matter for Daily Life" />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <article key={card} className="card-parchment p-5 text-sm leading-7 text-muted">
            {card}
          </article>
        ))}
      </div>
    </section>
  );
}
