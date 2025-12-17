"use client";

import React, { useEffect, useRef } from "react";
import styles from "./Intro.module.css";

const Intro: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const statsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | null = null;

    const run = async () => {
      if (!sectionRef.current || !titleRef.current || !statsRef.current) return;

      // Respeta accesibilidad: si el usuario pidió menos animación, no animamos.
      const prefersReduced =
        typeof window !== "undefined" &&
        window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

      if (prefersReduced) return;

      const gsapMod = await import("gsap");
      const stMod = await import("gsap/ScrollTrigger");

      const gsap = gsapMod.gsap;
      const ScrollTrigger = stMod.ScrollTrigger;

      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        // Title
        gsap.fromTo(
          titleRef.current!,
          { opacity: 0, y: 48, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: titleRef.current!,
              start: "top 85%",
              end: "top 55%",
              scrub: 1,
            },
          }
        );

        // Stats
        const items = Array.from(statsRef.current!.children) as HTMLElement[];
        gsap.fromTo(
          items,
          { opacity: 0, y: 28, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.12,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: statsRef.current!,
              start: "top 80%",
              end: "top 55%",
              scrub: 1,
            },
          }
        );
      }, sectionRef);
    };

    run();

    return () => {
      ctx?.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.intro}>
      <div className={styles.container}>
        <h2 ref={titleRef} className={styles.title}>
          Transformamos ideas en <span className={styles.highlight}>soluciones digitales</span> que
          impulsan el futuro
        </h2>

        <div ref={statsRef} className={styles.stats}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>3</div>
            <div className={styles.statLabel}>Líneas de Negocio</div>
          </div>

          <div className={styles.statItem}>
            <div className={styles.statNumber}>∞</div>
            <div className={styles.statLabel}>Posibilidades</div>
          </div>

          <div className={styles.statItem}>
            <div className={styles.statNumber}>100%</div>
            <div className={styles.statLabel}>Dedicación</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
