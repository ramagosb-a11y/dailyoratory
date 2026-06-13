import { TrackedLink } from "@/components/analytics/TrackedLink";
import { bibleAtMassCards } from "@/data/biblePage";
import { BibleCard, BibleCardGrid, BibleSection } from "@/components/bible/BibleUi";

export function BibleAtMass() {
  return (
    <BibleSection
      eyebrow="Word and worship"
      title="The Bible at Mass"
      summary="The Mass is filled with Scripture. Catholics hear the Old Testament, Psalms, New Testament letters, the Gospel, biblical prayers, and biblical language throughout the liturgy."
    >
      <BibleCardGrid>
        {bibleAtMassCards.map((card) => (
          <BibleCard key={card.title} title={card.title} description={card.description} />
        ))}
      </BibleCardGrid>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <TrackedLink href="/reflections/mass-readings" className="btn btn-primary focus-ring justify-center">
          Mass Readings Reflections
        </TrackedLink>
        <TrackedLink
          href="https://bible.usccb.org/daily-bible-reading"
          external
          className="btn btn-secondary focus-ring justify-center"
          eventName="bible_resource_click"
          eventParams={{
            category: "mass",
            item_slug: "usccb-daily-bible-reading",
            source: "/bible",
            destination: "https://bible.usccb.org/daily-bible-reading",
          }}
        >
          Today&apos;s USCCB Readings
        </TrackedLink>
      </div>
    </BibleSection>
  );
}
