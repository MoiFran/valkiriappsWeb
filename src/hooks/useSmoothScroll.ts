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
    const { duration = 1.8, easing = (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) } =
      options;

    // Initialize Lenis for smooth scrolling with inertia
    const lenis = new Lenis({
      duration,
      easing,
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 2.0,
      infinite: false,
      // Optimize for better performance
      autoResize: true,
      syncTouch: true,
      syncTouchLerp: 0.1,
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
          // FIXED: Remove immediate: true to preserve inertia
          lenis.scrollTo(value, {
            duration: 0.8,
            easing: (t: number) => 1 - Math.pow(1 - t, 3),
          });
          return lenis.scroll;
        }
        return lenis.scroll;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      pinType: document.body.style.transform ? "transform" : "fixed",
    });

    // Refresh ScrollTrigger when lenis resizes
    const handleRefresh = () => lenis.resize();
    ScrollTrigger.addEventListener("refresh", handleRefresh);
    ScrollTrigger.refresh();

    // Cleanup on unmount
    return () => {
      ScrollTrigger.removeEventListener("refresh", handleRefresh);
      lenis.destroy();
      ScrollTrigger.clearScrollMemory();
    };
  }, [options]);
}
