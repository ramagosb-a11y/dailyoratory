import { TrackedLink } from "@/components/analytics/TrackedLink";
import { SectionHeader } from "@/components/section-header";
import { getFeaturedPapalDocuments } from "@/lib/pope";

export function FeaturedPapalDocuments() {
  const documents = getFeaturedPapalDocuments();

  return (
    <section>
      <SectionHeader
        eyebrow="Start here"
        title="Papal Documents to Know"
        summary="This list is a starting point, not a complete ranking of papal documents."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {documents.map((document) => (
          <article key={document.id} className="card-parchment liturgical-card-accent p-5">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">{document.documentType.replace(/-/g, " ")}</p>
            <h3 className="font-display mt-2 text-2xl font-semibold text-navy">{document.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">
              <span className="font-semibold text-navy">Theme:</span> {document.theme}
            </p>
            <p className="mt-3 text-sm leading-7 text-muted">{document.shortDescription}</p>
            <p className="mt-3 text-sm leading-7 text-muted">
              <span className="font-semibold text-navy">Helpful for:</span> {document.recommendedFor}
            </p>
            <TrackedLink
              href={document.officialUrl}
              external
              className="btn btn-secondary focus-ring mt-5 justify-center"
              eventName="papal_document_click"
              eventParams={{ document_title: document.title, resource_url: document.officialUrl, page_path: "/pope", section: "featured-papal-documents" }}
            >
              Read Official Vatican Text
            </TrackedLink>
          </article>
        ))}
      </div>
    </section>
  );
}
