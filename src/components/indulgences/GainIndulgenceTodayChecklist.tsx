import Link from "next/link";
import { gainTodayChecklist } from "@/components/indulgences/content";
import { IndulgenceSection, NotePanel } from "@/components/indulgences/helpers";

export function GainIndulgenceTodayChecklist() {
  return (
    <IndulgenceSection
      id="how-to-gain-today"
      eyebrow="A simple path"
      title="How to gain an indulgence today"
      summary="This checklist is practical and pastoral. It helps you prepare, but it does not guarantee a spiritual outcome."
    >
      <div className="grid gap-5 lg:grid-cols-[1.2fr_0.9fr]">
        <article className="dashboard-card p-6 sm:p-8">
          <ul className="grid gap-3">
            {gainTodayChecklist.map((item) => (
              <li key={item} className="rounded-md border border-stone bg-ivory px-4 py-3 text-sm leading-7 text-muted">
                <span className="font-semibold text-navy">• </span>
                {item}
              </li>
            ))}
          </ul>
          <Link href="#daily-indulgence-routine" className="btn btn-primary focus-ring mt-6 justify-center">
            Pray the Daily Indulgence Routine
          </Link>
        </article>
        <NotePanel title="Important">
          <p>
            This checklist is a spiritual aid, not a guarantee. God sees the heart, and the Church
            provides the norms. If some condition is lacking, the indulgence may be partial rather than
            plenary.
          </p>
        </NotePanel>
      </div>
    </IndulgenceSection>
  );
}
