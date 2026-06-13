export function PrayerIntentionPrivacyNotice() {
  return (
    <div className="dashboard-card p-5">
      <p className="text-xs font-bold uppercase text-burgundy">Privacy and moderation</p>
      <h2 className="font-display mt-2 text-3xl font-semibold leading-tight text-navy">Share with care.</h2>
      <div className="mt-4 grid gap-3 text-sm leading-7 text-muted">
        <p>
          Do not include full names, addresses, phone numbers, private medical details, or anything that would identify
          someone who has not consented.
        </p>
        <p>
          New submissions are saved locally in this mock version and should be treated as pending review. Real public
          publishing should require human moderation.
        </p>
      </div>
    </div>
  );
}

export function PrayerIntentionEmergencyNotice() {
  return (
    <div className="rounded-md border border-burgundy/30 bg-burgundy/10 p-4 text-sm leading-7 text-navy">
      <p className="font-bold text-burgundy">Emergency note</p>
      <p className="mt-1">
        Daily Oratory is not an emergency service. If someone may be in immediate danger, contact local emergency
        services, a crisis line, a trusted person nearby, or appropriate parish or professional help.
      </p>
    </div>
  );
}
