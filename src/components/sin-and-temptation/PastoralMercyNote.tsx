export function PastoralMercyNote({ children }: { children: React.ReactNode }) {
  return (
    <section className="rounded-3xl border border-gold/50 bg-white/80 p-6 shadow-soft sm:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Pastoral mercy note</p>
      <div className="daily-readable-muted mt-4 space-y-4 text-base leading-8 text-muted">{children}</div>
    </section>
  );
}
