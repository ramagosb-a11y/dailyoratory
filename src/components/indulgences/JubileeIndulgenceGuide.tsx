import { IndulgenceSection } from "@/components/indulgences/helpers";

export function JubileeIndulgenceGuide() {
  return (
    <IndulgenceSection id="jubilee-2025" eyebrow="Historical reference" title="2025 Jubilee: Pilgrims of Hope" summary="The Ordinary Jubilee of 2025 has concluded. Its special grant is retained here for historical reference, rather than as a current opportunity.">
      <p className="text-base leading-8 text-muted">The 2025 decree described pilgrimage, sacred visits, and works of mercy and penance during that Jubilee. These historical provisions do not extend its dates. For present practice, consult the Church’s standing norms and any currently valid special decree.</p>
      <a href="https://press.vatican.va/content/salastampa/en/bollettino/pubblico/2024/05/13/240513f.html" target="_blank" rel="noopener noreferrer" className="text-link focus-ring mt-5 inline-flex">Read the 2025 Vatican decree</a>
    </IndulgenceSection>
  );
}
