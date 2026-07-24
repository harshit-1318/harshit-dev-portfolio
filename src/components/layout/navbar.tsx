"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageSquare, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";
import { MobileMenu } from "./navbar/mobile-menu";
import { DesktopLinks } from "./navbar/desktop-links";
import { NavbarLogo } from "./navbar/navbar-logo";
import { useNavbar } from "./navbar/use-navbar";

export function Navbar() {
  const {
    pathname,
    isScrolled,
    isMobileOpen,
    setIsMobileOpen,
    getActiveState,
    handleLinkClick,
    handleMobileLinkClick,
  } = useNavbar();

  if (pathname?.startsWith("/admin")) return null;

  return (
    <>
      <motion.header
        initial={{ y: -96 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
        className="fixed inset-x-0 top-0 z-50 pointer-events-none w-full"
      >
        <div className="absolute inset-x-0 top-0 h-22 bg-background -z-10" />
        <div className="absolute inset-x-0 top-22 h-8 bg-linear-to-b from-background to-transparent -z-10" />

        <div className="px-3 pt-6 sm:px-6 w-full">
          <nav
            aria-label="Primary navigation"
            className={cn(
              "mx-auto flex h-18 max-w-330 items-center justify-between px-6 sm:px-8 pointer-events-auto rounded-full border border-black/5 dark:border-white/10 bg-white/75 dark:bg-[#0f0f14]/75 shadow-[0_12px_40px_rgba(0,0,0,0.06)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.3)] backdrop-blur-[18px] transition-all duration-300",
              isScrolled &&
                "border-black/10 dark:border-white/15 bg-white/90 dark:bg-[#0f0f14]/95 shadow-[0_16px_50px_rgba(0,0,0,0.08)] dark:shadow-[0_16px_50px_rgba(0,0,0,0.5)]"
            )}
          >
            <NavbarLogo onLinkClick={handleLinkClick} />

            <DesktopLinks getActiveState={getActiveState} onLinkClick={handleLinkClick} />

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Link
                href="/#contact"
                onClick={(e) => handleLinkClick(e, "/#contact")}
                className="hidden sm:inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-white/90 text-white dark:text-black rounded-full px-5 py-2 text-xs font-extrabold shadow-lg shadow-black/5 dark:shadow-white/5 hover:shadow-black/10 dark:hover:shadow-white/10 transition-all duration-300 hover:scale-[1.03] cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5 text-current" />
                Let&apos;s connect
              </Link>
              <button
                type="button"
                onClick={() => setIsMobileOpen((open) => !open)}
                className="grid size-10 place-items-center rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10 text-slate-900 dark:text-white transition-all duration-300 lg:hidden"
                aria-label={isMobileOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isMobileOpen}
              >
                {isMobileOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      <MobileMenu
        isOpen={isMobileOpen}
        setIsOpen={setIsMobileOpen}
        getActiveState={getActiveState}
        onLinkClick={handleMobileLinkClick}
      />
    </>
  );
}
