import { getTraditionGroupLabel } from "@/lib/churchFathers";
import type { ChurchFather } from "@/types/churchFathers";

export function GreatFathersCallout({ fathers }: { fathers: ChurchFather[] }) {
  const western = fathers.filter((father) => father.traditionGroup === "latin-fathers");
  const eastern = fathers.filter((father) => father.traditionGroup === "greek-fathers");

  return (
    <section className="rounded-md border border-stone bg-navy px-6 py-8 text-ivory shadow-soft sm:px-8">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold">Great Church Fathers</p>
      <h2 className="font-display mt-3 text-4xl font-semibold sm:text-5xl">
        The Great Fathers of East and West
      </h2>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-stone-soft">
        These names are especially important in Catholic memory because of their enduring influence
        on doctrine, preaching, liturgy, and Christian life.
      </p>
      <div className="mt-7 grid gap-4 md:grid-cols-2">
        <article className="rounded-md border border-white/15 bg-white/5 p-5">
          <p className="text-xs font-bold uppercase text-gold">Western Great Fathers</p>
          <ul className="mt-4 space-y-2 text-sm leading-7 text-parchment">
            {western.map((father) => (
              <li key={father.id}>{father.name}</li>
            ))}
          </ul>
        </article>
        <article className="rounded-md border border-white/15 bg-white/5 p-5">
          <p className="text-xs font-bold uppercase text-gold">Eastern Great Fathers</p>
          <ul className="mt-4 space-y-2 text-sm leading-7 text-parchment">
            {eastern.map((father) => (
              <li key={father.id}>{father.name}</li>
            ))}
          </ul>
        </article>
      </div>
      <p className="mt-5 text-xs leading-6 text-stone-soft">
        Daily Oratory groups these by their primary historical tradition: {getTraditionGroupLabel("latin-fathers")}
        {" "}and {getTraditionGroupLabel("greek-fathers")}.
      </p>
    </section>
  );
}
