import type { IProjectData } from "@/types/portfolio";
import type { ProjectItem } from "../types/project-types";
import type { ProjectCategoryFilter } from "../components/filter";

export function normalizeProjects(projects: IProjectData[]): ProjectItem[] {
  return projects.map((proj, idx) => {
    const rawLiveUrl = proj.liveUrl;
    const hasExplicitLiveUrl = Boolean(rawLiveUrl && rawLiveUrl.trim().length > 0 && !rawLiveUrl.includes("github.com"));
    const liveUrl = hasExplicitLiveUrl ? rawLiveUrl : undefined;
    const githubUrl = proj.githubUrl || (proj.link && proj.link.includes("github.com") ? proj.link : undefined);

    return {
      id: proj.id || String(idx),
      title: proj.title,
      subtitle: proj.subtitle || "Web Application",
      description: proj.description,
      year: proj.year || "2026",
      stack: proj.stack || [],
      liveUrl: liveUrl,
      githubUrl: githubUrl,
      image: proj.image,
      highlight: proj.highlight,
      metrics: proj.metrics,
      challenges: proj.challenges,
      solutions: proj.solutions,
      architectureSteps: proj.architectureSteps,
    };
  });
}

export function computeCategoryCounts(normalizedProjects: ProjectItem[]) {
  const all = normalizedProjects.length;
  const production = normalizedProjects.filter(
    (p) => p.id.includes("yourmedicals") || p.id.includes("medipulse") || (p.liveUrl && p.liveUrl.length > 0)
  ).length;
  const fullstack = normalizedProjects.filter(
    (p) =>
      p.stack.some((s) => ["Node.js", "Express.js", "MySQL", "MongoDB", "EJS", "MERN", "Socket.IO"].includes(s)) ||
      p.id.includes("eventelite") ||
      p.id.includes("rentnest") ||
      p.id.includes("solarshare") ||
      p.id.includes("medipulse")
  ).length;

  return { all, production, fullstack };
}

export function filterProjects(
  normalizedProjects: ProjectItem[],
  activeFilter: ProjectCategoryFilter
): ProjectItem[] {
  if (activeFilter === "production") {
    return normalizedProjects.filter(
      (p) => p.id.includes("yourmedicals") || p.id.includes("medipulse") || (p.liveUrl && p.liveUrl.length > 0)
    );
  }
  if (activeFilter === "fullstack") {
    return normalizedProjects.filter(
      (p) =>
        p.stack.some((s) => ["Node.js", "Express.js", "MySQL", "MongoDB", "EJS", "MERN", "Socket.IO"].includes(s)) ||
        p.id.includes("eventelite") ||
        p.id.includes("rentnest") ||
        p.id.includes("solarshare") ||
        p.id.includes("medipulse")
    );
  }
  return normalizedProjects;
}
