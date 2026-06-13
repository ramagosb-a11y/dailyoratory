"use client";

import { useState } from "react";
import { getHeavenboundPromptUrl } from "@/lib/heavenbound";
import type { HeavenboundPath } from "@/types/heavenbound";

type PromptKind = "starter" | "advanced";

type HeavenboundPromptLauncherProps = {
  path: HeavenboundPath;
  promptKind?: PromptKind;
  className?: string;
  label?: string;
  copiedLabel?: string;
  ariaLabel?: string;
};

function getPrompt(path: HeavenboundPath, promptKind: PromptKind) {
  return promptKind === "advanced" ? path.advancedPrompt : path.starterPrompt;
}

async function copyText(text: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.setAttribute("readonly", "");
  textArea.style.position = "fixed";
  textArea.style.left = "-9999px";
  document.body.appendChild(textArea);
  textArea.select();

  try {
    document.execCommand("copy");
  } finally {
    document.body.removeChild(textArea);
  }
}

export function HeavenboundPromptLauncher({
  path,
  promptKind = "starter",
  className = "btn btn-primary focus-ring justify-center",
  label = "Start in Heavenbound",
  copiedLabel = "Prompt copied",
  ariaLabel,
}: HeavenboundPromptLauncherProps) {
  const [copied, setCopied] = useState(false);
  const prompt = getPrompt(path, promptKind);

  function handleClick() {
    void copyText(prompt)
      .then(() => {
        setCopied(true);
        window.setTimeout(() => setCopied(false), 2500);
      })
      .catch(() => setCopied(false));
  }

  return (
    <a
      href={getHeavenboundPromptUrl(prompt)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={ariaLabel ?? `${label}: ${path.title}`}
      onClick={handleClick}
    >
      {copied ? copiedLabel : label}
    </a>
  );
}
