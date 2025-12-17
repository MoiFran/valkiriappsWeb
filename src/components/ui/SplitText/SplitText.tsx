"use client";

/* eslint-disable react-hooks/exhaustive-deps */

import React, { useRef, useEffect, useState, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registrar plugins de GSAP solo en el cliente
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Props para el componente SplitText
 */
export interface SplitTextProps {
  /** Texto a animar */
  text: string;
  /** Clases CSS adicionales */
  className?: string;
  /** Delay entre cada elemento (ms) */
  delay?: number;
  /** Duración de la animación (segundos) */
  duration?: number;
  /** Ease de la animación */
  ease?: string | ((t: number) => number);
  /** Tipo de split: caracteres, palabras o líneas */
  splitType?: "chars" | "words" | "lines" | "words, chars";
  /** Estado inicial de la animación */
  from?: gsap.TweenVars;
  /** Estado final de la animación */
  to?: gsap.TweenVars;
  /** Threshold del IntersectionObserver (0-1) */
  threshold?: number;
  /** Margen del trigger */
  rootMargin?: string;
  /** Tag HTML a renderizar */
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  /** Alineación del texto */
  textAlign?: React.CSSProperties["textAlign"];
  /** Callback cuando termina la animación */
  onLetterAnimationComplete?: () => void;
}

/**
 * SplitText - Componente para animar texto con GSAP SplitText
 *
 * Divide el texto en caracteres, palabras o líneas y los anima con GSAP.
 * La animación se activa cuando el elemento entra en el viewport.
 *
 * @example
 * ```tsx
 * <SplitText
 *   text="Hello World!"
 *   splitType="chars"
 *   from={{ opacity: 0, y: 40 }}
 *   to={{ opacity: 1, y: 0 }}
 * />
 * ```
 */
const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = "",
  delay = 100,
  duration = 0.6,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-100px",
  tag = "p",
  textAlign = "center",
  onLetterAnimationComplete,
}) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const animationCompletedRef = useRef(false);
  const [fontsLoaded, setFontsLoaded] = useState<boolean>(false);

  /**
   * Split del texto en elementos
   */
  const splitElements = useMemo(() => {
    if (splitType === "chars" || splitType === "words, chars") {
      return text.split("").map((char, index) => (
        <span key={index} className="split-char inline-block" style={{ display: "inline-block" }}>
          {char === " " ? "\u00A0" : char}
        </span>
      ));
    } else if (splitType === "words") {
      return text.split(" ").map((word, index) => (
        <span key={index}>
          <span className="split-word inline-block" style={{ display: "inline-block" }}>
            {word}
          </span>
          {index < text.split(" ").length - 1 && " "}
        </span>
      ));
    } else if (splitType === "lines") {
      return text.split("\n").map((line, index) => (
        <span key={index} className="split-line block" style={{ display: "block" }}>
          {line}
        </span>
      ));
    }
    return text;
  }, [text, splitType]);

  /**
   * Esperar a que las fuentes estén cargadas antes de animar
   */
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (document.fonts.status === "loaded") {
      setFontsLoaded(true);
    } else {
      document.fonts.ready.then(() => {
        setFontsLoaded(true);
      });
    }
  }, []);

  /**
   * Configurar animación GSAP
   */
  useEffect(() => {
    if (!ref.current || !text || !fontsLoaded) return;

    const el = ref.current;
    let targets: Element[] = [];

    // Seleccionar elementos basado en el tipo de split
    if (splitType.includes("chars")) {
      targets = Array.from(el.querySelectorAll(".split-char"));
    } else if (splitType.includes("words")) {
      targets = Array.from(el.querySelectorAll(".split-word"));
    } else if (splitType.includes("lines")) {
      targets = Array.from(el.querySelectorAll(".split-line"));
    }

    if (targets.length === 0) return;

    // Calcular posición de inicio del scroll trigger
    const startPct = (1 - threshold) * 100;
    const marginMatch = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin);
    const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0;
    const marginUnit = marginMatch ? marginMatch[2] || "px" : "px";
    const sign =
      marginValue === 0
        ? ""
        : marginValue < 0
          ? `-=${Math.abs(marginValue)}${marginUnit}`
          : `+=${marginValue}${marginUnit}`;
    const start = `top ${startPct}%${sign}`;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { ...from },
        {
          ...to,
          duration,
          ease,
          stagger: delay / 1000, // Convertir ms a segundos
          scrollTrigger: {
            trigger: el,
            start,
            once: true, // Solo animar una vez
            markers: false, // Cambiar a true para debug
          },
          onComplete: () => {
            animationCompletedRef.current = true;
            onLetterAnimationComplete?.();
          },
        }
      );
    }, el);

    // Cleanup
    return () => ctx.revert();
  }, [
    text,
    delay,
    duration,
    ease,
    splitType,
    JSON.stringify(from),
    JSON.stringify(to),
    threshold,
    rootMargin,
    fontsLoaded,
    onLetterAnimationComplete,
  ]);

  /**
   * Renderizar el tag HTML apropiado
   */
  const renderTag = () => {
    const style: React.CSSProperties = {
      textAlign,
      wordWrap: "break-word",
      overflow: "visible",
    };

    const classes = `split-parent overflow-visible inline-block whitespace-normal ${className}`;

    const commonProps = {
      ref,
      style,
      className: classes,
    };

    switch (tag) {
      case "h1":
        return <h1 {...commonProps}>{splitElements}</h1>;
      case "h2":
        return <h2 {...commonProps}>{splitElements}</h2>;
      case "h3":
        return <h3 {...commonProps}>{splitElements}</h3>;
      case "h4":
        return <h4 {...commonProps}>{splitElements}</h4>;
      case "h5":
        return <h5 {...commonProps}>{splitElements}</h5>;
      case "h6":
        return <h6 {...commonProps}>{splitElements}</h6>;
      case "span":
        return <span {...commonProps}>{splitElements}</span>;
      default:
        return <p {...commonProps}>{splitElements}</p>;
    }
  };

  return renderTag();
};

export default SplitText;
