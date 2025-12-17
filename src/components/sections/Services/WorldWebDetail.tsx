"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLenis } from "@/contexts/LenisContext";
import styles from "./WorldWebDetail.module.css";

interface WorldWebDetailProps {
  isOpen: boolean;
  onClose: () => void;
}

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
    layer: "Gutenberg & Bloques",
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
    solutions: [
      "Multisite para gestión de concesionarios",
      "Catálogos de vehículos con filtros avanzados",
      "Sistema de citas para mantenimiento",
      "Integración con sistemas de inventario",
      "Portal de clientes con historial de servicios",
    ],
  },
  {
    name: "Manufactura",
    icon: "🏭",
    description: "Fábricas de electrodomésticos y productos industriales",
    solutions: [
      "Catálogos técnicos con especificaciones",
      "Portal B2B para distribuidores",
      "Sistema de pedidos automatizado",
      "Integración con ERP de producción",
      "Gestión de garantías y soporte técnico",
    ],
  },
  {
    name: "Farmacéutica",
    icon: "💊",
    description: "Laboratorios farmacéuticos y empresas de salud",
    solutions: [
      "Catálogo de productos regulados",
      "Sistema de trazabilidad",
      "Portal médico con documentación técnica",
      "Integración con sistemas de distribución",
      "Cumplimiento normativo automatizado",
    ],
  },
];

const expertise = [
  {
    category: "Desarrollo Core",
    items: [
      "Themes desde cero (scratch)",
      "Child themes avanzados",
      "Custom post types & taxonomías",
      "Template hierarchy mastery",
      "Hooks & Filters ecosystem",
    ],
  },
  {
    category: "Plugins & Extensiones",
    items: [
      "Plugins OOP completos",
      "Admin panels personalizados",
      "Settings API avanzada",
      "Plugin boilerplates custom",
      "Update mechanisms",
    ],
  },
  {
    category: "Constructores Visuales",
    items: [
      "Elementor widgets custom",
      "Divi modules personalizados",
      "Visual Composer extensions",
      "Bricks Builder elements",
      "Dynamic tags & fields",
    ],
  },
  {
    category: "Gutenberg Mastery",
    items: [
      "Block development (React)",
      "Custom patterns library",
      "Block variations",
      "InnerBlocks complejos",
      "Full Site Editing (FSE)",
    ],
  },
  {
    category: "Integraciones",
    items: [
      "REST API custom endpoints",
      "GraphQL implementations",
      "ERP/CRM connections",
      "Payment gateways custom",
      "Third-party APIs",
    ],
  },
  {
    category: "Sistemas Complejos",
    items: [
      "CRM sobre WordPress",
      "Multisite networks",
      "Membership systems",
      "Learning Management Systems",
      "Booking & Reservations",
    ],
  },
];

const WorldWebDetail: React.FC<WorldWebDetailProps> = ({ isOpen, onClose }) => {
  const { stop, start } = useLenis();

  React.useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    // Stop Lenis smooth scroll to allow modal scroll
    stop();
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleEscape);

    return () => {
      // Restart Lenis when modal closes
      start();
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose, stop, start]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent | React.TouchEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <motion.div
      className={styles.overlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleBackdropClick}
      onTouchEnd={handleBackdropClick}
    >
      <motion.div
        className={styles.modal}
        initial={{ scale: 0.9, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 50 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        onClick={(e) => e.stopPropagation()}
        onTouchEnd={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <span className={styles.icon}>🌊</span>
            <div>
              <h2 className={styles.title}>World Web in One Press</h2>
              <p className={styles.tagline}>WordPress & CMS Enterprise Solutions</p>
            </div>
          </div>
          <button className={styles.closeButton} onClick={onClose} aria-label="Cerrar">
            ✕
          </button>
        </div>

        {/* Content */}
        <div className={styles.content}>
          {/* What is CMS */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>📚</span>
              ¿Qué es un CMS?
            </h3>
            <div className={styles.cmsExplanation}>
              <p className={styles.cmsText}>
                Un <strong>CMS (Content Management System)</strong> es un sistema que permite crear,
                gestionar y publicar contenido web sin necesidad de conocimientos técnicos
                avanzados.
              </p>
              <div className={styles.wordpressHighlight}>
                <span className={styles.wpIcon}>WordPress</span>
                <p>
                  <strong>WordPress</strong> es el CMS más popular del mundo, utilizado por el{" "}
                  <strong>43% de todos los sitios web</strong>. Desde blogs personales hasta
                  portales corporativos de Fortune 500.
                </p>
              </div>
            </div>
          </div>

          {/* WordPress Layers */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>🏗️</span>
              Dominamos TODAS las Capas de WordPress
            </h3>
            <div className={styles.layersGrid}>
              {wordpressLayers.map((layer, index) => (
                <motion.div
                  key={index}
                  className={styles.layerCard}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <div className={styles.layerHeader}>
                    <span className={styles.layerIcon}>{layer.icon}</span>
                    <h4 className={styles.layerName}>{layer.layer}</h4>
                  </div>
                  <p className={styles.layerDescription}>{layer.description}</p>
                  <div className={styles.skillsGrid}>
                    {layer.skills.map((skill, i) => (
                      <span key={i} className={styles.skillTag}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Industries */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>🎯</span>
              Experiencia Comprobada en Industrias Clave
            </h3>
            <div className={styles.industriesGrid}>
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  className={styles.industryCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={styles.industryHeader}>
                    <span className={styles.industryIcon}>{industry.icon}</span>
                    <h4 className={styles.industryName}>{industry.name}</h4>
                  </div>
                  <p className={styles.industryDescription}>{industry.description}</p>
                  <ul className={styles.solutionsList}>
                    {industry.solutions.map((solution, i) => (
                      <li key={i} className={styles.solutionItem}>
                        <span className={styles.checkIcon}>✓</span>
                        {solution}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Expertise Matrix */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>⚡</span>
              Expertise Técnico Completo
            </h3>
            <div className={styles.expertiseGrid}>
              {expertise.map((category, index) => (
                <motion.div
                  key={index}
                  className={styles.expertiseCard}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <h4 className={styles.expertiseCategory}>{category.category}</h4>
                  <ul className={styles.expertiseList}>
                    {category.items.map((item, i) => (
                      <li key={i} className={styles.expertiseItem}>
                        <span className={styles.expertiseBullet}>▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className={styles.ctaSection}>
            <div className={styles.ctaContent}>
              <h3 className={styles.ctaTitle}>¿Tienes un Proyecto WordPress en Mente?</h3>
              <p className={styles.ctaDescription}>
                Desde un simple plugin hasta un CRM empresarial completo, tenemos la experiencia
                para hacerlo realidad.
              </p>
              <div className={styles.ctaButtons}>
                <a href="#contacto" className={styles.primaryButton} onClick={onClose}>
                  Iniciar Proyecto
                </a>
                <button className={styles.secondaryButton} onClick={onClose}>
                  Ver Otros Servicios
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default WorldWebDetail;
