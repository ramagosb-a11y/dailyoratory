import Link from "next/link";
import type { EpiphanyRelatedLink } from "@/types/epiphany";

export function EpiphanyRelatedLinks({ links }: { links: EpiphanyRelatedLink[] }) {
  return (
    <section className="card-parchment p-6 sm:p-8">
      <h2 className="font-display text-4xl font-semibold text-navy">Continue the Christmas Journey</h2>
      <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {links
          .slice()
          .sort((a, b) => a.sortOrder - b.sortOrder)
          .map((link) => (
            <article key={link.id} className="dashboard-card p-5 sm:p-6">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">{link.category}</p>
              <h3 className="font-display mt-3 text-2xl font-semibold text-navy">{link.title}</h3>
              <p className="daily-card-readable mt-4 text-base leading-7 text-muted">{link.description}</p>
              <div className="mt-5">
                <Link href={link.href} className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
                  Open {link.title}
                </Link>
              </div>
            </article>
          ))}
      </div>
    </section>
  );
}
