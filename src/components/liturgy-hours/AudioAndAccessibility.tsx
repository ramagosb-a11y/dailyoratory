export function AudioAndAccessibility() {
  const guidance = [
    "Listen and follow along",
    "Pray aloud if possible",
    "Pause for silence",
    "Do not rush",
    "Return daily and let the rhythm teach you",
  ];

  return (
    <section className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
      <div className="card p-6">
        <p className="text-xs font-bold uppercase text-burgundy">Reading or listening</p>
        <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
          Pray by reading or listening
        </h2>
        <p className="mt-4 text-sm leading-7 text-muted">
          Many people learn the Liturgy of the Hours by listening first. Audio can help beginners
          follow the rhythm, pronunciation, pauses, hymns, and responses.
        </p>
        <p className="mt-4 text-sm leading-7 text-muted">
          DivineOffice.org provides text and audio options where available. Listening prayerfully
          can be a real help, especially when the structure still feels unfamiliar.
        </p>
      </div>
      <div className="card p-6">
        <div className="space-y-3">
          {guidance.map((item) => (
            <div key={item} className="rounded-md border border-stone/70 bg-parchment px-4 py-3">
              <p className="text-sm leading-7 text-muted">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
