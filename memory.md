# 🧠 Project Memory Bank & Context State

## Project Name: Harshit Developer Portfolio
**Version:** 1.0.0  
**Stack:** Next.js 16 (App Router) | React 19 | TypeScript | Tailwind CSS v4 | Three.js | MongoDB  
**Document Status:** Active / Production  

---

## 1. Project Context & Identity

The **Harshit Developer Portfolio** is an interactive, modern, full-stack developer portfolio and content management system. It showcases Harshit's software engineering capabilities, projects, work experience, education, skills, certificates, and technical blog posts.

---

## 2. Active System State

- **Deployment Status:** Production Active on Vercel at [harshit-dev-portfolio.vercel.app](https://harshit-dev-portfolio.vercel.app).
- **Core Framework:** Next.js 16 (App Router) running on React 19 and TypeScript 5.
- **Visual & 3D Layer:** Three.js, `@react-three/fiber`, `@react-three/drei`, OGL, Framer Motion, Lenis Smooth Scroll.
- **Database & Auth:** MongoDB Atlas connected via Mongoose v9, secured with NextAuth.js v5 (JWT session strategy, `@auth/mongodb-adapter`, `bcryptjs`).
- **Documentation Suite:** Complete documentation suite (`prd.md`, `architecture.md`, `rules.md`, `phases.md`, `design.md`, `memory.md`) added to repository.

---

## 3. Key Architecture & Engineering Decisions

1. **Server Components First:** Maximizing Next.js React Server Components (RSC) to minimize client-side JS bundle sizes.
2. **Dynamic 3D Canvas Imports:** WebGL 3D canvas modules imported with `{ ssr: false }` to avoid SSR hydration mismatches and prevent rendering blocking.
3. **Mongoose Singleton Pattern:** Cached connection instance in `src/lib/db.ts` to prevent serverless function connection pool exhaustion.
4. **Tailwind CSS v4 Design System:** `@theme` token definitions in `src/styles/base.css` with `@custom-variant dark` for OLED-first dark mode.
5. **Form Validation & Mail Pipeline:** Client & server-side validation via Zod schemas, emailing via Nodemailer SMTP, persistence in MongoDB `ContactMessage` collection.

---

## 4. Key Directory & File Mapping

- `src/app/` — Next.js App Router (Pages, Layouts, API Route handlers under `/api/`)
- `src/components/` — React UI components (3D Canvas under `3d/`, Section blocks under `sections/`, UI primitives under `ui/`)
- `src/models/` — 11 Mongoose DB Schemas (`User`, `Profile`, `Project`, `Experience`, `Education`, `Skill`, `Certificate`, `ContactMessage`, `Resume`, `Blog`, `JobPost`)
- `src/lib/` — Mongoose DB connection (`db.ts`), Mailer utility (`mailer.ts`), Auth helpers
- `src/styles/` — Tailwind CSS v4 base stylesheet (`base.css`) & component styles
- `scripts/seed.ts` & `seed.json` — Database population CLI utility (`npm run seed`)

---

## 5. Gotchas & Technical Learnings

- **WebGL Hydration:** Three.js canvas components must never run during SSR; always wrap with `next/dynamic` and `ssr: false`.
- **Serverless DB Connections:** Avoid `mongoose.connect()` inside individual route handlers without checking the global cached connection state (`global.mongoose`).
- **Tailwind v4 Theme Tokens:** Theme variables use custom CSS properties declared under `@theme` block rather than legacy `tailwind.config.js`.

---

## 6. Summary & Repository Inclusion Guidance

> **Should `memory.md` be pushed to GitHub?**  
> **Yes, absolutely!** Adding `memory.md` to your repository ensures that AI assistants, team members, and open-source contributors can immediately understand the project state, engineering decisions, and technical context without reading every source file.
