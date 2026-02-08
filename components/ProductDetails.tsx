"use client";
import { useState } from "react";
import { Minus, Plus, ShoppingCart, Check } from "lucide-react";
import { useCart } from "@/app/contexts/CartContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { allproducts, productsDetailsData } from "@/data/app-data";

function getRandomItems(arr: any[], count = 4) {
  // 1. Create a shallow copy so we don't mutate the original array
  const shuffled = [...arr];

  // 2. Fisher-Yates Shuffle
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  // 3. Return the first N items
  return shuffled.slice(0, count);
}

const relatedProducts = getRandomItems(allproducts);

export function ProductDetails({ name }: { name: string }) {
  const router = useRouter();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [length, setLength] = useState("0.6");
  const [selectedImage, setSelectedImage] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);

  const product = productsDetailsData.find(
    (p) =>
      p.slug === name,
  );

  const [selectedGauge, setSelectedGauge] = useState(
    product?.defaultGauge || "",
  );
  const [selectedFinish, setSelectedFinish] = useState(
    product?.defaultFinish || "",
  );

  // Get compatible finishes for selected gauge
  const getCompatibleFinishes = () => {
    if (!product) return [];
    const selectedGaugeOption = product.gaugeOptions?.find(
      (g) => g.value === selectedGauge,
    );
    if (!selectedGaugeOption) return product.finishOptions || [];

    return (
      product.finishOptions?.filter((finish) =>
        selectedGaugeOption.compatibleFinishes.includes(finish.value),
      ) || []
    );
  };

  const compatibleFinishes = getCompatibleFinishes();

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Product not found
          </h1>
          <Link
            href={"/collections/all"}
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleLengthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "" || (!isNaN(parseFloat(value)) && parseFloat(value) >= 0)) {
      setLength(value);
    }
  };

  const calculatePrice = () => {
    if (!product) return 0;
    const meters = parseFloat(length) || 0;
    return product.pricePerMeter * quantity * meters;
  };

  const handleAddToCart = () => {
    if (!product) {
      alert("Product not found");
      return;
    }

    if (!length || parseFloat(length) < product.minLength) {
      alert(`Please enter a length (minimum ${product.minLength} meters)`);
      return;
    }

    const meters = parseFloat(length);
    if (meters > product.maxLength) {
      alert(`Maximum length is ${product.maxLength} meters`);
      return;
    }

    const cartItem = {
      id: `${product.id}`,
      name: `${product.name} (${meters}m) - Gauge: ${selectedGauge ?? "N/A"}, Finish: ${selectedFinish ?? "N/A"})`,
      price: product.pricePerMeter * meters,
      quantity: quantity,
      url: product.images[0],
      details: {
        length: meters,
        pricePerMeter: product.pricePerMeter,
        gauge: selectedGauge,
        finish: selectedFinish,
      },
    };

    addToCart(cartItem);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const totalPrice = calculatePrice();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container max-w-8xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-gray-600">
          <span
            className="cursor-pointer hover:text-blue-600"
            onClick={() => router.push("/")}
          >
            Home
          </span>
          {" / "}
          <span
            className="cursor-pointer hover:text-blue-600"
            onClick={() => router.push("/collections/all")}
          >
            Products
          </span>
          {" / "}
          <span className="text-gray-900">{product.name}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Images */}
          <div>
            {/* Main Image */}
            <div className="bg-white rounded-lg shadow-md mb-4 overflow-hidden">
              <div className="aspect-square flex bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-all ${
                    selectedImage === index
                      ? "ring-2 ring-blue-600"
                      : "hover:ring-2 hover:ring-gray-300"
                  }`}
                >
                  <div className="aspect-square flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-4">
                    <img
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Product Details */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-8">
              {/* Category */}
              <div className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-2">
                {product.category}
              </div>

              {/* Product Name */}
              <h1 className="text-5xl font-normal text-gray-900 mb-6">
                {product.name}
              </h1>

              {/* Gauge Selector */}
              {product.gaugeOptions && product.gaugeOptions.length > 0 && (
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Gauge
                  </label>
                  <div className="flex items-center gap-3">
                    {product.gaugeOptions.map((gauge) => (
                      <button
                        key={gauge.value}
                        onClick={() => {
                          setSelectedGauge(gauge.value);
                          // Reset finish if it's not compatible with new gauge
                          if (
                            !gauge.compatibleFinishes.includes(selectedFinish)
                          ) {
                            setSelectedFinish("");
                          }
                        }}
                        className={`px-6 py-2 rounded-lg font-medium transition-all ${
                          selectedGauge === gauge.value
                            ? "bg-gray-900 text-white"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                      >
                        {gauge.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Finish Selector */}
              {product.finishOptions && product.finishOptions.length > 0 && (
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Finish
                  </label>
                  <div className="flex items-center gap-3 flex-wrap">
                    {compatibleFinishes.map((finish) => (
                      <button
                        key={finish.value}
                        onClick={() => setSelectedFinish(finish.value)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                          selectedFinish === finish.value
                            ? "bg-blue-600 text-white"
                            : "bg-white border border-gray-300 text-gray-700 hover:border-blue-600"
                        }`}
                      >
                        {finish.label}
                      </button>
                    ))}
                  </div>
                  {selectedGauge && compatibleFinishes.length === 0 && (
                    <p className="text-xs text-red-500 mt-1">
                      No finishes available for the selected gauge
                    </p>
                  )}
                </div>
              )}

              {/* Quantity Selector */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity
                </label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={decrementQuantity}
                    className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <Minus className="w-4 h-4 text-gray-600" />
                  </button>
                  <input
                    type="text"
                    value={quantity}
                    readOnly
                    className="w-16 h-10 text-center border border-gray-300 rounded-lg font-semibold text-gray-900"
                  />
                  <button
                    onClick={incrementQuantity}
                    className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <Plus className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Length Input */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Length (Meters)
                </label>
                <input
                  type="number"
                  value={length}
                  onChange={handleLengthChange}
                  placeholder="Enter required length"
                  min={product.minLength}
                  max={product.maxLength}
                  step="0.1"
                  className="w-full px-4 py-2 border text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Available lengths: {product.minLength}m - {product.maxLength}m
                </p>
              </div>

              {/* Price Display */}
              {length && parseFloat(length) > 0 && (
                <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">
                      Price per meter:
                    </span>
                    <span className="font-medium text-gray-900">
                      KES {product.pricePerMeter.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Length:</span>
                    <span className="font-medium text-gray-900">
                      {parseFloat(length)}m
                    </span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Quantity:</span>
                    <span className="font-medium text-gray-900">
                      {quantity}
                    </span>
                  </div>
                  {/* Inside the Price Display section, add after Quantity */}
                  {selectedGauge && (
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Gauge:</span>
                      <span className="font-medium text-gray-900">
                        {selectedGauge}
                      </span>
                    </div>
                  )}
                  {selectedFinish && (
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Finish:</span>
                      <span className="font-medium text-gray-900">
                        {selectedFinish}
                      </span>
                    </div>
                  )}
                  <div className="border-t pt-2 mt-2">
                    <div className="flex justify-between items-center">
                      <span className="text-base font-semibold text-gray-900">
                        Total Price:
                      </span>
                      <span className="text-2xl font-bold text-blue-600">
                        KES {totalPrice.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                disabled={addedToCart}
                className={`w-full py-4 rounded-lg font-semibold text-white transition-all flex items-center justify-center gap-2 mb-6 ${
                  addedToCart
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {addedToCart ? (
                  <>
                    <Check className="w-5 h-5" />
                    Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                  </>
                )}
              </button>

              {/* Checkout Securely Section */}
              <div className="border-t pt-6">
                <p className="text-sm font-medium text-gray-700 text-center mb-3">
                  Checkout securely with
                </p>
                <div className="flex items-center justify-center gap-3">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                    alt="Visa"
                    className="h-6"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                    alt="Mastercard"
                    className="h-6"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                    alt="PayPal"
                    className="h-6"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/1/15/M-PESA_LOGO-01.svg"
                    alt="M-Pesa"
                    className="h-6"
                  />
                </div>
              </div>

              {/* Product Description */}
              <div className="border-t pt-6 mt-6">
                <p className="text-gray-700 leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* You May Also Like Section */}
        <div className="container max-w-9xl mx-auto  rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            You may also like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.name.toLocaleLowerCase().replace(/\s+/g, "-")}`}
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
                  <p className="text-lg font-semibold text-gray-800 mb-4">
                    Ksh. {product.price.toLocaleString()}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}