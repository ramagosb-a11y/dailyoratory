import { TrackedLink } from "@/components/analytics/TrackedLink";
import { bibleBookAnchorId, bibleCollections } from "@/data/biblePage";
import { BibleCard, BibleCardGrid, BibleSection } from "@/components/bible/BibleUi";

export function BooksOfBibleOverview() {
  return (
    <BibleSection
      id="books-of-the-bible"
      className="rounded-[2rem] border border-gold/25 bg-[linear-gradient(145deg,rgba(246,235,214,0.7),rgba(255,253,247,0.78))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] sm:p-8 lg:p-10"
      eyebrow="Overview"
      title="Find Your Place in the Bible"
      summary="The Bible is a library of writings in different forms. Choose a collection to see its purpose, setting, and every book it contains."
    >
      <p className="max-w-4xl text-sm leading-7 text-muted">
        This map follows the Catholic canon. Books, names, order, and contents can differ among Jewish and Christian traditions and between editions; use the table of contents in your own edition as your guide.
      </p>
      <BibleCardGrid columns="mt-6 md:grid-cols-2 xl:grid-cols-3">
        {bibleCollections.map((collection) => (
          <BibleCard key={collection.id} title={collection.title} description={collection.description} className="bg-ivory/95 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-burgundy">
              {collection.books.length} {collection.books.length === 1 ? "book" : "books"}
            </p>
            <p className="mt-3 text-sm leading-7 text-muted">{collection.genre}</p>
            <div className="mt-4 flex flex-wrap gap-x-3 gap-y-2">
              {collection.books.map((book) => (
                <a
                  key={book}
                  href={`#${bibleBookAnchorId(book)}`}
                  className="focus-ring text-sm font-semibold text-navy underline-offset-4 hover:text-burgundy hover:underline"
                >
                  {book}
                </a>
              ))}
            </div>
            <a href={`#collection-${collection.id}`} className="focus-ring mt-5 inline-flex min-h-11 items-center text-sm font-semibold text-navy underline-offset-4 hover:text-burgundy hover:underline">
              Explore {collection.title} <span aria-hidden="true">↓</span>
            </a>
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
          Catholic Books of the Bible (USCCB)
        </TrackedLink>
      </div>
    </BibleSection>
  );
}
