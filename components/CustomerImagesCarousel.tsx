"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export function CustomerImagesCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const customerImages = [
    {
      src: "https://www.royalmabati.com/cdn/shop/files/e770c4baeb5a1cc012d092390269b003_1.jpg?v=1718194991&width=3840",
      alt: "Customer home with red roofing",
      caption:
        "At Apex beyond Mabati Factory, we specialize in producing high-quality roofing materials",
    },
    {
      src: "https://www.royalmabati.com/cdn/shop/files/aerial-view-of-abandoned-houses-following-the-real-2023-11-27-05-29-06-utc.jpg?v=1718194994&width=3840",
      alt: "Customer home with premium roofing",
      caption: "Discover why we're the preferred choice for roofing solutions",
    },
    {
      src: "https://www.royalmabati.com/cdn/shop/files/What-to-Look-for-in-a-Roofing-Company-scaled_1.jpg?v=1718194991&width=3840",
      alt: "Beautiful home with Apex beyond Mabati roofing",
      caption:
        "From galvanized and glossy to alloy zinc and matte finishes, our extensive product range caters to all your roofing needs.",
    },
    {
      src: "https://www.royalmabati.com/cdn/shop/files/aerial-view-of-american-apartment-buildings-in-flo-2024-03-21-23-17-32-utc.jpg?v=1718796427&width=3840",
      alt: "Modern home with durable roofing",
      caption: "",
    },
    {
      src: "https://www.royalmabati.com/cdn/shop/files/new-built-not-lived-yet-one-store-gray-house-with-2023-11-27-05-13-49-utc.jpg?v=1718194992&width=3840",
      alt: "Elegant home with Apex beyond Mabati",
      caption: "",
    },
  ];

  const totalSlides = customerImages.length;

  // Autoplay functionality
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isPlaying, totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-9xl">
        {/* Header */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal text-gray-800 text-center mb-12">
          Real Homes, Real Mabati:
          <br />
          Customer Images
        </h2>

        {/* Carousel Container */}
        <div className="relative">
          {/* Images */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[550px] overflow-hidden rounded-lg">
            {customerImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}

            {/* Caption Overlay */}
            {customerImages[currentSlide].caption && <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-white/90 backdrop-blur-sm px-8 py-6 rounded-2xl shadow-lg max-w-2xl mx-4 pointer-events-auto">
                <p className="text-gray-700 text-center text-base md:text-lg leading-relaxed">
                  {customerImages[currentSlide].caption}
                </p>
              </div>
            </div>}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center mt-6 gap-4">
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="text-gray-600 hover:text-gray-900 transition-colors p-2"
              aria-label="Previous slide"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Slide Counter */}
            <div className="text-gray-600 font-medium text-lg">
              {currentSlide + 1}/{totalSlides}
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="text-gray-600 hover:text-gray-900 transition-colors p-2"
              aria-label="Next slide"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Play/Pause Button */}
            <button
              onClick={togglePlayPause}
              className="ml-2 text-gray-600 hover:text-gray-900 transition-colors p-2"
              aria-label={isPlaying ? "Pause autoplay" : "Play autoplay"}
            >
              {isPlaying ? (
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}