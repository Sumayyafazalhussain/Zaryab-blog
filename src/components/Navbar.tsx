"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };

      setCurrentDateTime(now.toLocaleString("en-US", options));
    };

    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <header className="text-gray-900 body-font bg-white shadow-md">
      <div className="container mx-auto flex flex-wrap p-4 items-center justify-between">
        {/* Current Date and Time */}
        <div className="text-sm text-gray-500 absolute left-4 top-4">
          <span>{currentDateTime}</span>
        </div>

        {/* Blog App Heading (Center Aligned) */}
        <div className="flex justify-center items-center w-full md:w-auto py-2">
          <Link
            href="/"
            className="text-3xl text-center font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-300 transform"
          >
           Welcome to my Blog App
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="md:ml-auto flex flex-wrap items-center justify-center space-x-8 text-lg">
          <Link
            href="/"
            className="text-gray-700 hover:text-blue-600 transition-colors duration-300 transform hover:scale-105"
          >
            Home
          </Link>

          <Link
            href="/t"
            className="text-gray-700 hover:text-blue-600 transition-colors duration-300 transform hover:scale-105"
          >
            About
          </Link>

          <Link
            href="/"
            className="text-gray-700 hover:text-blue-600 transition-colors duration-300 transform hover:scale-105"
          >
            Contact
          </Link>

          {/* YouTube Button */}
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-full transition-all duration-300"
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
