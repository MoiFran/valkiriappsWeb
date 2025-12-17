"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { homeContent } from "@/content/home";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef<HTMLElement>(null);
  const columnsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!footerRef.current) return;

    const ctx = gsap.context(() => {
      // Animate each column with stagger and parallax
      columnsRef.current.forEach((column, index) => {
        if (!column) return;

        gsap.from(column, {
          scrollTrigger: {
            trigger: column,
            start: "top 90%",
            end: "top 40%",
            toggleActions: "play none none reverse",
          },
          y: 60,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: "power3.out",
        });

        // Subtle parallax
        gsap.to(column, {
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 2,
          },
          y: index % 2 === 0 ? -20 : -30,
          ease: "none",
        });
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="bg-surface border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div
            ref={(el) => {
              if (el) columnsRef.current[0] = el;
            }}
            className="lg:col-span-1"
          >
            <Link href="/" className="inline-block mb-4">
              <div className="relative w-48 h-12">
                <Image
                  src="/images/logos/valkiriapps_logo_grey.svg"
                  alt="ValkiriApps Labs"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-muted text-sm mb-6">{homeContent.footer.tagline}</p>

            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <a
                href={`mailto:${homeContent.footer.contact.email}`}
                className="block text-muted hover:text-primary-500 transition-colors"
              >
                {homeContent.footer.contact.email}
              </a>
              {homeContent.footer.contact.phone && (
                <a
                  href={`tel:${homeContent.footer.contact.phone}`}
                  className="block text-muted hover:text-primary-500 transition-colors"
                >
                  {homeContent.footer.contact.phone}
                </a>
              )}
            </div>
          </div>

          {/* Services Column */}
          <div
            ref={(el) => {
              if (el) columnsRef.current[1] = el;
            }}
          >
            <h3 className="text-text font-semibold mb-4">
              {homeContent.footer.links.services.title}
            </h3>
            <ul className="space-y-3">
              {homeContent.footer.links.services.items.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted hover:text-primary-500 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div
            ref={(el) => {
              if (el) columnsRef.current[2] = el;
            }}
          >
            <h3 className="text-text font-semibold mb-4">
              {homeContent.footer.links.company.title}
            </h3>
            <ul className="space-y-3">
              {homeContent.footer.links.company.items.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted hover:text-primary-500 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div
            ref={(el) => {
              if (el) columnsRef.current[3] = el;
            }}
          >
            <h3 className="text-text font-semibold mb-4">{homeContent.footer.links.legal.title}</h3>
            <ul className="space-y-3">
              {homeContent.footer.links.legal.items.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted hover:text-primary-500 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="mt-6">
              <div className="flex items-center space-x-4">
                {homeContent.footer.social.map((social) => (
                  <a
                    key={social.platform}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-primary-500 transition-colors"
                    aria-label={social.platform}
                  >
                    {social.icon === "linkedin" && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    )}
                    {social.icon === "twitter" && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                      </svg>
                    )}
                    {social.icon === "github" && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-muted text-sm">
              © {currentYear} ValkiriApps Labs. Todos los derechos reservados.
            </p>
            <div className="flex items-center space-x-6 text-sm text-muted">
              <Link href="/legal" className="hover:text-primary-500 transition-colors">
                Aviso Legal
              </Link>
              <Link href="/privacy" className="hover:text-primary-500 transition-colors">
                Privacidad
              </Link>
              <Link href="/cookies" className="hover:text-primary-500 transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
