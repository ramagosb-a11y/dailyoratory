import { SectionHeader } from "@/components/section-header";
import { NewsResourceCard } from "@/components/news/NewsResourceCard";
import { getCatholicNewsResources } from "@/lib/news";
import type { CatholicNewsResource } from "@/types/news";

const focusSections = [
  {
    title: "Vatican and Pope",
    summary: "For papal updates, Vatican appointments, official statements, and wider Vatican reporting.",
    resourceIds: [
      "news-vatican-news",
      "news-holy-see-press-office",
      "news-vatican-va",
      "news-cna",
      "news-crux",
    ],
  },
  {
    title: "U.S. Catholic Church",
    summary: "For bishops' conference news, local Catholic reporting, and broader Church developments in the United States.",
    resourceIds: ["news-usccb-newsroom", "news-osv", "news-register", "news-cna"],
  },
  {
    title: "Daily Readings and Reflections",
    summary: "For daily readings, Gospel reflections, and prayerful Scripture meditation anchored in the Church's lectionary.",
    resourceIds: [
      "news-usccb-daily-readings",
      "news-daily-scripture",
      "news-creighton-daily-reflections",
      "news-word-on-fire-reflections",
      "news-my-catholic-life-reflections",
    ],
  },
  {
    title: "Pro-Life and Human Dignity",
    summary: "For life issues, Catholic social witness, and official pro-life resources.",
    resourceIds: ["news-usccb-pro-life", "news-register", "news-cna", "news-local-diocese-placeholder"],
  },
  {
    title: "Persecuted Christians and Global Church",
    summary: "For suffering Christians, global Catholic witness, and the needs of the Church in difficult places.",
    resourceIds: ["news-aid-to-the-church-in-need", "news-vatican-news", "news-cna", "news-crux"],
  },
  {
    title: "Faith and Culture",
    summary: "For Catholic essays, culture coverage, and reflection on the life of faith in the world.",
    resourceIds: ["news-aleteia", "news-word-on-fire", "news-cwr", "news-catholic-exchange"],
  },
];

export function NewsFocusSections() {
  const resources = getCatholicNewsResources();
  const resourceMap = new Map(resources.map((resource) => [resource.id, resource]));

  return (
    <section>
      <SectionHeader
        eyebrow="Special focus sections"
        title="Browse Catholic news by concern, place, and spiritual focus."
        summary="Start with the area you are trying to follow, then keep one hand on prayer and the other on trustworthy sources."
      />
      <div className="mt-7 space-y-8">
        {focusSections.map((section) => (
          <div key={section.title}>
            <div className="mb-4">
              <h3 className="font-display text-3xl font-semibold text-navy">{section.title}</h3>
              <p className="mt-2 max-w-3xl text-sm leading-7 text-muted">{section.summary}</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {section.resourceIds
                .map((id) => resourceMap.get(id))
                .filter((resource): resource is CatholicNewsResource => Boolean(resource))
                .map((resource) => (
                  <NewsResourceCard
                    key={`${section.title}-${resource.id}`}
                    resource={resource}
                    section={section.title.toLowerCase().replaceAll(" ", "-")}
                    compact
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
