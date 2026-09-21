const questionDoors = [
  {
    number: "01",
    question: "How have Christians learned to read Scripture?",
    guide:
      "Start with Book I, chapters 1–5 of Augustine's On Christian Doctrine. Read this short opening, notice the question he is pursuing, then return to Scripture itself.",
    label: "Open Book I, chapters 1–5",
    href: "https://www.newadvent.org/fathers/12021.htm",
  },
  {
    number: "02",
    question: "What can an early source show us about Christian worship?",
    guide:
      "Start with chapters 65–67 of Justin Martyr's First Apology. Read them as one writer's witness in a particular setting, then notice what they say and what they do not attempt to cover.",
    label: "Open First Apology",
    href: "https://www.newadvent.org/fathers/0126.htm",
  },
  {
    number: "03",
    question: "How did an early Christian writer speak about Christ?",
    guide:
      "Start with Athanasius's On the Incarnation of the Word. Take one section at a time, and keep the question close: what is this author trying to help his readers confess?",
    label: "Open On the Incarnation",
    href: "https://www.newadvent.org/fathers/2802.htm",
  },
  {
    number: "04",
    question: "What did an early Christian writing ask of everyday life?",
    guide:
      "Start with the Didache. It is an early Christian writing, not the work of a named Church Father. Read its moral instruction in context; do not treat its historical practices as a direct modern rule.",
    label: "Open The Didache",
    href: "https://www.newadvent.org/fathers/0714.htm",
  },
] as const;

const readingSteps = [
  "Choose the question that is genuinely yours.",
  "Read a short section before following links or searching for conclusions.",
  "Name one question to carry into Scripture, catechesis, or conversation with a trusted teacher.",
] as const;

const primaryWritings = [
  {
    author: "Augustine",
    title: "On Christian Doctrine",
    description: "A work on Christian teaching and interpreting Scripture.",
    href: "https://www.newadvent.org/fathers/12021.htm",
  },
  {
    author: "Justin Martyr",
    title: "First Apology",
    description: "A defense and explanation of Christian belief and practice addressed to an imperial Roman audience.",
    href: "https://www.newadvent.org/fathers/0126.htm",
  },
  {
    author: "Athanasius",
    title: "On the Incarnation of the Word",
    description: "A theological work on the Word's becoming human.",
    href: "https://www.newadvent.org/fathers/2802.htm",
  },
  {
    author: "The Didache",
    title: "Anonymous early Christian writing",
    description: "An anonymous early Christian writing with moral instruction and community practices; it is not the work of a named Church Father.",
    href: "https://www.newadvent.org/fathers/0714.htm",
  },
] as const;

const directoryGroups = [
  { title: "Apostolic Fathers", qualifier: "Named individuals", names: ["Clement of Rome", "Ignatius of Antioch", "Polycarp of Smyrna"] },
  { title: "Greek and Byzantine Fathers", qualifier: "A study map", names: ["Justin Martyr", "Irenaeus of Lyons", "Athanasius of Alexandria", "Basil of Caesarea", "Gregory of Nazianzus", "Gregory of Nyssa", "John Chrysostom", "Cyril of Jerusalem", "Cyril of Alexandria", "John Damascene", "Maximus the Confessor"] },
  { title: "Latin Fathers", qualifier: "A study map", names: ["Cyprian of Carthage", "Hilary of Poitiers", "Ambrose of Milan", "Jerome", "Augustine of Hippo", "Leo the Great", "Gregory the Great", "Isidore of Seville"] },
  { title: "Syriac Christian writers", qualifier: "A study map", names: ["Ephrem the Syrian", "Aphrahat"] },
] as const;

const earlyChristianWritings = ["The Didache", "The Shepherd of Hermas", "Letter to Diognetus"] as const;

const documentLinks: Record<string, string> = {
  "Clement of Rome": "https://www.newadvent.org/fathers/1010.htm", "Ignatius of Antioch": "https://www.newadvent.org/fathers/0109.htm", "Polycarp of Smyrna": "https://www.newadvent.org/fathers/0136.htm",
  "Justin Martyr": "https://www.newadvent.org/fathers/0126.htm", "Irenaeus of Lyons": "https://www.newadvent.org/fathers/0103.htm", "Athanasius of Alexandria": "https://www.newadvent.org/fathers/2802.htm", "Basil of Caesarea": "https://www.newadvent.org/fathers/3202.htm", "Gregory of Nazianzus": "https://www.newadvent.org/fathers/3102.htm", "Gregory of Nyssa": "https://www.ccel.org/ccel/schaff/npnf205", "John Chrysostom": "https://www.newadvent.org/fathers/2001.htm", "Cyril of Jerusalem": "https://www.newadvent.org/fathers/3101.htm", "Cyril of Alexandria": "https://www.tertullian.org/fathers/", "John Damascene": "https://www.newadvent.org/fathers/3304.htm", "Maximus the Confessor": "https://www.myriobiblos.gr/texts/contents_maximos_en.html",
  "Cyprian of Carthage": "https://www.newadvent.org/fathers/0506.htm", "Hilary of Poitiers": "https://www.newadvent.org/fathers/3302.htm", "Ambrose of Milan": "https://www.newadvent.org/fathers/3404.htm", "Jerome": "https://www.newadvent.org/fathers/3001.htm", "Augustine of Hippo": "https://www.newadvent.org/fathers/12021.htm", "Leo the Great": "https://www.newadvent.org/fathers/3604.htm", "Gregory the Great": "https://www.newadvent.org/fathers/3602.htm", "Isidore of Seville": "https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Isidore/home.html",
  "Ephrem the Syrian": "https://www.ccel.org/ccel/schaff/npnf213", "Aphrahat": "https://www.ccel.org/ccel/schaff/npnf213", "The Didache": "https://www.newadvent.org/fathers/0714.htm", "The Shepherd of Hermas": "https://www.ccel.org/ccel/schaff/anf02.vi.i.html", "Letter to Diognetus": "https://www.newadvent.org/fathers/0101.htm",
};

export function ChurchFathersLearningPath() {
  return (
    <>
      <section className="relative isolate overflow-hidden rounded-[2rem] border border-gold/40 bg-[radial-gradient(circle_at_88%_10%,rgba(226,193,94,0.28),transparent_18rem),radial-gradient(circle_at_2%_100%,rgba(72,122,121,0.28),transparent_23rem),linear-gradient(135deg,#0a1d2c,#142e40)] p-7 text-ivory shadow-[0_24px_60px_rgba(8,27,41,0.26)] sm:p-10 lg:p-14">
        <div aria-hidden="true" className="absolute -right-20 top-20 h-64 w-64 rounded-full border border-gold/25" />
        <div aria-hidden="true" className="absolute -right-1 top-4 h-36 w-36 rounded-full border border-ivory/15" />
        <div className="relative max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">A patient way into the early Church</p>
          <h1 className="font-display mt-4 text-5xl font-semibold leading-[0.96] sm:text-6xl lg:text-7xl">Meet the Church Fathers</h1>
          <div className="mt-6 h-px w-24 bg-gold/75" />
          <p className="mt-6 max-w-3xl text-lg leading-8 text-ivory/95">Begin with a question, meet one early Christian witness, and open a first text with context.</p>
          <p className="mt-5 max-w-3xl text-base leading-8 text-ivory/75">The Fathers can help us listen to the Church across the centuries. This is not a shortcut through difficult history or a substitute for Scripture and the Church&apos;s living teaching. It is an invitation to read carefully, in context, and one work at a time.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="#questions" className="btn btn-gold focus-ring justify-center">Explore four questions</a>
            <a href="#first-reading" className="btn border border-ivory/40 bg-transparent text-ivory hover:border-gold hover:bg-ivory/10 focus-ring justify-center">Choose a first reading</a>
          </div>
          <p className="mt-10 text-xs font-semibold uppercase tracking-[0.16em] text-gold/90">Get oriented · Explore a question · Read a first work</p>
        </div>
      </section>

      <nav aria-label="Church Fathers learning path" className="mt-5 flex flex-wrap gap-x-4 gap-y-2 px-1 text-sm font-semibold text-navy sm:gap-x-7">
        <a href="#orientation" className="focus-ring underline-offset-4 hover:text-burgundy hover:underline">1. Get oriented</a>
        <a href="#questions" className="focus-ring underline-offset-4 hover:text-burgundy hover:underline">2. Explore a question</a>
        <a href="#directory" className="focus-ring underline-offset-4 hover:text-burgundy hover:underline">3. Find your bearings</a>
        <a href="#primary-writings" className="focus-ring underline-offset-4 hover:text-burgundy hover:underline">4. Find a primary writing</a>
        <a href="#first-reading" className="focus-ring underline-offset-4 hover:text-burgundy hover:underline">5. Read a first work</a>
      </nav>

      <section id="orientation" className="mt-14 scroll-mt-28 rounded-[1.5rem] border border-stone bg-[linear-gradient(135deg,rgba(255,253,247,0.98),rgba(247,238,220,0.9))] p-6 shadow-[0_12px_30px_rgba(83,61,29,0.08)] sm:p-9">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">Begin with context</p>
        <h2 className="font-display mt-3 max-w-3xl text-4xl font-semibold leading-tight text-navy sm:text-5xl">How to read the Fathers well</h2>
        <p className="mt-5 max-w-3xl text-base leading-8 text-muted">Read the Fathers as important historical witnesses and teachers within the Church&apos;s living Tradition. Scripture is the inspired word of God; the Fathers help us hear how Christians in earlier centuries received, discussed, prayed, and lived the faith.</p>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          <article className="rounded-2xl border border-stone bg-ivory/80 p-5"><h3 className="font-display text-2xl font-semibold text-navy">Read more than a line.</h3><p className="mt-3 text-sm leading-7 text-muted">A passage has an argument, audience, and moment in history. Let the work speak in its own setting.</p></article>
          <article className="rounded-2xl border border-stone bg-ivory/80 p-5"><h3 className="font-display text-2xl font-semibold text-navy">Do not make one writer carry everything.</h3><p className="mt-3 text-sm leading-7 text-muted">No single Father settles every question. Look for context, reception, and the Church&apos;s teaching.</p></article>
          <article className="rounded-2xl border border-stone bg-ivory/80 p-5"><h3 className="font-display text-2xl font-semibold text-navy">Keep a trusted guide nearby.</h3><p className="mt-3 text-sm leading-7 text-muted">A good edition, sound catechesis, and the Church&apos;s living teaching help a difficult text become a real encounter rather than a slogan.</p></article>
        </div>
      </section>

      <section id="questions" className="mt-14 scroll-mt-28 rounded-[1.5rem] border border-navy/20 bg-navy px-6 py-8 text-ivory shadow-[0_18px_40px_rgba(8,27,41,0.18)] sm:px-9 sm:py-10">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold">Browse by topic</p>
        <h2 className="font-display mt-3 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">Follow one honest question</h2>
        <p className="mt-4 max-w-3xl text-base leading-8 text-ivory/80">Choose Scripture, worship, Christ, or Christian life. You do not need to survey an entire era before beginning.</p>
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {questionDoors.map((door) => (
            <article key={door.number} className="relative overflow-hidden rounded-2xl border border-ivory/15 bg-ivory/8 p-6">
              <span aria-hidden="true" className="font-display absolute right-5 top-2 text-5xl leading-none text-gold/20">{door.number}</span>
              <h3 className="font-display relative max-w-md text-3xl font-semibold leading-tight">{door.question}</h3>
              <div className="mt-5 h-px w-14 bg-gold/70" />
              <p className="mt-5 max-w-xl text-sm leading-7 text-ivory/80">{door.guide}</p>
              <a href={door.href} target="_blank" rel="noopener noreferrer" className="focus-ring mt-6 inline-flex min-h-12 items-center justify-center rounded-xl bg-gold px-5 py-3 text-sm font-bold text-navy transition hover:-translate-y-0.5 hover:bg-ivory">
                {door.label}<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="directory" className="mt-14 scroll-mt-28 rounded-[1.5rem] border border-gold/35 bg-[linear-gradient(135deg,rgba(250,244,229,0.98),rgba(255,253,247,0.98))] p-6 shadow-[0_12px_30px_rgba(83,61,29,0.08)] sm:p-9">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">Find your bearings</p>
        <h2 className="font-display mt-3 max-w-3xl text-4xl font-semibold leading-tight text-navy sm:text-5xl">A map of the Church Fathers</h2>
        <p className="mt-5 max-w-3xl text-base leading-8 text-muted">A map for further study, not a complete catalogue or a ranking. Read each writer in context, alongside Scripture and the Church&apos;s living teaching.</p>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">Each name opens an external text, collection, or index. These repositories use particular editions and translations; they are study aids, not an official Church Fathers edition.</p>
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {directoryGroups.map((group) => (
            <article key={group.title} className="rounded-2xl border border-stone bg-ivory/85 p-6">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">{group.qualifier}</p>
              <h3 className="font-display mt-3 text-3xl font-semibold leading-tight text-navy">{group.title}</h3>
              <ul className="mt-5 grid gap-x-5 gap-y-2 text-sm leading-7 text-muted sm:grid-cols-2">{group.names.map((name) => <li key={name} className="flex gap-2"><span aria-hidden="true" className="mt-3 size-1.5 shrink-0 rounded-full bg-gold" /><a href={documentLinks[name]} target="_blank" rel="noopener noreferrer" className="focus-ring underline-offset-4 hover:text-burgundy hover:underline">{name}<span className="sr-only"> (read online; opens in a new tab)</span></a></li>)}</ul>
            </article>
          ))}
        </div>
        <article className="mt-4 rounded-2xl border border-navy/15 bg-navy p-6 text-ivory">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-gold">A distinct companion shelf</p>
          <h3 className="font-display mt-3 text-3xl font-semibold leading-tight">Early Christian writings alongside the Fathers</h3>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-ivory/80">The last group contains writings, not named Church Fathers.</p>
          <ul className="mt-5 flex flex-wrap gap-2">{earlyChristianWritings.map((writing) => <li key={writing}><a href={documentLinks[writing]} target="_blank" rel="noopener noreferrer" className="focus-ring inline-flex min-h-10 items-center rounded-full border border-ivory/20 px-3 py-1.5 text-sm text-ivory/90 hover:border-gold hover:bg-ivory/10">{writing}<span className="sr-only"> (read online; opens in a new tab)</span></a></li>)}</ul>
        </article>
      </section>

      <section id="primary-writings" className="mt-14 scroll-mt-28 rounded-[1.5rem] border border-stone bg-[linear-gradient(135deg,rgba(255,253,247,0.98),rgba(247,238,220,0.9))] p-6 shadow-[0_12px_30px_rgba(83,61,29,0.08)] sm:p-9">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">Where to read</p>
        <h2 className="font-display mt-3 max-w-3xl text-4xl font-semibold leading-tight text-navy sm:text-5xl">Primary writings to begin with</h2>
        <p className="mt-5 max-w-3xl text-base leading-8 text-muted">These are historical primary texts, not an official Church Fathers edition. Each link opens a particular external translation and editorial repository; use its source information and read the work in context.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {primaryWritings.map((writing) => (
            <article key={writing.author} className="flex flex-col rounded-2xl border border-stone bg-ivory/80 p-6">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">{writing.author}</p>
              <h3 className="font-display mt-3 text-3xl font-semibold leading-tight text-navy">{writing.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">{writing.description}</p>
              <a href={writing.href} target="_blank" rel="noopener noreferrer" className="focus-ring mt-6 inline-flex min-h-12 w-fit items-center justify-center rounded-xl border border-navy/20 bg-ivory px-5 py-3 text-sm font-bold text-navy transition hover:-translate-y-0.5 hover:border-gold hover:bg-gold/15">
                Read this primary text<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="first-reading" className="mt-14 scroll-mt-28 grid gap-7 rounded-[1.5rem] border border-gold/35 bg-[linear-gradient(135deg,rgba(250,244,229,0.98),rgba(255,253,247,0.98))] p-6 shadow-[0_12px_30px_rgba(83,61,29,0.08)] lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
        <div><p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">Take one unhurried step</p><h2 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl">A first reading path</h2><p className="mt-5 text-base leading-8 text-muted">Choose one door. Open the text. Read a small portion. If something is unclear, mark the question and return with a trustworthy guide. You do not need to master an era in one sitting.</p></div>
        <div className="rounded-2xl border border-gold/40 bg-ivory p-5 sm:p-6"><ol className="space-y-5">{readingSteps.map((step, index) => <li key={step} className="flex gap-4"><span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-ivory">{index + 1}</span><p className="pt-1 text-sm leading-7 text-navy">{step}</p></li>)}</ol><p className="mt-6 border-t border-stone pt-5 text-sm leading-7 text-muted">The linked repositories use particular translations and editorial framing. They are study aids; read the page&apos;s source information and the work&apos;s context before drawing broad conclusions.</p></div>
      </section>

    </>
  );
}
