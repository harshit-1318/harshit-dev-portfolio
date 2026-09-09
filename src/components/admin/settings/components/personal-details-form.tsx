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
  const bioLength = profile.bio?.length || 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="rounded-2xl p-6 border border-border/70 bg-card/70 backdrop-blur-md shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300 space-y-5"
    >
      <div className="flex items-center justify-between pb-3 border-b border-border/50">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-xs">
            <User className="w-4.5 h-4.5" />
          </div>
          <div>
            <h2 className="text-base font-bold font-heading text-foreground">
              Personal Information
            </h2>
            <p className="text-xs text-muted-foreground">
              Your core profile details displayed across the portfolio hero section and footer
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Full Name */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-foreground uppercase tracking-wider flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-primary" />
            Full Name <span className="text-destructive">*</span>
          </label>
          <input
            type="text"
            value={profile.name || ''}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
            required
            className="w-full px-3.5 py-2.5 bg-muted/40 border border-border/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary text-foreground text-sm transition-all duration-200"
            placeholder="Harshit Kumar"
          />
        </div>

        {/* Job Title / Headline */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-foreground uppercase tracking-wider flex items-center gap-1.5">
            <Briefcase className="w-3.5 h-3.5 text-primary" />
            Job Title / Headline <span className="text-destructive">*</span>
          </label>
          <input
            type="text"
            value={profile.title || ''}
            onChange={(e) => setProfile({ ...profile, title: e.target.value })}
            required
            className="w-full px-3.5 py-2.5 bg-muted/40 border border-border/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary text-foreground text-sm transition-all duration-200"
            placeholder="Frontend Developer & Software Engineer"
          />
        </div>
      </div>

      {/* Bio / Summary */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <label className="text-xs font-semibold text-foreground uppercase tracking-wider flex items-center gap-1.5">
            <FileText className="w-3.5 h-3.5 text-primary" />
            Bio / Summary <span className="text-destructive">*</span>
          </label>
          <span className={`text-xs font-mono ${bioLength > 450 ? 'text-amber-500 font-bold' : 'text-muted-foreground'}`}>
            {bioLength} chars
          </span>
        </div>
        <textarea
          value={profile.bio || ''}
          onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
          rows={4}
          required
          className="w-full px-3.5 py-2.5 bg-muted/40 border border-border/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary text-foreground text-sm resize-none leading-relaxed transition-all duration-200"
          placeholder="Brief intro for your portfolio hero section..."
        />
      </div>

      <PersonalContactFields profile={profile} setProfile={setProfile} />
    </motion.div>
  );
}
