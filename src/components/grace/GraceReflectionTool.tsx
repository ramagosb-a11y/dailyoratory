"use client";

import { LocalPlanToolShell } from "@/components/sin-and-temptation/LocalPlanToolShell";

export function GraceReflectionTool() {
  return (
    <LocalPlanToolShell
      eyebrow="Grace reflection"
      title="Where Do I Need Grace Today?"
      summary="Use this local reflection to ask honestly where you need God’s help today and how you can respond with prayer, virtue, charity, and sacramental openness."
      storageKey="grace-reflection-tool"
      copyEventName="grace_reflection_copy"
      printEventName="grace_plan_print"
      fields={[
        { id: "needGraceToday", label: "Where do I need God’s help today?", placeholder: "A weakness, sorrow, decision, or desire that needs grace..." },
        { id: "temptationOrWeakness", label: "What temptation or weakness needs grace?", placeholder: "A recurring struggle or fragile place..." },
        { id: "goodAction", label: "What good action is God inviting me to choose?", placeholder: "A concrete act of obedience, prayer, mercy, or truth..." },
        { id: "sacramentOrPrayerStep", label: "What sacrament or prayer step should I take?", placeholder: "Mass, Confession, Adoration, Rosary, Scripture, silence..." },
        { id: "virtueToPractice", label: "What virtue should I practice?", placeholder: "Humility, patience, chastity, trust, charity..." },
        { id: "personToServe", label: "What person may God be asking me to love or serve?", placeholder: "A family member, friend, stranger, or someone difficult..." },
        { id: "graceToAskFor", label: "What grace do I want to ask for?", placeholder: "Strength, peace, clarity, repentance, courage..." },
      ]}
      initialValues={{
        needGraceToday: "",
        temptationOrWeakness: "",
        goodAction: "",
        sacramentOrPrayerStep: "",
        virtueToPractice: "",
        personToServe: "",
        graceToAskFor: "",
      }}
      buildCopyText={(values) =>
        [
          "My Grace Reflection",
          "",
          `Where I need God's help today: ${values.needGraceToday || "Not filled in."}`,
          `Temptation or weakness needing grace: ${values.temptationOrWeakness || "Not filled in."}`,
          `Good action God is inviting me to choose: ${values.goodAction || "Not filled in."}`,
          `Sacrament or prayer step: ${values.sacramentOrPrayerStep || "Not filled in."}`,
          `Virtue to practice: ${values.virtueToPractice || "Not filled in."}`,
          `Person to love or serve: ${values.personToServe || "Not filled in."}`,
          `Grace I want to ask for: ${values.graceToAskFor || "Not filled in."}`,
        ].join("\n")
      }
    />
  );
}
