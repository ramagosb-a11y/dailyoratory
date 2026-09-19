# Remove sideways swipe navigation
Date: 2026-09-19. Feature ID: remove-sideways-swipe.
Owner request: "review the site and remove all swipe sideways options ... causing too many mistakes on mobile and lose my place in prayer."
Status: approved for local implementation by this concrete request; no deployment authorization.
Goal: touch movement while reading must not advance/rewind prayer or change navigation selections.

Discovery found three explicit touch-driven prayer flows: MorningPrayerExperience, NightPrayerExperience and contemplative-litanies/PrayerExperience. Also review option rails/carousels in litanies, featured media, Adoration companion, Visual Rosary, fasting retreats and Sacred Hours.

Stages: Lead/repository inspection, UX/accessibility and engineering required. Privacy review limited to preserving existing state and preventing test telemetry. Theology/source research not applicable: prayer wording/order remain untouched. SEO not applicable: no route/metadata/link changes. Independent repository/UX and final code review assigned to swipe_review subagent. Owner validates locally after implementation.
