"use client";

import { useCallback } from "react";

/**
 * Cubic ease-in-out easing function: (t: [0, 1]) => [0, 1]
 */
function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

/**
 * Hook to smoothly scroll to in-page anchor targets with custom duration and easing.
 * Respects fixed header offset and cancels default abrupt jumps.
 */
export function useSmoothScroll(headerOffset = 64, duration = 1000) {
  const scrollTo = useCallback(
    (
      e: React.MouseEvent<HTMLAnchorElement>,
      targetId: string,
      onComplete?: () => void
    ) => {
      // Check if it's an in-page anchor link
      if (!targetId.startsWith("#") && targetId !== "/") {
        return;
      }

      e.preventDefault();

      if (typeof window === "undefined") return;

      const isHome = targetId === "#" || targetId === "/" || targetId === "#home";
      let destination = 0;

      if (!isHome) {
        try {
          const targetEl = document.querySelector<HTMLElement>(targetId);
          if (targetEl) {
            const elPosition = targetEl.getBoundingClientRect().top + window.scrollY;
            destination = Math.max(0, elPosition - headerOffset);
          } else {
            return;
          }
        } catch {
          return;
        }
      }

      const startPosition = window.scrollY;
      const distance = destination - startPosition;

      // If already at destination, complete immediately
      if (Math.abs(distance) < 5) {
        onComplete?.();
        return;
      }

      let startTime: number | null = null;

      function step(currentTime: number) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = easeInOutCubic(progress);

        window.scrollTo(0, startPosition + distance * ease);

        if (timeElapsed < duration) {
          requestAnimationFrame(step);
        } else {
          onComplete?.();
        }
      }

      requestAnimationFrame(step);
    },
    [headerOffset, duration]
  );

  return { scrollTo };
}
