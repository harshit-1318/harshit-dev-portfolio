"use client";

import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { Github, Linkedin } from "@/components/shared/brand-icons";

export function ContactInfoSocials() {
  const socialLinks = [
    { label: "GitHub", href: siteConfig.links.github, icon: Github },
    { label: "LinkedIn", href: siteConfig.links.linkedin, icon: Linkedin },
  ];

  return (
    <div className="space-y-1.5 pt-1">
      <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Follow &amp; Connect</p>
      <div className="flex gap-2">
        {socialLinks.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-border/80 bg-background/60 px-3 py-1.5 text-xs font-medium text-foreground backdrop-blur-sm transition hover:border-primary/40 hover:bg-card hover:text-primary"
          >
            <Icon size={14} />
            <span>{label}</span>
            <ArrowUpRight size={11} className="opacity-60" />
          </a>
        ))}
      </div>
    </div>
  );
}
