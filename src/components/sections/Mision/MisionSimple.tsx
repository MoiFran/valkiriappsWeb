"use client";

import React, { useEffect, useRef } from "react";
import styles from "./Mision.module.css";

const valores = [
  {
    titulo: "Innovación constante",
    descripcion:
      "Siempre exploramos nuevas tecnologías para ofrecer soluciones avanzadas y efectivas.",
    icon: "⚡",
    color: "#00BFFF",
  },
  {
    titulo: "Calidad y detalle",
    descripcion: "Cada línea de código y diseño refleja nuestro compromiso con la excelencia.",
    icon: "💎",
    color: "#4FC2D1",
  },
  {
    titulo: "Orientación al cliente",
    descripcion: "Escuchamos, entendemos y construimos con base en tus objetivos reales.",
    icon: "🎯",
    color: "#9D4EDD",
  },
  {
    titulo: "Tecnologías de vanguardia",
    descripcion: "React, Vite, OpenRouter, IA: usamos lo último para construir lo próximo.",
    icon: "🚀",
    color: "#06FFA5",
  },
];

// Simple card with CSS animations only
const ValueCard = React.memo(({ valor, index }: { valor: (typeof valores)[0]; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.valueCardVisible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={styles.valueCardWrapper}
      style={
        {
          animationDelay: `${0.1 + index * 0.1}s`,
          "--card-color": valor.color,
        } as React.CSSProperties
      }
    >
      <div
        className={styles.valueCard}
        style={{
          borderColor: valor.color,
        }}
      >
        <div className={styles.iconWrapper}>
          <span
            className={styles.icon}
            style={{
              textShadow: `0 0 20px ${valor.color}80, 0 0 40px ${valor.color}60`,
            }}
          >
            {valor.icon}
          </span>
        </div>
        <h4 className={styles.valueTitle} style={{ color: valor.color }}>
          {valor.titulo}
        </h4>
        <p className={styles.valueDescription}>{valor.descripcion}</p>
      </div>
    </div>
  );
});

ValueCard.displayName = "ValueCard";

export default function MisionSimple() {
  return (
    <section className={styles.mision} id="mision">
      <div className={styles.content}>
        <header className={styles.header}>
          <h2 className={`${styles.titleContainer} ${styles.title}`}>Nuestra Misión</h2>
          <h3 className={styles.subtitle}>Hacer realidad tu visión es nuestra misión.</h3>
        </header>

        <div className={styles.descriptionWrapper}>
          <p className={`${styles.descriptionContainer} ${styles.description}`}>
            En ValkiriApps diseñamos soluciones digitales inteligentes, impulsadas por IA y
            tecnología moderna, para transformar ideas en productos que impactan. Nuestra misión es
            acompañarte en cada paso, desde la conceptualización hasta la ejecución técnica.
          </p>
        </div>

        <div className={styles.values}>
          {valores.map((valor, i) => (
            <ValueCard key={i} valor={valor} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
