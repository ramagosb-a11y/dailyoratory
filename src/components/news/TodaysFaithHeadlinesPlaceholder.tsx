import { SectionHeader } from "@/components/section-header";

export function TodaysFaithHeadlinesPlaceholder() {
  return (
    <section>
      <SectionHeader
        eyebrow="Today's faith headlines"
        title="Curated Catholic news links can live here later."
        summary="For now, Daily Oratory does not scrape or republish live headlines from external news sites."
      />
      <div className="mt-7 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
        <article className="card-parchment liturgical-card-accent p-5">
          <h3 className="font-display text-2xl font-semibold text-navy">Static and careful for now</h3>
          <p className="mt-3 text-sm leading-7 text-muted">
            Future feature: curated Catholic news links selected by the Daily Oratory editor.
            If live headlines are added later, they should come only from feeds or APIs that permit
            reuse, show headlines only, link back to the original source, respect source terms, and
            remain open to manual moderation.
          </p>
        </article>
        <article className="card-parchment p-5">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Why this matters</p>
          <p className="mt-3 text-sm leading-7 text-muted">
            The goal is not to turn Daily Oratory into a noisy feed. It is to offer a peaceful place
            where news can be encountered with prayer, verified carefully, and brought back to God.
          </p>
        </article>
      </div>
    </section>
  );
}
