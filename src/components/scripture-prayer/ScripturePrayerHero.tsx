export function ScripturePrayerHero() {
  return (
    <section className="rounded-md border border-stone bg-navy px-6 py-8 text-ivory shadow-soft sm:px-8 sm:py-10">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold">Daily Oratory</p>
      <h1 className="font-display mt-3 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">Scripture Prayer</h1>
      <h2 className="font-display mt-3 max-w-4xl text-3xl font-semibold leading-tight text-parchment sm:text-4xl">
        Pray with the Word of God
      </h2>
      <p className="mt-5 max-w-3xl text-base leading-8 text-parchment">
        Sacred Scripture is not merely information to study. It is the living Word of God,
        proclaimed in the Church, prayed in the liturgy, and received in the heart.
      </p>
      <p className="mt-5 max-w-3xl text-sm leading-7 text-stone-soft">
        Daily Oratory helps you pray with Scripture and links to trusted Bible resources. If you are
        new to Catholic prayer, this page can help you learn how the Church reads Scripture with
        reverence, listening, and trust in the Holy Spirit.
      </p>
      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <a href="https://bible.usccb.org/bible" target="_blank" rel="noopener noreferrer" className="btn btn-gold focus-ring justify-center">
          Read the USCCB Bible
        </a>
        <a href="https://bible.usccb.org/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-inverse focus-ring justify-center">
          Pray Today&apos;s Readings
        </a>
        <a href="#scripture-builder" className="btn btn-outline-inverse focus-ring justify-center">
          Start a 30-Minute Scripture Prayer
        </a>
      </div>
    </section>
  );
}
