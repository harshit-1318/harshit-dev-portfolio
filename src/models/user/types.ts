import type { Document } from 'mongoose';

export const USER_ROLES = ['admin', 'editor'] as const;
export type UserRole = (typeof USER_ROLES)[number];

export interface IUserDoc extends Document {
  email: string;
  password: string;
  name: string;
  role: UserRole;
  lastLogin?: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}
