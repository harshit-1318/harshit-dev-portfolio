import type { Document } from 'mongoose';

export const EXPERIENCE_TYPES = [
  'Full-time',
  'Part-time',
  'Internship',
  'Contract',
] as const;

export type ExperienceType = (typeof EXPERIENCE_TYPES)[number];

export interface IExperienceDoc extends Document {
  company: string;
  role: string;
  type: ExperienceType;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  bullets: string[];
  technologies: string[];
  order: number;
}

export interface IExperience {
  _id?: string;
  company: string;
  role: string;
  type: "Full-time" | "Part-time" | "Internship" | "Contract";
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  bullets: string[];
  technologies: string[];
  order?: number;
  createdAt?: Date;
}
