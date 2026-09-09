"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { navLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";
import React from "react";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  getActiveState: (href: string) => boolean;
  onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

export function MobileMenu({ isOpen, setIsOpen, getActiveState, onLinkClick }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.button
            type="button"
            aria-label="Close navigation menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/80 backdrop-blur-md lg:hidden"
            onClick={() => setIsOpen(false)}
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 220 }}
            className="mobile-nav-panel fixed inset-y-0 right-0 z-50 w-[min(88vw,360px)] overflow-y-auto p-6 lg:hidden"
          >
            <div className="mb-8 flex items-center justify-between">
              <span className="eyebrow">Explore portfolio</span>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="grid size-11 place-items-center rounded-xl hover:bg-muted"
                aria-label="Close navigation menu"
              >
                <X size={20} />
              </button>
            </div>
            <div className="flex flex-col gap-1">
              {navLinks.map((link, index) => {
                  const active = getActiveState(link.href);

                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 18 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.025 }}
                    >
                      <Link
                        href={link.href}
                        onClick={(e) => onLinkClick(e, link.href)}
                        className={cn(
                          "flex min-h-12 items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-300",
                          active
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        )}
                      >
                        {link.name}
                        <ArrowUpRight size={14} aria-hidden="true" />
                      </Link>
                    </motion.div>
                  );
                })}
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
