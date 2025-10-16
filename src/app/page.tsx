import React from "react";
import NavBar from "@/app/components/Navbar/NavBar";
import Hero from "@/app/components/Hero/Hero";
import "@/app/globals.css";
import Mision from "./components/Mision/Mision";

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
