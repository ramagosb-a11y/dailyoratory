import type { Sacrament } from "@/types/sacraments";

export function SacramentCommonQuestions({ sacrament }: { sacrament: Sacrament }) {
  return (
    <section className="grid gap-5 lg:grid-cols-2">
      <article className="card-parchment p-6">
        <h2 className="font-display text-3xl font-semibold text-navy">Common questions</h2>
        <div className="mt-4 grid gap-4">
          {sacrament.commonQuestions.map((item) => (
            <div key={item.question}>
              <h3 className="font-semibold text-navy">{item.question}</h3>
              <p className="mt-2 text-sm leading-7 text-muted">{item.answer}</p>
            </div>
          ))}
        </div>
      </article>
      <article className="card-parchment p-6">
        <h2 className="font-display text-3xl font-semibold text-navy">Common misunderstandings</h2>
        <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
          {sacrament.commonMisunderstandings.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>
    </section>
  );
}
