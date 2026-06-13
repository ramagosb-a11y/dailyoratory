"use client";

import { LocalPlanToolShell } from "@/components/sin-and-temptation/LocalPlanToolShell";

const initialValues = {
  recurringSins: "",
  recurringEmotions: "",
  triggers: "",
  excuses: "",
  hardestVirtue: "",
  likelyRootFault: "",
  oppositeVirtue: "",
  weeklyPractice: "",
  confessionNote: "",
};

export function PredominantFaultDiscernmentTool() {
  return (
    <LocalPlanToolShell
      eyebrow="Local-only tool"
      title="My Predominant Fault Reflection"
      summary="This is a tool for prayerful self-knowledge. It does not diagnose guilt or replace Confession or priestly guidance."
      storageKey="daily-oratory-predominant-fault"
      initialValues={initialValues}
      copyEventName="predominant_fault_tool_copy"
      fields={[
        { id: "recurringSins", label: "Recurring sins", placeholder: "What do you confess or struggle with most often?" },
        { id: "recurringEmotions", label: "Recurring emotions", placeholder: "What moods or reactions appear again and again?" },
        { id: "triggers", label: "Common triggers", placeholder: "What circumstances often precede the struggle?" },
        { id: "excuses", label: "Repeated excuses", placeholder: "What do you defend, rationalize, or excuse quickly?" },
        { id: "hardestVirtue", label: "Hardest virtue", placeholder: "Which virtue feels hardest to practice right now?" },
        { id: "likelyRootFault", label: "Likely root fault", placeholder: "Which deeper weakness may be feeding the pattern?" },
        { id: "oppositeVirtue", label: "Opposite virtue", placeholder: "What virtue should you practice steadily?" },
        { id: "weeklyPractice", label: "One weekly practice", placeholder: "Choose one small practice for this week." },
        { id: "confessionNote", label: "Confession note", placeholder: "What do you want to bring honestly to Confession?" },
      ]}
      buildCopyText={(values) =>
        [
          "My Predominant Fault Reflection",
          "",
          `Recurring sins: ${values.recurringSins}`,
          `Recurring emotions: ${values.recurringEmotions}`,
          `Common triggers: ${values.triggers}`,
          `Repeated excuses: ${values.excuses}`,
          `Hardest virtue: ${values.hardestVirtue}`,
          `Likely root fault: ${values.likelyRootFault}`,
          `Opposite virtue: ${values.oppositeVirtue}`,
          `One weekly practice: ${values.weeklyPractice}`,
          `Confession note: ${values.confessionNote}`,
        ].join("\n")
      }
    />
  );
}
