export function DailyCatholicNews() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
      <div className="grid gap-6 rounded-md border border-stone bg-parchment p-5 shadow-soft sm:p-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-xs font-bold uppercase text-burgundy">Daily Catholic news</p>
          <h2 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
            Read Catholic headlines with a prayerful heart.
          </h2>
        </div>
        <div>
          <p className="text-sm leading-7 text-muted">
            For a wider view of Catholic headlines, spiritual reflections, and daily news, visit Spirit Daily in a
            separate tab. Return to Daily Oratory for prayer, reflection, and devotion.
          </p>
          <a
            href="https://www.spiritdaily.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary focus-ring mt-5 w-full justify-center sm:w-auto"
            aria-label="Visit Spirit Daily for daily Catholic news, opens in a new tab"
          >
            Open Spirit Daily
          </a>
        </div>
      </div>
    </section>
  );
}

