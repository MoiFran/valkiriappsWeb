"use client";

import React from "react";
import ClientSmoothScroll from "@/components/layout/ClientSmoothScroll";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Showcase from "@/components/sections/Showcase";
import MagicBento from "@/components/sections/MagicBento";
import ContactForm from "@/components/marketing/ContactForm";
import Footer from "@/components/marketing/Footer";
import { SplashCursor } from "@/components/effects";

export default function Home() {
  return (
    <ClientSmoothScroll>
      {/* Global Rainbow Cursor Effect */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 9999,
        }}
      >
        <SplashCursor
          SPLAT_RADIUS={0.2}
          SPLAT_FORCE={3000}
          COLOR_UPDATE_SPEED={6}
          DENSITY_DISSIPATION={5}
          VELOCITY_DISSIPATION={4}
          TRANSPARENT={true}
        />
      </div>

      <Header />
      <div className="min-h-screen bg-black text-white">
        <div id="inicio">
          <Hero />
        </div>
        <div id="servicios">
          <Showcase />
        </div>
        <div id="nosotros">
          <MagicBento />
        </div>
        <div id="contacto">
          <ContactForm />
        </div>
      </div>
      <Footer />
    </ClientSmoothScroll>
  );
}
