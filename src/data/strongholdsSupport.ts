// Original devotional applications, independently reviewed for this implementation.
// Scripture quotations remain in the source-verified central archive.
export const strongholdsSupport = {
  immediatePrayer: "Jesus, help me turn toward You and choose the good.",
  immediateAction: "Step away from the trigger when safe. Choose one small, responsible action.",
  reassurance: "An unwanted thought or impulse is not the same as freely welcoming it or choosing to act on it. You do not need to settle every doubt before turning to Christ and choosing the good.",
  beginAgain: "If you have chosen wrongly, pause without despair. Turn to Christ, stop the harmful action, and make an appropriate repair where possible. Speak with a priest about Confession and the support you need.",
  mercyPrayer: "Lord Jesus, I turn to You in need of mercy. Help me be honest without despair, stop what harms, and make a faithful next choice. Lead me to the sacramental and practical help I need. Amen.",
  sacramentalBoundary: "This tool cannot determine guilt, grant absolution, or decide whether you should receive Communion.",
  gospel: "In Matthew 4:1–11, Jesus answers temptation with Scripture and remains faithful to the Father. Read His response in context; ask whether any false promise is attracting you, what truth you can remember, and what faithful response is possible now.",
  gospelBoundary: "This is a devotional application, not a method that guarantees relief or identifies the origin of your thoughts. The account is not an instruction to imitate Christ’s forty-day fast.",
  planSupport: "If this is difficult, I can seek support from a trusted person. I can hold that intention silently; no name is needed.",
} as const;

export type StrongholdsPlanCircumstance = { name: string; plan: string };
export function buildStrongholdsReturnPlan(circumstances: readonly StrongholdsPlanCircumstance[], action: string, fallback: string) {
  const selected = action.trim();
  return {
    when: circumstances.length ? `If I notice ${circumstances.map(item => item.name.toLowerCase()).join(" or ")} before this struggle` : "If I notice this struggle returning",
    response: selected || fallback,
    chosen: Boolean(selected),
    circumstances: circumstances.map(item => ({ name: item.name, plan: item.plan })),
  };
}
