import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-content flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-mono text-sm text-ink">{profile.name}</p>
          <p className="text-sm text-muted">{profile.title} · {profile.location}</p>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
          <a href={`mailto:${profile.email}`} className="transition-colors hover:text-ink">
            {profile.email}
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ink">
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ink">
            GitHub
          </a>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </div>
    </footer>
  );
}
