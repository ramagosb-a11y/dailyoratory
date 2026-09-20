import { bibleBookAnchorId, bibleBookInvitations, bibleBookOrientationByTitle, bibleCollectionForBook, bibleCollectionReadingGuides, bibleCollections } from "@/data/biblePage";
import { BibleCardGrid, BibleSection } from "@/components/bible/BibleUi";

export function BibleBookInvitations() {
  return (
    <BibleSection
      eyebrow="Choose a doorway · all 73 books"
      title="The Catholic Bible, Book by Book"
      summary="Every book has its own setting and style. Choose a doorway, start with one chapter, and use a trusted edition's notes when you need context."
    >
      <div className="space-y-14">
        {bibleCollections.map((collection) => {
          const books = bibleBookInvitations.filter((book) => bibleCollectionForBook[book.title]?.id === collection.id);

          return (
            <section key={collection.id} id={`collection-${collection.id}`} className="scroll-mt-28" aria-labelledby={`${collection.id}-heading`}>
              <div className="mb-6 border-l-2 border-gold pl-4 sm:pl-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">
                  {books.length} {books.length === 1 ? "book" : "books"}
                </p>
                <h3 id={`${collection.id}-heading`} className="font-display mt-2 text-3xl font-semibold leading-tight text-navy sm:text-4xl">
                  {collection.title}
                </h3>
                <p className="mt-2 max-w-3xl text-sm leading-7 text-muted">{collection.description}</p>
              </div>

              <BibleCardGrid columns="lg:grid-cols-2">
                {books.map((book) => {
                  const index = bibleBookInvitations.indexOf(book);
                  const relatedBooks = collection.books.filter((title) => title !== book.title).slice(0, 3);
                  const officialIntroductionHref = book.href.replace(/\/\d+$/, "/0");
                  const orientation = bibleBookOrientationByTitle[book.title];
                  const readingGuide = bibleCollectionReadingGuides[collection.id];

                  return (
                    <article
                      key={book.title}
                      id={bibleBookAnchorId(book.title)}
                      className="group relative scroll-mt-28 overflow-hidden rounded-[1.25rem] border border-stone bg-[linear-gradient(135deg,rgba(255,253,247,0.98),rgba(247,238,220,0.9))] p-6 shadow-[0_10px_24px_rgba(83,61,29,0.08)] transition duration-200 hover:-translate-y-1 hover:border-gold/70 hover:shadow-[0_18px_38px_rgba(83,61,29,0.14)] sm:p-7"
                    >
                      <span aria-hidden="true" className="font-display absolute right-5 top-3 text-5xl leading-none text-gold/20">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">{collection.title}</p>
                      <h4 className="font-display mt-3 text-3xl font-semibold leading-tight text-navy">{book.title}</h4>
                      <div className="mt-5 h-px w-14 bg-gold/70" />
                      <p className="mt-5 text-base leading-7 text-muted">
                        <span className="font-semibold text-navy">You&apos;ll encounter:</span> {book.encounter}
                      </p>
                      <p className="mt-4 text-sm leading-7 text-muted">
                        <span className="font-semibold text-navy">Begin here if:</span> {book.beginHere}
                      </p>
                      <a
                        href={book.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="focus-ring mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-navy underline-offset-4 hover:text-burgundy hover:underline"
                      >
                        {book.linkLabel} <span aria-hidden="true">↗</span>
                        <span className="sr-only"> (opens USCCB Bible in a new tab)</span>
                      </a>

                      <details className="mt-5 border-t border-stone/80 pt-4">
                        <summary aria-label={`Before you begin ${book.title}`} className="focus-ring min-h-11 cursor-pointer content-center text-sm font-semibold text-navy marker:text-gold hover:text-burgundy">
                          Before you begin
                        </summary>
                        <div className="mt-4 space-y-4 text-sm leading-7 text-muted">
                          <div>
                            <p className="font-semibold text-navy">The big question</p>
                            <p>{orientation.bigQuestion}</p>
                          </div>
                          <div>
                            <p className="font-semibold text-navy">Where it sits in the story</p>
                            <p>{readingGuide.storyPlacement}</p>
                          </div>
                          <div>
                            <p className="font-semibold text-navy">Kind of writing</p>
                            <p>{collection.genre}</p>
                          </div>
                          <div>
                            <p className="font-semibold text-navy">Time and setting</p>
                            <p>{collection.timeAndSetting}</p>
                          </div>
                          <div>
                            <p className="font-semibold text-navy">Key people and places</p>
                            <p>{orientation.keyPeopleAndPlaces}</p>
                          </div>
                          <div>
                            <p className="font-semibold text-navy">How the book unfolds</p>
                            <p>{readingGuide.shape}</p>
                          </div>
                          <div>
                            <p className="font-semibold text-navy">What to notice</p>
                            <p>{readingGuide.notice}</p>
                          </div>
                          <div>
                            <p className="font-semibold text-navy">A gentle first visit</p>
                            <p>{readingGuide.firstVisit}</p>
                          </div>
                          {readingGuide.care ? (
                            <div>
                              <p className="font-semibold text-navy">Read with care</p>
                              <p>{readingGuide.care}</p>
                            </div>
                          ) : null}
                          {relatedBooks.length ? (
                            <div>
                              <p className="font-semibold text-navy">Read alongside</p>
                              <p className="mt-1 flex flex-wrap gap-x-3 gap-y-1">
                                {relatedBooks.map((title) => (
                                  <a key={title} href={`#${bibleBookAnchorId(title)}`} className="focus-ring font-semibold text-navy underline-offset-4 hover:text-burgundy hover:underline">
                                    {title}
                                  </a>
                                ))}
                              </p>
                            </div>
                          ) : null}
                          <a
                            href={officialIntroductionHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="focus-ring inline-flex min-h-11 items-center font-semibold text-navy underline-offset-4 hover:text-burgundy hover:underline"
                          >
                            Read the USCCB introduction <span aria-hidden="true">↗</span>
                            <span className="sr-only"> (opens USCCB Bible in a new tab)</span>
                          </a>
                        </div>
                      </details>
                    </article>
                  );
                })}
              </BibleCardGrid>
            </section>
          );
        })}
      </div>
    </BibleSection>
  );
}
