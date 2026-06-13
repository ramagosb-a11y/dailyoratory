import { Breadcrumbs } from "@/components/breadcrumbs";
import { getRelatedCategoryForDevotion } from "@/lib/devotions";
import type { Devotion } from "@/types/devotions";

export function DevotionDetailHero({ devotion }: { devotion: Devotion }) {
  const category = getRelatedCategoryForDevotion(devotion);

  return (
    <section className="liturgical-page-hero card-parchment overflow-hidden rounded-3xl px-6 py-8 shadow-soft sm:px-8 sm:py-10">
      <Breadcrumbs items={[{ label: "Pray", href: "/pray" }, { label: "Devotions", href: "/devotions" }, { label: devotion.title }]} />
      <div className="mt-6 flex flex-wrap gap-2">
        <span className="season-pill">{category?.title ?? "Devotion"}</span>
        <span className="season-pill">{devotion.timeNeeded}</span>
        {devotion.beginnerFriendly === "yes" ? (
          <span className="season-pill border-transparent bg-[color:var(--liturgical-primary-soft)] text-[color:var(--liturgical-primary-dark)]">Beginner-friendly</span>
        ) : null}
      </div>
      <h1 className="font-display mt-4 max-w-4xl text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">
        {devotion.title}
      </h1>
      <p className="mt-4 max-w-3xl text-base leading-8 text-muted">{devotion.shortDescription}</p>
    </section>
  );
}
