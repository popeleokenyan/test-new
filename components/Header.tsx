"use client";

import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useCart } from "@/app/contexts/CartContext";
import { useAuth } from "@/app/contexts/AuthContext";
import { UserDropdown } from "./UserDropdown";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const { getCartCount } = useCart();
  const count = getCartCount();

  const navigationLinks = [
    { name: "HOME", href: "/" },
    { name: "PRODUCTS", href: "/collections/all" },
    { name: "BLOG", href: "/blogs/news" },
    { name: "CONTACT", href: "/pages/contact" },
    { name: "ABOUT US", href: "/pages/about-us" },
    { name: "WARRANTY", href: "/pages/warranty" },
  ];

  return (
    <header className="bg-white shadow">
      <div className="px-6">
        <div className="flex h-20 items-center justify-between relative">
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Logo */}
          <div className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 flex items-center">
            <div className="relative h-16 w-16 rounded-lg overflow-hidden">
              <Link href="/">
                <Image
                  src="https://www.royalmabati.com/cdn/shop/files/Asset_45.png?v=1718101941&width=200"
                  alt="Logo"
                  fill
                  className="object-contain p-1"
                  priority
                />
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigationLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-bold uppercase tracking-wide  transition-colors ${
                    isActive
                      ? "text-cyan-500"
                      : "text-gray-800 hover:text-cyan-500"
                  }`}
                  style={{ fontSize: "10px" }}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Cart Icon */}
          <div className="flex items-center gap-4">
            {/* Desktop Auth Buttons */}
            {!user && (
              <div className="hidden lg:flex items-center gap-3">
                <Link
                  href="/account/login"
                  className="px-4 py-2 rounded-full border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  Login
                </Link>
                <Link
                  href="/account/register"
                  className="px-5 py-2 rounded-full bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  Register
                </Link>
              </div>
            )}

            {/* User Dropdown for Desktop */}
            {user && <UserDropdown user={user} logout={logout} />}

            {/* Cart Icon - Same for all */}
            <Link href="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 cursor-pointer text-gray-800 hover:text-cyan-500" />
              {count > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {count}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            {navigationLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-bold uppercase tracking-wide pb-2 transition-colors ${
                    isActive
                      ? "text-cyan-500"
                      : "text-gray-800 hover:text-cyan-500"
                  }`}
                  style={{ fontSize: "10px" }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* Auth Buttons for Mobile */}
            {user ? (
              <div className="flex flex-col border-t pt-4">
                <span className="py-2 text-gray-700 font-medium">
                  Hello, {user.name}
                </span>
                <Link
                  href="/account/orders"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-left px-4 py-2 text-black hover:bg-red-50 rounded-lg"
                >
                  My Orders
                </Link>
                <button
                  onClick={() => {
                    logout();
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex flex-col border-t pt-4 space-y-2">
                <Link
                  href="/account/login"
                  className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/account/register"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}