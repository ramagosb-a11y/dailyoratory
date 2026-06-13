import { getDailyExamenFaqs } from "@/lib/dailyExamen";
import { ExamenSection } from "@/components/daily-examen/DailyExamenUi";

export function DailyExamenFAQ() {
  const faqs = getDailyExamenFaqs();

  return (
    <ExamenSection
      eyebrow="Common questions"
      title="Common Questions"
      summary="Short answers for beginners, returning Catholics, families, and anyone learning the Examen."
    >
      <div className="grid gap-4">
        {faqs.map((faq) => (
          <details key={faq.id} className="card-parchment group p-5">
            <summary className="cursor-pointer list-none text-lg font-semibold text-navy">{faq.question}</summary>
            <p className="daily-question-readable mt-3">{faq.answer}</p>
          </details>
        ))}
      </div>
    </ExamenSection>
  );
}
