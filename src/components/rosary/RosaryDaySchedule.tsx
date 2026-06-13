"use client";

import { useState } from "react";
import { RosaryCard, RosaryCardGrid, RosarySection } from "@/components/rosary/RosaryUi";
import { getTraditionalRosaryDaySchedule } from "@/lib/rosary";

export function RosaryDaySchedule() {
  const schedule = getTraditionalRosaryDaySchedule();
  const [today] = useState(() =>
    new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      timeZone: "America/Chicago",
    }).format(new Date()),
  );

  return (
    <RosarySection
      eyebrow="Daily rhythm"
      title="Which Mysteries Do I Pray Today?"
      summary="The traditional weekday pattern gives the Rosary a steady rhythm across the week."
    >
      <RosaryCardGrid columns="sm:grid-cols-2 xl:grid-cols-4">
        {schedule.map((entry) => (
          <RosaryCard
            key={entry.day}
            title={entry.day}
            description={entry.title}
            meta={entry.day === today ? "Today" : undefined}
            accent={
              entry.groupSlug === "joyful-mysteries"
                ? "joyful"
                : entry.groupSlug === "luminous-mysteries"
                  ? "luminous"
                  : entry.groupSlug === "sorrowful-mysteries"
                    ? "sorrowful"
                    : "glorious"
            }
            className="h-full"
          >
            {entry.note ? <p className="text-sm leading-7 text-muted">{entry.note}</p> : null}
          </RosaryCard>
        ))}
      </RosaryCardGrid>
    </RosarySection>
  );
}
