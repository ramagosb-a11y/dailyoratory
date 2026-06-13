import { penitentialPsalmReflectionQuestions } from "@/data/sevenPenitentialPsalms";

export function PenitentialPsalmReflectionQuestions() {
  return (
    <section className="card-parchment p-6 sm:p-8">
      <h2 className="font-display text-4xl font-semibold text-navy">Reflection Questions</h2>
      <ul className="daily-card-readable mt-5 list-disc space-y-3 pl-5 text-base leading-7 text-muted">
        {penitentialPsalmReflectionQuestions.map((question) => (
          <li key={question}>{question}</li>
        ))}
      </ul>
    </section>
  );
}
