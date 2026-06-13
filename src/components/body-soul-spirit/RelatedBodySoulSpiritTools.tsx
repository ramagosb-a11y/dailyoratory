import { TrackedLink } from "@/components/analytics/TrackedLink";
import { getRelatedBodySoulSpiritTools } from "@/lib/bodySoulSpirit";
import { BodySoulSpiritSection } from "@/components/body-soul-spirit/BodySoulSpiritUi";

export function RelatedBodySoulSpiritTools() {
  const tools = getRelatedBodySoulSpiritTools();

  return (
    <BodySoulSpiritSection
      eyebrow="Related Daily Oratory tools"
      title="Keep the Temple Open to Grace"
      summary="Move from reflection into concrete prayer, sacramental life, Scripture, and steady discipleship."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {tools.map((tool) => (
          <article key={tool.href} className="card p-5">
            <h3 className="font-display text-2xl font-semibold text-navy">{tool.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{tool.description}</p>
            <div className="mt-5">
              <TrackedLink
                href={tool.href}
                className="btn btn-secondary focus-ring justify-center"
                eventName="body_soul_spirit_related_click"
                eventParams={{
                  category: "related-tools",
                  section: "related-tools",
                  destination: tool.href,
                }}
              >
                {tool.cta}
              </TrackedLink>
            </div>
          </article>
        ))}
      </div>
    </BodySoulSpiritSection>
  );
}

