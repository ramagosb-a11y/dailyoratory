import Link from "next/link";

const cards = [
  "Baptism: identity in Christ",
  "Confirmation: mission in the Spirit",
  "Eucharist: communion and nourishment",
  "Reconciliation: mercy and conversion",
  "Anointing: strength in suffering",
  "Matrimony: covenant and family holiness",
  "Holy Orders: service and shepherding",
];

export function FormationAndSacraments() {
  return (
    <section className="card p-6">
      <p className="text-xs font-bold uppercase text-burgundy">Grace for growth</p>
      <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
        Formation flows from the sacraments
      </h2>
      <p className="mt-4 max-w-4xl text-sm leading-7 text-muted">
        Sacraments are not milestones to finish and forget. They are sources of grace for lifelong formation.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <article key={card} className="rounded-md border border-stone/70 bg-parchment px-4 py-4">
            <p className="text-sm leading-7 text-muted">{card}</p>
          </article>
        ))}
      </div>
      <Link href="/sacraments" className="btn btn-primary focus-ring mt-6 justify-center">
        Explore the Sacraments
      </Link>
    </section>
  );
}
