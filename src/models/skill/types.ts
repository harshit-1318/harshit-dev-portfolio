import type { Document } from 'mongoose';

export interface ISkillDoc extends Document {
  name: string;
  category: string;
  icon?: string;
  proficiency: number;
  order: number;
}

export interface ISkill {
  _id?: string;
  name: string;
  category: string;
  icon?: string;
  proficiency?: number;
  order?: number;
  createdAt?: Date;
}
