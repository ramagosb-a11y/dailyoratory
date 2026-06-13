import Link from "next/link";
import { SectionHeader } from "@/components/section-header";

const ideas = [
  "Pray the Guardian Angel prayer at bedtime.",
  "Thank God for protection.",
  "Teach children not to fear the dark but to trust Jesus.",
  "Celebrate the Feast of the Guardian Angels.",
  "Learn about Saint Michael, Gabriel, and Raphael.",
  "Connect angels to Scripture and Mass.",
];

export function AngelsForFamilies() {
  return (
    <section>
      <SectionHeader
        eyebrow="Families"
        title="Teaching Children About Angels"
        summary="Children can learn about guardian angels in a simple, peaceful way. Teach them that God loves them, that their guardian angel helps protect and guide them, and that Jesus is always Lord."
      />
      <div className="mt-7 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="card-parchment p-6">
          <ul className="grid gap-3 text-sm leading-7 text-muted">
            {ideas.map((idea) => (
              <li key={idea}>• {idea}</li>
            ))}
          </ul>
        </article>
        <article className="card-parchment p-6">
          <div className="flex flex-wrap gap-2">
            {[
              { label: "Family", href: "/family" },
              { label: "Prayer", href: "/pray" },
              { label: "Saints", href: "/saints" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="season-pill focus-ring hover:border-gold hover:text-navy">
                {link.label}
              </Link>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
