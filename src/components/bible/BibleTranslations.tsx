import { TrackedLink } from "@/components/analytics/TrackedLink";
import { getBibleTranslations } from "@/lib/bible";
import { BibleCard, BibleCardGrid, BibleSection } from "@/components/bible/BibleUi";

export function BibleTranslations() {
  const translations = getBibleTranslations();

  return (
    <BibleSection
      id="translations"
      eyebrow="Translations"
      title="Catholic Bible Translations"
      summary="Catholics should use Bible translations that include all the books of the Catholic Bible and are approved for Catholic use. Different translations serve different purposes: liturgy, study, prayer, readability, or academic comparison."
    >
      <BibleCardGrid>
        {translations.map((translation) => (
          <BibleCard
            key={translation.id}
            title={`${translation.title} — ${translation.abbreviation}`}
            description={translation.description}
            note={`Use: ${translation.bestFor}`}
            meta={translation.readingLevel}
          >
            <p className="text-sm leading-7 text-muted">{translation.catholicApprovedNote}</p>
            <p className="mt-3 text-sm leading-7 text-muted">{translation.regionNote}</p>
          </BibleCard>
        ))}
      </BibleCardGrid>
      <div className="card mt-5 p-5">
        <p className="text-sm leading-7 text-muted">
          Approved translations and liturgical translations can vary by country. Check your bishops&apos; conference for your region before assuming that one edition serves every place in the same way.
        </p>
        <div className="mt-5">
          <TrackedLink
            href="https://www.usccb.org/offices/new-american-bible/approved-translations-bible"
            external
            className="btn btn-secondary focus-ring justify-center"
            eventName="bible_resource_click"
            eventParams={{
              category: "translations",
              item_slug: "usccb-approved-translations",
              source: "/bible",
              destination: "https://www.usccb.org/offices/new-american-bible/approved-translations-bible",
            }}
          >
            USCCB Approved Translations
          </TrackedLink>
        </div>
      </div>
    </BibleSection>
  );
}
