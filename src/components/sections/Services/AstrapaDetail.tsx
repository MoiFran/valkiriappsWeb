"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLenis } from "@/contexts/LenisContext";
import styles from "./AstrapaDetail.module.css";

interface AstrapaDetailProps {
  isOpen: boolean;
  onClose: () => void;
}

const aiCapabilities = [
  {
    category: "IA Multimodelo",
    icon: "🧠",
    description: "200+ modelos especializados vía OpenRouter para cada funcionalidad",
    models: [
      "GPT-4 Turbo para tutorías avanzadas",
      "Claude 3.5 para análisis profundo",
      "Gemini Pro para contenido multimedia",
      "LLaMA 3 para procesamiento local",
      "Mixtral para razonamiento complejo",
      "Whisper para transcripción de audio",
    ],
  },
  {
    category: "Chat Tutor Inteligente",
    icon: "💬",
    description: "Asistente personalizado con memoria de contexto y adaptación al estudiante",
    models: [
      "RAG con embeddings vectoriales",
      "Memoria de sesiones persistente",
      "Análisis de estado de ánimo",
      "Sugerencias personalizadas en tiempo real",
      "Multi-idioma y adaptativo",
      "Detección de dificultades de aprendizaje",
    ],
  },
  {
    category: "Analytics & ML",
    icon: "📊",
    description: "Machine Learning para detección de patrones y predicción de rendimiento",
    models: [
      "Detección de anomalías en sesiones",
      "Predicción de abandono estudiantil",
      "Análisis de progreso en tiempo real",
      "Reportes automatizados diarios",
      "Clustering de estilos de aprendizaje",
      "Time series para seguimiento temporal",
    ],
  },
  {
    category: "Procesamiento Documental",
    icon: "📄",
    description: "IA para procesamiento y comprensión de documentos académicos",
    models: [
      "Extracción de texto PDF/DOCX/PPT",
      "Generación de embeddings vectoriales",
      "Búsqueda semántica inteligente",
      "Resúmenes automáticos",
      "Generación de preguntas de estudio",
      "Detección de plagio con IA",
    ],
  },
];

const platformFeatures = [
  {
    feature: "Sistema Multi-Rol",
    icon: "👥",
    description: "Arquitectura completa con 3 roles diferenciados",
    capabilities: [
      "Super Admin - Control total de plataforma",
      "Docente - Gestión de cursos y seguimiento",
      "Estudiante - Experiencia de aprendizaje gamificada",
      "Role switching dinámico",
      "Permisos granulares por funcionalidad",
    ],
  },
  {
    feature: "Gestión de Cursos",
    icon: "📚",
    description: "Sistema completo de creación y administración de contenido",
    capabilities: [
      "Módulos y actividades estructuradas",
      "Upload de materiales multimedia",
      "Activación/desactivación selectiva",
      "Progreso granular por estudiante",
      "Clonación y templates de cursos",
    ],
  },

  {
    feature: "Colaboración Social",
    icon: "🤝",
    description: "Herramientas de interacción y trabajo en equipo",
    capabilities: [
      "Foro de campus integrado",
      "Grupos de estudio virtuales",
      "Mensajería en tiempo real",
      "Sesiones de orientación grupal",
      "Recursos compartidos colaborativos",
    ],
  },
  {
    feature: "Monitoreo Avanzado",
    icon: "⏱️",
    description: "Tracking completo de actividad y tiempo de estudio",
    capabilities: [
      "Heartbeat de sesiones en tiempo real",
      "Detección de inactividad automática",
      "Time spent por módulo y actividad",
      "Alertas de comportamiento anómalo",
      "Exportación de métricas a PDF",
    ],
  },
  {
    feature: "Seguridad & Privacidad",
    icon: "🔒",
    description: "Infraestructura robusta de seguridad educativa",
    capabilities: [
      "Autenticación multi-factor",
      "Preguntas de seguridad configurables",
      "Recuperación de contraseña segura",
      "Encriptación de datos sensibles",
      "Logs de auditoría completos",
    ],
  },
];

const techStack = [
  {
    layer: "Frontend",
    technologies: [
      "Next.js 14 App Router",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "shadcn/ui",
    ],
  },
  {
    layer: "Backend",
    technologies: [
      "Next.js API Routes",
      "Drizzle ORM",
      "PostgreSQL",
      "Redis Cache",
      "Middleware personalizado",
    ],
  },
  {
    layer: "IA & ML",
    technologies: [
      "OpenRouter API",
      "OpenAI SDK",
      "Vector Embeddings",
      "TensorFlow.js",
      "Scikit-learn",
      "Mood Analysis",
    ],
  },
  {
    layer: "Procesamiento",
    technologies: [
      "PDF.js",
      "Mammoth (DOCX)",
      "Sharp (imágenes)",
      "FFmpeg (video)",
      "Whisper (audio)",
    ],
  },
  {
    layer: "DevOps",
    technologies: [
      "Vercel/Netlify",
      "GitHub Actions",
      "Drizzle Migrations",
      "Cron Jobs",
      "Monitoring",
    ],
  },
];

const useCases = [
  {
    industry: "Universidades",
    icon: "🎓",
    description: "Plataformas LMS de nueva generación para educación superior",
    solutions: [
      "Campus virtual completo con IA",
      "Tutorías personalizadas 24/7",
      "Detección temprana de deserción",
      "Analytics de rendimiento por cohorte",
      "Integración con sistemas académicos existentes",
    ],
  },
  {
    industry: "Corporativos",
    icon: "🏢",
    description: "Training empresarial con seguimiento avanzado",
    solutions: [
      "Onboarding automatizado con IA",
      "Upskilling personalizado por rol",
      "Certificaciones y compliance tracking",
      "ROI de capacitación con métricas",
      "Multi-tenant para grupos empresariales",
    ],
  },
  {
    industry: "K-12 Educación",
    icon: "🏫",
    description: "Plataformas escolares adaptativas para niños y adolescentes",
    solutions: [
      "Contenido adaptativo por edad",
      "Gamificación educativa avanzada",
      "Portal para padres con reportes",
      "Detección de bullying con IA",
      "Tutorías con límites de seguridad",
    ],
  },
];

const AstrapaDetail: React.FC<AstrapaDetailProps> = ({ isOpen, onClose }) => {
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
            <span className={styles.icon}>⚡</span>
            <div>
              <h2 className={styles.title}>Astrapa</h2>
              <p className={styles.tagline}>Plataformas Educativas de Nueva Generación con IA</p>
            </div>
          </div>
          <button className={styles.closeButton} onClick={onClose} aria-label="Cerrar">
            ✕
          </button>
        </div>

        {/* Content */}
        <div className={styles.content}>
          {/* Intro */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>🚀</span>
              El Futuro del E-Learning
            </h3>
            <div className={styles.introBox}>
              <p className={styles.introText}>
                Desarrollamos <strong>plataformas educativas de nueva generación</strong> que
                combinan las últimas tecnologías web con el poder de la{" "}
                <strong>Inteligencia Artificial</strong>.
              </p>
              <div className={styles.aiHighlight}>
                <span className={styles.aiIcon}>200+</span>
                <div>
                  <h4 className={styles.aiTitle}>Modelos de IA Especializados</h4>
                  <p className={styles.aiDescription}>
                    Acceso a más de 200 modelos de inteligencia artificial vía{" "}
                    <strong>OpenRouter</strong>, seleccionando el modelo perfecto para cada
                    funcionalidad específica.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* AI Capabilities */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>🤖</span>
              Capacidades de IA Integradas
            </h3>
            <div className={styles.capabilitiesGrid}>
              {aiCapabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  className={styles.capabilityCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={styles.capabilityHeader}>
                    <span className={styles.capabilityIcon}>{capability.icon}</span>
                    <h4 className={styles.capabilityName}>{capability.category}</h4>
                  </div>
                  <p className={styles.capabilityDescription}>{capability.description}</p>
                  <ul className={styles.modelsList}>
                    {capability.models.map((model, i) => (
                      <li key={i} className={styles.modelItem}>
                        <span className={styles.modelBullet}>▹</span>
                        {model}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Platform Features */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>⚙️</span>
              Características de Plataforma
            </h3>
            <div className={styles.featuresGrid}>
              {platformFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className={styles.featureCard}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <div className={styles.featureHeader}>
                    <span className={styles.featureIcon}>{feature.icon}</span>
                    <h4 className={styles.featureName}>{feature.feature}</h4>
                  </div>
                  <p className={styles.featureDescription}>{feature.description}</p>
                  <ul className={styles.capabilitiesList}>
                    {feature.capabilities.map((cap, i) => (
                      <li key={i} className={styles.capabilityItem}>
                        <span className={styles.capabilityBullet}>✓</span>
                        {cap}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Use Cases */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>🎯</span>
              Casos de Uso
            </h3>
            <div className={styles.useCasesGrid}>
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  className={styles.useCaseCard}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={styles.useCaseHeader}>
                    <span className={styles.useCaseIcon}>{useCase.icon}</span>
                    <h4 className={styles.useCaseName}>{useCase.industry}</h4>
                  </div>
                  <p className={styles.useCaseDescription}>{useCase.description}</p>
                  <ul className={styles.solutionsList}>
                    {useCase.solutions.map((solution, i) => (
                      <li key={i} className={styles.solutionItem}>
                        <span className={styles.solutionBullet}>→</span>
                        {solution}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>🛠️</span>
              Stack Tecnológico de Vanguardia
            </h3>
            <div className={styles.techStackGrid}>
              {techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  className={styles.techCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <h4 className={styles.techLayer}>{tech.layer}</h4>
                  <div className={styles.techTags}>
                    {tech.technologies.map((technology, i) => (
                      <span key={i} className={styles.techTag}>
                        {technology}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className={styles.ctaSection}>
            <div className={styles.ctaContent}>
              <h3 className={styles.ctaTitle}>¿Listo para Revolucionar tu Educación Digital?</h3>
              <p className={styles.ctaDescription}>
                Desarrollamos plataformas educativas completas, desde MVP hasta sistemas enterprise
                con millones de usuarios.
              </p>
              <div className={styles.ctaButtons}>
                <a href="#contacto" className={styles.primaryButton} onClick={onClose}>
                  Solicitar Desarrollo
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

export default AstrapaDetail;
