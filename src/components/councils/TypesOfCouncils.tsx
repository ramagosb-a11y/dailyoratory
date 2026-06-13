import Link from "next/link";
import { SectionHeader } from "@/components/section-header";

const cards = [
  {
    title: "Ecumenical Council",
    description: "A council recognized as universal for the whole Church. In Catholic understanding, it has authority in communion with the Pope.",
  },
  {
    title: "Local or Regional Council",
    description: "A gathering of bishops from a region addressing local needs, discipline, or teaching.",
  },
  {
    title: "Synod",
    description: "A gathering for consultation, discernment, and pastoral guidance. Synods are not the same as ecumenical councils.",
  },
  {
    title: "Council of Jerusalem",
    description: "The gathering in Acts 15 is often seen as an early model of the Church discerning together, though it is not counted among the later 21 ecumenical councils.",
  },
];

export function TypesOfCouncils() {
  return (
    <section>
      <SectionHeader eyebrow="Vocabulary" title="Different Types of Councils" />
      <div className="mt-7 grid gap-4 md:grid-cols-2">
        {cards.map((card) => (
          <article key={card.title} className="card-parchment p-5">
            <h3 className="font-display text-2xl font-semibold text-navy">{card.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{card.description}</p>
          </article>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="/tradition" className="btn btn-secondary focus-ring justify-center">Sacred Tradition</Link>
        <Link href="/church-fathers" className="btn btn-secondary focus-ring justify-center">Church Fathers</Link>
        <Link href="/catechism" className="btn btn-secondary focus-ring justify-center">Catechism</Link>
      </div>
    </section>
  );
}
