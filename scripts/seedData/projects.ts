export const projectsData = [
  {
    title: "YourMedicals Prescriber Portal",
    slug: "yourmedicals-portal",
    description: "Engineered frontend modules of a live healthcare prescriber portal for a UK-based client, delivering reusable components and responsive layouts.",
    longDescription: "Engineered the frontend of the production-ready YourMedicals Prescriber Portal for a UK-based healthcare client, delivering reusable components, responsive layouts, and a seamless user experience. Architected secure REST API integrations using Axios and TanStack Query, streamlining data fetching and state management to boost application performance and reliability.",
    techStack: ["Astro", "React.js", "TypeScript", "Tailwind CSS", "Axios", "TanStack Query"],
    features: [
      "Production-ready healthcare prescriber portal for UK client",
      "Reusable UI components and responsive layouts ensuring cross-device consistency",
      "Secure REST API integrations with optimized data fetching/caching",
      "Seamless user experience and robust state management"
    ],
    githubUrl: "",
    liveUrl: "",
    category: "WebApp",
    featured: true,
    order: 1,
    image: "/yourmedicals_preview.png",
    metrics: {
      latency: "120ms (API)",
      efficiency: "40% faster data fetching",
      components: "30+ reusable UI components",
      testCoverage: "95% layout consistency"
    },
    challenges: "Integrating real-time medical prescriber data while maintaining low-latency layout rendering and state synchronization across multiple views.",
    solutions: "Implemented caching and prefetching strategies with TanStack Query. Built modular React components styled with Tailwind CSS, compiled using Vite to ensure optimal browser execution speeds.",
    architectureSteps: [
      { title: "Layout Construction", description: "Vite compiles React/Astro pages with Tailwind CSS utility styles." },
      { title: "API Integration", description: "Axios requests securely fetch prescriber data from the backend portal." },
      { title: "Data Caching", description: "TanStack Query handles caching and automated validation of clinical endpoints." },
      { title: "Component Rendering", description: "Modular UI elements dynamically render patient dashboards and order workflows." }
    ]
  },
  {
    title: "EventElite",
    slug: "eventelite",
    description: "A full-stack event management platform with secure authentication, event creation, registration, and user management.",
    longDescription: "Developed a full-stack event management platform with secure authentication, event creation, registration, and user management features.",
    techStack: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MySQL"],
    features: [
      "Secure user authentication and role-based access control",
      "Event creation, editing, deletion, and attendee registration",
      "Interactive event calendars and user profile dashboards",
      "Relational database storage using MySQL with optimized search queries"
    ],
    githubUrl: "https://github.com/harshit-1318/eventelite",
    liveUrl: "",
    category: "FullStack",
    featured: true,
    order: 2,
    image: "/eventelite_preview.png",
    metrics: {
      latency: "90ms",
      security: "JWT & Bcrypt Encryption",
      concurrency: "100+ registrations/min"
    },
    challenges: "Managing concurrent event registrations and preventing double-booking errors during high traffic periods.",
    solutions: "Implemented transaction isolation levels in MySQL queries and optimized database connection pooling.",
    architectureSteps: [
      { title: "Frontend Client", description: "Captured registration inputs and managed user session state." },
      { title: "API Route Validation", description: "Express middleware authenticated JWT tokens and sanitized inputs." },
      { title: "SQL Controller", description: "MySQL database stored relational registration and event tables." }
    ]
  },
  {
    title: "RentNest",
    slug: "rentnest",
    description: "An Airbnb-inspired rental booking platform featuring user authentication, property listings, booking workflows, and review management.",
    longDescription: "Built an Airbnb-inspired rental booking platform featuring user authentication, property listings, booking workflows, and review management.",
    techStack: ["Node.js", "Express.js", "MongoDB", "EJS"],
    features: [
      "Comprehensive property listing creation with image uploads",
      "Booking workflows with start/end date calculations",
      "Review management system for property feedback",
      "NoSQL storage with MongoDB schema validation"
    ],
    githubUrl: "https://github.com/harshit-1318/rentnest",
    liveUrl: "",
    category: "FullStack",
    featured: true,
    order: 3,
    image: "/rentnest_preview.png",
    metrics: {
      latency: "110ms",
      dbLookup: "45ms index searches",
      coverage: "92% route tests"
    },
    challenges: "Developing a dynamic UI using EJS templates while handling complex nested documents for reviews and booking status states.",
    solutions: "Designed modular mongoose schemas with subdocuments and pre-save hooks to automatically aggregate review ratings.",
    architectureSteps: [
      { title: "EJS Layout rendering", description: "Renders server-side templates with dynamic data inputs." },
      { title: "Express routing", description: "Directs request threads to booking and property controller actions." },
      { title: "Mongoose database", description: "Stores collections for users, listings, bookings, and reviews." }
    ]
  }
];
