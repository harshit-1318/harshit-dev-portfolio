import type { Document } from 'mongoose';

export const PROJECT_CATEGORIES = [
  'AI',
  'FullStack',
  'WebApp',
  'Backend',
  'Automation',
  'Resume',
] as const;

export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];

export interface IProjectDoc extends Document {
  title: string;
  slug: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  features: string[];
  githubUrl: string;
  liveUrl: string;
  image?: string;
  screenshots: string[];
  category: ProjectCategory;
  featured: boolean;
  order: number;
  metrics?: Record<string, string>;
  challenges?: string;
  solutions?: string;
  architectureSteps?: { title: string; description: string }[];
}

export interface IProject {
  _id?: string;
  title: string;
  slug: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  features: string[];
  githubUrl: string;
  liveUrl: string;
  image?: string;
  screenshots?: string[];
  category: "AI" | "FullStack" | "WebApp" | "Backend" | "Automation" | "Resume";
  featured: boolean;
  order?: number;
  createdAt?: Date;
  updatedAt?: Date;
  metrics?: Record<string, string>;
  challenges?: string;
  solutions?: string;
  architectureSteps?: { title: string; description: string }[];
}
