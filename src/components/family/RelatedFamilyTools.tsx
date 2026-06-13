import { TrackedLink } from "@/components/analytics/TrackedLink";
import { SectionHeader } from "@/components/section-header";
import { getRelatedFamilyTools } from "@/lib/family";

export function RelatedFamilyTools() {
  const tools = getRelatedFamilyTools();

  return (
    <section>
      <SectionHeader
        eyebrow="Related Daily Oratory tools"
        title="Keep Building the Domestic Church"
        summary="Use these Daily Oratory guides and tools to connect family life with prayer, sacraments, virtue, mercy, and steady formation."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {tools.map((tool) => (
          <TrackedLink
            key={tool.href}
            href={tool.href}
            className="card-parchment p-5"
            eventName="family_related_tool_click"
            eventParams={{ page_path: "/family", tool_name: tool.title }}
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
