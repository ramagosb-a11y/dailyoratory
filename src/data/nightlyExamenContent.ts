export type NightlyContentKey = "presence" | "gratitude" | "review" | "notice" | "mercy" | "tomorrow";

export type NightlyContent = { instruction?: string; deeper: string[]; prayer?: string; reviewRequired?: boolean };

export const nightlyExamenContent: Record<NightlyContentKey, NightlyContent> = {
  presence: {
    deeper: ["What am I carrying into prayer tonight?", "What thought, worry, or emotion makes it difficult to become still?", "Can I allow God to look upon me with love before I examine anything?", "Where do I most need the light of the Holy Ghost tonight?"],
    prayer: "Come, Holy Ghost. Give me light to see this day truthfully, humility to recognize my faults, gratitude to recognize Your gifts, and confidence in the mercy of Christ.",
  },
  gratitude: {
    deeper: ["Who was a gift to me today?", "What ordinary blessing did I almost overlook?", "Where did I receive help I could not provide for myself?", "Was there something difficult that nevertheless contained a hidden grace?", "When did I feel most alive, peaceful, loved, or close to God?"],
    prayer: "Thank You, Lord. Everything good comes ultimately from Your hand. Help me receive Your gifts without taking them for granted.",
  },
  review: {
    deeper: ["What moment keeps returning to my mind?", "When did I experience peace or joy today?", "When did I feel hurried, defensive, resentful, afraid, or discouraged?", "Was there a conversation I wish I could revisit?", "Where did I notice another person's need, or an invitation to love?"],
  },
  notice: {
    deeper: ["Did this movement draw me closer to God or make me want to hide from Him?", "Did it make me more loving, truthful, patient, generous, courageous, or merciful?", "What desire was underneath my reaction?", "Was I seeking God's will, or protecting my pride, comfort, control, or reputation?", "Is there something God may be inviting me to notice rather than immediately fix?"],
  },
  mercy: {
    deeper: ["Where did I love well today?", "Where did I fail to love God or another person?", "Did pride, anger, selfishness, dishonesty, impurity, envy, laziness, or fear influence a choice?", "Is there someone I need to forgive or from whom I should ask forgiveness?", "Is there something I need to bring to sacramental Confession?"],
    prayer: "Jesus, I do not hide what is true from You. Where I have sinned, give me sincere contrition. Where I have been wounded, bring healing. Where something must be repaired, give me courage. I trust more in Your mercy than in my weakness.",
  },
  tomorrow: {
    deeper: ["What situation tomorrow will require God's grace most?", "Who might God be asking me to love more intentionally?", "What temptation or weakness should I place before Him now?", "What conversation or responsibility am I anxious about?", "What would faithfulness look like tomorrow?"],
    prayer: "Father, give me the grace I need tomorrow. Into Your hands I place my work, my worries, the people I love, and this night. Jesus, I trust in You.",
  },
};

export const nightlyDeepIntro = "You do not need to answer every question. Notice the one that draws your attention and bring it to God.";
