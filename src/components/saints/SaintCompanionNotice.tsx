export function SaintCompanionNotice({ compact = false }: { compact?: boolean }) {
  return (
    <aside className={`card-parchment ${compact ? "p-4" : "p-5"}`}>
      <p className="text-xs font-bold uppercase text-burgundy">Saint companion finder</p>
      <p className="mt-2 text-sm font-semibold leading-7 text-navy">
        This finder suggests saints to consider praying with. It is not a horoscope, personality quiz, or spiritual assignment.
      </p>
      <p className="mt-3 text-sm leading-7 text-muted">
        Ask for intercession, learn from the witness, and keep Christ at the center.
      </p>
    </aside>
  );
}
