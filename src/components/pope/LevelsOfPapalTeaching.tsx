import { SectionHeader } from "@/components/section-header";
import { getPapalDocumentTypes } from "@/lib/pope";

export function LevelsOfPapalTeaching() {
  const types = getPapalDocumentTypes();

  return (
    <section>
      <SectionHeader
        eyebrow="Reading guidance"
        title="How to Read Papal Teaching"
        summary="Read the document type, audience, context, and purpose before interpreting a papal text."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {types.map((type) => (
          <article key={type.id} className="card-parchment p-5">
            <h3 className="font-display text-2xl font-semibold text-navy">{type.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{type.description}</p>
            <p className="mt-3 text-sm leading-7 text-muted">
              <span className="font-semibold text-navy">Why it matters:</span> {type.authorityNote}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
