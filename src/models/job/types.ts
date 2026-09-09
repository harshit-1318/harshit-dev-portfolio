import type { Document } from 'mongoose';

export const JOB_TYPES = [
  'Full-time',
  'Part-time',
  'Internship',
  'Remote',
  'Hybrid',
] as const;

export const JOB_STATUSES = [
  'Applied',
  'Interviewing',
  'Selected',
  'Rejected',
  'Saved',
  'Interested',
] as const;

export type JobType = (typeof JOB_TYPES)[number];
export type JobStatus = (typeof JOB_STATUSES)[number];

export interface IJobPostDoc extends Document {
  company: string;
  role: string;
  type: JobType;
  location: string;
  description: string;
  applicationUrl?: string;
  status: JobStatus;
  isPublic: boolean;
  appliedDate?: Date;
}

export interface IJobPost {
  _id?: string;
  company: string;
  role: string;
  type: "Full-time" | "Part-time" | "Internship" | "Remote" | "Hybrid";
  location: string;
  description: string;
  applicationUrl?: string;
  status: "Applied" | "Interviewing" | "Selected" | "Rejected" | "Saved" | "Interested";
  isPublic: boolean;
  appliedDate?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}
