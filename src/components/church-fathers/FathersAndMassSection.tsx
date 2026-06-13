import Link from "next/link";

const massCards = [
  {
    title: "Sunday worship in the early Church",
    description:
      "The Fathers witness to a distinctly Christian Sunday gathering centered on Scripture, thanksgiving, and Eucharistic communion.",
  },
  {
    title: "Eucharist as true food and drink",
    description:
      "Many Fathers speak with striking realism and reverence about Christ's gift of Himself in the Eucharist.",
  },
  {
    title: "Sacrifice, altar, and thanksgiving",
    description:
      "Their language of offering, thanksgiving, and sacrifice helps modern readers hear the Mass with fresh depth.",
  },
  {
    title: "Baptismal preparation",
    description:
      "Patristic catechesis shows how carefully the early Church prepared souls for baptism, chrismation, and Eucharistic life.",
  },
  {
    title: "Prayer, fasting, and almsgiving",
    description:
      "The liturgy was never isolated from moral conversion; worship and daily life belonged together.",
  },
  {
    title: "Unity with the bishop and Church",
    description:
      "The Fathers repeatedly connect right worship with communion, order, and fidelity to the apostolic Church.",
  },
];

const relatedLinks = [
  { label: "Sacraments", href: "/sacraments" },
  { label: "Adoration", href: "/adoration" },
  { label: "Mass Readings Reflections", href: "/reflections/mass-readings" },
  { label: "Mass Readings Reflections", href: "/reflections/mass-readings" },
];

export function FathersAndMassSection() {
  return (
    <section>
      <div>
        <p className="text-xs font-bold uppercase text-burgundy">Mass and worship</p>
        <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
          The Fathers and the Mass
        </h2>
      </div>
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {massCards.map((card) => (
          <article key={card.title} className="card p-5">
            <h3 className="font-display text-3xl font-semibold text-navy">{card.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{card.description}</p>
          </article>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        {relatedLinks.map((link) => (
          <Link key={link.href} href={link.href} className="btn btn-secondary focus-ring">
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
