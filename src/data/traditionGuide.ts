export const traditionGuideSources = {
  revelation: {
    label: "Dei Verbum 7–10",
    title: "How divine revelation is handed on",
    href: "https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19651118_dei-verbum_en.html",
  },
  distinction: {
    label: "Catechism 80–83",
    title: "Sacred Tradition and particular traditions",
    href: "https://www.vatican.va/archive/ENG0015/__PL.HTM",
  },
  interpretation: {
    label: "Catechism 84–95",
    title: "Teaching authority and growth in understanding",
    href: "https://www.vatican.va/archive/ENG0015/__PM.HTM",
  },
  creeds: {
    label: "Catechism 185–197",
    title: "Why the Church expresses faith in creeds",
    href: "https://www.vatican.va/content/catechism/en/part_one/section_two.html",
  },
  trinity: {
    label: "Catechism 242–254",
    title: "The councils and the language of faith",
    href: "https://www.vatican.va/content/catechism/en/part_one/section_two/chapter_one/article_1/paragraph_2_the_father.html",
  },
  nicaea: {
    label: "International Theological Commission: Nicaea study, §4",
    title: "A theological study distinguishing the 325 and 381 creeds",
    href: "https://www.vatican.va/roman_curia/congregations/cfaith/cti_documents/rc_cti_doc_20250403_1700-nicea_en.html",
  },
  orthodox: {
    label: "Orthodox Church in America: Tradition",
    title: "An Orthodox teaching guide in its own words",
    href: "https://www.oca.org/orthodoxy/the-orthodox-faith/doctrine-scripture/sources-of-christian-doctrine/tradition",
  },
} as const;

export type TraditionGuideSourceId = keyof typeof traditionGuideSources;

type GuideBlock = { title: string; paragraphs: string[] };
type TraditionLesson = {
  id: string;
  number: string;
  title: string;
  summary: string;
  blocks: GuideBlock[];
  takeaway: string;
  sources: TraditionGuideSourceId[];
};

// Original explanatory copy. Source/claim mapping and independent review:
// docs/features/tradition-clean-slate/CONTENT-REVIEW.md
export const traditionLessons: TraditionLesson[] = [
  {
    id: "meaning",
    number: "01",
    title: "What does Tradition mean?",
    summary: "Begin with the difference between the faith being handed on and the many ways people express it.",
    blocks: [
      {
        title: "An inheritance with a particular meaning",
        paragraphs: [
          "In everyday conversation, tradition can mean something received from those who came before us: a story, a skill, a celebration, or a way of doing things. The word draws attention to a relationship between generations. Someone receives something, comes to understand it, and passes it on. But that alone does not tell us whether the inheritance is true, important, or binding.",
          "In Catholic teaching, Sacred Tradition is the living transmission of what the apostles received from Jesus Christ and learned through the Holy Spirit. Apostolic means connected with those first witnesses and their mission. The inheritance is the Gospel of Jesus Christ. The Church hands on this faith through its teaching, life, and worship, inseparably connected with Scripture. Its purpose is to communicate the faith in Christ, not simply to keep the past unchanged.",
        ],
      },
      {
        title: "The message, the handing on, and the expression",
        paragraphs: [
          "It helps to ask three different questions. What is being received? How is it being passed on? What form does it take here? Imagine someone teaching a child the meaning of a familiar celebration. The meaning, the act of teaching, and the family's particular way of celebrating are connected, but they are not interchangeable. This is a learning example, not a definition of Sacred Tradition.",
          "The same care helps when reading about religion. A community's way of decorating for a feast is not the same kind of thing as a belief about who Jesus is. Both may be called traditional in ordinary speech. You need more than that word to understand their significance. Ask what the practice expresses before assuming that every detail has equal weight.",
        ],
      },
      {
        title: "A distinction that makes room for understanding",
        paragraphs: [
          "The Catechism distinguishes the apostolic inheritance from particular theological, disciplinary, liturgical, and devotional traditions that arise in local churches. These expressions can be retained, changed, or set aside under the Church's teaching authority. That does not make every practice optional or leave every decision to personal preference.",
          "You do not need to know all the technical terms before continuing. Keep one distinction in view: the faith being communicated and a particular way of expressing it are not automatically the same thing. Learning the difference helps you ask more precise questions, especially when something is unfamiliar or someone describes it as something Christians have always done.",
        ],
      },
    ],
    takeaway: "Tradition concerns what is received and how it is handed on. Age alone does not tell you its meaning or authority.",
    sources: ["revelation", "distinction"],
  },
  {
    id: "handing-on",
    number: "02",
    title: "How is faith handed on?",
    summary: "Texts, teaching, worship, and communities work together. They are not successive stages in which one simply replaces another.",
    blocks: [
      {
        title: "More than one way of receiving",
        paragraphs: [
          "Think about how you first learned the meaning of an important word. You may have heard it used, asked a question, read an explanation, and watched someone put it into practice. These experiences do different kinds of work. A written explanation can preserve precise wording; a teacher can answer a misunderstanding; a community can show how words are understood in its life.",
          "Dei Verbum, the Second Vatican Council's document on divine revelation, describes the apostles handing on what they received through preaching, example, and observances, as well as the inspired writing of the message of salvation. Writing and living transmission belong within this account together. It is not a story in which oral communication becomes unnecessary once a text exists.",
        ],
      },
      {
        title: "People, witnesses, and responsibility",
        paragraphs: [
          "In the Catholic account, apostolic succession includes the bishops' responsibility to continue the apostles' teaching ministry. It places the handing on of faith within a continuing Church, rather than treating it as a collection of disconnected personal discoveries. This is a theological understanding of continuity; a diagram or a list of names cannot, by itself, demonstrate every historical claim made about a particular practice.",
          "To investigate a particular example, look for different kinds of evidence. A surviving text may tell you what an author taught. A community's worship may show how it expressed a belief. A formal teaching may clarify how a claim is understood. Ask what each witness actually establishes. One writer's words should not silently become evidence that everyone, everywhere, used the same words or followed the same practice.",
        ],
      },
      {
        title: "An inheritance that can be studied",
        paragraphs: [
          "This is why context matters. A text written to answer an objection will sound different from an introduction for newcomers. A local instruction may address a local problem. Notice the author, audience, date, and purpose before treating an isolated sentence as a complete account. Good questions do not prevent understanding; they help you distinguish what a source says from what someone later claims it says.",
          "The diagram below shows related ways of handing on faith, not a timeline. Return to it when reading the Creed example: you will encounter a written statement, people responsible for teaching, and a community that receives the statement. Looking at their relationship makes the idea of transmission more concrete without reducing it to a chain of individual memories.",
        ],
      },
    ],
    takeaway: "Ask how the teaching reaches people, and what each witness can actually tell you about it.",
    sources: ["revelation"],
  },
  {
    id: "creed-example",
    number: "03",
    title: "How a creed carries faith across generations",
    summary: "Follow one example: a received belief expressed in carefully chosen words, taught to others, and used by a community.",
    blocks: [
      {
        title: "The question: what are we saying together?",
        paragraphs: [
          "A creed is a concise profession of faith. The Catechism explains that early summaries helped communicate the faith, particularly to people preparing for baptism. A shared statement makes it possible to teach and recognize a common confession. It does not remove the need to explain its words: a short statement can carry questions that deserve sustained attention.",
          "Imagine two people agreeing to the same sentence but meaning different things by one important word. Repetition alone will not resolve their disagreement. They need to ask what the sentence includes and what it rules out. That is a useful starting point for understanding why a community might explain inherited belief in more precise language.",
        ],
      },
      {
        title: "The historical witness: two councils, distinct forms",
        paragraphs: [
          "The council at Nicaea in 325 addressed the relationship of the Son to the Father. Its confession affirmed the Son's full divinity rather than treating him as a creature. The key term is consubstantial: the Son is one in divine being with the Father, not a creature. Father and Son remain distinct persons. The Nicene-Constantinopolitan Creed associated with Constantinople in 381 is a later, fuller form, including a fuller confession concerning the Holy Spirit. It should not be presented as word-for-word identical to the creed issued in 325.",
          "The Catechism connects the authority of the Nicene-Constantinopolitan Creed with these first two ecumenical councils. Here, ecumenical means that these councils are recognized as councils of the whole Church, rather than only a local gathering. Here the dates identify distinct historical settings; they are not dates when Christians first began believing in Christ or when the existence of the Christian faith was decided.",
        ],
      },
      {
        title: "What was clarified, and why it matters",
        paragraphs: [
          "The point of the example is the relationship between inherited faith and its formulation. In Catholic understanding, a creed expresses and clarifies what the Church receives; it does not create God or make a belief true by counting votes. To follow the historical argument properly, read the actual confession and the question it addresses. Do not substitute a slogan about the council for the evidence.",
          "There are several layers to notice: the belief being confessed, the words used to express it, the authority of the council, and the community's reception of the statement. Distinguishing these layers helps explain how a text can belong to a living tradition. It is preserved as a document, but it is also interpreted, taught, and confessed by people.",
          "This example does not mean that every Christian community uses an identical version of the Creed, or that every later custom has the authority of a conciliar confession. It shows why the right question is more precise than whether something is old: what does this statement express, how did it come to be formulated, and how is its authority understood?",
        ],
      },
    ],
    takeaway: "A creed illustrates continuity through careful expression. Its wording, history, and authority deserve to be understood together.",
    sources: ["creeds", "trinity", "nicaea"],
  },
  {
    id: "continuity",
    number: "04",
    title: "What can change, and what is meant to endure?",
    summary: "Distinguish the faith received, growth in understanding, and changes in its expression. Each raises a different question.",
    blocks: [
      {
        title: "Understanding can deepen",
        paragraphs: [
          "The Catechism describes growth in understanding through believers' study and contemplation, their spiritual experience, and the preaching of bishops. In this Catholic account, development means coming to understand the received inheritance more deeply. It is not permission to replace it with any idea that becomes attractive or popular.",
          "Consider the difference between translating a sentence, explaining it, and contradicting it. All three can introduce words that were not in the original sentence. Yet they do very different things. To understand a change, you need to look at the meaning being communicated, not merely count the new words. This comparison is a way to frame the question, not a shortcut for resolving a disputed doctrine.",
        ],
      },
      {
        title: "Name the kind of change",
        paragraphs: [
          "A useful first step is to identify what is under discussion. Is it a teaching about God? An explanation of that teaching? A rule governing a practice? A local expression of devotion? A language used to communicate? Do not assume that a decision about one category automatically settles another. Nor does recognizing a custom as local establish that an individual may disregard every rule connected with it.",
          "Return to the Creed. Asking how to explain an unfamiliar term is different from asking whether the belief it expresses should be denied. Asking which translation a community uses is different again. A careful discussion identifies the actual question before proposing an answer. Otherwise, people can appear to disagree about Tradition when they are talking about different kinds of change.",
        ],
      },
      {
        title: "Continuity requires reasons",
        paragraphs: [
          "Neither antiquity nor novelty is enough on its own. An appeal to age needs evidence about what was taught, where, and with what significance. An appeal to development needs an explanation of its relationship to what was received. Ask for the relevant sources and the reasons for the interpretation. A confident label should not take the place of an argument.",
          "For a reader beginning this subject, the goal is not to become the final judge of every historical or doctrinal question. It is to learn how to recognize the question and seek an appropriate explanation. When a claim is complicated, keep track of what you understand, what the source establishes, and what remains unresolved. That is more useful than forcing every example into a simple changed-or-unchanged verdict.",
        ],
      },
    ],
    takeaway: "First identify what is changing. Then ask how that change relates to the meaning and authority of what was received.",
    sources: ["distinction", "interpretation"],
  },
  {
    id: "understanding-a-claim",
    number: "05",
    title: "How should I understand an appeal to Tradition?",
    summary: "Look at the claim, its evidence, and the authority being invoked. The word traditional is the beginning of a question, not its complete answer.",
    blocks: [
      {
        title: "Who is speaking, and with what responsibility?",
        paragraphs: [
          "In Catholic teaching, the Magisterium is the Church's teaching office: the bishops in communion with the Bishop of Rome, the Pope. Its role is to interpret the Word of God authentically. It serves that Word rather than standing above it, preserving and explaining what has been received. It is not an independent source free to invent revelation.",
          "That makes the identity and purpose of a source important. An official teaching, an individual theologian's explanation, a local custom, and someone's personal recollection are not interchangeable. Each may help you learn something, but you should know what kind of claim it can support. A quotation on an image is a useful lead only when you can trace it to its source and context.",
        ],
      },
      {
        title: "Read a claim with four questions",
        paragraphs: [
          "First, what exactly is being handed on? Name the belief or practice rather than relying on a broad label. Second, what evidence supports the account? Look for an identifiable document or witness, not simply a repetition of the claim. Third, what authority does the source have within the community concerned? Fourth, is the explanation shared across communities, or does it express a particular community's understanding?",
          "For example, if someone says a practice has always been required, ask what required means here and for whom. Does the source describe an obligation, recommend a devotion, or report a custom? Is it describing one place and period? Reading these details does not diminish the value of an inheritance. It helps prevent admiration for a practice from becoming an unsupported claim about everyone else's duty.",
        ],
      },
      {
        title: "Learn across differences with care",
        paragraphs: [
          "This guide explains the Catholic account and names it as such. When exploring another Christian community's understanding, begin with its own teaching documents and ask how it uses the terms Scripture, tradition, and authority. A familiar word does not guarantee an identical meaning. Avoid assuming that one spokesperson describes every member of a broad family of churches.",
          "For one example, the Orthodox Church in America's teaching guide describes Scripture within Holy Tradition and distinguishes that inheritance from temporary customs. This is a particular community's explanation, not a complete comparison of Christian positions. Reading it alongside the Catholic sources lets you notice both shared language and questions that need further exploration.",
          "You can approach this subject as a believer, a newcomer, or someone who is unsure what to believe. Understanding an account is a worthwhile step even before deciding whether you accept it. Keep the sources close, allow space for questions, and distinguish an explanation you have understood from a conclusion you have not yet reached.",
          "The purpose of studying Tradition is to understand the inheritance being offered: what it says about Christ, how it has reached people, and why it matters to the communities that receive it. Continue with one question that interests you. Learning how an early Christian writer explains a belief, or how a council addresses a dispute, can give the next part of the story greater depth.",
        ],
      },
    ],
    takeaway: "Be specific about the claim, careful with its evidence, and clear about whose understanding you are learning.",
    sources: ["interpretation", "orthodox"],
  },
];
