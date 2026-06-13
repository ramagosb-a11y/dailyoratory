import { SiteSearchBar } from "@/components/search/SiteSearchBar";

export function HomeSearchSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 pt-8 sm:px-8 lg:px-10">
      <div className="liturgical-home-section-muted p-6 sm:p-7">
        <p className="liturgical-section-eyebrow text-xs font-bold uppercase tracking-[0.18em]">Find What You Need</p>
        <div className="mt-3 max-w-3xl">
          <h2 className="font-display text-4xl font-semibold text-navy sm:text-5xl">Search Daily Oratory</h2>
          <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
            Search prayers, Mass guides, sacraments, saints, reflections, media, and formation resources.
          </p>
        </div>
        <div className="liturgical-home-rule mt-5" aria-hidden="true" />
        <div className="mt-5">
          <SiteSearchBar variant="hero" showQuickLinks placeholder="Search Daily Oratory..." />
        </div>
      </div>
    </section>
  );
}
