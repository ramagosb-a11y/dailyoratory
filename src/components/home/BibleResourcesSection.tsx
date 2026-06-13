const scriptureLinks = [
  {
    title: "The Bible",
    href: "https://bible.usccb.org/bible",
    description: "Read books of Sacred Scripture through the USCCB Bible resource.",
  },
  {
    title: "Understanding the Bible",
    href: "https://www.usccb.org/bible/understanding-the-bible",
    description: "Learn how Catholics read Scripture within the life, prayer, and teaching of the Church.",
  },
  {
    title: "Mass Scripture Questions",
    href: "https://www.usccb.org/offices/new-american-bible/liturgy",
    description: "Review USCCB notes and questions about Scripture in the liturgy and the New American Bible.",
  },
];

const catechismLinks = [
  {
    title: "Catechism of the Catholic Church",
    href: "https://usccb.cld.bz/Catechism-of-the-Catholic-Church2/",
    description: "Read the Catechism as a trusted guide to the Church's faith, worship, moral life, and prayer.",
  },
  {
    title: "CCC FAQs",
    href: "https://www.usccb.org/committees/catechism/faq-about-catechism",
    description: "Review common questions about the Catechism and how the Church presents Catholic doctrine.",
  },
];

export function BibleResourcesSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
      <div className="grid gap-6 rounded-md border border-stone bg-ivory p-5 shadow-soft sm:p-7 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
        <div>
          <p className="text-xs font-bold uppercase text-burgundy">Sacred Scripture</p>
          <h2 className="font-display mt-3 text-3xl font-semibold leading-tight text-navy sm:text-4xl">
            Read the Bible with the Church.
          </h2>
          <p className="mt-4 text-sm leading-7 text-muted">
            Begin with Scripture, learn how Catholics receive the Word of God, and bring the readings into prayer and
            the Mass.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {scriptureLinks.map((link) => (
            <ResourceLinkCard key={link.href} link={link} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function CatechismResourcesSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 pb-14 sm:px-8 lg:px-10">
      <div className="grid gap-6 rounded-md border border-stone bg-parchment p-5 shadow-soft sm:p-7 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
        <div>
          <p className="text-xs font-bold uppercase text-burgundy">Catechism</p>
          <h2 className="font-display mt-3 text-3xl font-semibold leading-tight text-navy sm:text-4xl">
            Study the faith the Church professes.
          </h2>
          <p className="mt-4 text-sm leading-7 text-muted">
            Use the Catechism as a faithful companion for doctrine, worship, moral life, and prayer.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {catechismLinks.map((link) => (
            <ResourceLinkCard key={link.href} link={link} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ResourceLinkCard({
  link,
}: {
  link: {
    title: string;
    href: string;
    description: string;
  };
}) {
  return (
    <article className="rounded-md border border-stone bg-ivory p-4">
      <h3 className="font-display text-2xl font-semibold leading-tight text-navy">{link.title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted">{link.description}</p>
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-link focus-ring mt-4 inline-flex text-sm"
        aria-label={`Open ${link.title} on the USCCB website in a new tab`}
      >
        Open resource
      </a>
    </article>
  );
}
