"use client";

import { Link as LinkIcon } from "lucide-react";
import type { IProfileData } from "./personal-details-form";

interface IntegrationsFormProps {
  profile: Partial<IProfileData>;
  setProfile: (data: Partial<IProfileData>) => void;
}

export function IntegrationsForm({ profile, setProfile }: IntegrationsFormProps) {
  return (
    <div className="anime-card rounded-2xl p-6 space-y-4">
      <h2 className="text-lg font-semibold font-[family-name:var(--font-heading)] flex items-center gap-2 text-foreground pb-2 border-b border-border/50">
        <LinkIcon className="w-5 h-5 text-primary" />
        Integrations & Social Links
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-foreground">GitHub Username</label>
          <input
            type="text"
            value={profile.githubUsername || ''}
            onChange={(e) => setProfile({ ...profile, githubUsername: e.target.value })}
            required
            className="w-full px-4 py-2.5 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-foreground">GitHub Profile URL</label>
          <input
            type="url"
            value={profile.githubUrl || ''}
            onChange={(e) => setProfile({ ...profile, githubUrl: e.target.value })}
            required
            className="w-full px-4 py-2.5 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-foreground">LeetCode Username</label>
          <input
            type="text"
            value={profile.leetcodeUsername || ''}
            onChange={(e) => setProfile({ ...profile, leetcodeUsername: e.target.value })}
            required
            className="w-full px-4 py-2.5 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-foreground">LeetCode Profile URL</label>
          <input
            type="url"
            value={profile.leetcodeUrl || ''}
            onChange={(e) => setProfile({ ...profile, leetcodeUrl: e.target.value })}
            required
            className="w-full px-4 py-2.5 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-foreground">LinkedIn URL</label>
          <input
            type="url"
            value={profile.linkedinUrl || ''}
            onChange={(e) => setProfile({ ...profile, linkedinUrl: e.target.value })}
            required
            className="w-full px-4 py-2.5 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-foreground">Resume File URL</label>
          <input
            type="text"
            value={profile.resumeUrl || ''}
            onChange={(e) => setProfile({ ...profile, resumeUrl: e.target.value })}
            required
            className="w-full px-4 py-2.5 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
            placeholder="/resume/Resume_Kunal_Singh.pdf"
          />
        </div>
      </div>
    </div>
  );
}
