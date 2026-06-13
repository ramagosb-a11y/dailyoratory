import { addForLentIdeas } from "@/data/lent";

export function AddForLent() {
  return (
    <section>
      <h2 className="font-display text-4xl font-semibold text-navy">What Should I Add for Lent?</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {addForLentIdeas.map((idea) => (
          <article key={idea.id} className="card-parchment p-5">
            <h3 className="font-display text-2xl font-semibold text-navy">{idea.title}</h3>
            <p className="daily-card-readable mt-3 text-base leading-7 text-muted">{idea.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

