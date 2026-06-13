import { deuterocanonicalBooks } from "@/data/biblePage";
import { BibleLinkPills, BibleSection } from "@/components/bible/BibleUi";

export function DeuterocanonicalBooks() {
  return (
    <BibleSection
      eyebrow="Catholic canon"
      title="Why Catholic Bibles Have More Books"
      summary="Catholic Bibles include the deuterocanonical books of the Old Testament, which are received in Catholic tradition and used in Catholic teaching and liturgy."
    >
      <div className="card-parchment p-6">
        <div className="flex flex-wrap gap-2">
          {deuterocanonicalBooks.map((book) => (
            <span
              key={book}
              className="rounded-full border border-gold/30 bg-ivory px-3 py-2 text-sm font-semibold text-navy"
            >
              {book}
            </span>
          ))}
        </div>
        <p className="mt-5 text-sm leading-7 text-muted">
          This is a Catholic point of clarity, not a debate club issue. Daily Oratory approaches the topic as a guide for people who want to understand why Catholic Bibles look different and how the Church receives these books.
        </p>
        <div className="mt-5">
          <BibleLinkPills
            links={[
              { label: "Sacred Tradition", href: "/tradition" },
              { label: "Catechism", href: "/catechism" },
              { label: "Explore the Catholic Faith", href: "/explore" },
            ]}
          />
        </div>
      </div>
    </BibleSection>
  );
}
