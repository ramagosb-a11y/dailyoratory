import { redirect } from "next/navigation";

export default function DailyReflectionsPage() {
  redirect("/reflections/mass-readings?type=daily-mass");
}
