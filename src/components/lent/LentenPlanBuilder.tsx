"use client";

import { LocalPlanToolShell } from "@/components/sin-and-temptation/LocalPlanToolShell";

const fields = [
  { id: "prayerPractice", label: "My prayer practice this Lent", placeholder: "A daily, weekly, or Friday prayer rhythm." },
  { id: "fastingSacrifice", label: "My fasting or sacrifice", placeholder: "A healthy, concrete form of fasting or self-denial." },
  { id: "almsgivingWork", label: "My almsgiving or work of mercy", placeholder: "One clear act of generosity, service, or mercy." },
  { id: "confessionPlan", label: "My Confession plan", placeholder: "Choose a date, parish time, or simple next step." },
  { id: "scripturePlan", label: "My Scripture or spiritual reading plan", placeholder: "A Gospel, Psalm, devotion, or spiritual book." },
  { id: "sinOrAttachment", label: "One sin or attachment I am asking Jesus to heal", placeholder: "Name it simply and honestly." },
  { id: "virtue", label: "One virtue I will practice", placeholder: "Humility, patience, charity, chastity, gratitude, diligence, trust..." },
  { id: "personToServeOrForgive", label: "One person I will serve or forgive", placeholder: "A concrete person or relationship to bring before God." },
  { id: "holyWeekPlan", label: "My Holy Week plan", placeholder: "Palm Sunday, Stations, Confession, Triduum, silence, or family prayer." },
] as const;

const initialValues = Object.fromEntries(fields.map((field) => [field.id, ""]));

function buildCopyText(values: Record<string, string>) {
  return [
    "My Lenten Plan",
    "",
    `Prayer practice: ${values.prayerPractice || "Not filled in yet."}`,
    `Fasting or sacrifice: ${values.fastingSacrifice || "Not filled in yet."}`,
    `Almsgiving or work of mercy: ${values.almsgivingWork || "Not filled in yet."}`,
    `Confession plan: ${values.confessionPlan || "Not filled in yet."}`,
    `Scripture or spiritual reading plan: ${values.scripturePlan || "Not filled in yet."}`,
    `Sin or attachment I am asking Jesus to heal: ${values.sinOrAttachment || "Not filled in yet."}`,
    `Virtue to practice: ${values.virtue || "Not filled in yet."}`,
    `Person to serve or forgive: ${values.personToServeOrForgive || "Not filled in yet."}`,
    `Holy Week plan: ${values.holyWeekPlan || "Not filled in yet."}`,
  ].join("\n");
}

export function LentenPlanBuilder() {
  return (
    <div id="lenten-plan-builder">
      <LocalPlanToolShell
        eyebrow="Local-only planner"
        title="Build Your Lenten Plan"
        summary="Help your Lent become simple, realistic, and prayerful. A small faithful plan is often better than a dramatic one that cannot be sustained."
        storageKey="daily-oratory-lenten-plan"
        fields={[...fields]}
        initialValues={initialValues}
        buildCopyText={buildCopyText}
        copyEventName="lenten_plan_copy"
        printEventName="lenten_plan_print"
      />
    </div>
  );
}

