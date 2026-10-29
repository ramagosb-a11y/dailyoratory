import Image from "next/image";
import type { ArmorId } from "@/types/armorOfGod";
import styles from "./ArmorOfGod.module.css";

type ArmorPhotoId = ArmorId | "armor-chapel" | "shield-scripture";
const imageDescriptions: Record<ArmorPhotoId, string> = {
  "armor-chapel": "Roman-inspired breastplate, helmet, shield, belt, sandals and resting sword in warm chapel light",
  "shield-scripture": "A bronze cross-marked shield beside an open Bible in a quiet stone chapel",
  belt: "A worn leather belt with a bronze buckle resting on dark linen",
  breastplate: "A bronze Roman-inspired breastplate resting in warm chapel light",
  shoes: "A pair of simple leather sandals on a stone chapel bench",
  shield: "An oval bronze-and-leather shield with a simple cross",
  helmet: "A bronze Roman-inspired helmet with cheek guards on dark linen",
  sword: "A short Roman-inspired sword lying beside its leather scabbard",
};

export function ArmorPhoto({ subject, hero = false, decorative = false, thumbnail = false }: { subject: ArmorPhotoId; hero?: boolean; decorative?: boolean; thumbnail?: boolean }) {
  return <div className={`${styles.photoFrame} ${hero ? styles.heroPhoto : ""}`}>
    <Image
      src={`/images/armor-of-god/${subject}.webp`}
      alt={decorative ? "" : imageDescriptions[subject]}
      width={subject === "armor-chapel" ? 1536 : 1050}
      height={subject === "armor-chapel" ? 1024 : 700}
      sizes={thumbnail ? "(max-width: 680px) 120px, (max-width: 1000px) 45vw, 280px" : hero ? "(max-width: 680px) 100vw, (max-width: 1000px) 48vw, 620px" : "(max-width: 680px) 100vw, 560px"}
      preload={hero}
    />
  </div>;
}
