"use client";

import { LocalPlanToolShell } from "@/components/sin-and-temptation/LocalPlanToolShell";

const initialValues = {
  commonFall: "",
  place: "",
  people: "",
  deviceOrMedia: "",
  emotion: "",
  timeOfDay: "",
  safeguard: "",
  replacement: "",
};

export function NearOccasionAuditTool() {
  return (
    <LocalPlanToolShell
      eyebrow="Local-only tool"
      title="Near Occasion Audit"
      summary="Notice the patterns around a common fall so you can remove the trap and replace it with a faithful alternative."
      storageKey="daily-oratory-near-occasion-audit"
      initialValues={initialValues}
      copyEventName="near_occasion_audit_copy"
      fields={[
        { id: "commonFall", label: "Common fall", placeholder: "What repeated struggle are you trying to understand?" },
        { id: "place", label: "Before it happens, where am I?", placeholder: "Name the place or setting." },
        { id: "people", label: "Who am I with?", placeholder: "Is anyone usually present, absent, or involved?" },
        { id: "deviceOrMedia", label: "What device, app, or media is involved?", placeholder: "Name the digital or media setting if relevant." },
        { id: "emotion", label: "What emotion is present?", placeholder: "What do you usually feel before the fall?" },
        { id: "timeOfDay", label: "What time of day?", placeholder: "When does this usually happen?" },
        { id: "safeguard", label: "What safeguard will I use?", placeholder: "Name one practical protection." },
        { id: "replacement", label: "What good replacement will I choose?", placeholder: "What good act, place, or habit will replace the near occasion?" },
      ]}
      buildCopyText={(values) =>
        [
          "Near Occasion Audit",
          "",
          `Common fall: ${values.commonFall}`,
          `Where am I: ${values.place}`,
          `Who am I with: ${values.people}`,
          `Device or media involved: ${values.deviceOrMedia}`,
          `Emotion present: ${values.emotion}`,
          `Time of day: ${values.timeOfDay}`,
          `Safeguard: ${values.safeguard}`,
          `Replacement: ${values.replacement}`,
        ].join("\n")
      }
    />
  );
}
