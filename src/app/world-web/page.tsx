"use client";

import React from "react";
import Link from "next/link";
import { ContactForm } from "@/components/marketing";
import styles from "./worldweb.module.css";

const wordpressLayers = [
  {
    layer: "Temas & Templates",
    icon: "🎨",
    description: "Diseños personalizados desde cero o modificación de temas existentes",
    skills: [
      "Child themes avanzados",
      "Template hierarchy completo",
      "Custom post types",
      "Taxonomías personalizadas",
    ],
  },
  {
    layer: "Plugins Personalizados",
    icon: "🔌",
    description: "Desarrollo de plugins completos adaptados a necesidades específicas",
    skills: [
      "Arquitectura orientada a objetos",
      "Hooks y filters personalizados",
      "Admin panels custom",
      "Actualizaciones automáticas",
    ],
  },
  {
    layer: "Constructores de Páginas",
    icon: "🏗️",
    description: "Widgets y elementos personalizados para Elementor y otros builders",
    skills: [
      "Widgets Elementor custom",
      "Dynamic content",
      "Formularios avanzados",
      "Sliders interactivos",
    ],
  },
  {
    layer: "Gutenberg, Elementor & Más",
    icon: "📝",
    description: "Bloques personalizados para el editor nativo de WordPress",
    skills: ["Block API", "Custom patterns", "Block variations", "InnerBlocks complejos"],
  },
  {
    layer: "APIs & Integraciones",
    icon: "🔗",
    description: "Conexión con sistemas externos y desarrollo de APIs REST/GraphQL",
    skills: ["REST API endpoints", "GraphQL custom", "Webhooks", "OAuth integrations"],
  },
  {
    layer: "Sistemas Empresariales",
    icon: "💼",
    description: "CRM, ERP y sistemas complejos construidos sobre WordPress",
    skills: [
      "CRM personalizados",
      "Dashboards empresariales",
      "Integraciones ERP",
      "Gestión de inventarios",
    ],
  },
];

const industries = [
  {
    name: "Automotriz",
    icon: "🚗",
    description: "Grupos automotrices con múltiples concesionarios",
  },
  {
    name: "Manufactura",
    icon: "🏭",
    description: "Fábricas de electrodomésticos y productos industriales",
  },
  {
    name: "Farmacéutica",
    icon: "💊",
    description: "Laboratorios farmacéuticos y empresas de salud",
  },
];

export default function WorldWebPage() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <Link href="/#services" className={styles.backButton}>
          ← Volver a Servicios
        </Link>
        <div className={styles.heroContent}>
          <span className={styles.heroIcon}>🌊</span>
          <h1 className={styles.heroTitle}>World Web in One Press</h1>
          <p className={styles.heroTagline}>WordPress & CMS Enterprise Solutions</p>
          <p className={styles.heroDescription}>
            Desarrollo profesional de sitios WordPress, plugins personalizados y soluciones CMS que
            transforman tu presencia digital con un solo click.
          </p>
        </div>
      </section>

      {/* WordPress Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.sectionIcon}>⚡</span>
          WordPress
        </h2>
        <p className={styles.sectionIntro}>
          WordPress es el CMS más popular del mundo, utilizado por el 43% de todos los sitios web.
          Desde blogs personales hasta portales corporativos de Fortune 500.
        </p>

        <div className={styles.layersGrid}>
          {wordpressLayers.map((layer, index) => (
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

      {/* Industries Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.sectionIcon}>🏢</span>
          Industrias que Servimos
        </h2>
        <div className={styles.industriesGrid}>
          {industries.map((industry, index) => (
            <div key={index} className={styles.industryCard}>
              <span className={styles.industryIcon}>{industry.icon}</span>
              <h3 className={styles.industryName}>{industry.name}</h3>
              <p className={styles.industryDescription}>{industry.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className={styles.contactSection}>
        <h2 className={styles.contactTitle}>¿Listo para transformar tu presencia digital?</h2>
        <p className={styles.contactDescription}>
          Conversemos sobre tu proyecto y cómo podemos ayudarte a alcanzar tus objetivos.
        </p>
        <ContactForm />
      </section>
    </div>
  );
}
