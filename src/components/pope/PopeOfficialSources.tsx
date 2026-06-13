import { TrackedLink } from "@/components/analytics/TrackedLink";
import { SectionHeader } from "@/components/section-header";
import { getPopeResources } from "@/lib/pope";

export function PopeOfficialSources() {
  const resources = getPopeResources();

  return (
    <section>
      <SectionHeader
        eyebrow="Official sources"
        title="Official Vatican Sources"
        summary="For official papal texts, use Vatican.va. News commentary and social media posts should not replace official documents."
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
              eventName="pope_resource_click"
              eventParams={{ resource_name: resource.title, resource_url: resource.url, page_path: "/pope", section: "official-sources" }}
            >
              Open Official Source
            </TrackedLink>
          </article>
        ))}
      </div>
    </section>
  );
}
