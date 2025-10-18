"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import ScrollFloat from "./ScrollFloat";
import styles from "./Mision.module.css";

const valores = [
  {
    titulo: "Innovación constante",
    descripcion:
      "Siempre exploramos nuevas tecnologías para ofrecer soluciones avanzadas y efectivas."
  },
  {
    titulo: "Calidad y detalle",
    descripcion:
      "Cada línea de código y diseño refleja nuestro compromiso con la excelencia."
  },
  {
    titulo: "Orientación al cliente",
    descripcion:
      "Escuchamos, entendemos y construimos con base en tus objetivos reales."
  },
  {
    titulo: "Tecnologías de vanguardia",
    descripcion:
      "React, Vite, OpenRouter, IA: usamos lo último para construir lo próximo."
  }
];

export default function Mision() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    canvas.width = window.innerWidth;
    canvas.height = 200;

    let mouseX = canvas.width / 2;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
    };

    window.addEventListener("mousemove", handleMouseMove);

    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < 80; i++) {
        const x = Math.sin(Date.now() * 0.001 + i) * 100 + mouseX;
        const y = i * 2 + Math.sin(i + Date.now() * 0.002) * 10;
        ctx.beginPath();
        ctx.arc(x, y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 191, 255, ${1 - i / 80})`;
        ctx.fill();
      }
      requestAnimationFrame(draw);
    }

    draw();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className={styles.mision} id="mision">
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

        <motion.h3
          className={styles.subtitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          Hacer realidad tu visión es nuestra misión.
        </motion.h3>
      </header>

      <motion.p
        className={styles.description}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
      >
        En ValkiriApps diseñamos soluciones digitales inteligentes, impulsadas por IA y tecnología moderna, para transformar ideas en productos que impactan. Nuestra misión es acompañarte en cada paso, desde la conceptualización hasta la ejecución técnica.
      </motion.p>

      <ul className={styles.values}>
        {valores.map((valor, i) => (
          <motion.li
            key={i}
            className={`${styles.valueCard} ${i % 2 === 0 ? styles.left : styles.right}`}
            initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.7,
              delay: 0.4 + i * 0.2,
              type: "spring",
              stiffness: 80
            }}
          >
            <h4>{valor.titulo}</h4>
            <p>{valor.descripcion}</p>
          </motion.li>
        ))}
      </ul>

      <motion.canvas
        ref={canvasRef}
        className={styles.canvasArt}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        aria-hidden="true"
      />
    </section>
  );
}
