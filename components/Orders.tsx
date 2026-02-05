"use client";
import { useEffect, useState } from "react";
import {
  Package,
  Calendar,
  MapPin,
  CreditCard,
  ChevronDown,
  ChevronUp,
  FileText,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/contexts/AuthContext";
import { useOrders } from "@/app/contexts/OrderContext";
import Link from "next/link";

export function Orders() {
  const router = useRouter();
  const { user } = useAuth();
  const { getUserOrders } = useOrders();
  const [orders, setOrders] = useState<any[]>([]);
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null);

  useEffect(() => {
    if (!user) {
      router.push("/account/login");
      return;
    }

    const userOrders = getUserOrders(user.id);
    setOrders(userOrders);
  }, [user, router]);

interface StatusColorMap {
    pending: string;
    confirmed: string;
    processing: string;
    shipped: string;
    delivered: string;
    cancelled: string;
}

type OrderStatus = keyof StatusColorMap;

const getStatusColor = (status: OrderStatus): string => {
    const colors: StatusColorMap = {
        pending: "bg-yellow-100 text-yellow-800 border-yellow-300",
        confirmed: "bg-blue-100 text-blue-800 border-blue-300",
        processing: "bg-purple-100 text-purple-800 border-purple-300",
        shipped: "bg-indigo-100 text-indigo-800 border-indigo-300",
        delivered: "bg-green-100 text-green-800 border-green-300",
        cancelled: "bg-red-100 text-red-800 border-red-300",
    };
    return colors[status] || colors.pending;
};

interface OrderItem {
    productName: string;
    quantity: number;
    price: number;
    subtotal: number;
}

interface ShippingDetails {
    fullName: string;
    address: string;
    city: string;
    postalCode: string;
    phone: string;
    email: string;
}

interface PaymentDetails {
    mpesaReference?: string;
}

interface Order {
    orderNumber: string;
    status: OrderStatus;
    createdAt: string;
    total: number;
    items: OrderItem[];
    subtotal: number;
    deliveryFee: number;
    shippingDetails: ShippingDetails;
    paymentMethod: string;
    paymentDetails: PaymentDetails;
}

const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });
};

const toggleOrderDetails = (orderNumber: string): void => {
    setExpandedOrder(expandedOrder === orderNumber ? null : orderNumber);
};

  return (
    <div className="min-h-screen bg-#1f2937">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Orders</h1>
          <p className="text-gray-600">View and track your orders</p>
        </div>

        {/* Orders List */}
        {orders.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No orders yet
            </h3>
            <p className="text-gray-600 mb-6">
              You haven't placed any orders yet
            </p>
            <Link
              href={"/collections/all"}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => (
              <div
                key={order.orderNumber}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                {/* Order Header */}
                <div className="p-6 border-b">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold text-gray-900">
                          Order #{order.orderNumber}
                        </h3>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(order.status)}`}
                        >
                          {order.status.charAt(0).toUpperCase() +
                            order.status.slice(1)}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(order.createdAt)}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="text-sm text-gray-600">
                          Total Amount
                        </div>
                        <div className="text-xl font-bold text-blue-600">
                          KES {order.total.toLocaleString()}
                        </div>
                      </div>

                      <button
                        onClick={() => toggleOrderDetails(order.orderNumber)}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                      >
                        {expandedOrder === order.orderNumber ? (
                          <ChevronUp className="w-6 h-6 text-gray-600" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-gray-600" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Order Items Preview */}
                <div className="px-6 py-4 bg-gray-50">
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <Package className="w-4 h-4" />
                    <span>
                      {order.items.length}{" "}
                      {order.items.length === 1 ? "item" : "items"}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {order.items
                      .slice(0, 3)
                      .map((item: OrderItem, index: number) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-700"
                        >
                          {item.productName} x {item.quantity}
                        </span>
                      ))}
                    {order.items.length > 3 && (
                      <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-500">
                        +{order.items.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Expanded Order Details */}
                {expandedOrder === order.orderNumber && (
                  <div className="p-6 border-t space-y-6">
                    {/* Items Detail */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <FileText className="w-5 h-5 text-blue-600" />
                        Order Items
                      </h4>
                      <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                        {order.items.map((item: OrderItem, index: number) => (
                          <div
                            key={index}
                            className="flex justify-between items-center"
                          >
                            <div className="flex-1">
                              <div className="font-medium text-gray-900">
                                {item.productName}
                              </div>
                              <div className="text-sm text-gray-600">
                                Quantity: {item.quantity} × KES{" "}
                                {item.price.toLocaleString()}
                              </div>
                            </div>
                            <div className="font-semibold text-gray-900">
                              KES {item.subtotal.toLocaleString()}
                            </div>
                          </div>
                        ))}
                        <div className="border-t pt-3 space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Subtotal</span>
                            <span className="font-medium text-gray-900">
                              KES {order.subtotal.toLocaleString()}
                            </span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Delivery Fee</span>
                            <span className="font-medium text-gray-900">
                              KES {order.deliveryFee.toLocaleString()}
                            </span>
                          </div>
                          <div className="flex justify-between text-base font-bold border-t pt-2">
                            <span className="text-gray-900">Total</span>
                            <span className="text-blue-600">
                              KES {order.total.toLocaleString()}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Shipping Details */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-blue-600" />
                        Shipping Address
                      </h4>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-gray-900 font-medium">
                          {order.shippingDetails.fullName}
                        </p>
                        <p className="text-gray-600 text-sm mt-1">
                          {order.shippingDetails.address}
                          <br />
                          {order.shippingDetails.city},{" "}
                          {order.shippingDetails.postalCode}
                          <br />
                          Phone: {order.shippingDetails.phone}
                          <br />
                          Email: {order.shippingDetails.email}
                        </p>
                      </div>
                    </div>

                    {/* Payment Details */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <CreditCard className="w-5 h-5 text-blue-600" />
                        Payment Information
                      </h4>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-600">Payment Method</span>
                          <span className="font-medium text-gray-900 capitalize">
                            {order.paymentMethod === "mpesa"
                              ? "M-Pesa"
                              : order.paymentMethod}
                          </span>
                        </div>
                        {order.paymentMethod === "mpesa" &&
                          order.paymentDetails.mpesaReference && (
                            <div className="flex justify-between items-center">
                              <span className="text-gray-600">
                                Transaction Code
                              </span>
                              <span className="font-mono text-gray-900 font-medium">
                                {order.paymentDetails.mpesaReference}
                              </span>
                            </div>
                          )}
                      </div>
                    </div>

                    {/* Actions */}
                    {/* <div className="flex gap-3 pt-4">
                      <button className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                        Track Order
                      </button>
                      <button className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                        Contact Support
                      </button>
                    </div> */}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}