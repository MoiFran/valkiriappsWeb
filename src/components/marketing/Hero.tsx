"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Threads } from "@/components/effects";
import { homeContent } from "@/content/home";
import { trackCTAClick } from "@/lib/analytics";

export default function Hero() {
  const { title, subtitle, ctaPrimary, ctaSecondary, badges } = homeContent.hero;

  const highlightWords = ["Automatización", "IA", "negocio"];

  return (
    <section className="relative h-[100dvh] max-h-[100vh] flex items-center justify-center overflow-hidden bg-bg">
      {/* Background */}
      <div className="absolute inset-0 opacity-40">
        <Threads color={[0, 0.75, 1]} amplitude={1.2} distance={0.1} enableMouseInteraction />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-bg/40 via-bg/70 to-bg pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl px-4 sm:px-6 text-center">
        {/* Badges */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-2 mb-6"
        >
          {badges.map((badge) => (
            <span
              key={badge}
              className="px-4 py-1.5 text-sm rounded-full bg-surface/80 backdrop-blur border border-border text-text"
            >
              {badge}
            </span>
          ))}
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-text mb-6"
        >
          {title.split(" ").map((word, i) => {
            const highlight = highlightWords.some((w) => word.includes(w));
            return (
              <span key={i} className="mr-2 inline-block">
                {highlight ? (
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-frost">
                    {word}
                  </span>
                ) : (
                  word
                )}
              </span>
            );
          })}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-3xl mx-auto text-base sm:text-lg lg:text-xl text-muted mb-10"
        >
          {subtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="#contacto"
            onClick={() => trackCTAClick(ctaPrimary, "hero", "#contacto")}
            className="px-8 py-4 rounded-xl bg-primary-500 text-white font-semibold hover:bg-primary-600 transition hover:scale-105"
          >
            {ctaPrimary}
          </Link>

          <Link
            href="#contacto"
            onClick={() => trackCTAClick(ctaSecondary, "hero", "#contacto")}
            className="px-8 py-4 rounded-xl border border-border bg-surface text-text font-semibold hover:border-primary-500 transition hover:scale-105"
          >
            {ctaSecondary}
          </Link>
        </motion.div>

        {/* Trust */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-muted">
          {["Consultoría gratuita", "Sin compromiso", "Respuesta en 24h"].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-success" />
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-muted"
      >
        ↓ Desplaza
      </motion.div>
    </section>
  );
}
