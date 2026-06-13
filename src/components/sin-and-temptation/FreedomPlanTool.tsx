"use client";

import { LocalPlanToolShell } from "@/components/sin-and-temptation/LocalPlanToolShell";

const initialValues = {
  pattern: "",
  oppositeVirtue: "",
  sacramentalStep: "",
  prayerStep: "",
  safeguard: "",
  workOfMercy: "",
  accountabilityStep: "",
  nextConfession: "",
};

export function FreedomPlanTool() {
  return (
    <LocalPlanToolShell
      eyebrow="Local-only tool"
      title="Freedom Plan"
      summary="Freedom in Christ grows when grace, virtue, practical safeguards, and concrete love begin working together."
      storageKey="daily-oratory-freedom-plan"
      initialValues={initialValues}
      copyEventName="freedom_plan_copy"
      fields={[
        { id: "pattern", label: "Vice or pattern", placeholder: "What area are you bringing to Jesus?" },
        { id: "oppositeVirtue", label: "Opposite virtue", placeholder: "Which virtue needs to grow here?" },
        { id: "sacramentalStep", label: "Sacramental step", placeholder: "What sacramental step will you take?" },
        { id: "prayerStep", label: "Prayer step", placeholder: "What daily prayer step will support the change?" },
        { id: "safeguard", label: "Practical safeguard", placeholder: "What concrete safeguard will help?" },
        { id: "workOfMercy", label: "Work of mercy", placeholder: "What act of mercy can re-train your heart in love?" },
        { id: "accountabilityStep", label: "Accountability step", placeholder: "Who or what will help you stay honest?" },
        { id: "nextConfession", label: "Next confession", placeholder: "When do you plan to return to the sacrament?" },
      ]}
      buildCopyText={(values) =>
        [
          "Freedom Plan",
          "",
          `Vice or pattern: ${values.pattern}`,
          `Opposite virtue: ${values.oppositeVirtue}`,
          `Sacramental step: ${values.sacramentalStep}`,
          `Prayer step: ${values.prayerStep}`,
          `Practical safeguard: ${values.safeguard}`,
          `Work of mercy: ${values.workOfMercy}`,
          `Accountability step: ${values.accountabilityStep}`,
          `Next confession: ${values.nextConfession}`,
        ].join("\n")
      }
    />
  );
}
