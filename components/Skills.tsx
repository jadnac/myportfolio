import { Code2, Database, Cloud, Plug, Smartphone, Wrench, Server, type LucideIcon } from "lucide-react";
import { skillGroups, type SkillGroup } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const skillIcons: Record<SkillGroup["icon"], LucideIcon> = {
  backend: Server,
  frontend: Code2,
  data: Database,
  cloud: Cloud,
  integrations: Plug,
  mobile: Smartphone,
  tools: Wrench,
};

export function Skills() {
  return (
    <section id="skills" className="section border-t border-border bg-surface">
      <div className="mx-auto max-w-content px-6 py-20 sm:py-28">
        <Reveal>
          <SectionHeading icon={Code2} eyebrow="Skills" title="The stack I ship with" />
        </Reveal>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = skillIcons[group.icon];
            return (
              <Reveal
                key={group.category}
                delay={i * 60}
                className="relative transform-gpu overflow-hidden rounded-2xl border border-border bg-bg p-6"
              >
                <div className="pointer-events-none absolute -right-10 -top-12 h-32 w-32 rounded-full bg-accent/15 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-14 -left-8 h-28 w-28 rounded-full bg-accent/5 blur-3xl" />
                <div className="relative">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <Icon className="h-4 w-4" strokeWidth={2} />
                    </div>
                    <h3 className="text-sm font-medium text-ink">{group.category}</h3>
                  </div>
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
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
