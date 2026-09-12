const cards = [
  ["The whole assembly", "By baptism, the faithful gather as one worshipping body: listening, responding, singing, keeping silence, interceding, and offering their lives with Christ. Full participation is attentive and prayerful; it does not require a visible ministry."],
  ["Readers, psalmists, and music ministers", "Lectors proclaim the readings, psalmists lead the response, and cantors or choirs support the people’s sung prayer. These ministries serve the Word and the assembly rather than drawing attention to themselves."],
  ["Servers, sacristans, and hospitality", "Altar servers, sacristans, ushers, and greeters help the liturgy unfold with reverence and welcome. Their service supports the prayer of the whole Church."],
  ["Holy Communion", "A properly disposed Catholic receives Christ’s Body and Blood as a gift of grace. Those not receiving are still fully welcome to pray, make a spiritual communion, and remain united to the Church’s worship."],
  ["Extraordinary ministers of Holy Communion", "When a genuine pastoral need exists, lay people may be deputed to assist with Holy Communion. This service is extraordinary by nature and distinct from the ordained priest’s sacramental ministry."],
  ["Grace for daily life", "The Eucharist deepens communion with Christ and His Church, strengthens charity, forgives venial sin, and sends the faithful to live the Gospel in family life, work, service, and mission."],
];

export function ParticipateAtMassGuide() {
  return (
    <section id="lay-faithful" className="scroll-mt-28 border-t border-stone/70 pt-10">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">The lay faithful at Mass</p>
      <h2 className="mt-2 font-display text-4xl font-semibold text-navy sm:text-5xl">
        Participation, ministries, and grace
      </h2>
      <p className="mt-4 max-w-4xl text-base leading-8 text-muted">Christ is the source of every grace in the liturgy. The baptized share in the Church’s worship according to their state in life and role, with reverence for the distinct service of the ordained priest and deacon.</p>
      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {cards.map(([title, description]) => (
          <article key={title} className="card p-6">
            <h3 className="font-display text-2xl font-semibold text-navy">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">
              {description}
            </p>
          </article>
        ))}
      </div>
      <p className="mt-6 max-w-4xl text-sm leading-7 text-muted">Follow the posture and ministry guidance of your parish and diocese. Age, health, disability, caregiving, and personal circumstances can affect how one participates; attentive prayer remains real participation.</p>
    </section>
  );
}
