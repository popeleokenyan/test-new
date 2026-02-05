"use client";
import { useState } from "react";
import Link from "next/link";
import { ShoppingCart, Plus, Minus, Trash2, X } from "lucide-react";
import { useCart } from "@/app/contexts/CartContext";
import { useAuth } from "@/app/contexts/AuthContext";
import { useRouter } from "next/navigation";

export function Cart() {
  const {
    cart,
    updateQuantity,
    removeFromCart,
    getCartTotal,
    getCartCount,
  } = useCart();
  const { user } = useAuth();
  console.log("Current user in Cart:", user);
  const router = useRouter();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  console.log("Cart total:", getCartTotal());

  const handleCheckout = () => {
    if (!user) {
      router.push("account/login");
      return;
    }
    setIsCheckingOut(true);
    // Simulate checkout process
    setTimeout(() => {
       router.push("/checkout");
      setIsCheckingOut(false);
    }, 1500);
  };

  return (
    <>
      {/* Slide-in Cart Panel */}
      <div className="container mx-auto mt-8 bg-#1f2937 h-200 flex flex-col max-w-6xl">
        {/* Cart Count */}
        {cart.length > 0 && (
          <div className="px-6 py-3 bg-blue-50 border-b">
            <p className="text-sm text-blue-900 font-medium">
              {getCartCount()} {getCartCount() === 1 ? "item" : "items"} in cart
            </p>
          </div>
        )}

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingCart className="w-16 h-16 text-gray-300 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Your cart is empty
              </h3>
              <p className="text-gray-600 mb-8">
                Add some products to get started
              </p>
              <Link
                href="/collections/all"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item: any) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-4 bg-gray-50 rounded-lg"
                >
                  {/* Product Image */}
                  <div className="w-20 h-20 bg-gray-200 rounded-md flex-shrink-0 overflow-hidden">
                    {item.url ? (
                      <img
                        src={item.url}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        <ShoppingCart className="w-8 h-8" />
                      </div>
                    )}
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 truncate">
                      {item.name}
                    </h3>
                    <p className="text-blue-600 font-bold mt-1">
                      KES {item.price.toLocaleString()}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="p-1 hover:bg-white rounded transition-colors"
                      >
                        <Minus className="w-4 h-4 text-gray-600" />
                      </button>
                      <span className="font-medium text-gray-900 w-8 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="p-1 hover:bg-white rounded transition-colors"
                      >
                        <Plus className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 hover:bg-red-50 rounded-lg transition-colors self-start"
                  >
                    <Trash2 className="w-5 h-5 text-red-500" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer with Total and Checkout */}
        {cart.length > 0 && (
          <div className="border-t p-6 space-y-4">
            <div className="flex justify-between items-center text-lg font-bold">
              <span className="text-gray-900">Total:</span>
              <span className="text-blue-600">
                KES {getCartTotal().toLocaleString()}
              </span>
            </div>

            <button
              onClick={handleCheckout}
              disabled={isCheckingOut}
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isCheckingOut ? "Processing..." : "Proceed to Checkout"}
            </button>

            {!user && (
              <p className="text-xs text-center text-gray-600">
                You'll need to{" "}
                <Link href="/account/login" className="text-blue-600 hover:underline">
                  sign in
                </Link>{" "}
                to checkout
              </p>
            )}

            <button className="w-full py-2 text-gray-600 hover:text-gray-900 transition-colors">
              <Link href="/collections/all">Continue Shopping</Link>
            </button>
          </div>
        )}
      </div>
    </>
  );
}