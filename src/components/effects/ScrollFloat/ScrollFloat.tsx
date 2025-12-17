"use client";

import React, { useEffect, useMemo, useRef, ReactNode, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./ScrollFloat.module.css";

gsap.registerPlugin(ScrollTrigger);

/**
 * Props para el componente ScrollFloat
 */
export interface ScrollFloatProps {
  /** Contenido a animar (preferiblemente texto) */
  children: ReactNode;
  /** Ref del contenedor con scroll custom */
  scrollContainerRef?: RefObject<HTMLElement>;
  /** Clases CSS para el contenedor */
  containerClassName?: string;
  /** Clases CSS para el texto */
  textClassName?: string;
  /** Duración de la animación en segundos */
  animationDuration?: number;
  /** Easing de GSAP */
  ease?: string;
  /** Punto de inicio del scroll trigger */
  scrollStart?: string;
  /** Punto de fin del scroll trigger */
  scrollEnd?: string;
  /** Delay escalonado entre caracteres */
  stagger?: number;
  /** Tag HTML a renderizar */
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "div";
}

/**
 * ScrollFloat - Efecto de texto flotante basado en scroll
 *
 * Anima cada carácter del texto con un efecto de "float" mientras
 * el usuario hace scroll. Los caracteres aparecen con transformaciones
 * de escala y posición.
 *
 * @example
 * ```tsx
 * <ScrollFloat
 *   animationDuration={1}
 *   ease="back.inOut(2)"
 * >
 *   React Bits
 * </ScrollFloat>
 * ```
 */
const ScrollFloat: React.FC<ScrollFloatProps> = ({
  children,
  scrollContainerRef,
  containerClassName = "",
  textClassName = "",
  animationDuration = 1,
  ease = "back.inOut(2)",
  scrollStart = "center bottom+=50%",
  scrollEnd = "bottom bottom-=40%",
  stagger = 0.03,
  tag = "h2",
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  /**
   * Split del texto en caracteres individuales
   */
  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : "";
    return text.split("").map((char, index) => (
      <span className={styles.char} key={index}>
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  }, [children]);

  /**
   * Configurar animación GSAP con ScrollTrigger
   */
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller =
      scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;

    const charElements = el.querySelectorAll(`.${styles.char}`);

    gsap.fromTo(
      charElements,
      {
        willChange: "opacity, transform",
        opacity: 0,
        yPercent: 120,
        scaleY: 2.3,
        scaleX: 0.7,
        transformOrigin: "50% 0%",
      },
      {
        duration: animationDuration,
        ease: ease,
        opacity: 1,
        yPercent: 0,
        scaleY: 1,
        scaleX: 1,
        stagger: stagger,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: scrollStart,
          end: scrollEnd,
          scrub: true,
        },
      }
    );

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === el) trigger.kill();
      });
    };
  }, [scrollContainerRef, animationDuration, ease, scrollStart, scrollEnd, stagger]);

  /**
   * Renderizar con el tag apropiado
   */
  const content = <span className={`${styles.text} ${textClassName}`}>{splitText}</span>;

  const containerClasses = `${styles.container} ${containerClassName}`;

  switch (tag) {
    case "h1":
      return (
        <h1 ref={containerRef} className={containerClasses}>
          {content}
        </h1>
      );
    case "h2":
      return (
        <h2 ref={containerRef} className={containerClasses}>
          {content}
        </h2>
      );
    case "h3":
      return (
        <h3 ref={containerRef} className={containerClasses}>
          {content}
        </h3>
      );
    case "h4":
      return (
        <h4 ref={containerRef} className={containerClasses}>
          {content}
        </h4>
      );
    case "h5":
      return (
        <h5 ref={containerRef} className={containerClasses}>
          {content}
        </h5>
      );
    case "h6":
      return (
        <h6 ref={containerRef} className={containerClasses}>
          {content}
        </h6>
      );
    case "p":
      return (
        <p ref={containerRef} className={containerClasses}>
          {content}
        </p>
      );
    case "div":
      return (
        <div ref={containerRef} className={containerClasses}>
          {content}
        </div>
      );
    default:
      return (
        <h2 ref={containerRef} className={containerClasses}>
          {content}
        </h2>
      );
  }
};

export default ScrollFloat;
