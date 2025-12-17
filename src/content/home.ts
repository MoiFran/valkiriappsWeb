// Home Page Content - ValkiriApps Labs
// Centralized content for easy i18n migration

export const homeContent = {
  hero: {
    title: "Soluciones Web, Automatización e IA para impulsar tu negocio",
    subtitle:
      "En Valkiriapps Labs diseñamos tecnología que se adapta a ti: WordPress profesional, software educativo y automatizaciones con IA.",
    ctaPrimary: "Solicita una demo gratuita",
    ctaSecondary: "Agenda estrategia",
    badges: ["WordPress Expert", "Automatización n8n/Zapier", "EdTech & IA"],
  },

  servicePillars: {
    title: "Tres líneas, un mismo objetivo: tu crecimiento",
    subtitle: "Soluciones modulares que escalan contigo",
    pillars: [
      {
        id: "world-web",
        name: "World Web In One Press",
        tagline: "Tu presencia digital, perfeccionada",
        description:
          "Desarrollo WordPress total: webs corporativas, WooCommerce, plugins a medida, Elementor/Divi. También Shopify y CMS modernos.",
        icon: "🌐",
        color: "primary",
        benefits: [
          "WordPress & WooCommerce optimizado",
          "Plugins y temas a medida",
          "Shopify & CMS headless",
        ],
        cta: "Explorar servicios web",
        anchor: "#servicios-web",
      },
      {
        id: "astrapa",
        name: "Astrapa",
        tagline: "Tecnología que educa",
        description:
          "Plataformas educativas y EdTech: LMS personalizados, dashboards de progreso, SaaS educativo y analíticas avanzadas.",
        icon: "⚡",
        color: "violet",
        benefits: [
          "LMS con analíticas integradas",
          "Dashboards de progreso",
          "SaaS educativo escalable",
        ],
        cta: "Ver soluciones EdTech",
        anchor: "#servicios-edtech",
      },
      {
        id: "thor",
        name: "Thor Smart Thunder",
        tagline: "Automatiza, optimiza, crece",
        description:
          "Automatizaciones inteligentes con n8n/Zapier, optimización de procesos, conectores con IA y transformación digital real.",
        icon: "⚙️",
        color: "frost",
        benefits: [
          "Automatizaciones n8n/Zapier",
          "Conectores con IA (GPT, Claude)",
          "Optimización de procesos",
        ],
        cta: "Automatiza tu negocio",
        anchor: "#servicios-automatizacion",
      },
    ],
  },

  deepServices: {
    title: "Servicios Detallados",
    subtitle: "Desarrollo WordPress, EdTech y automatización empresarial",
    services: [
      // World Web In One Press
      {
        pillar: "world-web",
        title: "Webs Corporativas WordPress",
        description:
          "Sitios profesionales, rápidos y SEO-optimizados con WordPress. Diseño responsivo y CMS intuitivo.",
        icon: "🏢",
        keywords: ["WordPress", "Corporativo", "SEO"],
      },
      {
        pillar: "world-web",
        title: "Tiendas WooCommerce",
        description:
          "E-commerce completo con WooCommerce: pagos, envíos, inventario y optimización de conversión.",
        icon: "🛒",
        keywords: ["WooCommerce", "E-commerce", "Ventas"],
      },
      {
        pillar: "world-web",
        title: "Plugins WordPress a Medida",
        description:
          "Funcionalidades personalizadas para tu WordPress: integraciones, APIs, dashboards admin.",
        icon: "🔌",
        keywords: ["Plugins", "Desarrollo", "Custom"],
      },
      {
        pillar: "world-web",
        title: "Shopify & Headless CMS",
        description:
          "Tiendas Shopify o arquitectura headless (Next.js + Contentful/Sanity) para máxima flexibilidad.",
        icon: "🚀",
        keywords: ["Shopify", "Headless", "JAMstack"],
      },

      // Astrapa
      {
        pillar: "astrapa",
        title: "LMS Personalizado",
        description:
          "Plataformas de aprendizaje completas: cursos, exámenes, certificados y gamificación.",
        icon: "📚",
        keywords: ["LMS", "E-learning", "Educación"],
      },
      {
        pillar: "astrapa",
        title: "Dashboards de Progreso",
        description:
          "Analíticas educativas: seguimiento de estudiantes, métricas de rendimiento y reportes visuales.",
        icon: "📊",
        keywords: ["Analytics", "Dashboard", "Métricas"],
      },
      {
        pillar: "astrapa",
        title: "SaaS Educativo",
        description:
          "Plataformas SaaS multi-tenant para escuelas, academias y formación corporativa.",
        icon: "☁️",
        keywords: ["SaaS", "Multi-tenant", "EdTech"],
      },

      // Thor Smart Thunder
      {
        pillar: "thor",
        title: "Automatizaciones n8n",
        description:
          "Workflows automatizados: integraciones entre apps, sincronización de datos, notificaciones.",
        icon: "🔄",
        keywords: ["n8n", "Automatización", "Workflows"],
      },
      {
        pillar: "thor",
        title: "Conectores con IA",
        description:
          "Integra GPT, Claude o Gemini en tu negocio: chatbots, análisis, generación de contenido.",
        icon: "🤖",
        keywords: ["IA", "GPT", "Chatbots"],
      },
      {
        pillar: "thor",
        title: "Optimización de Procesos",
        description:
          "Auditoría y mejora de workflows internos: CRM, ERP, RRHH. Elimina tareas repetitivas.",
        icon: "⚡",
        keywords: ["Procesos", "Eficiencia", "CRM"],
      },
    ],
  },

  whyUs: {
    title: "¿Por qué elegirnos?",
    subtitle: "Tecnología que impulsa resultados reales",
    benefits: [
      {
        icon: "💡",
        title: "Innovación Continua",
        description:
          "Combinamos IA, no-code y desarrollo a medida para soluciones que evolucionan contigo.",
      },
      {
        icon: "📦",
        title: "Modulares y Escalables",
        description:
          "Empieza pequeño, crece grande. Nuestras soluciones se adaptan a tu ritmo de crecimiento.",
      },
      {
        icon: "🤝",
        title: "Soporte Humano + IA",
        description:
          "Atención personalizada respaldada por herramientas inteligentes para respuestas rápidas.",
      },
      {
        icon: "⏱️",
        title: "Tiempos Claros",
        description: "Entregables definidos, sprints transparentes y comunicación constante.",
      },
    ],
    kpis: [
      { value: "+98%", label: "Satisfacción de clientes" },
      { value: "-40%", label: "Reducción tiempo tareas" },
      { value: "+25%", label: "Aumento conversión media" },
    ],
  },

  showcase: {
    title: "Casos de Éxito",
    subtitle: "Proyectos reales, resultados medibles",
    tabs: [
      {
        id: "world-web",
        label: "World Web",
        projects: [
          {
            title: "E-commerce Moda Sostenible",
            description: "WooCommerce con sistema de tallas personalizado y envíos automáticos.",
            stack: ["WordPress", "WooCommerce", "Stripe", "Elementor"],
            result: "+150% ventas en 6 meses",
            image: "/projects/ecommerce-moda.jpg", // TODO: Add real image
            link: "#", // TODO: Add case study link
          },
          {
            title: "Web Corporativa Tech",
            description:
              "WordPress headless + Next.js para startup de software con blog multilingüe.",
            stack: ["WordPress", "Next.js", "GraphQL", "Vercel"],
            result: "LCP 1.2s, Score 98/100",
            image: "/projects/corporate-tech.jpg",
            link: "#",
          },
        ],
      },
      {
        id: "astrapa",
        label: "Astrapa EdTech",
        projects: [
          {
            title: "LMS para Academia de Idiomas",
            description:
              "Plataforma con 500+ alumnos, exámenes adaptativos y certificados automáticos.",
            stack: ["Next.js", "Supabase", "Stripe", "Moodle Integration"],
            result: "85% tasa de finalización",
            image: "/projects/lms-idiomas.jpg",
            link: "#",
          },
          {
            title: "Dashboard Formación Corporativa",
            description: "Analíticas de progreso para 1200 empleados con reportes gerenciales.",
            stack: ["React", "Node.js", "PostgreSQL", "Chart.js"],
            result: "+60% engagement formativo",
            image: "/projects/dashboard-corp.jpg",
            link: "#",
          },
        ],
      },
      {
        id: "thor",
        label: "Thor Automation",
        projects: [
          {
            title: "Automatización CRM → WhatsApp",
            description:
              "n8n conecta Pipedrive con WhatsApp Business para seguimiento automático de leads.",
            stack: ["n8n", "Pipedrive", "WhatsApp API", "PostgreSQL"],
            result: "-70% tiempo seguimiento",
            image: "/projects/crm-whatsapp.jpg",
            link: "#",
          },
          {
            title: "Chatbot IA para Soporte",
            description: "GPT-4 integrado en web con base de conocimiento para respuestas 24/7.",
            stack: ["OpenAI API", "Pinecone", "Next.js", "WebSockets"],
            result: "80% consultas resueltas",
            image: "/projects/chatbot-ia.jpg",
            link: "#",
          },
        ],
      },
    ],
  },

  process: {
    title: "Nuestro Proceso",
    subtitle: "De la idea al impacto en 4 pasos",
    steps: [
      {
        number: "01",
        title: "Descubrimiento y Estrategia",
        description:
          "Entendemos tu negocio, audiencia y objetivos. Definimos alcance, tecnología y roadmap.",
        duration: "1-2 semanas",
      },
      {
        number: "02",
        title: "Diseño y Desarrollo",
        description:
          "Prototipamos UI/UX, desarrollamos en sprints y validamos contigo cada milestone.",
        duration: "4-12 semanas",
      },
      {
        number: "03",
        title: "Integración y Automatización",
        description:
          "Conectamos sistemas, migramos datos, configuramos automatizaciones y hacemos QA exhaustivo.",
        duration: "2-4 semanas",
      },
      {
        number: "04",
        title: "Optimización y Soporte",
        description:
          "Lanzamos, monitoreamos métricas y mejoramos continuamente. Soporte técnico incluido.",
        duration: "Continuo",
      },
    ],
  },

  testimonials: {
    title: "Lo que dicen nuestros clientes",
    subtitle: "Historias reales de transformación digital",
    items: [
      {
        name: "María González",
        role: "Directora de Marketing",
        company: "Boutique Moda",
        avatar: "/avatars/maria.jpg", // TODO: Add real image
        quote:
          "El equipo de ValkiriApps transformó nuestra tienda online. Las ventas se triplicaron en solo 6 meses gracias a la optimización de WooCommerce.",
        rating: 5,
      },
      {
        name: "Carlos Mendoza",
        role: "CEO",
        company: "Academia TechPro",
        avatar: "/avatars/carlos.jpg",
        quote:
          "La plataforma LMS que desarrollaron superó nuestras expectativas. Ahora gestionamos 500 alumnos con total control y analíticas precisas.",
        rating: 5,
      },
      {
        name: "Ana Ruiz",
        role: "Gerente de Operaciones",
        company: "Distribuidora Regional",
        avatar: "/avatars/ana.jpg",
        quote:
          "Las automatizaciones con n8n nos ahorraron 15 horas semanales. El ROI se vio en el primer mes. Recomendados 100%.",
        rating: 5,
      },
    ],
  },

  ctaSection: {
    title: "¿Listo para acelerar tu transformación digital?",
    subtitle: "Agenda una consultoría gratuita de 30 minutos y descubre cómo podemos ayudarte.",
    ctaPrimary: "Solicita tu demo gratuita",
    ctaSecondary: "Agenda una estrategia",
  },

  blog: {
    title: "Recursos y Conocimiento",
    subtitle: "Artículos para ayudarte a tomar mejores decisiones tecnológicas",
    posts: [
      {
        slug: "woocommerce-vs-shopify",
        title: "¿WooCommerce o Shopify? Guía completa 2024",
        excerpt:
          "Comparativa detallada para elegir la mejor plataforma de e-commerce según tu negocio.",
        category: "E-commerce",
        readTime: "8 min",
        image: "/blog/woocommerce-shopify.jpg", // TODO: Add real image
        publishedAt: "2024-01-15",
      },
      {
        slug: "automatizaciones-n8n-pymes",
        title: "Automatizaciones n8n: 5 casos reales en PYMES",
        excerpt: "Workflows que ahorran tiempo y dinero: CRM, email marketing, inventarios y más.",
        category: "Automatización",
        readTime: "6 min",
        image: "/blog/n8n-casos.jpg",
        publishedAt: "2024-01-10",
      },
      {
        slug: "lms-ia-analiticas",
        title: "LMS + IA: medir el progreso con analíticas útiles",
        excerpt:
          "Cómo las plataformas educativas modernas usan IA para predecir y mejorar resultados.",
        category: "EdTech",
        readTime: "7 min",
        image: "/blog/lms-ia.jpg",
        publishedAt: "2024-01-05",
      },
    ],
  },

  contact: {
    title: "Hablemos de tu proyecto",
    subtitle: "Completa el formulario y te responderemos en menos de 24 horas.",
    form: {
      namePlaceholder: "Tu nombre completo",
      companyPlaceholder: "Nombre de tu empresa",
      emailPlaceholder: "correo@empresa.com",
      phonePlaceholder: "+34 600 000 000 (opcional)",
      messagePlaceholder: "Cuéntanos sobre tu proyecto o necesidad...",
      consultancyLabel: "Quiero consultoría gratuita de 30 min",
      submitButton: "Enviar mensaje",
      submitting: "Enviando...",
      successTitle: "¡Mensaje enviado!",
      successMessage: "Gracias por contactarnos. Te responderemos en menos de 24 horas.",
      errorTitle: "Error al enviar",
      errorMessage: "Por favor, intenta nuevamente o escríbenos a ",
    },
  },

  footer: {
    tagline: "Tecnología que impulsa tu crecimiento",
    links: {
      services: {
        title: "Servicios",
        items: [
          { label: "WordPress & WooCommerce", href: "#servicios-web" },
          { label: "Plataformas EdTech", href: "#servicios-edtech" },
          { label: "Automatizaciones", href: "#servicios-automatizacion" },
          { label: "Consultoría", href: "#contacto" },
        ],
      },
      company: {
        title: "Empresa",
        items: [
          { label: "Sobre nosotros", href: "/about" },
          { label: "Casos de éxito", href: "/cases" },
          { label: "Blog", href: "/blog" },
          { label: "Contacto", href: "#contacto" },
        ],
      },
      legal: {
        title: "Legal",
        items: [
          { label: "Aviso Legal", href: "/legal" },
          { label: "Política de Privacidad", href: "/privacy" },
          { label: "Cookies", href: "/cookies" },
        ],
      },
    },
    social: [
      { platform: "LinkedIn", href: "#", icon: "linkedin" },
      { platform: "Twitter", href: "#", icon: "twitter" },
      { platform: "GitHub", href: "#", icon: "github" },
    ],
    copyright: "© 2024 ValkiriApps Labs. Todos los derechos reservados.",
    contact: {
      email: "info@valkiriapps.com",
      phone: "+34 722 47 94 51",
    },
  },
} as const;

// SEO Keywords
export const seoKeywords = [
  // General
  "desarrollo web",
  "transformación digital",
  "automatización empresarial",

  // WordPress
  "desarrollo wordpress",
  "plugins wordpress a medida",
  "woocommerce",
  "tienda online",
  "shopify",

  // EdTech
  "plataforma educativa",
  "LMS personalizado",
  "software educativo",
  "e-learning",
  "SaaS educativo",

  // Automatización
  "automatización n8n",
  "zapier",
  "automatizaciones inteligentes",
  "IA para empresas",
  "chatbots con ia",
  "optimización procesos",

  // Tecnologías
  "next.js",
  "react",
  "typescript",
  "api integrations",
] as const;
