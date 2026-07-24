"use client";

import { Save } from 'lucide-react';
import { PersonalDetailsForm } from './personal-details-form';
import { BrandingForm } from './branding-form';
import { IntegrationsForm } from './integrations-form';
import { SettingsHeader } from './settings-header';
import { useSettingsManager } from './use-settings-manager';

export function SettingsManager() {
  const { loading, saving, profile, setProfile, handleSubmit } = useSettingsManager();

  if (loading) {
    return (
      <div className="space-y-6 animate-pulse">
        <div className="h-8 bg-muted rounded w-48" />
        <div className="anime-card rounded-2xl p-6 h-96" />
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-4xl">
      <SettingsHeader />

      <form onSubmit={handleSubmit} className="space-y-6">
        <PersonalDetailsForm profile={profile} setProfile={setProfile} />
        <BrandingForm profile={profile} setProfile={setProfile} />
        <IntegrationsForm profile={profile} setProfile={setProfile} />

        <div className="flex items-center gap-3 justify-end">
          <button
            type="submit"
            disabled={saving}
            className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition cursor-pointer disabled:opacity-50 flex items-center gap-2"
          >
            <Save className="w-4.5 h-4.5" />
            {saving ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </form>
    </div>
  );
}
