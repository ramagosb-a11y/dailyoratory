import { TrackedLink } from "@/components/analytics/TrackedLink";
import { BibleCard, BibleCardGrid, BibleSection } from "@/components/bible/BibleUi";
import { getBibleFaqs, getBibleResources } from "@/lib/bible";
import { BibleResourceSourceType } from "@/types/bible";

export function BibleResources() {
  const resources = getBibleResources();
  const faqs = getBibleFaqs();

  return (
    <BibleSection
      eyebrow="Official and helpful"
      title="Bible Resources and Links"
      summary="Daily Oratory links to official Church sources for full texts, daily readings, approved translations, and trusted Catholic starting points."
    >
      <BibleCardGrid>
        {resources.map((resource) => (
          <BibleCard
            key={resource.id}
            title={resource.title}
            description={resource.description}
            meta={resource.badge}
          >
            <p className="text-sm leading-7 text-muted">
              {resource.sourceType === BibleResourceSourceType.DailyOratory
                ? "Daily Oratory resource"
                : "External source"}
              {resource.official ? " | Official Church source" : ""}
            </p>
            <div className="mt-4">
              {resource.url.startsWith("http") ? (
                <TrackedLink
                  href={resource.url}
                  external
                  className="btn btn-secondary focus-ring justify-center"
                  eventName="bible_resource_click"
                  eventParams={{
                    category: "resources",
                    item_slug: resource.id,
                    source: "/bible",
                    destination: resource.url,
                  }}
                >
                  Open Resource
                </TrackedLink>
              ) : (
                <TrackedLink
                  href={resource.url}
                  className="btn btn-secondary focus-ring justify-center"
                  eventName="bible_resource_click"
                  eventParams={{
                    category: "resources",
                    item_slug: resource.id,
                    source: "/bible",
                    destination: resource.url,
                  }}
                >
                  Open Resource
                </TrackedLink>
              )}
            </div>
          </BibleCard>
        ))}
      </BibleCardGrid>

      <div className="mt-10">
        <h3 className="font-display text-3xl font-semibold text-navy">Common Questions</h3>
        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {faqs.map((faq) => (
            <BibleCard key={faq.id} title={faq.question} description={faq.answer} meta={faq.category} />
          ))}
        </div>
      </div>
    </BibleSection>
  );
}
