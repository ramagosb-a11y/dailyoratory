import type { ChurchFather } from "@/types/churchFathers";

export function FatherOfTheWeek({ father }: { father?: ChurchFather }) {
  if (!father) return null;

  return (
    <section className="rounded-md border border-stone bg-parchment px-6 py-8 shadow-soft sm:px-8">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">Father of the week</p>
      <h2 className="font-display mt-3 text-4xl font-semibold text-navy sm:text-5xl">{father.name}</h2>
      <p className="mt-2 text-sm font-semibold uppercase tracking-normal text-burgundy">
        Theme: {father.keyThemes.slice(0, 2).join(" and ")}
      </p>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">{father.shortDescription}</p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <article className="card bg-ivory p-4">
          <p className="text-xs font-bold uppercase text-burgundy">Read</p>
          <p className="mt-2 text-sm leading-7 text-navy">{father.recommendedStartingWork}</p>
        </article>
        <article className="card bg-ivory p-4">
          <p className="text-xs font-bold uppercase text-burgundy">Practice</p>
          <p className="mt-2 text-sm leading-7 text-navy">
            Pray for unity in the Church and ask for one concrete grace related to {father.keyThemes[0]?.toLowerCase()}.
          </p>
        </article>
        <article className="card bg-ivory p-4">
          <p className="text-xs font-bold uppercase text-burgundy">Research</p>
          {father.externalLinks[0] ? (
            <a
              href={father.externalLinks[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring mt-2 inline-flex rounded-sm text-sm font-semibold text-link"
            >
              {father.externalLinks[0].label}
            </a>
          ) : (
            <p className="mt-2 text-sm leading-7 text-navy">External research source coming soon.</p>
          )}
        </article>
      </div>
    </section>
  );
}
