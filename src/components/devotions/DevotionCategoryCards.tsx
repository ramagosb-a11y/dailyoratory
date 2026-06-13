import Link from "next/link";
import type { Devotion, DevotionCategory } from "@/types/devotions";

export function DevotionCategoryCards({
  categories,
  devotions,
}: {
  categories: DevotionCategory[];
  devotions: Devotion[];
}) {
  return (
    <section>
      <div>
        <p className="text-xs font-bold uppercase text-burgundy">Categories</p>
        <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
          Devotion categories
        </h2>
      </div>
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {categories.map((category) => {
          const count = devotions.filter((devotion) => devotion.categoryId === category.id).length;
          return (
            <article key={category.id} className="card p-5">
              <p className="text-xs font-bold uppercase text-burgundy">{count} devotion{count === 1 ? "" : "s"}</p>
              <h3 className="font-display mt-3 text-3xl font-semibold text-navy">{category.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{category.description}</p>
              <Link href={`/devotions?category=${category.slug}#devotions-library`} className="btn btn-secondary focus-ring mt-5">
                View category
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}
