import { TrackedLink } from "@/components/analytics/TrackedLink";
import { SectionHeader } from "@/components/section-header";
import { getSacramentalResources } from "@/lib/sacramentals";

export function SacramentalResources() {
  const resources = getSacramentalResources();

  return (
    <section>
      <SectionHeader eyebrow="Sources" title="Official and Helpful Sources" />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {resources.map((resource) => (
          <TrackedLink
            key={resource.id}
            href={resource.url}
            external
            className="focus-ring block"
            eventName="sacramental_resource_click"
            eventParams={{ item_slug: resource.id, source: resource.sourceName, destination: resource.url }}
          >
            <article className="card-parchment h-full p-5">
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">{resource.badge}</p>
                {resource.official ? (
                  <span className="rounded-full border border-stone px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-navy">
                    Official
                  </span>
                ) : null}
              </div>
              <h3 className="font-display mt-3 text-2xl font-semibold text-navy">{resource.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{resource.description}</p>
            </article>
          </TrackedLink>
        ))}
      </div>
      <p className="mt-6 text-sm leading-7 text-muted">
        Daily Oratory provides original summaries and links to official sources. It does not replace the sacraments, parish guidance, priestly counsel, or official Church teaching.
      </p>
    </section>
  );
}
