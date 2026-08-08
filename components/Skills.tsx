import { skillGroups } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export function Skills() {
  return (
    <section id="skills" className="section border-t border-border bg-surface">
      <div className="mx-auto max-w-content px-6 py-20 sm:py-28">
        <Reveal>
          <p className="font-mono text-sm text-accent">Skills</p>
          <h2 className="mt-2 max-w-xl text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            The stack I ship with
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.category} delay={i * 60} className="rounded-2xl border border-border bg-bg p-6">
              <h3 className="text-sm font-medium text-ink">{group.category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-surface-2 px-3 py-1 text-xs text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
