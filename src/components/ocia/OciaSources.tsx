"use client";

import { TrackedLink } from "@/components/analytics/TrackedLink";
import { SectionHeader } from "@/components/section-header";
import { getOciaResources } from "@/lib/ocia";

export function OciaSources() {
  const resources = getOciaResources();

  return (
    <section>
      <SectionHeader
        eyebrow="Official and helpful sources"
        title="Official and Helpful Sources"
        summary="Use official Catechism and bishops’ resources first, then contact a local parish or diocese for schedules, requirements, and pastoral questions."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {resources.map((resource) =>
          resource.url === "#" ? (
            <article key={resource.id} className="card-parchment p-5">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-2xl font-semibold text-navy">{resource.title}</h3>
                <span className="liturgical-badge rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em]">
                  {resource.badge}
                </span>
              </div>
              <p className="mt-3 text-sm leading-7 text-muted">{resource.description}</p>
              <div className="mt-5 rounded-md border border-dashed border-stone bg-ivory px-4 py-3 text-sm leading-7 text-muted">
                Replace this placeholder with a local parish or diocesan page later.
              </div>
            </article>
          ) : (
            <article key={resource.id} className="card-parchment liturgical-card-accent p-5">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-2xl font-semibold text-navy">{resource.title}</h3>
                <span className="liturgical-badge rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em]">
                  {resource.badge}
                </span>
              </div>
              <p className="mt-3 text-sm leading-7 text-muted">{resource.description}</p>
              <TrackedLink
                href={resource.url}
                external
                className="btn btn-secondary focus-ring mt-5 justify-center"
                eventName="ocia_resource_click"
                eventParams={{
                  resource_name: resource.title,
                  resource_url: resource.url,
                  section: "ocia-sources",
                  page_path: "/ocia",
                }}
              >
                Visit Resource
              </TrackedLink>
            </article>
          ),
        )}
      </div>
    </section>
  );
}
