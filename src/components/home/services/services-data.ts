import { Globe, Cpu, LayoutGrid, Server, LucideIcon } from "lucide-react";

export interface ServiceItem {
  number: string;
  category: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accentBg: string;
  accentGradient: string;
  hoverBorder: string;
  spotlightColor: string;
  highlightMetric: string;
  tags: string[];
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    number: "01",
    category: "Frontend Core",
    title: "Production Frontend Engineering",
    description:
      "Architecting modular, highly responsive UI component systems. Engineered 30+ reusable production components for a UK healthcare prescriber portal with 95% cross-viewport consistency.",
    icon: Globe,
    accentBg: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
    accentGradient: "from-indigo-500 via-purple-500 to-indigo-600",
    hoverBorder: "hover:border-indigo-500/40 hover:shadow-[0_8px_30px_rgba(99,102,241,0.12)]",
    spotlightColor: "rgba(99, 102, 241, 0.18)",
    highlightMetric: "30+ UI Components · 95% Viewport Consistency",
    tags: ["React.js", "TypeScript", "Astro", "Tailwind CSS", "Vite"],
  },
  {
    number: "02",
    category: "Async & APIs",
    title: "API & Async Data Caching",
    description:
      "Designing low-latency REST API integrations and query caching workflows. Boosted data fetching speeds by 40% with sub-120ms response handling.",
    icon: Cpu,
    accentBg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    accentGradient: "from-emerald-500 via-teal-500 to-emerald-600",
    hoverBorder: "hover:border-emerald-500/40 hover:shadow-[0_8px_30px_rgba(16,185,129,0.12)]",
    spotlightColor: "rgba(16, 185, 129, 0.18)",
    highlightMetric: "40% Data Fetch Speedup · Sub-120ms Latency",
    tags: ["TanStack Query", "Axios", "REST APIs", "Context API"],
  },
  {
    number: "03",
    category: "Data Grids",
    title: "Complex Dashboards & Tables",
    description:
      "Developing high-throughput data grid tables with server-side sorting, pagination, and filter controls for healthcare order management portals.",
    icon: LayoutGrid,
    accentBg: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
    accentGradient: "from-amber-500 via-orange-500 to-amber-600",
    hoverBorder: "hover:border-amber-500/40 hover:shadow-[0_8px_30px_rgba(245,158,11,0.12)]",
    spotlightColor: "rgba(245, 158, 11, 0.18)",
    highlightMetric: "Order Management & Real-Time Filtering",
    tags: ["TanStack Table", "Zustand", "React Hooks"],
  },
  {
    number: "04",
    category: "Full-Stack",
    title: "Full-Stack Web Architectures",
    description:
      "Building lightweight backend services, secure JWT authentication routes, and relational / NoSQL database schemas for full-stack web platforms.",
    icon: Server,
    accentBg: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    accentGradient: "from-blue-500 via-indigo-500 to-blue-600",
    hoverBorder: "hover:border-blue-500/40 hover:shadow-[0_8px_30px_rgba(59,130,246,0.12)]",
    spotlightColor: "rgba(59, 130, 246, 0.18)",
    highlightMetric: "JWT Security · Relational & NoSQL Storage",
    tags: ["Node.js", "Express.js", "MongoDB", "MySQL"],
  },
];
