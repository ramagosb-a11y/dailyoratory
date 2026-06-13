import { SectionHeader } from "@/components/section-header";
import { getPopeDailyLifeCards } from "@/lib/pope";

export function PopeDailyLife() {
  const cards = getPopeDailyLifeCards();

  return (
    <section>
      <SectionHeader eyebrow="Daily life" title="Why the Pope Matters in Daily Life" />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <article key={card} className="card-parchment p-5">
            <p className="text-sm leading-7 text-muted">{card}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
