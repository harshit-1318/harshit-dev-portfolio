import type { Document } from 'mongoose';

export interface IResumeHighlights {
  experience: string;
  skills: string;
  projects: string;
  education: string;
  certifications: string;
}

export interface IResumeDoc extends Document {
  summary: string;
  pdfUrl: string;
  highlights: IResumeHighlights;
  downloadCount: number;
  lastUpdated?: Date;
}

export interface IResume {
  _id?: string;
  summary: string;
  pdfUrl: string;
  highlights: {
    experience: string;
    skills: string;
    projects: string;
    education: string;
    certifications: string;
  };
  downloadCount: number;
  lastUpdated?: Date;
}
