"use client";

import { useRef, useEffect, RefObject, MutableRefObject } from "react";

interface UseWheelScrollOptions {
  cardsContainerRef: RefObject<HTMLDivElement | null>;
  currentPageRef: MutableRefObject<number>;
  totalPagesRef: MutableRefObject<number>;
  onNext: () => void;
  onPrev: () => void;
}

export function useWheelScroll({
  cardsContainerRef,
  currentPageRef,
  totalPagesRef,
  onNext,
  onPrev,
}: UseWheelScrollOptions) {
  const isThrottled = useRef(false);

  useEffect(() => {
    const container = cardsContainerRef.current;
    if (!container) return;

    const onWheel = (e: WheelEvent) => {
      // Disable wheel trapping on mobile/tablet (< 1024px) so normal touch scroll works naturally
      if (window.innerWidth < 1024) return;

      const total = totalPagesRef.current;
      if (total <= 1 || Math.abs(e.deltaY) < 3) return;

      e.preventDefault();
      if (isThrottled.current) return;

      const curr = currentPageRef.current;
      if (e.deltaY > 0 && curr < total) {
        isThrottled.current = true;
        onNext();
        setTimeout(() => (isThrottled.current = false), 300);
      } else if (e.deltaY < 0 && curr > 1) {
        isThrottled.current = true;
        onPrev();
        setTimeout(() => (isThrottled.current = false), 300);
      }
    };

    container.addEventListener("wheel", onWheel, { passive: false });
    return () => container.removeEventListener("wheel", onWheel);
  }, [cardsContainerRef, currentPageRef, totalPagesRef, onNext, onPrev]);
}
