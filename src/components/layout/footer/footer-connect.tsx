import { ArrowUpRight, FileText, Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/shared/brand-icons";
import { siteConfig } from "@/lib/constants";

export function FooterConnect() {
  const socialLinks = [
    { label: "GitHub", href: siteConfig.links.github, icon: Github },
    { label: "LinkedIn", href: siteConfig.links.linkedin, icon: Linkedin },
    { label: "Email", href: `mailto:${siteConfig.email}`, icon: Mail },
    { label: "Resume", href: siteConfig.links.resume, icon: FileText },
  ];

  return (
    <div className="lg:col-span-2 space-y-4">
      <h3 className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white">
        Connect
      </h3>

      <div className="flex flex-wrap gap-2.5">
        {socialLinks.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") || href.endsWith(".pdf") ? "_blank" : undefined}
            rel={href.startsWith("http") || href.endsWith(".pdf") ? "noopener noreferrer" : undefined}
            className="footer-social-btn"
            aria-label={label}
            title={label}
          >
            <Icon size={18} />
          </a>
        ))}
      </div>

      <div className="pt-1 w-full">
        <a
          href={`mailto:${siteConfig.email}`}
          className="group inline-flex items-center gap-2 rounded-xl border border-slate-200/90 dark:border-white/10 bg-white/80 dark:bg-card/50 px-3 py-2.5 text-[11px] sm:text-xs text-slate-700 dark:text-slate-300 backdrop-blur-sm transition-all duration-200 hover:border-indigo-500/40 hover:bg-white dark:hover:bg-card/80 hover:text-slate-900 dark:hover:text-white w-full overflow-hidden"
        >
          <Mail size={14} className="text-indigo-600 dark:text-indigo-400 shrink-0 group-hover:scale-110 transition-transform" />
          <span className="font-mono font-semibold text-[11px] text-slate-800 dark:text-slate-200 whitespace-nowrap">{siteConfig.email}</span>
          <ArrowUpRight size={13} className="ml-auto shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" />
        </a>
      </div>
    </div>
  );
}
