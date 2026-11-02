import type { IndulgencePlan } from "@/types/indulgences";

const intentionTypes = ["my-own-soul", "deceased-loved-one", "holy-souls-in-purgatory", "soul-most-in-need"];
const booleanFields = ["confessionPlannedOrCompleted", "communionPlannedOrCompleted", "prayedForPopeIntentions", "prayedForDetachment", "workCompletedOrPlanned"] as const;

/** Accept only the complete, known plan shape; never merge arbitrary stored JSON. */
export function parseStoredIndulgencePlan(raw: string, allowedWorks: readonly string[]): IndulgencePlan | null {
  try {
    const value: unknown = JSON.parse(raw);
    if (!value || typeof value !== "object" || Array.isArray(value)) return null;
    const plan = value as Record<string, unknown>;
    if (typeof plan.selectedWork !== "string" || !allowedWorks.includes(plan.selectedWork)) return null;
    if (typeof plan.intentionType !== "string" || !intentionTypes.includes(plan.intentionType)) return null;
    if (typeof plan.intentionName !== "string" || plan.intentionName.length > 500) return null;
    if (typeof plan.createdAt !== "string" || !Number.isFinite(Date.parse(plan.createdAt))) return null;
    if (!booleanFields.every((field) => typeof plan[field] === "boolean")) return null;
    return {
      selectedWork: plan.selectedWork as IndulgencePlan["selectedWork"],
      intentionType: plan.intentionType as IndulgencePlan["intentionType"],
      intentionName: plan.intentionName,
      createdAt: plan.createdAt,
      confessionPlannedOrCompleted: plan.confessionPlannedOrCompleted as boolean,
      communionPlannedOrCompleted: plan.communionPlannedOrCompleted as boolean,
      prayedForPopeIntentions: plan.prayedForPopeIntentions as boolean,
      prayedForDetachment: plan.prayedForDetachment as boolean,
      workCompletedOrPlanned: plan.workCompletedOrPlanned as boolean,
    };
  } catch { return null; }
}
