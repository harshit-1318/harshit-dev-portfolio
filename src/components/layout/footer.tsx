"use client";

import { usePathname } from "next/navigation";
import { FooterBottom } from "./footer/footer-bottom";
import { FooterBrand } from "./footer/footer-brand";
import { FooterNav } from "./footer/footer-nav";
import { FooterConnect } from "./footer/footer-connect";

export function Footer() {
  const pathname = usePathname();

  if (pathname?.startsWith("/admin")) return null;

  return (
    <footer className="site-footer relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-10 border-t border-border/60 pt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-6">
          <FooterBrand />
          <FooterNav />
          <FooterConnect />
        </div>

        <FooterBottom />
      </div>
    </footer>
  );
}
