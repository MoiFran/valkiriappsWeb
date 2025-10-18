// src/components/sections/Hero/Hero.tsx
"use client";

import React from "react";
import Threads from "./Threads";
import styles from "./Hero.module.css";
import Image from "next/image";
import { HERO_ANIMATION_CONFIG, COMPANY_INFO } from "@/constants";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Canvas WebGL */}
      <div className={styles.threadsWrapper}>
        <Threads
          color={HERO_ANIMATION_CONFIG.color}
          amplitude={HERO_ANIMATION_CONFIG.amplitude}
          distance={HERO_ANIMATION_CONFIG.distance}
          enableMouseInteraction={HERO_ANIMATION_CONFIG.enableMouseInteraction}
        />
      </div>

      {/* Contenido superpuesto */}
      <div className={styles.content}>
        {/* Logo */}
        <div className={styles.logoWrapper}>
  <Image
    src="/images/logos/valkiriapps_logo_electricBlue.svg"
    alt={`${COMPANY_INFO.name} Logo`}
    fill
    sizes="(max-width: 600px) 120px, (max-width: 1200px) 200px, 300px"
    style={{ objectFit: "contain" }}
    priority
  />
</div>
        {/* Texto opcional */}
        <h1>Bienvenido a {COMPANY_INFO.name}</h1>
        <p>{COMPANY_INFO.description}</p>
      </div>
    </section>
  );
}
