import Link from "next/link";
import { SectionHeader } from "@/components/section-header";
import { getAdorationAndMassCards } from "@/lib/adoration";

export function AdorationAndMass() {
  const cards = getAdorationAndMassCards();

  return (
    <section>
      <SectionHeader
        eyebrow="Eucharistic life"
        title="Adoration Leads Back to the Mass"
        summary="The Eucharist comes from the sacrifice of the Mass. Adoration extends worship of Christ present in the Eucharist."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {cards.map((card) => (
          <article key={card.title} className="card-parchment p-5">
            <h3 className="font-display text-2xl font-semibold text-navy">{card.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{card.description}</p>
          </article>
        ))}
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Link href="/mass" className="btn liturgical-button focus-ring justify-center">The Holy Mass</Link>
        <Link href="/sacraments/eucharist" className="btn btn-secondary focus-ring justify-center">Eucharist</Link>
        <Link href="/confession" className="btn btn-secondary focus-ring justify-center">Confession Guide</Link>
        <Link href="/formation" className="btn btn-secondary focus-ring justify-center">Formation</Link>
      </div>
    </section>
  );
}
