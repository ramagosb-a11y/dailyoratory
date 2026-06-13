import type { ScriptureResource } from "@/types/scripturePrayer";

export function ScriptureResources({ resources }: { resources: ScriptureResource[] }) {
  return (
    <section>
      <div>
        <p className="text-xs font-bold uppercase text-burgundy">Where to read Scripture</p>
        <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
          Where to read the Bible online
        </h2>
      </div>
      <div className="mt-7 grid gap-4 md:grid-cols-2">
        {resources.map((resource) => (
          <article key={resource.id} className="card p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="season-pill">{resource.sourceName}</span>
              {resource.official ? <span className="season-pill">Official USCCB link</span> : null}
            </div>
            <h3 className="font-display mt-4 text-3xl font-semibold text-navy">{resource.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{resource.description}</p>
            <a href={resource.url} target="_blank" rel="noopener noreferrer" className="focus-ring mt-5 inline-flex rounded-sm text-sm font-semibold text-link">
              Open external source
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
