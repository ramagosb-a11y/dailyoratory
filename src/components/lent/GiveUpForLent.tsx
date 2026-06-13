import { giveUpIdeas } from "@/data/lent";

export function GiveUpForLent() {
  const categories = ["Comfort", "Noise", "Sin patterns"] as const;

  return (
    <section>
      <h2 className="font-display text-4xl font-semibold text-navy">What Should I Give Up for Lent?</h2>
      <p className="daily-readable mt-5 max-w-4xl text-base leading-8 text-muted">
        A good Lenten sacrifice should help you love God and neighbor more freely. It should be concrete, realistic, healthy, and connected to conversion.
      </p>
      <div className="mt-6 grid gap-5 lg:grid-cols-3">
        {categories.map((category) => (
          <article key={category} className="card-parchment p-6 sm:p-8">
            <h3 className="font-display text-3xl font-semibold text-navy">{category}</h3>
            <ul className="daily-card-readable mt-4 list-disc space-y-2 pl-5 text-base leading-7 text-muted">
              {giveUpIdeas
                .filter((item) => item.category === category)
                .map((item) => (
                  <li key={item.id}>{item.title}</li>
                ))}
            </ul>
          </article>
        ))}
      </div>
      <div className="mt-6 rounded-3xl border border-gold/40 bg-cream/80 p-5">
        <p className="daily-readable text-base leading-7 text-muted">
          Do not only give something up. Replace it with prayer, virtue, charity, or service.
        </p>
      </div>
    </section>
  );
}

