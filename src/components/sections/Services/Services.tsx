"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { BUSINESS_LINES } from "@/constants/company";
import { Threads, SplashCursor, Ballpit } from "@/components/effects";
import { SplitText, GradientText, StarBorder, ElectricBorder } from "@/components/ui";
import WorldWebDetail from "./WorldWebDetail";
import ThorSmartDetail from "./ThorSmartDetail";
import styles from "./Services.module.css";

type BusinessLine = (typeof BUSINESS_LINES)[number];

/** Hex a RGB (0..1) */
const hexToRGB = (hex: string): [number, number, number] => {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!m) return [1, 1, 1];
  return [parseInt(m[1], 16) / 255, parseInt(m[2], 16) / 255, parseInt(m[3], 16) / 255];
};

interface ServiceCardProps {
  line: BusinessLine;
  index: number;
  onExploreClick?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ line, index, onExploreClick }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const featuresRef = useRef<HTMLDivElement | null>(null);

  // Hover magnético sin listeners manuales (React events => no leaks)
  const magneticState = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleFeaturePointerMove = useCallback(async (e: React.PointerEvent<HTMLDivElement>) => {
    // Solo mouse/trackpad (en móvil esto es ruido)
    if (e.pointerType !== "mouse") return;

    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);

    magneticState.current = { x, y };

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    if (prefersReduced) return;

    const { gsap } = await import("gsap");
    gsap.to(el, {
      x: x * 0.08,
      y: y * 0.08,
      rotateX: y * 0.03,
      rotateY: x * 0.03,
      duration: 0.45,
      ease: "power1.out",
      overwrite: "auto",
    });
  }, []);

  const handleFeaturePointerLeave = useCallback(async (e: React.PointerEvent) => {
    const el = e.currentTarget as HTMLElement;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    if (prefersReduced) return;

    const { gsap } = await import("gsap");
    gsap.to(el, {
      x: 0,
      y: 0,
      rotateX: 0,
      rotateY: 0,
      duration: 0.7,
      ease: "elastic.out(1, 0.65)",
      overwrite: "auto",
    });
  }, []);

  // Background effect según tipo
  const backgroundEffect = useMemo(() => {
    switch (line.effectType) {
      case "laserflow":
        return (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: `radial-gradient(ellipse at 30% 50%, ${line.color}15 0%, transparent 55%),
                           radial-gradient(ellipse at 70% 50%, ${line.color}10 0%, transparent 65%)`,
              opacity: 0.6,
            }}
          />
        );

      case "ballpit":
        return (
          <Ballpit
            count={150}
            gravity={0.15}
            friction={0.9985}
            wallBounce={0.88}
            followCursor
            colors={[0xff79c6, 0xff79c6, 0xff8fd1, 0xff69c1]}
            minSize={0.4}
            maxSize={0.9}
            materialParams={{
              metalness: 0.3,
              roughness: 0.2,
              clearcoat: 0.8,
              clearcoatRoughness: 0.3,
            }}
          />
        );

      case "threads":
        return (
          <Threads
            color={hexToRGB(line.color)}
            amplitude={0.5}
            distance={0.3}
            enableMouseInteraction
          />
        );

      default:
        return null;
    }
  }, [line]);

  useEffect(() => {
    let ctx: { revert: () => void } | null = null;

    const run = async () => {
      const card = cardRef.current;
      const content = contentRef.current;
      const features = featuresRef.current;
      if (!card || !content || !features) return;

      const prefersReduced =
        typeof window !== "undefined" &&
        window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

      if (prefersReduced) return;

      const { gsap } = await import("gsap");
      const st = await import("gsap/ScrollTrigger");
      const ScrollTrigger = st.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      // Context aislado por card (no ensucia global)
      ctx = gsap.context(() => {
        gsap.set(card, { zIndex: 10 + index });

        // Pin suave (sin locuras)
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          end: "+=40%",
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          scrub: 0.5,
        });

        // Entrada del contenido
        gsap.fromTo(
          content,
          { opacity: 0, y: 70, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 75%",
              end: "top 35%",
              scrub: 0.8,
            },
          }
        );

        // Features: animación en bloque con stagger (mucho más barato)
        const items = Array.from(features.querySelectorAll<HTMLElement>(`.${styles.featureItem}`));

        if (items.length) {
          gsap.fromTo(
            items,
            { opacity: 0, x: -28, rotateY: -8, scale: 0.95 },
            {
              opacity: 1,
              x: 0,
              rotateY: 0,
              scale: 1,
              duration: 0.8,
              stagger: 0.08,
              ease: "power2.out",
              scrollTrigger: {
                trigger: features,
                start: "top 85%",
                end: "top 55%",
                scrub: 0.6,
              },
            }
          );
        }
      }, cardRef);
    };

    run();

    return () => {
      ctx?.revert();
    };
  }, [index]);

  return (
    <div
      ref={cardRef}
      className={styles.serviceCard}
      data-line={line.id}
      style={
        {
          "--line-color": line.color,
          zIndex: 10 + index,
        } as React.CSSProperties
      }
    >
      <div className={styles.solidBackground} />

      {/* SplashCursor */}
      <div className={styles.splashCursorWrapper}>
        <SplashCursor
          SPLAT_RADIUS={0.25}
          SPLAT_FORCE={5000}
          COLOR_UPDATE_SPEED={12}
          DENSITY_DISSIPATION={4}
          VELOCITY_DISSIPATION={2.5}
          TRANSPARENT
        />
      </div>

      {/* Background effect */}
      <div className={styles.backgroundEffect}>{backgroundEffect}</div>

      {/* Overlay */}
      <div
        className={styles.gradientOverlay}
        style={{
          background: "radial-gradient(circle at 50% 50%, transparent 0%, rgba(0,0,0,0.8) 100%)",
        }}
      />

      {/* Content */}
      <div ref={contentRef} className={styles.cardContent}>
        {/* Icon */}
        <div className={styles.iconWrapper}>
          <span className={styles.icon}>{line.icon}</span>
        </div>

        {/* Title */}
        <h2 className={styles.lineTitle}>
          <GradientText tag="span">{line.name}</GradientText>
        </h2>

        {/* Tagline */}
        <div className={styles.taglineWrapper}>
          <SplitText
            text={line.tagline}
            splitType="chars"
            from={{ opacity: 0, y: 20 }}
            to={{ opacity: 1, y: 0 }}
            delay={50}
            duration={0.5}
            className={styles.tagline}
            tag="h3"
          />
        </div>

        {/* Description */}
        <p className={styles.description}>{line.description}</p>

        {/* Features */}
        <div ref={featuresRef} className={styles.featuresGrid}>
          {line.features.map((feature, idx) => (
            <div
              key={`${line.id}-feature-${idx}`}
              className={styles.featureItem}
              style={{ "--feature-index": idx } as React.CSSProperties}
              onPointerMove={handleFeaturePointerMove}
              onPointerLeave={handleFeaturePointerLeave}
            >
              <span className={styles.featureBullet}>▸</span>
              <span className={styles.featureText}>{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={styles.ctaWrapper}>
          {line.effectType === "laserflow" && (
            <StarBorder
              as="button"
              className={styles.ctaButton}
              color={line.color}
              speed="4s"
              onClick={onExploreClick}
              onTouchEnd={(e: React.TouchEvent) => {
                e.preventDefault();
                onExploreClick?.();
              }}
            >
              Explorar {line.name}
            </StarBorder>
          )}

          {line.effectType === "ballpit" && (
            <ElectricBorder
              className={styles.ctaButton}
              color={line.color}
              speed={0.8}
              chaos={0.7}
              thickness={2}
              // Si ElectricBorder no propaga onClick, envuélvelo con un button.
            >
              Explorar {line.name}
            </ElectricBorder>
          )}

          {line.effectType === "threads" && (
            <StarBorder
              as="button"
              className={styles.ctaButton}
              color={line.color}
              speed="5s"
              onClick={onExploreClick}
            >
              Explorar {line.name}
            </StarBorder>
          )}
        </div>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [mounted, setMounted] = useState(false);
  const [isWorldWebOpen, setIsWorldWebOpen] = useState(false);
  const [isThorSmartOpen, setIsThorSmartOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    let cleanup: (() => void) | null = null;

    const run = async () => {
      if (!mounted || !sectionRef.current) return;

      const prefersReduced =
        typeof window !== "undefined" &&
        window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

      if (prefersReduced) return;

      const st = await import("gsap/ScrollTrigger");
      const ScrollTrigger = st.ScrollTrigger;

      // Config suave (sin reventar otros triggers)
      ScrollTrigger.config({
        autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
        limitCallbacks: true,
      });

      // fonts.ready no existe en todos los entornos => opcional
      const fontsReady = (document as Document & { fonts?: FontFaceSet }).fonts?.ready;

      if (fontsReady) {
        fontsReady.then(() => ScrollTrigger.refresh()).catch(() => {});
      } else {
        // fallback
        ScrollTrigger.refresh();
      }

      cleanup = () => {
        // NO mates todos los triggers del sitio: solo refresh no deja basura.
        // Los triggers de las cards se limpian en su propio ctx.revert().
      };
    };

    run();
    return () => cleanup?.();
  }, [mounted]);

  const openWorldWeb = useCallback(() => setIsWorldWebOpen(true), []);
  const openThor = useCallback(() => setIsThorSmartOpen(true), []);
  const closeWorldWeb = useCallback(() => setIsWorldWebOpen(false), []);
  const closeThor = useCallback(() => setIsThorSmartOpen(false), []);

  if (!mounted) return null;

  return (
    <section ref={sectionRef} className={styles.servicesSection} id="services">
      {/* Header */}
      <div className={styles.sectionHeader}>
        <h1 className={styles.sectionTitle}>
          <GradientText tag="span" colors={["#4FC2D1", "#FF79C6", "#FFD700"]}>
            Nuestras Líneas de Desarrollo
          </GradientText>
        </h1>

        <p className={styles.sectionSubtitle}>
          Tres mundos de innovación tecnológica diseñados para impulsar tu negocio
        </p>

        <div className={styles.scrollIndicator}>
          <span className={styles.scrollText}>Scroll para descubrir</span>
          <div className={styles.scrollArrow}>↓</div>
        </div>
      </div>

      {/* Cards */}
      <div className={styles.cardsContainer}>
        {BUSINESS_LINES.map((line, index) => (
          <ServiceCard
            key={line.id}
            line={line}
            index={index}
            onExploreClick={
              line.id === "world-web" ? openWorldWeb : line.id === "thor" ? openThor : undefined
            }
          />
        ))}
      </div>

      {/* Modals */}
      <AnimatePresence mode="wait">
        {isWorldWebOpen && <WorldWebDetail isOpen onClose={closeWorldWeb} />}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {isThorSmartOpen && <ThorSmartDetail isOpen onClose={closeThor} />}
      </AnimatePresence>
    </section>
  );
};

export default Services;
