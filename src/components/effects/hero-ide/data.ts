export type TabId = "hero.tsx" | "globals.css" | "page.tsx";

export interface CodeTab {
  id: TabId;
  filename: string;
  icon: "react" | "css";
  path: string;
}

export const CODE_TABS: CodeTab[] = [
  { id: "hero.tsx", filename: "hero.tsx", icon: "react", path: "src › components › home › hero.tsx" },
  { id: "globals.css", filename: "globals.css", icon: "css", path: "src › app › globals.css" },
  { id: "page.tsx", filename: "page.tsx", icon: "react", path: "src › app › page.tsx" },
];
