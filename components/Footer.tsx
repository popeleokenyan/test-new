'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export function Footer() {
  const [email, setEmail] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('Kenya | KES KSh');
   const [message, setMessage] = useState("");

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage(
      "Thanks for subscribing.",
    );
    setEmail('');
  };

  const socialLinks: any = [
    {
      name: 'Facebook',
      url: 'https://facebook.com/royalmabati',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/royalmabati',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/royalmabati',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      name: 'TikTok',
      url: 'https://tiktok.com/@royalmabati',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
        </svg>
      ),
    },
  ];

  const footerLinks = [
    { name: 'Refund policy', href: '/refund-policy' },
    { name: 'Privacy policy', href: '/privacy-policy' },
    { name: 'Terms of service', href: '/terms-of-service' },
    { name: 'Shipping policy', href: '/shipping-policy' },
    { name: 'Contact information', href: '/contact' },
    { name: 'Cookie preferences', href: '/cookie-preferences' },
  ];

  return (
    <footer className="relative bg-gradient-to-r from-lime-100 via-pink-50 to-yellow-100">
      {/* Wavy Top Border */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-16 md:h-24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            className="fill-gray-900"
          ></path>
        </svg>
      </div>

      {/* Main Footer Content */}
      <div className="relative pt-24 md:pt-32 pb-12 px-4">
        <div className="container mx-auto max-w-9xl">
          {/* Newsletter Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-4xl lg:text-5xl font-normal text-gray-800 mb-4">
              Stay Informed with Apex beyond Mabati
            </h2>
            <p className="text-gray-600 text-base md:text-lg mb-8 max-w-2xl mx-auto">
              Join our mailing list to receive the latest updates, exclusive
              offers, and expert roofing tips directly to your inbox
            </p>

            {/* Email Subscription Form */}
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto mb-12">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                  className="w-full px-6 py-4 pr-12 rounded-xl border-2 border-lime-400 bg-lime-50 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-lime-500 transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-900 transition-colors p-2"
                  aria-label="Subscribe"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
              {message && (
                <p className="flex items-center gap-2 mt-4 text-green-600">
                  <CheckCircle size={18} />
                  <span>{message}</span>
                </p>
              )}
            </form>

            {/* Social Media Links */}
            <div className="flex items-center justify-center gap-6 mb-12">
              {socialLinks.map((social: any) => (
                <Link
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Divider Line */}
          <hr className="border-gray-300 mb-8" />

          {/* Bottom Section */}
          <div className="flex flex-col gap-6">
            {/* Country Selector */}
            <div className="flex flex-col items-center lg:items-start">
              <label
                htmlFor="country-select"
                className="text-sm text-gray-600 mb-2"
              >
                Country/region
              </label>
              <select
                id="country-select"
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="px-6 py-3 rounded-xl border-2 border-lime-400 bg-lime-50 text-gray-800 focus:outline-none focus:border-lime-500 transition-colors cursor-pointer"
              >
                <option value="Kenya | KES KSh">Kenya | KES KSh</option>
                <option value="Uganda | UGX USh">Uganda | UGX USh</option>
                <option value="Tanzania | TZS TSh">Tanzania | TZS TSh</option>
              </select>
            </div>

            {/* Footer Links and Copyright */}
            <div className="flex flex-col items-center lg:items-start gap-4">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-sm text-gray-600">
                <span>© 2025, Apex beyond Mabati</span>
                {footerLinks.map((link, index) => (
                  <span key={link.name} className="flex items-center gap-2">
                    <span>·</span>
                    <Link
                      href={link.href}
                      className="hover:text-gray-900 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}