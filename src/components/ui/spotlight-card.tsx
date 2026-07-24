"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  spotlightColor?: string;
  className?: string;
  containerClassName?: string;
}

export function SpotlightCard({
  children,
  spotlightColor = "rgba(99, 102, 241, 0.15)",
  className,
  containerClassName,
  ...props
}: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!divRef.current || e.touches.length === 0) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({
      x: e.touches[0].clientX - rect.left,
      y: e.touches[0].clientY - rect.top,
    });
    setOpacity(1);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!divRef.current || e.touches.length === 0) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({
      x: e.touches[0].clientX - rect.left,
      y: e.touches[0].clientY - rect.top,
    });
    setOpacity(1);
  };

  const handleTouchEnd = () => {
    setTimeout(() => setOpacity(0), 1200);
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-indigo-500/15 dark:border-white/10 bg-white/90 dark:bg-[#121214]/85 backdrop-blur-md transition-all duration-300 hover:border-indigo-500/40 hover:shadow-lg dark:hover:shadow-indigo-500/10 active:border-indigo-500/40 active:scale-[0.99] transform-[translateZ(0)] backface-hidden",
        className
      )}
      {...props}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
        }}
      />
      <div className={cn("relative z-10 h-full flex flex-col justify-between", containerClassName)}>{children}</div>
    </div>
  );
}
