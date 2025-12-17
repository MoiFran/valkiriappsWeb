"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLenis } from "@/contexts/LenisContext";
import styles from "./ThorSmartDetail.module.css";

interface ThorSmartDetailProps {
  isOpen: boolean;
  onClose: () => void;
}

const technicalStack = [
  {
    title: "Backend Moderno",
    icon: "⚡",
    description: "Arquitecturas escalables con las últimas tecnologías",
    technologies: ["Node.js / Bun", "Python / FastAPI", "Go / Rust", "GraphQL / REST APIs"],
  },
  {
    title: "Bases de Datos",
    icon: "🗄️",
    description: "Soluciones de persistencia robustas y optimizadas",
    technologies: ["PostgreSQL", "MongoDB", "Redis", "Vector DBs (Pinecone, Weaviate)"],
  },
  {
    title: "Inteligencia Artificial",
    icon: "🤖",
    description: "Integración multi-modelo con OpenRouter y modelos propios",
    technologies: ["OpenAI GPT-4", "Claude", "Llama 2/3", "Mistral", "Gemini"],
  },
  {
    title: "Infraestructura Cloud",
    icon: "☁️",
    description: "Despliegues automatizados y escalables",
    technologies: ["AWS / Azure / GCP", "Docker / Kubernetes", "CI/CD Pipelines", "Terraform"],
  },
  {
    title: "Máquinas Virtuales IA",
    icon: "🖥️",
    description: "Servidores dedicados con modelos open-source privados",
    technologies: ["LLaMA local", "Stable Diffusion", "Whisper", "Custom fine-tuned models"],
  },
  {
    title: "Seguridad & DevOps",
    icon: "🔐",
    description: "Prácticas de seguridad y monitoreo continuo",
    technologies: ["OAuth 2.0 / JWT", "SSL/TLS", "Monitoring (Grafana)", "Backup automático"],
  },
];

const aiCapabilities = [
  {
    feature: "Multi-Modelo con OpenRouter",
    icon: "🌐",
    description:
      "Acceso unificado a +100 modelos de IA (GPT-4, Claude, Gemini, etc.) con gestión inteligente de costes y fallbacks automáticos.",
    benefits: ["Redundancia total", "Optimización de costes", "Mejor modelo para cada tarea"],
  },
  {
    feature: "Servidores IA Privados",
    icon: "🔒",
    description:
      "Desplegamos máquinas virtuales con modelos open-source (LLaMA, Mistral) para garantizar privacidad absoluta de tus datos.",
    benefits: ["100% privacidad", "Sin límites de tokens", "Personalización total"],
  },
  {
    feature: "Fine-Tuning Personalizado",
    icon: "🎯",
    description:
      "Entrenamos modelos específicos con tus datos para maximizar precisión y relevancia en tu dominio.",
    benefits: ["Modelos a medida", "Mayor precisión", "Reducción de alucinaciones"],
  },
  {
    feature: "RAG & Vector Search",
    icon: "📚",
    description:
      "Sistemas de recuperación aumentada (RAG) con bases de datos vectoriales para respuestas contextuales precisas.",
    benefits: ["Búsqueda semántica", "Contexto actualizado", "Respuestas verificables"],
  },
];

const projectTypes = [
  {
    type: "APIs Inteligentes",
    icon: "🔌",
    description: "Endpoints REST/GraphQL potenciados con IA",
    examples: [
      "Chatbots empresariales",
      "Análisis de documentos",
      "Generación de contenido",
      "Asistentes virtuales",
    ],
  },
  {
    type: "Plataformas SaaS",
    icon: "🚀",
    description: "Aplicaciones completas con IA integrada",
    examples: [
      "CRM con predicciones",
      "Herramientas de marketing IA",
      "Analytics avanzado",
      "Automatización workflows",
    ],
  },
  {
    type: "Infraestructura ML/AI",
    icon: "🏗️",
    description: "Servidores y pipelines de machine learning",
    examples: ["Training clusters", "Inference servers", "Data pipelines", "Model versioning"],
  },
  {
    type: "Integraciones Custom",
    icon: "🔗",
    description: "Conecta IA con tus sistemas existentes",
    examples: ["ERP + IA", "CRM inteligente", "Email automation", "Document processing"],
  },
];

const ThorSmartDetail: React.FC<ThorSmartDetailProps> = ({ isOpen, onClose }) => {
  const { stop, start } = useLenis();

  // Handle escape key and body scroll
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
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        onTouchEnd={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <span className={styles.icon}>⚡</span>
            <h2 className={styles.title}>Thor Smart Thunder</h2>
            <p className={styles.tagline}>Desarrollo Backend & Servidores IA</p>
          </div>
          <button
            className={styles.closeButton}
            onClick={onClose}
            onTouchEnd={(e) => {
              e.preventDefault();
              onClose();
            }}
            aria-label="Cerrar modal"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className={styles.content}>
          {/* Intro */}
          <div className={styles.intro}>
            <p className={styles.introText}>
              Desarrollamos <strong>soluciones backend de última generación</strong> con tecnologías
              modernas como
              <strong> Node.js, Python, PostgreSQL</strong> y frameworks avanzados. Nuestra
              especialidad es la
              <strong> integración de Inteligencia Artificial multi-modelo</strong> mediante
              OpenRouter y el despliegue de{" "}
              <strong>máquinas virtuales con modelos open-source</strong> para máxima privacidad.
            </p>
            <p className={styles.introText}>
              Creamos <strong>infraestructuras escalables</strong>, APIs robustas y sistemas de IA
              que mantienen
              <strong> tus datos 100% privados</strong>. Desde chatbots inteligentes hasta
              servidores de inferencia dedicados, transformamos ideas complejas en soluciones
              técnicas elegantes.
            </p>
          </div>

          {/* Technical Stack */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>🛠️</span>
              Stack Tecnológico Moderno
            </h3>
            <div className={styles.stackGrid}>
              {technicalStack.map((stack, index) => (
                <motion.div
                  key={index}
                  className={styles.stackCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className={styles.stackHeader}>
                    <span className={styles.stackIcon}>{stack.icon}</span>
                    <h4 className={styles.stackTitle}>{stack.title}</h4>
                  </div>
                  <p className={styles.stackDescription}>{stack.description}</p>
                  <ul className={styles.techList}>
                    {stack.technologies.map((tech, i) => (
                      <li key={i} className={styles.techItem}>
                        <span className={styles.techBullet}>▸</span>
                        {tech}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* AI Capabilities */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>🧠</span>
              Capacidades de Inteligencia Artificial
            </h3>
            <div className={styles.aiGrid}>
              {aiCapabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  className={styles.aiCard}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={styles.aiHeader}>
                    <span className={styles.aiIcon}>{capability.icon}</span>
                    <h4 className={styles.aiFeature}>{capability.feature}</h4>
                  </div>
                  <p className={styles.aiDescription}>{capability.description}</p>
                  <div className={styles.benefitsList}>
                    {capability.benefits.map((benefit, i) => (
                      <span key={i} className={styles.benefitTag}>
                        ✓ {benefit}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Project Types */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>💼</span>
              Tipos de Proyectos
            </h3>
            <div className={styles.projectsGrid}>
              {projectTypes.map((project, index) => (
                <motion.div
                  key={index}
                  className={styles.projectCard}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <span className={styles.projectIcon}>{project.icon}</span>
                  <h4 className={styles.projectType}>{project.type}</h4>
                  <p className={styles.projectDescription}>{project.description}</p>
                  <div className={styles.examplesList}>
                    {project.examples.map((example, i) => (
                      <span key={i} className={styles.exampleChip}>
                        {example}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Pricing */}
          <div className={styles.pricingSection}>
            <div className={styles.pricingCard}>
              <div className={styles.pricingHeader}>
                <span className={styles.pricingIcon}>💎</span>
                <h3 className={styles.pricingTitle}>Inversión Profesional</h3>
              </div>
              <div className={styles.pricingAmount}>
                <span className={styles.currency}>€</span>
                <span className={styles.amount}>12,000</span>
              </div>
              <p className={styles.pricingDescription}>
                Presupuesto mínimo para desarrollo backend e IA profesional.
                <strong> + Costes de servicios</strong> (servidores, cómputo, tokens API, etc.)
              </p>
              <ul className={styles.pricingFeatures}>
                <li>✓ Arquitectura escalable y código de calidad</li>
                <li>✓ Integración IA multi-modelo (OpenRouter)</li>
                <li>✓ Servidores dedicados opcionales</li>
                <li>✓ Documentación técnica completa</li>
                <li>✓ Soporte y mantenimiento incluido</li>
                <li>✓ Despliegue en cloud (AWS/Azure/GCP)</li>
              </ul>
              <div className={styles.costNote}>
                <strong>Nota:</strong> Los costes de infraestructura (servidores, GPUs, tokens de
                IA, almacenamiento) se facturan mensualmente según uso real. Te asesoramos para
                optimizar costes.
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className={styles.ctaSection}>
            <h3 className={styles.ctaTitle}>¿Listo para potenciar tu negocio con IA?</h3>
            <p className={styles.ctaDescription}>
              Conversemos sobre tu proyecto y diseñamos la solución técnica perfecta
            </p>
            <div className={styles.ctaButtons}>
              <a
                href="#contacto"
                className={styles.primaryButton}
                onClick={onClose}
                onTouchEnd={(e) => {
                  e.preventDefault();
                  onClose();
                  setTimeout(() => {
                    window.location.hash = "contacto";
                  }, 100);
                }}
              >
                Solicitar Consultoría
              </a>
              <button
                className={styles.secondaryButton}
                onClick={onClose}
                onTouchEnd={(e) => {
                  e.preventDefault();
                  onClose();
                }}
              >
                Ver Otros Servicios
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ThorSmartDetail;
