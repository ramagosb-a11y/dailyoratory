import { TrackedLink } from "@/components/analytics/TrackedLink";
import { booksOfBibleOverview } from "@/data/biblePage";
import { BibleCard, BibleCardGrid, BibleSection } from "@/components/bible/BibleUi";

export function BooksOfBibleOverview() {
  return (
    <BibleSection
      eyebrow="Overview"
      title="The Books of the Bible"
      summary="A high-level Catholic map of the Bible's main collections so new readers can begin with confidence."
    >
      <BibleCardGrid columns="md:grid-cols-2">
        {booksOfBibleOverview.map((group) => (
          <BibleCard key={group.title} title={group.title}>
            <ul className="space-y-2 text-sm leading-7 text-muted">
              {group.entries.map((entry) => (
                <li key={entry}>{entry}</li>
              ))}
            </ul>
          </BibleCard>
        ))}
      </BibleCardGrid>
      <div className="mt-6">
        <TrackedLink
          href="https://www.usccb.org/bible/books-of-the-bible"
          external
          className="btn btn-secondary focus-ring justify-center"
          eventName="bible_resource_click"
          eventParams={{
            category: "overview",
            item_slug: "usccb-books-of-the-bible",
            source: "/bible",
            destination: "https://www.usccb.org/bible/books-of-the-bible",
          }}
        >
          USCCB Books of the Bible
        </TrackedLink>
      </div>
    </BibleSection>
  );
}
