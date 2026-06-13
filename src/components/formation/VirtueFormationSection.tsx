import type { VirtueFormationItem } from "@/types/formation";
import Link from "next/link";

export function VirtueFormationSection({ virtues }: { virtues: VirtueFormationItem[] }) {
  return (
    <section id="virtue" className="scroll-mt-28">
      <div>
        <p className="text-xs font-bold uppercase text-burgundy">Virtue</p>
        <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
          Virtue: Learn to love what is good
        </h2>
        <p className="mt-4 max-w-4xl text-sm leading-7 text-muted">
          Virtue is a stable habit of doing the good. Catholic formation teaches us not only to
          avoid sin, but to become people who love rightly and act with courage, mercy, humility,
          patience, purity, justice, and charity.
        </p>
      </div>
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {virtues.map((virtue) => (
          <article key={virtue.id} className="card p-5">
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-display text-3xl font-semibold text-navy">{virtue.title}</h3>
              <span className="season-pill">{virtue.virtueType}</span>
            </div>
            <p className="mt-3 text-sm leading-7 text-muted">{virtue.description}</p>
            <p className="mt-4 text-sm font-semibold text-burgundy">Opposite vice</p>
            <p className="mt-1 text-sm leading-7 text-muted">{virtue.oppositeVice}</p>
            <p className="mt-4 text-sm font-semibold text-burgundy">One practice</p>
            <p className="mt-1 text-sm leading-7 text-muted">{virtue.practice}</p>
            <p className="mt-4 text-sm font-semibold text-burgundy">Prayer prompt</p>
            <p className="mt-1 text-sm leading-7 text-muted">{virtue.prayerPrompt}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {virtue.relatedLinks.map((link) => (
                <Link key={link.href} href={link.href} className="season-pill">
                  {link.label}
                </Link>
              ))}
            </div>
          </article>
        ))}
      </div>
      <div className="mt-6">
        <Link href="/virtue-tracker" className="btn btn-primary focus-ring justify-center">
          Open Virtue and Vice Tracker
        </Link>
      </div>
    </section>
  );
}
