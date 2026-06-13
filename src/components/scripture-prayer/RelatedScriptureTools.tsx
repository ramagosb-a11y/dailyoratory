import Link from "next/link";
import { getRelatedScripturePrayerTools } from "@/lib/scripturePrayer";

export function RelatedScriptureTools() {
  const links = getRelatedScripturePrayerTools();

  return (
    <section>
      <div>
        <p className="text-xs font-bold uppercase text-burgundy">Related Daily Oratory tools</p>
        <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
          Keep Scripture prayer connected to the rest of Catholic life
        </h2>
      </div>
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="card p-5 transition hover:border-gold">
            <span className="font-display text-3xl font-semibold text-navy">{link.label}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
