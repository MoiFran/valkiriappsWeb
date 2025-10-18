// src/constants/theme.ts

export const COLORS = {
  primary: "#00BFFF", // Electric Blue
  secondary: "#4FC2D1", // Teal
  background: "#000000",
  foreground: "#FFFFFF",
  gray: {
    100: "#F5F5F5",
    200: "#EEEEEE",
    300: "#E0E0E0",
    400: "#BDBDBD",
    500: "#9E9E9E",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
  },
} as const;

export const BREAKPOINTS = {
  mobile: 600,
  tablet: 900,
  desktop: 1200,
  wide: 1536,
} as const;

export const HERO_ANIMATION_CONFIG = {
  color: [0, 0.749, 1] as [number, number, number], // RGB for #00BFFF
  amplitude: 3,
  distance: 0,
  enableMouseInteraction: true,
} as const;
