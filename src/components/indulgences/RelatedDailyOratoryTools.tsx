import { getRelatedDailyOratoryTools } from "@/lib/indulgences";
import { IndulgenceSection, RelatedLinkCard } from "@/components/indulgences/helpers";

export function RelatedDailyOratoryTools() {
  const tools = getRelatedDailyOratoryTools();

  return (
    <IndulgenceSection
      id="related-daily-oratory-tools"
      eyebrow="Continue in prayer"
      title="Related Daily Oratory tools"
      summary="Use the rest of the site to put this teaching into practice with prayer, confession, Scripture, and charity."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {tools.map((tool) => (
          <RelatedLinkCard key={tool.id} href={tool.href} title={tool.title} description={tool.description} />
        ))}
      </div>
    </IndulgenceSection>
  );
}
