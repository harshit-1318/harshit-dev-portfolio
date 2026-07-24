import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useNavbarScrollSpy } from "./use-navbar-scroll-spy";

export function useNavbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  const { isScrolled, activeHash, setActiveHash, isScrollingRef } = useNavbarScrollSpy(pathname);

  const getActiveState = (linkHref: string) => {
    if (linkHref === "/") {
      return pathname === "/" && (activeHash === "hero" || activeHash === "");
    }
    if (linkHref.startsWith("/#")) {
      return pathname === "/" && activeHash === linkHref.substring(2);
    }
    if (linkHref === "/projects" && pathname === "/" && activeHash === "projects") {
      return true;
    }
    return pathname === linkHref;
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === "/" && pathname === "/") {
      e.preventDefault();
      isScrollingRef.current = true;
      window.scrollTo({ top: 0, behavior: "smooth" });
      sessionStorage.removeItem("portfolio_last_section");
      if (window.location.hash) {
        window.history.replaceState(null, "", "/");
      }
      setActiveHash("hero");
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 800);
    } else if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault();
      const id = href.substring(2);
      const el = document.getElementById(id);
      if (el) {
        isScrollingRef.current = true;
        setActiveHash(id);
        sessionStorage.setItem("portfolio_last_section", id);
        const yOffset = -80;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
        window.history.replaceState(null, "", `/#${id}`);
        setTimeout(() => {
          isScrollingRef.current = false;
        }, 800);
      }
    }
  };

  const handleMobileLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsMobileOpen(false);
    handleLinkClick(e, href);
  };

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return {
    pathname,
    isScrolled,
    isMobileOpen,
    setIsMobileOpen,
    getActiveState,
    handleLinkClick,
    handleMobileLinkClick,
  };
}
