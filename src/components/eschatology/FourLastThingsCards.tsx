import { TrackedLink } from "@/components/analytics/TrackedLink";

const lastThings = [
  {
    title: "Death",
    description:
      "Death is the end of earthly life, but in Christ it becomes a passage toward eternal life. The Christian prepares for death through faith, repentance, the sacraments, charity, and hope.",
    href: "/formation/eschatology/death",
  },
  {
    title: "Judgment",
    description:
      "Catholic teaching distinguishes the Particular Judgment after death and the Final Judgment at the end of time. Judgment reveals the truth of each life in the light of God's justice and mercy.",
    href: "/formation/eschatology/judgment",
  },
  {
    title: "Heaven",
    description:
      "Heaven is perfect communion with God, the angels, and the saints. It is the fulfillment of the deepest human longing: seeing God face to face in the Beatific Vision.",
    href: "/formation/eschatology/heaven",
  },
  {
    title: "Hell",
    description:
      "Hell is eternal separation from God, freely chosen by definitive rejection of His mercy. The Church teaches this reality soberly to call souls to repentance, not despair.",
    href: "/formation/eschatology/hell",
  },
] as const;

export function FourLastThingsCards() {
  return (
    <section id="last-things" className="scroll-mt-28">
      <h2 className="font-display text-4xl font-semibold text-navy">The Four Last Things</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {lastThings.map((item) => (
          <article key={item.title} className="card-parchment p-6 sm:p-8">
            <h3 className="font-display text-3xl font-semibold text-navy">{item.title}</h3>
            <p className="daily-readable mt-4 text-base leading-8 text-muted">{item.description}</p>
            <div className="mt-6">
              <TrackedLink
                href={item.href}
                eventName="eschatology_topic_open"
                eventParams={{ section: "four-last-things", destination: item.href }}
                className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center"
              >
                Learn About {item.title}
              </TrackedLink>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
