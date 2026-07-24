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

export interface ISkill {
  _id?: string;
  name: string;
  category: string;
  icon?: string;
  proficiency?: number;
  order?: number;
  createdAt?: Date;
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

export interface IBlog {
  _id?: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  coverImage?: string;
  tags: string[];
  source?: "article" | "linkedin";
  externalUrl?: string;
  linkedinPostId?: string;
  published: boolean;
  publishedAt?: Date;
  readingTime?: number;
  createdAt?: Date;
  updatedAt?: Date;
}
