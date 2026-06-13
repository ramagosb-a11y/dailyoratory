import Link from "next/link";

const cards = [
  { title: "Children and families", focus: "Simple family prayer, Sunday Mass, and peace in the home.", step: "Choose one family prayer this week.", links: [{ label: "Family Liturgical Living", href: "/liturgical-living/family" }, { label: "Rosary", href: "/rosary" }] },
  { title: "Teens", focus: "Identity in Christ, virtue, friendship, and sacramental life.", step: "Pick one virtue to practice for seven days.", links: [{ label: "Virtue Tracker", href: "/virtue-tracker" }] },
  { title: "Young adults", focus: "Discernment, prayer rhythm, doctrine, and mission.", step: "Set one daily prayer anchor.", links: [{ label: "Heavenbound", href: "/tools/heavenbound" }] },
  { title: "Parents", focus: "Faithfulness in hidden duties, family leadership, and mercy.", step: "Pray one short prayer before the evening meal.", links: [{ label: "Rule of Life", href: "/rule-of-life" }] },
  { title: "Married couples", focus: "Shared prayer, forgiveness, and sacramental love.", step: "Pray one Our Father together this week.", links: [{ label: "Matrimony", href: "/sacraments/matrimony" }] },
  { title: "Single adults", focus: "Availability to God, service, and disciplined prayer.", step: "Choose one work of mercy this week.", links: [{ label: "Pathways", href: "/pathways" }] },
  { title: "Converts and inquirers", focus: "Foundations, sacraments, Scripture, and parish life.", step: "Read the OCIA page and one Gospel chapter.", links: [{ label: "OCIA", href: "/sacraments/ocia" }] },
  { title: "Returning Catholics", focus: "Mercy, confession, doctrine, and steady return.", step: "Begin with confession preparation.", links: [{ label: "Confession Guide", href: "/confession" }] },
  { title: "Sponsors and godparents", focus: "Witness, prayer, and faithful accompaniment.", step: "Pray for the person you accompany this week.", links: [{ label: "Sponsor and Godparent Guide", href: "/sacraments/sponsor-godparent" }] },
  { title: "Catechists and small-group leaders", focus: "Faithfulness to doctrine and charity in teaching.", step: "Choose one trusted Church source for this month's study.", links: [{ label: "Church Fathers", href: "/church-fathers" }] },
  { title: "Seniors", focus: "Perseverance, hope, intercession, and offering hidden suffering.", step: "Pray one Psalm of trust slowly.", links: [{ label: "Scripture Prayer", href: "/library/scripture-prayer" }] },
  { title: "Those who are sick or homebound", focus: "Union with Christ in suffering and steady interior prayer.", step: "Offer one moment of suffering to God today.", links: [{ label: "Anointing", href: "/sacraments/anointing" }] },
];

export function FormationByStateOfLife() {
  return (
    <section>
      <div>
        <p className="text-xs font-bold uppercase text-burgundy">State of life</p>
        <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
          Formation for your state of life
        </h2>
      </div>
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {cards.map((card) => (
          <article key={card.title} className="card p-5">
            <h3 className="font-display text-3xl font-semibold text-navy">{card.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{card.focus}</p>
            <p className="mt-4 text-sm font-semibold text-burgundy">First step</p>
            <p className="mt-1 text-sm leading-7 text-muted">{card.step}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {card.links.map((link) => (
                <Link key={link.href} href={link.href} className="season-pill">
                  {link.label}
                </Link>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
