import { TrackedLink } from "@/components/analytics/TrackedLink";
import { SectionHeader } from "@/components/section-header";
import { getRelatedAdorationTools } from "@/lib/adoration";

export function RelatedAdorationTools() {
  const tools = getRelatedAdorationTools();

  return (
    <section>
      <SectionHeader
        eyebrow="Related Daily Oratory tools"
        title="Keep Praying from the Eucharist"
        summary="Use these Daily Oratory tools to connect Adoration with the Mass, confession, Scripture, saints, family life, and daily prayer."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {tools.map((tool) => (
          <TrackedLink
            key={tool.href}
            href={tool.href}
            className="card-parchment p-5"
            eventName="adoration_related_tool_click"
            eventParams={{ page_path: "/adoration", tool_name: tool.title }}
          >
            <h3 className="font-display text-2xl font-semibold text-navy">{tool.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{tool.description}</p>
            <p className="mt-4 text-sm font-semibold text-navy">{tool.cta}</p>
          </TrackedLink>
        ))}
      </div>
    </section>
  );
}
