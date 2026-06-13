export function PastoralNote() {
  return (
    <section className="grid gap-4">
      <aside className="card-parchment p-5">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Pastoral note</p>
        <p className="mt-3 text-sm leading-7 text-muted">
          This page is a pastoral summary and is not a substitute for official Church documents,
          diocesan guidance, or priestly counsel. For specific questions about indulgences, consult the
          official sources listed above or speak with a priest. If this teaching feels unfamiliar,
          it is wise to begin with official Church sources and ask patient questions.
        </p>
      </aside>
      <aside className="card-parchment p-5">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Copyright note</p>
        <p className="mt-3 text-sm leading-7 text-muted">
          This page summarizes and links to Church documents and trusted references. It does not
          reproduce long copyrighted texts.
        </p>
      </aside>
    </section>
  );
}
