import Link from "next/link";

const relatedLinks = [
  { title: "Advent Season", href: "/liturgical-living/advent", description: "Return to Advent themes of waiting, prophecy, and hopeful preparation." },
  { title: "Christmas Season", href: "/liturgical-living/christmas", description: "Move from longing into the joy of the Nativity and the Incarnation." },
  { title: "Nativity Rosary Meditation", href: "/devotions/holy-rosary/joyful-mysteries/nativity", description: "Contemplate Christ’s birth with Mary and Joseph." },
  { title: "Scripture Prayer", href: "/library/scripture-prayer", description: "Pray with Scripture as Advent turns toward Christmas." },
  { title: "Confession Guide", href: "/confession", description: "Prepare your heart through mercy and repentance." },
  { title: "Daily Examen", href: "/daily-examen", description: "Review the day with gratitude and longing for Christ." },
  { title: "Bible", href: "/bible", description: "Read the promises and fulfillments that point to Jesus." },
  { title: "Prayer", href: "/pray", description: "Keep Advent and Christmas rooted in prayer." },
];

export function OAntiphonsRelatedLinks() {
  return (
    <section className="card-parchment p-6 sm:p-8">
      <h2 className="font-display text-4xl font-semibold text-navy">Prepare for Christmas</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {relatedLinks.map((link) => (
          <Link key={link.href} href={link.href} className="focus-ring rounded-2xl border border-stone bg-ivory/80 p-4 transition hover:border-gold">
            <span className="block font-display text-2xl font-semibold text-navy">{link.title}</span>
            <span className="daily-card-readable mt-2 block text-sm leading-7 text-muted">{link.description}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
