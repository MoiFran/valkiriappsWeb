"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Threads } from "@/components/effects";
import { GradientText } from "@/components/ui";
import styles from "./Showcase.module.css";
import { BUSINESS_LINES } from "@/constants/company";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Showcase: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Detectar dispositivo
    const checkDevice = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;

    const cards = cardsRef.current;

    // Animate cards on scroll
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 100,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            end: "top center",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.2,
        }
      );

      // Hover animation
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          y: -20,
          scale: 1.05,
          duration: 0.4,
          ease: "power2.out",
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          duration: 0.4,
          ease: "power2.out",
        });
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const getServiceLink = (lineId: string) => {
    const routes: Record<string, string> = {
      "world-web": "/world-web",
      astrapa: "/astrapa",
      thor: "/thor",
    };
    return routes[lineId] || "/";
  };

  return (
    <section ref={sectionRef} className={styles.showcase} id="services">
      {/* Header */}
      <div className={styles.header}>
        <h2 className={styles.title}>
          <GradientText tag="span" colors={["#4FC2D1", "#FF79C6", "#FFD700"]}>
            NUESTRAS LÍNEAS DE INNOVACIÓN
          </GradientText>
        </h2>
        <p className={styles.subtitle}>
          Tres mundos tecnológicos diseñados para transformar tu negocio
        </p>
      </div>

      {/* Cards Grid */}
      <div className={styles.grid}>
        {BUSINESS_LINES.map((line, index) => (
          <div
            key={line.id}
            ref={(el) => {
              if (el) cardsRef.current[index] = el;
            }}
            className={styles.card}
            style={
              {
                "--card-color": line.color,
              } as React.CSSProperties
            }
          >
            {/* Background Effect - Solo Desktop */}
            <div className={styles.cardBackground}>
              {isDesktop && line.effectType === "threads" && (
                <Threads amplitude={0.5} distance={0.3} enableMouseInteraction={true} />
              )}
            </div>

            {/* Card Content */}
            <div className={styles.cardContent}>
              <div className={styles.cardIcon}>{line.icon}</div>
              <h3 className={styles.cardTitle}>{line.name}</h3>
              <p className={styles.cardTagline}>{line.tagline}</p>
              <p className={styles.cardDescription}>{line.description}</p>

              <ul className={styles.featuresList}>
                {line.features.slice(0, 4).map((feature, idx) => (
                  <li key={idx} className={styles.featureItem}>
                    <span className={styles.featureBullet}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href={getServiceLink(line.id)}
                className={styles.exploreButton}
                style={
                  {
                    "--button-color": line.color,
                  } as React.CSSProperties
                }
              >
                Explorar {line.name}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Showcase;
