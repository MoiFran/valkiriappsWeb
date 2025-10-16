// src/app/components/ClientSmoothScroll.tsx
"use client";

import { useEffect, ReactNode } from "react";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ClientSmoothScrollProps {
  children: ReactNode;
}

export default function ClientSmoothScroll({ children }: ClientSmoothScrollProps) {
  useEffect(() => {
    // 1. Inicializa Lenis para scroll suave con inercia
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    // 2. Bucle RAF: lenis.raf + ScrollTrigger.update
    function raf(time: number) {
      lenis.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 3. Proxy para que GSAP use Lenis como scroller
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

    // 4. Refresca ScrollTrigger al redimensionar lenis
    ScrollTrigger.addEventListener("refresh", () => lenis.resize());
    ScrollTrigger.refresh();

    // Cleanup en unmount
    return () => {
      ScrollTrigger.removeEventListener("refresh", () => lenis.resize());
    };
  }, []);

  return <>{children}</>;
}
