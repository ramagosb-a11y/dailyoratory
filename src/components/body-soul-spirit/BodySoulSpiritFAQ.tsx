import { getBodySoulSpiritFaqs } from "@/lib/bodySoulSpirit";
import { BodySoulSpiritSection } from "@/components/body-soul-spirit/BodySoulSpiritUi";

export function BodySoulSpiritFAQ() {
  const faqs = getBodySoulSpiritFaqs();

  return (
    <BodySoulSpiritSection
      eyebrow="Common questions"
      title="Common Questions"
      summary="Short, pastoral answers about body, soul, spirit, grace, sin, Confession, and the interior life."
    >
      <div className="grid gap-4">
        {faqs.map((faq) => (
          <details key={faq.id} className="card-parchment group p-5">
            <summary className="cursor-pointer list-none text-lg font-semibold text-navy">
              {faq.question}
            </summary>
            <p className="daily-question-readable mt-3">{faq.answer}</p>
          </details>
        ))}
      </div>
    </BodySoulSpiritSection>
  );
}
