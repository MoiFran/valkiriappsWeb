// src/types/index.ts

export interface NavigationItem {
  label: string;
  href: string;
}

export interface GooeyNavProps {
  items: readonly NavigationItem[] | NavigationItem[];
  particleCount?: number;
  particleDistances?: [number, number];
  particleR?: number;
  initialActiveIndex?: number;
  animationTime?: number;
  timeVariance?: number;
  colors?: number[];
}

export interface ThreadsProps {
  color?: [number, number, number];
  amplitude?: number;
  distance?: number;
  enableMouseInteraction?: boolean;
}

export interface CoreValue {
  id: string;
  title: string;
  description: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  mission: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: readonly string[];
  color: string;
}
