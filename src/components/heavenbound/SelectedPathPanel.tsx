import { HeavenboundPromptLauncher } from "@/components/heavenbound/HeavenboundPromptLauncher";
import { OpenHeavenboundButton } from "@/components/heavenbound/OpenHeavenboundButton";
import { PromptCopyBox } from "@/components/heavenbound/PromptCopyBox";
import Link from "next/link";
import type { HeavenboundPath } from "@/types/heavenbound";

export function SelectedPathPanel({ path }: { path: HeavenboundPath }) {
  return (
    <aside className="sticky top-24 rounded-md border border-gold bg-parchment p-5 shadow-soft sm:p-6">
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Your selected path</p>
      <div className="mt-3 flex items-start gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-gold font-display text-2xl font-semibold text-navy">
          {path.number}
        </span>
        <div>
          <h2 className="font-display text-3xl font-semibold leading-tight text-navy">{path.title}</h2>
          <p className="mt-2 text-sm leading-7 text-muted">{path.description}</p>
        </div>
      </div>
      <div className="mt-5 grid gap-4">
        <PromptCopyBox label="Starter prompt" prompt={path.starterPrompt} />
        <PromptCopyBox label="Advanced prompt" prompt={path.advancedPrompt} />
      </div>
      <div className="mt-5 rounded-sm border border-stone bg-ivory p-4">
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-burgundy">Related Daily Oratory links</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {path.relatedDailyOratoryLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-link focus-ring text-sm">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-5 grid gap-3">
        <HeavenboundPromptLauncher path={path} label="Start Starter Prompt" />
        <HeavenboundPromptLauncher
          path={path}
          promptKind="advanced"
          label="Start Advanced Prompt"
          className="btn btn-secondary focus-ring justify-center"
        />
        <OpenHeavenboundButton className="btn btn-secondary focus-ring justify-center" label="Open Heavenbound Only" />
        <p className="text-xs leading-6 text-muted">
          Heavenbound opens in ChatGPT. The prompt is copied first in case ChatGPT asks you to paste it.
        </p>
      </div>
    </aside>
  );
}
