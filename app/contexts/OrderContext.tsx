"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

// --- Types ---

export type OrderStatus =
  | "pending"
  | "confirmed"
  | "processing"
  | "shipped"
  | "delivered"
  | "cancelled";

export interface OrderItem {
  id: string | number;
  name: string;
  price: number;
  quantity: number;
  [key: string]: any; // for extra product info
}

export interface Order {
  orderNumber: string;
  userId: string;
  items: OrderItem[];
  total: number;
  status: OrderStatus;
  createdAt: string;
  updatedAt?: string;
  [key: string]: any; // any extra info
}

interface OrderContextType {
  orders: Order[];
  createOrder: (
    orderData: Omit<
      Order,
      "orderNumber" | "createdAt" | "status" | "updatedAt"
    >,
  ) => Order;
  updateOrderStatus: (orderNumber: string, status: OrderStatus) => void;
  getOrderByNumber: (orderNumber: string) => Order | undefined;
  getUserOrders: (userId: string) => Order[];
  generateOrderNumber: () => string;
}

interface OrderProviderProps {
  children: ReactNode;
}

// --- Context ---

const OrderContext = createContext<OrderContextType | null>(null);

// --- Provider ---

export function OrderProvider({ children }: OrderProviderProps) {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const storedOrders = localStorage.getItem("orders");
    if (storedOrders) {
      try {
        setOrders(JSON.parse(storedOrders));
      } catch (error) {
        console.error("Failed to parse orders from localStorage", error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  const generateOrderNumber = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const random = Math.floor(10000 + Math.random() * 90000);
    return `APEX-${year}${month}${day}-${random}`;
  };

  const createOrder = (
    orderData: Omit<
      Order,
      "orderNumber" | "createdAt" | "status" | "updatedAt"
    >,
  ): Order => {
    const orderNumber = generateOrderNumber();
    const newOrder: Order = {
      userId: orderData.userId,
      items: orderData.items,
      total: orderData.total,
      ...orderData,
      orderNumber,
      createdAt: new Date().toISOString(),
      status: "pending",
    };
    setOrders((prevOrders) => [newOrder, ...prevOrders]);
    return newOrder;
  };

  const updateOrderStatus = (orderNumber: string, status: OrderStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.orderNumber === orderNumber
          ? { ...order, status, updatedAt: new Date().toISOString() }
          : order,
      ),
    );
  };

  const getOrderByNumber = (orderNumber: string) =>
    orders.find((order) => order.orderNumber === orderNumber);

  const getUserOrders = (userId: string) =>
    orders.filter((order) => order.userId === userId);

  return (
    <OrderContext.Provider
      value={{
        orders,
        createOrder,
        updateOrderStatus,
        getOrderByNumber,
        getUserOrders,
        generateOrderNumber,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

// --- Hook ---

export function useOrders() {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrders must be used within an OrderProvider");
  }
  return context;
}
