import type { FamilyLink, FamilyStage } from "@/types/family";

export const familyStages: { value: FamilyStage; label: string }[] = [
  { value: "single-person-home", label: "Single person building a prayerful home" },
  { value: "married-couple", label: "Married couple" },
  { value: "young-children", label: "Young children" },
  { value: "teens", label: "Teens" },
  { value: "blended-family", label: "Blended family" },
  { value: "single-parent", label: "Single parent household" },
  { value: "grandparents", label: "Grandparents" },
  { value: "empty-nest", label: "Empty nest" },
  { value: "caregiving", label: "Caregiving household" },
  { value: "homebound", label: "Homebound family member" },
  { value: "mixed-faith", label: "Mixed-faith household" },
  { value: "returning", label: "Returning to faith" },
  { value: "exploring", label: "Exploring Catholicism" },
];

export const familyTimeOptions = [
  "2 minutes daily",
  "5 minutes daily",
  "10 minutes daily",
  "15 minutes daily",
  "30 minutes daily",
  "Flexible weekly rhythm",
] as const;

export const familyFocusOptions = [
  "prayer",
  "Sunday Mass",
  "Scripture",
  "forgiveness",
  "virtue",
  "family meals",
  "technology boundaries",
  "service",
  "liturgical seasons",
  "confession",
  "family peace",
  "exploring faith",
] as const;

export const familyMissionCards = [
  { title: "Pray together", description: "The family learns to turn toward God in ordinary moments." },
  { title: "Love one another", description: "The home becomes a place where charity is practiced daily." },
  { title: "Hand on the faith", description: "Parents and caregivers teach through words, witness, and habit." },
  { title: "Forgive often", description: "Mercy keeps the family from becoming trapped in resentment." },
  { title: "Serve others", description: "The domestic church opens outward in hospitality and works of mercy." },
  { title: "Celebrate the Church year", description: "The liturgical seasons help the home pray with the Church." },
  { title: "Protect human dignity", description: "Each person is received as a gift, not a project or possession." },
  {
    title: "Grow in the Fruits of the Holy Spirit",
    description: "Charity, joy, peace, patience, kindness, goodness, generosity, gentleness, faithfulness, modesty, self-control, and chastity can grow at home.",
  },
] as const;

export const familyPrayerStarterRhythms = [
  {
    title: "2-minute family prayer",
    steps: ["Sign of the Cross", "One intention", "Our Father", "Short blessing"],
  },
  {
    title: "5-minute family prayer",
    steps: ["Sign of the Cross", "Thank God for one gift", "Ask forgiveness for one failure", "Pray one decade or one simple prayer", "End with Glory Be"],
  },
  {
    title: "10-minute family prayer",
    steps: ["Read a short Gospel passage", "Ask: What word stood out?", "Pray for family needs", "Ask for one Fruit of the Holy Spirit", "End with blessing"],
  },
  {
    title: "Bedtime rhythm",
    steps: ["Thank You", "I'm sorry", "Please help", "Bless us tonight"],
  },
] as const;

export const prayerCornerIdeas = [
  "Bible",
  "Crucifix",
  "Candle, used safely",
  "Rosary",
  "Saint card or icon",
  "Family prayer intentions",
  "Liturgical color cloth",
  "Advent wreath or Lent cross",
  "Small bowl for prayer requests",
  "Picture of a patron saint",
] as const;

export const familyBlessings = [
  "Blessing before meals",
  "Blessing children before bed",
  "Blessing the home",
  "Blessing before travel",
  "Prayer during sickness",
  "Holy water as a reminder of Baptism",
] as const;

export const familySacramentCards = [
  { title: "Baptism", description: "Identity in Christ and entrance into the life of grace.", href: "/sacraments/baptism" },
  { title: "Eucharist", description: "The heart of family worship and communion with Christ.", href: "/sacraments/eucharist" },
  { title: "Confession", description: "Mercy, healing, and new beginnings after failure.", href: "/confession" },
  { title: "Confirmation", description: "Courage, strength, and mission in the Holy Spirit.", href: "/sacraments/confirmation" },
  { title: "Matrimony", description: "Covenant love that serves life, fidelity, and sanctification.", href: "/sacraments/matrimony" },
  { title: "Anointing of the Sick", description: "Christ's strength for suffering, illness, and frailty.", href: "/sacraments/anointing" },
  { title: "Holy Orders", description: "Priests serve families through preaching, sacraments, and pastoral care.", href: "/sacraments/holy-orders" },
] as const;

export const sundayIdeas = [
  "Attend Mass",
  "Share a family meal",
  "Call relatives",
  "Visit someone lonely",
  "Avoid unnecessary busyness when possible",
  "Read the Sunday Gospel",
  "Practice hospitality",
  "Take a walk or rest",
  "Prepare for the week with prayer",
] as const;

export const familyFruits = [
  { title: "Charity", description: "Choose love when it costs something." },
  { title: "Joy", description: "Celebrate small signs of grace." },
  { title: "Peace", description: "Lower the volume before conflict grows." },
  { title: "Patience", description: "Slow down with each other." },
  { title: "Kindness", description: "Notice needs without being asked." },
  { title: "Goodness", description: "Choose what is right when no one sees." },
  { title: "Generosity", description: "Share time, attention, and mercy." },
  { title: "Gentleness", description: "Speak truth without cruelty." },
  { title: "Faithfulness", description: "Keep praying even when the home feels chaotic." },
  { title: "Modesty", description: "Live with humility and respect." },
  { title: "Self-control", description: "Pause before reacting." },
  { title: "Chastity", description: "Honor the dignity of every person." },
] as const;

export const familyConversationStarters = [
  "Where did you notice God today?",
  "Who needs our prayers?",
  "What was hard today?",
  "What are we thankful for?",
  "What virtue do we need this week?",
  "What did we hear at Mass?",
  "What does forgiveness look like right now?",
  "How can we serve someone this week?",
  "What saint should we learn about?",
  "What should we bring to Jesus?",
] as const;

export const parentsFirstTeachersPoints = [
  "Teach with example first",
  "Keep explanations simple",
  "Let children ask questions",
  "Admit when you do not know",
  "Ask forgiveness when you fail",
  "Make Mass normal",
  "Pray briefly but consistently",
  "Use saints and seasons",
  "Avoid using God as a threat",
  "Show that faith is love, not only rules",
] as const;

export const difficultFamilySeasons = [
  { title: "Grief", encouragement: "Christ remains close to homes that feel quiet, changed, or wounded by loss.", prayerStep: "Pray one Hail Mary for the departed or for the grieving.", practicalStep: "Light a candle safely or remember a loved one by name.", help: "Seek parish support, grief care, or trusted companionship if sorrow feels crushing." },
  { title: "Illness", encouragement: "Illness can slow a household, but it can also deepen tenderness and intercession.", prayerStep: "Pray briefly at the bedside or before a medical visit.", practicalStep: "Simplify expectations and ask others for concrete help.", help: "Contact a parish for sacramental care or support for the sick." },
  { title: "Financial stress", encouragement: "Pressure around money can strain peace, but families are not abandoned by God.", prayerStep: "Entrust one fear to God together before discussing decisions.", practicalStep: "Choose one next responsible step instead of carrying everything at once.", help: "Seek budgeting help, parish support, or local aid when needed." },
  { title: "Conflict", encouragement: "A home in conflict still belongs to the mercy of Christ.", prayerStep: "Pause and pray before continuing a heated conversation.", practicalStep: "Set a calmer time to talk instead of forcing resolution while angry.", help: "Bring persistent conflict to pastoral care or counseling." },
  { title: "Divorce or separation", encouragement: "The Church wants to walk with families living through painful change.", prayerStep: "Ask Jesus for wisdom, honesty, and peace for each next step.", practicalStep: "Keep prayer simple and keep children away from adult conflicts when possible.", help: "Speak with a priest, counselor, or trusted professional for pastoral and personal support." },
  { title: "Addiction", encouragement: "Addiction wounds trust, but grace still calls the family toward truth and healing.", prayerStep: "Pray for truth, repentance, and courage to seek help.", practicalStep: "Set one honest boundary and seek support outside the home.", help: "Reach out to qualified recovery and counseling support immediately." },
  { title: "Children away from faith", encouragement: "Do not stop praying, loving, and speaking with hope.", prayerStep: "Offer one decade of the Rosary or one simple prayer for them.", practicalStep: "Keep a warm relationship open without trying to force everything at once.", help: "Ask a priest or trusted mentor how to accompany patiently." },
  { title: "Loneliness", encouragement: "Loneliness can exist even in busy homes, and Christ meets it with compassion.", prayerStep: "Tell Jesus honestly where the ache is.", practicalStep: "Call one person or invite one small human connection this week.", help: "Seek community, parish support, or counseling when isolation deepens." },
  { title: "Blended family challenges", encouragement: "Blended families often need extra patience, steadiness, and mercy.", prayerStep: "Ask the Holy Spirit for gentleness before hard transitions.", practicalStep: "Keep expectations realistic and routines simple.", help: "Seek pastoral and family support if patterns feel overwhelming." },
  { title: "Caregiving exhaustion", encouragement: "Caregiving love is holy, and it also needs rest, support, and truthfulness about limits.", prayerStep: "Offer one tired moment to Christ without pretending strength you do not have.", practicalStep: "Ask for one practical form of help this week.", help: "Seek parish support, respite help, or professional guidance when burned out." },
  { title: "Mixed-faith households", encouragement: "Charity, respect, and honest witness matter deeply here.", prayerStep: "Pray for unity of heart and peace in conversation.", practicalStep: "Choose one shared or respectful practice that does not coerce anyone.", help: "Ask a priest or parish mentor for help navigating faith differences with charity." },
  { title: "Domestic violence or safety concerns", encouragement: "No one should stay unsafe because of religious pressure or family appearance.", prayerStep: "Pray for protection and the courage to seek help immediately.", practicalStep: "Make a safety plan and reach out to trusted authorities or professionals.", help: "Call emergency services, a domestic violence hotline, trusted authorities, or qualified professionals right away." },
] as const;

export const familyTechnologyIdeas = [
  "No phones at meals",
  "Charging station outside bedrooms",
  "Screen-free prayer time",
  "Shared media discernment",
  "Parent-child conversation about online life",
  "Sunday digital rest",
  "Ask: does this help charity, truth, and peace?",
] as const;

export const familyWorksOfMercy = [
  "Pray for the sick",
  "Bring food to someone",
  "Visit lonely relatives",
  "Donate clothing",
  "Write a card to someone grieving",
  "Pray for the dead",
  "Help a neighbor",
  "Support parish outreach",
  "Forgive someone at home",
  "Share a meal",
] as const;

export const familyLiturgicalLivingCards = [
  { title: "Advent", description: "Prepare with hope." },
  { title: "Christmas", description: "Celebrate the Incarnation." },
  { title: "Lent", description: "Repent and simplify." },
  { title: "Holy Week", description: "Walk with Jesus." },
  { title: "Easter", description: "Rejoice and renew." },
  { title: "Ordinary Time", description: "Grow steadily." },
  { title: "Saints' days", description: "Learn holy lives." },
  { title: "Holy days", description: "Worship with the Church." },
] as const;

export const familyScriptureIdeas = [
  "Read the Sunday Gospel before Mass",
  "Ask each person what word stood out",
  "Choose one verse for the week",
  "Pray one Psalm",
  "Use the daily Mass readings",
  "Let younger children draw the Gospel",
  "Ask how to live the Word this week",
] as const;

export const saintsForFamilies = [
  { title: "Holy Family: Jesus, Mary, and Joseph", reason: "They show the hidden holiness of family life, work, obedience, and trust.", virtue: "Trust and faithful love", prayer: "Holy Family, keep our home close to Jesus.", href: "/saints" },
  { title: "Saint Joseph", reason: "He models quiet strength, protection, work, and fatherly care.", virtue: "Faithful responsibility", prayer: "Saint Joseph, guard our family and teach us steady love.", href: "/saints/saint-joseph" },
  { title: "Blessed Virgin Mary", reason: "She teaches tenderness, faith, surrender, and maternal intercession.", virtue: "Faith and humility", prayer: "Mary, Mother of God, pray for our family.", href: "/saints/mary-mother-of-god" },
  { title: "Saint Monica", reason: "She is a companion for parents praying through tears and waiting with hope.", virtue: "Persevering prayer", prayer: "Saint Monica, pray for our loved ones and our faithfulness.", href: "/saints" },
  { title: "Saints Louis and Zelie Martin", reason: "They witness to married love, parenting, and holiness in ordinary domestic life.", virtue: "Faithful family love", prayer: "Saints Louis and Zelie, pray for our home.", href: "/saints" },
  { title: "Saint Gianna Beretta Molla", reason: "She shows tenderness, courage, and self-giving love in family life.", virtue: "Charity", prayer: "Saint Gianna, pray for families and parents.", href: "/saints" },
  { title: "Saint Therese of Lisieux", reason: "She teaches little acts of love done with great charity.", virtue: "Hidden love", prayer: "Saint Therese, help us love in small daily ways.", href: "/saints" },
  { title: "Saint John Paul II", reason: "He defended the dignity of marriage, family life, and the gift of the human person.", virtue: "Hope and truth", prayer: "Saint John Paul II, pray for families and the culture of life.", href: "/saints" },
  { title: "Saint Anne and Saint Joachim", reason: "They remind families of the wisdom and witness of grandparents.", virtue: "Steady faith", prayer: "Saint Anne and Saint Joachim, pray for grandparents and families.", href: "/saints" },
  { title: "Saint Rita", reason: "She is a companion in family suffering, difficult marriages, and painful seasons.", virtue: "Perseverance", prayer: "Saint Rita, pray for wounded families.", href: "/saints" },
  { title: "Saint Elizabeth Ann Seton", reason: "She helps families navigating education, grief, and practical responsibility.", virtue: "Generosity", prayer: "Saint Elizabeth Ann Seton, pray for parents and caregivers.", href: "/saints" },
  { title: "Saint Thomas More", reason: "He models fidelity to conscience, truth, and family duty.", virtue: "Integrity", prayer: "Saint Thomas More, pray for truthful love in our home.", href: "/saints" },
  { title: "Saint Frances of Rome", reason: "She shows how prayer, hospitality, and family duty can belong together.", virtue: "Service", prayer: "Saint Frances of Rome, pray for our daily duties.", href: "/saints" },
] as const;

export const relatedFamilyTools = [
  { title: "Pray", description: "Start with simple Catholic prayer resources for everyday life.", href: "/pray", cta: "Begin in Prayer" },
  { title: "Angels and the Invisible World", description: "Teach children and families about guardian angels, archangels, and heavenly worship without superstition.", href: "/angels", cta: "Learn About Angels" },
  { title: "Family Rule of Life", description: "Build a realistic rhythm of prayer, virtue, and family peace.", href: "/rule-of-life", cta: "Open Rule of Life" },
  { title: "Daily Examen", description: "End the day as a family with gratitude, forgiveness, and trust in God.", href: "/daily-examen", cta: "Pray the Examen" },
  { title: "Virtue Tracker", description: "Practice one family virtue with clarity and consistency.", href: "/virtue-tracker", cta: "Practice a Virtue" },
  { title: "The Holy Mass", description: "Let Sunday worship remain the heart of the home.", href: "/mass", cta: "Understand the Mass" },
  { title: "Sacraments", description: "See how family life is nourished by grace and parish worship.", href: "/sacraments", cta: "Explore Sacraments" },
  { title: "Matrimony", description: "Read about covenant love and sacramental marriage.", href: "/sacraments/matrimony", cta: "Learn About Matrimony" },
  { title: "Confession Guide", description: "Keep mercy and new beginnings close at hand.", href: "/confession", cta: "Prepare for Confession" },
  { title: "Scripture Prayer", description: "Pray with the Word of God as a couple or household.", href: "/library/scripture-prayer", cta: "Pray with Scripture" },
  { title: "Liturgical Seasons", description: "Bring Advent, Lent, Easter, and the Church year into home life.", href: "/liturgical-living/seasons", cta: "Explore Seasons" },
  { title: "Saints", description: "Find holy companions for parenting, marriage, grief, and daily faithfulness.", href: "/saints", cta: "Meet the Saints" },
  { title: "Saint Companion Finder", description: "Look for a saint friend for your family's present season.", href: "/saints/finder", cta: "Find a Saint" },
  { title: "Ask for Prayer", description: "Invite others to pray for your family without sharing more than you want.", href: "/prayer-intentions/submit", cta: "Ask for Prayer" },
  { title: "Prayer Intentions", description: "Pray with the wider community and carry others in intercession.", href: "/prayer-intentions", cta: "Open Prayer Intentions" },
  { title: "Formation", description: "Grow in doctrine, prayer, and practical discipleship together.", href: "/formation", cta: "Open Formation" },
  { title: "OCIA / Becoming Catholic", description: "A gentle starting point for families exploring the Catholic faith.", href: "/ocia", cta: "Explore OCIA" },
] as const;

export const familyStudyLinks: FamilyLink[] = [
  { label: "Start with Scripture", href: "/library/scripture-prayer" },
  { label: "Understand the Mass", href: "/mass" },
  { label: "Learn the Sacraments", href: "/sacraments" },
  { label: "Read the Church Fathers", href: "/church-fathers" },
  { label: "Use the Catechism", href: "/catechism" },
];
