"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export function CustomerTestimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      image:
        "https://www.royalmabati.com/cdn/shop/files/WhatsApp_Image_2024-06-18_at_11.51.15_AM.jpg?v=1718779716&width=3840",
      quote:
        "Apex beyond Mabati is the best ever, I like the way they serve customers!",
      author: "Evans Simiyu",
      role: "Homeowner",
    },
    {
      id: 2,
      image:
        "https://www.royalmabati.com/cdn/shop/files/WhatsApp_Image_2024-06-18_at_11.54.33_AM.jpg?v=1718779717&width=3840",
      quote:
        "Excellent quality and professional service. Highly recommend Apex beyond Mabati!",
      author: "Jane Wanjiku",
      role: "Contractor",
    },
    {
      id: 3,
      image:
        "https://www.royalmabati.com/cdn/shop/files/WhatsApp_Image_2024-06-18_at_11.51.18_AM.jpg?v=1718779716&width=3840",
      quote:
        "The roofing has lasted for years without any issues. Great investment!",
      author: "David Omondi",
      role: "Property Developer",
    },
    {
      id: 4,
      image:
        "https://www.royalmabati.com/cdn/shop/files/WhatsApp_Image_2024-06-18_at_11.54.36_AM_1_f320efbc-06c4-4bab-b83e-c447f178d1a3.jpg?v=1718780004&width=3840",
      quote:
        "Fast delivery and amazing customer support. Will definitely buy again!",
      author: "Mary Njeri",
      role: "Homeowner",
    },
    {
      id: 5,
      image:
        "https://www.royalmabati.com/cdn/shop/files/WhatsApp_Image_2024-06-18_at_11.54.33_AM.jpg?v=1718779717&width=3840",
      quote: "Best quality mabati in Kenya. Worth every shilling!",
      author: "Peter Kimani",
      role: "Builder",
    },
  ];

  const totalSlides = testimonials.length;

  // Autoplay functionality
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);

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
    <section className="py-16 px-4 bg-gray-100">
      <div className="container mx-auto max-w-9xl">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-800 text-center mb-12">
          Hear from Our Happy Customers
        </h2>

        {/* Carousel Container */}
        <div className="relative">
          {/* Testimonial Slides */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[450px] overflow-hidden shadow-xl">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                {/* Background Image */}
                <Image
                  src={testimonial.image}
                  alt={testimonial.author}
                  fill
                  className="object-cover"
                />


              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center mt-8 gap-6">
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="text-gray-600 hover:text-gray-900 transition-colors p-2"
              aria-label="Previous testimonial"
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

            {/* Dot Indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-gray-800 w-8"
                      : "bg-gray-400 hover:bg-gray-600"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="text-gray-600 hover:text-gray-900 transition-colors p-2"
              aria-label="Next testimonial"
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