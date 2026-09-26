import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ActiveEraOutline } from "@/components/life-of-jesus/ActiveEraOutline";
import { eraAnchorId, LifeOfJesusTimeline } from "@/components/life-of-jesus/LifeOfJesusTimeline";
import { StructuredDataScript } from "@/components/seo/StructuredDataScript";
import { PageEyebrow, PageSubtitle, PageTitle } from "@/components/ui/Typography";
import { lifeOfJesusChapters, lifeOfJesusEras, lifeOfJesusStops } from "@/data/lifeOfJesus";
import { lifeOfJesusAsset } from "@/data/lifeOfJesusVisuals";
import { createPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbList, buildWebPageStructuredData } from "@/lib/structuredData";

const title = "The Life of Jesus Christ Timeline | A Pilgrim’s Path";
const description =
  "Walk through the life of Jesus Christ from the promises and Incarnation to the Cross, Resurrection, and Ascension, with exact Gospel references and public-domain Douay–Rheims devotional reading.";

const baseMetadata = createPageMetadata({
  title,
  description,
  path: "/life-of-jesus",
  keywords: [
    "life of Jesus",
    "Jesus timeline",
    "Gospel harmony",
    "chronology of Jesus",
    "Douay–Rheims Bible",
    "Catholic Scripture study",
  ],
});

export const metadata: Metadata = {
  ...baseMetadata,
  openGraph: {
    ...baseMetadata.openGraph,
    title,
    description,
  },
  twitter: {
    ...baseMetadata.twitter,
    title,
    description,
  },
};

export default function LifeOfJesusPage() {
  const outline = lifeOfJesusEras.map((era) => ({ id: eraAnchorId(era), label: era.title }));
  const heroAsset = lifeOfJesusAsset("hero-galilee");

  return (
    <div className="life-jesus-page paper-texture">
      <main className="mx-auto w-full max-w-[90rem] px-5 py-10 sm:px-8 lg:px-10">
        <StructuredDataScript
          data={[
            buildWebPageStructuredData({ name: title, description, path: "/life-of-jesus" }),
            buildBreadcrumbList([
              { name: "Learn", path: "/learn" },
              { name: "Life of Jesus", path: "/life-of-jesus" },
            ]),
          ]}
        />

        <Breadcrumbs items={[{ label: "Learn", href: "/learn" }, { label: "Life of Jesus" }]} />

        <header className="life-jesus-hero">
          <div className="life-jesus-hero-image" aria-hidden="true">
            {heroAsset ? (
              <Image
                src={heroAsset.src}
                alt=""
                fill
                loading="eager"
                sizes="100vw"
                className="object-cover"
                style={{ objectPosition: heroAsset.focalPosition ?? "center" }}
              />
            ) : null}
          </div>
          <div className="life-jesus-hero-copy">
            <PageEyebrow>A Pilgrim’s Path through the Gospels</PageEyebrow>
            <PageTitle>The Life of Jesus Christ</PageTitle>
            <div className="life-jesus-hero-actions">
              <a href="#era-life-jesus-era-1" className="btn btn-primary focus-ring">Begin the journey <span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <div className="life-jesus-hero-route" aria-hidden="true" />
        </header>

        <div className="life-jesus-hero-intro">
          <p className="life-jesus-hero-caption">{heroAsset?.caption}</p>
          <PageSubtitle className="life-jesus-hero-deck">
            Walk the Gospel road with Jesus—from the promises of salvation and the Incarnation to the Cross,
            Resurrection, and Ascension. Each stop preserves its exact Scripture book, chapter, and verse range, with
            public-domain Douay–Rheims devotional reading in every Scripture box.
          </PageSubtitle>
          <p className="life-jesus-independent-note">
            Daily Oratory is an independent Catholic resource. The Douay–Rheims reading is devotional material and
            is not an official liturgical edition or ecclesial endorsement.
          </p>
        </div>

        <details id="life-of-jesus-journey" className="life-jesus-journey-shell">
          <summary className="life-jesus-journey-toggle focus-ring">
            <span className="life-jesus-journey-toggle-copy">
              <small>Explore the complete path</small>
              <strong>Journey through the life of Jesus</strong>
              <span>15 eras · {lifeOfJesusChapters.length} chapters · {lifeOfJesusStops.length} pilgrimage stops</span>
            </span>
            <span className="life-jesus-journey-visuals" aria-hidden="true">
              {(["era-2-nativity", "era-12-calvary", "era-14-tomb"] as const).map((assetId) => {
                const asset = lifeOfJesusAsset(assetId);
                return asset ? (
                  <span key={assetId} className="life-jesus-journey-visual" style={{ position: "relative" }}>
                    <Image src={asset.src} alt="" fill sizes="(min-width: 900px) 16vw, 33vw" className="object-cover" />
                  </span>
                ) : null;
              })}
            </span>
            <span className="life-jesus-journey-toggle-action" aria-hidden="true" />
          </summary>
          <details className="life-jesus-method">
            <summary className="life-jesus-method-toggle focus-ring">
              <span>
                <small>Before you read</small>
                <strong>How this path handles chronology and sources</strong>
              </span>
              <span className="life-jesus-method-toggle-action" aria-hidden="true" />
            </summary>
            <div className="life-jesus-method-body">
              <section className="life-jesus-reading-note" aria-labelledby="life-jesus-reading-note-title">
                <div>
                  <p className="life-jesus-note-kicker">How to read this path</p>
                  <h2 id="life-jesus-reading-note-title" className="font-display">
                    A faithful guide, not a claim of exact chronology
                  </h2>
                </div>
                <div>
                  <p>
                    The Gospels proclaim one Lord but do not always arrange every teaching, journey, and appearance in the
                    same order. This path distinguishes explicit sequence, traditional harmony, and unresolved order.
                  </p>
                  <p>
                    Each stop preserves the exact Scripture book, chapter, and verse range from the reviewed source model. The
                    accompanying reading uses locally bundled text from the public-domain Douay–Rheims American Edition of
                    1899. Numbering differences are identified beside their passages. Daily Oratory does not reproduce
                    NABRE or other modern copyrighted Bible text.
                  </p>
                  <p>
                    Jesus, Mary, the apostles, and the first disciples were Jewish. References to particular leaders or groups
                    in the Passion narratives must never be read as blame directed toward the Jewish people as a whole.
                  </p>
                </div>
              </section>
              <section className="life-jesus-legend" aria-labelledby="life-jesus-legend-title">
                <h2 id="life-jesus-legend-title" className="font-display">
                  Chronology guide
                </h2>
                <ul>
                  <li><strong>Sequence stated in Scripture</strong><span>The text supplies the order.</span></li>
                  <li><strong>Strong chronological inference</strong><span>The order follows close textual evidence.</span></li>
                  <li><strong>Traditional Gospel-harmony placement</strong><span>A received arrangement, not an explicit date.</span></li>
                  <li><strong>Order remains uncertain</strong><span>The sources allow more than one placement.</span></li>
                </ul>
              </section>
            </div>
          </details>
          <div id="life-of-jesus-eras" className="life-jesus-layout">
            <ActiveEraOutline eras={outline} />
            <LifeOfJesusTimeline eras={lifeOfJesusEras} />
          </div>
          <footer className="life-jesus-page-footer">
            <p>
              Scripture references retain the exact reviewed book, chapter, and verse range. The optional Douay–Rheims
              reading boxes contain the full cited text from the public-domain 1899 American Edition, with an eBible.org
              source link for each passage. The original citation URLs remain in the internal data model for audit
              continuity but are not exposed as reader-facing links on this page.
            </p>
            <a href="#life-of-jesus-eras" className="focus-ring">Return to the journey outline ↑</a>
          </footer>
        </details>
      </main>
    </div>
  );
}
