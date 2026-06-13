import Link from "next/link";
import { burialDispositionOptions } from "@/data/catholicBurial";

export function BurialDispositionCards() {
  return (
    <section className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
      {burialDispositionOptions.map((option) => (
        <article key={option.id} className="card-parchment p-6 sm:p-8">
          <h2 className="font-display text-3xl font-semibold text-navy">{option.title}</h2>
          <p className="daily-card-readable mt-4 text-base leading-7 text-muted">{option.description}</p>
          <p className="daily-readable-muted mt-4 text-sm leading-7 text-muted">{option.catholicGuidance}</p>
          {option.href ? (
            <div className="mt-6">
              <Link href={option.href} className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
                Learn More
              </Link>
            </div>
          ) : null}
        </article>
      ))}
    </section>
  );
}

