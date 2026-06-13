import { candleIntentionLinks } from "@/data/candleIntentions";

export function CandleIntentionsLinks({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "dashboard-card p-5" : "grid gap-5"}>
      <div>
        <p className="text-xs font-bold uppercase text-burgundy">Candle intentions</p>
        <h2 className="font-display mt-2 text-3xl font-semibold leading-tight text-navy">
          Light a candle through external Catholic communities.
        </h2>
        <p className="mt-4 text-sm leading-7 text-muted">
          These links open external Catholic shrines and communities that receive candle offerings or prayer requests.
          Daily Oratory does not process offerings, publish private intentions, or manage candle availability.
        </p>
      </div>

      <div className={`mt-5 grid gap-4 ${compact ? "" : "md:grid-cols-3"}`}>
        {candleIntentionLinks.map((link) => (
          <article key={link.id} className="rounded-md border border-stone bg-parchment p-4">
            <p className="text-xs font-bold uppercase text-burgundy">{link.location}</p>
            <h3 className="font-display mt-2 text-2xl font-semibold leading-tight text-navy">{link.name}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{link.description}</p>
            <p className="mt-3 text-xs leading-6 text-muted">{link.note}</p>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary focus-ring mt-4 w-full justify-center sm:w-auto"
              aria-label={`Open ${link.name} candle intentions page in a new tab`}
            >
              Open candle intentions
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}

