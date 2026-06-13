import { SectionHeader } from "@/components/section-header";

const creationCards = [
  { title: "Visible creation", description: "The material world we can see, touch, and study." },
  { title: "Invisible creation", description: "Spiritual creatures and realities beyond bodily sight." },
  { title: "Humanity", description: "Human beings are body and soul, made for communion with God." },
  { title: "Angels", description: "Pure spirits created by God for His glory and service." },
  { title: "Christ", description: "Lord of all creation, visible and invisible." },
];

export function AngelsInCreation() {
  return (
    <section>
      <SectionHeader
        eyebrow="Creation"
        title="Angels in Creation"
        summary="The Creed speaks of God as maker of heaven and earth, of all things visible and invisible. Angels belong to the invisible creation. They remind us that reality is larger than what we can see."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {creationCards.map((card) => (
          <article key={card.title} className="card-parchment p-5">
            <h3 className="font-display text-2xl font-semibold text-navy">{card.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{card.description}</p>
          </article>
        ))}
      </div>
      <div className="card-parchment mt-6 p-5">
        <p className="text-sm leading-7 text-muted">
          Belief in angels should increase wonder, humility, and trust in God's providence.
        </p>
      </div>
    </section>
  );
}
