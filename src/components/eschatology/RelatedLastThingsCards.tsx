import { TrackedLink } from "@/components/analytics/TrackedLink";

const relatedTeachings = [
  {
    title: "Purgatory",
    description:
      "A final purification for those who die in God's grace but still need to be made ready for the full vision of God.",
    href: "/formation/eschatology/purgatory",
  },
  {
    title: "Resurrection of the Body",
    description:
      "At the end of time, God will raise the dead. Salvation is not only for the soul, but for the whole person, body and soul.",
    href: "/formation/eschatology/resurrection-of-the-body",
  },
  {
    title: "Second Coming of Christ",
    description:
      "Christ will return in glory to judge the living and the dead and bring God's Kingdom to its fullness.",
    href: "/formation/eschatology/second-coming",
  },
  {
    title: "Final Judgment",
    description: "The truth of every life and all history will be revealed in God's justice and mercy.",
    href: "/formation/eschatology/judgment#final-judgment",
  },
] as const;

export function RelatedLastThingsCards() {
  return (
    <section>
      <h2 className="font-display text-4xl font-semibold text-navy">More Last Things and Final Hope</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {relatedTeachings.map((item) => (
          <TrackedLink
            key={item.title}
            href={item.href}
            eventName="eschatology_topic_open"
            eventParams={{ section: "related-last-things", destination: item.href }}
            className="card resource-card focus-ring block p-5"
          >
            <h3 className="font-display text-2xl font-semibold text-navy">{item.title}</h3>
            <p className="daily-card-readable mt-3 text-sm leading-7 text-muted">{item.description}</p>
          </TrackedLink>
        ))}
      </div>
    </section>
  );
}
