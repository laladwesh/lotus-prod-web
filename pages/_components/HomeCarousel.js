import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';

const HomeCarousel = () => {
  return (
    <div className="relative w-screen h-[80vh]">
      <div className="absolute inset-0 z-10 flex flex-col items-start justify-center p-8 text-white md:p-16">
        <h1 className="mb-2 text-3xl font-bold md:text-5xl heading">Lotus Traders</h1>
        <p className="mb-4 text-lg md:text-xl description">
          Vision or Motto of Lotus in one line
        </p>
        <button
          onClick={() => console.log("haifaebi")}
          className="heading px-4 py-2 font-semibold text-black bg-gray-200 rounded hover:bg-gray-300"
        >
          Place Enquiry
        </button>
      </div>
      <Carousel plugins={[Autoplay({ delay: 2000 })]} className="w-full h-[80vh]">
        <CarouselContent>
          {/* Give each carousel item an explicit height */}
          <CarouselItem className="relative w-full h-[80vh]">
            <Image src="/cat1.jpg" alt="Slide 1" fill className="object-cover" />
          </CarouselItem>
          <CarouselItem className="relative w-full h-[80vh]">
            <Image src="/cat2.jpg" alt="Slide 2" fill className="object-cover" />
          </CarouselItem>
          <CarouselItem className="relative w-full h-[80vh]">
            <Image src="/cat3.jpg" alt="Slide 3" fill className="object-cover" />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
