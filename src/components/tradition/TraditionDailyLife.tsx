import { SectionHeader } from "@/components/section-header";
import { getTraditionDailyLifeCards } from "@/lib/tradition";

export function TraditionDailyLife() {
  const cards = getTraditionDailyLifeCards();

  return (
    <section>
      <SectionHeader
        eyebrow="Daily life"
        title="How Tradition Shapes Daily Life"
        summary="Tradition is not only something to define. It shapes prayer, worship, conscience, family life, and steady conversion."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {cards.map((card) => (
          <article key={card} className="card-parchment p-5">
            <p className="text-sm font-semibold leading-7 text-navy">{card}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
