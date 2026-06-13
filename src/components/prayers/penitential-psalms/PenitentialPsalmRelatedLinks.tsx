"use client";

import { TrackedLink } from "@/components/analytics/TrackedLink";
import { penitentialPsalmRelatedLinks } from "@/data/sevenPenitentialPsalms";

export function PenitentialPsalmRelatedLinks() {
  return (
    <section className="card-parchment p-6 sm:p-8">
      <h2 className="font-display text-4xl font-semibold text-navy">Continue in Mercy and Conversion</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {penitentialPsalmRelatedLinks.map((link) => (
          <TrackedLink
            key={link.id}
            href={link.href}
            eventName={link.href.startsWith("/confession") ? "penitential_psalms_confession_click" : undefined}
            eventParams={{ section: "penitential-related-links", destination: link.href }}
            className="focus-ring rounded-2xl border border-stone bg-ivory/80 p-4 transition hover:border-gold"
          >
            <span className="block font-display text-2xl font-semibold text-navy">{link.title}</span>
            <span className="daily-card-readable mt-2 block text-sm leading-7 text-muted">{link.description}</span>
          </TrackedLink>
        ))}
      </div>
    </section>
  );
}
