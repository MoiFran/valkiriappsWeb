"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import ScrollFloat from "./ScrollFloat";
import { ElectricBorder, SplitText } from "@/components/ui";
import styles from "./Mision.module.css";

const valores = [
  {
    titulo: "Innovación constante",
    descripcion:
      "Siempre exploramos nuevas tecnologías para ofrecer soluciones avanzadas y efectivas.",
    icon: "⚡",
    color: "#00BFFF", // Electric Blue
  },
  {
    titulo: "Calidad y detalle",
    descripcion: "Cada línea de código y diseño refleja nuestro compromiso con la excelencia.",
    icon: "💎",
    color: "#4FC2D1", // Teal
  },
  {
    titulo: "Orientación al cliente",
    descripcion: "Escuchamos, entendemos y construimos con base en tus objetivos reales.",
    icon: "🎯",
    color: "#9D4EDD", // Purple
  },
  {
    titulo: "Tecnologías de vanguardia",
    descripcion: "React, Vite, OpenRouter, IA: usamos lo último para construir lo próximo.",
    icon: "🚀",
    color: "#06FFA5", // Neon Green
  },
];

// Componente individual de Card con efectos inmersivos (OPTIMIZADO)
const ValueCard = React.memo(({ valor, index }: { valor: (typeof valores)[0]; index: number }) => {
  // Remove expensive scroll-based transforms for better performance
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        delay: 0.1 + index * 0.1,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      whileHover={{
        scale: 1.05,
        y: -5,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className={styles.valueCardWrapper}
      style={{ willChange: "transform" }}
    >
      <ElectricBorder
        color={valor.color}
        speed={1.2}
        chaos={0.8}
        thickness={2}
        className={styles.electricBorderCard}
        style={{ borderRadius: 16 }}
      >
        <motion.div
          className={styles.valueCard}
          whileHover={{
            boxShadow: `0 0 40px ${valor.color}40, inset 0 0 60px ${valor.color}10`,
          }}
        >
          <motion.div
            className={styles.iconWrapper}
            whileHover={{
              scale: 1.2,
              rotate: 360,
              transition: { duration: 0.6 },
            }}
          >
            <span
              className={styles.icon}
              style={{
                textShadow: `0 0 20px ${valor.color}80, 0 0 40px ${valor.color}60`,
              }}
            >
              {valor.icon}
            </span>
          </motion.div>
          <motion.h4
            className={styles.valueTitle}
            style={{ color: valor.color }}
            whileHover={{
              scale: 1.05,
              textShadow: `0 0 20px ${valor.color}, 0 0 40px ${valor.color}80`,
            }}
          >
            {valor.titulo}
          </motion.h4>
          <p className={styles.valueDescription}>{valor.descripcion}</p>
        </motion.div>
      </ElectricBorder>
    </motion.div>
  );
});

ValueCard.displayName = "ValueCard";

export default function Mision() {
  return (
    <section className={styles.mision} id="mision">
      {/* Content */}
      <div className={styles.content}>
        <header className={styles.header}>
          <ScrollFloat
            containerClassName={styles.titleContainer}
            textClassName={styles.title}
            animationDuration={1.1}
            ease="power3.out"
            scrollStart="top 80%"
            scrollEnd="bottom 20%"
            stagger={0.05}
          >
            Nuestra Misión
          </ScrollFloat>

          <SplitText
            text="Hacer realidad tu visión es nuestra misión."
            className={styles.subtitle}
            tag="h3"
            delay={50}
            duration={0.8}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40, rotateX: -90 }}
            to={{ opacity: 1, y: 0, rotateX: 0 }}
            threshold={0.3}
            rootMargin="-50px"
            textAlign="center"
          />
        </header>

        <div className={styles.descriptionWrapper}>
          <ScrollFloat
            containerClassName={styles.descriptionContainer}
            textClassName={styles.description}
            animationDuration={0.9}
            ease="power2.out"
            scrollStart="top 75%"
            scrollEnd="bottom 25%"
            stagger={0.03}
          >
            En ValkiriApps diseñamos soluciones digitales inteligentes, impulsadas por IA y
            tecnología moderna, para transformar ideas en productos que impactan. Nuestra misión es
            acompañarte en cada paso, desde la conceptualización hasta la ejecución técnica.
          </ScrollFloat>
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
