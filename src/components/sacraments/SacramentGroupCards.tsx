import { getSacramentGroups } from "@/lib/sacraments";

export function SacramentGroupCards() {
  const groups = getSacramentGroups();

  return (
    <section className="grid gap-5 lg:grid-cols-3">
      {groups.map((group) => (
        <article key={group.id} className="card-parchment p-5">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">{group.title}</p>
          <p className="mt-3 text-sm leading-7 text-muted">{group.description}</p>
          <p className="mt-4 text-sm font-semibold text-navy">{group.sacramentIds.map((id) => labelize(id)).join(" • ")}</p>
        </article>
      ))}
    </section>
  );
}

function labelize(value: string) {
  return value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}
