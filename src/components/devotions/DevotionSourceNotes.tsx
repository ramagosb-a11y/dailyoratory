export function DevotionSourceNotes({ notes }: { notes: string }) {
  return (
    <section className="rounded-md border border-stone bg-ivory p-6">
      <p className="text-xs font-bold uppercase text-burgundy">Source notes</p>
      <p className="mt-3 text-sm leading-7 text-muted">{notes}</p>
    </section>
  );
}
