import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function FooterNav() {
  const mainNav = [
    { name: "Home", href: "/" },
    { name: "About Me", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Get In Touch", href: "/#contact" },
  ];

  const showcaseNav = [
    { name: "Featured Projects", href: "/#projects" },
    { name: "Certificates", href: "/#certificates" },
    { name: "Work Experience", href: "/#experience" },
    { name: "Technical Skills", href: "/#skills" },
  ];

  return (
    <>
      <div>
        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white">
          Navigation
        </h3>
        <ul className="mt-4 space-y-2.5 text-sm">
          {mainNav.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group inline-flex items-center gap-0 text-slate-700 dark:text-slate-300 font-medium transition-all duration-200 hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                <ChevronRight
                  size={13}
                  className="max-w-0 overflow-hidden opacity-0 group-hover:max-w-3.25 group-hover:opacity-100 group-hover:mr-1 transition-all duration-200 text-indigo-600 dark:text-indigo-400 shrink-0"
                />
                <span>{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white">
          Showcase
        </h3>
        <ul className="mt-4 space-y-2.5 text-sm">
          {showcaseNav.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="group inline-flex items-center gap-0 text-slate-700 dark:text-slate-300 font-medium transition-all duration-200 hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                <ChevronRight
                  size={13}
                  className="max-w-0 overflow-hidden opacity-0 group-hover:max-w-3.25 group-hover:opacity-100 group-hover:mr-1 transition-all duration-200 text-indigo-600 dark:text-indigo-400 shrink-0"
                />
                <span>{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
