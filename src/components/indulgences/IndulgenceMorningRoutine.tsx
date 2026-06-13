import { getMorningRoutineSteps } from "@/lib/indulgences";
import { IndulgenceSection } from "@/components/indulgences/helpers";

export function IndulgenceMorningRoutine() {
  const steps = getMorningRoutineSteps();

  return (
    <IndulgenceSection
      id="simple-morning-routine"
      eyebrow="Daily rhythm"
      title="A simple morning routine"
      summary="A short pattern to start the day with intention, trust, and peace."
    >
      <div className="dashboard-card p-6 sm:p-8">
        <ol className="space-y-3 text-sm leading-7 text-muted">
          {steps.map((step, index) => (
            <li key={step}>
              <span className="font-semibold text-navy">{index + 1}. </span>
              {step}
            </li>
          ))}
        </ol>
      </div>
    </IndulgenceSection>
  );
}
