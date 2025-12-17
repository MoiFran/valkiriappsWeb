"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import styles from "./TrueFocus.module.css";

/**
 * Props para el componente TrueFocus
 */
export interface TrueFocusProps {
  /** Texto a mostrar con efecto de enfoque */
  sentence?: string;
  /** Modo manual (hover) o automático */
  manualMode?: boolean;
  /** Cantidad de blur en píxeles */
  blurAmount?: number;
  /** Color del borde de enfoque */
  borderColor?: string;
  /** Color del glow/resplandor */
  glowColor?: string;
  /** Duración de la animación en segundos */
  animationDuration?: number;
  /** Pausa entre animaciones automáticas en segundos */
  pauseBetweenAnimations?: number;
  /** Clases CSS adicionales */
  className?: string;
  /** Tamaño de fuente (en rem) */
  fontSize?: number;
}

/**
 * Rectángulo de enfoque
 */
interface FocusRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

/**
 * TrueFocus - Componente de texto con efecto de enfoque animado
 *
 * Muestra un texto donde cada palabra se enfoca secuencialmente,
 * aplicando blur a las demás. Incluye bordes animados que se mueven
 * hacia la palabra activa.
 *
 * @example
 * ```tsx
 * <TrueFocus
 *   sentence="True Focus Effect"
 *   borderColor="cyan"
 *   blurAmount={5}
 * />
 * ```
 */
const TrueFocus: React.FC<TrueFocusProps> = ({
  sentence = "True Focus",
  manualMode = false,
  blurAmount = 5,
  borderColor = "green",
  glowColor = "rgba(0, 255, 0, 0.6)",
  animationDuration = 0.5,
  pauseBetweenAnimations = 1,
  className = "",
  fontSize = 3,
}) => {
  const words = sentence.split(" ");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [lastActiveIndex, setLastActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [focusRect, setFocusRect] = useState<FocusRect>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  /**
   * Ciclo automático de enfoque
   */
  useEffect(() => {
    if (!manualMode) {
      const interval = setInterval(
        () => {
          setCurrentIndex((prev) => (prev + 1) % words.length);
        },
        (animationDuration + pauseBetweenAnimations) * 1000
      );

      return () => clearInterval(interval);
    }
  }, [manualMode, animationDuration, pauseBetweenAnimations, words.length]);

  /**
   * Actualizar rectángulo de enfoque
   */
  useEffect(() => {
    if (currentIndex === null || currentIndex === -1) return;
    if (!wordRefs.current[currentIndex] || !containerRef.current) return;

    const parentRect = containerRef.current.getBoundingClientRect();
    const activeRect = wordRefs.current[currentIndex]!.getBoundingClientRect();

    setFocusRect({
      x: activeRect.left - parentRect.left,
      y: activeRect.top - parentRect.top,
      width: activeRect.width,
      height: activeRect.height,
    });
  }, [currentIndex, words.length]);

  /**
   * Handlers para modo manual
   */
  const handleMouseEnter = (index: number) => {
    if (manualMode) {
      setLastActiveIndex(currentIndex);
      setCurrentIndex(index);
    }
  };

  const handleMouseLeave = () => {
    if (manualMode && lastActiveIndex !== null) {
      setCurrentIndex(lastActiveIndex);
    }
  };

  return (
    <div
      className={`${styles.container} ${className}`}
      ref={containerRef}
      style={{ fontSize: `${fontSize}rem` }}
    >
      {words.map((word, index) => {
        const isActive = index === currentIndex;

        return (
          <span
            key={index}
            ref={(el) => {
              wordRefs.current[index] = el;
            }}
            className={styles.word}
            style={{
              filter: isActive ? "blur(0px)" : `blur(${blurAmount}px)`,
              transition: `filter ${animationDuration}s ease`,
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {word}
          </span>
        );
      })}

      {/* Bordes animados de enfoque */}
      <motion.div
        className={styles.focusBorder}
        animate={{
          x: focusRect.x,
          y: focusRect.y,
          width: focusRect.width,
          height: focusRect.height,
          opacity: currentIndex >= 0 ? 1 : 0,
        }}
        transition={{
          duration: animationDuration,
        }}
        style={
          {
            "--border-color": borderColor,
            "--glow-color": glowColor,
          } as React.CSSProperties
        }
      >
        {/* Esquina superior izquierda */}
        <span className={`${styles.corner} ${styles.cornerTopLeft}`}></span>

        {/* Esquina superior derecha */}
        <span className={`${styles.corner} ${styles.cornerTopRight}`}></span>

        {/* Esquina inferior izquierda */}
        <span className={`${styles.corner} ${styles.cornerBottomLeft}`}></span>

        {/* Esquina inferior derecha */}
        <span className={`${styles.corner} ${styles.cornerBottomRight}`}></span>
      </motion.div>
    </div>
  );
};

export default TrueFocus;
