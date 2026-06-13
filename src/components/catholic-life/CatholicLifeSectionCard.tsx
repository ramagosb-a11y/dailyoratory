"use client";

import { TrackedLink } from "@/components/analytics/TrackedLink";
import type { CatholicLifeSection } from "@/types/catholicLifeRoadmap";

export function CatholicLifeSectionCard({ section }: { section: CatholicLifeSection }) {
  return (
    <article className="card-parchment flex h-full flex-col p-6 sm:p-7">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">{section.category}</p>
      <h3 className="mt-3 font-display text-3xl font-semibold text-navy">{section.title}</h3>
      <p className="daily-card-readable mt-4 text-base leading-8 text-muted">{section.description}</p>

      <div className="mt-6">
        <TrackedLink
          href={section.startHereHref}
          className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center"
          eventName="catholic_life_section_click"
          eventParams={{ section: section.slug, destination: section.startHereHref }}
        >
          {section.startHereLabel}
        </TrackedLink>
      </div>

      <div className="mt-6 space-y-3">
        {section.supportingLinks.map((link) => (
          <TrackedLink
            key={link.id}
            href={link.href}
            className="block rounded-[1.2rem] border border-stone/70 bg-white/70 px-4 py-3 transition hover:border-burgundy/40"
            eventName="catholic_life_related_link_click"
            eventParams={{ section: section.slug, destination: link.href }}
          >
            <span className="block text-sm font-semibold text-navy">{link.label}</span>
            <span className="daily-readable-muted mt-1 block text-sm leading-6 text-muted">{link.description}</span>
          </TrackedLink>
        ))}
      </div>

      <div className="mt-6 rounded-[1.2rem] border border-gold/25 bg-ivory/90 p-4">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Suggested next step</p>
        <p className="daily-readable mt-2 text-sm leading-7 text-muted">{section.suggestedNextStep}</p>
      </div>
    </article>
  );
}
