export interface IContactMessage {
  _id?: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  read: boolean;
  createdAt?: Date;
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

export interface IProfile {
  _id?: string;
  name: string;
  title: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  logoColor1: string;
  logoColor2: string;
  linkedinUrl: string;
  githubUrl: string;
  githubUsername: string;
  leetcodeUrl: string;
  leetcodeUsername: string;
  resumeUrl: string;
  resumeLastUpdated?: Date;
  updatedAt?: Date;
}
