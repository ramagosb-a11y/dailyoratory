import { SectionHeader } from "@/components/section-header";
import { getOciaCannotReplaceItems } from "@/lib/ocia";

export function OciaCannotReplace() {
  const items = getOciaCannotReplaceItems();

  return (
    <section>
      <SectionHeader
        eyebrow="Important boundary"
        title="What This Page Cannot Replace"
        summary="Daily Oratory supports learning and prayer, but it cannot stand in for parish or diocesan initiation."
      />
      <div className="card-parchment mt-7 p-6">
        <p className="text-sm font-semibold text-navy">Daily Oratory is not:</p>
        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {items.map((item) => (
            <li key={item} className="rounded-md border border-stone bg-ivory px-4 py-3 text-sm leading-7 text-muted">
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-5 text-sm leading-7 text-muted">
          Your next step should be a local Catholic parish if you are seriously considering becoming Catholic.
        </p>
      </div>
    </section>
  );
}
