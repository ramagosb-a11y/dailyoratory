import Link from "next/link";
import { ResourceCard } from "@/components/resource-card";
import { SectionHeader } from "@/components/section-header";
import { getFeaturedResources } from "@/lib/resources";

export function FeaturedResources() {
  const featured = getFeaturedResources(4);

  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
      <div className="grid gap-8 lg:grid-cols-[0.74fr_1.26fr]">
        <div>
          <SectionHeader
            eyebrow="Featured Resources"
            title="Search the Catholic library."
            summary="Find prayers, devotions, reflections, sacramental guides, saints, formation topics, and liturgical living resources."
          />
          <form action="/library" className="form-shell mt-6 grid gap-3 p-3 sm:grid-cols-[1fr_auto]">
            <label htmlFor="home-library-search" className="sr-only">
              Search Daily Oratory resources
            </label>
            <input
              id="home-library-search"
              name="q"
              type="search"
              placeholder="Search Rosary, saints, confession, Adoration..."
              className="form-field focus-ring"
            />
            <button type="submit" className="btn btn-primary focus-ring">
              Search
            </button>
          </form>
          <Link href="/library" className="text-link focus-ring mt-5 inline-flex text-sm">
            Browse all resources
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {featured.map((resource) => (
            <ResourceCard key={resource.slug} resource={resource} />
          ))}
        </div>
      </div>
    </section>
  );
}
