import { familyFaqs } from "@/data/familyFaqs";
import { familyFocusOptions, familyConversationStarters, familyStages, familyStudyLinks, familyTimeOptions, relatedFamilyTools } from "@/data/familyPage";
import { familyPrayers } from "@/data/familyPrayers";
import { familyResources } from "@/data/familyResources";
import { familyVirtues } from "@/data/familyVirtues";
import type { FamilyRuleOfLifePlan, FamilyStage } from "@/types/family";

type RuleBuilderInput = {
  familyStage: FamilyStage;
  timeAvailable: string;
  focus: string;
  createdAt: string;
};

const dailyPrayerByTime: Record<string, string> = {
  "2 minutes daily": "Make the Sign of the Cross, name one intention, and pray one short prayer together.",
  "5 minutes daily": "Pray briefly together after dinner or before bed with thanksgiving, one need, and an Our Father.",
  "10 minutes daily": "Read a short Gospel passage, share one word that stood out, and end with a blessing.",
  "15 minutes daily": "Keep a short family prayer time with Scripture, intercessions, and one decade or simple devotion.",
  "30 minutes daily": "Set aside a fuller prayer window with Scripture, quiet, intercession, and a weekly family examen.",
  "Flexible weekly rhythm": "Choose one dependable prayer rhythm for the week and keep daily prayer very simple on busy days.",
};

const weeklyPracticeByFocus: Record<string, string> = {
  prayer: "Choose one shared prayer time on Sunday evening to begin the week.",
  "Sunday Mass": "Prepare for Mass the night before and talk about one grace from the homily afterward.",
  Scripture: "Read the Sunday Gospel together before Mass or one Psalm during the week.",
  forgiveness: "Keep one weekly family check-in where each person can ask forgiveness and begin again.",
  virtue: "Choose one virtue of the week and practice it in one concrete way.",
  "family meals": "Protect one meal this week for prayer, conversation, and no rushing.",
  "technology boundaries": "Keep one screen-free hour or one no-phone meal each week.",
  service: "Choose one small work of mercy as a household this week.",
  "liturgical seasons": "Add one seasonal sign or prayer at home this week.",
  confession: "Plan one examination of conscience or parish confession visit this month.",
  "family peace": "Keep one calm family reset moment with prayer before discussing tension.",
  "exploring faith": "Attend Mass, ask one question, or read one Catholic guide together this week.",
};

const virtueByFocus: Record<string, string> = {
  prayer: "Faithfulness",
  "Sunday Mass": "Reverence",
  Scripture: "Attentiveness",
  forgiveness: "Mercy",
  virtue: "Patience",
  "family meals": "Gratitude",
  "technology boundaries": "Self-control",
  service: "Generosity",
  "liturgical seasons": "Hope",
  confession: "Humility",
  "family peace": "Gentleness",
  "exploring faith": "Trust",
};

const mercyByStage: Record<FamilyStage, string> = {
  "single-person-home": "Pray for one person in need and make your home a place of hospitality.",
  "married-couple": "Offer one hidden act of service for your spouse this week.",
  "young-children": "Practice quick forgiveness and one simple family act of kindness.",
  teens: "Choose one family service or listening moment without screens.",
  "blended-family": "Make room for patient listening and one act of welcome toward each other.",
  "single-parent": "Receive help when needed and offer one act of mercy without perfectionism.",
  grandparents: "Pray for children and grandchildren by name and offer steady encouragement.",
  "empty-nest": "Call or visit someone who may feel forgotten.",
  caregiving: "Offer the hidden labor of care to God and ask for practical support.",
  homebound: "Pray for the Church and stay connected to one loved one this week.",
  "mixed-faith": "Choose one respectful act of love that does not pressure anyone.",
  returning: "Begin again gently and show mercy where shame usually speaks loudest.",
  exploring: "Ask one honest question and offer one small prayer for guidance.",
};

const homePracticeByStage: Record<FamilyStage, string> = {
  "single-person-home": "Create one visible prayer corner with a Bible or crucifix.",
  "married-couple": "Begin and end one day this week with a shared blessing.",
  "young-children": "Keep prayer very short and repeatable at the same time each day.",
  teens: "Protect one phone-free conversation or meal this week.",
  "blended-family": "Keep expectations realistic and repeat one stable prayer or meal rhythm.",
  "single-parent": "Choose one practice that is sustainable, not idealized.",
  grandparents: "Display a family saint or prayer intention in a visible place.",
  "empty-nest": "Make one room or corner a peaceful place for prayer and hospitality.",
  caregiving: "Simplify the home rhythm around prayer, rest, and gentleness.",
  homebound: "Keep holy water, a Bible, or the Sunday readings close by.",
  "mixed-faith": "Use language and practices that stay honest, gentle, and respectful.",
  returning: "Start with one visible sign of welcome for Christ in the home.",
  exploring: "Begin with a simple prayer space and one trusted Catholic resource.",
};

const conversationPromptByFocus: Record<string, string> = {
  prayer: "What grace do we need from God this week?",
  "Sunday Mass": "What did we hear or notice at Mass?",
  Scripture: "What word or verse stood out to us?",
  forgiveness: "What does beginning again look like right now?",
  virtue: "What virtue do we most need this week?",
  "family meals": "What are we thankful for today?",
  "technology boundaries": "What helps our home feel more peaceful and attentive?",
  service: "Who needs our help this week?",
  "liturgical seasons": "How can we live this Church season at home?",
  confession: "Where do we need God's mercy?",
  "family peace": "What would make our home more gentle this week?",
  "exploring faith": "What question about God or the Church do we want to ask next?",
};

const blessingByFocus: Record<string, string> = {
  prayer: "Lord Jesus, stay with our family and teach us to pray. Amen.",
  "Sunday Mass": "Lord, prepare our hearts to worship You with faith and gratitude. Amen.",
  Scripture: "Holy Spirit, open our hearts to hear and live Your Word. Amen.",
  forgiveness: "Jesus, make us merciful and help us begin again. Amen.",
  virtue: "Holy Spirit, grow virtue in our home this week. Amen.",
  "family meals": "Bless our table, our conversation, and the people who are not here with us. Amen.",
  "technology boundaries": "Lord, help us use our attention for truth, peace, and love. Amen.",
  service: "Jesus, teach us to serve You in others. Amen.",
  "liturgical seasons": "Lord, let this season of the Church shape our hearts. Amen.",
  confession: "Merciful Father, lead us back to Your peace. Amen.",
  "family peace": "Jesus, guard our home in gentleness and truth. Amen.",
  "exploring faith": "Holy Spirit, guide us closer to Christ and His Church. Amen.",
};

export function getFamilyPrayers() {
  return [...familyPrayers].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getFamilyVirtues() {
  return [...familyVirtues].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getFamilyVirtueOfWeek(date = new Date()) {
  const virtues = getFamilyVirtues();
  const start = Date.UTC(date.getUTCFullYear(), 0, 1);
  const current = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
  const week = Math.floor((current - start) / (7 * 24 * 60 * 60 * 1000));
  return virtues[week % virtues.length];
}

export function getFamilyResources() {
  return [...familyResources].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getFamilyFaqs() {
  return [...familyFaqs].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function buildFamilyRuleOfLifePlan(input: RuleBuilderInput): FamilyRuleOfLifePlan {
  return {
    ...input,
    dailyPrayerPractice: dailyPrayerByTime[input.timeAvailable] ?? dailyPrayerByTime["5 minutes daily"],
    weeklyPractice: weeklyPracticeByFocus[input.focus] ?? weeklyPracticeByFocus.prayer,
    familyVirtue: virtueByFocus[input.focus] ?? "Faithfulness",
    mercyPractice: mercyByStage[input.familyStage] ?? mercyByStage["married-couple"],
    homePractice: homePracticeByStage[input.familyStage] ?? homePracticeByStage["married-couple"],
    conversationPrompt: conversationPromptByFocus[input.focus] ?? conversationPromptByFocus.prayer,
    blessingPrayer: blessingByFocus[input.focus] ?? blessingByFocus.prayer,
  };
}

export function formatFamilyRuleForCopy(plan: FamilyRuleOfLifePlan) {
  return [
    "Your Family Rule of Life",
    "",
    `Family stage: ${familyStages.find((stage) => stage.value === plan.familyStage)?.label ?? plan.familyStage}`,
    `Time available: ${plan.timeAvailable}`,
    `Focus: ${plan.focus}`,
    "",
    `Daily prayer practice: ${plan.dailyPrayerPractice}`,
    `Weekly practice: ${plan.weeklyPractice}`,
    `Family virtue: ${plan.familyVirtue}`,
    `Mercy practice: ${plan.mercyPractice}`,
    `Home environment practice: ${plan.homePractice}`,
    `Conversation prompt: ${plan.conversationPrompt}`,
    `Blessing or prayer: ${plan.blessingPrayer}`,
  ].join("\n");
}

export function formatFamilyRuleForPrint(plan: FamilyRuleOfLifePlan) {
  return formatFamilyRuleForCopy(plan);
}

export function formatConversationCardsForCopy() {
  return ["Family Conversation Starters", "", ...familyConversationStarters.map((item) => `- ${item}`)].join("\n");
}

export function getRelatedFamilyTools() {
  return [...relatedFamilyTools];
}

export function getFamilyStudyLinks() {
  return [...familyStudyLinks];
}

export { familyConversationStarters, familyFocusOptions, familyStages, familyTimeOptions };
