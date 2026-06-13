import { massIntentionLinks } from "@/data/massIntentions";

export function MassIntentionsLinks({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "dashboard-card p-5" : "grid gap-5"}>
      <div>
        <p className="text-xs font-bold uppercase text-burgundy">Mass intentions</p>
        <h2 className="font-display mt-2 text-3xl font-semibold leading-tight text-navy">
          Request a Mass through trusted external communities.
        </h2>
        <p className="mt-4 text-sm leading-7 text-muted">
          Daily Oratory does not collect Mass stipends or schedule Masses. These links open external Catholic
          organizations where you can review their current intention policies and submit requests directly.
        </p>
      </div>

      <div className={`mt-5 grid gap-4 ${compact ? "" : "md:grid-cols-2"}`}>
        {massIntentionLinks.map((link) => (
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
              aria-label={`Open ${link.name} Mass intentions page in a new tab`}
            >
              Open Mass intentions
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}

