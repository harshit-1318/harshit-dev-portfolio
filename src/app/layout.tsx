import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AnimeBackground } from "@/components/effects/anime-background";
import { SmoothScrollProvider } from "@/components/effects/smooth-scroll-provider";
import { ScrollProgress } from "@/components/effects/scroll-progress";

import { Toaster } from "sonner";
import { ScrollNavButton } from "@/components/effects/scroll-nav-button";
import {
  SpatialInteractions,
  SpatialWorld,
} from "@/components/effects/spatial-world";

export const metadata: Metadata = {
  title: {
    default: "Harshit | Frontend Developer",
    template: "%s | Harshit",
  },
  description:
    "Frontend Developer with 9+ Months of hands-on experience building production web applications using React, TypeScript, Astro, Next.js, and Tailwind CSS.",
  keywords: [
    "Harshit",
    "Harshit Kumar",
    "Frontend Developer",
    "React Developer",
    "Astro Developer",
    "TypeScript",
    "Tailwind CSS",
    "Portfolio",
    "Next.js",
  ],
  authors: [{ name: "Harshit" }],
  creator: "Harshit",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Harshit | Frontend Developer",
    description:
      "Frontend Developer with 9+ Months of hands-on experience building production web applications using React, TypeScript, Astro, Next.js, and Tailwind CSS.",
    siteName: "Harshit Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const originalWarn = console.warn;
                console.warn = function(...args) {
                  if (args[0] && typeof args[0] === 'string' && args[0].includes('THREE.Clock: This module has been deprecated')) {
                    return;
                  }
                  originalWarn.apply(console, args);
                };
              })();
            `
          }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider>
          <SmoothScrollProvider>
            <ScrollProgress />
            <a href="#main-content" className="skip-link">Skip to content</a>
            <AnimeBackground />
            <SpatialWorld />
            <SpatialInteractions />
            <Navbar />
            <main id="main-content" className="min-h-screen relative z-10">{children}</main>
            <ScrollNavButton />

            <Footer />
            <Toaster
              position="bottom-right"
              toastOptions={{
                style: {
                  background: "var(--color-card)",
                  border: "1px solid var(--color-border)",
                  color: "var(--color-foreground)",
                },
              }}
            />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
