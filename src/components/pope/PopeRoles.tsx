import { SectionHeader } from "@/components/section-header";
import { getPopeRoles } from "@/lib/pope";

export function PopeRoles() {
  const roles = getPopeRoles();

  return (
    <section>
      <SectionHeader eyebrow="Service" title="The Pope's Service to the Church" />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {roles.map((role) => (
          <article key={role.title} className="card-parchment p-5">
            <h3 className="font-display text-2xl font-semibold text-navy">{role.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{role.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
