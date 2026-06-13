import { TrackedLink } from "@/components/analytics/TrackedLink";
import { SectionHeader } from "@/components/section-header";
import { getCatechismResources } from "@/lib/catechism";

export function OfficialCatechismResources() {
  const resources = getCatechismResources();

  return (
    <section>
      <SectionHeader
        eyebrow="Official sources"
        title="Official Catechism Resources"
        summary="Use these official Vatican and USCCB resources for the full text, the Compendium, and additional teaching support."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {resources.map((resource) => (
          <article key={resource.id} className="card-parchment liturgical-card-accent flex h-full flex-col p-5">
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-display text-2xl font-semibold text-navy">{resource.title}</h3>
              <span className="liturgical-badge rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em]">
                {resource.badge}
              </span>
            </div>
            <p className="mt-3 text-sm leading-7 text-muted">{resource.description}</p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-burgundy">
              Official Church source
            </p>
            <TrackedLink
              href={resource.url}
              external
              className="btn btn-secondary focus-ring mt-6 justify-center"
              eventName="catechism_resource_click"
              eventParams={{
                resource_name: resource.title,
                resource_url: resource.url,
                section: "official-catechism-resources",
                page_path: "/catechism",
              }}
            >
              Visit Resource
            </TrackedLink>
          </article>
        ))}
      </div>
    </section>
  );
}
