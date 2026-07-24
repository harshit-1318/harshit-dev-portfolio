"use client";

import { Save, Loader2, RotateCcw, Sparkles } from 'lucide-react';
import { PersonalDetailsForm } from './personal-details-form';
import { BrandingForm } from './branding-form';
import { IntegrationsForm } from './integrations-form';
import { SettingsHeader } from './settings-header';
import { useSettingsManager } from './use-settings-manager';
import { motion, AnimatePresence } from 'framer-motion';

export function SettingsManager() {
  const { loading, saving, profile, setProfile, handleSubmit, isDirty, resetForm } = useSettingsManager();

  if (loading) {
    return (
      <div className="space-y-6 max-w-4xl animate-pulse">
        <div className="h-14 bg-muted/60 rounded-2xl w-full" />
        <div className="rounded-2xl p-6 h-72 bg-card/40 border border-border/40" />
        <div className="rounded-2xl p-6 h-48 bg-card/40 border border-border/40" />
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-4xl pb-16 relative">
      <SettingsHeader isDirty={isDirty} saving={saving} />

      <form onSubmit={handleSubmit} className="space-y-6">
        <PersonalDetailsForm profile={profile} setProfile={setProfile} />
        <BrandingForm profile={profile} setProfile={setProfile} />
        <IntegrationsForm profile={profile} setProfile={setProfile} />

        {/* Static Save Action Row */}
        <div className="flex items-center justify-between pt-4 border-t border-border/40">
          <div className="text-xs text-muted-foreground flex items-center gap-1.5 font-mono">
            <span className="px-2 py-0.5 rounded-md bg-muted border border-border/60 text-foreground font-bold">Ctrl</span>
            <span>+</span>
            <span className="px-2 py-0.5 rounded-md bg-muted border border-border/60 text-foreground font-bold">S</span>
            <span className="ml-1">to quick save</span>
          </div>

          <div className="flex items-center gap-3">
            {isDirty && (
              <button
                type="button"
                onClick={resetForm}
                disabled={saving}
                className="px-4 py-2.5 rounded-xl border border-border/80 bg-muted/40 hover:bg-muted text-muted-foreground hover:text-foreground font-semibold text-xs transition-all cursor-pointer flex items-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reset Changes
              </button>
            )}

            <button
              type="submit"
              disabled={saving || !isDirty}
              className="px-6 py-2.5 bg-linear-to-r from-primary via-primary to-blue-600 text-primary-foreground font-bold rounded-xl hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer disabled:opacity-50 flex items-center gap-2 text-sm shadow-md"
            >
              {saving ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Saving Settings...</span>
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  <span>{isDirty ? 'Save Changes' : 'Saved'}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </form>

      {/* Floating Bottom Bar when changes exist */}
      <AnimatePresence>
        {isDirty && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            className="fixed bottom-6 right-6 lg:right-10 z-40 p-4 rounded-2xl border border-primary/40 bg-card/95 backdrop-blur-xl shadow-2xl shadow-primary/10 flex items-center gap-4 border-l-4 border-l-primary max-w-md"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-primary/15 text-primary flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4 animate-spin-slow" />
              </div>
              <div className="text-xs">
                <div className="font-bold text-foreground">Unsaved Changes</div>
                <div className="text-muted-foreground">Press save or Ctrl+S to update profile</div>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={resetForm}
                disabled={saving}
                className="px-3 py-1.5 rounded-lg border border-border text-xs font-semibold hover:bg-muted text-muted-foreground transition-all cursor-pointer"
              >
                Reset
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                disabled={saving}
                className="px-4 py-1.5 bg-primary text-primary-foreground text-xs font-bold rounded-lg hover:shadow-lg transition-all cursor-pointer flex items-center gap-1.5"
              >
                {saving ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Save className="w-3.5 h-3.5" />}
                Save
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
