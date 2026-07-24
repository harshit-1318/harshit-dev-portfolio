export interface IExperience {
  _id?: string;
  company: string;
  role: string;
  type: "Full-time" | "Part-time" | "Internship" | "Contract";
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  bullets: string[];
  technologies: string[];
  order?: number;
  createdAt?: Date;
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
