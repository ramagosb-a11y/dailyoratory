import Link from "next/link";
import { getRelatedDailyOratoryTools } from "@/lib/sacraments";

export function SacramentRelatedTools({ sacramentId }: { sacramentId: string }) {
  const links = getRelatedDailyOratoryTools(sacramentId);

  return (
    <section className="card-parchment p-6 sm:p-8">
      <h2 className="font-display text-4xl font-semibold text-navy">Related Daily Oratory tools</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="rounded-3xl border border-stone-200 bg-ivory/70 p-4 transition hover:border-gold">
            <h3 className="font-semibold text-navy">{link.label}</h3>
            {link.description ? <p className="mt-2 text-sm leading-7 text-muted">{link.description}</p> : null}
          </Link>
        ))}
      </div>
    </section>
  );
}
