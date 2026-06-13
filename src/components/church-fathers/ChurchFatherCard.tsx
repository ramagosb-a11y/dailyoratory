import Link from "next/link";
import type { ChurchFather } from "@/types/churchFathers";

export function ChurchFatherCard({ father }: { father: ChurchFather }) {
  return (
    <article className="card resource-card flex h-full flex-col p-5">
      <div className="flex flex-wrap items-center gap-2">
        <span className="season-pill">{father.century}</span>
        <span className="season-pill">{father.region}</span>
        {father.isGreatFather ? <span className="season-pill bg-gold/15 text-navy">Great Father</span> : null}
      </div>
      <h3 className="font-display mt-4 text-3xl font-semibold leading-tight text-navy">
        {father.name}
      </h3>
      <p className="mt-3 text-sm leading-7 text-muted">{father.shortDescription}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {father.keyThemes.map((theme) => (
          <span key={theme} className="season-pill">
            {theme}
          </span>
        ))}
      </div>
      <div className="mt-5 rounded-md border border-stone bg-parchment px-4 py-3">
        <p className="text-xs font-bold uppercase text-burgundy">Recommended starting work</p>
        <p className="mt-2 text-sm leading-7 text-navy">{father.recommendedStartingWork}</p>
      </div>
      <div className="mt-5 flex flex-col gap-3">
        {father.externalLinks.map((link) => (
          <a
            key={`${father.id}-${link.url}`}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex rounded-sm text-sm font-semibold text-link"
          >
            {link.label}
          </a>
        ))}
      </div>
      <div className="mt-5 border-t border-stone pt-4">
        <p className="text-xs font-bold uppercase text-burgundy">Related Daily Oratory links</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {father.relatedDailyOratoryLinks.map((link) => (
            <Link key={`${father.id}-${link.href}`} href={link.href} className="focus-ring season-pill">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
