import { SectionHeader } from "@/components/section-header";
import { getOciaFaqs } from "@/lib/ocia";

export function OciaFAQ() {
  const faqs = getOciaFaqs();

  return (
    <section>
      <SectionHeader
        eyebrow="FAQ"
        title="Common Questions"
        summary="Short, pastoral answers for people who are curious, cautious, returning, or ready to take a first step."
      />
      <div className="mt-7 grid gap-4">
        {faqs.map((faq) => (
          <details key={faq.id} className="card-parchment p-5">
            <summary className="cursor-pointer list-none text-lg font-semibold text-navy">
              {faq.question}
            </summary>
            <p className="daily-question-readable mt-3">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
