import Link from "next/link";

const seasons = [
  { title: "Advent", text: "Hope and preparation" },
  { title: "Christmas", text: "Joy and incarnation" },
  { title: "Ordinary Time", text: "Growth and discipleship" },
  { title: "Lent", text: "Repentance and conversion" },
  { title: "Holy Week", text: "Union with Christ's Passion" },
  { title: "Easter", text: "Resurrection and mission" },
];

export function FormationByLiturgicalSeason() {
  return (
    <section>
      <div>
        <p className="text-xs font-bold uppercase text-burgundy">Church year</p>
        <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
          Let the Church year form you
        </h2>
      </div>
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {seasons.map((season) => (
          <article key={season.title} className="card p-5">
            <h3 className="font-display text-3xl font-semibold text-navy">{season.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{season.text}</p>
          </article>
        ))}
      </div>
      <Link href="/liturgical-living/seasons" className="btn btn-secondary focus-ring mt-6 justify-center">
        Explore Liturgical Seasons
      </Link>
    </section>
  );
}
