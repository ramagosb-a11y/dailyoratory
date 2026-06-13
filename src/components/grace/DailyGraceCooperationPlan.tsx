"use client";

import { LocalPlanToolShell } from "@/components/sin-and-temptation/LocalPlanToolShell";

export function DailyGraceCooperationPlan() {
  return (
    <LocalPlanToolShell
      eyebrow="Daily plan"
      title="Daily Grace Cooperation Plan"
      summary="Build a simple daily plan for responding to grace through prayer, virtue, sacramental openness, and charity."
      storageKey="daily-grace-cooperation-plan"
      copyEventName="grace_reflection_copy"
      printEventName="grace_plan_print"
      fields={[
        { id: "graceAskedFor", label: "Grace I am asking for today", placeholder: "Patience, repentance, courage, peace..." },
        { id: "temptationToResist", label: "Temptation I need help resisting", placeholder: "A pattern, pressure, or weakness needing grace..." },
        { id: "virtueToPractice", label: "Virtue I will practice", placeholder: "Humility, purity, patience, trust, charity..." },
        { id: "sacramentOrPrayerStep", label: "Sacrament or prayer step", placeholder: "Mass, Confession, Rosary, Scripture, silence..." },
        { id: "actOfCharity", label: "Act of charity", placeholder: "A person to help, forgive, encourage, or serve..." },
        { id: "promptNotToIgnore", label: "One prompt I should not ignore", placeholder: "A good action or holy inspiration I need to answer quickly..." },
      ]}
      initialValues={{
        graceAskedFor: "",
        temptationToResist: "",
        virtueToPractice: "",
        sacramentOrPrayerStep: "",
        actOfCharity: "",
        promptNotToIgnore: "",
      }}
      buildCopyText={(values) =>
        [
          "Daily Grace Cooperation Plan",
          "",
          `Grace I am asking for today: ${values.graceAskedFor || "Not filled in."}`,
          `Temptation I need help resisting: ${values.temptationToResist || "Not filled in."}`,
          `Virtue I will practice: ${values.virtueToPractice || "Not filled in."}`,
          `Sacrament or prayer step: ${values.sacramentOrPrayerStep || "Not filled in."}`,
          `Act of charity: ${values.actOfCharity || "Not filled in."}`,
          `One prompt I should not ignore: ${values.promptNotToIgnore || "Not filled in."}`,
        ].join("\n")
      }
    />
  );
}
