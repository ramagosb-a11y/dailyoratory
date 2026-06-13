import { TrackedLink } from "@/components/analytics/TrackedLink";
import { SectionHeader } from "@/components/section-header";
import { getAngelResources } from "@/lib/angels";

export function AngelResources() {
  const resources = getAngelResources();

  return (
    <section>
      <SectionHeader
        eyebrow="Sources"
        title="Official and Helpful Sources"
        summary="Daily Oratory provides original summaries and links to official sources. It does not reproduce long copyrighted texts."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {resources.map((resource) => (
          <article key={resource.id} className="card-parchment p-5">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">{resource.badge}</p>
            <h3 className="font-display mt-3 text-3xl font-semibold text-navy">{resource.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{resource.description}</p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-burgundy">{resource.sourceName}</p>
            <TrackedLink
              href={resource.url}
              external
              className="text-link focus-ring mt-5 inline-block text-sm font-semibold"
              eventName="angels_resource_click"
              eventParams={{ resource_name: resource.title, page_path: "/angels" }}
            >
              Open Source
            </TrackedLink>
          </article>
        ))}
      </div>
    </section>
  );
}
