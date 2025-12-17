"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./cases.module.css";
import { homeContent } from "@/content/home";

export default function CasesPage() {
  const [activeTab, setActiveTab] = useState("world-web");

  const getTabData = () => {
    return homeContent.showcase.tabs.find((tab) => tab.id === activeTab);
  };

  const tabData = getTabData();

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <Link href="/" className={styles.backButton}>
          ← Volver al Inicio
        </Link>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Casos de Éxito</h1>
          <p className={styles.heroTagline}>Proyectos reales, resultados medibles</p>
          <p className={styles.heroDescription}>
            Descubre cómo hemos ayudado a empresas y organizaciones educativas a transformar sus
            operaciones digitales con soluciones personalizadas.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.tabs}>
            {homeContent.showcase.tabs.map((tab) => (
              <button
                key={tab.id}
                className={`${styles.tab} ${activeTab === tab.id ? styles.tabActive : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className={styles.projectsGrid}>
            {tabData?.projects.map((project, index) => (
              <div key={index} className={styles.projectCard}>
                <div className={styles.projectHeader}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <div className={styles.projectResult}>{project.result}</div>
                </div>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.projectStack}>
                  <div className={styles.stackLabel}>Stack Tecnológico:</div>
                  <div className={styles.stackTags}>
                    {project.stack.map((tech, idx) => (
                      <span key={idx} className={styles.stackTag}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {project.link !== "#" && (
                  <Link href={project.link} className={styles.projectLink}>
                    Ver Caso Completo →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className={styles.statsSection}>
        <div className={styles.container}>
          <h2 className={styles.statsTitle}>Resultados que Respaldan Nuestro Trabajo</h2>
          <div className={styles.statsGrid}>
            {homeContent.whyUs.kpis.map((kpi, index) => (
              <div key={index} className={styles.statCard}>
                <div className={styles.statValue}>{kpi.value}</div>
                <div className={styles.statLabel}>{kpi.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Lo que Dicen Nuestros Clientes</h2>
          <div className={styles.testimonialsGrid}>
            {homeContent.testimonials.items.map((testimonial, index) => (
              <div key={index} className={styles.testimonialCard}>
                <div className={styles.testimonialRating}>{"★".repeat(testimonial.rating)}</div>
                <p className={styles.testimonialQuote}>&ldquo;{testimonial.quote}&rdquo;</p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorName}>{testimonial.name}</div>
                  <div className={styles.authorRole}>{testimonial.role}</div>
                  <div className={styles.authorCompany}>{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>¿Listo para ser nuestro próximo caso de éxito?</h2>
          <p className={styles.ctaDescription}>
            Conversemos sobre tu proyecto y descubre cómo podemos ayudarte a alcanzar resultados
            similares.
          </p>
          <Link href="/#contacto" className={styles.ctaButton}>
            Solicitar Consultoría Gratuita
          </Link>
        </div>
      </section>
    </div>
  );
}
