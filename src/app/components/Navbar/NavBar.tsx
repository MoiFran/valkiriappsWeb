"use client";

import React from "react";
import GooeyNav from "./GooeyNav";

const items = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
];
export default function NavBar() {
  return (
    <div style={{ position: 'relative', marginTop: '1rem' }} >
  <GooeyNav
    items={items}
    particleCount={15}
    particleDistances={[90, 10]}
    particleR={100}
    initialActiveIndex={0}
    animationTime={600}
    timeVariance={300}
    colors={[1, 2, 3, 1, 2, 3, 1, 4]}
  />
</div>
  );
}
