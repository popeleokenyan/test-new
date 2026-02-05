import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TrustIcon } from "@/components/TrustIcons";
import { CartProvider } from "./contexts/CartContext";
import { AuthProvider } from "./contexts/AuthContext";
import { OrderProvider } from "./contexts/OrderContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Apex beyond Mabati - Quality Roofing Solutions in Kenya",
  description:
    "Your trusted source for quality roofing sheets and affordable mabati in Kenya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <AuthProvider>
          <OrderProvider>
          <CartProvider>
            <Header />
            <main>{children}</main>
            </CartProvider>
            </OrderProvider>
        </AuthProvider>
        {/* Trust Icons Row */}
        <h2 className="text-lg font-normal text-gray-900 text-center mb-2">
          Why Customers Trust Apex beyond Mabati
        </h2>
        <TrustIcon />
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}