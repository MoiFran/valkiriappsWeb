import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/variables.css";
import "@/styles/globals.css";
import "@/styles/mixins.css";
import { LenisProvider } from "@/contexts/LenisContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ValkiriApps",
  description: "Soluciones web y automatizaciones a medida",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
