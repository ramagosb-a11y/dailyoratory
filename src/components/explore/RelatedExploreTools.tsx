import { SectionHeader } from "@/components/section-header";
import { relatedExploreTools } from "@/data/explorePage";

export function RelatedExploreTools() {
  return (
    <section>
      <SectionHeader
        eyebrow="Related Daily Oratory tools"
        title="Continue Exploring with Daily Oratory"
        summary="Move at a peaceful pace through prayer, worship, Scripture, sacraments, and the life of the Church."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {relatedExploreTools.map((tool) => (
          <a key={tool.href} href={tool.href} className="card-parchment p-5">
            <h3 className="font-display text-2xl font-semibold text-navy">{tool.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{tool.description}</p>
            <p className="mt-4 text-sm font-semibold text-navy">{tool.cta}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
