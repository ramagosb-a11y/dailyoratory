import { ConfessionReportCta } from "@/components/confession/ConfessionReportCta";
import { LastConfessionDateControl } from "@/components/confession/guided-examination/LastConfessionDateControl";

export function ExaminationTopPanel() {
  return (
    <div className="grid gap-4">
      <LastConfessionDateControl />
      <ConfessionReportCta />
    </div>
  );
}
