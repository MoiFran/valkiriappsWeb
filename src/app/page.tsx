import React from "react";
import NavBar from "@/components/layout/Navbar/NavBar";
import Hero from "@/components/sections/Hero/Hero";
import Mision from "@/components/sections/Mision/Mision";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        
     <Mision />
      </main>
    </>
  );
}
