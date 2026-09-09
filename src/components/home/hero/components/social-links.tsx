"use client";

import { useState } from "react";
import { IProfileData } from "@/types/portfolio";

export function HeroSocialLinks({ profile }: { profile: IProfileData }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.social.email || "kumarharshit370@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-2 sm:ml-1 sm:border-l sm:border-slate-200/70 sm:dark:border-white/10 sm:pl-4 py-0.5">
      {profile.social.github && (
        <a
          href={profile.social.github}
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub Profile"
          className="w-9 h-9 inline-flex items-center justify-center rounded-xl border border-slate-200/60 dark:border-white/10 bg-slate-50/60 dark:bg-white/2.5 text-slate-600 dark:text-zinc-400 hover:bg-white dark:hover:bg-white/6 hover:text-indigo-500 dark:hover:text-indigo-400 hover:scale-[1.06] hover:-translate-y-0.5 hover:shadow-[0_0_18px_rgba(99,102,241,0.22)] transition-all duration-200"
          aria-label="GitHub"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
        </a>
      )}
      {profile.social.linkedin && (
        <a
          href={profile.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn Profile"
          className="w-9 h-9 inline-flex items-center justify-center rounded-xl border border-slate-200/60 dark:border-white/10 bg-slate-50/60 dark:bg-white/2.5 text-slate-600 dark:text-zinc-400 hover:bg-white dark:hover:bg-white/6 hover:text-indigo-500 dark:hover:text-indigo-400 hover:scale-[1.06] hover:-translate-y-0.5 hover:shadow-[0_0_18px_rgba(99,102,241,0.22)] transition-all duration-200"
          aria-label="LinkedIn"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>
      )}
      {profile.social.email && (
        <div className="relative group">
          <button
            onClick={handleCopyEmail}
            title={copied ? "Email copied!" : `Copy email: ${profile.social.email}`}
            className="w-9 h-9 inline-flex items-center justify-center rounded-xl border border-slate-200/60 dark:border-white/10 bg-slate-50/60 dark:bg-white/2.5 text-slate-600 dark:text-zinc-400 hover:bg-white dark:hover:bg-white/6 hover:text-indigo-500 dark:hover:text-indigo-400 hover:scale-[1.06] hover:-translate-y-0.5 hover:shadow-[0_0_18px_rgba(99,102,241,0.22)] transition-all duration-200 cursor-pointer"
            aria-label="Copy Email"
          >
            {copied ? (
              <svg className="w-4 h-4 text-emerald-500 dark:text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            ) : (
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            )}
          </button>
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-[11px] font-medium rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-md z-10">
            {copied ? "Copied!" : "Copy Email"}
          </span>
        </div>
      )}
    </div>
  );
}
