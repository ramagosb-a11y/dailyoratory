import { getCommonParishChecklist } from "@/lib/sacraments";

export function AskYourParishChecklist() {
  const items = getCommonParishChecklist();

  return (
    <section className="card-parchment p-6 sm:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Ask Your Parish</p>
      <h2 className="font-display mt-2 text-4xl font-semibold text-navy">A reusable checklist for sacramental preparation</h2>
      <div className="mt-6 grid gap-3 md:grid-cols-2">
        {items.map((item) => (
          <label key={item} className="flex items-start gap-3 rounded-3xl border border-stone-200 bg-ivory/70 px-4 py-3 text-sm leading-7 text-navy">
            <input type="checkbox" className="mt-1 h-4 w-4 rounded border-stone-300" />
            <span>{item}</span>
          </label>
        ))}
      </div>
    </section>
  );
}
