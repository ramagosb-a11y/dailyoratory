import { virtueDefinitions } from "@/data/virtueTracker";

const familyLabels = {
  theological: "Theological virtues",
  cardinal: "Cardinal virtues",
  contrary: "Contrary virtues",
} as const;

export function VirtueLibraryView() {
  return (
    <div className="grid gap-8">
      {(["theological", "cardinal", "contrary"] as const).map((family) => {
        const virtues = virtueDefinitions.filter((virtue) => virtue.family === family);

        return (
          <section key={family}>
            <h2 className="font-display text-4xl font-semibold text-navy">{familyLabels[family]}</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {virtues.map((virtue) => (
                <article key={virtue.id} className="card resource-card p-5">
                  <p className="text-xs font-bold uppercase text-burgundy">{familyLabels[family]}</p>
                  <h3 className="font-display mt-2 text-3xl font-semibold leading-tight text-navy">{virtue.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{virtue.description}</p>
                  <p className="mt-4 rounded-md border border-stone bg-parchment p-3 text-sm font-semibold leading-7 text-navy">
                    {virtue.shortPrayer}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-navy/80">{virtue.reflectionPrompt}</p>
                </article>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
