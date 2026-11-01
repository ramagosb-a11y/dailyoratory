import { TrackedLink } from "@/components/analytics/TrackedLink";
import { SectionHeader } from "@/components/section-header";
import { getVaticanVirtualTours } from "@/lib/vatican";
import Image from "next/image";
import { vaticanPhotos } from "./VaticanPhotos";
import styles from "./VaticanPage.module.css";

export function VaticanVirtualTours() {
  const tours = getVaticanVirtualTours();

  return (
    <section id="virtual-tours">
      <SectionHeader
        eyebrow="Virtual tours"
        title="Virtual Tours of the Vatican"
        summary="If you cannot travel, official Vatican tours can still become a prayerful doorway into the Church's history, beauty, and worship."
      />
      <div className={styles.tourGrid}>
        {tours.map((tour) => {
          const photo = vaticanPhotos[tour.id === "st-peters-vr-tour" ? "basilicaInterior" : tour.category === "sistine-chapel" ? "sistine" : tour.category === "museum" ? "museums" : "basilica"];
          return (
          <article key={tour.id} className={styles.tourCard}>
            <div className={`${styles.tourArt} ${tour.category === "sistine-chapel" ? styles.ceilingArt : ""}`}><Image src={photo.src} alt={photo.alt} fill quality={85} sizes="(max-width: 767px) 100vw, (max-width: 1376px) 50vw, 650px" /></div>
            <div className={styles.tourBody}>
            <p className={styles.tourLabel}>
              {tour.official ? "Official Vatican source" : "External resource"}
            </p>
            <h3 className="font-display mt-2 text-2xl font-semibold text-navy">{tour.title}</h3>
            <p className={styles.tourDescription}>{tour.description}</p>
            <TrackedLink
              href={tour.url}
              external
              className="btn liturgical-button focus-ring mt-5 justify-center"
              eventName="vatican_virtual_tour_click"
              eventParams={{ resource_name: tour.title, page_path: "/vatican", section: "vatican-virtual-tours" }}
            >
              Begin a Virtual Pilgrimage
            </TrackedLink>
            </div>
          </article>
        );})}
      </div>
    </section>
  );
}
