import Link from "next/link";
import type { SacredSpace } from "@/types/mass";

export function SacredSpaceCard({ space }: { space: SacredSpace }) {
  return (
    <article className="card p-6">
      <h3 className="font-display text-3xl font-semibold text-navy">{space.title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted">{space.shortDescription}</p>
      <div className="mt-5 space-y-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">What it is</p>
          <p className="mt-2 text-sm leading-7 text-muted">{space.detailedDescription}</p>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Why it matters</p>
          <p className="mt-2 text-sm leading-7 text-muted">{space.whyItMatters}</p>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">What to notice</p>
          <p className="mt-2 text-sm leading-7 text-muted">{space.whatToNotice}</p>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Reverence practice</p>
          <p className="mt-2 text-sm leading-7 text-muted">{space.reverencePractice}</p>
        </div>
      </div>
      {space.relatedLinks.length ? (
        <div className="mt-5 flex flex-wrap gap-3">
          {space.relatedLinks.map((link) => (
            <Link
              key={`${space.id}-${link.href}`}
              href={link.href}
              className="rounded-full border border-gold/25 px-4 py-2 text-sm font-semibold text-navy transition hover:border-burgundy hover:text-burgundy"
            >
              {link.label}
            </Link>
          ))}
        </div>
      ) : null}
    </article>
  );
}
