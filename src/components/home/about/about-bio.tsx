"use client";

import { ScrollReveal } from "@/components/effects/scroll-reveal";

export function AboutBio() {
  return (
    <>
      <ScrollReveal delay={0.03}>
        <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-heading text-slate-900 dark:text-white tracking-tight leading-tight mb-3.5">
          Passionate Frontend Developer <br className="hidden md:inline" /> &amp; <span className="bg-linear-to-r from-indigo-600 via-purple-600 to-indigo-500 dark:from-[#9a8cff] dark:via-[#b8a7ff] dark:to-[#55d6f2] bg-clip-text text-transparent font-extrabold">UI Builder</span>
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.06}>
        <div className="max-w-2xl space-y-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6 font-normal sm:font-medium">
          <p>
            My journey into frontend engineering is driven by a passion for transforming user interface concepts into smooth, production-grade web applications. I focus on building scalable web architectures with a strong emphasis on clean code, responsive design, and web accessibility using <span className="font-semibold text-slate-900 dark:text-white">React.js, TypeScript, Next.js, and Tailwind CSS</span>.
          </p>
          <p>
            Through hands-on commercial development, I&apos;ve built interactive dashboards, optimized API data flows with <span className="font-semibold text-slate-900 dark:text-white">TanStack Query</span>, and engineered high-throughput data tables using <span className="font-semibold text-slate-900 dark:text-white">TanStack Table</span>. I thrive in Agile environments where design vision meets robust technical execution.
          </p>
        </div>
      </ScrollReveal>

    </>
  );
}
