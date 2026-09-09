import type { IPortfolioData } from "@/types/portfolio";

interface RawProfile {
  name?: string;
  title?: string;
  location?: string;
  bio?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  email?: string;
  phone?: string;
  resumeUrl?: string;
  error?: unknown;
}

interface RawExperience {
  order?: number;
  startDate?: string | Date;
  endDate?: string | Date;
  current?: boolean;
  period?: string;
  company?: string;
  role?: string;
  type?: string;
  location?: string;
  bullets?: string[];
}

interface RawProject {
  order?: number;
  slug?: string;
  _id?: string;
  title?: string;
  description?: string;
  longDescription?: string;
  techStack?: string[];
  role?: string;
  year?: string;
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  featured?: boolean;
  metrics?: Record<string, string>;
  challenges?: string;
  solutions?: string;
  architectureSteps?: { title: string; description: string }[];
}

interface RawEducation {
  order?: number;
  institution?: string;
  degree?: string;
  location?: string;
  period?: string;
  grade?: string;
  coursework?: string[];
}

export function mapProfileData(profile: RawProfile | null | undefined, staticProfile: IPortfolioData["profile"]) {
  if (!profile || profile.error) return null;
  return {
    name: profile.name || staticProfile.name,
    shortName: staticProfile.shortName,
    tagline: profile.title || staticProfile.tagline,
    role: profile.title || staticProfile.role,
    specialization: staticProfile.specialization,
    location: profile.location || staticProfile.location,
    yearsOfExperience: staticProfile.yearsOfExperience,
    bio: profile.bio || staticProfile.bio,
    avatarSvg: staticProfile.avatarSvg,
    social: {
      github: profile.githubUrl || staticProfile.social.github,
      linkedin: profile.linkedinUrl || staticProfile.social.linkedin,
      instagram: staticProfile.social.instagram,
      email: profile.email || staticProfile.social.email,
      phone: profile.phone || staticProfile.social.phone,
      website: staticProfile.social.website,
      resume: profile.resumeUrl || staticProfile.social.resume,
    },
  };
}

function safeFormatDateString(val: string | Date | unknown): string {
  if (!val) return '';
  if (typeof val === 'string') {
    const trimmed = val.trim();
    if (!trimmed) return '';
    // If it's already a formatted string like "Oct 2025" or "2025" or fails native parsing
    if (/^[A-Za-z]{3,}\s+\d{4}$/.test(trimmed) || isNaN(Date.parse(trimmed))) {
      return trimmed;
    }
  }
  const d = new Date(val as string | number | Date);
  if (isNaN(d.getTime())) return String(val);
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
}

export function mapExperienceData(experiences: RawExperience[] | { experiences?: RawExperience[] } | null | undefined) {
  const array: RawExperience[] | undefined = Array.isArray(experiences)
    ? experiences
    : experiences?.experiences;
  if (!Array.isArray(array) || array.length === 0) return null;

  const sorted = [...array].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  return sorted.map((exp) => {
    const startStr = safeFormatDateString(exp.startDate);
    const endStr = exp.current 
      ? 'Present' 
      : safeFormatDateString(exp.endDate);

    const periodStr = exp.period || (startStr && endStr ? `${startStr} – ${endStr}` : startStr || endStr || '');

    return {
      company: exp.company || "",
      role: exp.role || "",
      type: exp.type || "Full-time",
      period: periodStr,
      location: exp.location || "",
      summary: exp.bullets ? exp.bullets[0] || "" : "",
      highlights: exp.bullets || [],
    };
  });
}

export function mapProjectData(projects: RawProject[] | { projects?: RawProject[] } | null | undefined) {
  const array: RawProject[] | undefined = Array.isArray(projects)
    ? projects
    : projects?.projects;
  if (!Array.isArray(array) || array.length === 0) return null;

  const sorted = [...array].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  return sorted.map((p) => ({
    id: p.slug || p._id || "",
    title: p.title || "",
    subtitle: p.description || "",
    description: p.longDescription || p.description || "",
    stack: p.techStack || [],
    role: p.role || "Developer",
    year: p.year || "2026",
    githubUrl: p.githubUrl || "",
    liveUrl: p.liveUrl || "",
    link: p.githubUrl || p.liveUrl || "",
    image: p.image || "",
    highlight: p.featured || false,
    metrics: p.metrics,
    challenges: p.challenges,
    solutions: p.solutions,
    architectureSteps: p.architectureSteps,
  }));
}

export function mapEducationData(educations: RawEducation[] | { education?: RawEducation[] } | null | undefined) {
  const array: RawEducation[] | undefined = Array.isArray(educations)
    ? educations
    : educations?.education;
  if (!Array.isArray(array) || array.length === 0) return null;

  const sorted = [...array].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  return sorted.map((edu) => ({
    institution: edu.institution || "",
    degree: edu.degree || "",
    location: edu.location || "",
    period: edu.period || "",
    grade: edu.grade || "",
    coursework: edu.coursework || [],
  }));
}
