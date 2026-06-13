import Link from "next/link";
import type { Devotion } from "@/types/devotions";

export function DevotionOfMonth({ devotion }: { devotion?: Devotion }) {
  if (!devotion) return null;

  return (
    <section className="rounded-md border border-stone bg-navy px-6 py-8 text-ivory shadow-soft sm:px-8">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold">Devotion of the month</p>
      <h2 className="font-display mt-3 text-4xl font-semibold sm:text-5xl">{devotion.title}</h2>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-stone-soft">{devotion.shortDescription}</p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <article className="rounded-md border border-white/15 bg-white/5 p-4">
          <p className="text-xs font-bold uppercase text-gold">Theme</p>
          <p className="mt-2 text-sm leading-7 text-parchment">{devotion.spiritualFruits.slice(0, 4).join(", ")}</p>
        </article>
        <article className="rounded-md border border-white/15 bg-white/5 p-4">
          <p className="text-xs font-bold uppercase text-gold">Practice</p>
          <p className="mt-2 text-sm leading-7 text-parchment">{devotion.howToBegin[0]}</p>
        </article>
        <article className="rounded-md border border-white/15 bg-white/5 p-4">
          <p className="text-xs font-bold uppercase text-gold">Related</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {devotion.relatedDailyOratoryLinks.slice(0, 3).map((link) => (
              <Link key={link.href} href={link.href} className="focus-ring season-pill bg-white/10 text-ivory">
                {link.label}
              </Link>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
