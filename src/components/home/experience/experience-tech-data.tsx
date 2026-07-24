import { AstroIcon } from "@/components/shared/brand-icons";

export interface CoreTech {
  name: string;
  hoverClass: string;
  icon: React.ReactNode;
}

export const CORE_TECHS: CoreTech[] = [
  {
    name: "React.js",
    hoverClass: "hover:border-[#61DAFB]",
    icon: (
      <svg viewBox="-10.5 -9.45 21 18.9" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 shrink-0 text-[#61DAFB] fill-none stroke-current transition-transform duration-250 ease-out group-hover:scale-[1.08] motion-reduce:transition-none motion-reduce:group-hover:scale-100" strokeWidth="1.2">
        <ellipse rx="10" ry="4.5" />
        <ellipse rx="10" ry="4.5" transform="rotate(60)" />
        <ellipse rx="10" ry="4.5" transform="rotate(120)" />
        <circle r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    hoverClass: "hover:border-[#3178C6]",
    icon: (
      <svg viewBox="0 0 100 100" className="w-5 h-5 shrink-0 rounded-[3px] overflow-hidden transition-transform duration-250 ease-out group-hover:scale-[1.08] motion-reduce:transition-none motion-reduce:group-hover:scale-100">
        <rect width="100" height="100" fill="#3178C6" />
        <text x="50" y="75" fill="white" fontSize="55" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="bold" textAnchor="middle">TS</text>
      </svg>
    ),
  },
  {
    name: "Astro",
    hoverClass: "hover:border-[#FF5D01]",
    icon: (
      <AstroIcon size={20} className="w-5 h-5 shrink-0 transition-transform duration-250 ease-out group-hover:scale-[1.08] motion-reduce:transition-none motion-reduce:group-hover:scale-100" />
    ),
  },
  {
    name: "Vite",
    hoverClass: "hover:border-[#8B5CF6]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 shrink-0 transition-transform duration-250 ease-out group-hover:scale-[1.08] motion-reduce:transition-none motion-reduce:group-hover:scale-100">
        <path d="M12 2L2 5l10 17L22 5L12 2z" fill="url(#vite-grad-exp)" />
        <path d="M12 5l-7 1.8L12 18l7-11.2L12 5z" fill="#BD34FE" opacity="0.9" />
        <path d="M12 3l-2 5h3l-2 6 5-7h-3l2-4z" fill="#FFD600" />
        <defs>
          <linearGradient id="vite-grad-exp" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
            <stop stopColor="#41D1FF" />
            <stop offset="1" stopColor="#BD34FE" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    hoverClass: "hover:border-[#38BDF8]",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 fill-[#38BDF8] transition-transform duration-250 ease-out group-hover:scale-[1.08] motion-reduce:transition-none motion-reduce:group-hover:scale-100">
        <path d="M12 6.018C13.8 2.318 16.5 2 20 2c0 3.5-.3 6.2-4 8 3.7 1.8 4 4.5 4 8 0-3.5-.3-6.2-4-8-3.7-1.8-4-4.5-4-8 0 3.5.3 6.2 4 8zm-6 8c1.8-3.7 4.5-4 8-4 0 3.5-.3 6.2-4 8 3.7 1.8 4 4.5 4 8 0-3.5-.3-6.2-4-8-3.7-1.8-4-4.5-4-8 0 3.5.3 6.2 4 8z" />
      </svg>
    ),
  },
  {
    name: "TanStack Query",
    hoverClass: "hover:border-[#FF4154]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 shrink-0 transition-transform duration-250 ease-out group-hover:scale-[1.08] motion-reduce:transition-none motion-reduce:group-hover:scale-100">
        <circle cx="12" cy="7" r="5" fill="#FF4154" opacity="0.85" />
        <circle cx="8" cy="15" r="5" fill="#FFB000" opacity="0.85" />
        <circle cx="16" cy="15" r="5" fill="#00E1D9" opacity="0.85" />
      </svg>
    ),
  },
  {
    name: "Axios",
    hoverClass: "hover:border-[#8B5CF6]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 shrink-0 transition-transform duration-250 ease-out group-hover:scale-[1.08] motion-reduce:transition-none motion-reduce:group-hover:scale-100">
        <polygon points="12 2 22 8.5 22 19.5 12 22 2 19.5 2 8.5" fill="#5A29E4" opacity="0.15" stroke="#5A29E4" strokeWidth="1.5" />
        <path d="M8 12h8m-3-3l3 3-3 3" stroke="#5A29E4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Git",
    hoverClass: "hover:border-[#F05032]",
    icon: (
      <svg viewBox="0 0 100 100" className="w-5 h-5 shrink-0 fill-[#F05032] transition-transform duration-250 ease-out group-hover:scale-[1.08] motion-reduce:transition-none motion-reduce:group-hover:scale-100">
        <path d="M91.8 42.9L57.1 8.2c-3.1-3.1-8.2-3.1-11.3 0L35.4 18.6l11.7 11.7c2.6-.9 5.7-.3 7.8 1.8 2.2 2.2 2.7 5.3 1.7 7.9L68 51.5c2.6-1 5.7-.5 7.9 1.7 3.1 3.1 3.1 8.2 0 11.3-3.1 3.1-8.2 3.1-11.3 0-2.2-2.2-2.7-5.3-1.8-7.9L51.3 45c-1 1-2.5 1.5-3.9 1.5-1.4 0-2.9-.5-3.9-1.5-2.1-2.1-2.7-5.1-1.9-7.7L29.9 25.6 8.2 47.3c-3.1 3.1-3.1 8.2 0 11.3l34.7 34.7c3.1 3.1 8.2 3.1 11.3 0l37.6-37.6c3.1-3.1 3.1-8.2 0-11.3z" />
      </svg>
    ),
  },
];
