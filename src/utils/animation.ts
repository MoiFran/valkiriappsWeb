// src/utils/animation.ts

/**
 * Generates a random value within a variance range
 */
export function randomVariance(base: number, variance: number): number {
  return base + (Math.random() - 0.5) * variance;
}

/**
 * Easing function for smooth animations
 */
export const easings = {
  easeInOut: (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
  easeOut: (t: number) => t * (2 - t),
  easeIn: (t: number) => t * t,
  linear: (t: number) => t,
  smoothScroll: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
} as const;

/**
 * Lerp (Linear Interpolation) function
 */
export function lerp(start: number, end: number, t: number): number {
  return start * (1 - t) + end * t;
}

/**
 * Clamp a value between min and max
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}
