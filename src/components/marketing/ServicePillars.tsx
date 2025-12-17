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
              <ElectricBorder color="#00BFFF" speed={1.5} chaos={1.5} className="h-full">
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
