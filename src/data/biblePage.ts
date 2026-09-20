import { BibleUseCase, type BibleCardItem, type BibleFinderRecommendation, type BibleLink, type BibleRelatedTool, type BibleStep } from "@/types/bible";

const usccbDailyReadings: BibleLink = {
  label: "USCCB Daily Readings",
  href: "https://bible.usccb.org/daily-bible-reading",
  external: true,
  official: true,
};

const usccbTranslations: BibleLink = {
  label: "USCCB Approved Translations",
  href: "https://www.usccb.org/offices/new-american-bible/approved-translations-bible",
  external: true,
  official: true,
};

export const bibleHero = {
  title: "The Bible",
  subtitle: "A calm place to begin, return to, and understand the Bible—one passage at a time.",
  copy:
    "You do not need to know everything before you begin. Choose a short passage, read it in context, notice what it says, and return regularly.",
};

export const catholicViewPoints = [
  "Scripture is inspired by God.",
  "Scripture reveals God's saving plan.",
  "Jesus Christ is the center of Scripture.",
  "The Old and New Testaments belong together.",
  "The Bible is read with the Church, not in isolation.",
  "Sacred Tradition helps us receive the Word faithfully.",
  "The Magisterium serves the Word of God.",
  "Scripture should lead to worship, conversion, and love.",
];

export const catholicViewNote =
  "Catholics do not see the Bible as opposed to Tradition. The Church received the Word, handed it on, preserved the Scriptures, and continues to proclaim them.";

export const scriptureTraditionMagisteriumCards: BibleCardItem[] = [
  {
    title: "Sacred Scripture",
    description: "The inspired written Word of God.",
  },
  {
    title: "Sacred Tradition",
    description: "The living handing on of the apostolic faith in the Church.",
  },
  {
    title: "Magisterium",
    description: "The Church's teaching office, serving the Word of God by faithfully interpreting Scripture and Tradition.",
  },
];

export const scriptureTraditionMagisteriumLinks: BibleLink[] = [
  { label: "Sacred Tradition", href: "/tradition" },
  { label: "Church Authority", href: "/pope" },
  { label: "Catechism", href: "/catechism" },
  { label: "Councils", href: "/councils" },
];

export const bibleAtMassCards: BibleCardItem[] = [
  {
    title: "First Reading",
    description: "The Church hears salvation history and God's covenant promises proclaimed to the assembly.",
  },
  {
    title: "Responsorial Psalm",
    description: "The Psalms teach the Church how to answer God with praise, lament, trust, and thanksgiving.",
  },
  {
    title: "Second Reading",
    description: "The apostolic letters instruct, correct, console, and strengthen the Church in Christ.",
  },
  {
    title: "Gospel",
    description: "The Gospel places us before Jesus Himself, His words, His mercy, and His saving work.",
  },
  {
    title: "Homily",
    description: "The homily helps the faithful receive the readings as a living word for faith and daily life.",
  },
  {
    title: "Eucharistic prayers and biblical imagery",
    description: "The language of sacrifice, covenant, thanksgiving, remembrance, and heavenly worship is deeply biblical.",
  },
  {
    title: "The Mass as Scripture prayed and fulfilled",
    description: "Catholics do not only study Scripture at Mass. The Church proclaims it, answers it, and lives it sacramentally.",
  },
];

export const howToReadBibleCatholicSteps: BibleStep[] = [
  { title: "Start small", description: "Choose a short passage or one chapter." },
  { title: "Read the surrounding passage", description: "Notice who is speaking, the audience, and what comes before and after." },
  { title: "Name what you notice", description: "A repeated word, question, image, or action is enough." },
  { title: "Use a trusted guide when needed", description: "A study Bible, teacher, or community can add historical and literary context." },
  { title: "Return tomorrow", description: "Consistency matters more than speed." },
];

export const gatherAWordSteps: BibleStep[] = [
  { title: "Pray", description: "Holy Spirit, help me receive what You want to give." },
  { title: "Read", description: "Read the passage slowly." },
  { title: "Notice", description: "What word, phrase, image, or person stands out?" },
  { title: "Stay", description: "Remain with that word. Do not rush to explain everything." },
  { title: "Ask", description: "What does this reveal about God, my heart, or today's call to love?" },
  { title: "Respond", description: "Speak to Jesus honestly." },
  { title: "Test gently", description: "Does this lead to faith, hope, charity, humility, repentance, peace, or obedience to God?" },
  { title: "Practice", description: "Choose one small action." },
];

export const prayerBeforeTheReadings = `Holy Spirit,
open my heart to the Word of God.

Let one word, phrase, or invitation
lead me closer to Jesus.

Protect me from distraction,
pride,
confusion,
and fear.

Teach me to listen with humility,
respond with love,
and live what I receive today.

Amen.`;

export const gatherAWordWarning =
  "Do not use Scripture as a magic answer machine. Do not open random verses to make major life decisions without prayer, reason, Church teaching, and wise counsel.";

export const dailyReadingsMethod = [
  "1 minute: Sign of the Cross and invite the Holy Spirit.",
  "3 minutes: Read the Gospel or one Mass reading slowly.",
  "2 minutes: Choose one word or phrase.",
  "2 minutes: Ask what Jesus is showing you.",
  "1 minute: Pray for grace.",
  "1 minute: Choose one action for the day.",
] as const;

export const lectioDivinaMovements: BibleCardItem[] = [
  { title: "Arrive", description: "Choose a brief passage and remove distractions." },
  { title: "Read (lectio)", description: "Read it slowly once or twice; first ask what it says." },
  { title: "Reflect (meditatio)", description: "Notice a word, question, or connection." },
  { title: "Respond (oratio)", description: "Put your response into your own words: a thought, journal note, question, or prayer." },
  { title: "Rest (contemplatio)", description: "Sit quietly before returning to the text." },
  { title: "Carry it forward", description: "Revisit the passage or explore its wider context later." },
];

export const deuterocanonicalBooks = [
  "Tobit",
  "Judith",
  "Wisdom",
  "Sirach",
  "Baruch",
  "1 Maccabees",
  "2 Maccabees",
  "Additions to Esther and Daniel",
];

export const whereToStartPaths = [
  {
    title: "Path 1: Start with Jesus",
    references: ["Gospel of Luke", "Gospel of John", "Acts of the Apostles"],
  },
  {
    title: "Path 2: Pray with the Church",
    references: ["Daily Mass readings", "Psalms", "Sunday Gospel"],
  },
  {
    title: "Path 3: Learn the story",
    references: ["Genesis", "Exodus", "1 Samuel", "Luke", "Acts"],
  },
  {
    title: "Path 4: For prayer and comfort",
    references: ["Psalms", "Gospel of John", "Romans 8", "Philippians", "1 John"],
  },
  {
    title: "Path 5: For OCIA or exploring Catholicism",
    references: ["Luke", "Acts", "John", "Romans", "James", "Psalms", "Daily Mass readings"],
  },
];

export const booksOfBibleOverview = [
  {
    title: "Foundations and story",
    description: "Law and narrative introduce the people, places, promises, and questions that shape the larger story.",
    entries: ["Law", "Origins and ancestors", "Exodus and covenant", "History"],
  },
  {
    title: "Poetry and wisdom",
    description: "Psalms, songs, reflections, and wisdom writings give language to joy, grief, wonder, and daily life.",
    entries: ["Psalms", "Poetry", "Wisdom writings", "Reflection"],
  },
  {
    title: "Prophetic voices",
    description: "The prophets speak into real communities, naming injustice, loss, hope, and the call to faithfulness.",
    entries: ["Major prophets", "Minor prophets", "Warning", "Hope"],
  },
  {
    title: "Jesus and the early Church",
    description: "The Gospels, Acts, letters, and Revelation explore Jesus, the first Christian communities, and their hope.",
    entries: ["Gospels", "Acts", "Letters", "Revelation"],
  },
];

export const bibleBookInvitations = [
  {
    title: "Genesis",
    encounter: "Creation, fractured families, and the long promise carried through Abraham's descendants.",
    beginHere: "You want the Bible's opening questions—who God is, what humans are for, and why trust matters.",
    href: "https://bible.usccb.org/bible/genesis/1",
    linkLabel: "Open Genesis 1",
  },
  {
    title: "Exodus",
    encounter: "Moses, liberation from Egypt, a wilderness journey, and a covenant formed at Sinai.",
    beginHere: "You are drawn to stories of freedom, courage, community, and learning to live after rescue.",
    href: "https://bible.usccb.org/bible/exodus/1",
    linkLabel: "Open Exodus 1",
  },
  {
    title: "Leviticus",
    encounter: "Ritual, holiness, sacrifice, and practical instructions for a people learning to live near the holy God.",
    beginHere: "You want to understand why worship, justice, and everyday life are held together in Israel's story.",
    href: "https://bible.usccb.org/bible/leviticus/1",
    linkLabel: "Open Leviticus 1",
  },
  {
    title: "Numbers",
    encounter: "A wilderness generation marked by census lists, setbacks, testing, and a long road toward the promised land.",
    beginHere: "You want an honest story about patience, failure, leadership, and continuing on after disappointment.",
    href: "https://bible.usccb.org/bible/numbers/1",
    linkLabel: "Open Numbers 1",
  },
  {
    title: "Deuteronomy",
    encounter: "Moses' final teaching, renewing the covenant and asking a new generation to remember, choose, and live faithfully.",
    beginHere: "You appreciate a book that pauses before a new beginning to gather its deepest lessons.",
    href: "https://bible.usccb.org/bible/deuteronomy/1",
    linkLabel: "Open Deuteronomy 1",
  },
  {
    title: "Joshua",
    encounter: "A people crossing into the land, facing conflict, making choices, and renewing their shared commitments.",
    beginHere: "You want to follow a turning point in the larger story after the wilderness journey.",
    href: "https://bible.usccb.org/bible/joshua/1",
    linkLabel: "Open Joshua 1",
  },
  {
    title: "Judges",
    encounter: "A repeating, unsettled cycle of crisis, rescue, compromise, and the cost of life without steady leadership.",
    beginHere: "You are ready for a candid, difficult story about communities losing their way and seeking deliverance.",
    href: "https://bible.usccb.org/bible/judges/1",
    linkLabel: "Open Judges 1",
  },
  {
    title: "Ruth",
    encounter: "A short, beautifully constructed story of grief, loyalty, risk, and unexpected belonging.",
    beginHere: "You want a complete, human-scale story that can be read in one sitting.",
    href: "https://bible.usccb.org/bible/ruth/1",
    linkLabel: "Open Ruth 1",
  },
  {
    title: "1 Samuel",
    encounter: "Samuel, Saul, and David in a dramatic account of prayer, kingship, courage, and a nation finding its shape.",
    beginHere: "You enjoy character-driven stories and want to see how Israel's monarchy begins.",
    href: "https://bible.usccb.org/bible/1samuel/1",
    linkLabel: "Open 1 Samuel 1",
  },
  {
    title: "2 Samuel",
    encounter: "David's reign, its achievements, its wounds, and the lasting consequences of personal and public choices.",
    beginHere: "You want a complex portrait of leadership, repentance, family, and power.",
    href: "https://bible.usccb.org/bible/2samuel/1",
    linkLabel: "Open 2 Samuel 1",
  },
  {
    title: "1 Kings",
    encounter: "Solomon's wisdom and temple, a divided kingdom, and prophets who confront rulers and call people back.",
    beginHere: "You want to meet Elijah and trace the hopes and fractures of Israel's royal story.",
    href: "https://bible.usccb.org/bible/1kings/1",
    linkLabel: "Open 1 Kings 1",
  },
  {
    title: "2 Kings",
    encounter: "Prophets, political upheaval, exile, and a searching account of why two kingdoms came apart.",
    beginHere: "You want to continue the story through Elisha and into one of the Bible's decisive losses.",
    href: "https://bible.usccb.org/bible/2kings/1",
    linkLabel: "Open 2 Kings 1",
  },
  {
    title: "1 Chronicles",
    encounter: "A retelling of Israel's family lines and David's reign, with special attention to worship and the temple.",
    beginHere: "You want to revisit familiar history through the lens of communal memory and praise.",
    href: "https://bible.usccb.org/bible/1chronicles/1",
    linkLabel: "Open 1 Chronicles 1",
  },
  {
    title: "2 Chronicles",
    encounter: "Solomon, the temple, the kings of Judah, reform, decline, and an ending that looks toward restoration.",
    beginHere: "You are interested in how worship and leadership shape a people's long memory.",
    href: "https://bible.usccb.org/bible/2chronicles/1",
    linkLabel: "Open 2 Chronicles 1",
  },
  {
    title: "Ezra",
    encounter: "Exiles return, rebuild the temple, and wrestle with how to renew a community after displacement.",
    beginHere: "You want a compact story about rebuilding, belonging, and starting again after loss.",
    href: "https://bible.usccb.org/bible/ezra/1",
    linkLabel: "Open Ezra 1",
  },
  {
    title: "Nehemiah",
    encounter: "A leader organizes the rebuilding of Jerusalem's walls while a people renew their shared life and commitments.",
    beginHere: "You are drawn to practical courage, teamwork, and the work of restoration.",
    href: "https://bible.usccb.org/bible/nehemiah/1",
    linkLabel: "Open Nehemiah 1",
  },
  {
    title: "Tobit",
    encounter: "A family story of exile, prayer, travel, healing, and unexpected help along the way.",
    beginHere: "You want a warm, story-shaped book about faithfulness in ordinary family life.",
    href: "https://bible.usccb.org/bible/tobit/1",
    linkLabel: "Open Tobit 1",
  },
  {
    title: "Judith",
    encounter: "A courageous widow faces a national crisis with prayer, boldness, and strategic resolve.",
    beginHere: "You want a vivid story of courage under pressure and a surprising central character.",
    href: "https://bible.usccb.org/bible/judith/1",
    linkLabel: "Open Judith 1",
  },
  {
    title: "Esther",
    encounter: "A Jewish woman in a royal court risks her safety to protect her people from catastrophe.",
    beginHere: "You enjoy tense, fast-moving stories about courage, identity, and timely action.",
    href: "https://bible.usccb.org/bible/esther/1",
    linkLabel: "Open Esther 1",
  },
  {
    title: "1 Maccabees",
    encounter: "A historical account of resistance, religious freedom, and the family that led a revolt against oppression.",
    beginHere: "You want the background for the Maccabean period and a story of conviction under pressure.",
    href: "https://bible.usccb.org/bible/1maccabees/1",
    linkLabel: "Open 1 Maccabees 1",
  },
  {
    title: "2 Maccabees",
    encounter: "Selected episodes from the same turbulent era, told with a focus on suffering, courage, worship, and hope.",
    beginHere: "You want a shorter, more reflective companion to the Maccabean story.",
    href: "https://bible.usccb.org/bible/2maccabees/1",
    linkLabel: "Open 2 Maccabees 1",
  },
  {
    title: "Job",
    encounter: "A poetic and probing conversation about suffering, grief, friendship, protest, and the mystery of God.",
    beginHere: "You have serious questions about pain and want a book that refuses easy answers.",
    href: "https://bible.usccb.org/bible/job/1",
    linkLabel: "Open Job 1",
  },
  {
    title: "Psalms",
    encounter: "Songs and poems for praise, gratitude, grief, fear, trust, and hope.",
    beginHere: "You need language for what you actually feel today, rather than a plot to follow.",
    href: "https://bible.usccb.org/bible/psalms/23",
    linkLabel: "Open Psalm 23",
  },
  {
    title: "Proverbs",
    encounter: "Compact sayings and vivid wisdom poems that train attention for ordinary choices.",
    beginHere: "You prefer short readings that invite you to pause, ponder, and practice good judgment.",
    href: "https://bible.usccb.org/bible/proverbs/1",
    linkLabel: "Open Proverbs 1",
  },
  {
    title: "Ecclesiastes",
    encounter: "A wise observer tests work, pleasure, wealth, time, and mortality in search of what truly lasts.",
    beginHere: "You are asking honest questions about meaning, ambition, and the passing of time.",
    href: "https://bible.usccb.org/bible/ecclesiastes/1",
    linkLabel: "Open Ecclesiastes 1",
  },
  {
    title: "Song of Songs",
    encounter: "Lyrical love poetry filled with longing, beauty, nature, delight, and mutual affection.",
    beginHere: "You want to encounter the Bible's most poetic celebration of love.",
    href: "https://bible.usccb.org/bible/songofsongs/1",
    linkLabel: "Open Song of Songs 1",
  },
  {
    title: "Wisdom",
    encounter: "A meditation on wisdom, justice, mortality, and the hope that holds life before God.",
    beginHere: "You want reflective writing that brings biblical faith into conversation with big questions.",
    href: "https://bible.usccb.org/bible/wisdom/1",
    linkLabel: "Open Wisdom 1",
  },
  {
    title: "Sirach",
    encounter: "A broad collection of practical teaching about friendship, family, work, worship, speech, and wise living.",
    beginHere: "You enjoy concrete counsel for everyday decisions and relationships.",
    href: "https://bible.usccb.org/bible/sirach/1",
    linkLabel: "Open Sirach 1",
  },
  {
    title: "Isaiah",
    encounter: "Bold poetry that confronts injustice, exposes false security, and speaks hope into upheaval.",
    beginHere: "You want prophetic language that takes both public life and personal faith seriously.",
    href: "https://bible.usccb.org/bible/isaiah/40",
    linkLabel: "Open Isaiah 40",
  },
  {
    title: "Jeremiah",
    encounter: "A prophet's long, vulnerable ministry through political collapse, warning, lament, and a promise of renewal.",
    beginHere: "You want to stay with a prophetic voice that is candid about grief and stubbornly hopeful.",
    href: "https://bible.usccb.org/bible/jeremiah/1",
    linkLabel: "Open Jeremiah 1",
  },
  {
    title: "Lamentations",
    encounter: "Five poems that give disciplined voice to the devastation of Jerusalem and the ache of communal loss.",
    beginHere: "You need a place in Scripture that takes sorrow seriously without rushing past it.",
    href: "https://bible.usccb.org/bible/lamentations/1",
    linkLabel: "Open Lamentations 1",
  },
  {
    title: "Baruch",
    encounter: "Prayer, confession, wisdom, and consolation spoken from the experience of exile.",
    beginHere: "You want a short prophetic book that moves from loss toward hope and return.",
    href: "https://bible.usccb.org/bible/baruch/1",
    linkLabel: "Open Baruch 1",
  },
  {
    title: "Ezekiel",
    encounter: "Striking visions, symbolic actions, judgment, responsibility, and a persistent promise of restoration.",
    beginHere: "You are curious about vivid prophetic imagery and a book that asks a community to imagine renewal.",
    href: "https://bible.usccb.org/bible/ezekiel/1",
    linkLabel: "Open Ezekiel 1",
  },
  {
    title: "Daniel",
    encounter: "Court tales of faithfulness under empire alongside symbolic visions of kingdoms, struggle, and hope.",
    beginHere: "You want both memorable stories and imaginative visions from a time of pressure and change.",
    href: "https://bible.usccb.org/bible/daniel/1",
    linkLabel: "Open Daniel 1",
  },
  {
    title: "Hosea",
    encounter: "A prophet uses the pain of a broken marriage as a startling image for covenant love and unfaithfulness.",
    beginHere: "You are ready for direct, emotionally charged prophetic poetry about loss and restoration.",
    href: "https://bible.usccb.org/bible/hosea/1",
    linkLabel: "Open Hosea 1",
  },
  {
    title: "Joel",
    encounter: "A locust crisis becomes a call to return, mourn, hope, and imagine a renewed people.",
    beginHere: "You want a short prophetic book that turns disaster into an invitation to reflect and begin again.",
    href: "https://bible.usccb.org/bible/joel/1",
    linkLabel: "Open Joel 1",
  },
  {
    title: "Amos",
    encounter: "A shepherd-prophet confronts economic injustice, empty religion, and complacent power.",
    beginHere: "You want clear, forceful prophetic speech about justice and integrity.",
    href: "https://bible.usccb.org/bible/amos/1",
    linkLabel: "Open Amos 1",
  },
  {
    title: "Obadiah",
    encounter: "The Bible's shortest prophetic book, speaking judgment against Edom over violence toward a neighboring people.",
    beginHere: "You want a brief entry into the prophets and a focused reflection on pride and responsibility.",
    href: "https://bible.usccb.org/bible/obadiah/1",
    linkLabel: "Open Obadiah 1",
  },
  {
    title: "Jonah",
    encounter: "A reluctant prophet runs, prays, preaches, and struggles with mercy that reaches beyond his expectations.",
    beginHere: "You want a short, surprising story that invites questions about compassion and resistance.",
    href: "https://bible.usccb.org/bible/jonah/1",
    linkLabel: "Open Jonah 1",
  },
  {
    title: "Micah",
    encounter: "Judgment and hope from a rural prophet who speaks about justice, leadership, and a future of peace.",
    beginHere: "You want a compact prophetic book that holds moral seriousness and hope together.",
    href: "https://bible.usccb.org/bible/micah/1",
    linkLabel: "Open Micah 1",
  },
  {
    title: "Nahum",
    encounter: "Poetry announcing the fall of Nineveh, the capital of a powerful and feared empire.",
    beginHere: "You want to see how prophetic poetry responds to violence and imperial power.",
    href: "https://bible.usccb.org/bible/nahum/1",
    linkLabel: "Open Nahum 1",
  },
  {
    title: "Habakkuk",
    encounter: "A frank dialogue in which a prophet questions God about violence and waits for an answer.",
    beginHere: "You need permission to bring difficult questions about injustice into prayerful attention.",
    href: "https://bible.usccb.org/bible/habakkuk/1",
    linkLabel: "Open Habakkuk 1",
  },
  {
    title: "Zephaniah",
    encounter: "A concentrated message of judgment, purification, and joy addressed to Jerusalem and the nations.",
    beginHere: "You want a short prophetic book that moves from warning toward a vision of restoration.",
    href: "https://bible.usccb.org/bible/zephaniah/1",
    linkLabel: "Open Zephaniah 1",
  },
  {
    title: "Haggai",
    encounter: "A brief post-exile call to rebuild the temple and reorder a community's priorities.",
    beginHere: "You are interested in the practical work of rebuilding after a long disruption.",
    href: "https://bible.usccb.org/bible/haggai/1",
    linkLabel: "Open Haggai 1",
  },
  {
    title: "Zechariah",
    encounter: "Night visions, prophetic poetry, and encouragement for a community rebuilding after exile.",
    beginHere: "You want imaginative prophetic writing with themes of renewal and hope.",
    href: "https://bible.usccb.org/bible/zechariah/1",
    linkLabel: "Open Zechariah 1",
  },
  {
    title: "Malachi",
    encounter: "A final prophetic conversation about worship, justice, faithfulness, and a people growing weary.",
    beginHere: "You want a short, direct book that asks what faithful worship looks like in daily life.",
    href: "https://bible.usccb.org/bible/malachi/1",
    linkLabel: "Open Malachi 1",
  },
  {
    title: "Matthew",
    encounter: "A Gospel that presents Jesus through teaching, healing, parables, and a deep engagement with Israel's Scriptures.",
    beginHere: "You want a Gospel with long teaching sections and strong connections to the Old Testament.",
    href: "https://bible.usccb.org/bible/matthew/1",
    linkLabel: "Open Matthew 1",
  },
  {
    title: "Mark",
    encounter: "The shortest, fastest-moving Gospel, centered on Jesus' actions, questions, healing, and path toward the cross.",
    beginHere: "You want to meet Jesus through a vivid, direct narrative.",
    href: "https://bible.usccb.org/bible/mark/1",
    linkLabel: "Open Mark 1",
  },
  {
    title: "Luke",
    encounter: "A carefully shaped story of Jesus that leads from early life and public ministry to Jerusalem, death, and resurrection.",
    beginHere: "You want an orderly Gospel that continues naturally into Acts.",
    href: "https://bible.usccb.org/bible/luke/1",
    linkLabel: "Open Luke 1",
  },
  {
    title: "John",
    encounter: "A symbolic, reflective Gospel built around signs, conversations, and big images of light, life, and love.",
    beginHere: "You are ready to linger over a passage and ask what it reveals rather than rush through the story.",
    href: "https://bible.usccb.org/bible/john/1",
    linkLabel: "Open John 1",
  },
  {
    title: "Acts",
    encounter: "The early Christian movement finding its voice, crossing cultural boundaries, and carrying the message from Jerusalem toward Rome.",
    beginHere: "You have read Luke and wonder what happened next—or want a story about courageous community.",
    href: "https://bible.usccb.org/bible/acts/1",
    linkLabel: "Open Acts 1",
  },
  {
    title: "Romans",
    encounter: "Paul's wide-ranging letter about the gospel, faith, grace, life in Christ, and a renewed way of living together.",
    beginHere: "You are ready for a substantial letter that asks big questions about God, humanity, and transformation.",
    href: "https://bible.usccb.org/bible/romans/1",
    linkLabel: "Open Romans 1",
  },
  {
    title: "1 Corinthians",
    encounter: "Paul addresses a lively but divided church through questions of unity, love, worship, gifts, and resurrection.",
    beginHere: "You want to see how early Christians worked through real disagreements and shared life.",
    href: "https://bible.usccb.org/bible/1corinthians/1",
    linkLabel: "Open 1 Corinthians 1",
  },
  {
    title: "2 Corinthians",
    encounter: "A personal letter about ministry, suffering, reconciliation, generosity, weakness, and the power of God.",
    beginHere: "You want to hear Paul at his most vulnerable and reflective.",
    href: "https://bible.usccb.org/bible/2corinthians/1",
    linkLabel: "Open 2 Corinthians 1",
  },
  {
    title: "Galatians",
    encounter: "A passionate argument for the freedom of the gospel and a life shaped by the Spirit.",
    beginHere: "You want a shorter letter with urgency, conviction, and a clear call to freedom.",
    href: "https://bible.usccb.org/bible/galatians/1",
    linkLabel: "Open Galatians 1",
  },
  {
    title: "Ephesians",
    encounter: "A sweeping vision of life in Christ, unity across difference, prayer, and a people being built together.",
    beginHere: "You want a letter that moves from a big-picture vision to practical encouragement.",
    href: "https://bible.usccb.org/bible/ephesians/1",
    linkLabel: "Open Ephesians 1",
  },
  {
    title: "Philippians",
    encounter: "A warm letter from prison about joy, humility, friendship, perseverance, and confidence in Christ.",
    beginHere: "You want a short, encouraging letter that is both personal and memorable.",
    href: "https://bible.usccb.org/bible/philippians/1",
    linkLabel: "Open Philippians 1",
  },
  {
    title: "Colossians",
    encounter: "A concentrated letter about Christ, spiritual maturity, gratitude, and the shape of a renewed life.",
    beginHere: "You want a concise letter that pairs a high view of Christ with practical daily guidance.",
    href: "https://bible.usccb.org/bible/colossians/1",
    linkLabel: "Open Colossians 1",
  },
  {
    title: "1 Thessalonians",
    encounter: "An affectionate early letter encouraging a young community in faith, love, hope, and everyday faithfulness.",
    beginHere: "You want one of the earliest New Testament letters and a gentle place to begin with Paul.",
    href: "https://bible.usccb.org/bible/1thessalonians/1",
    linkLabel: "Open 1 Thessalonians 1",
  },
  {
    title: "2 Thessalonians",
    encounter: "A brief follow-up about perseverance, work, community order, and questions about the future.",
    beginHere: "You want a compact letter that addresses uncertainty without abandoning daily responsibilities.",
    href: "https://bible.usccb.org/bible/2thessalonians/1",
    linkLabel: "Open 2 Thessalonians 1",
  },
  {
    title: "1 Timothy",
    encounter: "Guidance for leading a church community, protecting sound teaching, and growing in a faithful way of life.",
    beginHere: "You are interested in practical pastoral guidance for a community and its leaders.",
    href: "https://bible.usccb.org/bible/1timothy/1",
    linkLabel: "Open 1 Timothy 1",
  },
  {
    title: "2 Timothy",
    encounter: "A personal, enduring letter about courage, teaching, suffering, friendship, and finishing a calling well.",
    beginHere: "You want an intimate letter of encouragement addressed from one generation to another.",
    href: "https://bible.usccb.org/bible/2timothy/1",
    linkLabel: "Open 2 Timothy 1",
  },
  {
    title: "Titus",
    encounter: "A short letter linking healthy teaching, good works, leadership, and the ordinary life of a community.",
    beginHere: "You want concise advice about how belief takes shape in a shared way of life.",
    href: "https://bible.usccb.org/bible/titus/1",
    linkLabel: "Open Titus 1",
  },
  {
    title: "Philemon",
    encounter: "A brief personal appeal that brings friendship, reconciliation, and social relationships into the light of faith.",
    beginHere: "You want to read a whole New Testament letter in one sitting and consider its human stakes.",
    href: "https://bible.usccb.org/bible/philemon/1",
    linkLabel: "Open Philemon 1",
  },
  {
    title: "Hebrews",
    encounter: "A richly layered reflection on Jesus, worship, perseverance, and the meaning of faith across Scripture.",
    beginHere: "You want a challenging, rewarding bridge between the Old Testament and the New.",
    href: "https://bible.usccb.org/bible/hebrews/1",
    linkLabel: "Open Hebrews 1",
  },
  {
    title: "James",
    encounter: "Direct wisdom about speech, wealth, trials, prayer, mercy, and putting faith into action.",
    beginHere: "You prefer a practical letter with short, memorable challenges for daily life.",
    href: "https://bible.usccb.org/bible/james/1",
    linkLabel: "Open James 1",
  },
  {
    title: "1 Peter",
    encounter: "Encouragement for communities facing pressure, calling them to hope, holiness, humility, and steadfast love.",
    beginHere: "You want a letter that speaks to resilience and living with hope through difficulty.",
    href: "https://bible.usccb.org/bible/1peter/1",
    linkLabel: "Open 1 Peter 1",
  },
  {
    title: "2 Peter",
    encounter: "A call to grow in goodness and discern wisely amid distorted teaching and delayed expectations.",
    beginHere: "You want a short letter about perseverance, discernment, and spiritual growth.",
    href: "https://bible.usccb.org/bible/2peter/1",
    linkLabel: "Open 2 Peter 1",
  },
  {
    title: "1 John",
    encounter: "A meditative letter about light, truth, love, confidence, and remaining in communion with God.",
    beginHere: "You want a reflective letter with simple, repeating images and a strong focus on love.",
    href: "https://bible.usccb.org/bible/1john/1",
    linkLabel: "Open 1 John 1",
  },
  {
    title: "2 John",
    encounter: "A very brief message about truth, love, welcome, and faithfulness within a community.",
    beginHere: "You want to read one of the Bible's shortest letters in a single quiet sitting.",
    href: "https://bible.usccb.org/bible/2john/1",
    linkLabel: "Open 2 John 1",
  },
  {
    title: "3 John",
    encounter: "A short personal letter about hospitality, conflict, generosity, and the care of traveling teachers.",
    beginHere: "You want a small window into the relationships and tensions of an early Christian community.",
    href: "https://bible.usccb.org/bible/3john/1",
    linkLabel: "Open 3 John 1",
  },
  {
    title: "Jude",
    encounter: "A compact, urgent appeal to hold fast to the faith amid disruptive voices in the community.",
    beginHere: "You want a brief letter that shows the intensity and challenges of the early church.",
    href: "https://bible.usccb.org/bible/jude/1",
    linkLabel: "Open Jude 1",
  },
  {
    title: "Revelation",
    encounter: "A visionary book of worship, conflict, judgment, endurance, and the final hope of God making all things new.",
    beginHere: "You want symbolic, imaginative writing and are willing to read slowly with trusted notes nearby.",
    href: "https://bible.usccb.org/bible/revelation/1",
    linkLabel: "Open Revelation 1",
  },
];

export type BibleCollection = {
  id: string;
  title: string;
  description: string;
  genre: string;
  timeAndSetting: string;
  books: string[];
};

export const bibleCollections: BibleCollection[] = [
  {
    id: "torah",
    title: "Torah / Pentateuch",
    description: "The Bible's foundations: creation, ancestors, liberation, covenant, and a people learning how to live.",
    genre: "Narrative, law, covenant teaching, and speeches",
    timeAndSetting:
      "The story moves from primeval origins and the ancestors to Egypt and the wilderness. These books gather ancient traditions, so the setting of the events and the formation of the texts should not be treated as one simple date.",
    books: ["Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy"],
  },
  {
    id: "history",
    title: "Historical Books",
    description: "Stories of settlement, judges, kings, exile, return, and the Maccabean struggle for faithful life.",
    genre: "Narrative history, court story, family story, and community memory",
    timeAndSetting:
      "These books range from Israel's settlement in the land, through the monarchies and Babylonian exile, to restoration under Persian rule and the Maccabean crisis of the second century BCE. Individual books focus on different moments within that long span.",
    books: ["Joshua", "Judges", "Ruth", "1 Samuel", "2 Samuel", "1 Kings", "2 Kings", "1 Chronicles", "2 Chronicles", "Ezra", "Nehemiah", "Tobit", "Judith", "Esther", "1 Maccabees", "2 Maccabees"],
  },
  {
    id: "wisdom-poetry",
    title: "Wisdom and Poetry",
    description: "Prayers, songs, arguments, love poetry, and practical wisdom for ordinary life and life’s hardest questions.",
    genre: "Poetry, wisdom sayings, reflective dialogue, and lyric love poetry",
    timeAndSetting:
      "These books are not one continuous story. They collect prayers, poems, teachings, and reflections shaped in different periods of Israelite and Jewish life; their literary form matters as much as any single historical date.",
    books: ["Job", "Psalms", "Proverbs", "Ecclesiastes", "Song of Songs", "Wisdom", "Sirach"],
  },
  {
    id: "major-prophets",
    title: "Major Prophets",
    description: "Long prophetic books confronting injustice, catastrophe, exile, responsibility, and the possibility of renewal.",
    genre: "Prophetic poetry, visions, symbolic action, lament, and proclamation",
    timeAndSetting:
      "These voices address the crisis years before and during the Babylonian exile, as well as the long work of life after exile. “Major” describes the length of these books, not greater importance.",
    books: ["Isaiah", "Jeremiah", "Lamentations", "Baruch", "Ezekiel", "Daniel"],
  },
  {
    id: "minor-prophets",
    title: "The Twelve Minor Prophets",
    description: "Twelve shorter prophetic voices speaking about justice, worship, power, disaster, return, and hope.",
    genre: "Short prophetic collections, poetry, vision, and narrative",
    timeAndSetting:
      "The twelve speak into different crises from the eighth through post-exilic periods BCE. “Minor” means shorter, not less important; read each book in its own setting rather than as a single continuous narrative.",
    books: ["Hosea", "Joel", "Amos", "Obadiah", "Jonah", "Micah", "Nahum", "Habakkuk", "Zephaniah", "Haggai", "Zechariah", "Malachi"],
  },
  {
    id: "gospels-acts",
    title: "Gospels and Acts",
    description: "Four accounts of Jesus and the story of the early Christian movement that follows.",
    genre: "Gospel narrative, teaching, parable, passion narrative, and early-church history",
    timeAndSetting:
      "The Gospel stories are set in first-century Roman Judea and Galilee, culminating in Jerusalem. Acts begins in Jerusalem and follows the movement outward through the Roman world; Luke and Acts form a two-volume work.",
    books: ["Matthew", "Mark", "Luke", "John", "Acts"],
  },
  {
    id: "pauline-letters",
    title: "Pauline Letters",
    description: "Letters to churches and co-workers facing questions of faith, unity, practice, suffering, and hope.",
    genre: "Pastoral letter, argument, encouragement, prayer, and instruction",
    timeAndSetting:
      "These letters address early Christian communities in the first-century Roman world. They respond to particular settings, so it helps to notice the recipient, the concern being addressed, and the letter’s movement from teaching toward practice.",
    books: ["Romans", "1 Corinthians", "2 Corinthians", "Galatians", "Ephesians", "Philippians", "Colossians", "1 Thessalonians", "2 Thessalonians", "1 Timothy", "2 Timothy", "Titus", "Philemon"],
  },
  {
    id: "general-letters",
    title: "Hebrews and the Catholic Letters",
    description: "Letters and homiletic teaching on perseverance, wisdom, community life, love, discernment, and faithfulness.",
    genre: "Homily, wisdom teaching, pastoral letter, and community exhortation",
    timeAndSetting:
      "These writings address early Christian communities in varied situations. Their authorship and precise dating are discussed differently by scholars, so begin with the recipient, literary form, and stated concern rather than a single date label.",
    books: ["Hebrews", "James", "1 Peter", "2 Peter", "1 John", "2 John", "3 John", "Jude"],
  },
  {
    id: "revelation",
    title: "Revelation",
    description: "A visionary book of worship, conflict, endurance, judgment, and final hope.",
    genre: "Apocalyptic vision, prophecy, and pastoral letter",
    timeAndSetting:
      "Revelation addresses Christian communities in the Roman Empire through symbolic visions. Its imagery is meant to be read slowly and in conversation with the rest of Scripture, not as a simple timetable of future events.",
    books: ["Revelation"],
  },
];

export const bibleCollectionForBook = Object.fromEntries(
  bibleCollections.flatMap((collection) => collection.books.map((book) => [book, collection]))
) as Record<string, BibleCollection>;

export function bibleBookAnchorId(title: string) {
  return `book-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;
}

export type BibleBookOrientation = {
  bigQuestion: string;
  keyPeopleAndPlaces: string;
};

const bibleBookOrientationEntries: Array<[string, string, string]> = [
  ["Genesis", "What does it mean to trust God amid blessing, failure, family conflict, and promise?", "Adam and Eve; Abraham and Sarah; Jacob and Joseph; Eden, Canaan, Egypt"],
  ["Exodus", "What does freedom require after rescue?", "Moses, Aaron, Miriam, Pharaoh; Egypt, Sinai, wilderness"],
  ["Leviticus", "How can a people order worship, justice, and ordinary life around holiness?", "Moses and Aaron; the priesthood; Sinai and the tabernacle"],
  ["Numbers", "How does a community continue when fear, failure, and delay shape the journey?", "Moses, Aaron, Miriam, Joshua; wilderness and Moab"],
  ["Deuteronomy", "What must a new generation remember before it begins again?", "Moses, Joshua, Israel; plains of Moab and the promised land"],
  ["Joshua", "How does a people live faithfully at the threshold of a new land?", "Joshua, Rahab, Israel; Jordan, Jericho, Shechem"],
  ["Judges", "What happens when a community repeatedly forgets its calling?", "Deborah, Gideon, Samson; Canaan and tribal Israel"],
  ["Ruth", "How can loyalty and courage create belonging after loss?", "Ruth, Naomi, Boaz; Moab and Bethlehem"],
  ["1 Samuel", "What kind of leadership does a people seek—and what does it cost?", "Samuel, Hannah, Saul, David; Shiloh, Ramah, Jerusalem"],
  ["2 Samuel", "How do power, repentance, and family wounds shape a kingdom?", "David, Nathan, Bathsheba, Absalom; Jerusalem"],
  ["1 Kings", "What holds a divided people together when rulers and worship falter?", "Solomon, Elijah, Ahab, Jezebel; Jerusalem, Samaria, Carmel"],
  ["2 Kings", "How do warnings, reform, and political collapse lead a people into exile?", "Elisha, Hezekiah, Josiah; Samaria, Jerusalem, Babylon"],
  ["1 Chronicles", "How can a people remember its past through worship and shared ancestry?", "David, Solomon, the tribes; Jerusalem and the temple"],
  ["2 Chronicles", "What does renewal look like when worship and leadership are rebuilt?", "Solomon, Hezekiah, Josiah, Cyrus; Jerusalem and Babylon"],
  ["Ezra", "How does a scattered people rebuild a common life after exile?", "Ezra, Zerubbabel, returning exiles; Jerusalem and Persia"],
  ["Nehemiah", "What does practical courage look like when a community needs rebuilding?", "Nehemiah, Ezra, the people of Jerusalem; Susa and Jerusalem"],
  ["Tobit", "How do prayer, family faithfulness, and help from others meet a life in exile?", "Tobit, Tobias, Sarah, Raphael; Nineveh, Media"],
  ["Judith", "What can courageous action and prayer look like in a public crisis?", "Judith, Holofernes, the people of Bethulia; Bethulia and the Assyrian camp"],
  ["Esther", "When identity and survival are threatened, when is the moment to act?", "Esther, Mordecai, Xerxes, Haman; Susa"],
  ["1 Maccabees", "How can a people hold fast to worship and identity under pressure?", "Mattathias, Judas Maccabeus, Seleucid rulers; Judea and Jerusalem"],
  ["2 Maccabees", "How do suffering, worship, and hope sustain a people in crisis?", "Judas Maccabeus, Eleazar, the martyrs; Jerusalem and Judea"],
  ["Job", "How do we speak honestly about suffering without turning it into a simple answer?", "Job, his friends, the challenger; the land of Uz"],
  ["Psalms", "How can every human emotion become language addressed to God?", "Israel's worshiping community; Zion, temple, wilderness"],
  ["Proverbs", "What does wise attention look like in ordinary choices?", "Parents, children, Lady Wisdom, sages; home, gate, marketplace"],
  ["Ecclesiastes", "What lasts when work, pleasure, wealth, and time do not satisfy?", "Qoheleth, observers of life; city, court, fields"],
  ["Song of Songs", "How does poetry celebrate desire, delight, and mutual love?", "Beloved and lover; gardens, vineyards, Jerusalem"],
  ["Wisdom", "How can wisdom and justice hold human mortality before God?", "The righteous and the wicked; Israel, Egypt, the wider world"],
  ["Sirach", "How does wisdom shape speech, friendship, family, work, and worship?", "Teacher and students; family, temple, city"],
  ["Isaiah", "How can holiness, justice, judgment, and hope be held together?", "Isaiah, kings of Judah, servant imagery; Jerusalem, Zion, the nations"],
  ["Jeremiah", "How do truth-telling and hope persist through political collapse?", "Jeremiah, Baruch, Judah's kings; Jerusalem, Egypt, Babylon"],
  ["Lamentations", "How can a devastated community grieve without denying its loss?", "Daughter Zion and the grieving city; ruined Jerusalem"],
  ["Baruch", "How can confession, wisdom, and consolation speak from exile?", "Baruch and the exiled community; Jerusalem and Babylon"],
  ["Ezekiel", "How can a shattered people imagine responsibility and restoration?", "Ezekiel, exiles, shepherd imagery; Babylon and Jerusalem"],
  ["Daniel", "What does faithful life look like under an empire that demands too much?", "Daniel and companions, foreign kings; Babylon and Persia"],
  ["Hosea", "How can wounded love become a language for covenant faithfulness?", "Hosea, Gomer, Israel; northern kingdom"],
  ["Joel", "How can a community turn a shared disaster into return and hope?", "Judah and worshipers; land, temple, Jerusalem"],
  ["Amos", "What does justice require when prosperity hides exploitation?", "Amos, Israel's leaders, worshipers; Tekoa, Bethel, Samaria"],
  ["Obadiah", "What responsibility do neighbors bear when violence destroys a people?", "Edom and Judah; Jerusalem and Mount Seir"],
  ["Jonah", "Can mercy reach people we would rather exclude?", "Jonah, sailors, Ninevites; Joppa, sea, Nineveh"],
  ["Micah", "What does faithful life require of leaders and ordinary people?", "Micah, rulers, Jerusalem and Samaria; Moresheth"],
  ["Nahum", "How does prophetic poetry answer a violent empire's fall?", "Nineveh and Assyria; Judah and the nations"],
  ["Habakkuk", "How do we wait and question when violence seems unanswered?", "Habakkuk, the Chaldeans; Judah"],
  ["Zephaniah", "What might purification and joy mean for a weary community?", "Judah, Jerusalem, surrounding nations"],
  ["Haggai", "What must a returning community rebuild first?", "Haggai, Zerubbabel, Joshua the priest; post-exilic Jerusalem"],
  ["Zechariah", "How can a rebuilding community see its future with hope?", "Zechariah, Zerubbabel, Joshua the priest; Jerusalem"],
  ["Malachi", "What does faithful worship look like when people have grown tired?", "Priests, families, worshipers; post-exilic Jerusalem"],
  ["Matthew", "Who is Jesus, and what does life under his teaching look like?", "Jesus, disciples, crowds, religious leaders; Galilee and Jerusalem"],
  ["Mark", "Who is Jesus when following him leads through misunderstanding and suffering?", "Jesus, disciples, crowds; Galilee, Caesarea Philippi, Jerusalem"],
  ["Luke", "How does Jesus bring good news to people on the edges as well as the center?", "Jesus, Mary, disciples, women, the poor; Galilee, Samaria, Jerusalem"],
  ["John", "What do Jesus' signs and conversations reveal about life, light, and love?", "Jesus, Nicodemus, Samaritan woman, Lazarus; Judea, Galilee, Jerusalem"],
  ["Acts", "How does a small community carry its message across cultures and borders?", "Peter, Paul, Stephen, Philip; Jerusalem, Antioch, Asia Minor, Rome"],
  ["Romans", "How does the gospel reshape the human story and life together?", "Paul, Jewish and Gentile believers; Rome and the churches"],
  ["1 Corinthians", "How can a divided community learn unity, love, worship, and hope?", "Paul and the Corinthian church; Corinth"],
  ["2 Corinthians", "What can strength look like when ministry is marked by weakness and reconciliation?", "Paul, Titus, the Corinthian church; Macedonia and Corinth"],
  ["Galatians", "What does freedom in Christ mean for a community under pressure?", "Paul and the Galatian churches; Asia Minor"],
  ["Ephesians", "How does life in Christ create a new people across old divisions?", "Christ, the church, Gentile believers; Asia Minor"],
  ["Philippians", "How can joy and humility endure in hardship?", "Paul, Timothy, Epaphroditus, the Philippian church; Philippi"],
  ["Colossians", "How does the fullness of Christ shape a mature daily life?", "Paul, Epaphras, the Colossian church; Colossae"],
  ["1 Thessalonians", "How can a young community grow in faith, love, and hope?", "Paul, Timothy, the Thessalonian church; Thessalonica"],
  ["2 Thessalonians", "How should a community persevere when uncertainty about the future unsettles daily life?", "Paul and the Thessalonian church; Thessalonica"],
  ["1 Timothy", "What does faithful leadership and shared life look like in a church community?", "Paul, Timothy, local leaders; Ephesus"],
  ["2 Timothy", "How do courage and faithful teaching endure across generations?", "Paul, Timothy, co-workers; prison and Ephesus"],
  ["Titus", "How do sound teaching and good works take shape in public life?", "Paul, Titus, Cretan communities; Crete"],
  ["Philemon", "How can reconciliation change a personal relationship?", "Paul, Philemon, Onesimus, Apphia; a house church"],
  ["Hebrews", "How can a weary community persevere by seeing Jesus within the whole scriptural story?", "Jesus, ancestors of faith, a pressured community; worship and pilgrimage imagery"],
  ["James", "What does a living faith look like in speech, action, wealth, and prayer?", "Teacher, communities, rich and poor; dispersed believers"],
  ["1 Peter", "How can communities live with hope and holiness when they feel like strangers?", "Peter, elders, suffering communities; Asia Minor"],
  ["2 Peter", "How can a community grow in discernment when distorted teaching creates confusion?", "Peter, teachers, believers; early Christian communities"],
  ["1 John", "How do truth, love, and confidence belong together in a community?", "Believers, children of God, opponents; a Johannine community"],
  ["2 John", "How can truth and love guide welcome and faithfulness?", "The elder, the chosen lady, her children; a local community"],
  ["3 John", "What does hospitality reveal about leadership and shared mission?", "The elder, Gaius, Diotrephes, Demetrius; a local community"],
  ["Jude", "How can a community hold fast when disruptive voices distort its shared life?", "Jude, intruders, believers; an early Christian community"],
  ["Revelation", "How can worship and endurance sustain communities under pressure?", "John, seven churches, the Lamb, the dragon; Asia Minor and heavenly visions"],
];

export const bibleBookOrientationByTitle = Object.fromEntries(
  bibleBookOrientationEntries.map(([title, bigQuestion, keyPeopleAndPlaces]) => [title, { bigQuestion, keyPeopleAndPlaces }])
) as Record<string, BibleBookOrientation>;

export const bibleCollectionReadingGuides: Record<string, { storyPlacement: string; shape: string; notice: string; firstVisit: string; care?: string }> = {
  torah: {
    storyPlacement: "These five books open the biblical story and lead from origins and ancestors to liberation, covenant, and the edge of the promised land.",
    shape: "Read the story in scenes: a beginning, a crisis, a response, and the next step in the journey.",
    notice: "Watch for covenant, blessing, freedom, memory, and the repeated work of learning to trust.",
    firstVisit: "Read one complete scene or a short chapter, then pause before moving to the next section.",
    care: "Law and ritual material grows clearer when read beside narrative and trusted notes rather than in isolation.",
  },
  history: {
    storyPlacement: "These books continue Israel's story through settlement, monarchy, exile, return, and the Maccabean period.",
    shape: "Follow the turning points: leadership, conflict, loss, return, and renewed communal life.",
    notice: "Notice how private choices, public leadership, worship, and the life of the people affect one another.",
    firstVisit: "Start with the opening chapter, then continue through one complete episode before pausing.",
    care: "Some stories portray violence, failure, and political conflict without presenting every action as a model to imitate.",
  },
  "wisdom-poetry": {
    storyPlacement: "These writings sit alongside Israel's story, giving language for prayer, love, grief, work, suffering, and wise living.",
    shape: "Read in smaller units: a poem, psalm, speech, proverb cluster, or short reflection.",
    notice: "Pay attention to repeated images, contrasts, questions, and the emotional movement of a passage.",
    firstVisit: "Choose a short unit and reread it slowly before moving on.",
    care: "Poetry and wisdom invite reflection; they should not always be read as literal narrative or universal promises.",
  },
  "major-prophets": {
    storyPlacement: "These books speak into the crises before, during, and after exile, when communities faced injustice, loss, and the work of hope.",
    shape: "Look for shifts between warning, lament, symbolic vision, judgment, consolation, and renewal.",
    notice: "Notice who is being addressed, what crisis is in view, and how images of judgment and hope sit together.",
    firstVisit: "Read one short oracle or vision at a time, then use the book's headings or notes for context.",
    care: "Prophetic language is often poetic and image-rich; context matters before drawing broad conclusions.",
  },
  "minor-prophets": {
    storyPlacement: "These twelve shorter books address different moments in Israel and Judah's long prophetic history.",
    shape: "Treat each book as its own voice, with a distinct crisis, audience, and pattern of warning or hope.",
    notice: "Look for the concrete situation behind the poetry: worship, injustice, invasion, return, or community rebuilding.",
    firstVisit: "Many can be read in one or two sittings; pause to identify the speaker, audience, and central image.",
    care: "“Minor” describes length, not importance; short prophetic books can be intense and compressed.",
  },
  "gospels-acts": {
    storyPlacement: "The Gospels tell the story of Jesus; Acts follows the earliest Christian communities as the story moves outward from Jerusalem.",
    shape: "Read scene by scene, watching teaching, encounters, travel, conflict, death, resurrection, and mission unfold.",
    notice: "Watch for who comes near to Jesus, what questions are asked, and how each writer shapes the story.",
    firstVisit: "Read one scene or one chapter, then name one question, action, or image that stayed with you.",
  },
  "pauline-letters": {
    storyPlacement: "These letters bring the gospel into the concrete life of early Christian communities in the Roman world.",
    shape: "Most move from greeting and thanksgiving into a central concern, then toward practical encouragement and closing greetings.",
    notice: "Ask who is being addressed, what problem or hope is in view, and how the argument develops paragraph by paragraph.",
    firstVisit: "Read the opening chapter slowly, then continue one paragraph at a time rather than treating the letter as a list of quotations.",
    care: "Letters address particular communities; context helps prevent isolated verses from carrying more than the passage intends.",
  },
  "general-letters": {
    storyPlacement: "These writings encourage early Christian communities toward perseverance, wisdom, love, discernment, and faithful shared life.",
    shape: "Follow the repeated exhortations and images rather than expecting a single continuous storyline.",
    notice: "Notice how each writer links belief, practice, community care, endurance, and hope.",
    firstVisit: "Read a short section in one sitting, then return to the opening and closing lines for the main concern.",
  },
  revelation: {
    storyPlacement: "Revelation closes the New Testament with a vision addressed to real communities facing pressure in the Roman world.",
    shape: "Move slowly through its letters, throne-room scenes, visions, conflicts, and final renewal imagery.",
    notice: "Watch for worship, symbolic numbers, Old Testament echoes, and the repeated call to endurance.",
    firstVisit: "Begin with the opening vision and the messages to the seven churches before moving into later visions.",
    care: "Read Revelation as symbolic, pastoral vision in conversation with the rest of Scripture—not as a simple timetable of future events.",
  },
};

export const biblePrayerMethods = [
  "Repeat one verse slowly.",
  "Turn a line into thanksgiving.",
  "Ask forgiveness where the Word convicts.",
  "Pray for someone mentioned in your heart.",
  "Imagine yourself in a Gospel scene.",
  "End with the Our Father.",
];

export const studyVsPrayerCards = [
  {
    title: "Bible Study",
    points: [
      "asks what the text means",
      "uses context, history, genre, and Church teaching",
      "benefits from notes and trusted guides",
      "helps the mind understand",
    ],
  },
  {
    title: "Bible Prayer",
    points: [
      "listens for God's invitation",
      "responds with the heart",
      "leads to repentance, trust, and love",
      "helps the soul encounter Christ",
    ],
  },
];

export const commonBibleMistakes = [
  "Reading without prayer",
  "Ignoring context",
  "Treating Scripture like a fortune cookie",
  "Using verses to avoid Church teaching",
  "Reading only favorite passages",
  "Skipping the Old Testament entirely",
  "Becoming discouraged by difficult passages",
  "Ignoring the Mass readings",
  "Confusing personal interpretation with Church teaching",
  "Reading without charity",
];

export const difficultPassageAdvice = [
  "Do not panic.",
  "Ask what kind of writing this is.",
  "Read surrounding context.",
  "Ask how the Church understands it.",
  "Look for Christ and salvation history.",
  "Ask a priest, catechist, or trusted Catholic teacher.",
  "Avoid internet-only conclusions.",
];

export const familyBibleIdeas = [
  "Read the Sunday Gospel before Mass.",
  "Ask children what word they heard.",
  "Use a children's Bible for young children.",
  "Let children draw the Gospel scene.",
  "Pick one family verse for the week.",
  "Pray one Psalm before bed.",
  "Connect Scripture to saints and seasons.",
  "Keep a Bible in the family prayer corner.",
];

export const explorerBeginnerPath = [
  "Read the Gospel of Luke.",
  "Attend Mass and notice Scripture.",
  "Read the Sunday readings before Mass.",
  "Learn about Scripture and Tradition.",
  "Ask questions in OCIA.",
  "Use the Catechism for guidance.",
];

export const relatedBibleTools: BibleRelatedTool[] = [
  {
    title: "Mass Readings Reflections",
    description: "Pray with the Church's daily and Sunday readings through original Daily Oratory reflections.",
    href: "/reflections/mass-readings",
    cta: "Read Reflections",
  },
  {
    title: "Scripture Prayer",
    description: "Learn a Daily Oratory way of praying with the Word of God and Lectio Divina.",
    href: "/library/scripture-prayer",
    cta: "Pray with Scripture",
  },
  {
    title: "The Holy Mass",
    description: "See how Catholics hear Scripture and meet Christ in the liturgy.",
    href: "/mass",
    cta: "Understand the Mass",
  },
  {
    title: "Homilies",
    description: "Listen to Catholic preaching that helps Scripture become a living word.",
    href: "/homilies",
    cta: "Open Homilies",
  },
  {
    title: "Liturgy of the Hours",
    description: "Pray the Psalms and Scripture with the whole Church throughout the day.",
    href: "/liturgy-of-the-hours",
    cta: "Pray the Hours",
  },
  {
    title: "Catechism",
    description: "Read Scripture with the doctrinal guidance of the Church.",
    href: "/catechism",
    cta: "Open the Catechism",
  },
  {
    title: "Sacred Tradition",
    description: "Understand how Catholics receive Scripture within the living faith of the Church.",
    href: "/tradition",
    cta: "Learn Tradition",
  },
  {
    title: "Formation",
    description: "Let Scripture shape daily discipleship, virtue, and growth in holiness.",
    href: "/formation",
    cta: "Begin Formation",
  },
  {
    title: "Body, Soul, and Spirit",
    description: "See how grace, sin, Confession, and the interior temple belong to Catholic Scripture and daily conversion.",
    href: "/body-soul-spirit",
    cta: "Enter the Interior Temple",
  },
  {
    title: "Explore the Catholic Faith",
    description: "A welcoming place for anyone curious about Catholic belief and practice.",
    href: "/explore",
    cta: "Start Exploring",
  },
  {
    title: "OCIA",
    description: "A practical next step for adults exploring the Catholic faith with a parish.",
    href: "/ocia",
    cta: "Learn About OCIA",
  },
  {
    title: "Family and Domestic Church",
    description: "Bring Scripture into family prayer, conversation, and liturgical life.",
    href: "/family",
    cta: "Open Family Tools",
  },
  {
    title: "Media Library",
    description: "Find Catholic videos, slides, and media that support Bible learning and prayer.",
    href: "/media",
    cta: "Browse Media",
  },
];

export const translationFinderRecommendations: Record<BibleUseCase, BibleFinderRecommendation> = {
  [BibleUseCase.Beginner]: {
    need: BibleUseCase.Beginner,
    recommendation: "Start with a readable Catholic edition such as NABRE, and stay close to the Gospels and the daily readings.",
    explanation: "This keeps your first steps simple, recognizably Catholic, and easy to connect to Mass and daily prayer.",
    howToStart: "Begin with Luke or John, then read the Gospel of the day from the USCCB readings page.",
    relatedLinks: [
      { label: "Where Should I Start?", href: "#where-to-start" },
      { label: "Scripture Prayer", href: "/library/scripture-prayer" },
    ],
    officialLinks: [usccbDailyReadings, usccbTranslations],
  },
  [BibleUseCase.MassReadings]: {
    need: BibleUseCase.MassReadings,
    recommendation: "Start with USCCB daily readings and a Catholic Bible such as NABRE.",
    explanation: "That pairing makes it easy to follow the Church's daily rhythm and hear Scripture with the liturgy.",
    howToStart: "Read today's Gospel first, then use Daily Oratory reflections if you want prayerful help applying it.",
    relatedLinks: [
      { label: "Mass Readings Reflections", href: "/reflections/mass-readings" },
      { label: "The Holy Mass", href: "/mass" },
    ],
    officialLinks: [usccbDailyReadings, usccbTranslations],
  },
  [BibleUseCase.Study]: {
    need: BibleUseCase.Study,
    recommendation: "Use an approved Catholic study edition such as RSV-CE, RSV-2CE, NABRE, or NRSV-CE, and compare when needed.",
    explanation: "Study becomes stronger when you use an edition suited for careful reading, Catholic context, and cross-checking difficult passages.",
    howToStart: "Read a Gospel chapter, note the context, then compare it with Catechism references and trusted Catholic resources.",
    relatedLinks: [
      { label: "Catechism", href: "/catechism" },
      { label: "Sacred Tradition", href: "/tradition" },
    ],
    officialLinks: [usccbTranslations],
  },
  [BibleUseCase.TraditionalLanguage]: {
    need: BibleUseCase.TraditionalLanguage,
    recommendation: "Try a historic or more formal Catholic edition such as Douay-Rheims or RSV-2CE.",
    explanation: "These readers often want a solemn tone, historic cadence, and a more traditional literary feel.",
    howToStart: "Begin with the Psalms or Gospel of John and read slowly enough to let the language become prayer rather than a hurdle.",
    relatedLinks: [
      { label: "Lectio Divina", href: "#lectio-divina" },
      { label: "Bible and Prayer", href: "#bible-and-prayer" },
    ],
    officialLinks: [usccbTranslations],
  },
  [BibleUseCase.Academic]: {
    need: BibleUseCase.Academic,
    recommendation: "Use an approved Catholic edition often recognized in study settings, such as NRSV-CE, while keeping Catholic interpretation close at hand.",
    explanation: "This helps with classroom, research, or comparative reading while keeping you grounded in the Church's faith.",
    howToStart: "Study one passage in context, then read it alongside the Catechism or Dei Verbum instead of relying on private interpretation alone.",
    relatedLinks: [
      { label: "Vatican Dei Verbum", href: "https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19651118_dei-verbum_en.html", external: true, official: true },
      { label: "Catechism", href: "/catechism" },
    ],
    officialLinks: [usccbTranslations],
  },
  [BibleUseCase.Family]: {
    need: BibleUseCase.Family,
    recommendation: "Choose a readable Catholic Bible for shared reading and pair it with the Sunday Gospel or daily Mass readings.",
    explanation: "Families usually need clarity, short passages, and a rhythm that can actually be sustained with children and busy schedules.",
    howToStart: "Read the Sunday Gospel aloud, ask each person for one word they noticed, and end with a simple family prayer.",
    relatedLinks: [
      { label: "Reading the Bible as a Family", href: "#bible-for-families" },
      { label: "Family and Domestic Church", href: "/family" },
    ],
    officialLinks: [usccbDailyReadings, usccbTranslations],
  },
  [BibleUseCase.Prayer]: {
    need: BibleUseCase.Prayer,
    recommendation: "Choose a readable Catholic translation and begin with the Gospels, Psalms, or daily Mass readings.",
    explanation: "Prayerful reading works best when the text is clear enough to receive slowly and return to often.",
    howToStart: "Use one Gospel scene, one psalm, or today's readings, then carry one word into the rest of the day.",
    relatedLinks: [
      { label: "How to Receive a Word", href: "#gather-a-word" },
      { label: "Scripture Prayer", href: "/library/scripture-prayer" },
    ],
    officialLinks: [usccbDailyReadings, usccbTranslations],
  },
  [BibleUseCase.Ocia]: {
    need: BibleUseCase.Ocia,
    recommendation: "Start with a clear Catholic edition, stay near Luke, John, Acts, and the Sunday readings, and use the Catechism for guidance.",
    explanation: "This gives explorers a Christ-centered path that remains close to the Church's worship and teaching.",
    howToStart: "Read Luke, attend Mass, write down your real questions, and bring them into OCIA conversations.",
    relatedLinks: [
      { label: "OCIA", href: "/ocia" },
      { label: "Explore the Catholic Faith", href: "/explore" },
    ],
    officialLinks: [usccbDailyReadings, usccbTranslations],
  },
  [BibleUseCase.Audio]: {
    need: BibleUseCase.Audio,
    recommendation: "Use the USCCB daily readings audio together with a Catholic Bible you can keep nearby for rereading and prayer.",
    explanation: "Hearing the Word can be especially helpful for busy schedules, commutes, and people who receive Scripture well by listening.",
    howToStart: "Listen to today's Gospel, then reread one paragraph slowly and ask what the Lord is inviting you to live.",
    relatedLinks: [
      { label: "Daily Mass Readings Method", href: "#daily-readings-method" },
      { label: "Mass Readings Reflections", href: "/reflections/mass-readings" },
    ],
    officialLinks: [
      { label: "USCCB Daily Readings Audio", href: "https://bible.usccb.org/podcasts/audio", external: true, official: true },
      usccbTranslations,
    ],
  },
};
