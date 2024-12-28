"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: "short",
        year: "2-digit",
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };

      setCurrentDateTime(now.toLocaleString("en-GB", options));
    };

    updateDateTime();
    const intervalId = setInterval(updateDateTime, 500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <header className="bg-gradient-to-r from-gray-50 to-gray-200 shadow-lg">
      <div className="container mx-auto flex flex-wrap p-5 items-center justify-between relative">
        {/* Current Date and Time */}
        <div className="text-xs text-gray-700 absolute top-3 left-4 italic">
          <span>{currentDateTime}</span>
        </div>

        {/* App Title */}
        <div className="flex justify-center items-center w-full md:w-auto">
          <Link
            href="/"
            className="text-2xl md:text-3xl font-bold text-center text-gray-800 hover:text-purple-600 transition-all duration-300"
          >
            My Unique Blog Space
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="md:ml-auto flex flex-wrap items-center justify-center gap-6 text-base">
          <Link
            href="/"
            className="text-gray-800 hover:text-purple-600 transition-transform duration-300 hover:scale-110"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-gray-800 hover:text-purple-600 transition-transform duration-300 hover:scale-110"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="text-gray-800 hover:text-purple-600 transition-transform duration-300 hover:scale-110"
          >
            Contact
          </Link>

          {/* YouTube Button */}
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-gradient-to-r from-red-500 to-red-700 text-white px-4 py-2 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-5 h-5 mr-2"
              viewBox="0 0 24 24"
            >
              <path d="M23.49 6.14c-.27-1.03-1.03-1.83-2.03-2.1-1.73-.38-8.7-.38-8.7-.38s-6.97 0-8.7.38c-.99.27-1.75 1.07-2.03 2.1-.38 1.73-.38 5.73-.38 5.73s0 4 .38 5.73c.27 1.03 1.03 1.83 2.03 2.1 1.73.38 8.7.38 8.7.38s6.97 0 8.7-.38c.99-.27 1.75-1.07 2.03-2.1.38-1.73.38-5.73.38-5.73s0-4-.38-5.73zM9.87 14.12V9.88l5.63 2.12-5.63 2.12z"></path>
            </svg>
            YouTube
          </a>
        </nav>
      </div>
    </header>
  );
}
