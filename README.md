<div align="center">

# ⚡ Harshit — Frontend Developer Portfolio

**Production-ready, high-performance portfolio and content management system built with Next.js 16, React 19, TypeScript, Tailwind CSS v4, and Three.js.**

[![Next.js 16](https://img.shields.io/badge/Next.js-16.2-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-3D_WebGL-black?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

[🌐 Live Demo](https://harshit-dev-portfolio.vercel.app) • [📄 View Resume](https://harshit-dev-portfolio.vercel.app/resume/Resume_Harshit.pdf) • [💼 LinkedIn](https://www.linkedin.com/in/harshit-kumar) • [🐙 GitHub](https://github.com/harshit-1318) • [✉️ Contact](mailto:kumarharshit370@gmail.com)

</div>

---

## 🌟 Overview

This repository powers **[harshit-dev-portfolio.vercel.app](https://harshit-dev-portfolio.vercel.app)** — a modern full-stack developer portfolio engineering showcase. It combines a dynamic 3D WebGL spatial universe, interactive IDE code playground, live project showcases with architecture drawers, dark/light theme switching, and an authenticated admin control dashboard backed by MongoDB Atlas.

### 🎯 Key Engineering Highlights

- **⚡ Next.js 16 & React 19:** Built on the Next.js App Router using React Server Components (RSC) and client component islands for optimal Core Web Vitals.
- **🎨 Tailwind CSS v4 `@theme` Engine:** Modern design token architecture using `@theme` CSS custom properties, glassmorphism, and OLED dark mode.
- **🌌 Spatial 3D WebGL Universe:** Interactive Three.js canvas loaded via `@react-three/fiber` and OGL with dynamic client-only imports (`ssr: false`) ensuring zero layout shift.
- **💻 Interactive Hero IDE:** Desktop interactive IDE mock with active tabs, syntax highlighting, and 3D parallax mouse tilt.
- **🛡️ Authenticated Admin CMS:** NextAuth.js v5 with MongoDB adapter and bcrypt encryption to manage projects, messages, and site configuration.
- **💾 Dual-Mode Data Persistence:** Connects to live MongoDB Atlas cloud database with an automated zero-downtime fallback to local offline seed data (`seed.json` / `data/seed/`) if offline.
- **📨 Serverless Contact Mailer:** Contact form with client/server Zod validation, Nodemailer SMTP transport, and MongoDB message storage.

---

## 🛠️ Tech Stack

| Domain | Technologies |
| :--- | :--- |
| **Framework & Core** | Next.js 16 (Turbopack), React 19, TypeScript 5 |
| **Styling & Design System** | Tailwind CSS v4, Lucide React, CSS Variables, `next-themes` |
| **3D & Animation** | Three.js, `@react-three/fiber`, `@react-three/drei`, OGL, Framer Motion, Lenis Smooth Scroll |
| **Database & ODM** | MongoDB Atlas, Mongoose v9 |
| **Auth & Security** | NextAuth.js v5 (Beta), BcryptJS, Zod Validation |
| **Forms & State** | React Hook Form, TanStack Table, Sonner Toaster |
| **Email Gateway** | Nodemailer (SMTP Gateway) |
| **Deployment & CI** | Vercel (Edge & Serverless) |

---

## 🚀 Key Modules & Showcase

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  [1. Hero Stage]         • Interactive 3D WebGL Particles & Spatial Ring   │
│                          • Interactive Hero IDE with 3D Parallax Tilt       │
│                                                                             │
│  [2. About & Focus]      • Career metrics, core focus areas, & bio         │
│                          • Education & accreditation cards                  │
│                                                                             │
│  [3. Experience]         • Production history at CSharma Consultancy        │
│                          • Order Management Dashboard & UK healthcare work  │
│                                                                             │
│  [4. Services / Bento]   • High-impact bento grid of engineering services   │
│                                                                             │
│  [5. Skills Matrix]      • Filterable skill categories with page swipe      │
│                          • Category search & mobile swipe gesture controls  │
│                                                                             │
│  [6. Projects Showcase]  • MediPulse Portal (Healthcare multi-tenant)       │
│                          • SolarShare (P2P energy trading platform)         │
│                          • EventElite, RentNest, and interactive mockups    │
│                          • Architecture drawers with step-by-step flows     │
│                                                                             │
│  [7. Admin Dashboard]    • Authenticated `/admin` CMS management portal     │
│                          • Message inbox, stats, & profile editors          │
│                                                                             │
│  [8. Contact Channel]    • Nodemailer-backed SMTP pipeline with DB inbox    │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 📁 Project Structure

```
D:\Main Portfolio\
├── data/
│   └── seed/                  # Offline fallback JSON records for mock DB mode
├── docs/                      # Comprehensive technical architecture & PRD docs
│   ├── architecture.md        # System architecture, Jamstack layers & flowcharts
│   ├── database.md            # Mongoose schemas, collection fields & ER diagram
│   ├── design.md              # Typography hierarchy, tokens & glassmorphism specs
│   ├── memory.md              # Key architectural decisions & technical learnings
│   ├── phases.md              # Development roadmap, milestones & sprint status
│   ├── prd.md                 # Product Requirement Document & functional specs
│   ├── PROFILE.md             # Developer resume & work history summary
│   ├── prompts.md             # AI prompt engineering guidelines & standards
│   ├── rules.md               # Coding standards, RSC rules & commit guidelines
│   └── security.md            # Threat model, NextAuth JWT & vulnerability report
├── public/
│   ├── *_preview.png          # Project showcase screenshots
│   └── resume/
│       └── Resume_Harshit.pdf # Downloadable developer resume
├── scripts/
│   ├── seed.ts                # Database seeding CLI utility (`npm run seed`)
│   └── seedData/              # Strongly-typed seed collections
├── src/
│   ├── app/                   # Next.js App Router (pages, layouts, /api/*)
│   │   ├── admin/             # Authenticated Admin CMS dashboard
│   │   ├── api/               # Serverless API routes (auth, projects, contact)
│   │   ├── globals.css        # Modular CSS entry point
│   │   └── page.tsx           # Homepage composition
│   ├── components/            # Component design system
│   │   ├── admin/             # Admin dashboard UI modules
│   │   ├── effects/           # 3D spatial world, Hero IDE, scroll buttons
│   │   ├── home/              # Hero, About, Experience, Skills, Projects
│   │   ├── layout/            # Navbar, Footer, Theme toggle
│   │   ├── shared/            # Section headings, brand SVGs
│   │   └── ui/                # UI primitives (SpotlightCard, buttons)
│   ├── data/                  # Static portfolio JSON files (projects, skills)
│   ├── hooks/                 # Custom React hooks (usePortfolio, mappers)
│   ├── lib/                   # Database singleton, auth, mailer, utilities
│   ├── models/                # 11 Mongoose database models
│   ├── styles/                # Tailwind v4 CSS partials (base, cards, layout)
│   └── types/                 # TypeScript interfaces and type contracts
├── .env.example               # Template for environment variables
├── eslint.config.mjs          # ESLint 9 configuration
├── next.config.ts             # Next.js framework configuration
├── package.json               # Dependencies and scripts
└── tsconfig.json              # TypeScript strict configuration
```

---

## 📚 Technical Documentation

Detailed architecture specifications, database schemas, and engineering rules are organized inside the **[`docs/`](./docs)** directory:

| Document | Focus Area | Description |
| :--- | :---: | :--- |
| [🏗️ Architecture](./docs/architecture.md) | System Design | Serverless Jamstack topology, Mermaid data flow, and layers |
| [🗄️ Database](./docs/database.md) | Data Layer | MongoDB collections, Mongoose schemas, and ER diagram |
| [🎨 Design System](./docs/design.md) | UI / UX | Typography scale, Tailwind v4 design tokens, and glassmorphic cards |
| [📄 PRD](./docs/prd.md) | Product Specs | Requirements document, functional objectives, and scope |
| [🗓️ Roadmap & Phases](./docs/phases.md) | Milestones | Project development milestones and future feature roadmap |
| [📜 Coding Standards](./docs/rules.md) | Code Quality | React Server Component rules, TypeScript strictness, Git guidelines |
| [🛡️ Security Policy](./docs/security.md) | Security | JWT authentication, CSRF/XSS protection, and disclosure policy |
| [👤 Profile Summary](./docs/PROFILE.md) | Profile | Harshit's professional work experience, achievements, and bio |
| [🤖 AI Prompts](./docs/prompts.md) | Workflows | Prompt engineering conventions and AI agent guidance |
| [🧠 Project Memory Bank](./docs/memory.md) | Engineering Log | Architecture decisions, state tracking, and technical gotchas |

---

## ⚡ Quick Start

### Prerequisites
- **Node.js**: `v18.17.0` or higher
- **npm** or **pnpm**
- **MongoDB Atlas** database connection string (optional; runs in offline mock mode if omitted)

### 1. Clone & Install

```bash
git clone https://github.com/harshit-1318/harshit-dev-portfolio.git
cd harshit-dev-portfolio
npm install
```

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
# Database
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/portfolio?retryWrites=true&w=majority

# NextAuth Configuration
NEXTAUTH_SECRET=your_nextauth_secret_key_generate_with_openssl
NEXTAUTH_URL=http://localhost:3000

# Email Delivery (Nodemailer SMTP)
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password
CONTACT_RECEIVER_EMAIL=your_email@gmail.com
```

> **Note:** If `MONGODB_URI` is omitted or connection fails, the application automatically switches to **static mock mode** using records from `seed.json`, allowing full offline local development.

### 3. Seed the Database (Optional)

Populate your MongoDB database with sample projects, experience, skills, and admin accounts:

```bash
npm run seed
```

### 4. Run Development Server

```bash
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)** in your browser.

---

## 📋 Available Scripts

| Script | Command | Purpose |
| :--- | :--- | :--- |
| **`npm run dev`** | `next dev --turbopack` | Starts development server with fast Turbopack HMR |
| **`npm run build`** | `next build` | Compiles production bundle & generates static pages |
| **`npm run start`** | `next start` | Runs production server locally |
| **`npm run lint`** | `eslint` | Executes ESLint 9 checks across all source files |
| **`npm run seed`** | `npx tsx scripts/seed.ts` | Seeds MongoDB collections from `seed.json` |

---

## 🌐 Production Deployment

This portfolio is optimized for deployment on **[Vercel](https://vercel.com/)**:

1. Fork or push your repository to GitHub.
2. Import the project on the [Vercel Dashboard](https://vercel.com/new).
3. Under **Environment Variables**, add:
   - `MONGODB_URI`
   - `NEXTAUTH_SECRET`
   - `NEXTAUTH_URL` (e.g. `https://your-domain.vercel.app`)
   - `EMAIL_USER` & `EMAIL_PASS`
4. Click **Deploy**. Vercel will automatically build and distribute the app across global Edge locations.

---

## 🤝 Connect & Socials

- **Portfolio:** [harshit-dev-portfolio.vercel.app](https://harshit-dev-portfolio.vercel.app)
- **LinkedIn:** [linkedin.com/in/harshit-kumar](https://www.linkedin.com/in/harshit-kumar)
- **GitHub:** [@harshit-1318](https://github.com/harshit-1318)
- **Email:** [kumarharshit370@gmail.com](mailto:kumarharshit370@gmail.com)
- **Phone:** +91-7814283095

---

<div align="center">

*Designed & Developed with ❤️ by **Harshit** • © 2026 All Rights Reserved*

</div>