"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLenis } from "@/contexts/LenisContext";
import styles from "./ThorDetail.module.css";

interface ThorDetailProps {
  isOpen: boolean;
  onClose: () => void;
}

const developmentServices = [
  {
    service: "MVP & Prototipado Rápido",
    icon: "🚀",
    description: "De la idea al producto en semanas, no meses",
    capabilities: [
      "Desarrollo desde 0 de MVP web completos",
      "Mobile apps nativas (iOS & Android)",
      "React Native cross-platform",
      "Progressive Web Apps (PWA)",
      "Validación de mercado acelerada",
      "Iteración continua basada en feedback",
    ],
  },
  {
    service: "Aplicaciones Web Empresariales",
    icon: "💼",
    description: "Sistemas robustos para operaciones críticas de negocio",
    capabilities: [
      "Dashboards de analítica financiera",
      "Plataformas deportivas y fitness",
      "CRM y ERP personalizados",
      "Business Intelligence avanzado",
      "Gestión de inventarios y logística",
      "Portales B2B/B2C escalables",
    ],
  },
  {
    service: "Soluciones Mobile",
    icon: "📱",
    description: "Apps móviles nativas y cross-platform de alto rendimiento",
    capabilities: [
      "Swift para iOS nativo",
      "Kotlin para Android nativo",
      "React Native para cross-platform",
      "Flutter para UI excepcional",
      "Offline-first architecture",
      "Push notifications & real-time sync",
    ],
  },
  {
    service: "Industria 4.0 & IoT",
    icon: "🏭",
    description: "Conectando el mundo físico con el digital",
    capabilities: [
      "Integración con sensores IoT",
      "Gemelos digitales (Digital Twins)",
      "Monitoreo en tiempo real",
      "Mantenimiento predictivo con ML",
      "Dashboards de producción",
      "Edge computing & fog nodes",
    ],
  },
];

const aiDeployment = [
  {
    approach: "IA On-Premise",
    icon: "🔒",
    description: "Modelos de código abierto en tus servidores para máxima privacidad",
    benefits: [
      "Cumplimiento GDPR y normativa europea",
      "Cero dependencia de APIs externas",
      "Control total de datos sensibles",
      "Latencia ultra-baja en procesamiento",
      "Costos predecibles sin llamadas API",
      "Personalización completa del modelo",
    ],
    models: [
      "LLaMA 3.1 (Meta) - hasta 405B parámetros",
      "Mistral Large - multilingüe europeo",
      "DeepSeek Coder - especializado en código",
      "Qwen 2.5 - alta eficiencia",
      "Phi-3 (Microsoft) - modelos compactos",
      "Gemma (Google) - lightweight pero potente",
    ],
  },
  {
    approach: "IA Multi-Cloud",
    icon: "☁️",
    description: "APIs unificadas con OpenRouter para los mejores modelos del mercado",
    benefits: [
      "Acceso a 200+ modelos líderes",
      "Failover automático entre proveedores",
      "Cost optimization inteligente",
      "Selección dinámica de modelo por tarea",
      "Unified API simplifica integración",
      "Escalado automático sin límites",
    ],
    models: [
      "Claude 3.5 Sonnet (Anthropic) - razonamiento superior",
      "GPT-4 Turbo (OpenAI) - versatilidad total",
      "Gemini 1.5 Pro (Google) - contexto gigante",
      "LLaMA 3.1 405B (Meta) - open source potente",
      "DeepSeek V2.5 - económico y eficiente",
      "Mixtral 8x22B (Mistral) - MoE avanzado",
    ],
  },
];

const applicationDomains = [
  {
    domain: "Analítica Financiera",
    icon: "💰",
    description: "Herramientas inteligentes para decisiones financieras",
    solutions: [
      "Dashboards de trading en tiempo real",
      "Predicción de tendencias con ML",
      "Análisis de riesgo y portfolio",
      "Detección de fraude con IA",
      "Automatización de reportes regulatorios",
      "Chatbots financieros conversacionales",
    ],
  },
  {
    domain: "Deportes & Fitness",
    icon: "⚽",
    description: "Tecnología para la industria deportiva y wellness",
    solutions: [
      "Análisis de rendimiento atlético",
      "Tracking de entrenamientos con wearables",
      "Predicción de lesiones con ML",
      "Plataformas de coaching personalizado",
      "Fantasy sports con estadísticas avanzadas",
      "Comunidades y gamificación deportiva",
    ],
  },
  {
    domain: "Manufactura & Supply Chain",
    icon: "🏭",
    description: "Optimización de cadenas productivas con IA",
    solutions: [
      "Optimización de rutas logísticas",
      "Predicción de demanda con ML",
      "Control de calidad con Computer Vision",
      "Mantenimiento predictivo de maquinaria",
      "Gestión de inventarios inteligente",
      "Trazabilidad blockchain integrada",
    ],
  },
  {
    domain: "Retail & E-Commerce",
    icon: "🛒",
    description: "Experiencias de compra personalizadas con IA",
    solutions: [
      "Recomendaciones personalizadas con ML",
      "Búsqueda semántica de productos",
      "Dynamic pricing con algoritmos",
      "Chatbots de atención al cliente",
      "Análisis de sentimiento en reviews",
      "Predicción de churn de clientes",
    ],
  },
];

const techStack = [
  {
    layer: "Frontend Web",
    technologies: [
      "Next.js 14/15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Zustand/Redux",
      "TanStack Query",
    ],
  },
  {
    layer: "Mobile",
    technologies: [
      "React Native",
      "Expo",
      "Swift (iOS)",
      "Kotlin (Android)",
      "Flutter",
      "Realm/SQLite",
    ],
  },
  {
    layer: "Backend",
    technologies: ["Node.js", "Python (FastAPI)", "Go", "NestJS", "PostgreSQL/MongoDB", "Redis"],
  },
  {
    layer: "IA & ML",
    technologies: ["OpenRouter API", "LLaMA.cpp", "Ollama", "vLLM", "PyTorch", "TensorFlow"],
  },
  {
    layer: "Infraestructura",
    technologies: [
      "Docker/Kubernetes",
      "AWS/Azure/GCP",
      "On-premise servers",
      "CI/CD GitHub Actions",
      "Nginx/Traefik",
    ],
  },
  {
    layer: "IoT & Edge",
    technologies: ["MQTT", "InfluxDB", "Grafana", "Node-RED", "TensorFlow Lite", "Edge TPU"],
  },
];

const complianceFeatures = [
  {
    feature: "GDPR Compliance",
    description: "Arquitecturas diseñadas para cumplir normativa europea de protección de datos",
  },
  {
    feature: "Data Sovereignty",
    description: "Tus datos permanecen en servidores bajo tu control jurisdiccional",
  },
  {
    feature: "Audit Trails",
    description: "Logs completos de acceso y procesamiento para auditorías",
  },
  {
    feature: "Encryption at Rest & Transit",
    description: "Encriptación de extremo a extremo para máxima seguridad",
  },
];

const ThorDetail: React.FC<ThorDetailProps> = ({ isOpen, onClose }) => {
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
              <h2 className={styles.title}>Thor Smart Thunder</h2>
              <p className={styles.tagline}>Desarrollo Empresarial & Soluciones IA de Vanguardia</p>
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
              <span className={styles.sectionIcon}>🎯</span>
              Soluciones a Medida para tu Negocio
            </h3>
            <div className={styles.introBox}>
              <p className={styles.introText}>
                Desarrollamos <strong>software empresarial de alto impacto</strong> desde
                aplicaciones web y móviles hasta complejas integraciones de{" "}
                <strong>Inteligencia Artificial</strong> tanto on-premise como en la nube.
              </p>
              <div className={styles.highlightGrid}>
                <div className={styles.highlightItem}>
                  <span className={styles.highlightIcon}>🚀</span>
                  <h4 className={styles.highlightTitle}>MVP en Semanas</h4>
                  <p className={styles.highlightText}>Prototipado rápido web & mobile</p>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.highlightIcon}>🔒</span>
                  <h4 className={styles.highlightTitle}>IA On-Premise</h4>
                  <p className={styles.highlightText}>Privacidad total, cumplimiento GDPR</p>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.highlightIcon}>☁️</span>
                  <h4 className={styles.highlightTitle}>Multi-Cloud API</h4>
                  <p className={styles.highlightText}>200+ modelos vía OpenRouter</p>
                </div>
              </div>
            </div>
          </div>

          {/* Development Services */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>💻</span>
              Servicios de Desarrollo
            </h3>
            <div className={styles.servicesGrid}>
              {developmentServices.map((service, index) => (
                <motion.div
                  key={index}
                  className={styles.serviceCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={styles.serviceHeader}>
                    <span className={styles.serviceIcon}>{service.icon}</span>
                    <h4 className={styles.serviceName}>{service.service}</h4>
                  </div>
                  <p className={styles.serviceDescription}>{service.description}</p>
                  <ul className={styles.capabilitiesList}>
                    {service.capabilities.map((cap, i) => (
                      <li key={i} className={styles.capabilityItem}>
                        <span className={styles.capabilityBullet}>▹</span>
                        {cap}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* AI Deployment */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>🤖</span>
              Despliegue de IA: On-Premise vs Cloud
            </h3>
            <div className={styles.aiGrid}>
              {aiDeployment.map((deployment, index) => (
                <motion.div
                  key={index}
                  className={styles.aiCard}
                  initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className={styles.aiHeader}>
                    <span className={styles.aiIcon}>{deployment.icon}</span>
                    <h4 className={styles.aiTitle}>{deployment.approach}</h4>
                  </div>
                  <p className={styles.aiDescription}>{deployment.description}</p>

                  <div className={styles.benefitsSection}>
                    <h5 className={styles.subsectionTitle}>Beneficios</h5>
                    <ul className={styles.benefitsList}>
                      {deployment.benefits.map((benefit, i) => (
                        <li key={i} className={styles.benefitItem}>
                          <span className={styles.benefitBullet}>✓</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.modelsSection}>
                    <h5 className={styles.subsectionTitle}>Modelos Disponibles</h5>
                    <div className={styles.modelTags}>
                      {deployment.models.map((model, i) => (
                        <span key={i} className={styles.modelTag}>
                          {model}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Application Domains */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>🎯</span>
              Dominios de Aplicación
            </h3>
            <div className={styles.domainsGrid}>
              {applicationDomains.map((domain, index) => (
                <motion.div
                  key={index}
                  className={styles.domainCard}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <div className={styles.domainHeader}>
                    <span className={styles.domainIcon}>{domain.icon}</span>
                    <h4 className={styles.domainName}>{domain.domain}</h4>
                  </div>
                  <p className={styles.domainDescription}>{domain.description}</p>
                  <ul className={styles.solutionsList}>
                    {domain.solutions.map((solution, i) => (
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

          {/* Compliance */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>🛡️</span>
              Seguridad & Cumplimiento Normativo
            </h3>
            <div className={styles.complianceGrid}>
              {complianceFeatures.map((item, index) => (
                <motion.div
                  key={index}
                  className={styles.complianceCard}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <h4 className={styles.complianceTitle}>{item.feature}</h4>
                  <p className={styles.complianceDescription}>{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>🛠️</span>
              Stack Tecnológico
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
              <h3 className={styles.ctaTitle}>
                ¿Listo para Transformar tu Empresa con Tecnología de Punta?
              </h3>
              <p className={styles.ctaDescription}>
                Desde MVP hasta sistemas enterprise, con o sin IA on-premise. Construimos lo que
                necesitas.
              </p>
              <div className={styles.ctaButtons}>
                <a href="#contacto" className={styles.primaryButton} onClick={onClose}>
                  Consulta Técnica Gratuita
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

export default ThorDetail;
