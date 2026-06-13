import { TrackedLink } from "@/components/analytics/TrackedLink";
import { SectionHeader } from "@/components/section-header";
import { getRelatedPopeTools } from "@/lib/pope";

export function RelatedPopeTools() {
  const tools = getRelatedPopeTools();

  return (
    <section>
      <SectionHeader eyebrow="Related Daily Oratory tools" title="Continue Learning with Daily Oratory" />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {tools.map((tool) => (
          <article key={tool.href} className="card-parchment liturgical-card-accent p-5">
            <h3 className="font-display text-2xl font-semibold text-navy">{tool.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{tool.description}</p>
            <TrackedLink
              href={tool.href}
              className="btn btn-secondary focus-ring mt-5 justify-center"
              eventName="pope_related_tool_click"
              eventParams={{ destination: tool.href, page_path: "/pope", section: "related-pope-tools" }}
            >
              {tool.cta}
            </TrackedLink>
          </article>
        ))}
      </div>
    </section>
  );
}
