import { SectionHeader } from "@/components/section-header";
import { NewsResourceCard } from "@/components/news/NewsResourceCard";
import { getCatholicNewsResources } from "@/lib/news";

const officialIds = [
  "news-vatican-news",
  "news-holy-see-press-office",
  "news-vatican-va",
  "news-usccb-newsroom",
  "news-usccb-daily-readings",
  "news-local-diocese-placeholder",
];

export function OfficialChurchSources() {
  const resources = getCatholicNewsResources().filter((resource) => officialIds.includes(resource.id));

  return (
    <section id="official-church-sources">
      <SectionHeader
        eyebrow="Official Church sources"
        title="Start here for official Vatican and bishops' conference information."
        summary="When a major claim matters, go first to the official source closest to it: the Vatican, bishops' conference, diocese, or parish."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {resources.map((resource) => (
          <NewsResourceCard key={resource.id} resource={resource} section="official-church-sources" />
        ))}
      </div>
    </section>
  );
}
