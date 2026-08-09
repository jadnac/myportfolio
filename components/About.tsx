import { Compass, UserRound } from "lucide-react";
import { about, whyIDoThis } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function About() {
  return (
    <section id="about" className="section mx-auto max-w-content px-6 py-20 sm:py-28">
      <div className="grid gap-14 md:grid-cols-2">
        <Reveal>
          <SectionHeading icon={Compass} eyebrow={whyIDoThis.heading} title="The short version of my philosophy" />
          <div className="mt-5 space-y-4">
            {whyIDoThis.paragraphs.map((p) => (
              <p key={p} className="text-muted leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <SectionHeading icon={UserRound} eyebrow={about.heading} title="Jad Nacouzi" />
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
