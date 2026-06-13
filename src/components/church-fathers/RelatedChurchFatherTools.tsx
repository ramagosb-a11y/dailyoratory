import Link from "next/link";

const relatedTools = [
  {
    label: "Explore the Catholic Faith",
    href: "/explore",
    description: "A welcoming starting point for anyone learning how Scripture, worship, and the early Church fit together.",
  },
  {
    label: "Mass Readings Reflections",
    href: "/reflections/mass-readings",
    description: "Carry one insight from the Fathers into prayer with Scripture and reflection.",
  },
  {
    label: "Mass Readings Reflections",
    href: "/reflections/mass-readings",
    description: "Read Scripture with the Church's living memory nearby.",
  },
  { label: "Sacraments", href: "/sacraments", description: "Prepare for grace with Catholic sacramental guidance." },
  { label: "Eucharistic Adoration", href: "/adoration", description: "Keep patristic Eucharistic faith close to prayer." },
  { label: "Confession Guide", href: "/confession", description: "Receive mercy and grow in repentance." },
  { label: "Sacred Tradition", href: "/tradition", description: "See how apostolic faith, Scripture, worship, and the Fathers fit together in Catholic life." },
  { label: "Councils of the Church", href: "/councils", description: "See how the Church clarified doctrine in the centuries close to the Fathers." },
  { label: "The Pope", href: "/pope", description: "See how Peter, Rome, and apostolic continuity fit into Catholic life." },
  { label: "The Vatican", href: "/vatican", description: "Walk through Vatican history, Saint Peter's Basilica, and sacred art with a prayerful guide." },
  { label: "Saint Companion Finder", href: "/saints/finder", description: "Meet later saints who drank from the same tradition." },
  { label: "Spiritual Growth Pathways", href: "/pathways", description: "Build habits of prayer, virtue, and steady conversion." },
  { label: "Prayer Library", href: "/library", description: "Pray with Daily Oratory's library of Catholic prayers." },
  { label: "Rule of Life Builder", href: "/rule-of-life", description: "Shape a daily Catholic rhythm." },
];

export function RelatedChurchFatherTools() {
  return (
    <section>
      <div>
        <p className="text-xs font-bold uppercase text-burgundy">Related tools</p>
        <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
          Related Daily Oratory tools
        </h2>
      </div>
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {relatedTools.map((tool) => (
          <article key={tool.href} className="card p-5">
            <h3 className="font-display text-3xl font-semibold text-navy">{tool.label}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{tool.description}</p>
            <Link href={tool.href} className="btn btn-secondary focus-ring mt-5">
              Open
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
