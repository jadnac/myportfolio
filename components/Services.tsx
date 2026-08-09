import { Briefcase, Code2, Network, Smartphone, Plug, Cloud, Users, Sparkles, type LucideIcon } from "lucide-react";
import { services, type Service } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { TiltCard } from "@/components/TiltCard";
import { SectionHeading } from "@/components/SectionHeading";

const serviceIcons: Record<Service["icon"], LucideIcon> = {
  web: Code2,
  architecture: Network,
  mobile: Smartphone,
  api: Plug,
  cloud: Cloud,
  leadership: Users,
  ai: Sparkles,
};

export function Services() {
  return (
    <section id="services" className="section mx-auto max-w-content px-6 py-20 sm:py-28">
      <Reveal>
        <SectionHeading icon={Briefcase} eyebrow="Services" title="How I can help" />
      </Reveal>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 [perspective:1000px]">
        {services.map((s, i) => {
          const Icon = serviceIcons[s.icon];
          return (
            <Reveal key={s.title} delay={i * 60}>
              <TiltCard>
                <div className="relative flex h-full transform-gpu flex-col overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/50">
                  <div className="pointer-events-none absolute -right-10 -top-12 h-40 w-40 rounded-full bg-accent/15 blur-3xl" />
                  <div className="pointer-events-none absolute -bottom-16 -left-10 h-32 w-32 rounded-full bg-accent/5 blur-3xl" />
                  <div className="relative flex h-full flex-col">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <Icon className="h-[18px] w-[18px]" strokeWidth={2} />
                    </div>
                    <h3 className="mt-3 text-base font-medium text-ink">{s.title}</h3>
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
          );
        })}
      </div>
    </section>
  );
}
