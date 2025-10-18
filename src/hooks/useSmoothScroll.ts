// src/hooks/useSmoothScroll.ts
"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SmoothScrollOptions {
  duration?: number;
  easing?: (t: number) => number;
}

export function useSmoothScroll(options: SmoothScrollOptions = {}) {
  useEffect(() => {
    const { duration = 1.2, easing = (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) } = options;

    // Initialize Lenis for smooth scrolling with inertia
    const lenis = new Lenis({
      duration,
      easing,
    });

    // RAF loop: lenis.raf + ScrollTrigger.update
    function raf(time: number) {
      lenis.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Proxy for GSAP to use Lenis as scroller
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        if (value !== undefined) {
          return lenis.scrollTo(value, { immediate: true });
        }
        return lenis.scroll;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      pinType: document.body.style.transform ? "transform" : "fixed",
    });

    // Refresh ScrollTrigger when lenis resizes
    ScrollTrigger.addEventListener("refresh", () => lenis.resize());
    ScrollTrigger.refresh();

    // Cleanup on unmount
    return () => {
      ScrollTrigger.removeEventListener("refresh", () => lenis.resize());
      lenis.destroy();
    };
  }, [options]);
}
