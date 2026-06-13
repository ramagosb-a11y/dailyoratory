import type { ReactNode } from "react";
import Link from "next/link";
import type { MassPart } from "@/types/mass";

export function MassPartSection({
  id,
  eyebrow,
  title,
  description,
  parts,
  extra,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  parts: MassPart[];
  extra?: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-stone/70 pt-10">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">{eyebrow}</p>
      <h2 className="mt-2 font-display text-4xl font-semibold text-navy sm:text-5xl">{title}</h2>
      <p className="mt-4 max-w-4xl text-sm leading-7 text-muted">{description}</p>
      {extra ? <div className="mt-6">{extra}</div> : null}
      <div className="mt-8 space-y-5">
        {parts.map((part) => (
          <article key={part.id} className="card p-6">
            <h3 className="font-display text-3xl font-semibold text-navy">{part.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{part.shortDescription}</p>
            <div className="mt-5 grid gap-5 lg:grid-cols-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">What happens</p>
                <p className="mt-2 text-sm leading-7 text-muted">{part.whatHappens}</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Why it matters</p>
                <p className="mt-2 text-sm leading-7 text-muted">{part.spiritualMeaning}</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">How to participate</p>
                <p className="mt-2 text-sm leading-7 text-muted">{part.howToParticipate}</p>
              </div>
            </div>
            {part.relatedLinks.length ? (
              <div className="mt-5 flex flex-wrap gap-3">
                {part.relatedLinks.map((link) => (
                  <Link
                    key={`${part.id}-${link.href}`}
                    href={link.href}
                    className="rounded-full border border-gold/25 px-4 py-2 text-sm font-semibold text-navy transition hover:border-burgundy hover:text-burgundy"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
