export function NewsletterSignup() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
      <div className="dashboard-card p-6">
        <p className="text-xs font-bold uppercase text-burgundy">Updates</p>
        <h2 className="font-display mt-2 text-4xl font-semibold text-navy sm:text-5xl">
          Receive seasonal prayer and formation updates.
        </h2>
        <form className="mt-6 grid gap-3 sm:grid-cols-[1fr_auto]">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="Email address"
            className="form-field focus-ring"
          />
          <button
            type="button"
            className="btn btn-primary focus-ring"
          >
            Sign Up
          </button>
        </form>
        <p className="form-helper mt-3">Placeholder form. Connect to email service later.</p>
      </div>
    </section>
  );
}
