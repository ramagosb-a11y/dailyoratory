import { TrackedLink } from "@/components/analytics/TrackedLink";

export function EpiphanyHouseBlessingSection() {
  return (
    <section id="house-blessing" className="card-parchment scroll-mt-24 p-6 sm:p-8">
      <h2 className="font-display text-4xl font-semibold text-navy">Bless Your Home at Epiphany</h2>
      <p className="daily-readable mt-5 text-base leading-8 text-muted">
        A beloved Epiphany tradition is the blessing of homes, asking Christ to dwell in the household and guide all
        who enter. Many families mark the doorway with blessed chalk as a reminder that the home belongs to Christ.
      </p>
      <div className="dashboard-card mt-6 p-5 sm:p-6">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">Chalk inscription example</p>
        <p className="font-display mt-3 text-3xl font-semibold text-navy">20 + C + M + B + 26</p>
        <p className="daily-card-readable mt-4 text-base leading-7 text-muted">
          The numbers mark the year. The letters can recall the traditional names of the Magi — Caspar, Melchior, and
          Balthazar — and are also commonly associated with the Latin prayer <em>Christus Mansionem Benedicat</em>,
          meaning “May Christ bless this house.”
        </p>
      </div>
      <p className="daily-readable-muted mt-5 text-base leading-8 text-muted">
        If your parish offers blessed chalk or an Epiphany home blessing, follow your local parish or diocesan custom.
      </p>
      <div className="mt-6">
        <TrackedLink
          href="/liturgical-living/christmas/epiphany/house-blessing"
          eventName="epiphany_resource_click"
          eventParams={{ section: "house-blessing", destination: "house-blessing-guide" }}
          className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center"
        >
          Open House Blessing Guide
        </TrackedLink>
      </div>
    </section>
  );
}
