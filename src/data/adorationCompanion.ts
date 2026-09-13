export type CompanionSection = "meditation" | "scripture" | "prayers" | "silence" | "catechism";

export type MeditationPart = {
  id: string;
  title: string;
  scriptureReferences: string[];
  catechismReference: string;
  meditation: string[];
  pausePrompts: string[];
  prayer: string;
  gratitudeResponses?: number;
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
    title: "Come Close to Me",
    scriptureReferences: ["Matthew 11:28–30", "John 15:9", "Matthew 6:6–8"],
    catechismReference: "CCC 1374",
    meditation: [
      "My child, you do not need to impress Me.",
      "You do not need beautiful prayers, perfect thoughts, or a heart free from distraction before you come near. You have already given Me something precious simply by being here.",
      "Come as you are.",
      "Bring Me the person you are today—not the person you wish you were, not the person others expect you to be, and not the person you hope someday to become.",
      "I know you completely.",
      "I know the thoughts you have never spoken aloud. I know the questions that remain unanswered, the wounds you hide, the hopes you are almost afraid to hope for, and the places within you where you still struggle.",
      "None of these things cause Me to turn away.",
      "Look at Me.",
      "You are not standing before a distant God. You are resting before the One who loved you enough to enter this world, carry the Cross, and give His life for you.",
      "Speak to Me simply.",
      "Tell Me what has been occupying your thoughts today.",
      "Tell Me what you are carrying.",
      "Tell Me what you are afraid to admit even to yourself.",
      "And if you have no words, remain with Me in silence.",
      "Your presence can become a prayer.",
    ],
    pausePrompts: [
      "What have you been carrying into this chapel?",
      "What would you say to Jesus if you knew you could speak without fear of judgment?",
      "Remain silent for a moment and allow yourself simply to be loved.",
    ],
    prayer: "Jesus, I come as I am. Let my presence become a prayer, and teach me to receive Your love.",
  },
  {
    id: "intercession",
    title: "Place Others in My Hands",
    scriptureReferences: ["Mark 2:1–5", "John 17:20–23", "Matthew 5:44"],
    catechismReference: "CCC 2634",
    meditation: [
      "My child, who did you bring with you today?",
      "Perhaps someone came immediately into your thoughts when you entered this place.",
      "Bring that person before Me now.",
      "Say their name slowly.",
      "Perhaps it is someone you love deeply.",
      "Perhaps someone is sick, grieving, anxious, lonely, confused, struggling in faith, or facing something beyond your ability to repair.",
      "You do not have to carry them alone.",
      "Place them into My care.",
      "Tell Me what you hope for them. Ask boldly, but trust Me enough to place the outcome in My hands.",
      "Bring Me your spouse, your children, your parents, your family, your friends, your coworkers, and those who have asked for your prayers.",
      "Bring Me the person who has wandered far from Me.",
      "Bring Me the person whose suffering you cannot understand.",
      "Bring Me someone who may have no one else praying for them tonight.",
      "And do not forget the person you find difficult to love.",
      "Prayer changes the heart of the person who prays as well as the circumstances placed before God.",
      "Let your heart grow wider here.",
      "You do not have to solve everyone's problems.",
      "Love them enough to bring them to Me.",
    ],
    pausePrompts: [
      "Picture one person standing beside you before the Eucharist.",
      "What do you most desire Jesus to do in that person's life?",
    ],
    prayer: `Jesus, I place ______ into Your hands.
Love them where I cannot reach them.
Guide them where I cannot lead them.
Give them what You know they truly need.`,
  },
  {
    id: "personal-needs",
    title: "Let Me Heal What Is Weak Within You",
    scriptureReferences: ["John 15:4–5", "Luke 18:13–14", "Romans 5:3–5"],
    catechismReference: "CCC 2629",
    meditation: [
      "Now, My child, allow Me to look at you.",
      "Not the version of yourself you show everyone else.",
      "The real you.",
      "Where are you struggling?",
      "Perhaps there is a habit you have tried repeatedly to overcome.",
      "Perhaps pride makes it difficult to apologize.",
      "Perhaps anger rises quickly within you.",
      "Perhaps you compare yourself constantly with others.",
      "Perhaps you seek approval, hold grudges, waste time, entertain thoughts that pull you away from Me, or return again and again to the same sin.",
      "Do not hide these places from Me.",
      "Bring them into My light.",
      "You may be disappointed in yourself, but never allow discouragement to convince you to stop coming to Me.",
      "Holiness is not built in a single heroic moment.",
      "Very often it grows quietly through hundreds of small acts of surrender.",
      "Ask Me for grace for the next decision.",
      "The next conversation.",
      "The next temptation.",
      "The next opportunity to choose patience instead of anger, humility instead of pride, purity instead of compromise, generosity instead of selfishness.",
      "You do not overcome weakness merely by staring at your weakness.",
      "Look toward Me.",
      "Grace begins by remaining close to Me.",
    ],
    pausePrompts: ["Jesus, what area of my life are You inviting me to surrender more completely?"],
    prayer: `Jesus, I give You my weakness.
Where I repeatedly fall, give me perseverance.
Where I deceive myself, give me truth.
Where I am afraid to change, give me courage.
Make my heart more like Yours.`,
  },
  {
    id: "sadness-anxiety",
    title: "Give Me What Hurts",
    scriptureReferences: ["Matthew 26:36–39", "Matthew 6:25–34", "John 14:27"],
    catechismReference: "CCC 2711",
    meditation: [
      "My child, there are things you carry that others cannot see.",
      "Bring them to Me.",
      "Who disappointed you?",
      "Who misunderstood you?",
      "What conversation do you replay in your mind?",
      "What loss still hurts when you think about it?",
      "What uncertainty about tomorrow makes your heart restless?",
      "You do not need to pretend with Me.",
      "Tell Me what happened.",
      "Tell Me what you wished had happened.",
      "Tell Me what you fear may happen next.",
      "There are wounds that cannot be healed merely by forgetting them. Sometimes healing begins by allowing Me to enter the memory with you.",
      "You may not yet understand why something was permitted.",
      "You may not be ready to forgive completely.",
      "You may not even know what you need.",
      "That is all right.",
      "Stay with Me.",
      "Remember Me in Gethsemane.",
      "Remember Me misunderstood, betrayed, abandoned, mocked, and wounded.",
      "There is no human sorrow you bring before Me that I regard as insignificant.",
      "Let Me remain with you inside it.",
      "You do not have to understand the entire road before taking the next step with Me.",
      "For now, allow Me to carry what has become too heavy for you.",
    ],
    pausePrompts: ["Jesus, this is what hurts..."],
    prayer: `Jesus, I cannot control everything that happens around me.
I place this burden into Your Providence.
Give me light for what I must do,
strength for what I must endure,
and peace concerning what I must entrust to You.`,
  },
  {
    id: "thanksgiving",
    title: "Tell Me What Has Been Good",
    scriptureReferences: ["Luke 17:11–19", "Psalm 102 (103)", "1 Thessalonians 5:16–18"],
    catechismReference: "CCC 2637",
    meditation: [
      "My child, do not let suffering make you forget the gifts hidden throughout your life.",
      "Tell Me something good.",
      "What made you smile recently?",
      "Who showed you kindness?",
      "What prayer was answered in a way you almost overlooked?",
      "What ordinary blessing has become so familiar that you rarely thank Me for it?",
      "Your life contains countless small gifts.",
      "A meal.",
      "A conversation.",
      "A safe journey home.",
      "A person who loves you.",
      "A moment of laughter.",
      "Another morning.",
      "Another opportunity to begin again.",
      "Grace often arrives quietly.",
      "Learn to notice it.",
      "Thanksgiving teaches the heart to recognize My presence not only in extraordinary moments but in ordinary ones.",
      "Look back over the last twenty-four hours.",
      "Where was goodness present?",
      "Where were you protected?",
      "Where were you encouraged?",
      "Where did something work out better than expected?",
      "Where did someone else become a blessing to you?",
      "Tell Me about it.",
      "I delight when gratitude awakens within you.",
    ],
    pausePrompts: [
      "Name three things for which you are grateful.",
      "After each one, pause and offer your thanks to Jesus.",
    ],
    gratitudeResponses: 3,
    prayer: "Jesus, thank You for every gift, seen and unseen. Teach me to recognize Your presence in the ordinary.",
  },
  {
    id: "resolutions",
    title: "What Will You Give Me?",
    scriptureReferences: ["John 14:15", "Matthew 25:35–40", "John 13:34–35"],
    catechismReference: "CCC 2098",
    meditation: [
      "My child, our time together is meant to enter your life.",
      "Love cannot remain only a feeling experienced in prayer.",
      "It must become a choice.",
      "What is one choice you know I am asking you to make?",
      "Perhaps there is something you should stop doing.",
      "Perhaps there is something good you keep postponing.",
      "Perhaps someone needs your forgiveness.",
      "Perhaps you need to ask forgiveness yourself.",
      "Perhaps you need to guard what you watch, what you read, what you say, or where you allow your thoughts to remain.",
      "Perhaps I am asking you to become more patient at home.",
      "More attentive to your family.",
      "More honest.",
      "More generous.",
      "More faithful to prayer.",
      "More willing to serve someone who cannot repay you.",
      "Do not promise Me a hundred things.",
      "Give Me one sincere yes.",
      "A small act of obedience offered with love can change the direction of a life.",
      "Ask for My grace.",
      "Then choose your next step.",
      "When you leave this place, carry something from this encounter into the world.",
      "Let someone experience My love because you spent time with Me.",
    ],
    pausePrompts: ["Jesus, with Your grace, I will..."],
    prayer: `Jesus, I do not trust in my strength alone.
Give me the grace to live what I have promised.
When I become weak, draw me back to You.
Let my love for You become visible in the way I love others.`,
  },
  {
    id: "departure",
    title: "Carry My Presence With You",
    scriptureReferences: ["John 15:9–11", "Luke 24:29", "Matthew 28:20"],
    catechismReference: "CCC 1391",
    meditation: [
      "Soon you will leave this quiet place.",
      "The doors will open again to responsibilities, conversations, noise, work, family, decisions, and unexpected difficulties.",
      "But our time together does not end when you leave the chapel.",
      "Carry Me with you.",
      "Remember Me when you are driving.",
      "Remember Me when someone tests your patience.",
      "Remember Me when you receive good news.",
      "Remember Me when plans suddenly change.",
      "Remember Me when temptation comes.",
      "Remember Me in the ordinary moments when nothing seems particularly spiritual.",
      "Invite Me into them all.",
      "And stay close to My Mother.",
      "She knows how to remain near Me with a faithful and attentive heart. Ask her to teach you to treasure My presence and follow Me even when you do not understand everything I am doing.",
      "Before you leave, look toward Me once more.",
      "You may have arrived carrying many things.",
      "You do not have to take all of them back with you.",
      "Leave some here.",
      "Take instead the remembrance that you are loved, known, accompanied, and called.",
      "Then go in peace.",
      "Come back again.",
      "There will always be more of My Heart for you to discover.",
    ],
    pausePrompts: ["Before you leave, look toward Jesus once more and allow Him to hold what you do not need to carry away."],
    prayer: `Jesus, thank You for allowing me to remain with You.
Keep my heart near Your Heart when I leave this place.
May my thoughts, words, choices, and actions reflect the grace You have given me here.
Help me recognize Your presence throughout my day.
Through the intercession of the Blessed Virgin Mary, teach me to remain faithful to You.
Jesus, I trust in You.
Jesus, I love You.
Jesus, remain with me.
Amen.`,
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
