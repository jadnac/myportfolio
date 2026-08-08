import { projects } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { TiltCard } from "@/components/TiltCard";

export function Projects() {
  return (
    <section id="projects" className="section border-t border-border bg-surface">
      <div className="mx-auto max-w-content px-6 py-20 sm:py-28">
        <Reveal>
          <p className="font-mono text-sm text-accent">Projects</p>
          <h2 className="mt-2 max-w-xl text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Selected work
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 [perspective:1000px]">
          {projects.map((p, i) => {
            const card = (
              <div className="flex h-full flex-col rounded-2xl border border-border bg-bg p-6 transition-colors group-hover:border-accent/50">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-medium text-ink">{p.name}</h3>
                  {p.url && (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="mt-1 shrink-0 text-muted transition-colors group-hover:text-accent"
                    >
                      <path d="M7 17L17 7M7 7h10v10" />
                    </svg>
                  )}
                </div>
                <p className="mt-1 font-mono text-xs text-accent">{p.role}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-surface-2 px-2.5 py-1 text-xs text-muted">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );

            return (
              <Reveal key={p.name} delay={(i % 3) * 60}>
                <TiltCard>
                  {p.url ? (
                    <a href={p.url} target="_blank" rel="noopener noreferrer" className="group block h-full">
                      {card}
                    </a>
                  ) : (
                    <div className="group h-full">{card}</div>
                  )}
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
