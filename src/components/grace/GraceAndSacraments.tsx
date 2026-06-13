import { TrackedLink } from "@/components/analytics/TrackedLink";
import type { SacramentalGraceCard } from "@/types/grace";

export function GraceAndSacraments({ cards }: { cards: SacramentalGraceCard[] }) {
  return (
    <section className="card-parchment p-6 sm:p-8">
      <h2 className="font-display text-4xl font-semibold text-navy">Grace and the Sacraments</h2>
      <p className="daily-readable mt-5 text-base leading-8 text-muted">
        The sacraments are privileged encounters with Christ. Through them, Jesus gives grace to forgive, strengthen,
        heal, nourish, consecrate, and unite His people to Himself.
      </p>
      <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {cards
          .slice()
          .sort((a, b) => a.sortOrder - b.sortOrder)
          .map((card) => (
            <article key={card.id} className="dashboard-card p-5 sm:p-6">
              <h3 className="font-display text-2xl font-semibold text-navy">{card.sacrament}</h3>
              <p className="daily-card-readable mt-4 text-base leading-7 text-muted">{card.description}</p>
              <div className="mt-5">
                <TrackedLink
                  href={card.href}
                  eventName="grace_related_link_click"
                  eventParams={{ section: "grace-and-sacraments", destination: card.href }}
                  className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center"
                >
                  Open {card.sacrament}
                </TrackedLink>
              </div>
            </article>
          ))}
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        {[
          { label: "Sacraments", href: "/sacraments" },
          { label: "Baptism", href: "/sacraments/baptism" },
          { label: "Eucharist", href: "/sacraments/eucharist" },
          { label: "Confession", href: "/confession" },
          { label: "Mass", href: "/mass" },
          { label: "Adoration", href: "/adoration" },
        ].map((link) => (
          <TrackedLink
            key={link.href}
            href={link.href}
            eventName="grace_related_link_click"
            eventParams={{ section: "grace-and-sacraments-links", destination: link.href }}
            className="season-pill bg-ivory px-4 py-2 text-sm font-semibold text-navy"
          >
            {link.label}
          </TrackedLink>
        ))}
      </div>
    </section>
  );
}
