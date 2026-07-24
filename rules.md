# 📜 Project Rules & Coding Standards

## Project Name: Harshit Developer Portfolio
**Version:** 1.0.0  
**Stack:** Next.js 16 (App Router) | React 19 | TypeScript | Tailwind CSS v4 | Three.js | MongoDB  
**Document Status:** Active / Production  

---

## 1. Overview & Objectives

This document establishes the mandatory **coding standards, architectural rules, Git workflows, and security protocols** for the Harshit Developer Portfolio codebase. 

Following these guidelines ensures that the repository maintains high code quality, optimal performance, type safety, security compliance, and easy maintainability over time.

---

## 2. Core Development Rules

### 2.1 Next.js 16 & React 19 Standards
- **Server Components First:** All components under `src/app/` and `src/components/` must be React Server Components (RSC) by default. Use `"use client"` **only** when client-side state (`useState`, `useEffect`), event handlers, or browser APIs (Three.js, Framer Motion, Lenis) are required.
- **Dynamic Imports for Heavy Libraries:** WebGL and 3D rendering components (`Three.js`, `@react-three/fiber`) must be dynamically imported with `ssr: false` to prevent server-side hydration mismatches and optimize bundle size.
- **Image & Asset Optimization:** Always use Next.js `Image` component (`next/image`) for image assets with proper `alt` tags, `width`, `height`, and priority flags for above-the-fold assets.

### 2.2 TypeScript & Type Safety
- **Strict Mode Enforced:** `noImplicitAny`, `strictNullChecks`, and `strict` mode must remain `true` in `tsconfig.json`.
- **No Implicit or Explicit `any`:** Avoid using the `any` type. Define explicit TypeScript interfaces under `src/types/` or `src/models/`.
- **Zod Inferred Types:** For API payloads and forms, infer TypeScript types directly from Zod validation schemas using `z.infer<typeof Schema>`.

### 2.3 Styling & UI Rules (Tailwind CSS v4)
- **Tailwind CSS v4 First:** Use Tailwind utility classes for styling. Avoid inline styles unless computing dynamic CSS variables or 3D transform values.
- **Design Token Consistency:** Maintain consistent color palettes, typography scale, and spacing tokens across Light and Dark themes.
- **Dark Mode Compliance:** All UI elements must support theme switching via `next-themes`. Ensure text readability and contrast in both themes.
- **Class Merging:** Use `clsx` and `tailwind-merge` (`cn` helper function under `src/lib/utils.ts`) when combining conditional class names.

### 2.4 Database & Mongoose Rules
- **Cached DB Singleton:** Never create raw Mongoose connections inside API routes. Always import the cached singleton database connection helper (`import dbConnect from "@/lib/db"`).
- **Mongoose Schema Organization:** All Mongoose models must reside in `src/models/` and export typed model interfaces.
- **Data Seeding Integrity:** Database updates and initial seeds must be validated through `scripts/seed.ts` using structured records in `seed.json`.

---

## 3. Security & Environmental Rules

- **Zero Hardcoded Secrets:** Never commit API keys, database connection strings (`MONGODB_URI`), NextAuth secrets (`NEXTAUTH_SECRET`), or email passwords (`EMAIL_PASS`) into source control.
- **Environment Isolation:** Use `.env.local` for local development. Template variable names must be documented in `.env.example`.
- **Server-Side Validation:** Never trust client input. All API route handlers must re-validate payload inputs using Zod schemas on the server side.
- **Password Security:** Passwords must be hashed using `bcryptjs` before persisting to MongoDB.

---

## 4. Git & Commit Guidelines

### 4.1 Commit Message Convention (Conventional Commits)
All commit messages must follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

| Prefix | Description | Example |
|---|---|---|
| `feat:` | Adding a new feature | `feat: add interactive 3D hero canvas element` |
| `fix:` | Fixing a bug | `fix: resolve contact form email validation issue` |
| `docs:` | Documentation updates | `docs: add architecture and PRD documentation` |
| `style:` | Formatting, styling changes | `style: adjust dark mode contrast for project cards` |
| `refactor:` | Code changes without adding features or fixing bugs | `refactor: optimize Mongoose connection caching` |
| `chore:` | Maintenance tasks, dependency updates | `chore: upgrade Next.js to 16.2.9` |

### 4.2 Branch Strategy
- `main` / `master`: Production-ready code automatically deployed to Vercel.
- `feature/*`: Feature development branches (e.g., `feature/admin-dashboard`).
- `fix/*`: Bug fix branches (e.g., `fix/lenis-scroll-lag`).

---

## 5. Quality Assurance & Pre-Push Checklist

Before pushing commits to GitHub or submitting a Pull Request, verify:

- [ ] **Linting:** Run `npm run lint` with 0 errors.
- [ ] **Type Check:** Run `npx tsc --noEmit` to ensure zero TypeScript compilation errors.
- [ ] **Build Verification:** Run `npm run build` locally to verify that production compilation succeeds without errors.
- [ ] **Environment Variables:** Verify `.env.example` is updated if new environment variables were introduced.
- [ ] **No Secrets Exposed:** Double check that no private keys, passwords, or credentials are present in changed files.

---

## 6. Summary & Repository Inclusion Guidance

> **Should `rules.md` be pushed to GitHub?**  
> **Yes, absolutely!** Including a `rules.md` (or `CONTRIBUTING.md`) in your GitHub repository demonstrates **high software engineering maturity, team-readiness, and code quality discipline**. It proves to recruiters and senior developers that you write structured, production-ready code with clear standards.
