import { IndulgenceSection } from "@/components/indulgences/helpers";

export function YearOfSaintFrancisIndulgenceGuide() {
  return (
    <IndulgenceSection id="year-of-saint-francis-2026" eyebrow="Dated special grant" title="The Year of Saint Francis" summary="January 10, 2026–January 10, 2027. A pastoral summary of the Apostolic Penitentiary’s decree; consult the full text for authoritative details.">
      <div className="border-l-2 border-gold pl-5 text-base leading-8 text-muted">
        <p>The decree grants a plenary indulgence under the usual conditions of sacramental Confession, Eucharistic Communion, and prayer for the Pope’s intentions, with detachment from sin. It may also be applied in suffrage for the souls in Purgatory.</p>
        <p className="mt-4">The pilgrimage provision is open to all the faithful: visit a Franciscan conventual church or a place of worship dedicated or connected to Saint Francis. There, devoutly participate in the Jubilee rites or spend a suitable time in pious meditation; pray for Christian charity, concord, and peace, concluding with the Our Father, Creed, and invocations to Mary, Saint Francis, Saint Clare, and all the saints of the Franciscan family.</p>
        <p className="mt-4">The elderly, the sick, their carers, and those unable to leave home for a serious reason may unite spiritually with the Jubilee celebrations, offering prayers, suffering, or hardships. This requires detachment from all sin and the intention to fulfill the three usual conditions as soon as possible.</p>
        <a href="https://press.vatican.va/content/salastampa/it/bollettino/pubblico/2026/01/16/0041/00081.html" target="_blank" rel="noopener noreferrer" className="text-link focus-ring mt-5 inline-flex">Read the official decree (Italian)</a>
      </div>
    </IndulgenceSection>
  );
}
