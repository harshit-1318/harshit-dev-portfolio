import { Code2, Layers, Database, Wrench, LayoutGrid, LucideIcon } from "lucide-react";

export const CATEGORY_META: Record<string, { color: string }> = {
  All: { color: "from-indigo-500 to-purple-500" },
  "Frontend Core": { color: "from-cyan-500 to-blue-600" },
  "API & State": { color: "from-rose-500 to-red-600" },
  "Backend & DB": { color: "from-green-500 to-emerald-600" },
  "Tools & Workflow": { color: "from-orange-500 to-amber-600" },
};

export const ICONS: Record<string, LucideIcon> = {
  All: LayoutGrid,
  "Frontend Core": Code2,
  "API & State": Layers,
  "Backend & DB": Database,
  "Tools & Workflow": Wrench,
};
