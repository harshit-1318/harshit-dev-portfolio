"use client";

import { User } from "lucide-react";
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
    <div className="anime-card rounded-2xl p-6 space-y-4">
      <h2 className="text-lg font-semibold font-heading flex items-center gap-2 text-foreground pb-2 border-b border-border/50">
        <User className="w-5 h-5 text-primary" />
        Personal Details
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-foreground">Name</label>
          <input
            type="text"
            value={profile.name || ''}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
            required
            className="w-full px-4 py-2.5 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-foreground">Job Title</label>
          <input
            type="text"
            value={profile.title || ''}
            onChange={(e) => setProfile({ ...profile, title: e.target.value })}
            required
            className="w-full px-4 py-2.5 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-foreground">Bio</label>
        <textarea
          value={profile.bio || ''}
          onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
          rows={4}
          required
          className="w-full px-4 py-2.5 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground resize-none leading-relaxed"
        />
      </div>

      <PersonalContactFields profile={profile} setProfile={setProfile} />
    </div>
  );
}
