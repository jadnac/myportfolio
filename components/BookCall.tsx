import { profile } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export function BookCall() {
  return (
    <section id="contact" className="section border-t border-border bg-surface">
      <div className="mx-auto max-w-content px-6 py-20 sm:py-28">
        <Reveal className="flex flex-col items-center rounded-3xl border border-border bg-bg px-6 py-16 text-center sm:px-16">
          <p className="font-mono text-sm text-accent">Book a call</p>
          <h2 className="mt-2 max-w-xl text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Let&apos;s talk about your project
          </h2>
          <p className="mt-3 max-w-lg text-muted">
            Pick a time that works for you and I&apos;ll walk you through how I&apos;d approach it —
            no pressure, no sales script.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={profile.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-accent px-8 py-3.5 text-sm font-medium text-accent-ink transition-opacity hover:opacity-90"
            >
              Book a call on Calendly
            </a>
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Message on WhatsApp"
              className="flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-surface-2"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.868-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12.004 2C6.486 2 2.01 6.476 2.01 11.994c0 2.09.628 4.032 1.706 5.65L2 22l4.463-1.685a9.94 9.94 0 0 0 5.541 1.673h.004c5.518 0 9.994-4.476 9.994-9.994C21.998 6.476 17.522 2 12.004 2zm0 18.19h-.003a8.19 8.19 0 0 1-4.169-1.14l-.299-.178-3.099 1.169.827-3.028-.195-.31a8.176 8.176 0 0 1-1.256-4.377c0-4.518 3.677-8.194 8.198-8.194 2.19 0 4.248.853 5.795 2.401a8.135 8.135 0 0 1 2.4 5.796c0 4.519-3.677 8.195-8.199 8.195z" />
              </svg>
              WhatsApp
            </a>
          </div>

          <a
            href={`tel:${profile.phone.replace(/\s+/g, "")}`}
            className="mt-4 font-mono text-sm text-muted transition-colors hover:text-ink"
          >
            {profile.phone}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
