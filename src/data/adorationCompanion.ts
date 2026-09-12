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
  prayer: string;
  question: string;
  insight: string;
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
}> = [
  { id: "meditation", label: "Meditation", shortLabel: "Meditation" },
  { id: "scripture", label: "Guided Scripture", shortLabel: "Scripture" },
  { id: "prayers", label: "Prayers & Hymns", shortLabel: "Prayers" },
  { id: "silence", label: "Holy Hour Guide", shortLabel: "Holy Hour" },
  { id: "catechism", label: "Catechism Guide", shortLabel: "CCC Guide" },
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
    prayer: "Lord Jesus, deepen my faith in Your Eucharistic presence and make my life a grateful response to Your gift.",
    question: "Where is Christ asking me to move from curiosity toward deeper faith and communion?",
    insight: "The discourse joins faith, divine life, sacrifice, and abiding communion. Read it slowly within the whole sacramental faith of the Church.",
  },
  {
    id: "luke-24",
    theme: "bread",
    reference: "Luke 24:28–35",
    title: "The Road to Emmaus",
    description: "The risen Lord is recognized in the breaking of bread.",
    prayer: "Stay with me, Lord. Open the Scriptures and teach me to recognize Your presence.",
    question: "What disappointment needs to be re-read in the light of the risen Christ?",
    insight: "Emmaus holds Word, sacramental recognition, communion, and mission together in one movement.",
  },
  {
    id: "first-corinthians-11",
    theme: "bread",
    reference: "1 Corinthians 11:23–26",
    title: "The Mystery of the Sacred Meal",
    description: "Saint Paul transmits the apostolic memorial of the Lord’s self-gift.",
    prayer: "Jesus, teach me to receive the mystery You entrusted to the Church with faith, reverence, and thanksgiving.",
    question: "How can my participation in the Eucharist become a more faithful proclamation of Christ’s sacrifice?",
    insight: "Paul presents the Eucharist as received tradition, covenant memorial, and proclamation of the Lord’s death until He comes.",
  },
  {
    id: "exodus-16",
    theme: "bread",
    reference: "Exodus 16:2–4, 13–15",
    title: "The Manna in the Desert",
    description: "Bread from heaven prepares Israel to trust God one day at a time.",
    prayer: "Father, free me from murmuring and teach me to receive today’s grace with trust.",
    question: "Where am I demanding certainty instead of receiving daily bread?",
    insight: "Manna forms a people in dependence. Christian tradition reads it as preparation for the fuller gift of Christ.",
  },
  {
    id: "matthew-26",
    theme: "holy-hour",
    reference: "Matthew 26:36–41",
    title: "The Holy Hour in Gethsemane",
    description: "Jesus asks His friends to remain and watch with Him.",
    prayer: "Jesus, keep me near You in sorrow and strengthen me to pray, ‘Not my will, but Yours.’",
    question: "Where is Christ asking me to remain faithful instead of escaping discomfort?",
    insight: "The traditional Holy Hour responds to Christ’s invitation to watch and pray in Gethsemane.",
  },
  {
    id: "revelation-5",
    theme: "holy-hour",
    reference: "Revelation 5:6–14",
    title: "The Lamb Upon the Throne",
    description: "Heaven’s worship centers upon the Lamb who was slain.",
    prayer: "Lamb of God, unite my small act of adoration with the worship of heaven.",
    question: "What changes when I remember that earthly worship participates in heavenly praise?",
    insight: "The slain and living Lamb reveals victory through sacrificial love and gathers all creation into worship.",
  },
  {
    id: "psalm-22",
    theme: "psalms",
    reference: "Psalm 22 (23):1–6",
    title: "The Prepared Table",
    description: "The Good Shepherd leads, restores, accompanies, and prepares a table.",
    prayer: "Good Shepherd, lead me through fear into trust and keep me near Your table.",
    question: "Which line of this psalm names what my heart needs from God today?",
    insight: "Douay–Rheims follows the traditional Vulgate numbering, so this psalm is numbered 22 while many modern Bibles number it 23.",
  },
  {
    id: "psalm-62",
    theme: "psalms",
    reference: "Psalm 62 (63):2–9",
    title: "Thirsting for the Living God",
    description: "A soul longs for God and rejoices beneath the shelter of His wings.",
    prayer: "God of my desire, purify what I seek and draw my soul close to You.",
    question: "What lesser desire is masking my deeper thirst for God?",
    insight: "The psalm teaches that spiritual thirst can become praise, memory, trust, and steadfast attachment to God.",
  },
  {
    id: "first-kings-19",
    theme: "journey",
    reference: "1 Kings 19:4–8",
    title: "Food for the Journey: Elijah",
    description: "God meets exhaustion with rest, nourishment, and strength for the road.",
    prayer: "Lord, meet me in weariness and give me the grace needed for the next faithful step.",
    question: "Am I trying to solve spiritually what also requires rest, nourishment, or human support?",
    insight: "God’s care for Elijah is both bodily and spiritual. Grace restores the whole person for renewed mission.",
  },
  {
    id: "john-15",
    theme: "abiding",
    reference: "John 15:1–5",
    title: "Abiding in the True Vine",
    description: "Spiritual fruitfulness comes from remaining attached to Christ.",
    prayer: "Jesus, true Vine, keep me united to You and bring forth the fruit that pleases the Father.",
    question: "What practice will help me abide in Christ when consolation fades?",
    insight: "Christian fruitfulness is received before it is achieved: disciples act from living communion with Christ.",
  },
];

export const companionPrayers: CompanionPrayer[] = [
  {
    id: "anima-christi",
    title: "Anima Christi",
    latinTitle: "Soul of Christ",
    kind: "prayer",
    whenToUse: "After Holy Communion or during Eucharistic Adoration",
    english: `Soul of Christ, sanctify me.
Body of Christ, save me.
Blood of Christ, embolden me.
Water from the side of Christ, wash me.
Passion of Christ, strengthen me.
O good Jesus, hear me.
Within your wounds hide me.
Never permit me to be parted from you.
From the evil Enemy defend me.
At the hour of my death call me
and bid me come to you,
that with your Saints I may praise you
for age upon age.
Amen.`,
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
    verification: "USCCB source verified",
    sourceNote: "Prayer text reproduced from the United States Conference of Catholic Bishops’ official Anima Christi prayer page.",
    sourceUrl: "https://www.usccb.org/prayers/anima-christi",
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
