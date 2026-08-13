import { Calendar, FolderGit2 } from "lucide-react";
import { profile } from "@/lib/data";
import { AnimatedHeadline } from "@/components/AnimatedHeadline";

export function Hero() {
  return (
    <section className="section relative overflow-hidden">
      <div className="grid-fade pointer-events-none absolute inset-0" />
      <div className="blob pointer-events-none -left-24 -top-24 h-72 w-72 sm:h-96 sm:w-96" />
      <div
        className="blob pointer-events-none -right-16 top-32 h-56 w-56 sm:h-80 sm:w-80"
        style={{ animationDelay: "-8s" }}
      />
      <div className="relative mx-auto flex max-w-content flex-col items-center gap-12 px-6 pb-20 pt-20 sm:pb-28 sm:pt-28 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <div className="mb-6 flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted animate-fadeUp">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Available for select consulting engagements
          </div>

          <AnimatedHeadline
            className="max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-6xl"
            baseDelay={80}
            segments={[
              { text: "I build solutions that give you" },
              { text: "your time back.", className: "text-accent" },
            ]}
          />

          <p className="mt-6 max-w-2xl text-lg text-muted animate-fadeUp [animation-delay:160ms]">
            I&apos;m {profile.name}, a {profile.title.toLowerCase()} with 10+ years turning
            business problems into software that works, from the first conversation to a
            product your team relies on every day.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4 animate-fadeUp [animation-delay:240ms] lg:justify-start">
            <a
              href={profile.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-ink transition-opacity hover:opacity-90"
            >
              <Calendar className="h-4 w-4" strokeWidth={2} />
              Book a call
            </a>
            <a
              href="#projects"
              className="flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-surface-2"
            >
              <FolderGit2 className="h-4 w-4" strokeWidth={2} />
              View projects
            </a>
          </div>
        </div>

        <div className="relative shrink-0 animate-fadeUp [animation-delay:200ms]">
          <div className="pointer-events-none absolute -inset-6 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-bg shadow-xl ring-1 ring-border sm:h-64 sm:w-64 lg:h-80 lg:w-80">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/profile.png"
              alt={profile.name}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
