"use client";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comment: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("Thanks for contacting us. We'll get back to you as soon as possible.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      comment: "",
    });
  };

  return (
    <div className="bg-#1f2937 flex justify-center p-6">
      <div className="w-full max-w-3xl mb-15">
        <h1 className="text-6xl font-normal text-gray-800 mb-25 mt-10">
          Contact
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {message && (
            <p className="flex items-center gap-2 text-green-600">
              <CheckCircle size={18} />
              <span>{message}</span>
            </p>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white border border-gray-600 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition"
            />

            <input
              type="email"
              name="email"
              placeholder="Email *"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-white border border-gray-600 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition"
            />
          </div>

          <input
            type="tel"
            name="phone"
            placeholder="Phone number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-white border border-gray-600 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition"
          />

          <textarea
            name="comment"
            placeholder="Comment"
            value={formData.comment}
            onChange={handleChange}
            rows={5}
            className="w-full px-4 py-2 bg-white border border-gray-600 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition resize-none"
          />

          <button
            type="submit"
            className="px-10 py-3 bg-gradient-to-r from-pink-900 to-pink-900 text-white font-medium rounded-lg hover:from-purple-700 hover:to-purple-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 transition shadow-md hover:shadow-lg"
          >
            Send
          </button>

          <p className="text-gray-600 text-xl mt-6">
            We value your feedback. To help us enhance our service, please{" "}
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSe4pQMkamb4-Nel2lmm7EsVjOi6vESF37lnvi_7k4IAzO0-9A/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 underline font-medium"
            >
              click here
            </Link>{" "}
            to share your experience.
          </p>
        </form>
      </div>
    </div>
  );
}