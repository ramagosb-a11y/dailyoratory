"use client";

import { LocalPlanToolShell } from "@/components/sin-and-temptation/LocalPlanToolShell";

const initialValues = {
  commonTemptation: "",
  warningSigns: "",
  firstResponse: "",
  accountabilityPerson: "",
  prayer: "Jesus, I reject this temptation. I choose You. Give me grace now. Mary, help me. Amen.",
  safePlace: "",
  oppositeVirtue: "",
  scriptureReference: "",
  confessionPlan: "",
};

export function TemptationEmergencyPlan() {
  return (
    <LocalPlanToolShell
      eyebrow="Local-only tool"
      title="Temptation Emergency Plan"
      summary="Build your response before the next temptation arrives so you are ready to pray, move, and choose the good quickly."
      storageKey="daily-oratory-temptation-emergency-plan"
      initialValues={initialValues}
      copyEventName="temptation_plan_copy"
      printEventName="temptation_plan_print"
      fields={[
        { id: "commonTemptation", label: "My common temptation", placeholder: "Name the temptation in clear but simple terms." },
        { id: "warningSigns", label: "Warning signs", placeholder: "What usually tells you the temptation is approaching?" },
        { id: "firstResponse", label: "What I will do first", placeholder: "What is your first concrete response?" },
        { id: "accountabilityPerson", label: "Person I can contact", placeholder: "Who can help you stay honest and steady?" },
        { id: "prayer", label: "Prayer I will say", placeholder: "Write the prayer you want ready at once." },
        { id: "safePlace", label: "Place I will move to", placeholder: "Where will you go to leave the near occasion?" },
        { id: "oppositeVirtue", label: "Opposite virtue", placeholder: "What virtue do you want to practice instead?" },
        { id: "scriptureReference", label: "Scripture verse", placeholder: "Which verse will strengthen you?" },
        { id: "confessionPlan", label: "Confession plan if I fall", placeholder: "How will you return to mercy without delay?" },
      ]}
      buildCopyText={(values) =>
        [
          "Temptation Emergency Plan",
          "",
          `My common temptation: ${values.commonTemptation}`,
          `Warning signs: ${values.warningSigns}`,
          `What I will do first: ${values.firstResponse}`,
          `Person I can contact: ${values.accountabilityPerson}`,
          `Prayer I will say: ${values.prayer}`,
          `Place I will move to: ${values.safePlace}`,
          `Opposite virtue: ${values.oppositeVirtue}`,
          `Scripture verse: ${values.scriptureReference}`,
          `Confession plan if I fall: ${values.confessionPlan}`,
        ].join("\n")
      }
    />
  );
}
