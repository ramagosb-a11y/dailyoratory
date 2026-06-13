import Link from "next/link";
import { usualConditions } from "@/components/indulgences/content";
import { IndulgenceSection, NotePanel } from "@/components/indulgences/helpers";

export function PlenaryConditionsChecklist() {
  return (
    <IndulgenceSection
      id="usual-conditions"
      eyebrow="Usual conditions"
      title="Usual conditions for a plenary indulgence"
      summary="These are the usual conditions commonly named by the Church when a plenary indulgence is attached to a specific work."
    >
      <div className="grid gap-5 lg:grid-cols-[1.25fr_0.85fr]">
        <div className="dashboard-card p-6 sm:p-8">
          <ul className="grid gap-3">
            {usualConditions.map((condition) => {
              const isDetachment = condition === "Interior detachment from all sin, even venial sin.";

              return (
                <li key={condition} className="rounded-md border border-stone bg-ivory px-4 py-3 text-sm leading-7 text-muted">
                  <span className="font-semibold text-navy">&middot; </span>
                  {isDetachment ? (
                    <Link
                      href="/indulgences/detachment-from-sin"
                      className="focus-ring rounded-sm font-semibold text-navy underline decoration-gold underline-offset-4 hover:text-burgundy"
                    >
                      Interior detachment from all sin, even venial sin
                    </Link>
                  ) : (
                    condition
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="grid gap-5">
          <NotePanel title="Pastoral note">
            If full detachment from sin is lacking, the indulgence may be partial rather than plenary.
          </NotePanel>
          <NotePanel title="Caution">
            Users should consult official Church sources or a priest for specific questions, especially when
            local decrees or special grants are involved.
          </NotePanel>
        </div>
      </div>
    </IndulgenceSection>
  );
}
