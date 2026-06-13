import { heavenboundGptUrl } from "@/data/heavenboundPaths";

export function OpenHeavenboundButton({
  className = "btn btn-primary focus-ring",
  label = "Open Heavenbound",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <a href={heavenboundGptUrl} target="_blank" rel="noopener noreferrer" className={className}>
      {label}
    </a>
  );
}
