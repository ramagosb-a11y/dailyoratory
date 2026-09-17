import type { RetreatBlock } from "@/content/fasting-retreat";
import s from "./retreat.module.css";

function isSubheading(block: RetreatBlock) {
  return block.kind === "heading" || (block.text.length < 40 && !/[.!?:;]/.test(block.text));
}

function isResponse(text: string) {
  return /^(Amen\.?|Jesus[,!]|Come[,!]|Holy Spirit[,!]|O Jesus[,!]|Through the prayers)/i.test(text.trim());
}

export function RetreatPrayerPanel({ blocks }: { blocks: RetreatBlock[] }) {
  return (
    <section className={s.prayerPanel} aria-label="Prayer">
      <span className={s.eyebrow}>Prayer</span>
      <div className={s.prayerPanelBody}>
        {blocks.map((block, index) => {
          if (isSubheading(block)) {
            return <h2 key={`${block.text}-${index}`}>{block.text}</h2>;
          }

          return block.text
            .split(/\n\s*\n/)
            .map((paragraph, paragraphIndex) => paragraph.trim())
            .filter(Boolean)
            .map((paragraph, paragraphIndex) => (
              <p
                key={`${block.text}-${index}-${paragraphIndex}`}
                className={isResponse(paragraph) ? s.prayerResponse : undefined}
              >
                {paragraph}
              </p>
            ));
        })}
      </div>
    </section>
  );
}
