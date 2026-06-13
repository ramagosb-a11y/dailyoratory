import { TrackedLink } from "@/components/analytics/TrackedLink";
import { getRelatedDailyExamenTools } from "@/lib/dailyExamen";
import { ExamenCardGrid, ExamenSection } from "@/components/daily-examen/DailyExamenUi";

export function RelatedDailyExamenTools() {
  const tools = getRelatedDailyExamenTools();

  return (
    <ExamenSection
      eyebrow="Related Daily Oratory tools"
      title="Keep the Examen Connected to the Rest of Catholic Life"
      summary="Let this nightly prayer stay tied to Confession, Scripture, family prayer, virtue, and daily conversion."
    >
      <ExamenCardGrid columns="md:grid-cols-2 xl:grid-cols-4">
        {tools.map((tool) => (
          <TrackedLink
            key={tool.href}
            href={tool.href}
            className="card-parchment block p-5 transition hover:border-gold"
            eventName="examen_related_tool_click"
            eventParams={{
              category: "related-tools",
              item_slug: tool.title.toLowerCase().replaceAll(" ", "-"),
              source: "/daily-examen",
              destination: tool.href,
            }}
          >
            <h3 className="font-display text-2xl font-semibold text-navy">{tool.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{tool.description}</p>
            <p className="mt-4 text-sm font-semibold text-navy">{tool.cta}</p>
          </TrackedLink>
        ))}
      </ExamenCardGrid>
    </ExamenSection>
  );
}

