// src/constants/company.ts

export const COMPANY_INFO = {
  name: "ValkiriApps",
  tagline: "Soluciones web y automatizaciones a medida",
  description: "Soluciones digitales inteligentes impulsadas por IA y tecnología moderna",
  mission: "Hacer realidad tu visión es nuestra misión",
} as const;

export const CORE_VALUES = [
  {
    id: "innovation",
    title: "Innovación constante",
    description: "Siempre a la vanguardia de la tecnología",
  },
  {
    id: "quality",
    title: "Calidad y detalle",
    description: "Excelencia en cada proyecto",
  },
  {
    id: "client-oriented",
    title: "Orientación al cliente",
    description: "Tu éxito es nuestro objetivo",
  },
  {
    id: "cutting-edge",
    title: "Tecnologías de vanguardia",
    description: "Herramientas modernas para resultados excepcionales",
  },
] as const;

// Líneas de negocio de ValkiriApps
export const BUSINESS_LINES = [
  {
    id: "world-web",
    name: "World Web in One Press",
    tagline: "WordPress y CMS a medida",
    description:
      "Desarrollo profesional de sitios WordPress, plugins personalizados y soluciones CMS que transforman tu presencia digital con un solo click",
    features: [
      "Plugins personalizados a medida",
      "Temas custom optimizados",
      "Integraciones WooCommerce",
      "Mantenimiento y soporte continuo",
      "Migraciones y actualizaciones",
    ],
    color: "#4FC2D1",
    effectType: "laserflow",
    icon: "🌊",
    gradient: "linear-gradient(135deg, #4FC2D1 0%, #00bfff 100%)",
  },
  {
    id: "astrapa",
    name: "Astrapa",
    tagline: "Educación y formación digital",
    description:
      "Especialistas en Desarrollo de Plataformas educativas de nueva generación, sistemas LMS y herramientas interactivas que revolucionan la enseñanza y el aprendizaje",
    features: [
      "Plataformas e-learning personalizadas",
      "Sistemas de gestión académica (LMS)",
      "Herramientas de evaluación y seguimiento",
      "Contenido interactivo multimedia",
    ],
    color: "#FF79C6",
    effectType: "ballpit",
    icon: "🎓",
    gradient: "linear-gradient(135deg, #FF79C6 0%, #BD93F9 100%)",
  },
  {
    id: "thor",
    name: "Thor Smart Thunder",
    tagline: "Industria 4.0 e IoT",
    description:
      "Automatización industrial inteligente, optimización de procesos productivos y soluciones IoT que impulsan la transformación digital de tu industria",
    features: [
      "Automatización de procesos productivos",
      "Sistemas de monitoreo en tiempo real",
      "Optimización con IA y Machine Learning",
      "Integración de sensores IoT",
      "Dashboards analíticos personalizados",
      "Mantenimiento predictivo",
    ],
    color: "#FFD700",
    effectType: "threads",
    icon: "🔨",
    gradient: "linear-gradient(135deg, #FFD700 0%, #FFA500 100%)",
  },
] as const;

// Servicios legacy (mantener por compatibilidad)
export const SERVICES = [
  {
    id: "web-dev",
    title: "Desarrollo Web",
    description: "Sitios web modernos, responsivos y optimizados con las últimas tecnologías",
    features: ["Next.js & React", "SEO optimizado", "Performance superior", "Diseño responsivo"],
    color: "#4FC2D1",
  },
  {
    id: "automation",
    title: "Automatización",
    description: "Soluciones inteligentes para automatizar procesos y aumentar productividad",
    features: [
      "Bots personalizados",
      "Integración de APIs",
      "Workflows automatizados",
      "Ahorro de tiempo",
    ],
    color: "#7df9ff",
  },
  {
    id: "ai-solutions",
    title: "Soluciones IA",
    description: "Integración de inteligencia artificial para potenciar tu negocio",
    features: [
      "ChatBots inteligentes",
      "Análisis de datos",
      "Machine Learning",
      "Procesamiento NLP",
    ],
    color: "#FF79C6",
  },
  {
    id: "consulting",
    title: "Consultoría Tech",
    description: "Asesoramiento experto para transformar digitalmente tu empresa",
    features: [
      "Auditoría técnica",
      "Arquitectura de sistemas",
      "Stack tecnológico",
      "Mejores prácticas",
    ],
    color: "#BD93F9",
  },
] as const;
