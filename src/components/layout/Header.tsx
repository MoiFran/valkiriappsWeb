"use client";

import React from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BubbleMenu from "@/components/ui/BubbleMenu";
import { NAVIGATION_ITEMS } from "@/constants/navigation";
import { SERVICES } from "@/constants/company";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Header: React.FC = () => {
  // Mapear los items de navegación al formato que espera BubbleMenu
  const bubbleMenuItems = NAVIGATION_ITEMS.map((item, index) => {
    // Obtener colores de los servicios para un diseño más coherente
    const serviceColors = SERVICES.map((s) => s.color);
    const color = serviceColors[index % serviceColors.length];

    // Rotaciones alternadas para efecto visual
    const rotation = index % 2 === 0 ? -8 : 8;

    return {
      label: item.label,
      href: item.href,
      ariaLabel: item.label,
      rotation,
      hoverStyles: {
        bgColor: color,
        textColor: "#ffffff",
      },
    };
  });

  return (
    <>
      <BubbleMenu
        logo={
          <Image
            src="/images/logos/valkiriapps_logo_electricBlue.svg"
            alt="ValkiriApps Logo"
            width={120}
            height={40}
            style={{
              width: "auto",
              height: "100%",
              objectFit: "contain",
            }}
            priority
          />
        }
        items={bubbleMenuItems}
        menuAriaLabel="Toggle navigation"
        menuBg="#ffffff"
        menuContentColor="#111111"
        useFixedPosition={true}
        animationEase="back.out(1.5)"
        animationDuration={0.6}
        staggerDelay={0.15}
        enableScrollAnimation={true}
      />
    </>
  );
};

export default Header;
