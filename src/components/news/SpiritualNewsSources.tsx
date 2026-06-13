import { SectionHeader } from "@/components/section-header";
import { NewsResourceCard } from "@/components/news/NewsResourceCard";
import { getCatholicNewsResources } from "@/lib/news";

const spiritualIds = [
  "news-spirit-daily",
  "news-catholic-exchange",
  "news-integrated-catholic-life",
  "news-word-on-fire",
];

export function SpiritualNewsSources() {
  const resources = getCatholicNewsResources().filter((resource) => spiritualIds.includes(resource.id));

  return (
    <section>
      <SectionHeader
        eyebrow="Spiritual headlines and reflections"
        title="Catholic spiritual news, reflections, and devotional reading."
        summary="These resources can broaden prayerful awareness and spiritual reflection. They are not the same as official Church statements, and major claims should still be verified."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {resources.map((resource) => (
          <NewsResourceCard key={resource.id} resource={resource} section="spiritual-news-sources" compact />
        ))}
      </div>
      <div className="card-parchment mt-7 p-5">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Discernment note</p>
        <p className="mt-3 text-sm leading-7 text-muted">
          Spirit Daily is included here as an external Catholic spiritual news and aggregation
          resource, not as an official Church source. When a major claim matters, verify it with an
          official Church source.
        </p>
      </div>
    </section>
  );
}
