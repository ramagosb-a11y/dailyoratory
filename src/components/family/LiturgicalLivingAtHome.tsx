import Link from "next/link";
import { SectionHeader } from "@/components/section-header";
import { familyLiturgicalLivingCards } from "@/data/familyPage";

export function LiturgicalLivingAtHome() {
  return (
    <section>
      <SectionHeader
        eyebrow="Church year"
        title="Liturgical Living at Home"
        summary="The liturgical year helps families live the mysteries of Christ across time."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {familyLiturgicalLivingCards.map((card) => (
          <article key={card.title} className="card-parchment p-5">
            <h3 className="font-display text-2xl font-semibold text-navy">{card.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{card.description}</p>
          </article>
        ))}
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link href="/liturgical-living/seasons" className="btn liturgical-button focus-ring justify-center">
          Explore Liturgical Seasons
        </Link>
        <Link href="/liturgical-living/family" className="btn btn-secondary focus-ring justify-center">
          Family Liturgical Living
        </Link>
      </div>
    </section>
  );
}
