"use client";

import { Link as LinkIcon, FileText, Code2, Globe } from "lucide-react";
import { Github, Linkedin } from "@/components/shared/brand-icons";
import { motion } from "framer-motion";
import type { IProfileData } from "./personal-details-form";

interface IntegrationsFormProps {
  profile: Partial<IProfileData>;
  setProfile: (data: Partial<IProfileData>) => void;
}

export function IntegrationsForm({ profile, setProfile }: IntegrationsFormProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15, duration: 0.3 }}
      className="rounded-2xl p-6 border border-border/60 bg-card/60 backdrop-blur-sm shadow-xs space-y-5"
    >
      <div className="flex items-center gap-2.5 pb-3 border-b border-border/50">
        <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
          <LinkIcon className="w-4 h-4" />
        </div>
        <div>
          <h2 className="text-base font-bold font-heading text-foreground">
            Integrations & Social Links
          </h2>
          <p className="text-xs text-muted-foreground">
            Connect your developer profiles, platforms, and public URLs
          </p>
        </div>
      </div>

      {/* GitHub */}
      <div className="p-4 rounded-xl border border-border/60 bg-muted/20 space-y-3">
        <div className="flex items-center gap-2 text-sm font-bold text-foreground font-heading">
          <Github className="w-4 h-4 text-foreground" />
          <span>GitHub Integration</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-foreground uppercase tracking-wider">
              GitHub Username
            </label>
            <input
              type="text"
              value={profile.githubUsername || ''}
              onChange={(e) => setProfile({ ...profile, githubUsername: e.target.value })}
              required
              className="w-full px-3.5 py-2.5 bg-muted/50 border border-border/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 text-foreground text-sm font-mono"
              placeholder="harshit-1318"
            />
          </div>
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-foreground uppercase tracking-wider">
              GitHub Profile URL
            </label>
            <input
              type="url"
              value={profile.githubUrl || ''}
              onChange={(e) => setProfile({ ...profile, githubUrl: e.target.value })}
              required
              className="w-full px-3.5 py-2.5 bg-muted/50 border border-border/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 text-foreground text-sm"
              placeholder="https://github.com/harshit-1318"
            />
          </div>
        </div>
      </div>

      {/* LeetCode */}
      <div className="p-4 rounded-xl border border-border/60 bg-muted/20 space-y-3">
        <div className="flex items-center gap-2 text-sm font-bold text-foreground font-heading">
          <Code2 className="w-4 h-4 text-amber-500" />
          <span>LeetCode Integration</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-foreground uppercase tracking-wider">
              LeetCode Username
            </label>
            <input
              type="text"
              value={profile.leetcodeUsername || ''}
              onChange={(e) => setProfile({ ...profile, leetcodeUsername: e.target.value })}
              required
              className="w-full px-3.5 py-2.5 bg-muted/50 border border-border/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 text-foreground text-sm font-mono"
              placeholder="harshit1318"
            />
          </div>
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-foreground uppercase tracking-wider">
              LeetCode Profile URL
            </label>
            <input
              type="url"
              value={profile.leetcodeUrl || ''}
              onChange={(e) => setProfile({ ...profile, leetcodeUrl: e.target.value })}
              required
              className="w-full px-3.5 py-2.5 bg-muted/50 border border-border/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 text-foreground text-sm"
              placeholder="https://leetcode.com/u/harshit1318"
            />
          </div>
        </div>
      </div>

      {/* LinkedIn & Resume */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="block text-xs font-semibold text-foreground uppercase tracking-wider flex items-center gap-1.5">
            <Linkedin className="w-3.5 h-3.5 text-blue-500" />
            LinkedIn Profile URL
          </label>
          <input
            type="url"
            value={profile.linkedinUrl || ''}
            onChange={(e) => setProfile({ ...profile, linkedinUrl: e.target.value })}
            required
            className="w-full px-3.5 py-2.5 bg-muted/50 border border-border/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 text-foreground text-sm"
            placeholder="https://linkedin.com/in/..."
          />
        </div>
        <div className="space-y-1.5">
          <label className="block text-xs font-semibold text-foreground uppercase tracking-wider flex items-center gap-1.5">
            <FileText className="w-3.5 h-3.5 text-primary" />
            Default Resume Path
          </label>
          <input
            type="text"
            value={profile.resumeUrl || ''}
            onChange={(e) => setProfile({ ...profile, resumeUrl: e.target.value })}
            required
            className="w-full px-3.5 py-2.5 bg-muted/50 border border-border/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 text-foreground text-sm"
            placeholder="/resume/Resume_Harshit_Kumar.pdf"
          />
        </div>
      </div>
    </motion.div>
  );
}
