// src/components/layout/ClientSmoothScroll.tsx
"use client";

import { ReactNode } from "react";
import { useSmoothScroll } from "@/hooks";

interface ClientSmoothScrollProps {
  children: ReactNode;
}

export default function ClientSmoothScroll({ children }: ClientSmoothScrollProps) {
  useSmoothScroll({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });

  return <>{children}</>;
}
