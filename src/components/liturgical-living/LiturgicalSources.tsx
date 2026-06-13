import { SectionHeader } from "@/components/section-header";
import { liturgicalSourceLinks } from "@/data/liturgicalSeasonPractices";

export function LiturgicalSources() {
  return (
    <section id="official-sources" className="scroll-mt-28 border-t border-stone/70 pt-10">
      <SectionHeader
        eyebrow="Official and helpful sources"
        title="Official Sources"
        summary="Use official Church and bishops' conference resources for calendars, obligation status, fasting norms, and local schedules."
      />
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {liturgicalSourceLinks.map((source) => (
          <article key={source.id} className="dashboard-card p-5">
            <h3 className="text-lg font-semibold text-navy">{source.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{source.description}</p>
            {source.url ? (
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link focus-ring mt-4 inline-flex text-sm"
              >
                Open source
              </a>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
