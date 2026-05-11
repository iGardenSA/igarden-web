import Image from "next/image";
import { Linkedin, GraduationCap } from "lucide-react";

export interface FounderCardProps {
  name: string;
  role: string;
  photoUrl: string;
  academic: { degree: string; field: string; university: string; year?: string };
  specialties: string[];
  linkedinUrl: string;
}

export function FounderCard({ name, role, photoUrl, academic, specialties, linkedinUrl }: FounderCardProps) {
  const hasAcademic = academic.degree !== "TBD";
  const hasLinkedin = linkedinUrl !== "#";

  return (
    <div className="bg-white rounded-card border border-light-gray shadow-soft flex flex-col overflow-hidden">
      {/* Photo */}
      <div className="relative aspect-[4/3] bg-[#0A2920]">
        {photoUrl && photoUrl !== "/team/placeholder.webp" ? (
          <Image
            src={photoUrl}
            alt={name}
            fill
            className="object-cover object-top"
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-5xl font-bold text-lime/40">{name[0]}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-deep-green mb-0.5">{name}</h3>
        <p className="text-lime text-sm font-medium mb-4">{role}</p>

        {hasAcademic && (
          <div className="flex items-start gap-2 mb-4 text-sm text-medium-gray">
            <GraduationCap className="w-4 h-4 text-lime flex-shrink-0 mt-0.5" aria-hidden />
            <span>
              {academic.degree} · {academic.field}
              <br />
              <span className="text-medium-gray/70">{academic.university}{academic.year ? ` · ${academic.year}` : ""}</span>
            </span>
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-5 flex-1">
          {specialties.map((s) => (
            <span
              key={s}
              className="text-xs bg-deep-green/5 text-deep-green px-2.5 py-1 rounded-full border border-deep-green/10"
            >
              {s}
            </span>
          ))}
        </div>

        {hasLinkedin && (
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-medium-gray hover:text-deep-green transition-colors mt-auto"
            aria-label={`LinkedIn — ${name}`}
          >
            <Linkedin className="w-4 h-4" aria-hidden />
            LinkedIn
          </a>
        )}
      </div>
    </div>
  );
}
