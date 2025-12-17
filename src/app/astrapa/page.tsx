"use client";

import React from "react";
import Link from "next/link";
import { ContactForm } from "@/components/marketing";
import styles from "./astrapa.module.css";

const educationLayers = [
  {
    layer: "Plataformas LMS",
    icon: "📚",
    description: "Sistemas de gestión de aprendizaje personalizados y escalables",
    skills: [
      "LMS custom desde cero",
      "Moodle personalizado",
      "Canvas customization",
      "Integración con sistemas existentes",
    ],
  },
  {
    layer: "Contenido Interactivo",
    icon: "🎯",
    description: "Experiencias de aprendizaje multimedia y gamificadas",
    skills: [
      "Videos interactivos",
      "Simulaciones y labs virtuales",
      "Gamificación educativa",
      "Ejercicios adaptativos",
    ],
  },
  {
    layer: "Evaluación y Seguimiento",
    icon: "📊",
    description: "Herramientas avanzadas para medir y analizar el progreso",
    skills: [
      "Sistemas de evaluación automatizados",
      "Analytics de aprendizaje",
      "Dashboards para docentes",
      "Reportes personalizados",
    ],
  },
  {
    layer: "Apps Móviles Educativas",
    icon: "📱",
    description: "Aprendizaje en cualquier momento y lugar",
    skills: [
      "Apps nativas iOS/Android",
      "Progressive Web Apps",
      "Sincronización offline",
      "Notificaciones push educativas",
    ],
  },
  {
    layer: "Aulas Virtuales",
    icon: "💻",
    description: "Espacios de colaboración en tiempo real",
    skills: [
      "Videoconferencia integrada",
      "Pizarras colaborativas",
      "Salas de breakout",
      "Chat y foros avanzados",
    ],
  },
  {
    layer: "IA en Educación",
    icon: "🤖",
    description: "Inteligencia artificial aplicada al aprendizaje personalizado",
    skills: [
      "Tutores virtuales con IA",
      "Rutas de aprendizaje adaptativas",
      "Detección de plagiarismo",
      "Asistentes educativos",
    ],
  },
];

const educationSectors = [
  {
    name: "Universidades",
    icon: "🎓",
    description: "Plataformas escalables para educación superior y posgrados",
  },
  {
    name: "Escuelas K-12",
    icon: "🏫",
    description: "Soluciones adaptadas a primaria y secundaria",
  },
  {
    name: "Capacitación Corporativa",
    icon: "👔",
    description: "LMS empresariales para formación de equipos",
  },
  {
    name: "EdTech Startups",
    icon: "🚀",
    description: "Desarrollo de productos educativos innovadores",
  },
];

export default function AstrapaPage() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <Link href="/#services" className={styles.backButton}>
          ← Volver a Servicios
        </Link>
        <div className={styles.heroContent}>
          <span className={styles.heroIcon}>🎓</span>
          <h1 className={styles.heroTitle}>Astrapa</h1>
          <p className={styles.heroTagline}>Innovación en Educación Digital</p>
          <p className={styles.heroDescription}>
            Especialistas en desarrollo de plataformas educativas innovadoras, sistemas LMS y
            herramientas interactivas que revolucionan la enseñanza y el aprendizaje.
          </p>
        </div>
      </section>

      {/* Education Layers Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.sectionIcon}>⚡</span>
          Soluciones EdTech
        </h2>
        <p className={styles.sectionIntro}>
          Transformamos la educación con tecnología de vanguardia. Desde plataformas LMS completas
          hasta apps móviles educativas, creamos experiencias de aprendizaje memorables e
          impactantes.
        </p>

        <div className={styles.layersGrid}>
          {educationLayers.map((layer, index) => (
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

      {/* Sectors Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.sectionIcon}>🌍</span>
          Sectores que Servimos
        </h2>
        <div className={styles.sectorsGrid}>
          {educationSectors.map((sector, index) => (
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
        <h2 className={styles.contactTitle}>¿Listo para revolucionar la educación?</h2>
        <p className={styles.contactDescription}>
          Conversemos sobre tu proyecto educativo y cómo podemos ayudarte a crear experiencias de
          aprendizaje excepcionales.
        </p>
        <ContactForm />
      </section>
    </div>
  );
}
