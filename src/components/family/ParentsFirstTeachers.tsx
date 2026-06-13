import { SectionHeader } from "@/components/section-header";
import { parentsFirstTeachersPoints } from "@/data/familyPage";

export function ParentsFirstTeachers() {
  return (
    <section>
      <SectionHeader
        eyebrow="Witness"
        title="Parents as First Teachers of Faith"
        summary="Children learn faith through repeated witness: how adults pray, forgive, speak, serve, attend Mass, ask for mercy, and treat others."
      />
      <div className="card-parchment mt-7 p-6">
        <ul className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {parentsFirstTeachersPoints.map((point) => (
            <li key={point} className="rounded-md border border-stone bg-ivory px-4 py-3 text-sm leading-7 text-muted">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
