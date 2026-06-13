import { SectionHeader } from "@/components/section-header";
import { getWhyVaticanMattersCards } from "@/lib/vatican";

export function WhyVaticanMatters() {
  const cards = getWhyVaticanMattersCards();

  return (
    <section>
      <SectionHeader
        eyebrow="Why it matters"
        title="Why the Vatican Matters"
        summary="The Vatican is important, but the Catholic Church is not limited to Rome. The Church lives in dioceses, parishes, families, missions, monasteries, schools, and communities throughout the world."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {cards.map((card) => (
          <article key={card} className="card-parchment p-5">
            <p className="text-sm font-semibold leading-7 text-navy">{card}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
