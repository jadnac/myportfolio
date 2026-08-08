import { services } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { TiltCard } from "@/components/TiltCard";

export function Services() {
  return (
    <section id="services" className="section mx-auto max-w-content px-6 py-20 sm:py-28">
      <Reveal>
        <p className="font-mono text-sm text-accent">Services</p>
        <h2 className="mt-2 max-w-xl text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          How I can help
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 [perspective:1000px]">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 60}>
            <TiltCard>
              <div className="relative flex h-full transform-gpu flex-col overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/50">
                <div className="pointer-events-none absolute -right-10 -top-12 h-40 w-40 rounded-full bg-accent/15 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-16 -left-10 h-32 w-32 rounded-full bg-accent/5 blur-3xl" />
                <div className="relative flex h-full flex-col">
                  <h3 className="text-base font-medium text-ink">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{s.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {s.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-surface-2 px-2.5 py-1 text-xs text-muted">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
