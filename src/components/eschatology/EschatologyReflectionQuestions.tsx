const questions = [
  "Am I living today in the light of eternity?",
  "What would I change if I remembered more often that my choices matter forever?",
  "Do I prepare for death with faith or avoid thinking about it?",
  "Do I trust the mercy and justice of Jesus?",
  "How can I grow in hope for Heaven?",
  "Whom should I pray for among the faithful departed?",
  "What sin, attachment, or fear needs to be surrendered?",
  "How is Christ calling me to live more faithfully now?",
] as const;

export function EschatologyReflectionQuestions() {
  return (
    <section className="card-parchment p-6 sm:p-8">
      <h2 className="font-display text-4xl font-semibold text-navy">Reflection Questions</h2>
      <ul className="daily-card-readable mt-5 list-disc space-y-3 pl-5 text-base leading-7 text-muted">
        {questions.map((question) => (
          <li key={question}>{question}</li>
        ))}
      </ul>
    </section>
  );
}
