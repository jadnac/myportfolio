import { about, whyIDoThis } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section id="about" className="section mx-auto max-w-content px-6 py-20 sm:py-28">
      <div className="grid gap-14 md:grid-cols-2">
        <Reveal>
          <p className="font-mono text-sm text-accent">{whyIDoThis.heading}</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            The short version of my philosophy
          </h2>
          <div className="mt-5 space-y-4">
            {whyIDoThis.paragraphs.map((p) => (
              <p key={p} className="text-muted leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="font-mono text-sm text-accent">{about.heading}</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Jad Nacouzi
          </h2>
          <div className="mt-5 space-y-4">
            {about.paragraphs.map((p) => (
              <p key={p} className="text-muted leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
