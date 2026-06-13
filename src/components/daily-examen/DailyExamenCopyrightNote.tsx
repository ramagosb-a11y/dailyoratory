import { dailyExamenCopyrightNote } from "@/data/dailyExamenPage";

export function DailyExamenCopyrightNote() {
  return (
    <section>
      <div className="rounded-[1.75rem] border border-stone bg-ivory/85 p-6 sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Source and copyright note</p>
        <p className="mt-4 text-sm leading-7 text-muted">{dailyExamenCopyrightNote}</p>
      </div>
    </section>
  );
}

