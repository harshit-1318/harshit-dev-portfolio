export interface SkillItem {
  name: string;
  category: "Frontend Core" | "API & State" | "Backend & DB" | "Tools & Workflow";
  tag: "Production Core" | "Advanced" | "Proficient";
  description: string;
  icon: any;
  color: string;
}

export const categories = [
  "All",
  "Frontend Core",
  "API & State",
  "Backend & DB",
  "Tools & Workflow",
] as const;
