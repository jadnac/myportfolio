import { education, experience, languages } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { ExperienceItem } from "@/components/ExperienceItem";

export function Experience() {
  return (
    <section id="experience" className="section mx-auto max-w-content px-6 py-20 sm:py-28">
      <Reveal>
        <p className="font-mono text-sm text-accent">Experience</p>
        <h2 className="mt-2 max-w-xl text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          Where I&apos;ve worked
        </h2>
      </Reveal>

      <div className="mt-10">
        {experience.map((item, i) => (
          <Reveal key={item.company + item.period} delay={i * 60}>
            <ExperienceItem item={item} />
          </Reveal>
        ))}
      </div>

      <div className="mt-4 grid gap-8 border-t border-border pt-10 sm:grid-cols-2">
        <div>
          <p className="text-sm font-medium text-ink">Education</p>
          <p className="mt-2 text-sm text-muted">
            {education.degree} — {education.school}
          </p>
          <p className="font-mono text-xs text-accent">{education.period}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-ink">Languages</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {languages.map((l) => (
              <span key={l.name} className="rounded-full bg-surface-2 px-3 py-1 text-xs text-muted">
                {l.name} · {l.level}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
