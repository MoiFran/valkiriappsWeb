// src/app/components/Hero/Hero.tsx
"use client";

import React from "react";
import Threads from "./Threads";
import styles from "./Hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Canvas WebGL */}
      <div className={styles.threadsWrapper}>
        <Threads
       color={[0, 0.749, 1]}    // ese #00BFFF exacto
          amplitude={3}
          distance={0}
          enableMouseInteraction={true}
        />
      </div>

      {/* Contenido superpuesto */}
      <div className={styles.content}>
        {/* Logo */}
        <div className={styles.logoWrapper}>
  <Image
    src="/img/valkiriapps_logo_electricBlue.svg"
    alt="ValkiriApps Logo"
    fill
    sizes="(max-width: 600px) 120px, (max-width: 1200px) 200px, 300px"
    style={{ objectFit: "contain" }}
    priority
  />
</div>
        {/* Texto opcional */}
        <h1>Bienvenido a ValkiriApps</h1>
        <p>Soluciones digitales </p>
      </div>
    </section>
  );
}
