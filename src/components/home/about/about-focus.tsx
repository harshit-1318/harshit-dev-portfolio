"use client";

import { Zap } from "lucide-react";

export function AboutFocus() {
  const focusItems = [
    {
      emoji: "🧩",
      title: "Component Architecture",
      desc: "Designing reusable & maintainable UI components.",
      gradient: "from-indigo-500/15 via-purple-500/10 to-indigo-500/5",
      borderColor: "border-indigo-500/25",
      textColor: "text-indigo-600 dark:text-indigo-400",
    },
    {
      emoji: "⚡",
      title: "Performance Optimization",
      desc: "Optimizing speed, accessibility & UX metrics.",
      gradient: "from-amber-500/15 via-orange-500/10 to-amber-500/5",
      borderColor: "border-amber-500/25",
      textColor: "text-amber-600 dark:text-amber-400",
    },
    {
      emoji: "📱",
      title: "Responsive UI Engineering",
      desc: "Building seamless experiences across all devices.",
      gradient: "from-cyan-500/15 via-blue-500/10 to-cyan-500/5",
      borderColor: "border-cyan-500/25",
      textColor: "text-cyan-600 dark:text-cyan-400",
    },
  ];

  return (
    <div className="space-y-3.5 text-left">
      <div className="flex items-center gap-2 border-b border-slate-200/80 dark:border-slate-800/80 pb-2.5">
        <div className="p-1 rounded-md bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
          <Zap size={14} className="stroke-[2.5]" />
        </div>
        <h3 className="font-bold text-[11px] uppercase tracking-wider text-slate-700 dark:text-slate-300 font-mono">
          Professional Focus
        </h3>
      </div>

      <div className="space-y-2">
        {focusItems.map((item, idx) => (
          <div
            key={idx}
            className="group/focus flex items-start gap-3 p-2 rounded-xl border border-transparent hover:border-slate-200/80 dark:hover:border-slate-800/80 hover:bg-slate-100/60 dark:hover:bg-slate-800/40 transition-all duration-300"
          >
            {/* Custom Icon Box */}
            <div
              className={`shrink-0 w-9 h-9 rounded-lg bg-linear-to-br ${item.gradient} border ${item.borderColor} flex items-center justify-center text-lg select-none shadow-2xs group-hover/focus:scale-110 transition-transform duration-300`}
            >
              <span>{item.emoji}</span>
            </div>

            <div className="space-y-0.5 pt-0.5">
              <h4 className={`text-sm font-bold text-slate-900 dark:text-white leading-tight group-hover/focus:${item.textColor} transition-colors duration-200`}>
                {item.title}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-normal">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
