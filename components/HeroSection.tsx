"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    "/hero1.png",
    "/hero2.png",
    "/hero3.png",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[600px] bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            key={index}
            src={image}
            alt={`Hero ${index + 1}`}
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>
      ))}
    </section>
  );
};