import { SectionHeader } from "@/components/section-header";
import { feastsOfAngels } from "@/data/angelsPage";
import Link from "next/link";

export function FeastsOfAngels() {
  return (
    <section>
      <SectionHeader eyebrow="Liturgical year" title="Feasts of the Angels" />
      <div className="mt-7 grid gap-4 lg:grid-cols-2">
        {feastsOfAngels.map((feast) => (
          <article key={feast.id} className="card-parchment p-5">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">{feast.date}</p>
            <h3 className="font-display mt-3 text-3xl font-semibold text-navy">{feast.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{feast.description}</p>
            <p className="mt-4 text-sm leading-7 text-muted">
              <span className="font-semibold text-navy">Prayer idea:</span> {feast.prayerIdea}
            </p>
            <p className="mt-2 text-sm leading-7 text-muted">
              <span className="font-semibold text-navy">Family practice:</span> {feast.familyPractice}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {feast.relatedLinks.map((link) => (
                <Link key={link.href} href={link.href} className="season-pill focus-ring hover:border-gold hover:text-navy">
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
