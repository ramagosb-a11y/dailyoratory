import { detachmentFaqs } from "@/data/detachmentFromSin";
import { IndulgenceSection } from "@/components/indulgences/helpers";

export function DetachmentFAQ() {
  return (
    <IndulgenceSection
      id="common-questions"
      eyebrow="Pastoral answers"
      title="Common Questions"
      summary="These answers are meant to keep the soul close to mercy, humility, and priestly guidance."
    >
      <div className="grid gap-4">
        {detachmentFaqs.map((item) => (
          <article key={item.id} className="card-parchment p-6 sm:p-8">
            <h3 className="font-display text-2xl font-semibold text-navy">{item.question}</h3>
            <p className="daily-readable mt-4 text-base leading-8 text-muted">{item.answer}</p>
          </article>
        ))}
      </div>
    </IndulgenceSection>
  );
}
