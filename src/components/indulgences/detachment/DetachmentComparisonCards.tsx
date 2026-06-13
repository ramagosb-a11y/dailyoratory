import { detachmentComparisonItems } from "@/data/detachmentFromSin";
import { IndulgenceSection } from "@/components/indulgences/helpers";

export function DetachmentComparisonCards() {
  const positive = detachmentComparisonItems.filter((item) => item.type === "is");
  const negative = detachmentComparisonItems.filter((item) => item.type === "is-not");

  return (
    <IndulgenceSection
      id="detachment-is-and-is-not"
      eyebrow="Clarity without anxiety"
      title="Detachment Is and Is Not"
      summary="This condition becomes more peaceful when we know what the Church is and is not asking of the soul."
    >
      <div className="grid gap-5 md:grid-cols-2">
        <article className="card-parchment p-6 sm:p-8">
          <h3 className="font-display text-3xl font-semibold text-navy">Detachment from sin is...</h3>
          <ul className="daily-card-readable mt-5 list-disc space-y-3 pl-5 text-base leading-7 text-muted">
            {positive.map((item) => (
              <li key={item.id}>{item.text}</li>
            ))}
          </ul>
        </article>
        <article className="card-parchment p-6 sm:p-8">
          <h3 className="font-display text-3xl font-semibold text-navy">Detachment from sin is not...</h3>
          <ul className="daily-card-readable mt-5 list-disc space-y-3 pl-5 text-base leading-7 text-muted">
            {negative.map((item) => (
              <li key={item.id}>{item.text}</li>
            ))}
          </ul>
        </article>
      </div>
    </IndulgenceSection>
  );
}
