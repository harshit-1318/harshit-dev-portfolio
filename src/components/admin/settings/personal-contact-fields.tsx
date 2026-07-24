"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import type { IProfileData } from "./personal-details-form";

interface PersonalContactFieldsProps {
  profile: Partial<IProfileData>;
  setProfile: (data: Partial<IProfileData>) => void;
}

export function PersonalContactFields({ profile, setProfile }: PersonalContactFieldsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground flex items-center gap-1">
          <Mail className="w-3.5 h-3.5" /> Email
        </label>
        <input
          type="email"
          value={profile.email || ''}
          onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          required
          className="w-full px-4 py-2.5 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground flex items-center gap-1">
          <Phone className="w-3.5 h-3.5" /> Phone
        </label>
        <input
          type="text"
          value={profile.phone || ''}
          onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
          className="w-full px-4 py-2.5 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground flex items-center gap-1">
          <MapPin className="w-3.5 h-3.5" /> Location
        </label>
        <input
          type="text"
          value={profile.location || ''}
          onChange={(e) => setProfile({ ...profile, location: e.target.value })}
          className="w-full px-4 py-2.5 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
        />
      </div>
    </div>
  );
}
