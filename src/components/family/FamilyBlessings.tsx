import { SectionHeader } from "@/components/section-header";
import { familyBlessings } from "@/data/familyPage";

export function FamilyBlessings() {
  return (
    <section>
      <SectionHeader
        eyebrow="Blessings"
        title="Blessing the Home and Family"
        summary="Catholic families often ask God's blessing over meals, children, work, travel, sickness, and the home itself."
      />
      <div className="card-parchment mt-7 p-6">
        <ul className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {familyBlessings.map((item) => (
            <li key={item} className="rounded-md border border-stone bg-ivory px-4 py-3 text-sm leading-7 text-muted">
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-5 text-sm leading-7 text-muted">
          Blessings should lead the heart to trust God, not superstition. For formal blessings, house blessings, and
          sacramentals, ask a priest or parish.
        </p>
      </div>
    </section>
  );
}
