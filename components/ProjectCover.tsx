export function ProjectCover({ code, name, logo }: { code: string; name: string; logo?: string }) {
  return (
    <div className="relative h-40 w-full transform-gpu overflow-hidden border-b border-border bg-surface-2">
      <div className="grid-fade pointer-events-none absolute inset-0 opacity-70" />
      <div className="pointer-events-none absolute -right-8 -top-10 h-32 w-32 rounded-full bg-accent/25 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-10 -left-6 h-24 w-24 rounded-full bg-accent/10 blur-2xl" />
      <div className="absolute inset-0 flex items-center justify-center">
        {logo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <div className="flex h-24 w-52 items-center justify-center rounded-xl bg-white/95 p-4 shadow-sm">
            <img src={logo} alt={`${name} logo`} className="h-full w-full object-contain" />
          </div>
        ) : (
          <span className="font-mono text-5xl font-semibold tracking-widest text-ink/10">{code}</span>
        )}
      </div>
    </div>
  );
}
