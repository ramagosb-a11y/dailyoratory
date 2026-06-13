"use client";

import { TrackedLink } from "@/components/analytics/TrackedLink";
import { sacramentalEmergencyCards } from "@/data/sacramentalEmergency";

export function QuickActionCards() {
  return (
    <section>
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Choose the urgent situation</p>
      <h2 className="mt-2 font-display text-4xl font-semibold text-navy sm:text-5xl">Choose the Urgent Situation</h2>
      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {sacramentalEmergencyCards.map((card) => (
          <article key={card.id} className="card-parchment flex h-full flex-col p-6">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">{card.category}</p>
            <h3 className="font-display mt-3 text-3xl font-semibold text-navy">{card.title}</h3>
            <p className="daily-card-readable mt-4 text-sm leading-7 text-muted">{card.description}</p>
            <div className="mt-5">
              <TrackedLink
                href={card.primaryHref}
                className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center"
                eventName="sacramental_emergency_card_click"
                eventParams={{ card: card.id, destination: card.primaryHref }}
              >
                {card.primaryLabel}
              </TrackedLink>
            </div>
            {card.relatedLinks.length ? (
              <div className="mt-5 flex flex-wrap gap-2">
                {card.relatedLinks.map((link) => (
                  <TrackedLink
                    key={link.id}
                    href={link.href}
                    className="rounded-full border border-stone/70 bg-white/70 px-3 py-2 text-xs font-semibold text-navy transition hover:border-burgundy/40"
                    eventName="sacramental_emergency_related_link_click"
                    eventParams={{ source: card.id, destination: link.href }}
                  >
                    {link.label}
                  </TrackedLink>
                ))}
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
