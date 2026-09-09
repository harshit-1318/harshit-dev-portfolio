"use client";

import { useEffect } from "react";

export function SpatialInteractions() {
  useEffect(() => {
    let activeSurface: HTMLElement | null = null;
    let frame = 0;
    let pointerX = 0;
    let pointerY = 0;

    const resetSurface = (surface: HTMLElement | null) => {
      if (!surface) return;
      surface.style.setProperty("--surface-rx", "0deg");
      surface.style.setProperty("--surface-ry", "0deg");
      surface.style.setProperty("--surface-light-x", "50%");
      surface.style.setProperty("--surface-light-y", "50%");
    };

    const updateSurface = () => {
      frame = 0;
      if (!activeSurface) return;
      const rect = activeSurface.getBoundingClientRect();
      const normalizedX = (pointerX - rect.left) / rect.width - 0.5;
      const normalizedY = (pointerY - rect.top) / rect.height - 0.5;
      activeSurface.style.setProperty("--surface-rx", `${normalizedY * -4}deg`);
      activeSurface.style.setProperty("--surface-ry", `${normalizedX * 5}deg`);
      activeSurface.style.setProperty(
        "--surface-light-x",
        `${Math.max(0, Math.min(100, (normalizedX + 0.5) * 100))}%`
      );
      activeSurface.style.setProperty(
        "--surface-light-y",
        `${Math.max(0, Math.min(100, (normalizedY + 0.5) * 100))}%`
      );
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      const target = event.target as HTMLElement | null;
      const nextSurface = target?.closest<HTMLElement>(
        ".anime-card, .glass-card, .glass-panel, .spatial-surface"
      ) ?? null;

      if (nextSurface !== activeSurface) {
        resetSurface(activeSurface);
        activeSurface = nextSurface;
      }

      pointerX = event.clientX;
      pointerY = event.clientY;
      if (activeSurface && frame === 0) {
        frame = window.requestAnimationFrame(updateSurface);
      }
    };

    const handlePointerLeave = () => {
      resetSurface(activeSurface);
      activeSurface = null;
    };

    document.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.addEventListener("pointerleave", handlePointerLeave);
    return () => {
      document.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerleave", handlePointerLeave);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
