import content from "./strongholdsPrayers.json" with { type: "json" };
import type { StrongholdCategory } from "@/lib/strongholdsState";
// Original devotional prayers, revision 10. Canonical text: strongholdsPrayers.json.
// Independently reviewed for local draft; human publication approval remains pending.
export const strongholdsIntentionPrayers: readonly { title: string; text: string }[] = content.strongholdsIntentionPrayers;
export const strongholdsCategoryPrayers: Record<StrongholdCategory,string> = content.strongholdsCategoryPrayers;
export const strongholdsJourneyPrayers: readonly string[] = content.strongholdsJourneyPrayers;
export const strongholdsResourcePrayers: readonly string[] = content.strongholdsResourcePrayers;
export const strongholdsFormationPrayers: readonly string[] = content.strongholdsFormationPrayers;
