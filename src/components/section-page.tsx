import Link from "next/link";
import { ResourceCard } from "@/components/resource-card";
import { SectionHeader } from "@/components/section-header";
import { liturgicalSeasons } from "@/content/liturgical";
import type { SectionPage as SectionPageType } from "@/content/types";
import { getResourcesByCategory } from "@/lib/resources";

export function SectionPage({ section }: { section: SectionPageType }) {
  const resources = getResourcesByCategory(section.categories);

  return (
    <div className="paper-texture">
      <section className="liturgical-dark-hero border-b border-stone text-ivory">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
          <p className="text-sm font-bold uppercase text-[color:var(--liturgical-primary-soft)]">{section.title}</p>
          <h1 className="font-display mt-4 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            {section.hero}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-stone-soft">{section.description}</p>
          <Link
            href={section.primaryHref}
            className="btn btn-gold focus-ring mt-8"
          >
            {section.primaryLabel}
          </Link>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeader
              eyebrow="Start Here"
              title={`Featured ${section.title}`}
              summary="A curated path through the most useful resources in this section."
            />
            <div className="liturgical-panel mt-6 p-5">
              <p className="text-sm font-bold text-navy">Common paths</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {section.tags.map((tag) => (
                  <span
                    key={tag}
                    className="season-pill liturgical-chip bg-background px-3 py-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {resources.slice(0, 6).map((resource) => (
              <ResourceCard key={resource.slug} resource={resource} />
            ))}
          </div>
        </div>
      </section>

      {section.slug === "liturgical-year" ? (
        <section id="seasons" className="mx-auto w-full max-w-7xl px-5 pb-12 sm:px-8 lg:px-10">
          <SectionHeader
            eyebrow="Seasons"
            title="The Church's year at a glance"
            summary="Use seasonal pages and filters to surface timely prayer, practices, and study."
          />
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {liturgicalSeasons.map((season) => (
              <article key={season.slug} className="card p-5">
                <p className="liturgical-label text-xs font-bold">{season.color}</p>
                <h2 className="font-display mt-3 text-3xl font-semibold text-navy">{season.name}</h2>
                <p className="mt-3 text-sm leading-7 text-muted">{season.summary}</p>
                <ul className="mt-4 space-y-2 text-sm text-muted">
                  {season.practices.map((practice) => (
                    <li key={practice} className="border-t border-stone pt-2">
                      {practice}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
