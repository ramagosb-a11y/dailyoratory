import { TrackedLink } from "@/components/analytics/TrackedLink";
import { SectionHeader } from "@/components/section-header";
import type { HomilyResource } from "@/types/homilies";

export function HomilyExternalResources({ resources }: { resources: HomilyResource[] }) {
  return (
    <section>
      <SectionHeader
        eyebrow="External Resources"
        title="Trusted Homily and Reflection Sources"
        summary="External resources are clearly labeled. Daily Oratory does not reproduce copyrighted homily transcripts or imply endorsement of every external item."
      />
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {resources.map((resource) => (
          <article key={resource.id} className="card-parchment p-5">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">
              {resource.official ? "Official source" : "External resource"}
            </p>
            <h3 className="font-display mt-3 text-3xl font-semibold text-navy">{resource.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{resource.description}</p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-burgundy">{resource.sourceName}</p>
            <div className="mt-5">
              <TrackedLink
                href={resource.url}
                external
                className="text-link focus-ring text-sm font-semibold"
                eventName="homily_external_open"
                eventParams={{ source_name: resource.sourceName, page_path: "/homilies" }}
              >
                Open External Resource
              </TrackedLink>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
