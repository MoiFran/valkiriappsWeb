// src/constants/navigation.ts

export const NAVIGATION_ITEMS = [
  { label: "Inicio", href: "#" },
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export const GOOEY_NAV_CONFIG = {
  particleCount: 15,
  particleDistances: [90, 10] as [number, number],
  particleR: 100,
  initialActiveIndex: 0,
  animationTime: 600,
  timeVariance: 300,
  colors: [1, 2, 3, 1, 2, 3, 1, 4],
};
