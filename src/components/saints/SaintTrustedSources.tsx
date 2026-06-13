import { TrackedLink } from "@/components/analytics/TrackedLink";
import { getSaintResources } from "@/lib/saints";

export function SaintTrustedSources() {
  const resources = getSaintResources();

  return (
    <section className="mt-16">
      <p className="liturgical-section-eyebrow">Trusted sources</p>
      <h2 className="font-display mt-2 text-4xl font-semibold text-navy sm:text-5xl">Trusted Sources</h2>
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {resources.map((resource) => (
          <article key={resource.id} className="card-parchment liturgical-card-accent p-5">
            <h3 className="font-display text-2xl font-semibold text-navy">{resource.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{resource.description}</p>
            <TrackedLink
              href={resource.url}
              external
              className="mt-4 inline-flex text-sm font-semibold text-navy underline decoration-gold underline-offset-4"
              eventName="saint_external_resource_click"
              eventParams={{ resource_name: resource.title, page_path: "/saints" }}
            >
              External resource
            </TrackedLink>
          </article>
        ))}
      </div>
    </section>
  );
}

