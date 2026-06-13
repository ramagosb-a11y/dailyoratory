import Link from "next/link";
import { SectionHeader } from "@/components/section-header";
import { familySacramentCards } from "@/data/familyPage";

export function FamilyAndSacraments() {
  return (
    <section>
      <SectionHeader
        eyebrow="Sacramental life"
        title="The Family and the Sacraments"
        summary="The domestic church is nourished by the parish and the sacraments."
      />
      <p className="mt-5 max-w-4xl text-sm leading-8 text-muted">
        Family life should lead toward Sunday Mass, Confession, Eucharist, Baptism, Confirmation, Matrimony, and care for
        the sick. Home practices support sacramental life, but they never replace the liturgy or parish life.
      </p>
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {familySacramentCards.map((card) => (
          <Link key={card.title} href={card.href} className="card-parchment p-5">
            <h3 className="font-display text-2xl font-semibold text-navy">{card.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{card.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
