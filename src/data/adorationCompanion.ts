export type CompanionSection = "meditation" | "scripture" | "prayers" | "silence" | "catechism";

export type MeditationPart = {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  scriptureReference: string;
  catechismReference: string;
  meditation: string[];
  questions: string[];
  prayer: string;
  silenceMinutes: number;
};

export type ScriptureTheme = {
  id: string;
  label: string;
  description: string;
};

export type ScriptureReading = {
  id: string;
  theme: Exclude<ScriptureTheme["id"], "all">;
  reference: string;
  title: string;
  description: string;
  verses: Array<{ number: number; text: string }>;
  prayer: string;
  question: string;
  insight: string;
  sourceUrl: string;
};

export type CompanionPrayer = {
  id: string;
  title: string;
  latinTitle?: string;
  kind: "prayer" | "hymn";
  whenToUse: string;
  english: string;
  latin?: string;
  verification: string;
  sourceNote: string;
  sourceUrl: string;
};

export type CatechismGuide = {
  id: string;
  title: string;
  paragraphs: string;
  summary: string;
  vaticanUrl: string;
};

export const companionNavigation: Array<{
  id: CompanionSection;
  label: string;
  shortLabel: string;
  icon: string;
}> = [
  { id: "meditation", label: "Blessed Sacrament Meditation", shortLabel: "Meditation", icon: "✦" },
  { id: "scripture", label: "Guided Scripture", shortLabel: "Scripture", icon: "▤" },
  { id: "prayers", label: "Prayers & Hymns", shortLabel: "Prayers", icon: "♩" },
  { id: "silence", label: "Silent Timer & Holy Hour", shortLabel: "Silence", icon: "◷" },
  { id: "catechism", label: "Catechism Guide", shortLabel: "CCC Guide", icon: "▣" },
];

export const meditationParts: MeditationPart[] = [
  {
    id: "invitation",
    title: "The Divine Invitation",
    subtitle: "Simplicity of Heart in the Presence of Jesus",
    duration: "3 min",
    scriptureReference: "Matthew 11:28–30",
    catechismReference: "CCC 1374",
    meditation: [
      "It is not necessary, My child, to know much in order to please Me; it is enough that you love Me much.",
      "Speak to Me here as you would speak with your most intimate friend, to your mother, or to your brother.",
      "I know your secrets, your desires, and your weaknesses; yet I desire to hear them from your own lips. Cast aside all anxiety and fear, for here before the altar I wait for you with open arms.",
    ],
    questions: [
      "What worries or distractions did I bring with me across the threshold of this sanctuary?",
      "Can I set aside pretense and let Jesus look upon me with His boundless mercy right now?",
    ],
    prayer:
      "Lord Jesus, I believe that You are truly present in the Most Blessed Sacrament. I love You above all things, and I desire to receive You into my soul.",
    silenceMinutes: 3,
  },
  {
    id: "intercession",
    title: "Praying for Others",
    subtitle: "Do you wish to ask Me something for another?",
    duration: "5 min",
    scriptureReference: "1 Timothy 2:1–2",
    catechismReference: "CCC 2634",
    meditation: [
      "Do you wish to ask Me something on behalf of another? Tell Me their names, whether they are your parents, your brothers and sisters, your children, or your friends.",
      "Tell Me what you desire for them right now. If they are sick, ask Me for their healing; if they are afflicted, ask Me for their consolation; if they are straying, ask Me for their conversion.",
      "Ask for much. I love generous hearts who forget themselves to pray for the needs of others. Speak to Me with the simplicity of a child about the poor whom you wish to comfort, the sinners whom you wish to bring back to the straight path, and the family members who have wandered away from Me.",
    ],
    questions: [
      "Who in my family or circle of friends is carrying a heavy cross right now?",
      "Is there someone who has hurt me, whom Jesus is asking me to forgive and intercede for here before the monstrance?",
    ],
    prayer: "Jesus, I place into Your pierced hands the souls of my loved ones, the sick, and those in greatest need of Your mercy.",
    silenceMinutes: 5,
  },
  {
    id: "personal-needs",
    title: "Your Personal Needs",
    subtitle: "Do you need anything for yourself?",
    duration: "5 min",
    scriptureReference: "Philippians 4:6–7",
    catechismReference: "CCC 2629",
    meditation: [
      "And for yourself, do you need anything? Tell Me frankly if you are proud, selfish, inconstant, or negligent.",
      "Ask Me to help you in the efforts you make to overcome your defects. Do not be ashamed; there are in heaven many saints who had the same faults as you. They prayed with humility, and little by little they saw themselves delivered from them.",
      "Do not hesitate to ask Me for temporal goods, health, memory, or success in your work or studies. I can give you all things, and I always give what is profitable for your soul. Ask Me for true spiritual fortitude, patience, and love for My Cross.",
    ],
    questions: [
      "What virtue am I currently lacking the most—patience, humility, purity, courage, or charity?",
      "What specific daily temptation causes me to stumble, and am I willing to hand it entirely to Christ?",
    ],
    prayer: "Lord, give me the grace to overcome my weakness. Help me to die to my self-love and live solely for You.",
    silenceMinutes: 5,
  },
  {
    id: "sadness-anxiety",
    title: "In Times of Sadness & Anxiety",
    subtitle: "Are you sad or anxious?",
    duration: "7 min",
    scriptureReference: "Psalm 33 (34):19–20",
    catechismReference: "CCC 2711",
    meditation: [
      "Tell Me, My child, in all its details, what saddens you. Who has hurt you? Who has offended your self-esteem? Who has distrusted you?",
      "Tell Me all, and you will soon feel My peace. Tell Me if you fear some misfortune, or if you feel a dread of the future. Cast yourself into the arms of My Providence.",
      "I am with you; I am at your side. I see everything, I hear everything, and I will never abandon you. Have you felt abandoned by those who were dear to you? Remember that I was abandoned in Gethsemane and on Calvary, so that you would never be alone.",
    ],
    questions: [
      "What secret burden or apprehension am I holding onto that I have not dared to entrust to God?",
      "Can I rest quietly in His Eucharistic presence, knowing He holds tomorrow in His sovereign care?",
    ],
    prayer: "Jesus, I trust in You. Into Your Sacred Heart I surrender my fears, my loneliness, and my uncertainties.",
    silenceMinutes: 5,
  },
  {
    id: "thanksgiving",
    title: "Sharing Joy & Gratitude",
    subtitle: "Are you happy?",
    duration: "4 min",
    scriptureReference: "1 Thessalonians 5:16–18",
    catechismReference: "CCC 2637",
    meditation: [
      "Are you happy? Tell Me your joys. Tell Me what happened since yesterday to cheer and console your heart.",
      "Perhaps you have received good news, had a pleasant surprise, or overcome a difficult obstacle. Receive it gratefully as a gift of Providence.",
      "Why not say to Me simply: ‘Thank You, my Father; thank You, my Jesus’? Gratitude opens the heart to recognize still more of God’s generosity.",
    ],
    questions: [
      "What unexpected blessings, small mercies, or moments of grace did God provide for me this past week?",
      "How has God demonstrated His fidelity in my life when I least expected it?",
    ],
    prayer: "My God, I thank You with my whole heart for the gift of life, for the Blessed Sacrament, and for every hidden blessing You bestow upon me each day.",
    silenceMinutes: 4,
  },
  {
    id: "resolutions",
    title: "Promises & Resolutions",
    subtitle: "Have you promises to make to Me?",
    duration: "5 min",
    scriptureReference: "John 14:15, 21",
    catechismReference: "CCC 2098",
    meditation: [
      "Have you promises to make to Me? I read the depth of your heart. You can easily deceive others, but not Me. Be sincere.",
      "Are you firmly resolved not to expose yourself to that occasion of sin? To give up that habit that tarnishes your soul? To avoid reading or watching that which wounds your purity? To be kind and charitable to the person who irritates you?",
      "Go now, and be gentle to those who are difficult to bear; be humble and charitable. Then return to Me with a heart still more loving and devoted.",
    ],
    questions: [
      "What concrete, specific resolution will I take away from this Holy Hour today?",
      "How will I treat the people I encounter as soon as I walk out of the church doors?",
    ],
    prayer: "Jesus, through the intercession of Your Blessed Mother Mary, grant me the grace to keep the resolutions I make before You in this sacred hour.",
    silenceMinutes: 5,
  },
  {
    id: "departure",
    title: "Departure & Spiritual Communion",
    subtitle: "Returning to the World in His Grace",
    duration: "3 min",
    scriptureReference: "John 15:4–5",
    catechismReference: "CCC 1391",
    meditation: [
      "And now, return to your daily duties, to your work, your family, and your studies.",
      "But do not forget the time we have passed together. Keep, as much as you can, silence, recollection, and the memory of My presence.",
      "Love My Mother, who is also yours. Bring to Me tomorrow a heart even more docile to My grace. In My Heart you will always find new love, new blessings, and new consolations.",
    ],
    questions: [
      "How can I carry the peace of this adoration chapel into the rush and demands of my everyday life?",
      "Can I make a habit of turning my heart to Jesus in the tabernacle throughout the day?",
    ],
    prayer: "My Jesus, I believe that You are present in the Most Holy Sacrament. I love You above all things, and I desire to receive You into my soul. Since I cannot at this moment receive You sacramentally, come at least spiritually into my heart. I embrace You as if You were already there and unite myself wholly to You. Never permit me to be separated from You. Amen.",
    silenceMinutes: 3,
  },
];

export const scriptureThemes: ScriptureTheme[] = [
  { id: "all", label: "All Eucharistic Scripture", description: "The complete guided reading library" },
  { id: "bread", label: "Bread of Life & Real Presence", description: "Promise, institution, and recognition in the breaking of bread" },
  { id: "holy-hour", label: "Sacrifice & Adoration", description: "Keep watch with Christ and worship the Lamb who was slain" },
  { id: "psalms", label: "Psalms Before the Lord", description: "Shepherd, sanctuary, holy desire, and praise" },
  { id: "journey", label: "Strength for the Journey", description: "God feeds the weary for the road ahead" },
  { id: "abiding", label: "Communion & Abiding", description: "Remain in Christ and bear fruit in Him" },
];

export const scriptureReadings: ScriptureReading[] = [
  {
    id: "john-6",
    theme: "bread",
    reference: "John 6:35, 48–58",
    title: "The Bread of Life Discourse",
    description: "Jesus reveals Himself as the living Bread come down from heaven.",
    verses: [
      { number: 35, text: "And Jesus said to them: I am the bread of life: he that cometh to me shall not hunger: and he that believeth in me shall never thirst." },
      { number: 48, text: "I am the bread of life." },
      { number: 49, text: "Your fathers did eat manna in the desert, and are dead." },
      { number: 50, text: "This is the bread which cometh down from heaven; that if any man eat of it, he may not die." },
      { number: 51, text: "I am the living bread which came down from heaven." },
      { number: 52, text: "If any man eat of this bread, he shall live for ever; and the bread that I will give, is my flesh, for the life of the world." },
      { number: 53, text: "The Jews therefore strove among themselves, saying: How can this man give us his flesh to eat?" },
      { number: 54, text: "Then Jesus said to them: Amen, amen I say unto you: Except you eat the flesh of the Son of man, and drink his blood, you shall not have life in you." },
      { number: 55, text: "He that eateth my flesh, and drinketh my blood, hath everlasting life: and I will raise him up in the last day." },
      { number: 56, text: "For my flesh is meat indeed: and my blood is drink indeed." },
      { number: 57, text: "He that eateth my flesh, and drinketh my blood, abideth in me, and I in him." },
      { number: 58, text: "As the living Father hath sent me, and I live by the Father; so he that eateth me, the same also shall live by me." },
    ],
    prayer: "Lord Jesus, deepen my faith in Your Eucharistic presence and make my life a grateful response to Your gift.",
    question: "Where is Christ asking me to move from curiosity toward deeper faith and communion?",
    insight: "The discourse joins faith, divine life, sacrifice, and abiding communion. Read it slowly within the whole sacramental faith of the Church.",
    sourceUrl: "https://ebible.org/engDRA/JHN06.htm",
  },
  {
    id: "luke-24",
    theme: "bread",
    reference: "Luke 24:28–35",
    title: "The Road to Emmaus",
    description: "The risen Lord is recognized in the breaking of bread.",
    verses: [
      { number: 28, text: "And they drew nigh to the town, whither they were going: and he made as though he would go farther." },
      { number: 29, text: "But they constrained him; saying: Stay with us, because it is towards evening, and the day is now far spent. And he went in with them." },
      { number: 30, text: "And it came to pass, whilst he was at table with them, he took bread, and blessed, and brake, and gave to them." },
      { number: 31, text: "And their eyes were opened, and they knew him: and he vanished out of their sight." },
      { number: 32, text: "And they said one to the other: Was not our heart burning within us, whilst he spoke in this way, and opened to us the scriptures?" },
      { number: 33, text: "And rising up, the same hour, they went back to Jerusalem: and they found the eleven gathered together, and those that were staying with them," },
      { number: 34, text: "Saying: The Lord is risen indeed, and hath appeared to Simon." },
      { number: 35, text: "And they told what things were done in the way; and how they knew him in the breaking of the bread." },
    ],
    prayer: "Stay with me, Lord. Open the Scriptures and teach me to recognize Your presence.",
    question: "What disappointment needs to be re-read in the light of the risen Christ?",
    insight: "Emmaus holds Word, sacramental recognition, communion, and mission together in one movement.",
    sourceUrl: "https://ebible.org/engDRA/LUK24.htm",
  },
  {
    id: "first-corinthians-11",
    theme: "bread",
    reference: "1 Corinthians 11:23–26",
    title: "The Mystery of the Sacred Meal",
    description: "Saint Paul transmits the apostolic memorial of the Lord’s self-gift.",
    verses: [
      { number: 23, text: "For I have received of the Lord that which also I delivered unto you, that the Lord Jesus, the same night in which he was betrayed, took bread." },
      { number: 24, text: "And giving thanks, broke, and said: Take ye, and eat: this is my body, which shall be delivered for you: this do for the commemoration of me." },
      { number: 25, text: "In like manner also the chalice, after he had supped, saying: This chalice is the new testament in my blood: this do ye, as often as you shall drink, for the commemoration of me." },
      { number: 26, text: "For as often as you shall eat this bread, and drink the chalice, you shall shew the death of the Lord, until he come." },
    ],
    prayer: "Jesus, teach me to receive the mystery You entrusted to the Church with faith, reverence, and thanksgiving.",
    question: "How can my participation in the Eucharist become a more faithful proclamation of Christ’s sacrifice?",
    insight: "Paul presents the Eucharist as received tradition, covenant memorial, and proclamation of the Lord’s death until He comes.",
    sourceUrl: "https://ebible.org/engDRA/1CO11.htm",
  },
  {
    id: "exodus-16",
    theme: "bread",
    reference: "Exodus 16:2–4, 13–15",
    title: "The Manna in the Desert",
    description: "Bread from heaven prepares Israel to trust God one day at a time.",
    verses: [
      { number: 2, text: "And all the congregation of the children of Israel murmured against Moses and Aaron in the wilderness." },
      { number: 3, text: "And the children of Israel said to them: Would to God we had died by the hand of the Lord in the land of Egypt, when we sat over the flesh pots, and ate bread to the full. Why have you brought us into this desert, that you might destroy all the multitude with famine?" },
      { number: 4, text: "And the Lord said to Moses: Behold I will rain bread from heaven for you: let the people go forth, and gather what is sufficient for every day: that I may prove them whether they will walk in my law, or not." },
      { number: 13, text: "So it came to pass in the evening, that quails coming up, covered the camp: and in the morning, a dew lay round about the camp." },
      { number: 14, text: "And when it had covered the face of the earth, it appeared in the wilderness small, and as it were beaten with a pestle, like unto the hoar frost on the ground." },
      { number: 15, text: "And when the children of Israel saw it, they said one to another: Manhu! which signifieth: What is this! for they knew not what it was. And Moses said to them: This is the bread, which the Lord hath given you to eat." },
    ],
    prayer: "Father, free me from murmuring and teach me to receive today’s grace with trust.",
    question: "Where am I demanding certainty instead of receiving daily bread?",
    insight: "Manna forms a people in dependence. Christian tradition reads it as preparation for the fuller gift of Christ.",
    sourceUrl: "https://ebible.org/engDRA/EXO16.htm",
  },
  {
    id: "matthew-26",
    theme: "holy-hour",
    reference: "Matthew 26:36–41",
    title: "The Holy Hour in Gethsemane",
    description: "Jesus asks His friends to remain and watch with Him.",
    verses: [
      { number: 36, text: "Then Jesus came with them into a country place which is called Gethsemani; and he said to his disciples: Sit you here, till I go yonder and pray." },
      { number: 37, text: "And taking with him Peter and the two sons of Zebedee, he began to grow sorrowful and to be sad." },
      { number: 38, text: "Then he saith to them: My soul is sorrowful even unto death: stay you here, and watch with me." },
      { number: 39, text: "And going a little further, he fell upon his face, praying, and saying: My Father, if it be possible, let this chalice pass from me. Nevertheless not as I will, but as thou wilt." },
      { number: 40, text: "And he cometh to his disciples, and findeth them asleep, and he saith to Peter: What? Could you not watch one hour with me?" },
      { number: 41, text: "Watch ye, and pray that ye enter not into temptation. The spirit indeed is willing, but the flesh weak." },
    ],
    prayer: "Jesus, keep me near You in sorrow and strengthen me to pray, ‘Not my will, but Yours.’",
    question: "Where is Christ asking me to remain faithful instead of escaping discomfort?",
    insight: "The traditional Holy Hour responds to Christ’s invitation to watch and pray in Gethsemane.",
    sourceUrl: "https://ebible.org/engDRA/MAT26.htm",
  },
  {
    id: "revelation-5",
    theme: "holy-hour",
    reference: "Revelation 5:6–14",
    title: "The Lamb Upon the Throne",
    description: "Heaven’s worship centers upon the Lamb who was slain.",
    verses: [
      { number: 6, text: "And I saw: and behold in the midst of the throne and of the four living creatures, and in the midst of the ancients, a Lamb standing as it were slain, having seven horns and seven eyes: which are the seven Spirits of God, sent forth into all the earth." },
      { number: 8, text: "And when he had opened the book, the four living creatures, and the four and twenty ancients fell down before the Lamb, having every one of them harps, and golden vials full of odours, which are the prayers of saints:" },
      { number: 9, text: "And they sung a new canticle, saying: Thou art worthy, O Lord, to take the book, and to open the seals thereof; because thou wast slain, and hast redeemed us to God, in thy blood, out of every tribe, and tongue, and people, and nation." },
      { number: 12, text: "Saying with a loud voice: The Lamb that was slain is worthy to receive power, and divinity, and wisdom, and strength, and honour, and glory, and benediction." },
      { number: 13, text: "And every creature, which is in heaven, and on the earth, and under the earth, and such as are in the sea, and all that are in them: I heard all saying: To him that sitteth on the throne, and to the Lamb, benediction, and honour, and glory, and power, for ever and ever." },
      { number: 14, text: "And the four living creatures said: Amen. And the four and twenty ancients fell down on their faces, and adored him that liveth for ever and ever." },
    ],
    prayer: "Lamb of God, unite my small act of adoration with the worship of heaven.",
    question: "What changes when I remember that earthly worship participates in heavenly praise?",
    insight: "The slain and living Lamb reveals victory through sacrificial love and gathers all creation into worship.",
    sourceUrl: "https://ebible.org/engDRA/REV05.htm",
  },
  {
    id: "psalm-22",
    theme: "psalms",
    reference: "Psalm 22 (23):1–6",
    title: "The Prepared Table",
    description: "The Good Shepherd leads, restores, accompanies, and prepares a table.",
    verses: [
      { number: 1, text: "A psalm for David. The Lord ruleth me: and I shall want nothing." },
      { number: 2, text: "He hath set me in a place of pasture. He hath brought me up, on the water of refreshment:" },
      { number: 3, text: "He hath converted my soul. He hath led me on the paths of justice, for his own name’s sake." },
      { number: 4, text: "For though I should walk in the midst of the shadow of death, I will fear no evils, for thou art with me. Thy rod and thy staff, they have comforted me." },
      { number: 5, text: "Thou hast prepared a table before me against them that afflict me. Thou hast anointed my head with oil; and my chalice which inebriateth me, how goodly is it!" },
      { number: 6, text: "And thy mercy will follow me all the days of my life. And that I may dwell in the house of the Lord unto length of days." },
    ],
    prayer: "Good Shepherd, lead me through fear into trust and keep me near Your table.",
    question: "Which line of this psalm names what my heart needs from God today?",
    insight: "Douay–Rheims follows the traditional Vulgate numbering, so this psalm is numbered 22 while many modern Bibles number it 23.",
    sourceUrl: "https://ebible.org/engDRA/PSA022.htm",
  },
  {
    id: "psalm-62",
    theme: "psalms",
    reference: "Psalm 62 (63):2–9",
    title: "Thirsting for the Living God",
    description: "A soul longs for God and rejoices beneath the shelter of His wings.",
    verses: [
      { number: 2, text: "O God, my God, to thee do I watch at break of day. For thee my soul hath thirsted; for thee my flesh, O how many ways!" },
      { number: 3, text: "In a desert land, and where there is no way, and no water: so in the sanctuary have I come before thee, to see thy power and thy glory." },
      { number: 4, text: "For thy mercy is better than lives: thee my lips shall praise." },
      { number: 5, text: "Thus will I bless thee all my life long: and in thy name I will lift up my hands." },
      { number: 6, text: "Let my soul be filled as with marrow and fatness: and my mouth shall praise thee with joyful lips." },
      { number: 7, text: "If I have remembered thee upon my bed, I will meditate on thee in the morning:" },
      { number: 8, text: "Because thou hast been my helper. And I will rejoice under the covert of thy wings:" },
      { number: 9, text: "My soul hath stuck close to thee: thy right hand hath received me." },
    ],
    prayer: "God of my desire, purify what I seek and draw my soul close to You.",
    question: "What lesser desire is masking my deeper thirst for God?",
    insight: "The psalm teaches that spiritual thirst can become praise, memory, trust, and steadfast attachment to God.",
    sourceUrl: "https://ebible.org/engDRA/PSA062.htm",
  },
  {
    id: "first-kings-19",
    theme: "journey",
    reference: "1 Kings 19:4–8",
    title: "Food for the Journey: Elijah",
    description: "God meets exhaustion with rest, nourishment, and strength for the road.",
    verses: [
      { number: 4, text: "And he went forward, one day’s journey into the desert. And when he was there, and sat under a juniper tree, he requested for his soul that he might die, and said: It is enough for me, Lord, take away my soul: for I am no better than my fathers." },
      { number: 5, text: "And he cast himself down, and slept in the shadow of the juniper tree: and behold an angel of the Lord touched him, and said to him: Arise and eat." },
      { number: 6, text: "He looked, and behold there was at his head a hearth cake, and a vessel of water: and he ate and drank, and he fell asleep again." },
      { number: 7, text: "And the angel of the Lord came again the second time, and touched him, and said to him: Arise, eat: for thou hast yet a great way to go." },
      { number: 8, text: "And he arose, and ate, and drank, and walked in the strength of that food forty days and forty nights, unto the mount of God, Horeb." },
    ],
    prayer: "Lord, meet me in weariness and give me the grace needed for the next faithful step.",
    question: "Am I trying to solve spiritually what also requires rest, nourishment, or human support?",
    insight: "God’s care for Elijah is both bodily and spiritual. Grace restores the whole person for renewed mission.",
    sourceUrl: "https://ebible.org/engDRA/1KI19.htm",
  },
  {
    id: "john-15",
    theme: "abiding",
    reference: "John 15:1–5",
    title: "Abiding in the True Vine",
    description: "Spiritual fruitfulness comes from remaining attached to Christ.",
    verses: [
      { number: 1, text: "I am the true vine; and my Father is the husbandman." },
      { number: 2, text: "Every branch in me, that beareth not fruit, he will take away: and every one that beareth fruit, he will purge it, that it may bring forth more fruit." },
      { number: 3, text: "Now you are clean by reason of the word, which I have spoken to you." },
      { number: 4, text: "Abide in me, and I in you. As the branch cannot bear fruit of itself, unless it abide in the vine, so neither can you, unless you abide in me." },
      { number: 5, text: "I am the vine: you the branches: he that abideth in me, and I in him, the same beareth much fruit: for without me you can do nothing." },
    ],
    prayer: "Jesus, true Vine, keep me united to You and bring forth the fruit that pleases the Father.",
    question: "What practice will help me abide in Christ when consolation fades?",
    insight: "Christian fruitfulness is received before it is achieved: disciples act from living communion with Christ.",
    sourceUrl: "https://ebible.org/engDRA/JHN15.htm",
  },
];

export const companionPrayers: CompanionPrayer[] = [
  {
    id: "anima-christi",
    title: "Anima Christi",
    latinTitle: "Soul of Christ",
    kind: "prayer",
    whenToUse: "After Holy Communion or during Eucharistic Adoration",
    english: `Soul of Christ, be my sanctification.
Body of Christ, be my salvation.
Blood of Christ, fill all my veins.
Water of Christ’s side, wash out my stains.
Passion of Christ, my comfort be.
O good Jesus, listen to me.
In Thy wounds I fain would hide,
Ne’er to be parted from Thy side,
Guard me, should the foe assail me.
Call me when my life shall fail me.
Bid me come to Thee above,
With Thy saints to sing Thy love,
World without end. Amen.`,
    latin: `Anima Christi, sanctifica me.
Corpus Christi, salva me.
Sanguis Christi, inebria me.
Aqua lateris Christi, lava me.
Passio Christi, conforta me.
O bone Iesu, exaudi me.
Intra tua vulnera absconde me.
Ne permittas me separari a te.
Ab hoste maligno defende me.
In hora mortis meae voca me.
Et iube me venire ad te,
ut cum Sanctis tuis laudem te
in saecula saeculorum. Amen.`,
    verification: "Vatican source verified",
    sourceNote: "Traditional Catholic prayer printed in the Vatican’s Compendium of the Catechism; public-domain prayer text.",
    sourceUrl: "https://www.vatican.va/archive/compendium_ccc/documents/archive_2005_compendium-ccc_en.html",
  },
  {
    id: "tantum-ergo",
    title: "Tantum Ergo",
    latinTitle: "Down in Adoration Falling",
    kind: "hymn",
    whenToUse: "During Exposition and Benediction of the Blessed Sacrament",
    english: `Down in adoration falling,
Lo! the sacred Host we hail,
Lo! o’er ancient forms departing,
Newer rites of grace prevail.
Faith for all defects supplying,
Where the feeble senses fail.

To the everlasting Father,
And the Son who reigns on high,
With the Holy Spirit proceeding
Forth from each eternally,
Be salvation, honor, blessing,
Might and endless majesty. Amen.`,
    latin: `Tantum ergo Sacramentum
veneremur cernui:
et antiquum documentum
novo cedat ritui:
praestet fides supplementum
sensuum defectui.

Genitori Genitoque
laus et iubilatio,
salus, honor, virtus quoque
sit et benedictio:
Procedenti ab utroque
compar sit laudatio. Amen.`,
    verification: "Liturgical use verified",
    sourceNote: "Hymn of Saint Thomas Aquinas used by the Church for Eucharistic Benediction; traditional public-domain English translation.",
    sourceUrl: "https://www.vatican.va/content/john-paul-ii/en/homilies/1998/documents/hf_jp-ii_hom_11061998_corpus-domini.html",
  },
  {
    id: "o-salutaris",
    title: "O Salutaris Hostia",
    latinTitle: "O Saving Victim",
    kind: "hymn",
    whenToUse: "At Exposition of the Blessed Sacrament",
    english: `O saving Victim, opening wide
The gate of heaven to man below,
Our foes press on from every side;
Thine aid supply, Thy strength bestow.

To Thy great name be endless praise,
Immortal Godhead, One in Three;
O grant us endless length of days
In our true native land with Thee. Amen.`,
    latin: `O salutaris Hostia,
quae caeli pandis ostium,
bella premunt hostilia,
da robur, fer auxilium.

Uni trinoque Domino
sit sempiterna gloria,
qui vitam sine termino
nobis donet in patria. Amen.`,
    verification: "Liturgical use verified",
    sourceNote: "Hymn of Saint Thomas Aquinas designated for Eucharistic exposition in official USCCB guidance; traditional public-domain English translation.",
    sourceUrl: "https://www.usccb.org/committees/divine-worship/policies/guidelines-for-the-publication-of-liturgical-books/appendix-ii",
  },
  {
    id: "divine-praises",
    title: "The Divine Praises",
    kind: "prayer",
    whenToUse: "After Benediction or in reparation for blasphemy",
    english: `Blessed be God.
Blessed be His holy Name.
Blessed be Jesus Christ, true God and true man.
Blessed be the Name of Jesus.
Blessed be His most Sacred Heart.
Blessed be His most Precious Blood.
Blessed be Jesus in the most Holy Sacrament of the altar.
Blessed be the Holy Spirit, the Paraclete.
Blessed be the great Mother of God, Mary most holy.
Blessed be her holy and Immaculate Conception.
Blessed be her glorious Assumption.
Blessed be the name of Mary, Virgin and Mother.
Blessed be Saint Joseph, her most chaste spouse.
Blessed be God in His angels and in His saints.`,
    verification: "USCCB ritual source verified",
    sourceNote: "Traditional prayer included in Holy Communion and Worship of the Eucharistic Mystery outside Mass, no. 99.",
    sourceUrl: "https://www.usccb.org/prayers/divine-praises",
  },
  {
    id: "spiritual-communion",
    title: "Act of Spiritual Communion",
    kind: "prayer",
    whenToUse: "When unable to receive sacramentally or during silent Adoration",
    english: `My Jesus, I believe that You are present in the Most Blessed Sacrament.
I love You above all things, and I desire to receive You into my soul.
Since I cannot now receive You sacramentally, come at least spiritually into my heart.
I embrace You as if You were already there, and I unite myself wholly to You.
Never permit me to be separated from You. Amen.`,
    verification: "Vatican source verified",
    sourceNote: "Traditional Act of Spiritual Communion published and prayed by Pope Francis during Mass at Santa Marta.",
    sourceUrl: "https://www.vatican.va/content/francesco/en/cotidie/2020/documents/papa-francesco-cotidie_20200421_lospirito-maestro-dellarmonia.html",
  },
];

export const catechismGuides: CatechismGuide[] = [
  {
    id: "source-summit",
    title: "The Eucharist: Source and Summit",
    paragraphs: "CCC 1324–1327",
    summary: "The Eucharist gathers up the Church’s worship and Christian life because it gives us Christ Himself and orders every grace toward communion with Him.",
    vaticanUrl: "https://www.vatican.va/content/catechism/en/part_two/section_two/chapter_one/article_3/i_the_eucharist_source_and_summit_of_ecclesial_life.index.html",
  },
  {
    id: "real-presence",
    title: "Christ’s Real Presence",
    paragraphs: "CCC 1373–1381",
    summary: "Christ is present to His Church in many ways and uniquely in the Eucharistic species. Eucharistic worship flows from faith in this enduring sacramental presence.",
    vaticanUrl: "https://www.vatican.va/content/catechism/en/part_two/section_two/chapter_one/article_3/v_the_sacramental_sacrifice_thanksgiving_memorial_presence.index.html",
  },
  {
    id: "sacrifice",
    title: "Memorial and Sacrifice",
    paragraphs: "CCC 1362–1372",
    summary: "The Mass sacramentally makes present Christ’s one saving sacrifice. The Church offers thanksgiving and unites herself to His self-offering to the Father.",
    vaticanUrl: "https://www.vatican.va/content/catechism/en/part_two/section_two/chapter_one/article_3/v_the_sacramental_sacrifice_thanksgiving_memorial_presence.index.html",
  },
  {
    id: "communion",
    title: "The Paschal Banquet",
    paragraphs: "CCC 1382–1401",
    summary: "Holy Communion completes participation in the Eucharistic sacrifice and calls for preparation, reverence, ecclesial unity, and a life conformed to Christ.",
    vaticanUrl: "https://www.vatican.va/content/catechism/en/part_two/section_two/chapter_one/article_3/vi_the_paschal_banquet.index.html",
  },
  {
    id: "adoration",
    title: "Adoration of the Blessed Sacrament",
    paragraphs: "CCC 1378–1380",
    summary: "The Church worships Christ present in the Eucharist during Mass and beyond it, reserving the sacrament and inviting the faithful to grateful, loving adoration.",
    vaticanUrl: "https://www.vatican.va/content/catechism/en/part_two/section_two/chapter_one/article_3/v_the_sacramental_sacrifice_thanksgiving_memorial_presence.index.html",
  },
  {
    id: "contemplation",
    title: "Contemplative Prayer",
    paragraphs: "CCC 2715–2719",
    summary: "Contemplative prayer fixes the gaze of faith on Jesus, listens to the Word, and consents to remain with Him in silent love that bears fruit in action.",
    vaticanUrl: "https://www.vatican.va/content/catechism/en/part_four/section_one/chapter_three/article_1/iii_contemplative_prayer.index.html",
  },
];
