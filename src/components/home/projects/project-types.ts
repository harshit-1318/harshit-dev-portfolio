export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  year: string;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
  highlight?: boolean;
  metrics?: Record<string, string>;
  challenges?: string;
  solutions?: string;
  architectureSteps?: Array<{ title: string; description: string }>;
}
