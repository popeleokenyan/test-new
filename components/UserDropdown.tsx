"use client";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export function UserDropdown({ user, logout }: any) {
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsUserDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div ref={dropdownRef} className="hidden lg:flex relative text-gray-800">
      <button
        onClick={() => setIsUserDropdownOpen((prev) => !prev)}
        className="flex items-center gap-1 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
      >
        {user.name} <ChevronDown className="w-4 h-4" />
      </button>

      {isUserDropdownOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg border border-gray-200 z-50">
          <Link
            href="/account/orders"
            onClick={() => setIsUserDropdownOpen(false)}
            className="block w-full text-left px-4 py-2 text-black hover:bg-gray-50 rounded-lg"
          >
            My Orders
          </Link>
          <button
            onClick={() => {
              logout();
              setIsUserDropdownOpen(false);
            }}
            className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}