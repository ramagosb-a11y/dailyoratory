"use client";

import { LocalPlanToolShell } from "@/components/sin-and-temptation/LocalPlanToolShell";

const initialValues = {
  pattern: "",
  triggers: "",
  nearOccasions: "",
  oppositeVirtue: "",
  safeguard: "",
  prayer: "",
  confessionPlan: "",
};

export function HabitualSinPatternTool() {
  return (
    <LocalPlanToolShell
      eyebrow="Local-only tool"
      title="Habitual Sin Pattern Reflection"
      summary="Use this reflection to notice patterns honestly, remove occasions, and build a small plan before temptation comes."
      storageKey="daily-oratory-habitual-sin-pattern"
      initialValues={initialValues}
      fields={[
        { id: "pattern", label: "What pattern am I trying to bring to Jesus?", placeholder: "Describe the repeated pattern in simple words." },
        { id: "triggers", label: "Common triggers", placeholder: "When does this pattern usually begin?" },
        { id: "nearOccasions", label: "Near occasions to avoid", placeholder: "Which places, habits, or situations often lead toward a fall?" },
        { id: "oppositeVirtue", label: "Opposite virtue to practice", placeholder: "What virtue would directly resist this pattern?" },
        { id: "safeguard", label: "One safeguard", placeholder: "Name one concrete safeguard you can use before temptation comes." },
        { id: "prayer", label: "One prayer", placeholder: "Write a short prayer to use quickly." },
        { id: "confessionPlan", label: "Confession plan", placeholder: "When and how will you bring this to Confession?" },
      ]}
      buildCopyText={(values) =>
        [
          "Habitual Sin Pattern Reflection",
          "",
          `Pattern: ${values.pattern}`,
          `Common triggers: ${values.triggers}`,
          `Near occasions to avoid: ${values.nearOccasions}`,
          `Opposite virtue to practice: ${values.oppositeVirtue}`,
          `One safeguard: ${values.safeguard}`,
          `One prayer: ${values.prayer}`,
          `Confession plan: ${values.confessionPlan}`,
        ].join("\n")
      }
    />
  );
}
