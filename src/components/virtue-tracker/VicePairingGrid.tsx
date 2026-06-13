import { getVicePairings } from "@/lib/virtueTracker";

export function VicePairingGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {getVicePairings().map((pair) => (
        <article key={pair.id} className="card p-5">
          <p className="text-xs font-bold uppercase text-burgundy">{pair.viceLabel} toward</p>
          <h2 className="font-display mt-2 text-3xl font-semibold leading-tight text-navy">{pair.virtueLabels.join(" and ")}</h2>
          <p className="mt-3 text-sm leading-7 text-muted">{pair.description}</p>
          <div className="mt-5">
            <p className="text-xs font-bold uppercase text-burgundy">Practice</p>
            {pair.practices.map((practice) => (
              <p key={practice.id} className="mt-2 text-sm leading-7 text-navy">
                <span className="font-bold">{practice.title}:</span> {practice.description}
              </p>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
