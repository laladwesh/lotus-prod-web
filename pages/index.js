import { useState, useEffect } from "react";
import { Archivo, Inter } from "next/font/google";
import Card from "./_components/Card";
import HomeCarousel from "./_components/HomeCarousel.js";
import CategoriesSection from "./_components/Card";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function Home() {
  const categories = [
    {
      title: "Concrete Mixer",
      description:
        "Efficiently blends and mixes cement, sand, and water to create uniform concrete. CONNIE",
    },
    {
      title: "Brick Machines",
      description:
        "Combines manual and automated processes for enhanced efficiency and productivity",
    },
    {
      title: "Trimix Systems",
      description:
        "Ensures precise material binding for perfect quality, consistency, and controlled preparation",
    },
    {
      title: "Lab Equipments",
      description:
        "Used for hands-on learning, fostering experimentation, research, and scientific exploration",
    },
    {
      title: "Concrete Mixer",
      description:
        "Efficiently blends and mixes cement, sand, and water to create uniform concrete. CONNIE",
    },
    {
      title: "Brick Machines",
      description:
        "Combines manual and automated processes for enhanced efficiency and productivity",
    },
    {
      title: "Trimix Systems",
      description:
        "Ensures precise material binding for perfect quality, consistency, and controlled preparation",
    },
    {
      title: "Lab Equipments",
      description:
        "Used for hands-on learning, fostering experimentation, research, and scientific exploration",
    },
    {
      title: "Concrete Mixer",
      description:
        "Efficiently blends and mixes cement, sand, and water to create uniform concrete. CONNIE",
    },
  ];

  const [seedData, setSeedData] = useState([]);

  useEffect(() => {
    async function fetchSeedData() {
      try {
        const response = await fetch("/api/seed");
        const data = await response.json();
        console.log("Fetched seed data:", data);
        setSeedData(data.data);
      } catch (error) {
        console.error("Error fetching seed data:", error);
      }
    }

    fetchSeedData();
  }, []);

  return (
    <div className={`${archivo.variable} ${inter.variable}`}>
      {/* {seedData.length > 0 ? (
        seedData.map((product, index) => (
          // Replace the div below with <Card product={product} key={...}/> if you want to use your Card component
          <div key={index}>{product.name[1]} , {product.price} , {product.description} , <a target="_blank" href={product.youtubeVideoLink}> fiaebi</a></div>
        ))
      ) : (
        <div>Loading...</div>
      )} */}
      <HomeCarousel/>
      <CategoriesSection title="Our Categories" categories={categories}/>
      <CategoriesSection title="New Products" categories={categories}/>
    </div>
  );
}
