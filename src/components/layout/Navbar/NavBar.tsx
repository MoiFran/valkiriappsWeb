// src/components/layout/Navbar/NavBar.tsx
"use client";

import React from "react";
import GooeyNav from "./GooeyNav";
import { NAVIGATION_ITEMS, GOOEY_NAV_CONFIG } from "@/constants";

export default function NavBar() {
  return (
    <div style={{ position: 'relative', marginTop: '1rem' }}>
      <GooeyNav
        items={NAVIGATION_ITEMS}
        particleCount={GOOEY_NAV_CONFIG.particleCount}
        particleDistances={GOOEY_NAV_CONFIG.particleDistances}
        particleR={GOOEY_NAV_CONFIG.particleR}
        initialActiveIndex={GOOEY_NAV_CONFIG.initialActiveIndex}
        animationTime={GOOEY_NAV_CONFIG.animationTime}
        timeVariance={GOOEY_NAV_CONFIG.timeVariance}
        colors={GOOEY_NAV_CONFIG.colors}
      />
    </div>
  );
}
