"use client";

import { TrackedLink } from "@/components/analytics/TrackedLink";
import { SectionHeader } from "@/components/section-header";
import { getCatechismPillars } from "@/lib/catechism";

export function FourPillars() {
  const pillars = getCatechismPillars();

  return (
    <section id="four-pillars" className="scroll-mt-28">
      <SectionHeader
        eyebrow="Structure"
        title="The Four Pillars"
        summary="The Catechism is organized around four major parts, sometimes called pillars."
      />
      <div className="mt-7 grid gap-5 xl:grid-cols-2">
        {pillars.map((pillar) => (
          <article key={pillar.id} className="card-parchment liturgical-card-accent p-6">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">
              {pillar.paragraphRange}
            </p>
            <h3 className="font-display mt-2 text-3xl font-semibold text-navy">{pillar.title}</h3>
            <p className="mt-2 text-sm font-semibold text-muted">{pillar.subtitle}</p>
            <p className="mt-4 text-sm leading-7 text-muted">{pillar.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {pillar.relatedLinks.map((link) => (
                <TrackedLink
                  key={`${pillar.id}-${link.href}`}
                  href={link.href}
                  className="rounded-full border border-stone bg-ivory px-3 py-1 text-xs font-semibold text-navy"
                  eventName="catechism_pillar_click"
                  eventParams={{
                    pillar_slug: pillar.slug,
                    destination: link.href,
                    link_label: link.label,
                    page_path: "/catechism",
                  }}
                >
                  {link.label}
                </TrackedLink>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
