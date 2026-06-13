import Link from "next/link";
import { lentTopics } from "@/data/lent";

const relatedLinks = [
  ...lentTopics.slice(1).map((topic) => ({ title: topic.title, href: topic.href, description: topic.description })),
  { title: "Confession Guide", href: "/confession", description: "Return to Christ's mercy through the Sacrament of Reconciliation." },
  { title: "Examination of Conscience", href: "/confession/examination", description: "Prepare prayerfully and honestly for Confession." },
  { title: "Seven Penitential Psalms", href: "/prayers/seven-penitential-psalms", description: "Pray repentance, mercy, and hope with Scripture during Lent." },
  { title: "Detachment from Sin", href: "/indulgences/detachment-from-sin", description: "Let Lent deepen your freedom from sin and false attachments." },
  { title: "Resisting Temptation", href: "/sin-and-temptation/resisting-temptation", description: "Receive practical help for moments of temptation and weakness." },
  { title: "Sorrowful Mysteries", href: "/devotions/holy-rosary/sorrowful-mysteries", description: "Walk with Jesus through His Passion in the Rosary." },
  { title: "Prayer", href: "/pray", description: "Build a broader rhythm of Catholic prayer and devotion." },
  { title: "Easter", href: "/liturgical-living/seasons#easter", description: "See how Lent opens toward Easter joy in the Church year." },
];

export function LentRelatedLinks() {
  return (
    <section>
      <h2 className="font-display text-4xl font-semibold text-navy">Continue the Lenten Journey</h2>
      <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {relatedLinks.map((link) => (
          <Link key={link.href + link.title} href={link.href} className="card-parchment p-6 sm:p-8 transition hover:border-gold">
            <h3 className="font-display text-3xl font-semibold text-navy">{link.title}</h3>
            <p className="daily-card-readable mt-4 text-base leading-7 text-muted">{link.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

