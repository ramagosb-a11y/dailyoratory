import { eschatologyCatechismReferences, eschatologyScriptureReferences } from "@/data/eschatology";
import { TrackedLink } from "@/components/analytics/TrackedLink";

export function EschatologyScriptureSection() {
  return (
    <section className="grid gap-6 xl:grid-cols-[1fr_1fr]">
      <article className="card-parchment p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">Scripture for Hope and Eternity</h2>
        <div className="mt-5 grid gap-4">
          {eschatologyScriptureReferences.map((reference) => (
            <TrackedLink
              key={reference.id}
              href={reference.usccbUrl}
              external
              className="focus-ring rounded-2xl border border-stone bg-ivory/80 p-4 transition hover:border-gold"
            >
              <span className="block font-semibold text-navy">{reference.reference}</span>
              <span className="daily-card-readable mt-2 block text-sm leading-7 text-muted">{reference.description}</span>
            </TrackedLink>
          ))}
        </div>
      </article>
      <article className="card-parchment p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">Catechism References</h2>
        <div className="mt-5 grid gap-4">
          {eschatologyCatechismReferences.map((reference) => (
            <TrackedLink
              key={reference.id}
              href={reference.url}
              external
              className="focus-ring rounded-2xl border border-stone bg-ivory/80 p-4 transition hover:border-gold"
            >
              <span className="block font-semibold text-navy">{reference.reference}: {reference.title}</span>
              <span className="daily-card-readable mt-2 block text-sm leading-7 text-muted">{reference.description}</span>
            </TrackedLink>
          ))}
        </div>
      </article>
    </section>
  );
}
