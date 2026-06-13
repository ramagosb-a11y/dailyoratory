import { SectionHeader } from "@/components/section-header";
import { NewsResourceCard } from "@/components/news/NewsResourceCard";
import { getCatholicNewsResources } from "@/lib/news";

const catholicNewsIds = [
  "news-cna",
  "news-register",
  "news-osv",
  "news-crux",
  "news-cwr",
  "news-aleteia",
  "news-ewtn-news",
  "news-zenit",
];

export function CatholicNewsSources() {
  const resources = getCatholicNewsResources().filter((resource) => catholicNewsIds.includes(resource.id));

  return (
    <section id="catholic-news-sources">
      <SectionHeader
        eyebrow="Catholic news sources"
        title="Helpful Catholic news and analysis from around the Church."
        summary="These are useful reporting and analysis sources. Read them with gratitude, but still distinguish reporting from commentary and verify major claims with official Church channels."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {resources.map((resource) => (
          <NewsResourceCard key={resource.id} resource={resource} section="catholic-news-sources" />
        ))}
      </div>
    </section>
  );
}
