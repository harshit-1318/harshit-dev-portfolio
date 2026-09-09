"use client";

import { Link as LinkIcon, FileText, Code2, ExternalLink, CheckCircle2 } from "lucide-react";
import { Github, Linkedin } from "@/components/shared/brand-icons";
import { motion } from "framer-motion";
import type { IProfileData } from "./personal-details-form";

interface IntegrationsFormProps {
  profile: Partial<IProfileData>;
  setProfile: (data: Partial<IProfileData>) => void;
}

interface IntegrationCardProps {
  title: string;
  icon: React.ReactNode;
  username: string;
  onUsernameChange: (val: string) => void;
  url: string;
  onUrlChange: (val: string) => void;
  usernameLabel: string;
  urlLabel: string;
  usernamePlaceholder: string;
  urlPlaceholder: string;
}

function IntegrationCard({
  title,
  icon,
  username,
  onUsernameChange,
  url,
  onUrlChange,
  usernameLabel,
  urlLabel,
  usernamePlaceholder,
  urlPlaceholder,
}: IntegrationCardProps) {
  const isConnected = Boolean(username?.trim());

  return (
    <div className="p-4 rounded-2xl border border-border/70 bg-muted/20 space-y-3.5 hover:border-border transition-all">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm font-bold text-foreground font-heading">
          {icon}
          <span>{title}</span>
        </div>
        {isConnected ? (
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-500 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
            <CheckCircle2 className="w-3 h-3" /> Connected
          </span>
        ) : (
          <span className="text-[11px] text-muted-foreground font-medium">Not Configured</span>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="block text-xs font-semibold text-foreground uppercase tracking-wider">
            {usernameLabel}
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => onUsernameChange(e.target.value)}
            required
            className="w-full px-3.5 py-2.5 bg-muted/40 border border-border/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary text-foreground text-sm font-mono transition-all"
            placeholder={usernamePlaceholder}
          />
        </div>
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label className="block text-xs font-semibold text-foreground uppercase tracking-wider">
              {urlLabel}
            </label>
            {url && (
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="text-[11px] text-primary hover:underline flex items-center gap-0.5 font-medium"
              >
                Test Link <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
          <input
            type="url"
            value={url}
            onChange={(e) => onUrlChange(e.target.value)}
            required
            className="w-full px-3.5 py-2.5 bg-muted/40 border border-border/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary text-foreground text-sm transition-all"
            placeholder={urlPlaceholder}
          />
        </div>
      </div>
    </div>
  );
}

export function IntegrationsForm({ profile, setProfile }: IntegrationsFormProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15, duration: 0.3 }}
      className="rounded-2xl p-6 border border-border/70 bg-card/70 backdrop-blur-md shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300 space-y-6"
    >
      <div className="flex items-center gap-2.5 pb-3 border-b border-border/50">
        <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-xs">
          <LinkIcon className="w-4.5 h-4.5" />
        </div>
        <div>
          <h2 className="text-base font-bold font-heading text-foreground">
            Integrations & Social Links
          </h2>
          <p className="text-xs text-muted-foreground">
            Connect your developer profiles, competitive coding platforms, and public resume
          </p>
        </div>
      </div>

      {/* GitHub Integration */}
      <IntegrationCard
        title="GitHub Integration"
        icon={
          <div className="w-7 h-7 rounded-lg bg-zinc-800 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 flex items-center justify-center shadow-xs">
            <Github className="w-4 h-4 fill-current" />
          </div>
        }
        username={profile.githubUsername || ''}
        onUsernameChange={(val) => setProfile({ ...profile, githubUsername: val })}
        url={profile.githubUrl || ''}
        onUrlChange={(val) => setProfile({ ...profile, githubUrl: val })}
        usernameLabel="GitHub Username"
        urlLabel="GitHub Profile URL"
        usernamePlaceholder="harshit-1318"
        urlPlaceholder="https://github.com/harshit-1318"
      />

      {/* LeetCode Integration */}
      <IntegrationCard
        title="LeetCode Integration"
        icon={
          <div className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-500 flex items-center justify-center shadow-xs">
            <Code2 className="w-4 h-4" />
          </div>
        }
        username={profile.leetcodeUsername || ''}
        onUsernameChange={(val) => setProfile({ ...profile, leetcodeUsername: val })}
        url={profile.leetcodeUrl || ''}
        onUrlChange={(val) => setProfile({ ...profile, leetcodeUrl: val })}
        usernameLabel="LeetCode Username"
        urlLabel="LeetCode Profile URL"
        usernamePlaceholder="harshit1318"
        urlPlaceholder="https://leetcode.com/u/harshit1318"
      />

      {/* LinkedIn & Resume */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label className="text-xs font-semibold text-foreground uppercase tracking-wider flex items-center gap-1.5">
              <Linkedin className="w-3.5 h-3.5 text-blue-500" />
              LinkedIn Profile URL
            </label>
            {profile.linkedinUrl && (
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="text-[11px] text-primary hover:underline flex items-center gap-0.5 font-medium"
              >
                Test Link <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
          <input
            type="url"
            value={profile.linkedinUrl || ''}
            onChange={(e) => setProfile({ ...profile, linkedinUrl: e.target.value })}
            required
            className="w-full px-3.5 py-2.5 bg-muted/40 border border-border/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary text-foreground text-sm transition-all"
            placeholder="https://linkedin.com/in/..."
          />
        </div>

        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label className="text-xs font-semibold text-foreground uppercase tracking-wider flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-primary" />
              Default Resume Path
            </label>
            {profile.resumeUrl && (
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="text-[11px] text-primary hover:underline flex items-center gap-0.5 font-medium"
              >
                View PDF <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
          <input
            type="text"
            value={profile.resumeUrl || ''}
            onChange={(e) => setProfile({ ...profile, resumeUrl: e.target.value })}
            required
            className="w-full px-3.5 py-2.5 bg-muted/40 border border-border/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary text-foreground text-sm transition-all"
            placeholder="/resume/Resume_Harshit.pdf"
          />
        </div>
      </div>
    </motion.div>
  );
}
