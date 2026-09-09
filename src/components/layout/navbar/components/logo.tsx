import Link from "next/link";

interface NavbarLogoProps {
  onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

export function NavbarLogo({ onLinkClick }: NavbarLogoProps) {
  return (
    <Link
      href="/"
      onClick={(e) => onLinkClick(e, "/")}
      className="group flex items-center gap-2.5 cursor-pointer"
      aria-label="Harshit home"
    >
      <div className="relative flex items-center justify-center w-9 h-9 rounded-full bg-slate-100/90 dark:bg-white/5 border border-slate-300/80 dark:border-white/10 shadow-[0_2px_8px_rgba(0,0,0,0.06)] dark:shadow-none group-hover:scale-105 group-hover:border-indigo-400/50 transition-all duration-300">
        <svg className="w-5 h-5 filter drop-shadow-[0_2px_8px_rgba(99,102,241,0.3)] dark:drop-shadow-[0_2px_8px_rgba(99,102,241,0.5)]" viewBox="0 0 40 40" fill="none">
          <defs>
            <linearGradient id="logo-blue" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0ea5e9" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
            <linearGradient id="logo-accent-light" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#4f46e5" />
              <stop offset="50%" stopColor="#7c3aed" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
            <linearGradient id="logo-silver-dark" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f8fafc" />
              <stop offset="50%" stopColor="#cbd5e1" />
              <stop offset="100%" stopColor="#94a3b8" />
            </linearGradient>
          </defs>
          <rect x="9" y="6" width="5.5" height="28" rx="2.75" fill="url(#logo-blue)" />
          <rect x="13.5" y="17.5" width="13" height="5" rx="1.5" className="fill-[url(#logo-accent-light)] dark:fill-[url(#logo-silver-dark)]" />
          <rect x="25.5" y="6" width="5.5" height="28" rx="2.75" className="fill-[url(#logo-accent-light)] dark:fill-[url(#logo-silver-dark)]" />
        </svg>
      </div>
      <span className="font-heading font-bold text-sm tracking-tight text-slate-900 dark:text-white group-hover:text-primary transition-colors duration-200">
        Harshit
      </span>
    </Link>
  );
}
