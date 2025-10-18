// src/utils/cn.ts
/**
 * Utility function to merge class names
 * Simple implementation for className merging
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}
