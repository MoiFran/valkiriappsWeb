"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { GradientText } from "@/components/ui";
import { Threads } from "@/components/effects";
import Header from "@/components/layout/Header";
import { ContactForm, Footer } from "@/components/marketing";
import styles from "./worldweb.module.css";

const features = [
  {
    icon: "🌐",
    title: "WordPress Profesional",
    description:
      "Desarrollo de sitios WordPress robustos, optimizados para SEO y con diseño responsivo que cautiva a tu audiencia.",
    highlights: ["SEO Optimizado", "100% Responsivo", "Carga Ultra-Rápida"],
  },
  {
    icon: "🛒",
    title: "WooCommerce & E-commerce",
    description:
      "Tiendas online completas con sistemas de pago seguros, gestión de inventario y optimización de conversión.",
    highlights: ["Pagos Seguros", "Multi-Currency", "Analytics Integrado"],
  },
  {
    icon: "🔌",
    title: "Plugins Personalizados",
    description:
      "Funcionalidades únicas desarrolladas a medida: desde integraciones complejas hasta dashboards administrativos.",
    highlights: ["Código Limpio", "Actualizaciones", "Soporte Técnico"],
  },
  {
    icon: "🎨",
    title: "Diseño & UX",
    description:
      "Interfaces modernas con Elementor Pro, Divi o desarrollo desde cero con diseños que convierten visitantes en clientes.",
    highlights: ["UI/UX Moderno", "Microinteracciones", "Accesibilidad"],
  },
];

const techStack = [
  {
    category: "CMS & Frameworks",
    technologies: ["WordPress", "WooCommerce", "Shopify", "Next.js + Headless CMS"],
  },
  {
    category: "Constructores Visuales",
    technologies: ["Elementor Pro", "Divi Builder", "Gutenberg Blocks", "Bricks Builder"],
  },
  {
    category: "Backend & APIs",
    technologies: ["PHP 8.x", "REST API", "GraphQL", "MySQL/PostgreSQL"],
  },
  {
    category: "Performance & SEO",
    technologies: ["WP Rocket", "Rank Math", "Cloudflare", "CDN Integration"],
  },
];

const useCases = [
  {
    title: "Sitios Corporativos",
    description:
      "Presencia digital profesional con secciones de servicios, portafolios y blogs corporativos.",
    image: "🏢",
    metrics: ["Tiempo de carga <2s", "Score 95+ en Lighthouse", "Multi-idioma"],
  },
  {
    title: "Tiendas Online",
    description:
      "E-commerce completo con gestión de productos, carrito inteligente y checkout optimizado.",
    image: "🛍️",
    metrics: ["Conversión +40%", "100% Seguro", "Inventario en Tiempo Real"],
  },
  {
    title: "Portales de Contenido",
    description:
      "Blogs, revistas digitales y sitios de noticias con gestión avanzada de contenido.",
    image: "📰",
    metrics: ["SEO Avanzado", "Membresías", "Monetización"],
  },
  {
    title: "Sistemas Empresariales",
    description:
      "CRM, ERP y soluciones enterprise construidas sobre WordPress con arquitectura escalable.",
    image: "💼",
    metrics: ["Multi-tenant", "Roles Avanzados", "Integraciones"],
  },
];

const otherServices = [
  {
    id: "astrapa",
    name: "Astrapa",
    tagline: "Plataformas EdTech & LMS",
    description: "Sistemas educativos completos con analíticas, gamificación y gestión de cursos.",
    icon: "⚡",
    gradient: "linear-gradient(135deg, #9333ea 0%, #c084fc 100%)",
    link: "/astrapa",
  },
  {
    id: "thor",
    name: "Thor Smart Thunder",
    tagline: "Automatización & IA",
    description: "Workflows inteligentes con n8n, integraciones con IA y optimización de procesos.",
    icon: "⚙️",
    gradient: "linear-gradient(135deg, #06b6d4 0%, #67e8f9 100%)",
    link: "/thor",
  },
];

export default function WorldWebPage() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Solo activar efectos WebGL en desktop
    const checkDevice = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return (
    <>
      <Header />
      <div className={styles.page}>
        {/* Hero Section with Threads Background */}
        <section className={styles.hero}>
          {isDesktop && (
            <div className={styles.heroBackground}>
              <Threads
                color={[0.31, 0.76, 0.82]}
                amplitude={1.2}
                distance={0.15}
                enableMouseInteraction={true}
              />
            </div>
          )}

          <div className={styles.heroContent}>
            <Link href="/" className={styles.backButton}>
              ← Inicio
            </Link>

            <motion.div
              className={styles.heroText}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className={styles.heroIcon}>🌐</div>
              <h1 className={styles.heroTitle}>
                <GradientText
                  colors={["#4FC2D1", "#7df9ff", "#00bfff"]}
                  tag="span"
                  className={styles.gradientTitle}
                >
                  World Web In One Press
                </GradientText>
              </h1>
              <p className={styles.heroTagline}>Tu Presencia Digital, Perfeccionada</p>
              <p className={styles.heroDescription}>
                Desarrollo WordPress profesional, tiendas WooCommerce y soluciones CMS que
                transforman tu negocio digital. Desde webs corporativas hasta sistemas empresariales
                complejos.
              </p>

              <div className={styles.heroStats}>
                <div className={styles.statItem}>
                  <div className={styles.statValue}>150+</div>
                  <div className={styles.statLabel}>Proyectos</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statValue}>98%</div>
                  <div className={styles.statLabel}>Satisfacción</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statValue}>24/7</div>
                  <div className={styles.statLabel}>Soporte</div>
                </div>
              </div>

              <div className={styles.heroCtas}>
                <a href="#contacto" className={styles.ctaPrimary}>
                  Solicitar Consultoría
                </a>
                <a href="#features" className={styles.ctaSecondary}>
                  Ver Servicios
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className={styles.featuresSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>
                <GradientText colors={["#4FC2D1", "#7df9ff"]} tag="span">
                  Servicios Principales
                </GradientText>
              </h2>
              <p className={styles.sectionSubtitle}>
                Soluciones completas para cada necesidad digital
              </p>
            </div>

            <div className={styles.featuresGrid}>
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className={styles.featureCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={styles.featureIcon}>{feature.icon}</div>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureDescription}>{feature.description}</p>
                  <div className={styles.featureHighlights}>
                    {feature.highlights.map((highlight, idx) => (
                      <span key={idx} className={styles.highlight}>
                        ✓ {highlight}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className={styles.techStackSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>
                <GradientText colors={["#4FC2D1", "#7df9ff"]} tag="span">
                  Stack Tecnológico
                </GradientText>
              </h2>
              <p className={styles.sectionSubtitle}>
                Las mejores herramientas para resultados óptimos
              </p>
            </div>

            <div className={styles.techGrid}>
              {techStack.map((category, index) => (
                <motion.div
                  key={index}
                  className={styles.techCategory}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                >
                  <h3 className={styles.techCategoryTitle}>{category.category}</h3>
                  <div className={styles.techList}>
                    {category.technologies.map((tech, idx) => (
                      <span key={idx} className={styles.techTag}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className={styles.useCasesSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>
                <GradientText colors={["#4FC2D1", "#7df9ff"]} tag="span">
                  Casos de Uso
                </GradientText>
              </h2>
              <p className={styles.sectionSubtitle}>Soluciones reales para necesidades reales</p>
            </div>

            <div className={styles.useCasesGrid}>
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  className={styles.useCaseCard}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className={styles.useCaseImage}>{useCase.image}</div>
                  <div className={styles.useCaseContent}>
                    <h3 className={styles.useCaseTitle}>{useCase.title}</h3>
                    <p className={styles.useCaseDescription}>{useCase.description}</p>
                    <div className={styles.useCaseMetrics}>
                      {useCase.metrics.map((metric, idx) => (
                        <span key={idx} className={styles.metric}>
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Other Services */}
        <section className={styles.otherServicesSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>
                <GradientText colors={["#4FC2D1", "#7df9ff"]} tag="span">
                  Explora Más Servicios
                </GradientText>
              </h2>
              <p className={styles.sectionSubtitle}>
                Soluciones completas para cada área de tu negocio
              </p>
            </div>

            <div className={styles.servicesGrid}>
              {otherServices.map((service, index) => (
                <Link key={index} href={service.link} className={styles.serviceCard}>
                  <div
                    className={styles.serviceGradient}
                    style={{ background: service.gradient }}
                  ></div>
                  <div className={styles.serviceContent}>
                    <div className={styles.serviceIcon}>{service.icon}</div>
                    <h3 className={styles.serviceName}>{service.name}</h3>
                    <p className={styles.serviceTagline}>{service.tagline}</p>
                    <p className={styles.serviceDescription}>{service.description}</p>
                    <span className={styles.serviceLink}>Explorar {service.name} →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className={styles.contactSection}>
          <div className={styles.container}>
            <div className={styles.contactHeader}>
              <h2 className={styles.contactTitle}>
                <GradientText colors={["#4FC2D1", "#7df9ff"]} tag="span">
                  ¿Listo para Transformar tu Presencia Digital?
                </GradientText>
              </h2>
              <p className={styles.contactDescription}>
                Conversemos sobre tu proyecto y cómo podemos ayudarte a alcanzar tus objetivos con
                WordPress y soluciones CMS de última generación.
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
