import Image from "next/image";
import { Linkedin, BadgeCheck, Check, MapPin, GraduationCap } from "lucide-react";

export interface FounderCardProps {
  name: string;
  nameEn: string;
  role: string;
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
    <div className="bg-white rounded-card border border-light-gray overflow-hidden hover:shadow-md transition-shadow flex flex-col">
      {/* Photo */}
      <div className="relative aspect-square bg-cream">
        {hasRealPhoto ? (
          <Image
            src={photoUrl}
            alt={name}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-deep-green/5">
            <span className="text-5xl font-bold text-deep-green/20">{name[0]}</span>
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        {/* Name + Role */}
        <h3 className="text-xl font-bold text-deep-green mb-0.5">{name}</h3>
        <p className="text-xs text-medium-gray/70 font-latin mb-1">{nameEn}</p>
        <p className="text-sm font-semibold text-lime mb-4">{role}</p>

        {/* Certification Badge */}
        {certification && (
          <div className="mb-3 inline-flex items-center gap-1.5 bg-lime/10 px-3 py-1.5 rounded-full w-fit">
            <BadgeCheck className="w-3.5 h-3.5 text-lime flex-shrink-0" aria-hidden />
            <span className="text-xs font-medium text-deep-green">{certification}</span>
          </div>
        )}

        {/* Experience tag */}
        {experience && (
          <p className="text-sm text-medium-gray italic mb-3">{experience}</p>
        )}

        {/* Expertise */}
        <p className="text-sm text-medium-gray mb-4 pb-4 border-b border-light-gray">
          <span className="font-semibold text-deep-green">التخصصات: </span>
          {expertise}
        </p>

        {/* Bullets */}
        <ul className="space-y-2 mb-5 flex-1">
          {bullets.map((bullet, i) => (
            <li key={i} className="flex gap-2 text-sm text-medium-gray">
              <Check className="w-4 h-4 text-lime flex-shrink-0 mt-0.5" aria-hidden />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        {/* Footer */}
        <div className="flex items-end justify-between pt-4 border-t border-light-gray mt-auto">
          <div className="text-xs text-medium-gray/70 space-y-1">
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
              className="text-medium-gray/50 hover:text-deep-green transition-colors"
            >
              <Linkedin className="w-5 h-5" aria-hidden />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
