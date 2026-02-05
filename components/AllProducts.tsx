"use client";

import { useState } from "react";
import { Check, ShoppingCart, SlidersHorizontal } from "lucide-react";
import { useCart } from "@/app/contexts/CartContext";

export function AllProducts({ products }: { products: any }) {
  const [sortBy, setSortBy] = useState("bestselling");
  const [showFilter, setShowFilter] = useState(false);
  const { addToCart } = useCart();
  const [addedToCart, setAddedToCart] = useState<Record<string, boolean>>({});

  const handleAddToCart = (product: any) => {
    addToCart(product);
    setAddedToCart({ ...addedToCart, [product.id]: true });

    // Reset the "Added" state after 2 seconds
    setTimeout(() => {
      setAddedToCart((prev) => ({ ...prev, [product.id]: false }));
    }, 2000);
  };

  return (
    <div className="container mx-auto max-w-9xl">
      {/* Header */}
      <header>
        <div className="max-w-9xl mx-auto  py-4 mb-5">
          <h1 className="text-5xl font-normal text-gray-800">Products</h1>
        </div>
      </header>

      {/* Filters and Sort Bar */}
      <div>
        <div className="max-w-9xl mx-auto flex items-center justify-between">
          <button
            onClick={() => setShowFilter(!showFilter)}
            className="flex items-center gap-2  rounded"
          >
            <SlidersHorizontal size={18} color="black" />
            <span className="text-gray-600">Filter</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-800">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 rounded text-gray-800"
            >
              <option value="bestselling">Best selling</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="alphabetical">Alphabetically, A-Z</option>
              <option value="date-new">Date: New to Old</option>
            </select>
            <span className="text-sm text-gray-600 ml-2">18 products</span>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-9xl mx-auto mb-10 mt-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product: any) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full"
            >
              {/* Image */}
              <div className="aspect-square bg-gray-100 relative overflow-hidden">
                <img
                  src={product.url}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
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
      </div>
    </div>
  );
}