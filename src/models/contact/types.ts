import type { Document } from 'mongoose';

export interface IContactMessageDoc extends Document {
  name: string;
  email: string;
  subject: string;
  message: string;
  read: boolean;
}

export interface IContactMessage {
  _id?: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  read: boolean;
  createdAt?: Date;
}
