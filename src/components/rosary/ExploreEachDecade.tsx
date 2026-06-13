import Link from "next/link";
import { RosarySection, getRosaryAccentClasses } from "@/components/rosary/RosaryUi";
import { getMysteriesByGroup, getRosaryMysteryGroups } from "@/lib/rosary";

export function ExploreEachDecade() {
  const groups = getRosaryMysteryGroups();

  return (
    <RosarySection
      eyebrow="Explore each decade"
      title="Explore Each Decade"
      summary="Each individual mystery page also serves as the dedicated decade page for that mystery."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        {groups.map((group) => {
          const mysteries = getMysteriesByGroup(group.slug);

          return (
            <section
              key={group.slug}
              className={`rounded-md border p-5 shadow-soft ${getRosaryAccentClasses(group.colorAccent)}`}
            >
              <h3 className="font-display text-3xl font-semibold text-navy">{group.title}</h3>
              <ul className="mt-4 space-y-3">
                {mysteries.map((mystery) => (
                  <li key={mystery.id}>
                    <Link
                      href={mystery.fullPath}
                      className="flex flex-col rounded-md border border-stone/80 bg-ivory/80 px-4 py-3 transition hover:border-gold"
                    >
                      <span className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">
                        {mystery.decadeLabel}
                      </span>
                      <span className="mt-1 text-base font-semibold text-navy">{mystery.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </RosarySection>
  );
}
