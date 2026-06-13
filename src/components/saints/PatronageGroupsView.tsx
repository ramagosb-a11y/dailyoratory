import Link from "next/link";
import { getPatronageGroups } from "@/lib/saints";

export function PatronageGroupsView() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {getPatronageGroups().map((group) => (
        <section key={group.title} className="card p-5">
          <p className="text-xs font-bold uppercase text-burgundy">Patronage</p>
          <h2 className="font-display mt-2 text-3xl font-semibold leading-tight text-navy">{group.title}</h2>
          <p className="mt-2 text-sm leading-6 text-muted">{group.description}</p>
          <div className="mt-4 grid gap-2">
            {group.saints.map((saint) => (
              <Link key={saint.id} href={`/saints/${saint.slug}`} className="focus-ring rounded-md border border-stone bg-ivory px-3 py-2 text-sm font-bold text-navy hover:border-gold">
                {saint.name}
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
