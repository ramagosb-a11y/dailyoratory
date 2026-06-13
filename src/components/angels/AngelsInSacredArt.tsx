import { SectionHeader } from "@/components/section-header";

const artCards = [
  { title: "Wings symbolize swift service", description: "Wings in sacred art help express readiness, obedience, and heavenly service." },
  { title: "Light symbolizes heavenly glory", description: "Light points to God's holiness and the splendor of the heavenly court." },
  { title: "Instruments symbolize worship", description: "Musical imagery helps artists portray praise before God." },
  { title: "Armor symbolizes spiritual protection", description: "Armor reminds believers of divine strength and spiritual vigilance." },
  { title: "Human form teaches invisible realities", description: "Artists often use human form so the faithful can contemplate spiritual realities." },
];

export function AngelsInSacredArt() {
  return (
    <section>
      <SectionHeader
        eyebrow="Sacred art"
        title="Angels in Sacred Art"
        summary="Sacred art often depicts angels with wings, light, or human-like forms. These images help us imagine spiritual realities, but angels are pure spirits and do not have bodies like humans."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {artCards.map((card) => (
          <article key={card.title} className="card-parchment p-5">
            <h3 className="font-display text-2xl font-semibold text-navy">{card.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{card.description}</p>
          </article>
        ))}
      </div>
      <p className="mt-6 text-sm leading-7 text-muted">Use original, licensed, or public-domain images only.</p>
    </section>
  );
}
