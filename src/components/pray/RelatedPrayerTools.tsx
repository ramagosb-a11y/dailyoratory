import { TrackedLink } from "@/components/analytics/TrackedLink";
import { getRelatedPrayerTools } from "@/lib/prayer";

export function RelatedPrayerTools() {
  const tools = getRelatedPrayerTools();

  return (
    <section>
      <p className="liturgical-section-eyebrow">Related Daily Oratory tools</p>
      <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
        Keep moving through prayer, Scripture, sacrament, and formation.
      </h2>
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {tools.map((tool) => (
          <article key={tool.id} className="card p-5">
            <h3 className="font-display text-2xl font-semibold text-navy">{tool.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{tool.description}</p>
            <div className="mt-5">
              <TrackedLink
                href={tool.href}
                className="btn btn-secondary focus-ring justify-center"
                eventName="prayer_tool_click"
                eventParams={{
                  tool_name: tool.title,
                  destination: tool.href,
                  section: "related-prayer-tools",
                  page_path: "/pray",
                }}
              >
                {tool.cta}
              </TrackedLink>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
