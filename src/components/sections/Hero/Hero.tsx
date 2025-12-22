// src/components/sections/Hero/Hero.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Ballpit } from "@/components/effects";
import { StarBorder, GradientText } from "@/components/ui";
import styles from "./Hero.module.css";
import Image from "next/image";
import { COLORS } from "@/constants";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Solo activar efectos WebGL en desktop
    const checkDevice = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const ctx = gsap.context(() => {
      // Epic logo entrance
      if (logoRef.current) {
        gsap.fromTo(
          logoRef.current,
          {
            scale: 0,
            opacity: 0,
            rotateY: -540,
            z: -1000,
          },
          {
            scale: 1,
            opacity: 1,
            rotateY: 0,
            z: 0,
            duration: 2,
            ease: "expo.out",
            delay: 0.3,
          }
        );

        // Continuous 3D rotation
        gsap.to(logoRef.current, {
          rotateY: 360,
          duration: 20,
          ease: "none",
          repeat: -1,
        });

        // Float animation
        gsap.to(logoRef.current, {
          y: -30,
          duration: 3,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      }

      // Title animation - word by word reveal
      if (titleRef.current) {
        const words = titleRef.current.querySelectorAll(`.${styles.word}`);

        gsap.fromTo(
          words,
          {
            opacity: 0,
            y: 100,
            rotateX: -90,
            scale: 0.5,
          },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            scale: 1,
            duration: 1.2,
            stagger: 0.2,
            ease: "expo.out",
            delay: 1.2,
          }
        );
      }

      // Rotating words animation
      if (wordsRef.current) {
        const words = ["INNOVACIÓN", "CREATIVIDAD", "TECNOLOGÍA", "FUTURO"];
        let currentIndex = 0;

        const animateWord = () => {
          if (!wordsRef.current) return;

          gsap.to(wordsRef.current, {
            opacity: 0,
            y: -20,
            duration: 0.5,
            ease: "power2.in",
            onComplete: () => {
              if (!wordsRef.current) return;
              currentIndex = (currentIndex + 1) % words.length;
              wordsRef.current.textContent = words[currentIndex];

              gsap.fromTo(
                wordsRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
              );
            },
          });
        };

        const interval = setInterval(animateWord, 3000);
        return () => clearInterval(interval);
      }

      // CTAs entrance
      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current.children,
          {
            opacity: 0,
            scale: 0,
            y: 50,
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: "elastic.out(1, 0.5)",
            delay: 2.5,
          }
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, [mounted]);

  if (!mounted) return null;

  return (
    <section ref={heroRef} className={styles.hero}>
      {/* Subtle Ballpit Background - Solo Desktop */}
      {isDesktop && (
        <div className={styles.ballpitWrapper}>
          <Ballpit
            count={60}
            gravity={0.12}
            friction={0.995}
            wallBounce={0.85}
            followCursor={true}
            colors={[
              0x4fc2d1, // Primary cyan
              0x7df9ff, // Electric blue
            ]}
            minSize={0.7}
            maxSize={1.0}
            materialParams={{
              metalness: 0.2,
              roughness: 0.3,
              clearcoat: 0.6,
              clearcoatRoughness: 0.3,
            }}
          />
        </div>
      )}

      {/* Content */}
      <div className={styles.content}>
        {/* 3D Rotating Logo */}
        <div ref={logoRef} className={styles.logoWrapper}>
          <Image
            src="/images/logos/valkiriapps_logo_electricBlue.svg"
            alt="ValkiriApps"
            width={400}
            height={400}
            priority
            className={styles.logo}
          />
        </div>

        {/* Epic Title */}
        <div ref={titleRef} className={styles.titleWrapper}>
          <h1 className={styles.mainTitle}>
            <span className={styles.word}>CREAMOS</span>{" "}
            <span className={styles.word}>EXPERIENCIAS</span>{" "}
            <span className={styles.word}>DIGITALES</span>
          </h1>
        </div>

        {/* Rotating Words */}
        <div className={styles.rotatingWords}>
          <span className={styles.rotatingLabel}>IMPULSADAS POR</span>
          <div ref={wordsRef} className={styles.rotatingWord}>
            INNOVACIÓN
          </div>
        </div>

        {/* Tagline with gradient */}
        <div className={styles.taglineWrapper}>
          <GradientText
            colors={["#4FC2D1", "#7df9ff", "#00bfff"]}
            tag="div"
            className={styles.taglineText}
          >
            Transformamos ideas en realidades digitales que inspiran
          </GradientText>
        </div>

        {/* Epic CTAs */}
        <div ref={ctaRef} className={styles.ctaWrapper}>
          <StarBorder
            as="a"
            href="#servicios"
            className={styles.ctaPrimary}
            color={COLORS.primary}
            speed="3s"
          >
            <span className={styles.ctaText}>VER SERVICIOS</span>
            <span className={styles.ctaIcon}>→</span>
          </StarBorder>

          <StarBorder
            as="a"
            href="#contacto"
            className={styles.ctaSecondary}
            color="#7df9ff"
            speed="4s"
          >
            <span className={styles.ctaText}>INICIAR PROYECTO</span>
            <span className={styles.ctaIcon}>✦</span>
          </StarBorder>
        </div>

        {/* Animated stats */}
        {/* <div className={styles.stats}>
          <div className={styles.stat}>
            <div className={styles.statNumber}>∞</div>
            <div className={styles.statLabel}>POSIBILIDADES</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNumber}>3</div>
            <div className={styles.statLabel}>LÍNEAS DE NEGOCIO</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNumber}>100%</div>
            <div className={styles.statLabel}>DEDICACIÓN</div>
          </div>
        </div> */}

        {/* Epic scroll indicator */}
        <div className={styles.scrollIndicator}>
          <div className={styles.scrollArrow}>↓</div>
        </div>
      </div>
    </section>
  );
}
