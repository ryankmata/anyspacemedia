"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="fixed z-10 w-full bg-gradient-to-b from-black to-transparent">
        <div className="flex items-center justify-between px-6 py-4 md:px-12">
          {/* Logo */}
          <div className="relative mx-10 w-[80px] h-[80px]">
            <Link href="/">
              <Image src="/logo.png" alt="Any Space Media Logo" fill />
            </Link>
          </div>

          {/* Menu Items */}
          <ul className="hidden md:flex items-center space-x-8">
            <li>
              <a
                href="#home"
                className="text-[#f1b01d] hover:text-white transition-all duration-300 font-medium tracking-wide hover:scale-105"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-white/90 hover:text-white transition-all duration-300 font-medium tracking-wide hover:scale-105"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-white/90 hover:text-white transition-all duration-300 font-medium tracking-wide hover:scale-105 border border-white/30 px-4 py-2 rounded-full hover:bg-white/10 hover:border-white/60"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white p-2">
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
