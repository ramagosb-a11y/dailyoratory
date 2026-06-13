import { SectionHeader } from "@/components/section-header";
import { getRelatedCouncilTools } from "@/lib/councils";
import { TrackedLink } from "@/components/analytics/TrackedLink";

export function RelatedCouncilTools() {
  const tools = getRelatedCouncilTools();

  return (
    <section>
      <SectionHeader
        eyebrow="Related Daily Oratory tools"
        title="Continue Learning with Daily Oratory"
        summary="Use these guides and tools to connect councils with Scripture, worship, doctrine, and daily discipleship."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {tools.map((tool) => (
          <TrackedLink
            key={tool.href}
            href={tool.href}
            className="card-parchment p-5"
            eventName="council_related_tool_click"
            eventParams={{ destination: tool.href, page_path: "/councils", section: "related-council-tools" }}
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
