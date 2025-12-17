"use client";

import React, { ReactNode, CSSProperties } from "react";
import styles from "./GradientText.module.css";

/**
 * Props para el componente GradientText
 */
export interface GradientTextProps {
  /** Contenido del texto */
  children: ReactNode;
  /** Clases CSS adicionales */
  className?: string;
  /** Array de colores para el gradiente */
  colors?: string[];
  /** Velocidad de la animación en segundos */
  animationSpeed?: number;
  /** Mostrar borde animado alrededor del texto */
  showBorder?: boolean;
  /** Tag HTML a renderizar */
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
}

/**
 * GradientText - Componente de texto con gradiente animado
 *
 * Renderiza texto con un gradiente de colores animado que se mueve horizontalmente.
 * Opcionalmente puede incluir un borde animado con el mismo gradiente.
 *
 * @example
 * ```tsx
 * <GradientText colors={["#40ffaa", "#4079ff"]} animationSpeed={3}>
 *   Add a splash of color!
 * </GradientText>
 * ```
 */
const GradientText: React.FC<GradientTextProps> = ({
  children,
  className = "",
  colors = ["#ffaa40", "#9c40ff", "#ffaa40"],
  animationSpeed = 8,
  showBorder = false,
  tag = "span",
}) => {
  /**
   * Estilos del gradiente
   */
  const gradientStyle: CSSProperties = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    animationDuration: `${animationSpeed}s`,
  };

  /**
   * Renderizar el componente con el tag apropiado
   */
  const renderContent = () => {
    const content = (
      <div className={`${styles.container} ${className}`}>
        {/* Borde animado opcional */}
        {showBorder && (
          <div
            className={styles.borderGradient}
            style={{
              ...gradientStyle,
              backgroundSize: "300% 100%",
            }}
          >
            <div className={styles.borderInner}></div>
          </div>
        )}

        {/* Texto con gradiente */}
        <div
          className={styles.gradientText}
          style={{
            ...gradientStyle,
            backgroundSize: "300% 100%",
          }}
        >
          {children}
        </div>
      </div>
    );

    // Envolver en el tag apropiado si no es div
    switch (tag) {
      case "h1":
        return <h1 className={styles.tagWrapper}>{content}</h1>;
      case "h2":
        return <h2 className={styles.tagWrapper}>{content}</h2>;
      case "h3":
        return <h3 className={styles.tagWrapper}>{content}</h3>;
      case "h4":
        return <h4 className={styles.tagWrapper}>{content}</h4>;
      case "h5":
        return <h5 className={styles.tagWrapper}>{content}</h5>;
      case "h6":
        return <h6 className={styles.tagWrapper}>{content}</h6>;
      case "p":
        return <p className={styles.tagWrapper}>{content}</p>;
      case "span":
        return <span className={styles.tagWrapper}>{content}</span>;
      default:
        return content;
    }
  };

  return renderContent();
};

export default GradientText;
