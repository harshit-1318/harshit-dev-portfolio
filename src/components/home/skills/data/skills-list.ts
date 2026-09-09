import {
  Code2,
  Atom,
  Zap,
  Wind,
  Layers,
  Network,
  Database,
  Server,
  GitBranch,
  Send,
  Monitor,
  Cpu,
  LayoutGrid,
  Table,
  Workflow,
} from "lucide-react";
import { SkillItem } from "./skills-types";

export const skillsData: SkillItem[] = [
  // Frontend Core
  { name: "React.js", category: "Frontend Core", tag: "Production Core", description: "Built 30+ reusable, accessible UI components for live UK healthcare prescriber portal.", icon: Atom, color: "from-cyan-500 to-blue-600" },
  { name: "TypeScript", category: "Frontend Core", tag: "Production Core", description: "Strict type definitions, custom interfaces, and type-safe API data contracts.", icon: Code2, color: "from-blue-600 to-indigo-600" },
  { name: "Astro", category: "Frontend Core", tag: "Production Core", description: "High-performance island architecture for fast content rendering and minimal JS overhead.", icon: Zap, color: "from-orange-500 to-amber-600" },
  { name: "Next.js", category: "Frontend Core", tag: "Advanced", description: "App router, SSR, SSG, and optimized page routing for production-ready web apps.", icon: Layers, color: "from-slate-700 to-slate-900 dark:from-slate-300 dark:to-slate-100" },
  { name: "Tailwind CSS", category: "Frontend Core", tag: "Production Core", description: "Utility-first design system securing 95% layout consistency across viewports.", icon: Wind, color: "from-sky-400 to-cyan-600" },
  { name: "Vite", category: "Frontend Core", tag: "Production Core", description: "Lightning-fast HMR and bundle compilation for React and Astro projects.", icon: Cpu, color: "from-purple-500 to-indigo-600" },

  // API & State
  { name: "TanStack Query", category: "API & State", tag: "Production Core", description: "Optimized state caching and prefetching to achieve 40% faster data fetching.", icon: Workflow, color: "from-rose-500 to-red-600" },
  { name: "TanStack Table", category: "API & State", tag: "Production Core", description: "Engineered high-performance Order Management Dashboard with dynamic sorting/filtering.", icon: Table, color: "from-amber-500 to-orange-600" },
  { name: "Axios & REST APIs", category: "API & State", tag: "Production Core", description: "Integrated clinical endpoints delivering sub-120ms API response latency.", icon: Network, color: "from-emerald-500 to-teal-600" },
  { name: "React Hooks & Context", category: "API & State", tag: "Production Core", description: "Modular global state management and custom hooks for business logic reuse.", icon: Code2, color: "from-indigo-500 to-purple-600" },
  { name: "Zustand", category: "API & State", tag: "Advanced", description: "Lightweight, un-boilerplate global store management for client-side state.", icon: LayoutGrid, color: "from-amber-600 to-yellow-600" },

  // Backend & DB
  { name: "Node.js & Express", category: "Backend & DB", tag: "Proficient", description: "Architected RESTful backend APIs, JWT authentication, and request middleware.", icon: Server, color: "from-green-600 to-emerald-700" },
  { name: "MongoDB", category: "Backend & DB", tag: "Proficient", description: "Designed document schemas with Mongoose aggregations and indexing.", icon: Database, color: "from-emerald-500 to-green-600" },
  { name: "MySQL", category: "Backend & DB", tag: "Proficient", description: "Relational database tables, connection pooling, and transaction safety.", icon: Database, color: "from-blue-500 to-cyan-600" },

  // Tools & Workflow
  { name: "Git & GitHub", category: "Tools & Workflow", tag: "Production Core", description: "Agile version control, pull requests, sprint planning, and team code reviews.", icon: GitBranch, color: "from-orange-600 to-red-600" },
  { name: "Postman", category: "Tools & Workflow", tag: "Production Core", description: "API testing, payload verification, and endpoint response benchmarking.", icon: Send, color: "from-orange-500 to-amber-600" },
  { name: "Vercel", category: "Tools & Workflow", tag: "Production Core", description: "Automated CI/CD deployments and production environment previews.", icon: Monitor, color: "from-zinc-800 to-slate-950 dark:from-zinc-200 dark:to-white" },
];
