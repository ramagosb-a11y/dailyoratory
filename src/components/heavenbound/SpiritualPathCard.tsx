import { HeavenboundPromptLauncher } from "@/components/heavenbound/HeavenboundPromptLauncher";
import type { HeavenboundPath } from "@/types/heavenbound";

export function SpiritualPathCard({
  path,
  selected,
  onSelect,
}: {
  path: HeavenboundPath;
  selected: boolean;
  onSelect: (path: HeavenboundPath) => void;
}) {
  return (
    <article
      className={`card resource-card p-5 transition-colors ${selected ? "border-gold bg-parchment" : "bg-ivory"}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-stone bg-parchment font-display text-2xl font-semibold text-burgundy">
          {path.number}
        </div>
        <span className="rounded-sm border border-stone px-2 py-1 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-burgundy">
          {path.category}
        </span>
      </div>
      <h3 className="font-display mt-5 text-2xl font-semibold leading-tight text-navy">{path.title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted">{path.description}</p>
      <div className="mt-4">
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-burgundy">Best for</p>
        <p className="mt-2 text-sm leading-6 text-muted">{path.bestFor.join(", ")}</p>
      </div>
      <div className="mt-5 grid gap-2 sm:grid-cols-2">
        <HeavenboundPromptLauncher path={path} />
        <button type="button" onClick={() => onSelect(path)} className="btn btn-secondary focus-ring justify-center">
          View Prompts
        </button>
      </div>
    </article>
  );
}
