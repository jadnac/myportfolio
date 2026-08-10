"use client";

import { useEffect, useState } from "react";
import { X, Calendar } from "lucide-react";
import { profile } from "@/lib/data";

const STORAGE_KEY = "welcome-popup-dismissed";
const SHOW_DELAY_MS = 4000;

export function WelcomePopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    const timer = setTimeout(() => setVisible(true), SHOW_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!visible) return;

    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [visible]);

  const dismiss = () => {
    setVisible(false);
    sessionStorage.setItem(STORAGE_KEY, "1");
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-ink/40 p-4 backdrop-blur-sm animate-fadeIn sm:items-center"
      onClick={dismiss}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Get in touch"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-sm animate-popIn rounded-3xl border border-border bg-bg p-6 shadow-2xl"
      >
        <button
          type="button"
          onClick={dismiss}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-muted transition-colors hover:bg-surface-2 hover:text-ink"
        >
          <X className="h-4 w-4" strokeWidth={2} />
        </button>

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
          <Calendar className="h-5 w-5" strokeWidth={2} />
        </div>

        <h3 className="mt-4 text-lg font-semibold text-ink">Got a project in mind?</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted">
          Book a quick call or send a message on WhatsApp. I usually reply within a few hours.
        </p>

        <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
          <a
            href={profile.calendly}
            target="_blank"
            rel="noopener noreferrer"
            onClick={dismiss}
            className="flex flex-1 items-center justify-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-ink transition-opacity hover:opacity-90"
          >
            <Calendar className="h-4 w-4" strokeWidth={2} />
            Book a call
          </a>
          <a
            href={profile.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            onClick={dismiss}
            className="flex flex-1 items-center justify-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-surface-2"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.868-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12.004 2C6.486 2 2.01 6.476 2.01 11.994c0 2.09.628 4.032 1.706 5.65L2 22l4.463-1.685a9.94 9.94 0 0 0 5.541 1.673h.004c5.518 0 9.994-4.476 9.994-9.994C21.998 6.476 17.522 2 12.004 2zm0 18.19h-.003a8.19 8.19 0 0 1-4.169-1.14l-.299-.178-3.099 1.169.827-3.028-.195-.31a8.176 8.176 0 0 1-1.256-4.377c0-4.518 3.677-8.194 8.198-8.194 2.19 0 4.248.853 5.795 2.401a8.135 8.135 0 0 1 2.4 5.796c0 4.519-3.677 8.195-8.199 8.195z" />
            </svg>
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
