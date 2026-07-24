import type { IPortfolioData } from "@/types/portfolio";

export function mapProfileData(profile: any, staticProfile: IPortfolioData["profile"]) {
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

function safeFormatDateString(val: any): string {
  if (!val) return '';
  if (typeof val === 'string') {
    const trimmed = val.trim();
    if (!trimmed) return '';
    // If it's already a formatted string like "Oct 2025" or "2025" or fails native parsing
    if (/^[A-Za-z]{3,}\s+\d{4}$/.test(trimmed) || isNaN(Date.parse(trimmed))) {
      return trimmed;
    }
  }
  const d = new Date(val);
  if (isNaN(d.getTime())) return String(val);
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
}

export function mapExperienceData(experiences: any) {
  const array = Array.isArray(experiences) ? experiences : (experiences?.experiences || experiences);
  if (!Array.isArray(array) || array.length === 0) return null;

  const sorted = [...array].sort((a: any, b: any) => (a.order ?? 0) - (b.order ?? 0));
  return sorted.map((exp: any) => {
    const startStr = safeFormatDateString(exp.startDate);
    const endStr = exp.current 
      ? 'Present' 
      : safeFormatDateString(exp.endDate);

    const periodStr = exp.period || (startStr && endStr ? `${startStr} – ${endStr}` : startStr || endStr || '');

    return {
      company: exp.company,
      role: exp.role,
      type: exp.type || "Full-time",
      period: periodStr,
      location: exp.location,
      summary: exp.bullets ? exp.bullets[0] || "" : "",
      highlights: exp.bullets || [],
    };
  });
}

export function mapProjectData(projects: any) {
  const array = Array.isArray(projects) ? projects : (projects?.projects || projects);
  if (!Array.isArray(array) || array.length === 0) return null;

  const sorted = [...array].sort((a: any, b: any) => (a.order ?? 0) - (b.order ?? 0));
  return sorted.map((p: any) => ({
    id: p.slug || p._id,
    title: p.title,
    subtitle: p.description,
    description: p.longDescription || p.description,
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

export function mapEducationData(educations: any) {
  const array = Array.isArray(educations) ? educations : (educations?.education || educations);
  if (!Array.isArray(array) || array.length === 0) return null;

  const sorted = [...array].sort((a: any, b: any) => (a.order ?? 0) - (b.order ?? 0));
  return sorted.map((edu: any) => ({
    institution: edu.institution,
    degree: edu.degree,
    location: edu.location || "",
    period: edu.period,
    grade: edu.grade || "",
    coursework: edu.coursework || [],
  }));
}
