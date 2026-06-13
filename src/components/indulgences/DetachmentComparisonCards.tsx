import { detachmentIsItems, detachmentIsNotItems } from "@/data/indulgenceDetachment";
import { IndulgenceSection } from "@/components/indulgences/helpers";

export function DetachmentComparisonCards() {
  return (
    <IndulgenceSection
      id="what-detachment-is"
      eyebrow="Clarifying the condition"
      title="What detachment is and is not"
      summary="This condition is easier to approach when we know what the Church is and is not asking."
    >
      <div className="grid gap-4 md:grid-cols-2">
        <article className="card p-6">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Detachment from sin is...</p>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
            {detachmentIsItems.map((item) => (
              <li key={item}>
                <span className="font-semibold text-navy">&middot; </span>
                {item}
              </li>
            ))}
          </ul>
        </article>
        <article className="card p-6">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Detachment from sin is not...</p>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
            {detachmentIsNotItems.map((item) => (
              <li key={item}>
                <span className="font-semibold text-navy">&middot; </span>
                {item}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </IndulgenceSection>
  );
}
