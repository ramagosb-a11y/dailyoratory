import Link from "next/link";

const starters = [
  "Didache",
  "St. Ignatius of Antioch",
  "St. Justin Martyr",
  "St. Irenaeus",
  "St. Athanasius",
  "St. Augustine",
];

export function FormationAndChurchFathers() {
  return (
    <section className="card p-6">
      <p className="text-xs font-bold uppercase text-burgundy">Early witnesses</p>
      <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
        Learn with the early Church
      </h2>
      <p className="mt-4 max-w-4xl text-sm leading-7 text-muted">
        The Church Fathers help Catholics see how the early Church understood Scripture,
        sacraments, worship, doctrine, virtue, and holiness.
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        {starters.map((starter) => (
          <span key={starter} className="season-pill">
            {starter}
          </span>
        ))}
      </div>
      <Link href="/church-fathers" className="btn btn-secondary focus-ring mt-6 justify-center">
        Explore the Church Fathers
      </Link>
    </section>
  );
}
