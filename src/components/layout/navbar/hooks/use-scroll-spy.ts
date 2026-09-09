import { useEffect, useLayoutEffect, useState, useRef } from "react";

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function useNavbarScrollSpy(pathname: string | null) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("hero");
  const isScrollingRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (pathname !== "/") return;

    const sections = [
      "hero",
      "about",
      "experience",
      "services",
      "skills",
      "projects",
      "certificates",
      "contact",
    ];

    // Determine initial section from URL hash or sessionStorage on reload
    let initialSection = "";
    if (typeof window !== "undefined") {
      const rawHash = window.location.hash.replace("#", "").replace("/", "").trim();
      if (rawHash && sections.includes(rawHash)) {
        initialSection = rawHash;
      } else {
        const savedSection = sessionStorage.getItem("portfolio_last_section");
        if (savedSection && sections.includes(savedSection)) {
          initialSection = savedSection;
        }
      }
    }

    if (initialSection && initialSection !== "hero") {
      isScrollingRef.current = true;
      setActiveHash(initialSection);

      const scrollToTarget = () => {
        const el = document.getElementById(initialSection);
        if (el) {
          const yOffset = -80;
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "instant" as ScrollBehavior });
          window.history.replaceState(null, "", `/#${initialSection}`);
        }
      };

      // Perform instant scroll before browser paint
      scrollToTarget();

      // Double-check on next frame after DOM layout completes
      const frameId = requestAnimationFrame(() => {
        scrollToTarget();
        setTimeout(() => {
          isScrollingRef.current = false;
        }, 200);
      });

      return () => cancelAnimationFrame(frameId);
    } else {
      setActiveHash("hero");
    }
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/") return;

    const sections = [
      "hero",
      "about",
      "experience",
      "services",
      "skills",
      "projects",
      "certificates",
      "contact",
    ];

    const handleScrollSpy = () => {
      if (isScrollingRef.current) return;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollY < 80) {
        setActiveHash("hero");
        sessionStorage.removeItem("portfolio_last_section");
        return;
      }

      if (windowHeight + scrollY >= documentHeight - 50) {
        setActiveHash("contact");
        sessionStorage.setItem("portfolio_last_section", "contact");
        return;
      }

      const offsetHeader = 150;
      let matchedSection = "hero";

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollY + offsetHeader >= top) {
            matchedSection = id;
          }
        }
      }

      if (matchedSection) {
        setActiveHash(matchedSection);
        if (matchedSection === "hero") {
          sessionStorage.removeItem("portfolio_last_section");
        } else {
          sessionStorage.setItem("portfolio_last_section", matchedSection);
          if (window.location.hash !== `/#${matchedSection}` && window.location.hash !== `#${matchedSection}`) {
            window.history.replaceState(null, "", `/#${matchedSection}`);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScrollSpy);
    };
  }, [pathname]);

  return { isScrolled, activeHash, setActiveHash, isScrollingRef };
}
