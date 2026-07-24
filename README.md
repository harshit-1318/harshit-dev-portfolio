# 🚀 Harshit | Full-Stack Developer Portfolio

An interactive, modern, and high-performance developer portfolio built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS v4**, **Framer Motion**, and **Three.js**. Features an admin management system, interactive 3D elements, dynamic project showcases, and MongoDB integration.

---

## ✨ Features

- 🎨 **Modern & Interactive UI:** Smooth scrolling (Lenis), micro-animations (Framer Motion), and 3D graphics (React Three Fiber / Three.js).
- ⚡ **Next.js 16 App Router:** Server Components, API routes, and optimized asset delivery.
- 🔐 **Authentication & Security:** NextAuth.js (v5) integration with MongoDB adapter and bcrypt password encryption.
- 🗄️ **Database & Content Management:** MongoDB & Mongoose schemas for managing projects, experiences, blogs, certificates, and profile details.
- ✉️ **Contact Form:** Integrated with Nodemailer for direct email notifications and MongoDB storage.
- 📊 **Admin Dashboard & Seeding:** Built-in seed scripts (`npm run seed`) and custom management hooks to update portfolio data dynamically.
- 🌓 **Theme Support:** Dark & Light mode integration powered by `next-themes`.
- 📱 **Fully Responsive:** Seamless layout design across mobile, tablet, and desktop viewports.

---

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| **Framework & Core** | Next.js 16, React 19, TypeScript |
| **Styling & UI** | Tailwind CSS v4, Framer Motion, Lenis Smooth Scroll, Lucide Icons |
| **3D & Graphics** | Three.js, @react-three/fiber, @react-three/drei, OGL |
| **Backend & Database** | MongoDB, Mongoose, NextAuth.js v5, Nodemailer |
| **Form & Validation** | React Hook Form, Zod |
| **Deployment** | Vercel |

---

## 📁 Project Structure

```
.
├── data/               # Static seed data (projects, blogs, experience, etc.)
├── public/             # Static assets, previews, and PDF resume
├── scripts/            # Database seeding scripts (`seed.ts`)
├── src/
│   ├── app/            # Next.js App Router (Pages, API routes, Layouts)
│   ├── components/     # Reusable UI components, 3D Canvas, Navbar, Admin
│   ├── lib/            # Utility functions, DB connection, Auth helpers
│   ├── models/         # Mongoose DB schemas (Project, Blog, Experience, etc.)
│   └── types/          # TypeScript interface definitions
├── .env.example        # Environment variables template
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
Make sure you have Node.js (v18+) and npm installed on your machine.

### 1. Clone the Repository
```bash
git clone https://github.com/harshit-1318/harshit-dev-portfolio.git
cd harshit-dev-portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Environment Variables
Create a `.env.local` file in the root directory and add your credentials:
```env
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```

### 4. Seed Database (Optional)
To populate the database with initial portfolio data:
```bash
npm run seed
```

### 5. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 Deployment

This portfolio is optimized for deployment on **Vercel**:

1. Push your code to GitHub.
2. Import the repository on [Vercel](https://vercel.com).
3. Add your Environment Variables in the Vercel dashboard.
4. Click **Deploy**.

---

## 🤝 Live Demo & Connect

- 🌐 **Live Website:** [harshit-dev-portfolio.vercel.app](https://harshit-dev-portfolio.vercel.app)
- 🐙 **GitHub:** [@harshit-1318](https://github.com/harshit-1318)
- 💼 **LinkedIn:** [harshit-kumar](https://www.linkedin.com/in/harshit-kumar)
- 📧 **Email:** [kumarharshit370@gmail.com](mailto:kumarharshit370@gmail.com)

---

*Designed & Developed with ❤️ by Harshit*