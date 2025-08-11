"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-white shadow">
      {/* Top Bar */}
      <div className="container mx-auto grid grid-cols-2 lg:grid-cols-3 px-4 py-4">
        <Link href="/" className="hover:text-blue-600 font-bold text-lg">
          LOGO: Sahara
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden justify-self-end"
          onClick={() => setMobile(!mobile)}
          aria-label="Toggle Menu"
        >
          {mobile ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Nav */}
        <div className="hidden mx-auto lg:block space-x-6 items-center">
          <Link href="/">Home</Link>
          <Link href="/about" className="hover:text-blue-600">
            About Us
          </Link>
          <Link href="/services" className="hover:text-blue-600">
            Services
          </Link>
          <Link href="/pricing" className="hover:text-blue-600">
            Pricing
          </Link>
        </div>
        <div className="hidden lg:block col-start-3 justify-self-end space-x-4">
          <Link href="/login" className="bg-black text-white px-4 py-2 rounded">
            Log In
          </Link>
          <Link href="/signup" className="hover:text-blue-600">
            Sign Up
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobile && (
        <div className="md:hidden grid bg-white shadow-md px-4 py-4 space-y-4 animate-slide-down">
          <Link href="/" onClick={() => setMobile(false)}>
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-blue-600"
            onClick={() => setMobile(false)}
          >
            About Us
          </Link>
          <Link
            href="/services"
            className="hover:text-blue-600"
            onClick={() => setMobile(false)}
          >
            Services
          </Link>
          <Link
            href="/pricing"
            className="hover:text-blue-600"
            onClick={() => setMobile(false)}
          >
            Pricing
          </Link>
          <div className="flex flex-col space-y-2">
            <Link
              href="/login"
              className="bg-black text-white px-4 py-2 rounded-full text-center"
              onClick={() => setMobile(false)}
            >
              Log In
            </Link>
            <Link
              href="/signup"
              className="hover:text-blue-600 bg-gray-400 px-4 py-2 rounded-full text-center"
              onClick={() => setMobile(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
