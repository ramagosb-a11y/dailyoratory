import Link from "next/link";

const cards = [
  { title: "Creed", href: "#doctrine" },
  { title: "Sacraments", href: "/sacraments" },
  { title: "Prayer", href: "/pray" },
  { title: "Scripture", href: "/library/scripture-prayer" },
  { title: "Body, Soul, and Spirit", href: "/body-soul-spirit" },
  { title: "Mass", href: "/mass" },
  { title: "Virtue", href: "#virtue" },
  { title: "Moral Life", href: "/confession" },
  { title: "Saints", href: "/saints" },
  { title: "Church Fathers", href: "/church-fathers" },
  { title: "Liturgical Living", href: "/liturgical-living/seasons" },
  { title: "Devotions", href: "/devotions" },
  { title: "Indulgences", href: "/indulgences" },
  { title: "Works of Mercy", href: "/pathways" },
  { title: "Family Faith", href: "/liturgical-living/family" },
  { title: "Spiritual Discernment", href: "/tools/heavenbound" },
];

export function FormationLibraryGrid() {
  return (
    <section>
      <div>
        <p className="text-xs font-bold uppercase text-burgundy">Formation library</p>
        <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
          Formation topics
        </h2>
      </div>
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <Link key={card.title} href={card.href} className="card p-5 transition hover:border-gold">
            <span className="font-display text-3xl font-semibold text-navy">{card.title}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
