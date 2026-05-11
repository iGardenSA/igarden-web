import Image from "next/image";
import { Linkedin, BadgeCheck, Check, MapPin, GraduationCap } from "lucide-react";

export interface FounderCardProps {
  name: string;
  nameEn: string;
  role: string;
  roleEn?: string;
  photoUrl: string;
  expertise: string;
  experience?: string;
  certification?: string;
  bullets: string[];
  background: {
    education?: string;
    location: string;
  };
  linkedinUrl?: string;
}

export function FounderCard({
  name,
  nameEn,
  role,
  roleEn,
  photoUrl,
  expertise,
  experience,
  certification,
  bullets,
  background,
  linkedinUrl,
}: FounderCardProps) {
  const hasRealPhoto = !!photoUrl && !photoUrl.includes("placeholder");

  return (
    <div className="bg-white rounded-card border border-light-gray shadow-soft hover:shadow-md transition-shadow flex flex-col p-6">
      {/* Header: circular photo + name block side-by-side */}
      <div className="flex items-center gap-4 mb-5">
        {/* Circular photo */}
        <div className="relative w-20 h-20 rounded-full overflow-hidden bg-cream flex-shrink-0 ring-2 ring-lime/20">
          {hasRealPhoto ? (
            <Image
              src={photoUrl}
              alt={name}
              fill
              className="object-cover object-top"
              sizes="80px"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-deep-green/5">
              <span className="text-2xl font-bold text-deep-green/30">{name[0]}</span>
            </div>
          )}
        </div>

        {/* Name + role */}
        <div className="min-w-0">
          <h3 className="text-base font-bold text-deep-green leading-snug">{name}</h3>
          <p className="text-[11px] text-medium-gray/60 font-latin mb-1 truncate">{nameEn}</p>
          <p className="text-xs font-semibold text-lime leading-snug">{role}</p>
          {roleEn && (
            <p className="text-[11px] text-medium-gray/50 font-latin leading-snug">{roleEn}</p>
          )}
        </div>
      </div>

      {/* Certification badge */}
      {certification && (
        <div className="mb-3 inline-flex items-center gap-1.5 bg-lime/10 px-2.5 py-1 rounded-full w-fit">
          <BadgeCheck className="w-3 h-3 text-lime flex-shrink-0" aria-hidden />
          <span className="text-[11px] font-medium text-deep-green">{certification}</span>
        </div>
      )}

      {/* Experience */}
      {experience && (
        <p className="text-xs text-medium-gray italic mb-3">{experience}</p>
      )}

      {/* Expertise */}
      <p className="text-xs text-medium-gray mb-4 pb-4 border-b border-light-gray">
        <span className="font-semibold text-deep-green">التخصصات: </span>
        {expertise}
      </p>

      {/* Bullets */}
      <ul className="space-y-1.5 mb-4 flex-1">
        {bullets.map((bullet, i) => (
          <li key={i} className="flex gap-2 text-xs text-medium-gray">
            <Check className="w-3.5 h-3.5 text-lime flex-shrink-0 mt-0.5" aria-hidden />
            <span className="leading-relaxed">{bullet}</span>
          </li>
        ))}
      </ul>

      {/* Footer */}
      <div className="flex items-end justify-between pt-3 border-t border-light-gray mt-auto">
        <div className="text-[11px] text-medium-gray/60 space-y-1">
          {background.education && (
            <p className="flex items-center gap-1">
              <GraduationCap className="w-3 h-3 flex-shrink-0" aria-hidden />
              {background.education}
            </p>
          )}
          <p className="flex items-center gap-1">
            <MapPin className="w-3 h-3 flex-shrink-0" aria-hidden />
            {background.location}
          </p>
        </div>
        {linkedinUrl && (
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`LinkedIn — ${name}`}
            className="text-medium-gray/40 hover:text-deep-green transition-colors"
          >
            <Linkedin className="w-4 h-4" aria-hidden />
          </a>
        )}
      </div>
    </div>
  );
}
