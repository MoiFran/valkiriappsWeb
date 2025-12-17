"use client";

import React from "react";
import Link from "next/link";
import styles from "./blog.module.css";
import { homeContent } from "@/content/home";

export default function BlogPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <Link href="/" className={styles.backButton}>
          ← Volver al Inicio
        </Link>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Blog</h1>
          <p className={styles.heroTagline}>{homeContent.blog.subtitle}</p>
          <p className={styles.heroDescription}>
            Descubre insights, tutoriales y mejores prácticas sobre desarrollo web, EdTech y
            automatización empresarial.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.postsGrid}>
            {homeContent.blog.posts.map((post, index) => (
              <article key={index} className={styles.postCard}>
                <div className={styles.postCategory}>{post.category}</div>
                <h2 className={styles.postTitle}>{post.title}</h2>
                <p className={styles.postExcerpt}>{post.excerpt}</p>
                <div className={styles.postMeta}>
                  <span className={styles.postDate}>
                    {new Date(post.publishedAt).toLocaleDateString("es-ES", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <span className={styles.postReadTime}>{post.readTime}</span>
                </div>
                <Link href={`/blog/${post.slug}`} className={styles.postLink}>
                  Leer artículo →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categorías */}
      <section className={styles.categoriesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Explora por Categoría</h2>
          <div className={styles.categoriesGrid}>
            <Link href="/blog?category=e-commerce" className={styles.categoryCard}>
              <div className={styles.categoryIcon}>🛒</div>
              <h3>E-commerce</h3>
              <p>WooCommerce, Shopify y tiendas online</p>
            </Link>
            <Link href="/blog?category=automatizacion" className={styles.categoryCard}>
              <div className={styles.categoryIcon}>⚡</div>
              <h3>Automatización</h3>
              <p>n8n, Zapier y workflows inteligentes</p>
            </Link>
            <Link href="/blog?category=edtech" className={styles.categoryCard}>
              <div className={styles.categoryIcon}>🎓</div>
              <h3>EdTech</h3>
              <p>Plataformas educativas y LMS</p>
            </Link>
            <Link href="/blog?category=wordpress" className={styles.categoryCard}>
              <div className={styles.categoryIcon}>🌐</div>
              <h3>WordPress</h3>
              <p>Desarrollo y optimización</p>
            </Link>
            <Link href="/blog?category=ia" className={styles.categoryCard}>
              <div className={styles.categoryIcon}>🤖</div>
              <h3>Inteligencia Artificial</h3>
              <p>GPT, Claude y aplicaciones de IA</p>
            </Link>
            <Link href="/blog?category=desarrollo" className={styles.categoryCard}>
              <div className={styles.categoryIcon}>💻</div>
              <h3>Desarrollo Web</h3>
              <p>Next.js, React y tecnologías modernas</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className={styles.newsletterSection}>
        <div className={styles.container}>
          <div className={styles.newsletterCard}>
            <h2 className={styles.newsletterTitle}>📬 Suscríbete a Nuestro Newsletter</h2>
            <p className={styles.newsletterDescription}>
              Recibe artículos, tutoriales y recursos directamente en tu bandeja de entrada. Sin
              spam, solo contenido de valor.
            </p>
            <form className={styles.newsletterForm}>
              <input
                type="email"
                placeholder="tu@email.com"
                className={styles.newsletterInput}
                required
              />
              <button type="submit" className={styles.newsletterButton}>
                Suscribirme
              </button>
            </form>
            <p className={styles.newsletterPrivacy}>
              Al suscribirte, aceptas nuestra{" "}
              <Link href="/privacy" style={{ color: "#4FC2D1", textDecoration: "underline" }}>
                Política de Privacidad
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>¿Tienes un proyecto en mente?</h2>
          <p className={styles.ctaDescription}>
            Más allá de artículos y tutoriales, podemos ayudarte a implementar soluciones reales
            para tu negocio.
          </p>
          <Link href="/#contacto" className={styles.ctaButton}>
            Solicitar Consultoría Gratuita
          </Link>
        </div>
      </section>
    </div>
  );
}
