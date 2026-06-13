"use client";

import { LocalPlanToolShell } from "@/components/sin-and-temptation/LocalPlanToolShell";

const fields = [
  { id: "parishContact", label: "Parish contact", placeholder: "Parish name, office number, or pastoral contact.", multiline: false },
  { id: "priestOrDeaconContact", label: "Priest or deacon contact", placeholder: "Who is helping with pastoral guidance?", multiline: false },
  { id: "funeralHomeContact", label: "Funeral home contact", placeholder: "Funeral director or funeral home details.", multiline: false },
  { id: "cemeteryOrColumbarium", label: "Cemetery or columbarium", placeholder: "Burial place, mausoleum, or columbarium notes." },
  { id: "burialOrCremationNotes", label: "Burial or cremation notes", placeholder: "Traditional burial, cremation timing, vessel, or interment notes." },
  { id: "vigilDetails", label: "Vigil details", placeholder: "Wake, visitation, Scripture, Rosary, or family prayer notes." },
  { id: "funeralMassDetails", label: "Funeral Mass details", placeholder: "Date, parish, celebrant, readings, and liturgy notes." },
  { id: "committalDetails", label: "Rite of Committal details", placeholder: "Cemetery plans, timing, and committal guidance." },
  { id: "scriptureIdeas", label: "Scripture reading ideas", placeholder: "Readings to discuss with the parish." },
  { id: "musicNotes", label: "Music notes", placeholder: "Hymns or liturgical music ideas to review with the parish." },
  { id: "massIntentions", label: "Mass intentions", placeholder: "Masses to request for the deceased." },
  { id: "familyTasks", label: "Family tasks", placeholder: "Who is helping with calls, clothing, readings, memorial card details, or travel?" },
];

const initialValues = Object.fromEntries(fields.map((field) => [field.id, ""]));

function buildCopyText(values: Record<string, string>) {
  return [
    "Catholic Funeral Planning Notes",
    "",
    `Parish contact: ${values.parishContact || "Not filled in yet."}`,
    `Priest or deacon contact: ${values.priestOrDeaconContact || "Not filled in yet."}`,
    `Funeral home contact: ${values.funeralHomeContact || "Not filled in yet."}`,
    `Cemetery or columbarium: ${values.cemeteryOrColumbarium || "Not filled in yet."}`,
    `Burial or cremation notes: ${values.burialOrCremationNotes || "Not filled in yet."}`,
    `Vigil details: ${values.vigilDetails || "Not filled in yet."}`,
    `Funeral Mass details: ${values.funeralMassDetails || "Not filled in yet."}`,
    `Rite of Committal details: ${values.committalDetails || "Not filled in yet."}`,
    `Scripture reading ideas: ${values.scriptureIdeas || "Not filled in yet."}`,
    `Music notes: ${values.musicNotes || "Not filled in yet."}`,
    `Mass intentions: ${values.massIntentions || "Not filled in yet."}`,
    `Family tasks: ${values.familyTasks || "Not filled in yet."}`,
  ].join("\n");
}

export function CatholicFuneralPlanningTool() {
  return (
    <LocalPlanToolShell
      eyebrow="Local-only planning tool"
      title="Catholic Funeral Planning Notes"
      summary="Use this to gather practical notes before meeting with the parish and funeral home. These notes stay only in this browser if you choose to save them."
      storageKey="catholic-funeral-planning-notes"
      fields={[...fields]}
      initialValues={initialValues}
      buildCopyText={buildCopyText}
      copyEventName="funeral_planning_notes_copy"
      printEventName="funeral_planning_notes_print"
    />
  );
}
