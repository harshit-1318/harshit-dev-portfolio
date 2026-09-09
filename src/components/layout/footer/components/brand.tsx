import Link from "next/link";
import { Code2, MapPin, Plane, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/constants";

export function FooterBrand() {
  return (
    <div className="lg:col-span-2 space-y-5">
      <Link href="/" className="inline-flex items-center gap-2.5 text-xl font-bold tracking-tight group">
        <span className="grid size-9 place-items-center rounded-xl border border-primary/30 bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 shadow-sm">
          <Code2 size={20} />
        </span>
        <span className="gradient-text font-extrabold">{siteConfig.name}</span>
      </Link>

      <p className="max-w-sm text-sm leading-relaxed text-slate-700 dark:text-slate-300 font-medium">
        {siteConfig.description}
      </p>

      <div className="pt-1 flex flex-wrap gap-2 text-[11px]">
        <div className="group inline-flex items-center gap-1.5 rounded-full border border-indigo-200/80 dark:border-indigo-500/20 bg-indigo-50/80 dark:bg-indigo-950/30 pl-1.5 pr-3 py-1.5 text-indigo-700 dark:text-indigo-300 font-medium backdrop-blur-sm shadow-sm transition-all duration-300 hover:scale-[1.02]">
          <span className="grid size-4 place-items-center rounded-full bg-indigo-100 dark:bg-indigo-500/20">
            <MapPin size={10} className="text-indigo-600 dark:text-indigo-400" />
          </span>
          <span>{siteConfig.location}</span>
        </div>

        <div className="group inline-flex items-center gap-1.5 rounded-full border border-amber-200/80 dark:border-amber-500/20 bg-amber-50/80 dark:bg-amber-950/30 pl-1.5 pr-3 py-1.5 text-amber-700 dark:text-amber-300 font-medium backdrop-blur-sm shadow-sm transition-all duration-300 hover:scale-[1.02]">
          <span className="grid size-4 place-items-center rounded-full bg-amber-100 dark:bg-amber-500/20">
            <Sparkles size={10} className="text-amber-600 dark:text-amber-400" />
          </span>
          <span>Remote · Hybrid · On-site</span>
        </div>

        <div className="group inline-flex items-center gap-1.5 rounded-full border border-emerald-200/80 dark:border-emerald-500/20 bg-emerald-50/80 dark:bg-emerald-950/30 pl-1.5 pr-3 py-1.5 text-emerald-700 dark:text-emerald-300 font-medium backdrop-blur-sm shadow-sm transition-all duration-300 hover:scale-[1.02]">
          <span className="relative grid size-4 place-items-center rounded-full bg-emerald-100 dark:bg-emerald-500/20">
            <Plane size={10} className="text-emerald-600 dark:text-emerald-400" />
            <span className="absolute -top-0.5 -right-0.5 size-1.5 rounded-full bg-emerald-500 ring-1 ring-emerald-50 dark:ring-emerald-950 animate-pulse" />
          </span>
          <span>Open to Relocate</span>
        </div>
      </div>
    </div>
  );
}
