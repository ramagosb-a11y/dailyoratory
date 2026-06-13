import { getIndulgenceFaqs } from "@/lib/indulgences";
import { IndulgenceSection } from "@/components/indulgences/helpers";

export function IndulgenceFAQ() {
  const faqs = getIndulgenceFaqs();

  return (
    <IndulgenceSection
      id="faq"
      eyebrow="FAQ"
      title="Common misunderstandings"
      summary="Short answers, faithful to Catholic teaching, with a pastoral tone."
    >
      <div className="grid gap-3">
        {faqs.map((faq) => (
          <details key={faq.id} className="card group p-5">
            <summary className="cursor-pointer list-none text-base font-semibold leading-7 text-navy">
              {faq.question}
            </summary>
            <p className="daily-question-readable mt-3">{faq.answer}</p>
          </details>
        ))}
      </div>
    </IndulgenceSection>
  );
}
