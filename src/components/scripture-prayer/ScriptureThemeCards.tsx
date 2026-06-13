import type { ScripturePrayerTheme } from "@/types/scripturePrayer";
import Link from "next/link";

export function ScriptureThemeCards({ themes }: { themes: ScripturePrayerTheme[] }) {
  return (
    <section>
      <div>
        <p className="text-xs font-bold uppercase text-burgundy">Themes for prayer</p>
        <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
          Scripture themes for prayer
        </h2>
      </div>
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {themes.map((theme) => (
          <article key={theme.id} className="card p-5">
            <h3 className="font-display text-3xl font-semibold text-navy">{theme.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{theme.description}</p>
            <p className="mt-4 text-sm font-semibold text-burgundy">Suggested references</p>
            <p className="mt-1 text-sm leading-7 text-muted">{theme.suggestedReferences.join(" • ")}</p>
            <p className="mt-4 text-sm font-semibold text-burgundy">Prayer prompt</p>
            <p className="mt-1 text-sm leading-7 text-muted">{theme.prayerPrompt}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {theme.relatedDailyOratoryLinks.slice(0, 2).map((link) => (
                <Link key={link.href} href={link.href} className="season-pill">
                  {link.label}
                </Link>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
