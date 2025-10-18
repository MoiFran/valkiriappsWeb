// src/constants/navigation.ts

export const NAVIGATION_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
] as const;

export const GOOEY_NAV_CONFIG = {
  particleCount: 15,
  particleDistances: [90, 10] as [number, number],
  particleR: 100,
  initialActiveIndex: 0,
  animationTime: 600,
  timeVariance: 300,
  colors: [1, 2, 3, 1, 2, 3, 1, 4],
} as const;
