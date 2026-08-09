import { Mail, Linkedin, Github } from "lucide-react";
import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-content flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-mono text-sm text-ink">{profile.name}</p>
          {/* <p className="text-sm text-muted">{profile.title} · {profile.location}</p> */}
          <p className="text-sm text-muted">{profile.title}</p>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
          <a href={`mailto:${profile.email}`} className="flex items-center gap-1.5 transition-colors hover:text-ink">
            <Mail className="h-4 w-4" strokeWidth={2} />
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 transition-colors hover:text-ink"
          >
            <Linkedin className="h-4 w-4" strokeWidth={2} />
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 transition-colors hover:text-ink"
          >
            <Github className="h-4 w-4" strokeWidth={2} />
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
