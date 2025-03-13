import { useState, useEffect } from "react";
import { Archivo, Inter } from "next/font/google";
import Card from "./_components/Card";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function Home() {
  const [seedData, setSeedData] = useState(null);

  useEffect(() => {
    async function fetchSeedData() {
      try {
        const response = await fetch("/api/seed");
        const data = await response.json();
        console.log("Fetched seed data:", data);
        setSeedData(data);
      } catch (error) {
        console.error("Error fetching seed data:", error);
      }
    }

    fetchSeedData();
  }, []);

  return (
    <div className={`${archivo.variable} ${inter.variable}`}>
      <Card />
    </div>
  );
}
