# 📄 Product Requirement Document (PRD)

## Project Name: Harshit Developer Portfolio
**Version:** 1.0.0  
**Author:** Harshit  
**Status:** In Production / Active Development  
**Live Application:** [harshit-dev-portfolio.vercel.app](https://harshit-dev-portfolio.vercel.app)  
**Repository:** [github.com/harshit-1318/harshit-dev-portfolio](https://github.com/harshit-1318/harshit-dev-portfolio)

---

## 1. Executive Summary & Overview

The **Harshit Developer Portfolio** is a full-stack, highly interactive web application designed to showcase personal software engineering projects, professional experience, technical skillsets, and technical blog posts. Built using **Next.js 16 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS v4**, **Three.js**, and **MongoDB**, the application combines high performance, modern aesthetic design (glassmorphism, micro-animations, 3D visual elements), and dynamic backend data management.

---

## 2. Problem Statement & Objectives

### Problem Statement
Standard static developer portfolios (flat HTML/CSS or basic template sites) often fail to stand out, lack dynamic content management capabilities (requiring code changes for simple updates), and rarely demonstrate full-stack engineering competency (backend APIs, authentication, database integration, 3D graphics).

### Primary Objectives
1. **Visual & Interactive Impact:** Deliver a modern UI experience using Framer Motion animations, Three.js 3D elements, and smooth scrolling (Lenis) to engage recruiters and clients.
2. **Full-Stack Demonstrability:** Show mastery over Next.js 16 App Router, React 19, server components, API routes, database schemas, authentication, and form validation.
3. **Dynamic Content Management:** Enable easy management of portfolio content (projects, experiences, blogs, profile metadata) via MongoDB & Mongoose schemas and automated seeding utilities.
4. **Direct Communication Channel:** Provide an interactive contact form backed by server side email delivery (Nodemailer) and persistent database storage.

---

## 3. Target Audience

- **Technical Recruiters & Talent Acquisition Teams:** Looking for clear project highlights, tech stack tags, live links, and code repositories.
- **Engineering Managers & Tech Leads:** Evaluating candidate code quality, architectural choices, UI/UX refinement, and full-stack capabilities.
- **Freelance Clients & Collaborators:** Seeking a professional overview of past experience, services offered, and direct contact options.

---

## 4. Key Functional Features & Requirements

### 4.1 UI Layout & Interactive Presentation
- **Hero & Profile Showcase:**
  - Interactive hero section with typewriter dynamic headings (`react-type-animation`).
  - Interactive 3D graphics rendering powered by Three.js & `@react-three/fiber` / `@react-three/drei` / `ogl`.
  - Dark/Light mode theme toggle (`next-themes`).
  - Smooth inertia scrolling integrated via Lenis.
- **Projects Showcase:**
  - Dynamic display of featured projects with tech tags, description, live links, and GitHub repository links.
  - Category filtering and responsive grid layout.
- **Experience Timeline:**
  - Chronological timeline displaying past employment history, job titles, responsibilities, and achievements.
- **Blogs / Tech Articles:**
  - Section presenting developer articles, guides, and thoughts with read time and date stamps.
- **Interactive Contact System:**
  - React Hook Form validation backed by Zod schemas.
  - Email notification system powered by Nodemailer.
  - Submission storage in MongoDB database.
  - Toast notifications (`sonner`) upon message dispatch.

### 4.2 Backend & Data Architecture
- **NextAuth.js (v5) Authentication:**
  - Credentials-based authentication secured with `bcryptjs` password hashing.
  - MongoDB Adapter (`@auth/mongodb-adapter`) for persistent user sessions.
- **Mongoose Database Schemas:**
  - Defined schemas for Projects, Experience, Blogs, Certificates, and Profile metadata.
- **Database Seeding (`scripts/seed.ts`):**
  - Command line seeding capability (`npm run seed`) allowing fast population of initial portfolio records.

---

## 5. Technical Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 16 (App Router), React 19, TypeScript |
| **Styling & UI** | Tailwind CSS v4, Framer Motion, Lenis, Lucide React Icons |
| **3D Rendering** | Three.js, `@react-three/fiber`, `@react-three/drei`, OGL |
| **Database & ODM** | MongoDB, Mongoose v9 |
| **Authentication** | NextAuth.js v5, `@auth/mongodb-adapter`, BcryptJS |
| **Form & Validation**| React Hook Form, Zod v4 |
| **Notifications & Mail** | Nodemailer, Sonner |
| **Deployment** | Vercel Platform |

---

## 6. Non-Functional Requirements (NFRs)

- **Performance & Optimization:**
  - Fast initial page load via Next.js Server Components and dynamic code splitting for 3D heavy components.
  - Asset optimization (images, vectors, font loading).
- **SEO (Search Engine Optimization):**
  - Semantic HTML5 structure.
  - Dynamic Meta Titles, Open Graph tags, and Meta Descriptions.
- **Security:**
  - Environmental variables (`.env.local`) for sensitive credentials (`MONGODB_URI`, `NEXTAUTH_SECRET`, `EMAIL_PASS`).
  - Strict input sanitization and Zod server-side validation on all API endpoints.
  - Bcrypt salt & password hashing for authentication.
- **Responsiveness:**
  - Fully responsive design optimized for mobile (320px+), tablet, desktop, and ultra-wide displays.

---

## 7. Future Enhancements & Roadmap

- [ ] **Admin Dashboard GUI:** Full visual CMS interface for real-time CRUD operations without requiring CLI seed execution.
- [ ] **MDX Blog Engine:** Support for markdown/MDX formatted blog posts with code snippet syntax highlighting.
- [ ] **Analytics Dashboard:** Integration of privacy-focused site analytics to track project views and click-through rates.
- [ ] **Multi-language Support (i18n):** Internationalization support for multi-language portfolio viewing.

---

## 8. Summary & Repository Inclusion Guidance

> **Should `prd.md` be pushed to GitHub?**  
> **Yes, absolutely!** Including a well-documented PRD in your GitHub repository demonstrates high professionalism, structured product thinking, clear technical planning, and execution discipline to recruiters, hiring managers, and open-source contributors. Make sure no secret credentials or sensitive private environment variables are included.
