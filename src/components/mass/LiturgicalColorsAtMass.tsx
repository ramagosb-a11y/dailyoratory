import Link from "next/link";

const colors = [
  { title: "White / Gold", note: "Joy, Christmas, Easter, solemnities, and saints who were not martyrs." },
  { title: "Green", note: "Ordinary Time and growth in discipleship." },
  { title: "Violet / Purple", note: "Advent, Lent, penance, and preparation." },
  { title: "Red", note: "The Passion, martyrs, the Holy Spirit, Palm Sunday, Good Friday, and Pentecost." },
  { title: "Rose", note: "Gaudete Sunday and Laetare Sunday." },
  { title: "Black", note: "May be used in some places for Masses for the dead, according to norms." },
];

export function LiturgicalColorsAtMass() {
  return (
    <section id="liturgical-colors" className="scroll-mt-28 border-t border-stone/70 pt-10">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Liturgical Colors</p>
      <h2 className="mt-2 font-display text-4xl font-semibold text-navy sm:text-5xl">
        Colors that teach the season
      </h2>
      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {colors.map((color) => (
          <article key={color.title} className="card p-6">
            <h3 className="font-display text-3xl font-semibold text-navy">{color.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{color.note}</p>
          </article>
        ))}
      </div>
      <Link href="/liturgical-living/seasons" className="btn btn-secondary focus-ring mt-6 justify-center">
        Explore liturgical seasons
      </Link>
    </section>
  );
}
