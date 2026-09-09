import type { Document } from 'mongoose';

export interface IEducationDoc extends Document {
  institution: string;
  degree: string;
  location?: string;
  period: string;
  grade?: string;
  coursework?: string[];
  order: number;
}

export interface IEducation {
  _id?: string;
  institution: string;
  degree: string;
  location?: string;
  period: string;
  grade?: string;
  coursework?: string[];
  order?: number;
  createdAt?: Date;
  updatedAt?: Date;
}
