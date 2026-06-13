import { prayerLibraryCategories } from "@/lib/prayer";

export function PrayerLibraryCategories() {
  return (
    <section>
      <p className="liturgical-section-eyebrow">Prayer library</p>
      <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
        Browse prayer categories without overload.
      </h2>
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {prayerLibraryCategories.map((category) => (
          <article key={category.id} className="card-parchment p-5">
            <h3 className="font-display text-2xl font-semibold text-navy">{category.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{category.description}</p>
            <a href={category.href} className="mt-5 inline-flex text-sm font-semibold text-navy underline-offset-4 hover:underline">
              {category.cta}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
