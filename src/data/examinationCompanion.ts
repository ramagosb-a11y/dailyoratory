import { openingPrayer } from "@/data/guidedExamination";
import type { CompanionGuideId } from "@/types/examinationCompanion";

export type CompanionExaminationPrompt = {
  id: string;
  text: string;
  pastoralReflection: string;
  graveMatterNote?: string;
};

export type CompanionExaminationSection = {
  id: string;
  title: string;
  scripture?: string;
  reference?: string;
  reflection: string;
  prompts: CompanionExaminationPrompt[];
};

type CompanionQuestionInput =
  | string
  | {
      text: string;
      pastoralReflection: string;
      graveMatterNote?: string;
    };

export type CompanionExaminationGuide = {
  id: CompanionGuideId;
  title: string;
  shortTitle: string;
  attribution: string;
  description: string;
  sourceUrl: string;
  sections: CompanionExaminationSection[];
};

function section(
  guideId: CompanionGuideId,
  id: string,
  title: string,
  reflection: string,
  questions: CompanionQuestionInput[],
  details?: { scripture?: string; reference?: string },
): CompanionExaminationSection {
  return {
    id: `${guideId}-${id}`,
    title,
    scripture: details?.scripture,
    reference: details?.reference,
    reflection,
    prompts: questions.map((question, index) => ({
      id: `${guideId}-${id}-${index + 1}`,
      text: typeof question === "string" ? question : question.text,
      pastoralReflection:
        typeof question === "string"
          ? `Bring this honestly to prayer. ${reflection} Consider its frequency, circumstances, effects, and the concrete change God may be asking of you.`
          : question.pastoralReflection,
      graveMatterNote: typeof question === "string" ? undefined : question.graveMatterNote,
    })),
  };
}

export { openingPrayer };

export const companionExaminationGuides: CompanionExaminationGuide[] = [
  {
    id: "ten-commandments",
    title: "Ten Commandments",
    shortTitle: "Ten Commandments",
    attribution: "USCCB examination based on the Ten Commandments",
    description: "Review your love of God and neighbor through the commandments and the duties they reveal.",
    sourceUrl: "https://www.usccb.org/resources/examination-conscience",
    sections: [
      section("ten-commandments", "first", "First Commandment", "Give God first place through faith, hope, worship, prayer, and trust.", [
        {
          text: "Have I denied or doubted God’s existence, his loving providence, or the truths revealed through the Catholic Church?",
          graveMatterNote: "Heresy, apostasy, or an obstinate rejection of Catholic dogma can involve grave matter. A sincere struggle or question is not the same as willful rejection.",
          pastoralReflection: "Were my doubts sincere struggles brought to prayer and honest inquiry, or did I knowingly and willfully reject the faith?",
        },
        "Have I placed money, career, ambition, pleasure, technology, popularity, or power before God?",
        "Have I engaged in superstitious practices, consulted horoscopes, fortune tellers, tarot cards, mediums, witchcraft, or the occult?",
        "Have I neglected daily prayer, Scripture reading, or gratitude to God for his blessings?",
        "Have I despaired of God’s mercy—or presumed upon his forgiveness by deliberately sinning while expecting easy mercy?",
        {
          text: "Have I received Holy Communion while conscious of unconfessed mortal sin?",
          graveMatterNote: "The Church teaches that a person conscious of grave sin should receive sacramental absolution before Holy Communion, except in the limited circumstances described in canon law and the Catechism.",
          pastoralReflection: "Consider what you knew at the time and whether you freely chose to receive. Bring uncertainty directly to the priest.",
        },
      ], { scripture: "“I am the LORD your God: you shall not have strange gods before me.”", reference: "Exodus 20:2–5 · CCC 2084–2141" }),
      section("ten-commandments", "second", "Second Commandment", "Honor God’s name and all that is sacred with truth and reverence.", [
        "Have I used the holy name of God, Jesus Christ, Mary, or the saints casually in anger, surprise, jest, or vulgarity?",
        "Have I cursed anyone or called down evil upon another person?",
        "Have I sworn false oaths, committed perjury, or broken solemn promises made to God or before the altar?",
        "Have I spoken with disrespect or contempt about holy things, the Church, the sacraments, or consecrated persons?",
      ], { scripture: "“You shall not take the name of the LORD your God in vain.”", reference: "Exodus 20:7 · CCC 2142–2167" }),
      section("ten-commandments", "third", "Third Commandment", "Keep the Lord’s Day through worship, rest, family life, and works of mercy.", [
        {
          text: "Have I missed Holy Mass on Sundays or holy days of obligation without a serious, excusing reason such as illness or urgent care for another?",
          graveMatterNote: "Deliberately missing the Sunday or holy-day Mass obligation without a serious reason is grave matter.",
          pastoralReflection: "Distinguish a free choice from illness, inability, lack of access, caregiving, or another serious reason. Ask a priest when uncertain.",
        },
        "Did I arrive late to Mass or leave early through carelessness or lack of reverence?",
        "Have I engaged in unnecessary work on Sunday that hindered worship, family life, works of mercy, or proper rest?",
        "Have I neglected the required days of fasting and abstinence, including Ash Wednesday and Good Friday, without an excusing reason?",
      ], { scripture: "“Remember to keep holy the LORD’s Day.”", reference: "Exodus 20:8–11 · CCC 2168–2195" }),
      section("ten-commandments", "fourth", "Fourth Commandment", "Honor family bonds and legitimate authority while fulfilling the duties of your state in life.", [
        "Have I shown disrespect, contempt, stubborn disobedience, or verbal cruelty toward my parents or guardians?",
        "Have I neglected the material, emotional, or spiritual needs of elderly, sick, or lonely parents or family members?",
        "As a parent, have I neglected my children’s Christian education, physical care, or spiritual formation—or given them a harmful example?",
        "Have I failed to respect legitimate authority and just laws, or neglected civic duties and the common good?",
      ], { scripture: "“Honor your father and your mother.”", reference: "Exodus 20:12 · CCC 2196–2257" }),
      section("ten-commandments", "fifth", "Fifth Commandment", "Protect human life, bodily integrity, peace, and the dignity of every person.", [
        {
          text: "Have I procured, participated in, encouraged, or financed an abortion—or supported assisted suicide or euthanasia?",
          graveMatterNote: "Direct abortion, euthanasia, and deliberate cooperation in them involve grave matter. Individual culpability can depend on knowledge, freedom, pressure, and circumstances.",
          pastoralReflection: "Bring this to the priest without fear. God’s mercy is greater than every sin, and the Church desires healing and reconciliation.",
        },
        "Have I harbored hatred, deep bitterness, malice, or a desire for revenge against another person?",
        "Have I physically assaulted, bullied, abused, or verbally injured anyone through insults and mockery?",
        "Have I harmed my health or endangered life through excessive drinking, drug abuse, severe overeating, reckless driving, or another dangerous choice?",
        "Have I led another person into sin through bad example, encouragement, or persuasion?",
        "Have I refused forgiveness or reconciliation when it was reasonably and safely possible?",
      ], { scripture: "“You shall not kill.”", reference: "Exodus 20:13 · CCC 2258–2330" }),
      section("ten-commandments", "sixth", "Sixth Commandment", "Live chastity according to your state in life and respect the dignity and purposes of sexuality.", [
        {
          text: "Have I engaged in sexual relations outside a valid marriage, including fornication or adultery?",
          graveMatterNote: "Sexual acts outside marriage involve grave matter. Personal culpability also requires sufficient knowledge and deliberate consent.",
          pastoralReflection: "Consider the choices made, the dignity of the other person, patterns or pressures involved, and the next faithful step toward chastity.",
        },
        "Have I viewed pornography in videos, publications, websites, apps, or social media?",
        "Have I engaged in masturbation or solitary impure sexual actions?",
        "Have I engaged in impure conversations, crude jokes, or provocative entertainment without guarding my senses?",
        "As a married person, have I used artificial contraception or deliberately frustrated the unitive and procreative purposes of the marital act?",
      ], { scripture: "“You shall not commit adultery.”", reference: "Exodus 20:14 · CCC 2331–2400" }),
      section("ten-commandments", "seventh", "Seventh Commandment", "Respect property, labor, contracts, creation, and the universal destination of goods.", [
        "Have I taken property, money, goods, digital files, or copyrighted material belonging to another without permission?",
        "Have I cheated in business, falsified records, wasted an employer’s time, or failed to give honest work for my wage?",
        "Have I failed to pay just debts or taxes, or unjustly delayed payment owed to workers and creditors?",
        "Have I refused to share my abundance with people in need and the Church according to my means?",
        "Have I damaged or carelessly ruined public or private property without offering restitution?",
      ], { scripture: "“You shall not steal.”", reference: "Exodus 20:15 · CCC 2401–2463" }),
      section("ten-commandments", "eighth", "Eighth Commandment", "Speak truth with charity and protect the reputation, privacy, and confidence of others.", [
        "Have I lied, deceived, or exaggerated to protect myself, manipulate a situation, or mislead another person?",
        "Have I committed detraction by revealing another person’s faults without a valid reason to someone who did not know them?",
        "Have I committed calumny or slander by spreading falsehoods or exaggerations that harmed another person’s reputation?",
        "Have I gossiped, judged rashly, assumed bad motives, or spread unverified accusations online?",
        "Have I betrayed a confidence or broken a secret entrusted to me in friendship or professional duty?",
      ], { scripture: "“You shall not bear false witness against your neighbor.”", reference: "Exodus 20:16 · CCC 2464–2513" }),
      section("ten-commandments", "ninth", "Ninth Commandment", "Cultivate purity of heart, modesty, and faithful boundaries in thought and relationship.", [
        "Have I willfully dwelt on lustful thoughts or sexual fantasies, or looked at another person with lust?",
        "Have I fostered inappropriate emotional intimacy or flirtation with someone who is married, or while I am married?",
        "Have I neglected modesty in dress, speech, behavior, or gaze in a way that devalued interior purity or another person’s dignity?",
      ], { scripture: "“You shall not covet your neighbor’s wife.”", reference: "Exodus 20:17 · CCC 2514–2533" }),
      section("ten-commandments", "tenth", "Tenth Commandment", "Practice gratitude, simplicity, generosity, and freedom from envy and greed.", [
        "Have I been envious or bitter over the success, talents, wealth, or happiness of others?",
        "Have I lived with greed, materialism, or constant dissatisfaction, craving possessions while neglecting spiritual treasure?",
        "Have I wished misfortune, financial ruin, or failure upon others so that I might benefit or feel superior?",
      ], { scripture: "“You shall not covet your neighbor’s goods.”", reference: "Exodus 20:17 · CCC 2534–2557" }),
    ],
  },
  {
    id: "young-adults",
    title: "For Young Adults",
    shortTitle: "Young adults",
    attribution: "USCCB guide for young adults",
    description: "Reflect on faith, family, friendships, integrity, sexuality, substances, and daily choices.",
    sourceUrl: "https://www.usccb.org/prayer-and-worship/sacraments-and-sacramentals/penance/sacrament-reconciliation-young-adults-examination-of-conscience",
    sections: [
      section("young-adults", "god", "My Relationship with God", "Bring your worship, prayer, gratitude, and obedience into Christ’s light.", [
        "Have I freely chosen to miss Mass, withdrawn from prayer, or ignored Scripture and the teaching of Christ?",
        "Have I treated God’s name without reverence or resisted his commandments because they were inconvenient?",
        "Have I thanked the Father for my life, Christ for redemption, and the Holy Spirit for help against temptation?",
      ]),
      section("young-adults", "others-self", "Others and Myself", "Consider how your choices shape your character and affect the people around you.", [
        "Have I been disrespectful, deceptive, stubborn, or needlessly defiant toward parents, teachers, employers, or other rightful authority?",
        "Have I held grudges, fueled anger, bullied, mocked, gossiped, or refused to forgive?",
        "Have I used another person or media for lust, or failed to respect the dignity and boundaries of my own body and others?",
        "Have I lied, cheated, stolen, acted from jealousy, or ignored a duty I knew was mine?",
        "Have alcohol, drugs, gambling, or another habit weakened my freedom or harmed others?",
        "When conscience prompted patience, kindness, courage, or self-control, did I follow it?",
      ]),
    ],
  },
  {
    id: "single-people",
    title: "For Single People",
    shortTitle: "Single people",
    attribution: "USCCB guide for single people",
    description: "Examine discipleship, relationships, personal stewardship, work, community, and public responsibility.",
    sourceUrl: "https://www.usccb.org/prayer-and-worship/sacraments-and-sacramentals/penance/examination-of-conscience-for-single-people",
    sections: [
      section("single-people", "god", "Responsibilities to God", "Let your present state of life become a place of faithful discipleship.", [
        "Have I neglected Mass, prayer, Scripture, or serious growth in the Catholic faith?",
        "Have I allowed loneliness, disappointment, or self-reliance to replace trust in God?",
        "Have I hidden my faith or failed to give Christian witness when charity called for it?",
      ]),
      section("single-people", "others-self", "Responsibilities to Others and Myself", "Review the freedom, relationships, and resources God has entrusted to you.", [
        "Have I nurtured resentment, self-pity, envy, or an unwillingness to forgive?",
        "Have I used sexuality, media, alcohol, food, money, or leisure in a way that lacks chastity or temperance?",
        "Have I been dishonest, unreliable, unkind, or careless with the needs and dignity of others?",
        "Have I neglected family, friendship, service, health, work, or the development of my gifts?",
      ]),
      section("single-people", "society", "Responsibilities to Society", "Christian charity reaches beyond one’s immediate circle.", [
        "Have I ignored people who are poor, lonely, vulnerable, or excluded when I could reasonably help?",
        "Have prejudice, partisanship, or contempt kept me from recognizing another person’s God-given dignity?",
        "Have I neglected honest civic duties or contributed to injustice through silence, selfishness, or indifference?",
      ]),
    ],
  },
  {
    id: "married-persons",
    title: "For Married Persons",
    shortTitle: "Married persons",
    attribution: "USCCB guide for married persons",
    description: "Reflect on fidelity to God, your spouse, children, home, and the wider community.",
    sourceUrl: "https://www.usccb.org/prayer-and-worship/sacraments-and-sacramentals/penance/sacrament-reconciliation-married-persons-examination-of-conscience",
    sections: [
      section("married-persons", "god", "Responsibilities to God", "Marriage is a vocation lived with God and sustained by grace.", [
        "Have I neglected personal prayer, Sunday Mass, the sacraments, or prayer with my spouse and family?",
        "Have I sought God’s will for our marriage, or insisted on my own will without discernment?",
      ]),
      section("married-persons", "spouse", "Responsibilities to My Spouse", "The marriage covenant calls for faithful, patient, truthful, and self-giving love.", [
        "Have I been unfaithful in action, fantasy, emotional intimacy, or media use?",
        "Have I withheld affection, communication, forgiveness, or help out of pride or resentment?",
        "Have I belittled, manipulated, controlled, deceived, or spoken disrespectfully to or about my spouse?",
        "Have I treated marital intimacy selfishly or acted against its unitive and life-giving purposes?",
      ]),
      section("married-persons", "family-society", "Children, Family, and Society", "Spouses share responsibility for the life of their home and its witness in the world.", [
        "Have I failed to teach children the faith, pray with them, guide them patiently, or give a consistent example?",
        "Have I undermined my spouse’s rightful role, avoided family duties, or made work and recreation more important than family?",
        "Have I used money irresponsibly, ignored people in need, or failed to contribute to parish and community life?",
      ]),
    ],
  },
  {
    id: "children",
    title: "For Children",
    shortTitle: "Children",
    attribution: "USCCB examination for children",
    description: "Simple, concrete questions about loving God, family, classmates, and oneself.",
    sourceUrl: "https://www.usccb.org/prayer-and-worship/sacraments-and-sacramentals/penance/sacrament-reconciliation-children-examination-conscience",
    sections: [
      section("children", "god", "Loving God", "Jesus welcomes children and helps them begin again.", [
        "Have I prayed and paid attention at Mass, or have I chosen not to make time for God?",
        "Have I used God’s name with love and respect?",
        "Have I thanked God for the people and good things he has given me?",
      ]),
      section("children", "home-school", "At Home and School", "Think about choices that helped or hurt your family, teachers, and classmates.", [
        "Have I obeyed my parents and teachers, or have I argued and refused without a good reason?",
        "Have I lied, cheated, taken something, or blamed someone else for what I did?",
        "Have I been mean, left someone out, made fun of another person, or tried to get even?",
        "Have I shared, helped, apologized, and forgiven—or have I held onto selfishness and anger?",
        "Have I treated my body, other people, animals, and belongings with care?",
      ]),
    ],
  },
  {
    id: "catholic-social-teaching",
    title: "Catholic Social Teaching",
    shortTitle: "Catholic social teaching",
    attribution: "USCCB guide in light of Catholic social teaching",
    description: "Examine how your choices uphold human dignity, solidarity, justice, family, work, and care for creation.",
    sourceUrl: "https://www.usccb.org/prayer-and-worship/sacraments-and-sacramentals/penance/examination-conscience-in-light-of-catholic-social-teaching",
    sections: [
      section("catholic-social-teaching", "dignity-community", "Life, Dignity, and Community", "Every person is made in God’s image and called into community.", [
        "Have I protected human life and dignity, especially when a person is unborn, elderly, poor, ill, imprisoned, displaced, or otherwise vulnerable?",
        "Have racism, prejudice, contempt, or indifference shaped how I speak about or treat another group?",
        "Have I supported family life and participated responsibly in my parish, neighborhood, and civic community?",
      ]),
      section("catholic-social-teaching", "rights-work", "Rights, Work, and the Poor", "Justice requires both respect for rights and faithful fulfillment of duties.", [
        "Have I ignored the basic needs and rights of others while demanding my own?",
        "Have I put the needs of people who are poor and vulnerable last in my spending, voting, service, or advocacy?",
        "Have I treated workers, customers, employers, and colleagues honestly, fairly, and with dignity?",
      ]),
      section("catholic-social-teaching", "solidarity-creation", "Solidarity and Creation", "We belong to one human family and share responsibility for God’s creation.", [
        "Have I treated distant suffering as someone else’s concern or refused practical solidarity with those in need?",
        "Have I pursued peace, reconciliation, and the common good—or promoted hostility and division?",
        "Have waste, excess, or convenience kept me from caring responsibly for creation and future generations?",
      ]),
    ],
  },
  {
    id: "public-square",
    title: "In the Public Square",
    shortTitle: "Public square",
    attribution: "USCCB examination for public life",
    description: "Reflect on civic participation, truth, human dignity, neighbor-love, and the common good.",
    sourceUrl: "https://www.usccb.org/resources/examination-conscience-civility",
    sections: [
      section("public-square", "formation", "Forming My Conscience", "Public discipleship begins by listening to God and seeking truth.", [
        "Have I formed my conscience through prayer, Scripture, and Catholic teaching before taking public positions?",
        "Have I accepted claims because they favored my group without checking whether they were true and just?",
        "Have fear, anger, ideology, or party loyalty become more important to me than fidelity to Christ?",
      ]),
      section("public-square", "neighbor", "Loving My Neighbor", "Political opponents and strangers remain neighbors made in the image of God.", [
        "Have I insulted, mocked, dehumanized, or spread falsehoods about people with whom I disagree?",
        "Have I listened with humility and spoken with both courage and civility?",
        "Have I defended human life and dignity consistently, including for people outside my preferred community?",
      ]),
      section("public-square", "common-good", "Serving the Common Good", "Faithful citizenship seeks justice, peace, participation, and special care for the vulnerable.", [
        "Have I neglected responsible participation in civic life when I was able to contribute?",
        "Have I considered how policies affect families, workers, people who are poor, migrants, and future generations?",
        "Have I prayed for leaders and worked for unity, justice, and peace rather than feeding cynicism or division?",
      ]),
    ],
  },
];

export function getCompanionExaminationGuide(id: CompanionGuideId) {
  return companionExaminationGuides.find((guide) => guide.id === id);
}
