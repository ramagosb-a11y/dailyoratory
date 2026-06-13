"use client";

import { SectionHeader } from "@/components/section-header";
import { trackEvent } from "@/lib/analytics";
import { getRelicResources } from "@/lib/relics";
import { ExternalAnchor } from "@/components/relics/shared";

export function RelicResources() {
  const resources = getRelicResources();

  function handleClick(title: string, url: string, source: string) {
    trackEvent("relic_resource_click", {
      item_slug: title.toLowerCase().replaceAll(" ", "-"),
      destination: url,
      source,
    });
  }

  return (
    <section>
      <SectionHeader
        eyebrow="Sources"
        title="Official and Helpful Sources"
        summary="Daily Oratory provides original summaries and links to official or trusted sources. It does not authenticate relics, sell relics, or replace parish or diocesan guidance."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {resources.map((resource) => (
          <article key={resource.id} className="card-parchment p-5">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">{resource.badge}</p>
            <h3 className="mt-2 font-display text-2xl font-semibold text-navy">{resource.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{resource.description}</p>
            {resource.url !== "#" ? (
              <ExternalAnchor
                href={resource.url}
                onClick={() => handleClick(resource.title, resource.url, resource.sourceName)}
                className="btn btn-secondary focus-ring mt-5 inline-flex justify-center"
              >
                Open Source
              </ExternalAnchor>
            ) : (
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-burgundy">Add approved local source</p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
