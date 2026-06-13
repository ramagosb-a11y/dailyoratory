import { redirect } from "next/navigation";

export default function SundayReflectionsPage() {
  redirect("/reflections/mass-readings?type=sunday-mass");
}
