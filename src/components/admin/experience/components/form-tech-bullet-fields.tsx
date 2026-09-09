"use client";

interface ExperienceFormTechBulletFieldsProps {
  bulletsInput: string;
  setBulletsInput: (val: string) => void;
  technologiesInput: string;
  setTechnologiesInput: (val: string) => void;
}

export function ExperienceFormTechBulletFields({
  bulletsInput,
  setBulletsInput,
  technologiesInput,
  setTechnologiesInput,
}: ExperienceFormTechBulletFieldsProps) {
  return (
    <>
      <div className="space-y-2">
        <label className="block text-sm font-medium text-foreground">
          Technologies Used <span className="text-muted-foreground font-normal">(comma-separated)</span>
        </label>
        <input
          type="text"
          value={technologiesInput}
          onChange={(e) => setTechnologiesInput(e.target.value)}
          className="w-full px-4 py-2.5 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
          placeholder="Python, React, Google Gemini"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-foreground">
          Achievements / Bullet Points <span className="text-muted-foreground font-normal">(one per line)</span>
        </label>
        <textarea
          value={bulletsInput}
          onChange={(e) => setBulletsInput(e.target.value)}
          rows={5}
          required
          className="w-full px-4 py-2.5 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground resize-none text-sm"
          placeholder="Designed and deployed a Generative AI platform..."
        />
      </div>
    </>
  );
}
