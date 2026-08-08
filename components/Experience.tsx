import { education, experience, languages } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export function Experience() {
  return (
    <section id="experience" className="section mx-auto max-w-content px-6 py-20 sm:py-28">
      <Reveal>
        <p className="font-mono text-sm text-accent">Experience</p>
        <h2 className="mt-2 max-w-xl text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          Where I&apos;ve worked
        </h2>
      </Reveal>

      <div className="mt-10 space-y-10">
        {experience.map((item, i) => (
          <Reveal
            key={item.company + item.period}
            delay={i * 60}
            className="grid gap-2 border-b border-border pb-10 last:border-0 sm:grid-cols-[220px_1fr]"
          >
            <div>
              <h3 className="text-base font-medium text-ink">{item.company}</h3>
              <p className="text-sm text-muted">{item.role}</p>
              <p className="mt-1 font-mono text-xs text-accent">{item.period}</p>
            </div>
            <ul className="space-y-2">
              {item.highlights.map((h) => (
                <li key={h} className="flex gap-2 text-sm leading-relaxed text-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {h}
                </li>
              ))}
            </ul>
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
