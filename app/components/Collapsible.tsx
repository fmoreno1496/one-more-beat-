"use client";

import { useState, type ReactNode } from "react";

/**
 * A minimal accessible collapsible used for the "How to set..." instructions.
 */
export default function Collapsible({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-omb-line-dark">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between py-6 text-left"
      >
        <span className="eyebrow text-omb-white">{title}</span>
        <span className="font-mono text-xl text-omb-muted-dark" aria-hidden="true">
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <div className="pb-8 font-body text-lg font-light leading-[1.8] text-omb-muted-dark">
          {children}
        </div>
      )}
    </div>
  );
}
