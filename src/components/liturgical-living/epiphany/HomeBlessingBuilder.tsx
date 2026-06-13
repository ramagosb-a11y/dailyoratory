"use client";

import { LocalPlanToolShell } from "@/components/sin-and-temptation/LocalPlanToolShell";

function buildChalkInscription(year: string) {
  const trimmed = year.replace(/\D/g, "");
  const twoDigitYear = trimmed.length >= 2 ? trimmed.slice(-2) : "26";
  const century = trimmed.length >= 4 ? trimmed.slice(0, 2) : "20";
  return `${century} + C + M + B + ${twoDigitYear}`;
}

export function HomeBlessingBuilder() {
  return (
    <LocalPlanToolShell
      eyebrow="Home blessing tool"
      title="Build Your Epiphany Home Blessing Plan"
      summary="Create a simple family Epiphany blessing plan with a chalk inscription, prayer intentions, room prompts, and a closing prayer. This is for family prayer and does not replace a liturgical blessing from a priest or deacon."
      storageKey="epiphany-home-blessing-plan"
      copyEventName="house_blessing_plan_copy"
      printEventName="house_blessing_plan_print"
      fields={[
        { id: "year", label: "Year", placeholder: "2026", multiline: false },
        { id: "householdName", label: "Household name", placeholder: "The family or household name", multiline: false },
        { id: "homeIntention", label: "Main intention for the home", placeholder: "Peace, healing, reconciliation, deeper prayer..." },
        { id: "rooms", label: "Rooms to pray over", placeholder: "Entryway, kitchen, bedrooms, living room..." },
        { id: "peopleToPrayFor", label: "People to pray for", placeholder: "Family members, guests, the sick, loved ones..." },
        { id: "giftToOfferChrist", label: "Chosen gift to offer Christ this year", placeholder: "A concrete offering of prayer, charity, sacrifice, or faithfulness" },
      ]}
      initialValues={{
        year: "2026",
        householdName: "",
        homeIntention: "",
        rooms: "",
        peopleToPrayFor: "",
        giftToOfferChrist: "",
      }}
      buildCopyText={(values) => {
        const year = values.year || "2026";
        const householdName = values.householdName || "This household";
        const intention = values.homeIntention || "peace, prayer, and deeper faith";
        const rooms = values.rooms || "entryway, main room, bedrooms, and places of work or study";
        const people = values.peopleToPrayFor || "all who live here and all who enter this home";
        const gift = values.giftToOfferChrist || "a humble gift of prayer, charity, and renewed faith";
        return `Epiphany Home Blessing Plan

Household: ${householdName}
Year: ${year}
Chalk inscription: ${buildChalkInscription(year)}

Opening Prayer:
Lord Jesus Christ, Light of the nations, bless this home. As You led the Magi by the star, lead this household in peace, truth, charity, and faithfulness. Dwell with us and guide all who enter here. Amen.

Family Intention:
We ask Christ to bless this home especially for: ${intention}

People to Pray For:
${people}

Rooms to Pray Over:
${rooms}

Gift to Offer Christ This Year:
${gift}

Room Blessing Prompts:
- At the doorway, ask Christ to bless all who enter and leave in peace.
- In the main room, pray for charity, hospitality, and truthful speech.
- In the kitchen or dining area, thank God for daily bread and shared life.
- In bedrooms, ask for rest, purity, healing, and protection.
- In work or study spaces, pray for wisdom, diligence, and integrity.
- In places of sorrow or strain, ask Christ to bring reconciliation and hope.

Closing Prayer:
Jesus, King and Savior, reign in this home. May Your light guard us, Your peace dwell with us, and Your grace send us forth by a new road of conversion and love. Amen.`;
      }}
    />
  );
}
