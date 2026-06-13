import { SectionHeader } from "@/components/section-header";
import { getVaticanDefinitionCards } from "@/lib/vatican";

export function WhatIsVatican() {
  const cards = getVaticanDefinitionCards();

  return (
    <section>
      <SectionHeader
        eyebrow="Foundations"
        title="What Is the Vatican?"
        summary="The Vatican is often used to refer to Vatican City, the Holy See, the Pope's ministry, and the central offices that serve the Catholic Church. These terms are related, but not identical."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {cards.map((card) => (
          <article key={card.title} className="card-parchment p-5">
            <h3 className="font-display text-2xl font-semibold text-navy">{card.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{card.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
