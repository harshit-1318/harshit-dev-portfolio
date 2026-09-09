"use client";

export function AdminLoadingScreen() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="flex flex-col items-center gap-5">
        {/* Logo mark */}
        <div className="relative">
          <div className="absolute -inset-2 bg-linear-to-r from-primary to-cyan-500 rounded-2xl blur opacity-30 animate-pulse" />
          <div className="relative w-14 h-14 rounded-2xl bg-card border border-primary/30 flex items-center justify-center shadow-lg">
            <div className="w-6 h-6 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
          </div>
        </div>
        <div className="text-center">
          <p className="text-sm font-bold text-foreground font-heading">Loading admin panel</p>
          <p className="text-xs text-muted-foreground mt-1">Verifying your session…</p>
        </div>
        {/* Progress bar */}
        <div className="w-40 h-1 bg-muted rounded-full overflow-hidden">
          <div className="h-full bg-linear-to-r from-primary to-cyan-500 rounded-full animate-[shimmer_1.5s_ease-in-out_infinite] w-1/2" />
        </div>
      </div>
    </div>
  );
}
