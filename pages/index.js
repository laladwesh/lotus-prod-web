import Image from "next/image";
import { Geist, Geist_Mono, Archivo, Inter } from "next/font/google";
import Card from "./_components/Card";

// Existing Geist fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Add Archivo and Inter
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  // You can specify weights if needed, e.g. weight: ["400", "700"]
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  // You can specify weights if needed, e.g. weight: ["400", "500", "700"]
});

export default function Home() {
  return (
    <div
      // Apply all fonts as CSS variables in the wrapper
      className={`${geistSans.variable} ${geistMono.variable} ${archivo.variable} ${inter.variable}`}
    >
      <Card />
    </div>
  );
}
