"use client";

import { useEffect } from "react";

/**
 * Reveals elements marked with `data-reveal` as they scroll into view.
 *
 *   <div data-reveal>…</div>          fades/slides the element itself
 *   <div data-reveal="group">…</div>  fades/slides each direct child, staggered
 *
 * Nothing is hidden until this component has mounted, so the page is fully
 * visible without JavaScript and for people who prefer reduced motion.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const root = document.documentElement;
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    // Anything already on screen (e.g. after a refresh mid-page) is shown
    // straight away so it never flashes hidden.
    const viewportHeight = window.innerHeight;
    targets.forEach((el) => {
      if (el.getBoundingClientRect().top < viewportHeight * 0.92) {
        el.classList.add("is-visible");
      }
    });

    root.classList.add("reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -8% 0px" },
    );

    targets.forEach((el) => {
      if (!el.classList.contains("is-visible")) observer.observe(el);
    });

    return () => {
      observer.disconnect();
      root.classList.remove("reveal-ready");
    };
  }, []);

  return null;
}