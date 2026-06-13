import { TrackedLink } from "@/components/analytics/TrackedLink";
import { SectionHeader } from "@/components/section-header";
import { getFamilyResources } from "@/lib/family";

export function FamilyResources() {
  const resources = getFamilyResources();

  return (
    <section>
      <SectionHeader
        eyebrow="Sources"
        title="Official and Helpful Resources"
        summary="Daily Oratory provides original summaries and family prayer tools. It does not replace parish support, counseling, pastoral care, professional help, or emergency services."
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
              eventName="family_resource_click"
              eventParams={{ page_path: "/family", resource_name: resource.title }}
            >
              Open source
            </TrackedLink>
          </article>
        ))}
      </div>
    </section>
  );
}
