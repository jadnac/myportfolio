"use client";

import { useState } from "react";
import type { ExperienceItem as ExperienceItemType } from "@/lib/data";

export function ExperienceItem({ item }: { item: ExperienceItemType }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border last:border-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <div>
          <h3 className="text-base font-medium text-ink">{item.company}</h3>
          <p className="text-sm text-muted">{item.role}</p>
        </div>
        <div className="flex shrink-0 items-center gap-3">
          <span className="font-mono text-xs text-accent">{item.period}</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className={`shrink-0 text-muted transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </button>

      <div className={`grid transition-all duration-300 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <ul className={`space-y-2 pb-6 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}>
            {item.highlights.map((h) => (
              <li key={h} className="flex gap-2 text-sm leading-relaxed text-muted">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {h}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
