"use client";
import { useState, useEffect } from "react";
import {
  CreditCard,
  MapPin,
  CheckCircle,
  Copy,
  Check,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/contexts/AuthContext";
import { useCart } from "@/app/contexts/CartContext";
import { useOrders } from "@/app/contexts/OrderContext";
import Link from "next/link";

interface OrderData {
  userId: string;
  userEmail: string;
  userName: string;
  items: Array<{
    productId: string;
    productName: string;
    quantity: number;
    price: number;
    subtotal: number;
  }>;
  shippingDetails: {
    fullName: string;
    phone: string;
    email: string;
    address: string;
    city: string;
    postalCode: string;
  };
  paymentMethod: string;
  paymentDetails: {
    mpesaReference: string | null;
    paybill: string | null;
    accountNumber: string | null;
  };
  subtotal: number;
  deliveryFee: number;
  total: number;
  currency: string;
  orderNumber?: string;
}

export function Checkout() {
  const router = useRouter();
  const { user } = useAuth();
  const { cart, getCartTotal, clearCart } = useCart();
  const { createOrder } = useOrders();

  const [shippingDetails, setShippingDetails] = useState({
    fullName: user?.name || "",
    phone: "",
    email: user?.email || "",
    address: "",
    city: "",
    postalCode: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("mpesa");
  const [mpesaReference, setMpesaReference] = useState("");
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [currentOrder, setCurrentOrder] = useState<any>(null);
  const [copied, setCopied] = useState(false);

  const subtotal = getCartTotal();
  const deliveryFee = 500;
  const total = subtotal + deliveryFee;

  // M-Pesa Payment Details (dummy)
  const mpesaDetails = {
    paybill: "400200",
    accountNumber: "APEX-" + user?.id?.substring(0, 6).toUpperCase(),
    amount: total,
  };

  useEffect(() => {
    if (!user) {
      router.push("/login");
      return;
    }
    if (cart.length === 0 && !orderPlaced) {
      router.push("/products");
    }
  }, [user, cart, orderPlaced, router]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShippingDetails({
      ...shippingDetails,
      [e.target.name]: e.target.value,
    });
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePlaceOrder = async () => {
    // Validate user exists
    if (!user) {
      alert("User not found. Please log in again.");
      return;
    }

    // Validate shipping details
    const requiredFields = ["fullName", "phone", "email", "address", "city"];
    const missingFields = requiredFields.filter(
      (field) => !shippingDetails[field as keyof typeof shippingDetails],
    );

    if (missingFields.length > 0) {
      alert("Please fill in all required fields");
      return;
    }

    if (paymentMethod === "mpesa" && !mpesaReference) {
      alert("Please enter your M-Pesa transaction code");
      return;
    }

    setIsPlacingOrder(true);

    // Create order object
    const orderData: OrderData = {
      userId: user.id,
      userEmail: user.email,
      userName: user.name,
      items: cart.map((item) => ({
        productId: String(item.id),
        productName: String(item.name),
        quantity: item.quantity,
        price: item.price,
        subtotal: item.price * item.quantity,
      })),
      shippingDetails,
      paymentMethod,
      paymentDetails: {
        mpesaReference: paymentMethod === "mpesa" ? mpesaReference : null,
        paybill: paymentMethod === "mpesa" ? mpesaDetails.paybill : null,
        accountNumber:
          paymentMethod === "mpesa" ? mpesaDetails.accountNumber : null,
      },
      subtotal,
      deliveryFee,
      total,
      currency: "KES",
    };

    // Save order to localStorage
    const order = createOrder(orderData);
    setCurrentOrder(order);

    // Simulate API call to backend
    try {
      const response = await sendOrderToAPI(orderData);
      console.log("Order sent to API:", response);

      // Clear cart after successful order
      clearCart();
      setOrderPlaced(true);
    } catch (error) {
      console.error("Error placing order:", error);
      alert("There was an error placing your order. Please try again.");
      setIsPlacingOrder(false);
    }
  };

  // Function to send order to API
const sendOrderToAPI = async (order: OrderData): Promise<{ success: boolean; orderId: string }> => {
    // Replace with your actual API endpoint
    const API_ENDPOINT = "https://your-api.com/api/orders";

    try {
        const response = await fetch(API_ENDPOINT, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // Add your API key or auth token here
                // 'Authorization': 'Bearer YOUR_API_TOKEN'
            },
            body: JSON.stringify(order),
        });

        if (!response.ok) {
            throw new Error("Failed to submit order");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        // For demo purposes, simulate successful submission
        console.log("Simulating API call with order:", order);
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ success: true, orderId: order.orderNumber || `ORD-${Date.now()}` });
            }, 1500);
        });
    }
};

  if (orderPlaced && currentOrder) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 py-12">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Order Placed Successfully!
            </h1>
            <p className="text-gray-600 mb-6">Thank you for your order</p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <p className="text-sm text-gray-600 mb-2">Your Order Number</p>
              <p className="text-2xl font-bold text-blue-600">
                {currentOrder.orderNumber}
              </p>
            </div>

            <div className="text-left space-y-4 mb-8">
              <div className="border-b pb-4">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Order Summary
                </h3>
                <div className="space-y-2 text-sm">
                  {currentOrder.items.map(
                    (item: OrderData["items"][number], index: number) => (
                      <div key={index} className="flex justify-between">
                        <span className="text-gray-600">
                          {item.productName} x {item.quantity}
                        </span>
                        <span className="font-medium text-gray-900">
                          KES {item.subtotal.toLocaleString()}
                        </span>
                      </div>
                    ),
                  )}
                  <div className="flex justify-between pt-2 border-t">
                    <span className="text-gray-600">Delivery Fee</span>
                    <span className="font-medium text-gray-900">
                      KES {deliveryFee.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between font-bold text-base pt-2 border-t">
                    <span className="text-gray-900">Total</span>
                    <span className="text-blue-600">
                      KES {currentOrder.total.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Delivery Address
                </h3>
                <p className="text-sm text-gray-600">
                  {currentOrder.shippingDetails.fullName}
                  <br />
                  {currentOrder.shippingDetails.address}
                  <br />
                  {currentOrder.shippingDetails.city},{" "}
                  {currentOrder.shippingDetails.postalCode}
                  <br />
                  {currentOrder.shippingDetails.phone}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={"/account/orders"}
                className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                View My Orders
              </Link>
              <Link
                href={"/collections/all"}
                className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Forms */}
          <div className="lg:col-span-2 space-y-6">
            {/* Shipping Details */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl font-bold text-gray-900">
                  Shipping Details
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={shippingDetails.fullName}
                    onChange={(e) => handleInputChange(e)}
                    className="w-full px-3 py-2 border text-gray-500 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={shippingDetails.phone}
                    onChange={(e) => handleInputChange(e)}
                    placeholder="0712345678"
                    className="w-full px-3 py-2 border text-gray-500 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={shippingDetails.email}
                    onChange={(e) => handleInputChange(e)}
                    className="w-full px-3 py-2 border text-gray-500 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Delivery Address *
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={shippingDetails.address}
                    onChange={(e) => handleInputChange(e)}
                    placeholder="Street address, building, apartment"
                    className="w-full px-3 py-2 border text-gray-500 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City/Town *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={shippingDetails.city}
                    onChange={(e) => handleInputChange(e)}
                    className="w-full px-3 py-2 border text-gray-500 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    name="postalCode"
                    value={shippingDetails.postalCode}
                    onChange={(e) => handleInputChange(e)}
                    className="w-full px-3 py-2 border text-gray-500 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center gap-2 mb-4">
                <CreditCard className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl font-bold text-gray-900">
                  Payment Method
                </h2>
              </div>

              <div className="space-y-4">
                {/* M-Pesa Option */}
                <div
                  className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                    paymentMethod === "mpesa"
                      ? "border-blue-600 bg-blue-50"
                      : "border-gray-200"
                  }`}
                  onClick={() => setPaymentMethod("mpesa")}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      value="mpesa"
                      checked={paymentMethod === "mpesa"}
                      onChange={() => setPaymentMethod("mpesa")}
                      className="w-4 h-4 text-blue-600"
                    />
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">
                        Lipa Na M-Pesa
                      </div>
                      <div className="text-sm text-gray-600">
                        Pay using M-Pesa Paybill
                      </div>
                    </div>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/1/15/M-PESA_LOGO-01.svg"
                      alt="M-Pesa"
                      className="h-8"
                    />
                  </div>

                  {paymentMethod === "mpesa" && (
                    <div className="mt-4 pt-4 border-t space-y-4">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <h3 className="font-semibold text-green-900 mb-3">
                          M-Pesa Payment Instructions
                        </h3>
                        <ol className="text-sm text-green-800 space-y-2 list-decimal list-inside">
                          <li>Go to M-Pesa menu on your phone</li>
                          <li>Select "Lipa Na M-Pesa"</li>
                          <li>Select "Paybill"</li>
                          <li>
                            Enter Business Number:{" "}
                            <strong>{mpesaDetails.paybill}</strong>
                          </li>
                          <li>
                            Enter Account Number:{" "}
                            <strong>{mpesaDetails.accountNumber}</strong>
                          </li>
                          <li>
                            Enter Amount:{" "}
                            <strong>
                              KES {mpesaDetails.amount.toLocaleString()}
                            </strong>
                          </li>
                          <li>Enter your M-Pesa PIN</li>
                          <li>Copy the transaction code below</li>
                        </ol>
                      </div>

                      <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg">
                        <div>
                          <div className="text-xs text-gray-600 mb-1">
                            Paybill Number
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="font-bold text-gray-900">
                              {mpesaDetails.paybill}
                            </div>
                            <button
                              onClick={() =>
                                copyToClipboard(mpesaDetails.paybill)
                              }
                              className="p-1 hover:bg-gray-200 rounded"
                            >
                              {copied ? (
                                <Check className="w-4 h-4 text-green-600" />
                              ) : (
                                <Copy className="w-4 h-4 text-gray-600" />
                              )}
                            </button>
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-600 mb-1">
                            Account Number
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="font-bold text-gray-900">
                              {mpesaDetails.accountNumber}
                            </div>
                            <button
                              onClick={() =>
                                copyToClipboard(mpesaDetails.accountNumber)
                              }
                              className="p-1 hover:bg-gray-200 rounded"
                            >
                              {copied ? (
                                <Check className="w-4 h-4 text-green-600" />
                              ) : (
                                <Copy className="w-4 h-4 text-gray-600" />
                              )}
                            </button>
                          </div>
                        </div>
                        <div className="col-span-2">
                          <div className="text-xs text-gray-600 mb-1">
                            Amount to Pay
                          </div>
                          <div className="font-bold text-lg text-green-600">
                            KES {mpesaDetails.amount.toLocaleString()}
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          M-Pesa Transaction Code *
                        </label>
                        <input
                          type="text"
                          value={mpesaReference}
                          onChange={(e) => setMpesaReference(e.target.value)}
                          placeholder="e.g., QH12AB34CD"
                          className="w-full px-3 py-2 border text-gray-500 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent uppercase"
                          required
                        />
                        <p className="text-xs text-gray-500 mt-1">
                          Enter the M-Pesa confirmation code you received via
                          SMS
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Order Summary
              </h2>

              <div className="space-y-3 mb-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-gray-600">
                      {item.name} x {item.quantity}
                    </span>
                    <span className="font-medium text-gray-900">
                      KES {(item.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium text-gray-900">
                    KES {subtotal.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Delivery Fee</span>
                  <span className="font-medium text-gray-900">
                    KES {deliveryFee.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-lg font-bold border-t pt-3">
                  <span className="text-gray-900">Total</span>
                  <span className="text-blue-600">
                    KES {total.toLocaleString()}
                  </span>
                </div>
              </div>

              <button
                onClick={handlePlaceOrder}
                disabled={isPlacingOrder}
                className="w-full mt-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isPlacingOrder ? "Placing Order..." : "Place Order"}
              </button>

              <p className="text-xs text-gray-500 text-center mt-4">
                By placing this order, you agree to our Terms & Conditions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
