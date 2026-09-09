import type { Document } from 'mongoose';

export interface IBlogDoc extends Document {
  title: string;
  slug: string;
  description: string;
  content: string;
  coverImage?: string;
  tags: string[];
  source: 'article' | 'linkedin';
  externalUrl?: string;
  linkedinPostId?: string;
  published: boolean;
  publishedAt?: Date;
  readingTime?: number;
}

export interface IBlog {
  _id?: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  coverImage?: string;
  tags: string[];
  source?: 'article' | 'linkedin';
  externalUrl?: string;
  linkedinPostId?: string;
  published: boolean;
  publishedAt?: Date;
  readingTime?: number;
  createdAt?: Date;
  updatedAt?: Date;
}
