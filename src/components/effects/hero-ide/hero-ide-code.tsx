"use client";

import { TabId } from "./hero-ide-data";

const Kw = ({ children }: { children: React.ReactNode }) => <span className="text-[#c678dd] font-semibold">{children}</span>;
const Var = ({ children }: { children: React.ReactNode }) => <span className="text-[#61afef]">{children}</span>;
const Key = ({ children }: { children: React.ReactNode }) => <span className="text-[#e06c75]">{children}</span>;
const Str = ({ children }: { children: React.ReactNode }) => <span className="text-[#98c379]">{children}</span>;
const Punc = ({ children }: { children: React.ReactNode }) => <span className="text-zinc-300 dark:text-zinc-400">{children}</span>;
const Comment = ({ children }: { children: React.ReactNode }) => <span className="text-zinc-500 italic">{children}</span>;

interface HeroIdeCodeProps {
  activeTab: TabId;
}

export function HeroIdeCode({ activeTab }: HeroIdeCodeProps) {
  if (activeTab === "globals.css") {
    return (
      <div className="space-y-1">
        <div><Comment>/* Tailwind Design System Tokens */</Comment></div>
        <div><Kw>@theme</Kw> <Punc>{"{"}</Punc></div>
        <div>&nbsp;&nbsp;<Key>--color-primary</Key><Punc>: </Punc><Str>#6366f1</Str><Punc>;</Punc></div>
        <div>&nbsp;&nbsp;<Key>--color-accent</Key><Punc>: </Punc><Str>#38bdf8</Str><Punc>;</Punc></div>
        <div>&nbsp;&nbsp;<Key>--font-heading</Key><Punc>: </Punc><Str>&quot;Outfit&quot;</Str><Punc>;</Punc></div>
        <div><Punc>{"}"}</Punc></div>
        <div className="pt-2"><Kw>.glass-card</Kw> <Punc>{"{"}</Punc></div>
        <div>&nbsp;&nbsp;<Key>backdrop-filter</Key><Punc>: </Punc><Str>blur(16px)</Str><Punc>;</Punc></div>
        <div>&nbsp;&nbsp;<Key>border</Key><Punc>: </Punc><Str>1px solid rgba(255, 255, 255, 0.08)</Str><Punc>;</Punc></div>
        <div><Punc>{"}"}</Punc></div>
      </div>
    );
  }

  if (activeTab === "page.tsx") {
    return (
      <div className="space-y-1">
        <div><Kw>import</Kw> <Punc>{"{"}</Punc> <Var>HeroSection</Var> <Punc>{"}"}</Punc> <Kw>from</Kw> <Str>&quot;@/components/home/hero&quot;</Str><Punc>;</Punc></div>
        <div><Kw>import</Kw> <Punc>{"{"}</Punc> <Var>usePortfolio</Var> <Punc>{"}"}</Punc> <Kw>from</Kw> <Str>&quot;@/hooks/usePortfolio&quot;</Str><Punc>;</Punc></div>
        <div className="pt-2"><Kw>export default function</Kw> <Var>HomePage</Var><Punc>() {"{"}</Punc></div>
        <div>&nbsp;&nbsp;<Kw>const</Kw> <Punc>{"{"}</Punc> <Var>data</Var> <Punc>{"}"}</Punc> = <Var>usePortfolio</Var><Punc>()</Punc><Punc>;</Punc></div>
        <div>&nbsp;&nbsp;<Kw>return</Kw> <Punc>(</Punc></div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;<Punc>&lt;</Punc><Key>main</Key> <Var>className</Var><Punc>=</Punc><Str>&quot;min-h-screen relative&quot;</Str><Punc>&gt;</Punc></div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Punc>&lt;</Punc><Var>HeroSection</Var> <Var>profile</Var><Punc>=</Punc><Punc>{"{"}</Punc><Var>data.profile</Var><Punc>{"}"}</Punc> <Punc>/&gt;</Punc></div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;<Punc>&lt;/</Punc><Key>main</Key><Punc>&gt;</Punc></div>
        <div>&nbsp;&nbsp;<Punc>);</Punc></div>
        <div><Punc>{"}"}</Punc></div>
      </div>
    );
  }

  return (
    <div className="space-y-1">
      <div><Kw>const</Kw> <Var>developer</Var> = <Punc>{"{"}</Punc></div>
      <div>&nbsp;&nbsp;<Key>name</Key><Punc>: </Punc><Str>&quot;Harshit&quot;</Str><Punc>,</Punc></div>
      <div>&nbsp;&nbsp;<Key>role</Key><Punc>: </Punc><Str>&quot;Frontend Developer&quot;</Str><Punc>,</Punc></div>
      <div>&nbsp;&nbsp;<Key>company</Key><Punc>: </Punc><Str>&quot;CSharma Consultancy&quot;</Str><Punc>,</Punc></div>
      <div>&nbsp;&nbsp;<Key>product</Key><Punc>: </Punc><Str>&quot;YourMedicals (UK Healthcare)&quot;</Str><Punc>,</Punc></div>
      <div>&nbsp;&nbsp;<Key>experience</Key><Punc>: </Punc><Str>&quot;9+ Months&quot;</Str><Punc>,</Punc></div>
      <div>&nbsp;&nbsp;<Key>stack</Key><Punc>: [</Punc><Str>&quot;React&quot;</Str><Punc>, </Punc><Str>&quot;TypeScript&quot;</Str><Punc>, </Punc><Str>&quot;Astro&quot;</Str><Punc>, </Punc><Str>&quot;Next.js&quot;</Str><Punc>],</Punc></div>
      <div>&nbsp;&nbsp;<Key>status</Key><Punc>: </Punc><Str>&quot;Available for Full-Time&quot;</Str>
        <span className="inline-block w-1.75 h-3.25 bg-primary ml-1 align-middle rounded-[1px] animate-[pulse_1s_ease-in-out_infinite]" />
      </div>
      <div><Punc>{"}"}</Punc><Punc>;</Punc></div>
    </div>
  );
}
