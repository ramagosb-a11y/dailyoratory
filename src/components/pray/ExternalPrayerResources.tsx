import { TrackedLink } from "@/components/analytics/TrackedLink";
import { SectionHeader } from "@/components/section-header";
import { getPrayerExternalResources } from "@/lib/prayer";

export function ExternalPrayerResources() {
  const resources = getPrayerExternalResources();

  return (
    <section>
      <SectionHeader
        eyebrow="Trusted Catholic prayer resources"
        title="Explore official and trusted Catholic prayer resources."
        summary="Daily Oratory remains the primary guide here. These links are supplemental resources for prayer, doctrine, and liturgical life."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {resources.map((resource) => (
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
                eventName="external_prayer_resource_click"
                eventParams={{
                  resource_name: resource.title,
                  resource_url: resource.url,
                  page_path: "/pray",
                  section: "external-prayer-resources",
                }}
              >
                Visit Resource
              </TrackedLink>
            </div>
          </article>
        ))}
      </div>
      <div className="card-parchment mt-7 p-5">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Source note</p>
        <p className="mt-3 text-sm leading-7 text-muted">
          Daily Oratory provides prayer guidance and links to trusted resources. It does not control
          external content.
        </p>
      </div>
    </section>
  );
}
