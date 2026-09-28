export type NightlyJourneyPage = {
  id: "presence" | "gratitude" | "review" | "mercy" | "resolution" | "surrender";
  eyebrow: string;
  title: string;
  guide: string;
  prayer: string;
  image: string;
  imageAlt: string;
  questions: string[];
  journalLabel: string;
  note?: string;
  resolutions?: string[];
};

export const nightlyJourneyPages: NightlyJourneyPage[] = [
  {
    id: "presence",
    eyebrow: "Become Present",
    title: "Come before the God who is already here.",
    guide: "The day is finished. You do not need to defend it, explain it, or solve everything tonight. God is already near. Bring the day before Him with honesty and peace.",
    prayer: "Lord, help me to become quiet before You. Give me the grace to see this day with honesty, humility, and hope. Help me remember that I am never outside Your loving presence. Amen.",
    image: "/images/daily-examen/presence.webp",
    imageAlt: "A candle and simple cross in the stillness of a chapel at night.",
    questions: [
      "What am I feeling as I come before God tonight?",
      "What thought or concern is distracting me?",
      "What am I carrying that I need to place in God’s hands?",
      "What do I most need from God right now?",
      "If Jesus were sitting beside me, what would I want to tell Him?",
      "Can I accept that God is looking at me with love?",
    ],
    journalLabel: "What I bring before God",
  },
  {
    id: "gratitude",
    eyebrow: "Receive the Day with Gratitude",
    title: "Notice the gifts God gave you.",
    guide: "Begin by remembering that the day was a gift. Think about the people, opportunities, protection, strength, beauty, and small blessings you received.",
    prayer: "Father, thank You for the gift of this day. Thank You for the blessings I noticed and for the blessings I overlooked. Open my eyes to recognize Your goodness in ordinary moments. Amen.",
    image: "/images/daily-examen/gratitude.webp",
    imageAlt: "Evening sunlight falls across a chapel pew as the day comes to a close.",
    questions: [
      "What was the best moment of my day?",
      "What small blessing did I almost overlook?",
      "Who showed me kindness today?",
      "To whom did I show kindness?",
      "Where did I experience peace, joy, beauty, or hope?",
      "What blessing have I begun to take for granted?",
      "Where did God provide for me?",
      "Is there someone I should thank more intentionally?",
    ],
    journalLabel: "A gift I receive with gratitude",
  },
  {
    id: "review",
    eyebrow: "Review the Day with God",
    title: "Walk through the day with Christ.",
    guide: "Allow the day to come back slowly. Move from morning to night. Notice what happened, how you responded, and what was taking place in your heart.",
    prayer: "Holy Spirit, help me see this day as You see it. Show me where I cooperated with grace and where I resisted Your invitation. Give me wisdom without fear and honesty without despair. Amen.",
    image: "/images/daily-examen/review.webp",
    imageAlt: "A person sits quietly in prayer in a softly lit chapel.",
    questions: [
      "When was I most aware of God?",
      "When did I forget God or act as if I had to manage everything alone?",
      "What moments gave me spiritual life?",
      "What moments drained my peace?",
      "What conversation affected me most?",
      "What words did I speak that brought life?",
      "What words may have wounded or discouraged someone?",
      "Where did I act out of fear?",
      "Where did I act out of love?",
      "What event or feeling keeps returning to my mind?",
    ],
    journalLabel: "A moment I want to remember in prayer",
  },
  {
    id: "mercy",
    eyebrow: "Recognize Sin and Receive Mercy",
    title: "Let God meet you in the places that need healing.",
    guide: "Notice where you failed to love God, another person, or yourself. Do not excuse sin, but do not become overwhelmed by it. God reveals sin in order to heal and restore you.",
    prayer: "Merciful Father, I am sorry for the ways I have sinned. I am sorry for the good I failed to do and for the love I failed to give. Please forgive me, heal me, and help me to change. Amen.",
    image: "/images/daily-examen/mercy.webp",
    imageAlt: "A wooden cross and kneeler in the gentle light of a chapel.",
    questions: [
      "Where did I fail to love God today?",
      "Where did I fail to love another person?",
      "Where did I fail to respect or care for myself?",
      "Did I act impatiently, selfishly, pridefully, or dishonestly?",
      "Did I judge someone without knowing the full story?",
      "How did I respond to anger, envy, resentment, or discouragement?",
      "Did I fail to seek forgiveness when I caused harm?",
      "Am I holding tightly to an offense?",
      "What sin or pattern do I keep repeating?",
      "What usually triggers that pattern?",
      "What was I trying to protect, obtain, or control?",
      "Is there someone I need to apologize to?",
      "Is there a sin I need to bring to Confession?",
    ],
    journalLabel: "Something I entrust to God’s mercy",
    note: "This nightly examen is prayerful reflection; it does not replace sacramental Reconciliation. If, after a calm examination, you believe you may have committed mortal sin, speak with a priest and seek Confession. Perfect contrition includes sorrow rooted in love of God and a firm intention to confess as soon as possible. Mortal sin involves grave matter, full knowledge, and deliberate consent; do not try to settle a troubled conscience by repeatedly examining the same matter. Trust in God’s mercy and ask a priest for guidance.",
  },
  {
    id: "resolution",
    eyebrow: "Receive God’s Love and Make a Resolution",
    title: "Respond to grace with one concrete step.",
    guide: "God’s mercy is greater than your failure. Do not end the Examen by merely listing what went wrong. Receive God’s forgiveness and ask how He is inviting you to grow.",
    prayer: "Jesus, thank You for Your mercy. Strengthen me to live differently tomorrow. Help me cooperate with Your grace through one faithful act of love. Amen.",
    image: "/images/daily-examen/resolution.webp",
    imageAlt: "The first light of dawn enters a quiet chapel beside a single candle.",
    questions: [
      "What is God inviting me to surrender?",
      "What wound or weakness needs His healing?",
      "What virtue may God be developing in me?",
      "Where can I practice patience, humility, courage, or charity tomorrow?",
      "What specific action would help me avoid repeating today’s mistake?",
      "Who may need my attention or kindness tomorrow?",
      "What apology, conversation, or act of service might God be asking of me?",
      "What small act of faithfulness can I realistically complete?",
      "What would beginning again look like in one concrete action?",
      "What would I do differently if I trusted God’s grace?",
    ],
    journalLabel: "Tomorrow, with God’s help, I will…",
    resolutions: [
      "Pause before responding in anger.",
      "Speak with greater kindness.",
      "Pray before beginning my work.",
      "Make peace with someone.",
      "Avoid a situation that repeatedly leads me into sin.",
      "Give God the first few minutes of my morning.",
      "Ask for help instead of carrying everything alone.",
      "Perform one hidden act of charity.",
    ],
  },
  {
    id: "surrender",
    eyebrow: "Rest in God’s Care",
    title: "End the day with trust.",
    guide: "The day is complete. Some matters remain unfinished, but you do not have to carry everything into the night. Entrust your life, your loved ones, your concerns, and tomorrow to God.",
    prayer: "Into Your hands, Lord, I commend this day. Forgive me, protect me, and give me peace. Watch over those I love. If You grant me another day, help me begin it with a faithful heart. May I rest in Your love. Amen.",
    image: "/images/daily-examen/surrender.webp",
    imageAlt: "A peaceful night sky viewed through a church window beside a candle.",
    questions: [
      "What am I still trying to control?",
      "What unfinished matter do I need to entrust to God?",
      "What fear about tomorrow is disturbing my peace?",
      "What do I need to release before going to sleep?",
      "Is there someone I need to place under God’s protection?",
      "What concern can wait until tomorrow?",
      "What would it mean for me to rest as an act of trust?",
      "Do I believe God’s mercy is greater than my failures?",
      "What hope do I want to remember when I wake up?",
      "What would I like Jesus to say to me before I rest?",
    ],
    journalLabel: "What I place in God’s hands tonight",
  },
];

export const nightlyJourneyResolutions = nightlyJourneyPages[4].resolutions ?? [];
export const nightlyJourneyOptionalIntro = "You may reflect silently. You do not need to answer every question.";
