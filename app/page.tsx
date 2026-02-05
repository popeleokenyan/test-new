import { BlogPosts } from "@/components/BlogPosts";
import { CustomerImagesCarousel } from "@/components/CustomerImagesCarousel";
import { CustomerTestimonials } from "@/components/CustomerTestimonials";
import FeaturedProductsCarousel from "@/components/FeaturedProductsCarousel";
import { HeroSection } from "@/components/HeroSection";
import { TrustIcon } from "@/components/TrustIcons";
import { blogPosts } from "@/data/app-data";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const featuredProducts = [
    {
      id: 19,
      name: "Apex beyond ZEE TILE®",
      price: 491.0,
      url: "https://www.royalmabati.com/cdn/shop/files/RoyalZeetileBrickRedMatteFinish.G28.png?v=1718113507&width=533",
    },
    {
      id: 20,
      name: "Apex beyond AlloyZinc Box®",
      price: 323.0,
      url: "https://www.royalmabati.com/cdn/shop/files/WhatsApp_Image_2024-07-31_at_4.51.47_PM_1.jpg?v=1722434283&width=533",
    },
    {
      id: 21,
      name: "Apex beyond AlloyZinc Corrugated®",
      price: 323.0,
      url: "https://www.royalmabati.com/cdn/shop/files/WhatsApp_Image_2024-07-31_at_4.51.46_PM.jpg?v=1722434386&width=533",
    },
    {
      id: 22,
      name: "Apex beyond Box Profile®",
      price: 328.0,
      url: "https://www.royalmabati.com/cdn/shop/files/RoyalBoxProfileCharcoalGrey.G30.png?v=1722583639&width=533",
    },
    {
      id: 23,
      name: "Apex beyond BRICKTILE®",
      price: 491.0,
      url: "https://www.royalmabati.com/cdn/shop/files/RoyalBrickTileCharcoalGreyMatteFinish.G28.png?v=1718111262&width=533",
    },
    {
      id: 24,
      name: "Apex beyond AlloyZinc Corrugated®",
      price: 323.0,
      url: "https://www.royalmabati.com/cdn/shop/files/WhatsApp_Image_2024-07-31_at_4.51.46_PM.jpg?v=1722434386&width=533",
    },
    {
      id: 25,
      name: "Apex beyond Box Profile®",
      price: 328.0,
      url: "https://www.royalmabati.com/cdn/shop/files/RoyalBoxProfileCharcoalGrey.G30.png?v=1722583639&width=533",
    },
    {
      id: 26,
      name: "Apex beyond BRICKTILE®",
      price: 491.0,
      url: "https://www.royalmabati.com/cdn/shop/files/RoyalBrickTileCharcoalGreyMatteFinish.G28.png?v=1718111262&width=533",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Products Section */}
      <section className="py-12">
        <div>
          <div className="mb-12 sm:px-4 md:px-0 lg:px-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-gray-800 mb-4 md:mb-6">
              Featured products
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 md:mb-8 max-w-7xl">
              Elevate your project with Apex beyond Mabati Factory's pinnacle of
              roofing innovation. Meticulously engineered using state-of-the-art
              technology and premium materials, each panel exemplifies
              durability, strength, and timeless elegance.
            </p>

            <FeaturedProductsCarousel featuredProducts={featuredProducts} />
          </div>

          {/* As Featured on Citizen TV Banner */}
          <div className="text-black mb-12 mt-25">
            <div className="mb-6">
              <h3 className="text-2xl font-normal mb-2">
                As Featured on Citizen TV
              </h3>
              <p className="text-lg text-gray-500">
                Apex beyond Mabati showcased for quality roofing solutions in
                Kenya.
              </p>
            </div>
            <div className="w-full">
              <iframe
                className="w-full h-[1000px]"
                src="https://www.youtube.com/embed/TZ_nVFpHYoA"
                title="Apex beyond Mabati on Citizen TV"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Why Customers Trust Apex beyond Mabati */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto max-w-8xl">
          <h2 className="text-lg font-semibold text-gray-800 text-center mb-2">
            Why Customers Trust Apex beyond Mabati
          </h2>

          {/* Trust Icons Row */}
          <TrustIcon />

          {/* Content Section */}
          <div className="relative flex flex-col lg:flex-row gap-8 lg:justify-end">
            {/* Right Side - Delivery Image */}
            <div className="lg:w-[50%] flex flex-col">
              {/* Top Image */}
              <div className="mb-4">
                <img
                  src="delivery.webp"
                  alt="Delivery Truck"
                  className="w-full h-[650px] object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Left Side - Green Box (floating on image) */}
            <div className="lg:absolute h-[400px] lg:left-8 lg:top-1/2 lg:-translate-y-1/2 lg:w-[53%] bg-lime-200 rounded-2xl p-12 flex flex-col justify-center shadow-xl z-10">
              <h3 className="text-5xl font-normal text-gray-800 mb-6 leading-tight max-w-lg">
                Free delivery 24/7 Countrywide. Shop our{" "}
                <Link
                  href={"/collections/all"}
                  className="underline decoration-2"
                >
                  products
                </Link>
              </h3>
              <Link
                href="/collections/all"
                className="bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors w-fit"
              >
                Shop now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Range of Roofing Solutions */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-8xl">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Left Side - Image */}
            <div className="lg:w-1/2">
              <div className="relative h-[400px] lg:h-[500px] rounded-l-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://www.royalmabati.com/cdn/shop/files/WhatsApp_Image_2024-06-18_at_11.52.41_AM.jpg?v=1718791415&width=1500"
                  alt="Worker inspecting roofing materials"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="lg:w-1/2 max-w-2xl">
              <h2 className="text-4xl lg:text-5xl font-normal text-gray-700 mb-6">
                Our Range of Roofing Solutions
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Engineered for enduring strength and crafted with meticulous
                precision. Whether you seek classic elegance or contemporary
                flair, our diverse range of products ensures there's an option
                to complement any architectural style or personal preference.
              </p>

              <Link
                href="/collections/all"
                className="bg-pink-600 text-white px-10 py-4 rounded-xl font-semibold hover:bg-pink-700 transition-colors shadow-lg inline-block text-center"
              >
                See Details
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Transform Your Home Section */}
      <section className="relative">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2">
          {/* Left Side - Roofing Tiles Image */}
          <div className="relative h-[400px] lg:h-[500px]">
            <Image
              src="https://www.royalmabati.com/cdn/shop/files/WhatsApp_Image_2024-07-03_at_8.13.56_AM.jpg?v=1719983663&width=3840"
              alt="Premium Stone-Coated Roofing Tiles"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Side - House with Roof Image */}
          <div className="relative h-[400px] lg:h-[500px]">
            <Image
              src="https://www.royalmabati.com/cdn/shop/files/WhatsApp_Image_2024-07-03_at_08.49.08_6580b4d3.jpg?v=1719986125&width=3840"
              alt="House with Premium Stone-Coated Roofing"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="absolute hidden lg:flex inset-0 bg-black/30 flex flex-col items-center justify-center text-white px-8">
          <h3 className="text-3xl lg:text-3xl font-semibold mb-4 text-center max-w-8xl">
            Transform Your Home with Premium Stone-Coated Roofing
          </h3>
          <p className="text-lg mb-6 text-center max-w-8xl">
            Stylish, Durable, and Weather-Resistant Roofing Solutions
          </p>
          <Link
            href="/collections/all"
            className="bg-white text-gray-800 px-10 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-block"
          >
            shop now
          </Link>
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="lg:hidden">
          {/* Top Image - Roofing Tiles */}
          <div className="relative h-[300px]">
            <Image
              src="https://www.royalmabati.com/cdn/shop/files/WhatsApp_Image_2024-07-03_at_8.13.56_AM.jpg?v=1719983663&width=3840"
              alt="Premium Stone-Coated Roofing Tiles"
              fill
              className="object-cover"
            />
          </div>

          {/* Purple Section with Text */}
          <div className="bg-gradient-to-r from-purple-800 to-purple-900 text-white py-12 px-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Transform Your Home with Premium Stone-Coated Roofing
            </h2>
            <p className="text-base sm:text-lg mb-6 max-w-xl mx-auto">
              Stylish, Durable, and Weather-Resistant Roofing Solutions
            </p>
            <Link
              href="/collections/all"
              className="bg-white text-gray-800 px-10 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-block"
            >
              shop now
            </Link>
          </div>

          {/* Bottom Image - House with Roof */}
          <div className="relative h-[300px]">
            <Image
              src="https://www.royalmabati.com/cdn/shop/files/WhatsApp_Image_2024-07-03_at_08.49.08_6580b4d3.jpg?v=1719986125&width=3840"
              alt="House with Premium Stone-Coated Roofing"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-100">
        <div className="container mx-auto max-w-8xl">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl lg:text-4xl font-normal text-gray-800 mb-4">
              Our Reach Across Kenya
            </h2>
            <p className="text-gray-600 text-lg max-w-4xl">
              Apex beyond Mabati has a strong presence across all 47 counties in
              Kenya with approved installers and depots. We continue to expand
              our network to provide even better accessibility and support
              nationwide
            </p>
          </div>

          {/* Map Image */}
          <div className="relative w-full rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/map.png"
              alt="Apex beyond Mabati Reach Across Kenya - 47 Counties"
              width={1400}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Real Homes, Real Mabati: Customer Images */}

      <CustomerImagesCarousel />

      {/* Blogs */}

      <BlogPosts blogs={blogPosts} title="Blog posts" />

      {/* Discover Apex beyond Mabati */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-9xl">
          <div className="mb-12 px-4 md:px-12 lg:px-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-gray-800 mb-4 max-w-7xl">
              Discover Apex beyond Mabati: Our Commitment to Quality Roofing
              Solutions
            </h2>
          </div>

          {/* Video Container */}
          <div className="relative w-full h-[100vh] overflow-hidden shadow-2xl">
            <video
              className="w-full h-full object-cover"
              playsInline
              loop
              controls
              preload="metadata"
              poster="https://www.royalmabati.com/cdn/shop/files/preview_images/trusses-1-1_1100x.jpg?v=1718572782"
            >
              <source
                src="https://www.royalmabati.com/cdn/shop/videos/c/vp/78df1e3008314f5daf55762d5c8c5c0d/78df1e3008314f5daf55762d5c8c5c0d.HD-1080p-3.3Mbps-30520303.mp4?v=0"
                type="video/mp4"
              />
              {/* Fallback image for browsers that don't support video */}
              <img
                src="https://www.royalmabati.com/cdn/shop/files/preview_images/trusses-1-1_1100x.jpg?v=1718572782"
                alt="Apex beyond Mabati Trusses"
                className="w-full h-full object-cover"
              />
            </video>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <CustomerTestimonials />
    </div>
  );
}