import { getHelpfulIndulgenceGuides, getOfficialIndulgenceResources } from "@/lib/indulgences";
import { IndulgenceSection } from "@/components/indulgences/helpers";

export function OfficialSourcesList() {
  const official = getOfficialIndulgenceResources();
  const helpful = getHelpfulIndulgenceGuides();

  return (
    <IndulgenceSection
      id="official-sources"
      eyebrow="Sources"
      title="Official and helpful sources"
      summary="These links are here to ground the page in authoritative Church teaching and careful secondary explanation."
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Official Church Sources</p>
          <div className="mt-4 grid gap-4">
            {official.map((resource) => (
              <article key={resource.id} className="card p-5">
                <h3 className="font-display text-2xl font-semibold text-navy">{resource.title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted">{resource.description}</p>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link focus-ring mt-4 inline-flex text-sm font-semibold"
                >
                  Open source
                </a>
              </article>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Helpful Guides</p>
          <div className="mt-4 grid gap-4">
            {helpful.map((resource) => (
              <article key={resource.id} className="card p-5">
                <h3 className="font-display text-2xl font-semibold text-navy">{resource.title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted">{resource.description}</p>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link focus-ring mt-4 inline-flex text-sm font-semibold"
                >
                  Open guide
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </IndulgenceSection>
  );
}
