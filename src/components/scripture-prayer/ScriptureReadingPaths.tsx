import type { ScriptureReadingPath } from "@/types/scripturePrayer";

export function ScriptureReadingPaths({ paths }: { paths: ScriptureReadingPath[] }) {
  return (
    <section>
      <div>
        <p className="text-xs font-bold uppercase text-burgundy">Start here</p>
        <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
          Scripture reading paths
        </h2>
      </div>
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {paths.map((path) => (
          <article key={path.id} className="card p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="season-pill">{path.liturgicalSeason}</span>
              <span className="season-pill">{path.bestFor}</span>
            </div>
            <h3 className="font-display mt-4 text-3xl font-semibold text-navy">{path.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{path.description}</p>
            <p className="mt-4 text-sm font-semibold text-burgundy">Suggested books: {path.suggestedBooks.join(", ")}</p>
            <p className="mt-2 text-sm leading-7 text-muted">Try: {path.suggestedReferences.join(" • ")}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
