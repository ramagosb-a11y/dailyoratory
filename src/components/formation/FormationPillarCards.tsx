import Link from "next/link";
import type { FormationPillar } from "@/types/formation";

export function FormationPillarCards({ pillars }: { pillars: FormationPillar[] }) {
  return (
    <section>
      <div>
        <p className="text-xs font-bold uppercase text-burgundy">Three pillars</p>
        <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
          Three pillars of formation
        </h2>
      </div>
      <div className="mt-7 grid gap-5 lg:grid-cols-3">
        {pillars.map((pillar) => (
          <article key={pillar.id} className="card p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-burgundy">{pillar.subtitle}</p>
            <h3 className="font-display mt-2 text-4xl font-semibold text-navy">{pillar.title}</h3>
            <p className="mt-4 text-sm leading-7 text-muted">{pillar.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {pillar.relatedLinks.slice(0, 4).map((link) => (
                <Link key={link.href} href={link.href} className="season-pill">
                  {link.label}
                </Link>
              ))}
            </div>
            <Link href={pillar.relatedLinks[pillar.relatedLinks.length - 1]?.href ?? "#"} className="btn btn-secondary focus-ring mt-5 justify-center">
              {pillar.title === "Doctrine" ? "Explore Doctrine" : pillar.title === "Virtue" ? "Practice Virtue" : "Begin Spiritual Growth"}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
