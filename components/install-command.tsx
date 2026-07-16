// components/install-command.tsx
"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function InstallCommand({ name }: { name: string }) {
  const [copied, setCopied] = useState(false);
  const command = `pnpm dlx shadcn@latest add https://5-ui-components-szn.vercel.app/r/${name}.json`;

  function copy() {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="flex items-center justify-between gap-3 rounded-lg border border-border bg-muted/40 px-4 py-2.5">
      <code className="truncate text-xs text-muted-foreground sm:text-sm">
        {command}
      </code>
      <button
        onClick={copy}
        className="shrink-0 text-muted-foreground transition hover:text-foreground"
        aria-label="Copy command"
      >
        {copied ? (
          <Check className="h-4 w-4 text-emerald-500" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </button>
    </div>
  );
}
