import { TrackedLink } from "@/components/analytics/TrackedLink";
import { getDailyExamenResources } from "@/lib/dailyExamen";
import { ExamenCardGrid, ExamenSection } from "@/components/daily-examen/DailyExamenUi";

export function DailyExamenResources() {
  const resources = getDailyExamenResources();

  return (
    <ExamenSection
      eyebrow="Sources"
      title="Helpful Sources for the Daily Examen"
      summary="Daily Oratory uses original summaries here and links outward when you want full Catholic source material."
    >
      <ExamenCardGrid columns="md:grid-cols-2">
        {resources.map((resource) => (
          <TrackedLink
            key={resource.id}
            href={resource.url}
            external
            className="card-parchment block h-full p-5 transition hover:border-gold"
            eventName="external_resource_click"
            eventParams={{
              category: "daily-examen-resource",
              item_slug: resource.id,
              source: "/daily-examen",
              destination: resource.url,
            }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">
              {resource.official ? "Official Church source" : "Trusted Catholic source"}
            </p>
            <h3 className="font-display mt-3 text-2xl font-semibold text-navy">{resource.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{resource.description}</p>
            <p className="mt-4 text-sm font-semibold text-navy">{resource.sourceName}</p>
          </TrackedLink>
        ))}
      </ExamenCardGrid>
    </ExamenSection>
  );
}

