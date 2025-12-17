"use client";

import React from "react";
import Link from "next/link";
import styles from "./about.module.css";
import { homeContent } from "@/content/home";

export default function AboutPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <Link href="/" className={styles.backButton}>
          ← Volver al Inicio
        </Link>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Sobre ValkiriApps Labs</h1>
          <p className={styles.heroTagline}>
            Transformando ideas en realidades digitales desde Canarias
          </p>
          <p className={styles.heroDescription}>
            Somos un equipo de desarrolladores, diseñadores y estrategas digitales especializados en
            crear soluciones tecnológicas que impulsan el crecimiento de negocios y organizaciones
            educativas.
          </p>
        </div>
      </section>

      {/* Nuestra Historia */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Nuestra Historia</h2>
          <div className={styles.grid}>
            <div className={styles.storyCard}>
              <div className={styles.cardIcon}>🚀</div>
              <h3>Comienzos</h3>
              <p>
                ValkiriApps Labs nace de la pasión por la tecnología y el deseo de ayudar a empresas
                y organizaciones educativas a aprovechar al máximo las herramientas digitales
                modernas.
              </p>
            </div>
            <div className={styles.storyCard}>
              <div className={styles.cardIcon}>💡</div>
              <h3>Visión</h3>
              <p>
                Creemos que la tecnología debe ser accesible, eficiente y transformadora. Nuestro
                objetivo es democratizar el acceso a soluciones digitales de calidad empresarial
                para todo tipo de organizaciones.
              </p>
            </div>
            <div className={styles.storyCard}>
              <div className={styles.cardIcon}>🎯</div>
              <h3>Misión</h3>
              <p>
                Desarrollar soluciones tecnológicas personalizadas que permitan a nuestros clientes
                centrarse en su core business mientras nosotros nos encargamos de su infraestructura
                digital.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Qué Nos Define */}
      <section className={styles.section} style={{ background: "rgba(79, 194, 209, 0.05)" }}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Qué Nos Define</h2>
          <div className={styles.benefitsGrid}>
            {homeContent.whyUs.benefits.map((benefit, index) => (
              <div key={index} className={styles.benefitCard}>
                <div className={styles.benefitIcon}>{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nuestros Valores */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Nuestros Valores</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <h3>🤝 Compromiso</h3>
              <p>
                Nos comprometemos con cada proyecto como si fuera propio. Tu éxito es nuestro éxito,
                y trabajamos incansablemente para garantizar resultados excepcionales.
              </p>
            </div>
            <div className={styles.valueCard}>
              <h3>🔒 Transparencia</h3>
              <p>
                Comunicación clara y honesta en cada etapa del proyecto. Sin sorpresas, sin letra
                pequeña. Sabrás exactamente qué estamos haciendo y por qué.
              </p>
            </div>
            <div className={styles.valueCard}>
              <h3>🚀 Innovación</h3>
              <p>
                Nos mantenemos a la vanguardia de las tecnologías emergentes para ofrecer soluciones
                modernas que realmente marquen la diferencia en tu negocio.
              </p>
            </div>
            <div className={styles.valueCard}>
              <h3>🎓 Aprendizaje Continuo</h3>
              <p>
                El mundo tech evoluciona rápido. Nos formamos constantemente para ofrecer siempre
                las mejores soluciones y prácticas del mercado.
              </p>
            </div>
            <div className={styles.valueCard}>
              <h3>⚡ Eficiencia</h3>
              <p>
                Optimizamos procesos, automatizamos tareas repetitivas y priorizamos soluciones que
                ahorren tiempo y recursos a largo plazo.
              </p>
            </div>
            <div className={styles.valueCard}>
              <h3>🌍 Impacto Social</h3>
              <p>
                Creemos en el poder de la tecnología para transformar la educación y democratizar el
                acceso al conocimiento. Por eso apoyamos proyectos con impacto social.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestra Metodología */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Cómo Trabajamos</h2>
          <div className={styles.processGrid}>
            {homeContent.process.steps.map((step, index) => (
              <div key={index} className={styles.processCard}>
                <div className={styles.processNumber}>{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <span className={styles.processDuration}>{step.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tecnologías */}
      <section className={styles.section} style={{ background: "rgba(79, 194, 209, 0.05)" }}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Tecnologías que Dominamos</h2>
          <div className={styles.techGrid}>
            <div className={styles.techCategory}>
              <h3>Frontend</h3>
              <div className={styles.techList}>
                <span>React</span>
                <span>Next.js</span>
                <span>TypeScript</span>
                <span>Tailwind CSS</span>
                <span>GSAP</span>
              </div>
            </div>
            <div className={styles.techCategory}>
              <h3>Backend</h3>
              <div className={styles.techList}>
                <span>Node.js</span>
                <span>Python</span>
                <span>PostgreSQL</span>
                <span>MongoDB</span>
                <span>Redis</span>
              </div>
            </div>
            <div className={styles.techCategory}>
              <h3>CMS & E-commerce</h3>
              <div className={styles.techList}>
                <span>WordPress</span>
                <span>WooCommerce</span>
                <span>Shopify</span>
                <span>Strapi</span>
                <span>Contentful</span>
              </div>
            </div>
            <div className={styles.techCategory}>
              <h3>DevOps & Cloud</h3>
              <div className={styles.techList}>
                <span>Docker</span>
                <span>AWS</span>
                <span>Vercel</span>
                <span>GitHub Actions</span>
                <span>Cloudflare</span>
              </div>
            </div>
            <div className={styles.techCategory}>
              <h3>Automatización & IA</h3>
              <div className={styles.techList}>
                <span>n8n</span>
                <span>Zapier</span>
                <span>OpenAI API</span>
                <span>Claude API</span>
                <span>Pinecone</span>
              </div>
            </div>
            <div className={styles.techCategory}>
              <h3>EdTech</h3>
              <div className={styles.techList}>
                <span>Moodle</span>
                <span>Canvas LMS</span>
                <span>Supabase</span>
                <span>Chart.js</span>
                <span>D3.js</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>¿Listo para trabajar juntos?</h2>
          <p className={styles.ctaDescription}>
            Conversemos sobre tu proyecto y descubre cómo podemos ayudarte a alcanzar tus objetivos
            digitales.
          </p>
          <Link href="/#contacto" className={styles.ctaButton}>
            Solicitar Consultoría Gratuita
          </Link>
        </div>
      </section>
    </div>
  );
}
