"use client";

import { useRef } from "react";
import type { ReactNode, MouseEvent } from "react";

export function TiltCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(800px) rotateX(${(-y * 10).toFixed(2)}deg) rotateY(${(x * 10).toFixed(
      2
    )}deg) translateZ(8px)`;
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`h-full [transform-style:preserve-3d] transition-transform duration-200 ease-out will-change-transform ${className}`}
    >
      {children}
    </div>
  );
}
