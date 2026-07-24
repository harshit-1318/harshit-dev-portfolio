"use client";

import { Save, Loader2 } from 'lucide-react';
import { PersonalDetailsForm } from './personal-details-form';
import { BrandingForm } from './branding-form';
import { IntegrationsForm } from './integrations-form';
import { SettingsHeader } from './settings-header';
import { useSettingsManager } from './use-settings-manager';

export function SettingsManager() {
  const { loading, saving, profile, setProfile, handleSubmit } = useSettingsManager();

  if (loading) {
    return (
      <div className="space-y-6 max-w-4xl animate-pulse">
        <div className="h-10 bg-muted rounded-xl w-64" />
        <div className="rounded-2xl p-6 h-72 bg-card/40 border border-border/40" />
        <div className="rounded-2xl p-6 h-48 bg-card/40 border border-border/40" />
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

        <div className="flex items-center gap-3 justify-end pt-2">
          <button
            type="submit"
            disabled={saving}
            className="px-6 py-3 bg-linear-to-r from-primary to-primary/90 text-primary-foreground font-bold rounded-xl hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer disabled:opacity-50 flex items-center gap-2 text-sm shadow-md"
          >
            {saving ? (
              <>
                <Loader2 className="w-4.5 h-4.5 animate-spin" />
                <span>Saving Settings...</span>
              </>
            ) : (
              <>
                <Save className="w-4.5 h-4.5" />
                <span>Save All Settings</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
