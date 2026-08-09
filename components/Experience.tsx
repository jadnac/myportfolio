import { History, GraduationCap, Languages as LanguagesIcon } from "lucide-react";
import { education, experience, languages } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { ExperienceItem } from "@/components/ExperienceItem";
import { SectionHeading } from "@/components/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="section mx-auto max-w-content px-6 py-20 sm:py-28">
      <Reveal>
        <SectionHeading icon={History} eyebrow="Experience" title="Where I've worked" />
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
          <div className="flex items-center gap-2">
            <GraduationCap className="h-4 w-4 text-accent" strokeWidth={2} />
            <p className="text-sm font-medium text-ink">Education</p>
          </div>
          <p className="mt-2 text-sm text-muted">
            {education.degree} — {education.school}
          </p>
          <p className="font-mono text-xs text-accent">{education.period}</p>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <LanguagesIcon className="h-4 w-4 text-accent" strokeWidth={2} />
            <p className="text-sm font-medium text-ink">Languages</p>
          </div>
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
