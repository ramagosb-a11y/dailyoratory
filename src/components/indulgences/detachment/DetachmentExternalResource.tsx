import { ExternalSourceLink, IndulgenceSection } from "@/components/indulgences/helpers";

export function DetachmentExternalResource() {
  return (
    <IndulgenceSection
      id="helpful-reference"
      eyebrow="External reference"
      title="Helpful Reference"
      summary="This outside resource is offered for further reading, while Daily Oratory keeps the teaching here in original pastoral language."
    >
      <article className="card-parchment p-6 sm:p-8">
        <h3 className="font-display text-3xl font-semibold text-navy">Brotherhood of Ascension: Detachment from Sin</h3>
        <p className="daily-readable mt-4 text-base leading-8 text-muted">
          A helpful reference on detachment from sin, spiritual growth, virtue, the sacraments, and plenary
          indulgences.
        </p>
        <p className="daily-readable-muted mt-4 text-sm leading-7 text-muted">
          This is provided as an external reference. Daily Oratory summarizes the topic in original pastoral
          language and does not reproduce long external text.
        </p>
        <div className="mt-6">
          <ExternalSourceLink
            href="https://www.brotherhoodofascension.com/prayers/plenary-indulgences/detachment-from-sin"
            label="Open the Brotherhood of Ascension reference"
          />
        </div>
      </article>
    </IndulgenceSection>
  );
}
