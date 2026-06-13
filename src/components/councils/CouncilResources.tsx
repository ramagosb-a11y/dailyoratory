import { SectionHeader } from "@/components/section-header";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { getCouncilResources } from "@/lib/councils";

export function CouncilResources() {
  const resources = getCouncilResources();

  return (
    <section>
      <SectionHeader
        eyebrow="Official and study sources"
        title="Official and Study Resources"
        summary="Daily Oratory provides original summaries and links to official or trusted sources. It does not reproduce long council documents, canons, decrees, or copyrighted study materials."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {resources.map((resource) => (
          <article key={resource.id} className="card-parchment p-5">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">{resource.badge}</p>
            <h3 className="font-display mt-2 text-2xl font-semibold text-navy">{resource.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{resource.description}</p>
            <TrackedLink
              href={resource.url}
              external
              className="btn btn-secondary focus-ring mt-5 justify-center"
              eventName="council_resource_click"
              eventParams={{ resource_name: resource.title, resource_url: resource.url, page_path: "/councils", section: "council-resources" }}
            >
              {resource.official ? "Open official source" : "Open study resource"}
            </TrackedLink>
          </article>
        ))}
      </div>
    </section>
  );
}
