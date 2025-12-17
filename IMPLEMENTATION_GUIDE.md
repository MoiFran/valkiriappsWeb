# ValkiriApps Labs - Home Page Implementation Guide

## ✅ Archivos Ya Creados

### Content & Configuration

- ✅ `src/content/home.ts` - Todo el contenido centralizado
- ✅ `src/lib/seo.ts` - Funciones SEO y JSON-LD schemas
- ✅ `src/lib/analytics.ts` - Sistema de tracking GTM
- ✅ `src/lib/validations.ts` - Schemas de validación Zod

### Components Created

- ✅ `src/components/marketing/Header.tsx` - Header con navegación
- ✅ `src/components/marketing/Footer.tsx` - Footer con links y social
- ✅ `src/components/marketing/Hero.tsx` - Hero con Threads background
- ✅ `src/components/marketing/ContactForm.tsx` - Formulario completo

### API Routes

- ✅ `src/app/api/contact/route.ts` - Proxy al webhook n8n

## 📋 Componentes Pendientes

Crea estos archivos para completar la home page. Usa los efectos que ya tienes disponibles.

### 1. Service Pillars Component

**Archivo**: `src/components/marketing/ServicePillars.tsx`

```tsx
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ElectricBorder } from "@/components/ui";
import { homeContent } from "@/content/home";
import { trackPillarInteraction } from "@/lib/analytics";

export default function ServicePillars() {
  const { title, subtitle, pillars } = homeContent.servicePillars;

  return (
    <section id="servicios" className="py-20 lg:py-32 bg-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-4"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ElectricBorder
                color={`var(--valk-${pillar.color})`}
                speed={1.5}
                chaos={1.5}
                className="h-full"
              >
                <div className="p-8 bg-surface h-full flex flex-col">
                  <div className="text-5xl mb-4">{pillar.icon}</div>
                  <h3 className="text-2xl font-bold text-text mb-2">{pillar.name}</h3>
                  <p className="text-sm text-primary-400 mb-4">{pillar.tagline}</p>
                  <p className="text-muted mb-6 flex-grow">{pillar.description}</p>
                  <ul className="space-y-2 mb-6">
                    {pillar.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start text-sm text-text">
                        <svg
                          className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={pillar.anchor}
                    onClick={() => trackPillarInteraction(pillar.name)}
                    className="inline-flex items-center text-primary-500 hover:text-primary-400 font-medium transition-colors"
                  >
                    {pillar.cta}
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </ElectricBorder>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### 2. Marketing Layout

**Archivo**: `src/app/(marketing)/layout.tsx`

```tsx
import React from "react";
import Header from "@/components/marketing/Header";
import Footer from "@/components/marketing/Footer";
import ClientSmoothScroll from "@/components/layout/ClientSmoothScroll";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClientSmoothScroll>
      <div className="min-h-screen bg-bg text-text">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </ClientSmoothScroll>
  );
}
```

### 3. Home Page

**Archivo**: `src/app/(marketing)/page.tsx`

```tsx
import React from "react";
import type { Metadata } from "next";
import Hero from "@/components/marketing/Hero";
import ServicePillars from "@/components/marketing/ServicePillars";
import ContactForm from "@/components/marketing/ContactForm";
import { generateMetadata } from "@/lib/seo";
import {
  generateOrganizationSchema,
  generateServiceSchema,
  generateBreadcrumbSchema,
} from "@/lib/seo";
import { homeContent, seoKeywords } from "@/content/home";

// SEO Metadata
export const metadata: Metadata = generateMetadata({
  title: "ValkiriApps Labs | WordPress, Automatización e IA para PYMES",
  description:
    "Desarrollo WordPress y WooCommerce, software educativo Astrapa y automatizaciones Thor Smart Thunder con IA. Soluciones modulares y escalables.",
  keywords: [...seoKeywords],
  ogImage: "/og-home.jpg",
  canonical: "/",
});

export default function HomePage() {
  // JSON-LD Structured Data
  const organizationSchema = generateOrganizationSchema();

  const serviceSchemas = [
    generateServiceSchema(
      "World Web In One Press",
      "Desarrollo WordPress, WooCommerce, plugins a medida y Shopify",
      "WebDevelopment"
    ),
    generateServiceSchema(
      "Astrapa",
      "Plataformas EdTech, LMS personalizados y software educativo",
      "SoftwareDevelopment"
    ),
    generateServiceSchema(
      "Thor Smart Thunder",
      "Automatizaciones con IA, n8n, Zapier y optimización de procesos",
      "BusinessAutomation"
    ),
  ];

  const breadcrumbSchema = generateBreadcrumbSchema([{ name: "Inicio", url: "/" }]);

  return (
    <>
      {/* JSON-LD Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchemas),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* Sections */}
      <Hero />
      <ServicePillars />
      {/* TODO: Add remaining sections */}
      {/* <DeepServices /> */}
      {/* <WhyUs /> */}
      {/* <Showcase /> */}
      {/* <ProcessTimeline /> */}
      {/* <Testimonials /> */}
      {/* <CTASection /> */}
      {/* <BlogPreview /> */}
      <ContactForm />
    </>
  );
}
```

## 🎨 Secciones Pendientes (Simplificadas)

### WhyUs Section

Usa `ScrollFloat` para animar títulos, grid de beneficios con iconos y KPIs con números grandes.

### Showcase Section

Tabs con `framer-motion`, tarjetas de casos con `next/image`, background opcional con `LaserFlow`.

### ProcessTimeline

Timeline vertical/horizontal con números grandes, conectores animados, usa `GradientText` para los números.

### Testimonials

Carrusel con `framer-motion`, avatares circulares, 5 estrellas, navegación con flechas accesibles.

### CTASection

Fondo con `Ballpit` o `SplashCursor`, CTA centrado grande, botones primario + secundario.

### BlogPreview

3 cards simples con imagen, categoría, título, excerpt y "Leer más". Links a `/blog/[slug]`.

## 🔧 Environment Variables

Crea `.env.local`:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://valkiriapps.com

# n8n Webhook
N8N_WEBHOOK_URL=https://your-n8n-instance.com/webhook/contact

# Google Tag Manager (optional)
NEXT_PUBLIC_GTM_ID=GTM-XXXXXX

# Development
NODE_ENV=development
```

## 📱 Efectos Disponibles para Usar

Ya tienes estos componentes listos:

### Effects

- `Ballpit` - Physics simulation con esferas 3D
- `LaserFlow` - Láser volumétrico
- `Lightning` - Relámpagos procedurales
- `ScrollFloat` - Texto flotante en scroll
- `SplashCursor` - Fluid simulation
- `Threads` - Hilos animados

### UI Components

- `ElectricBorder` - Borde eléctrico animado
- `GradientText` - Texto con gradiente
- `SplitText` - Texto splitteado para animaciones
- `StarBorder` - Borde con estrellas
- `TrueFocus` - Focus effect

### Sections

- `MagicBento` - Grid interactivo (si necesitas inspiración)

## 🎯 Mapa de Efectos Recomendados

- **Hero**: `Threads` o `Lightning` (ya implementado)
- **ServicePillars**: `ElectricBorder` en cards (implementar)
- **DeepServices**: `StarBorder` en hover
- **WhyUs**: `ScrollFloat` en headings
- **Showcase**: `LaserFlow` como background
- **ProcessTimeline**: `GradientText` en números
- **Testimonials**: Framer Motion carrusel
- **CTASection**: `Ballpit` o `SplashCursor`
- **BlogPreview**: Hover con `StarBorder`

## ✅ Checklist Final

- [x] Content structure (home.ts)
- [x] SEO helpers (seo.ts)
- [x] Analytics helpers (analytics.ts)
- [x] Validation schemas (validations.ts)
- [x] Header component
- [x] Footer component
- [x] Hero section
- [x] ContactForm component
- [x] API route (/api/contact)
- [ ] ServicePillars component (código provisto arriba)
- [ ] Marketing layout (código provisto arriba)
- [ ] Home page (código provisto arriba)
- [ ] Remaining sections (WhyUs, Showcase, etc.)
- [ ] Images en `/public` (logos ya están)
- [ ] Configure n8n webhook
- [ ] Test accesibilidad (WCAG 2.1 AA)
- [ ] Performance audit (Lighthouse 90+)
- [ ] GTM setup

## 🚀 Next Steps

1. **Crea los archivos provistos** arriba (ServicePillars, layout, page)
2. **Completa las secciones restantes** usando los efectos disponibles
3. **Añade imágenes reales** en `/public/images`
4. **Configura el webhook** de n8n
5. **Testing completo**: forms, analytics, accessibility
6. **Performance optimization**: images, lazy loading
7. **Deploy** y monitoreo

## 📚 Recursos

- **Efectos**: `src/components/effects/`
- **UI**: `src/components/ui/`
- **Content**: `src/content/home.ts`
- **Analytics**: `src/lib/analytics.ts`
- **SEO**: `src/lib/seo.ts`

## 🎨 Paleta de Colores (Tailwind)

```tsx
// Usar en componentes:
className = "text-primary-500"; // Electric blue
className = "bg-frost"; // Frost blue
className = "border-violet"; // Aurora violet
className = "text-ember"; // Rune ember
className = "bg-gold"; // Mead gold
className = "text-moss"; // Moss green
```

## 📞 Support

Si encuentras errores o necesitas ayuda con alguna sección específica, revisa:

1. Los README de cada efecto en `src/components/effects/[effect]/README.md`
2. El archivo DOCS.md principal
3. Los ejemplos en cada componente

Todos los componentes están totalmente documentados con props, ejemplos y casos de uso.
