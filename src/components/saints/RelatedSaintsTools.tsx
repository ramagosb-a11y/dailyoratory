import Link from "next/link";

export function RelatedSaintsTools() {
  const links = [
    ["Explore the Catholic Faith", "/explore"],
    ["Angels and the Invisible World", "/angels"],
    ["Saint Companion Finder", "/saints/finder"],
    ["Today in the Church", "/today"],
    ["Liturgical Seasons", "/liturgical-living/seasons"],
    ["Formation", "/formation"],
    ["The Domestic Church", "/family"],
    ["Sacred Tradition", "/tradition"],
    ["The Pope", "/pope"],
    ["The Vatican", "/vatican"],
    ["Church Fathers", "/church-fathers"],
    ["Devotions", "/devotions"],
    ["Relics", "/relics"],
    ["Sacraments", "/sacraments"],
    ["Confession", "/confession"],
    ["Eucharistic Adoration", "/adoration"],
    ["Rosary", "/rosary"],
    ["Rule of Life", "/rule-of-life"],
    ["Virtue Tracker", "/virtue-tracker"],
    ["Mass Readings Reflections", "/reflections/mass-readings"],
  ];

  return (
    <section className="mt-16">
      <p className="liturgical-section-eyebrow">Related tools</p>
      <h2 className="font-display mt-2 text-4xl font-semibold text-navy sm:text-5xl">
        Related Daily Oratory Tools
      </h2>
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {links.map(([title, href]) => (
          <Link key={href} href={href} className="card-parchment p-5">
            <h3 className="font-display text-2xl font-semibold text-navy">{title}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
