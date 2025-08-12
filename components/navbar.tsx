"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Inter } from "next/font/google";
const interSans = Inter({
  subsets: ["latin"],
});

export const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  const pathname = usePathname();

  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About Us",
      href: "/about",
    },
    {
      name: "Services",
      href: "/services",
    },
    {
      name: "Pricing",
      href: "/pricing",
    },
    {
      name: "Gallery",
      href: "/gallery",
    },
  ];

  return (
    <nav
      className={`sticky top-0 bg-transparent z-50 mx-10 ${interSans.className}`}
    >
      {/* Top Bar */}
      <div className="lg:grid-cols-5 mx-auto grid grid-cols-2 items-center px-4 py-4">
        <Link
          href="/"
          className="hover:text-blue-600 text-white font-bold text-lg"
        >
          LOGO: Sahara
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden justify-self-end"
          onClick={() => setMobile(true)}
          aria-label="Open Menu"
        >
          <Menu size={28} className="text-white cursor-pointer" />
        </button>

        {/* Desktop Nav */}
        <div className="hidden lg:block mx-auto items-center col-span-3 text-sm text-thin space-x-12">
          {links.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                className={
                  isActive
                    ? "px-4 py-2 bg-white rounded-full"
                    : "text-white hover:text-blue-600"
                }
                href={item.href}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
        <div className="hidden lg:block col-start-5 justify-self-end text-sm text-thin items-center space-x-4">
          <Link
            href="/login"
            className="text-white px-4 py-2 rounded-full hover:bg-gray-200/20"
          >
            Log In
          </Link>
          <Link
            href="/signup"
            className="px-4 py-2 bg-blur border text-white rounded-full hover:bg-white/20"
          >
            Sign Up
          </Link>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobile && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          onClick={() => setMobile(false)}
        />
      )}

      {/* Mobile Side Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          mobile ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={() => setMobile(false)} aria-label="Close Menu">
            <X size={28} />
          </button>
        </div>

        {/* Menu Links */}
        <div className="flex flex-col px-6 space-y-4">
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
          <Link
            href="/login"
            className="bg-black text-white px-4 py-2 rounded text-center"
            onClick={() => setMobile(false)}
          >
            Log In
          </Link>
          <Link
            href="/signup"
            className="hover:text-blue-600 text-center"
            onClick={() => setMobile(false)}
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};
