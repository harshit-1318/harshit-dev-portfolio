# 🤖 AI Prompts & System Guidance

## Project Name: Harshit Developer Portfolio
**Purpose:** Developer AI Prompts, System Guidelines & Prompt Engineering Standards  
**Document Status:** Active / Production  

---

## 1. Overview

This document contains the curated **AI system prompts, agent guidelines, and prompt engineering patterns** used during the design, development, and maintenance of the Harshit Developer Portfolio.

---

## 2. Core AI Agent System Guidelines

When interacting with AI coding assistants (e.g. Antigravity, Gemini, ChatGPT) for this repository, the following rules apply:

```markdown
- **Framework & Stack:** Always use Next.js 16 App Router, React 19, TypeScript, and Tailwind CSS v4.
- **Server Components:** Default to Server Components; use `"use client"` only for interactivity/WebGL/state.
- **3D Graphics:** Dynamic import Three.js / React Three Fiber components with `{ ssr: false }`.
- **Database Access:** Always use `import dbConnect from "@/lib/db"` for Mongoose operations.
- **Type Safety:** Maintain strict TypeScript compliance; no implicit or explicit `any` types.
- **Styling:** Use Tailwind CSS v4 utility classes and `@theme` CSS variables defined in `src/styles/base.css`.
```

---

## 3. Maintenance & Feature Expansion Prompts

### 3.1 Adding a New Mongoose Model & API Route
> "Create a new Mongoose model under `src/models/[ModelName].ts` with full TypeScript interfaces, timestamps, and default values. Then create the corresponding Next.js 16 App Router API route under `src/app/api/[route]/route.ts` with Zod validation and Mongoose singleton DB connection."

### 3.2 Building a 3D WebGL Element
> "Build a React Three Fiber 3D component under `src/components/3d/` with smooth mouse interaction, ambient lighting, and dynamic import `{ ssr: false }` to prevent SSR hydration errors."

---

## 4. Repository Inclusion Guidance

> **Should `prompts.md` be pushed to GitHub?**  
> **Yes!** Including `prompts.md` in your repository demonstrates that you leverage **modern AI-assisted software development workflows, prompt engineering, and structured AI agent guidance**.
