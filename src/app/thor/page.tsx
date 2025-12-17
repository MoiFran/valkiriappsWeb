"use client";

import React from "react";
import Link from "next/link";
import { ContactForm } from "@/components/marketing";
import styles from "./thor.module.css";

const industry40Layers = [
  {
    layer: "Automatización Inteligente",
    icon: "🤖",
    description: "Sistemas de control y automatización de procesos productivos",
    skills: [
      "SCADA personalizado",
      "Control PLC",
      "Robótica industrial",
      "Automatización de líneas productivas",
    ],
  },
  {
    layer: "IoT Industrial",
    icon: "📡",
    description: "Sensores, conectividad y comunicación máquina a máquina",
    skills: [
      "Redes de sensores",
      "Protocolos industriales (MQTT, OPC-UA)",
      "Edge computing",
      "Gateways IoT personalizados",
    ],
  },
  {
    layer: "Monitoreo en Tiempo Real",
    icon: "📊",
    description: "Visualización y control de operaciones en vivo",
    skills: [
      "Dashboards industriales",
      "Alertas y notificaciones",
      "KPI tracking automático",
      "Interfaces HMI modernas",
    ],
  },
  {
    layer: "IA y Machine Learning",
    icon: "🧠",
    description: "Inteligencia artificial aplicada a la producción",
    skills: [
      "Mantenimiento predictivo",
      "Optimización de procesos",
      "Detección de anomalías",
      "Control de calidad con VisAI",
    ],
  },
  {
    layer: "Gemelos Digitales",
    icon: "👥",
    description: "Réplicas virtuales de sistemas físicos",
    skills: [
      "Simulación de procesos",
      "Testing virtual",
      "Optimización pre-producción",
      "Modelado 3D de plantas",
    ],
  },
  {
    layer: "Integración ERP/MES",
    icon: "🔗",
    description: "Conexión con sistemas de gestión empresarial",
    skills: [
      "Integración SAP/Oracle",
      "MES personalizados",
      "Trazabilidad completa",
      "Sincronización bidireccional",
    ],
  },
];

const industrialSectors = [
  {
    name: "Manufactura",
    icon: "🏭",
    description: "Fábricas de productos automotrices, electrodomésticos y más",
  },
  {
    name: "Energía",
    icon: "⚡",
    description: "Plantas de generación y distribución eléctrica",
  },
  {
    name: "Alimentos y Bebidas",
    icon: "🍱",
    description: "Procesamiento, empaque y control de calidad alimentaria",
  },
  {
    name: "Farmacéutica",
    icon: "💊",
    description: "Producción controlada y trazabilidad regulada",
  },
  {
    name: "Logística",
    icon: "📦",
    description: "Almacenes automatizados y gestión de inventarios",
  },
  {
    name: "Minería",
    icon: "⛏️",
    description: "Monitoreo de equipos y optimización de extracción",
  },
];

export default function ThorPage() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <Link href="/#services" className={styles.backButton}>
          ← Volver a Servicios
        </Link>
        <div className={styles.heroContent}>
          <span className={styles.heroIcon}>🔨</span>
          <h1 className={styles.heroTitle}>Thor Smart Thunder</h1>
          <p className={styles.heroTagline}>Industria 4.0 e IoT Industrial</p>
          <p className={styles.heroDescription}>
            Automatización industrial inteligente, optimización de procesos productivos y soluciones
            IoT que impulsan la transformación digital de tu industria.
          </p>
        </div>
      </section>

      {/* Industry 4.0 Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.sectionIcon}>⚡</span>
          Soluciones Industria 4.0
        </h2>
        <p className={styles.sectionIntro}>
          Transformamos plantas industriales tradicionales en fábricas inteligentes. Desde sensores
          IoT hasta sistemas de IA predictiva, llevamos tu producción al siguiente nivel de
          eficiencia y competitividad.
        </p>

        <div className={styles.layersGrid}>
          {industry40Layers.map((layer, index) => (
            <div key={index} className={styles.layerCard}>
              <div className={styles.layerIcon}>{layer.icon}</div>
              <h3 className={styles.layerTitle}>{layer.layer}</h3>
              <p className={styles.layerDescription}>{layer.description}</p>
              <ul className={styles.skillsList}>
                {layer.skills.map((skill, idx) => (
                  <li key={idx} className={styles.skillItem}>
                    <span className={styles.skillBullet}>▸</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Industrial Sectors Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.sectionIcon}>🏢</span>
          Sectores Industriales
        </h2>
        <div className={styles.sectorsGrid}>
          {industrialSectors.map((sector, index) => (
            <div key={index} className={styles.sectorCard}>
              <span className={styles.sectorIcon}>{sector.icon}</span>
              <h3 className={styles.sectorName}>{sector.name}</h3>
              <p className={styles.sectorDescription}>{sector.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className={styles.contactSection}>
        <h2 className={styles.contactTitle}>¿Listo para digitalizar tu industria?</h2>
        <p className={styles.contactDescription}>
          Conversemos sobre tus desafíos industriales y cómo podemos ayudarte a implementar
          soluciones de Industria 4.0 que transformen tu producción.
        </p>
        <ContactForm />
      </section>
    </div>
  );
}
