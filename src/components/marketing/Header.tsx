"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { GooeyNav } from "@/components/layout/Navbar";
import type { NavigationItem } from "@/types";
import { trackCTAClick } from "@/lib/analytics";

const navItems: NavigationItem[] = [
  { label: "Servicios", href: "#servicios" },
  { label: "Casos de Éxito", href: "#casos" },
  { label: "Proceso", href: "#proceso" },
  { label: "Blog", href: "/blog" },
  { label: "Contacto", href: "#contacto" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCTAClick = () => {
    trackCTAClick("Demo gratuita", "header", "#contacto");
  };

  const handleNavClick = (label: string, href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-surface/95 backdrop-blur-md border-b border-border shadow-steel"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group z-50">
            <div className="relative w-40 h-10 sm:w-48 sm:h-12 transition-transform group-hover:scale-105">
              <Image
                src="/images/logos/valkiriapps_logo_electricBlue.svg"
                alt="ValkiriApps Labs"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation with GooeyNav */}
          <div className="hidden lg:flex items-center">
            <GooeyNav items={navItems} particleCount={12} initialActiveIndex={0} />
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden lg:block">
            <Link
              href="#contacto"
              onClick={handleCTAClick}
              className="inline-flex items-center px-6 py-2.5 text-sm font-semibold text-white bg-primary-500 hover:bg-primary-600 rounded-lg transition-all hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-bg"
              data-analytics="cta-header-demo"
            >
              Demo gratuita
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-text hover:text-primary-500 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-lg z-50"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden overflow-hidden border-t border-border"
            >
              <div className="py-4 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => handleNavClick(item.label, item.href)}
                    className="block px-4 py-3 text-base font-medium text-text hover:text-primary-500 hover:bg-surface2 rounded-lg transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4 px-4">
                  <Link
                    href="#contacto"
                    onClick={handleCTAClick}
                    className="block w-full text-center px-6 py-3 text-base font-semibold text-white bg-primary-500 hover:bg-primary-600 rounded-lg transition-colors"
                    data-analytics="cta-mobile-demo"
                  >
                    Demo gratuita
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
