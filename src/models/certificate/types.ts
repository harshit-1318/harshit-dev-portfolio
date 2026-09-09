import type { Document } from 'mongoose';

export interface ICertificateDoc extends Document {
  title: string;
  organization: string;
  issueDate?: string;
  credentialUrl?: string;
  image?: string;
  description?: string;
  order: number;
}

export interface ICertificate {
  _id?: string;
  title: string;
  organization: string;
  issueDate?: string;
  credentialUrl?: string;
  skills?: string[];
  credentialId?: string;
  image?: string;
  description?: string;
  order?: number;
  createdAt?: Date;
}
