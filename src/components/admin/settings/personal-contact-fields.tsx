"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import type { IProfileData } from "./personal-details-form";

interface PersonalContactFieldsProps {
  profile: Partial<IProfileData>;
  setProfile: (data: Partial<IProfileData>) => void;
}

export function PersonalContactFields({ profile, setProfile }: PersonalContactFieldsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
      {/* Email */}
      <div className="space-y-1.5">
        <label className="text-xs font-semibold text-foreground uppercase tracking-wider flex items-center gap-1.5">
          <Mail className="w-3.5 h-3.5 text-primary" />
          Email Address <span className="text-destructive">*</span>
        </label>
        <input
          type="email"
          value={profile.email || ''}
          onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          required
          className="w-full px-3.5 py-2.5 bg-muted/40 border border-border/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary text-foreground text-sm transition-all duration-200 placeholder:text-muted-foreground/50"
          placeholder="kumarharshit370@gmail.com"
        />
      </div>

      {/* Phone */}
      <div className="space-y-1.5">
        <label className="text-xs font-semibold text-foreground uppercase tracking-wider flex items-center gap-1.5">
          <Phone className="w-3.5 h-3.5 text-primary" />
          Phone Number
        </label>
        <input
          type="text"
          value={profile.phone || ''}
          onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
          className="w-full px-3.5 py-2.5 bg-muted/40 border border-border/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary text-foreground text-sm transition-all duration-200 placeholder:text-muted-foreground/50"
          placeholder="+91-7814283095"
        />
      </div>

      {/* Location */}
      <div className="space-y-1.5">
        <label className="text-xs font-semibold text-foreground uppercase tracking-wider flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-primary" />
          Location / Region
        </label>
        <input
          type="text"
          value={profile.location || ''}
          onChange={(e) => setProfile({ ...profile, location: e.target.value })}
          className="w-full px-3.5 py-2.5 bg-muted/40 border border-border/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary text-foreground text-sm transition-all duration-200 placeholder:text-muted-foreground/50"
          placeholder="Jalandhar, Punjab, India"
        />
      </div>
    </div>
  );
}
