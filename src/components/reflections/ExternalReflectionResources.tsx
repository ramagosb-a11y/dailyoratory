import { reflectionExternalResources } from "@/data/reflectionExternalResources";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { SectionHeader } from "@/components/section-header";

export function ExternalReflectionResources() {
  return (
    <section className="mt-14">
      <SectionHeader
        eyebrow="Supplemental resources"
        title="Continue Praying with Today's Readings"
        summary="Explore additional Catholic reflections, meditations, and daily reading resources from trusted sources."
      />

      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {reflectionExternalResources.map((resource) => (
          <article key={resource.id} className="card-parchment liturgical-card-accent flex h-full flex-col p-5">
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-display text-2xl font-semibold leading-tight text-navy">{resource.title}</h3>
              <span className="liturgical-badge rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em]">
                {resource.badge}
              </span>
            </div>

            <p className="mt-3 text-sm leading-7 text-muted">{resource.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full border border-stone bg-ivory px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
                External resource
              </span>
              {resource.official ? (
                <span className="rounded-full border border-gold/25 bg-gold/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-navy">
                  Official Church source
                </span>
              ) : null}
            </div>

            <div className="mt-6">
              <TrackedLink
                href={resource.url}
                external
                className="btn btn-secondary focus-ring justify-center"
                eventName="external_resource_click"
                eventParams={{
                  resource_name: resource.title,
                  resource_url: resource.url,
                  resource_badge: resource.badge,
                  page_path: "/reflections/mass-readings",
                  section: "external-reflection-resources",
                }}
              >
                Visit Resource
              </TrackedLink>
            </div>
          </article>
        ))}
      </div>

      <div className="card-parchment mt-7 p-5">
        <p className="text-xs font-bold uppercase text-burgundy">Supplemental note</p>
        <p className="mt-3 text-sm leading-7 text-muted">
          These links are provided as supplemental Catholic reflection resources. Daily Oratory does not
          control external content. For official Mass readings, use the USCCB Daily Readings or your local
          bishops&apos; conference.
        </p>
      </div>
    </section>
  );
}
