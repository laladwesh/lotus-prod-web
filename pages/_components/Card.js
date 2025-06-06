"use client";
import React from "react";
import { Archivo, Inter } from "next/font/google";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";



// 2) Single card component
function CategoryCard({ title, description }) {
  return (
    <div className="bg-gray border border-gray-200 rounded-md shadow-sm flex flex-col items-center text-center">
      {/* Placeholder for image */}
      <div className="w-full h-full bg-white mb-4 flex items-center justify-center rounded">
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent>
            <CarouselItem>
              {" "}
              <img src="cat1.png" className="h-full" alt="" />
            </CarouselItem>
            <CarouselItem>
              {" "}
              <img src="cat2.png" className="h-full" alt="" />
            </CarouselItem>
            <CarouselItem>
              {" "}
              <img src="cat3.png" className="h-full" alt="" />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>

      {/* Card Title: Archivo */}
      <h3 className="font-bold text-lg mb-2 heading">{title}</h3>

      {/* Card Description: Inter */}
      <p className="text-sm text-gray-600 py-4 px-2 description">
        {description}
      </p>
    </div>
  );
}

// 3) Main categories section
export default function CategoriesSection({title , categories}) {
  
  return (
    <section
      // 4) Attach both fonts as CSS variables on the wrapper
      className={`py-12 heading bg-gray-50`}
      // By default, let the section's text use Archivo
    >
      {/* Section Heading: Archivo */}
      <h2 className="text-5xl font-bold text-center mb-8 heading">
        {title}
      </h2>

      {/* Cards Grid */}
      <div className="max-w-7xl px-8 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {categories?.map((cat, idx) => (
          <CategoryCard
            key={idx}
            title={cat.title}
            description={cat.description}
          />
        ))}
      </div>
    </section>
  );
}
