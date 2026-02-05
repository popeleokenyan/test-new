"use client";
import { useCart } from "@/app/contexts/CartContext";
import { Check, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function FeaturedProductsCarousel({
  featuredProducts,
}: {
  featuredProducts: any;
}) {
  const [page, setPage] = useState(0);
  const itemsPerPage = 5; // you can adjust per screen size
  const totalPages = Math.ceil(featuredProducts.length / itemsPerPage);

  const startIndex = page * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = featuredProducts.slice(startIndex, endIndex);

  const { addToCart } = useCart();
  const [addedToCart, setAddedToCart] = useState<Record<string, boolean>>({});

  const handleAddToCart = (product: any) => {
    addToCart(product);
    setAddedToCart({ ...addedToCart, [product.id]: true });

    // Reset the "Added" state after 2 seconds
    setTimeout(() => {
      setAddedToCart((prev) => ({ ...prev, [product.url]: false }));
    }, 2000);
  };

  return (
    <div className="w-full">
      {/* Scrollable container stretching full width */}
      <div className="flex space-x-10 overflow-x-auto w-full scrollbar-hide">
        {currentItems.map((product: any) => (
          <div
            key={product.id} // use a unique key
            className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/5 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
          >
            {/* Image */}
            <div className="aspect-square bg-gray-100 relative overflow-hidden">
              <Image
                src={product.url}
                alt={product.name}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-4 text-center bg-[#f5f2e9] flex flex-col flex-1">
              <h3 className="font-medium text-gray-800 text-sm line-clamp-2 mb-1">
                {product.name}
              </h3>
              <p className="text-xs text-gray-500 uppercase mb-2">
                {product.category}
              </p>
              <p className="text-lg font-semibold text-gray-800 mb-4">
                Ksh. {product.price.toLocaleString()}
              </p>

              {/* Button */}
              <button
                onClick={() => handleAddToCart(product)}
                disabled={addedToCart[product.id]}
                className={`
          mt-auto w-full py-2.5 rounded-xl font-medium transition-all duration-300
          flex items-center justify-center gap-2
          ${
            addedToCart[product.id]
              ? "bg-green-500 text-white shadow-md"
              : "bg-gray-900 text-white hover:bg-gray-800 hover:scale-[1.02]"
          }
        `}
              >
                {addedToCart[product.id] ? (
                  <>
                    <Check className="w-4 h-4" />
                    Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex flex-col items-center mt-8 gap-3">
        {/* Pagination Controls */}
        <div className="flex items-center justify-center gap-4">
          {/* Previous Button */}
          <button
            onClick={() => setPage(Math.max(0, page - 1))}
            disabled={page === 0}
            className="text-gray-400 hover:text-gray-600 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <svg
              className="w-5 h-5"
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

          {/* Page Counter */}
          <div className="text-gray-600 font-medium mt-20">
            {page + 1}/{totalPages}
          </div>

          {/* Next Button */}
          <button
            onClick={() => setPage(Math.min(totalPages - 1, page + 1))}
            // disabled={page === totalPages - 1}
            disabled={true}
            className="text-gray-400 hover:text-gray-600 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <svg
              className="w-5 h-5"
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
        </div>

        {/* View All Link */}
        <Link
          href={"/collections/all"}
          className="text-sm text-gray-600 hover:text-gray-900 underline"
        >
          View all
        </Link>
      </div>
    </div>
  );
}