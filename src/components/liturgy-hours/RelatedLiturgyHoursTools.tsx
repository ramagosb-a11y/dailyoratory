import Link from "next/link";

const links = [
  { label: "The Bible", href: "/bible" },
  { label: "Daily Rule of Life Builder", href: "/rule-of-life" },
  { label: "Daily Examen", href: "/daily-examen" },
  { label: "Liturgical Living Dashboard", href: "/today" },
  { label: "Mass Readings Reflections", href: "/reflections/mass-readings" },
  { label: "Angels and the Invisible World", href: "/angels" },
  { label: "Eucharistic Adoration", href: "/adoration" },
  { label: "Rosary", href: "/rosary" },
  { label: "Devotions Library", href: "/devotions" },
  { label: "Church Fathers", href: "/church-fathers" },
  { label: "Prayer Rooms", href: "/community/prayer-rooms" },
  { label: "Saint Companion Finder", href: "/saints/finder" },
];

export function RelatedLiturgyHoursTools() {
  return (
    <section>
      <div>
        <p className="text-xs font-bold uppercase text-burgundy">Related Daily Oratory tools</p>
        <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
          Keep this prayer rooted in the rest of Catholic life
        </h2>
      </div>
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="card p-5 transition hover:border-gold">
            <span className="font-display text-3xl font-semibold text-navy">{link.label}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
