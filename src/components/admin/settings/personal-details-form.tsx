"use client";

import { User, Briefcase, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { PersonalContactFields } from "./personal-contact-fields";

export interface IProfileData {
  name: string;
  title: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  logoColor1: string;
  logoColor2: string;
  linkedinUrl: string;
  githubUrl: string;
  githubUsername: string;
  leetcodeUrl: string;
  leetcodeUsername: string;
  resumeUrl: string;
}

interface PersonalDetailsFormProps {
  profile: Partial<IProfileData>;
  setProfile: (data: Partial<IProfileData>) => void;
}

export function PersonalDetailsForm({ profile, setProfile }: PersonalDetailsFormProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="rounded-2xl p-6 border border-border/60 bg-card/60 backdrop-blur-sm shadow-xs space-y-5"
    >
      <div className="flex items-center gap-2.5 pb-3 border-b border-border/50">
        <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
          <User className="w-4 h-4" />
        </div>
        <h2 className="text-base font-bold font-heading text-foreground">
          Personal Information
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="block text-xs font-semibold text-foreground uppercase tracking-wider flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-primary" />
            Full Name <span className="text-destructive">*</span>
          </label>
          <input
            type="text"
            value={profile.name || ''}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
            required
            className="w-full px-3.5 py-2.5 bg-muted/50 border border-border/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 text-foreground text-sm transition-all"
            placeholder="Harshit Kumar"
          />
        </div>

        <div className="space-y-1.5">
          <label className="block text-xs font-semibold text-foreground uppercase tracking-wider flex items-center gap-1.5">
            <Briefcase className="w-3.5 h-3.5 text-primary" />
            Job Title / Headline <span className="text-destructive">*</span>
          </label>
          <input
            type="text"
            value={profile.title || ''}
            onChange={(e) => setProfile({ ...profile, title: e.target.value })}
            required
            className="w-full px-3.5 py-2.5 bg-muted/50 border border-border/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 text-foreground text-sm transition-all"
            placeholder="Full Stack & AI Engineer"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="block text-xs font-semibold text-foreground uppercase tracking-wider flex items-center gap-1.5">
          <FileText className="w-3.5 h-3.5 text-primary" />
          Bio / Summary <span className="text-destructive">*</span>
        </label>
        <textarea
          value={profile.bio || ''}
          onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
          rows={4}
          required
          className="w-full px-3.5 py-2.5 bg-muted/50 border border-border/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 text-foreground text-sm resize-none leading-relaxed transition-all"
          placeholder="Brief intro for your portfolio hero section..."
        />
      </div>

      <PersonalContactFields profile={profile} setProfile={setProfile} />
    </motion.div>
  );
}
