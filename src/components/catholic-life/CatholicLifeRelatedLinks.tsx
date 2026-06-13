"use client";

import { TrackedLink } from "@/components/analytics/TrackedLink";
import { catholicLifeRelatedLinks } from "@/data/catholicLifeRoadmap";

export function CatholicLifeRelatedLinks() {
  return (
    <section>
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Start here resources</p>
      <h2 className="mt-2 font-display text-4xl font-semibold text-navy sm:text-5xl">Start Here Resources</h2>
      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {catholicLifeRelatedLinks.map((link) => (
          <TrackedLink
            key={link.id}
            href={link.href}
            className="card-parchment block p-6"
            eventName="catholic_life_related_link_click"
            eventParams={{ destination: link.href, source: "related-links" }}
          >
            <h3 className="font-display text-3xl font-semibold text-navy">{link.label}</h3>
            <p className="daily-card-readable mt-3 text-sm leading-7 text-muted">{link.description}</p>
          </TrackedLink>
        ))}
      </div>
    </section>
  );
}
