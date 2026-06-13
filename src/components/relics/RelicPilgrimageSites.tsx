import { SectionHeader } from "@/components/section-header";
import { getRelicSites } from "@/lib/relics";
import { ExternalAnchor } from "@/components/relics/shared";

export function RelicPilgrimageSites() {
  const sites = getRelicSites();

  return (
    <section>
      <SectionHeader
        eyebrow="Pilgrimage"
        title="Places Associated with Relics and Saints"
        summary="These are pilgrimage-style resources, not endorsements of every devotional claim connected with a site."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {sites.map((site) => (
          <article key={site.id} className="card-parchment p-5">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">{site.location}</p>
            <h3 className="mt-2 font-display text-2xl font-semibold text-navy">{site.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{site.description}</p>
            <p className="mt-4 text-sm leading-7 text-muted">
              <span className="font-semibold text-navy">Focus:</span> {site.saintOrRelicFocus}
            </p>
            {site.url !== "#" ? (
              <ExternalAnchor href={site.url} className="btn btn-secondary focus-ring mt-5 inline-flex justify-center">
                Visit Site
              </ExternalAnchor>
            ) : (
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-burgundy">Add approved local source</p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
