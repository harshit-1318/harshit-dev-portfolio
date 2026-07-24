# 🗓️ Project Development Phases & Roadmap

## Project Name: Harshit Developer Portfolio
**Version:** 1.0.0  
**Stack:** Next.js 16 (App Router) | React 19 | TypeScript | Tailwind CSS v4 | Three.js | MongoDB  
**Document Status:** Active / Production  

---

## 1. Overview

This document outlines the detailed **milestones, development phases, deliverables, and release roadmap** for the Harshit Developer Portfolio. 

Tracking development phases ensures structured feature delivery, transparent progress monitoring, and clear prioritization of future enhancements.

---

## 2. Development Phases & Milestones

```mermaid
gantt
    title Development Phases Roadmap
    dateFormat  YYYY-MM-DD
    section Completed Phases
    Phase 1 Foundation & Architecture      
    Phase 2 Interactive UI & 3D WebGL       
    Phase 3 Backend, Auth & DB Schemas      
    Phase 4 Contact Gateway & Seeding Tools 
    Phase 5 Performance & Vercel Deployment 
    section Current & Future
    Phase 6 Admin CMS Dashboard            
    Phase 7 MDX Engine & Analytics         
```

---

### 🟢 Phase 1: Foundation & Architecture Setup (Status: COMPLETED)
**Goal:** Initialize full-stack repository, configure core dependencies, and establish development standards.

- [x] Initialize Next.js 16 (App Router) with React 19 and TypeScript strict mode.
- [x] Configure Tailwind CSS v4 design tokens and `next-themes` dark/light mode provider.
- [x] Set up directory topology (`src/app`, `src/components`, `src/models`, `src/lib`, `src/types`).
- [x] Configure ESLint 9, PostCSS, and TypeScript path aliases (`@/*`).
- [x] Establish environment variable template (`.env.example`).

---

### 🟢 Phase 2: Interactive Presentation & 3D UI Layer (Status: COMPLETED)
**Goal:** Build high-impact, visual UI components with smooth animations and 3D graphics.

- [x] Build Hero Section with dynamic typewriter heading animation (`react-type-animation`).
- [x] Integrate Three.js 3D canvas (`@react-three/fiber`, `@react-three/drei`, `ogl`) with dynamic import (`ssr: false`).
- [x] Integrate Lenis smooth scrolling engine for smooth inertia scrolling across viewports.
- [x] Build Projects Showcase grid with tech tags, description cards, live demo links, and GitHub repos.
- [x] Build Experience & Education timeline components.
- [x] Build Skills & Certification showcase grid.

---

### 🟢 Phase 3: Backend Services, Auth & Database Schema (Status: COMPLETED)
**Goal:** Design persistent database layer, authentication system, and server-side data models.

- [x] Set up MongoDB Atlas cluster and cached Mongoose connection manager (`src/lib/db.ts`).
- [x] Design Mongoose schemas: `User`, `Profile`, `Project`, `Experience`, `Education`, `Skill`, `Certificate`, `ContactMessage`, `Resume`, `Blog`, `JobPost`.
- [x] Integrate NextAuth.js v5 with Credentials Provider and `@auth/mongodb-adapter`.
- [x] Implement password hashing and verification using `bcryptjs`.
- [x] Create server-side API route handlers under `src/app/api/`.

---

### 🟢 Phase 4: Communication Gateway & Data Seeding Utilities (Status: COMPLETED)
**Goal:** Enable interactive visitor communication and database population utilities.

- [x] Build Contact Form component using `react-hook-form` and `zod` client/server validation.
- [x] Configure Nodemailer SMTP integration to send instant contact emails to Harshit.
- [x] Persist contact form submissions into Mongoose `ContactMessage` collection.
- [x] Add real-time user notification toasts using `sonner`.
- [x] Build CLI Database Seeding Tool (`npm run seed` executing `scripts/seed.ts`) reading structured JSON data (`seed.json`).

---

### 🟢 Phase 5: Optimization, Testing & Vercel Deployment (Status: COMPLETED)
**Goal:** Maximize Core Web Vitals performance, conduct security audits, and release to production.

- [x] Optimize asset delivery (WebP images, lazy-loaded 3D modules, font subsetting).
- [x] Configure SEO metadata, Open Graph cards, Twitter metadata, and structured JSON-LD schemas.
- [x] Run linting (`npm run lint`), type checking (`npx tsc --noEmit`), and production build verification (`npm run build`).
- [x] Connect GitHub repository `harshit-1318/harshit-dev-portfolio` to Vercel CI/CD.
- [x] Launch production live application at [harshit-dev-portfolio.vercel.app](https://harshit-dev-portfolio.vercel.app).

---

### 🟡 Phase 6: Visual Admin CMS Dashboard (Status: IN PROGRESS)
**Goal:** Build a full visual admin interface for real-time CRUD operations without CLI seeding.

- [ ] Implement secured `/admin/dashboard` layout protected by NextAuth middleware.
- [ ] Build Projects CRUD management interface (Create, Edit, Delete, Reorder).
- [ ] Build Experience & Education management views.
- [ ] Build Contact Messages inbox & audit log viewer.
- [ ] Integrate Cloudinary / UploadThing for direct image file uploads.

---

### 🔵 Phase 7: MDX Engine & Ecosystem Expansion (Status: PLANNED)
**Goal:** Expand developer blog engine and privacy-focused site analytics.

- [ ] Integrate MDX blog publishing engine with code syntax highlighting.
- [ ] Implement privacy-focused web analytics to track page views and project clicks.
- [ ] Add Multi-Language (i18n) support for global recruiters.
- [ ] Add Interactive Terminal / CLI mode for developer visitors.

---

## 3. Summary & Repository Inclusion Guidance

> **Should `phases.md` be pushed to GitHub?**  
> **Yes, absolutely!** Adding `phases.md` (Development Roadmap) to your GitHub repository demonstrates **strong product management vision, structured sprint execution, and roadmap transparency**. It shows hiring managers that your project is actively maintained and built with long-term engineering vision.
