import type { Metadata } from "next";

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: "website" | "article";
  canonical?: string;
  noindex?: boolean;
}

export function generateMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description,
    keywords = [],
    ogImage = "/og-image.jpg",
    ogType = "website",
    canonical,
    noindex = false,
  } = config;

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://valkiriapps.com";
  const fullTitle = `${title} | ValkiriApps Labs`;

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(", "),
    authors: [{ name: "ValkiriApps Labs" }],
    robots: noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large",
    ...(canonical && { alternates: { canonical } }),
    openGraph: {
      type: ogType,
      locale: "es_ES",
      url: canonical || siteUrl,
      title: fullTitle,
      description,
      siteName: "ValkiriApps Labs",
      images: [
        {
          url: `${siteUrl}${ogImage}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${siteUrl}${ogImage}`],
      creator: "@valkiriapps", // TODO: Update with real handle
    },
  };
}

// JSON-LD Structured Data
export function generateOrganizationSchema() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://valkiriapps.com";

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ValkiriApps Labs",
    description: "Desarrollo WordPress, plataformas EdTech y automatizaciones con IA para empresas",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+34-XXX-XXX-XXX", // TODO: Add real phone
      contactType: "customer service",
      email: "hola@valkiriapps.com",
      areaServed: "ES",
      availableLanguage: ["Spanish", "English"],
    },
    sameAs: [
      "https://linkedin.com/company/valkiriapps", // TODO: Add real URLs
      "https://twitter.com/valkiriapps",
      "https://github.com/valkiriapps",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "ES",
      // TODO: Add real address if applicable
    },
  };
}

export function generateServiceSchema(
  serviceName: string,
  description: string,
  serviceType: string
) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://valkiriapps.com";

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description,
    serviceType,
    provider: {
      "@type": "Organization",
      name: "ValkiriApps Labs",
      url: siteUrl,
    },
    areaServed: "ES",
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: siteUrl,
    },
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://valkiriapps.com";

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.url}`,
    })),
  };
}

export function generateWebPageSchema(name: string, description: string, url: string) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://valkiriapps.com";

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: `${siteUrl}${url}`,
    isPartOf: {
      "@type": "WebSite",
      name: "ValkiriApps Labs",
      url: siteUrl,
    },
  };
}

export function generateArticleSchema(article: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  url: string;
}) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://valkiriapps.com";

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: `${siteUrl}${article.image}`,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      "@type": "Person",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: "ValkiriApps Labs",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}${article.url}`,
    },
  };
}
