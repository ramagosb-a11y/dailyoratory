import { TrackedLink } from "@/components/analytics/TrackedLink";
import { prayerToolCards } from "@/lib/prayer";

export function PrayerToolsGrid() {
  return (
    <section>
      <p className="liturgical-section-eyebrow">Prayer tools</p>
      <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
        Practical tools for daily Catholic prayer.
      </h2>
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {prayerToolCards.map((tool) => (
          <article key={tool.id} className="card-parchment liturgical-card-accent flex h-full flex-col p-5">
            <h3 className="font-display text-2xl font-semibold text-navy">{tool.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{tool.description}</p>
            {tool.timeNeeded ? (
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-burgundy">
                {tool.timeNeeded}
              </p>
            ) : null}
            <div className="mt-5">
              <TrackedLink
                href={tool.href}
                className="btn btn-secondary focus-ring justify-center"
                eventName="prayer_tool_click"
                eventParams={{
                  tool_name: tool.title,
                  destination: tool.href,
                  section: "prayer-tools",
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
