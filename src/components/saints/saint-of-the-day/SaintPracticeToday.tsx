import type { SaintOfTheDayEntry } from "@/types/saintOfTheDay";

export function SaintPracticeToday({ entry }: { entry: SaintOfTheDayEntry }) {
  return (
    <section className="card-parchment p-6 sm:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">Practice Today</p>
      <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Practice Today</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <article className="rounded-2xl border border-stone bg-ivory px-5 py-4">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-burgundy">Virtue</p>
          <p className="mt-2 text-sm leading-7 text-muted">{entry.virtue ?? "Faithfulness"}</p>
        </article>
        <article className="rounded-2xl border border-stone bg-ivory px-5 py-4">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-burgundy">Practice</p>
          <p className="mt-2 text-sm leading-7 text-muted">{entry.practicalAction ?? "Offer one act of love to God today."}</p>
        </article>
        <article className="rounded-2xl border border-stone bg-ivory px-5 py-4">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-burgundy">Reflection</p>
          <p className="mt-2 text-sm leading-7 text-muted">{entry.reflectionQuestion ?? "Where is Christ inviting me to grow today?"}</p>
        </article>
      </div>
    </section>
  );
}
