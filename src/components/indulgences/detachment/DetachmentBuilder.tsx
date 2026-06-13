"use client";

import { LocalPlanToolShell } from "@/components/sin-and-temptation/LocalPlanToolShell";

const fields = [
  {
    id: "attachmentOrSin",
    label: "What attachment or sin am I bringing to Jesus?",
    placeholder: "Name it simply and honestly before God.",
  },
  {
    id: "nearOccasion",
    label: "What near occasion should I avoid?",
    placeholder: "A place, habit, app, conversation, or pattern to step away from.",
  },
  {
    id: "oppositeVirtue",
    label: "What opposite virtue should I practice?",
    placeholder: "For example: humility, patience, chastity, gratitude, diligence, trust.",
  },
  {
    id: "temptationPrayer",
    label: "What short prayer will I pray in temptation?",
    placeholder: "Jesus, detach my heart from sin and keep me close to You.",
  },
  {
    id: "sacramentalStep",
    label: "What sacramental step should I take?",
    placeholder: "Confession, Mass, Communion, Adoration, or a firm plan for the next sacramental step.",
  },
  {
    id: "indulgencedWork",
    label: "What indulgenced work am I preparing for?",
    placeholder: "A visit, prayer, adoration, work of mercy, or other indulgenced act.",
  },
  {
    id: "charityOrPenance",
    label: "What one act of charity or penance will I offer?",
    placeholder: "A concrete offering rooted in love and conversion.",
  },
] as const;

const initialValues = Object.fromEntries(fields.map((field) => [field.id, ""]));

function buildCopyText(values: Record<string, string>) {
  return [
    "My Detachment from Sin Plan",
    "",
    `Attachment or sin named: ${values.attachmentOrSin || "Not filled in yet."}`,
    `Near occasion to avoid: ${values.nearOccasion || "Not filled in yet."}`,
    `Opposite virtue: ${values.oppositeVirtue || "Not filled in yet."}`,
    `Short prayer: ${values.temptationPrayer || "Not filled in yet."}`,
    `Sacramental step: ${values.sacramentalStep || "Not filled in yet."}`,
    `Indulgenced work: ${values.indulgencedWork || "Not filled in yet."}`,
    `Act of charity or penance: ${values.charityOrPenance || "Not filled in yet."}`,
    "",
    "Reminder: This plan is a spiritual aid. It does not determine whether a plenary indulgence has been gained. Trust God's mercy and speak with a priest if unsure.",
  ].join("\n");
}

export function DetachmentBuilder() {
  return (
    <div id="detachment-builder">
      <LocalPlanToolShell
        eyebrow="Prayerful planning"
        title="Build a Detachment from Sin Plan"
        summary="Help your next step become concrete. This plan is meant to support grace, honesty, and peace rather than anxious self-analysis."
        storageKey="detachment-from-sin-plan"
        fields={[...fields]}
        initialValues={initialValues}
        buildCopyText={buildCopyText}
        copyEventName="detachment_plan_copy"
        printEventName="detachment_plan_print"
      />
    </div>
  );
}
