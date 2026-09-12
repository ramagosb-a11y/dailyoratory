import { MassFullGuide, metadata } from "@/components/mass/MassFullGuide";
import { MassJourneyShell } from "@/components/mass/MassJourneyShell";
import { MassLesson } from "@/components/mass/MassLesson";
import { massJourneySteps, massChapters } from "@/data/massJourney";
export { metadata };
export default function MassPage() {
    return <MassJourneyShell chapters={massChapters} steps={massJourneySteps.map(({ id, title, chapter, artwork }) => ({ id, title, chapter, artwork }))} lessons={massJourneySteps.map(lesson => <MassLesson key={lesson.id} lesson={lesson}/>)} guide={<MassFullGuide />}/>;
}
