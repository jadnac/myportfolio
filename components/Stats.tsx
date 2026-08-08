import { stats } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export function Stats() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto grid max-w-content grid-cols-2 gap-8 px-6 py-12 sm:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 80} className="text-center sm:text-left">
            <p className="font-mono text-3xl font-semibold text-ink sm:text-4xl">{s.value}</p>
            <p className="mt-1 text-sm text-muted">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
