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

export function mapExperienceData(experiences: any) {
  const array = Array.isArray(experiences) ? experiences : (experiences?.experiences || experiences);
  if (!Array.isArray(array) || array.length === 0) return null;

  const sorted = [...array].sort((a: any, b: any) => (a.order ?? 0) - (b.order ?? 0));
  return sorted.map((exp: any) => {
    const startStr = exp.startDate ? new Date(exp.startDate).toLocaleDateString(undefined, { year: 'numeric', month: 'short' }) : '';
    const endStr = exp.current 
      ? 'Present' 
      : exp.endDate 
        ? new Date(exp.endDate).toLocaleDateString(undefined, { year: 'numeric', month: 'short' }) 
        : '';

    return {
      company: exp.company,
      role: exp.role,
      type: exp.type || "Internship",
      period: exp.period || `${startStr} – ${endStr}`,
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
