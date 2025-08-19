"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeAll = () => {
    setIsDesktopMenuOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={`hidden md:block fixed z-10 w-full transition-colors
        ${
          isScrolled
            ? "bg-black/70"
            : "bg-gradient-to-b from-black to-transparent"
        }`}
      >
        <div className="relative flex items-center justify-between px-6 py-4 md:px-12">
          {/* Logo */}
          <div className="relative mx-10 w-[80px] h-[80px]">
            <Link href="/" onClick={closeAll}>
              <Image src="/logo.png" alt="Any Space Media Logo" fill />
            </Link>
          </div>

          {/* Primary links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              onClick={closeAll}
              className="text-[#f1b01d] hover:text-white transition font-medium tracking-wide hover:scale-105"
            >
              HOME
            </Link>
            <Link
              href={isHome ? "about" : "/about"}
              onClick={closeAll}
              className="text-white/90 hover:text-white transition font-medium tracking-wide hover:scale-105"
            >
              ABOUT
            </Link>
            <Link
              href={isHome ? "choose_your_space" : "/choose_your_space"}
              onClick={closeAll}
              className="text-white/90 hover:text-white transition font-medium tracking-wide hover:scale-105"
            >
              CHOOSE YOUR SPACE
            </Link>
            <Link
              href={isHome ? "contact" : "/contact"}
              onClick={closeAll}
              className="text-white/90 hover:text-white transition font-medium tracking-wide hover:scale-105"
            >
              CONTACT US
            </Link>

            {/* Desktop hamburger toggles a RIGHT slide-in panel */}
            <button
              onClick={() => setIsDesktopMenuOpen((v) => !v)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#FFD700] hover:bg-[#FFD700]/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#036670] transition-colors"
              aria-expanded={isDesktopMenuOpen}
              aria-controls="desktop-menu-panel"
              aria-label="Open desktop menu"
            >
              <span className="sr-only">Open desktop menu</span>
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`block h-0.5 w-6 bg-current transition ${
                    isDesktopMenuOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-current transition mt-1 ${
                    isDesktopMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-current transition mt-1 ${
                    isDesktopMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                />
              </div>
            </button>
          </div>

          {/* Desktop slide-in panel (right to left) */}
          <div
            id="desktop-menu-panel"
            className={`absolute top-0 right-0 h-screen w-72 bg-[#efe8deff] backdrop-blur-sm shadow-xl transform transition-transform duration-300 ease-in-out
            ${isDesktopMenuOpen ? "translate-x-0" : "translate-x-full"}`}
          >
            {/* Close "X" in the top-right */}
            <button
              onClick={() => setIsDesktopMenuOpen(false)}
              aria-label="Close menu"
              className="absolute top-3 right-3 p-2 rounded-md text-[#036670] hover:text-[#00a5b7] hover:bg-[#036670]/10 focus:outline-none focus:ring-2 focus:ring-[#036670]"
            >
              {/* X icon */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M18 6L6 18M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <span className="sr-only">Close</span>
            </button>
            <div className="px-4 pt-4 pb-6 space-y-1">
              <Link
                href="/"
                onClick={closeAll}
                className="block px-3 py-3 text-[#036670] hover:text-[#00a5b7] hover:bg-[#036670]/5 font-bold tracking-wider border-b border-[#036670]/10"
              >
                HOME
              </Link>
              <Link
                href={isHome ? "about" : "/about"}
                onClick={closeAll}
                className="block px-3 py-3 text-[#036670] hover:text-[#00a5b7] hover:bg-[#036670]/5 font-bold tracking-wider border-b border-[#036670]/10"
              >
                ABOUT
              </Link>
              <Link
                href={isHome ? "services" : "/services"}
                onClick={closeAll}
                className="block px-3 py-3 text-[#036670] hover:text-[#00a5b7] hover:bg-[#036670]/5 font-bold tracking-wider border-b border-[#036670]/10"
              >
                SERVICES
              </Link>
              <Link
                href={isHome ? "process" : "/process"}
                onClick={closeAll}
                className="block px-3 py-3 text-[#036670] hover:text-[#00a5b7] hover:bg-[#036670]/5 font-bold tracking-wider border-b border-[#036670]/10"
              >
                PROCESS
              </Link>
              <Link
                href={isHome ? "why-us" : "/why-us"}
                onClick={closeAll}
                className="block px-3 py-3 text-[#036670] hover:text-[#00a5b7] hover:bg-[#036670]/5 font-bold tracking-wider border-b border-[#036670]/10"
              >
                WHY US
              </Link>
              <Link
                href={isHome ? "contact" : "/contact"}
                onClick={closeAll}
                className="block px-3 py-3 text-[#036670] hover:text-[#00a5b7] hover:bg-[#036670]/5 font-bold tracking-wider"
              >
                CONTACT
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-[#efe8deff] backdrop-blur-sm shadow-xl">
        <div className="px-4 sm:px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <Link href="/" onClick={closeAll}>
                <Image
                  src="/strategicfinds_logohorizontal_teal.svg" // replace for ASM
                  alt="Any Space Media"
                  width={140}
                  height={140}
                  className="object-contain"
                />
              </Link>
            </div>

            {/* Mobile hamburger toggles a TOP dropdown */}
            <button
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#036670] hover:text-[#00a5b7] hover:bg-[#036670]/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#036670] transition-colors"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu-panel"
              aria-label="Open mobile menu"
            >
              <span className="sr-only">Open mobile menu</span>
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`block h-0.5 w-6 bg-current transition ${
                    isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-current transition mt-1 ${
                    isMobileMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-current transition mt-1 ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <div
          id="mobile-menu-panel"
          className={`absolute top-full left-0 right-0 bg-[#efe8deff] backdrop-blur-sm shadow-xl transform transition-all duration-300 ease-in-out origin-top
          ${
            isMobileMenuOpen
              ? "scale-y-100 opacity-100"
              : "scale-y-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="px-4 pt-2 pb-6 space-y-1">
            <Link
              href="/"
              onClick={closeAll}
              className="block px-3 py-3 text-[#036670] hover:text-[#00a5b7] hover:bg-[#036670]/5 font-bold tracking-wider border-b border-[#036670]/10"
            >
              HOME
            </Link>
            <Link
              href={isHome ? "about" : "/about"}
              onClick={closeAll}
              className="block px-3 py-3 text-[#036670] hover:text-[#00a5b7] hover:bg-[#036670]/5 font-bold tracking-wider border-b border-[#036670]/10"
            >
              ABOUT
            </Link>
            <Link
              href={isHome ? "services" : "/services"}
              onClick={closeAll}
              className="block px-3 py-3 text-[#036670] hover:text-[#00a5b7] hover:bg-[#036670]/5 font-bold tracking-wider border-b border-[#036670]/10"
            >
              SERVICES
            </Link>
            <Link
              href={isHome ? "process" : "/process"}
              onClick={closeAll}
              className="block px-3 py-3 text-[#036670] hover:text-[#00a5b7] hover:bg-[#036670]/5 font-bold tracking-wider border-b border-[#036670]/10"
            >
              PROCESS
            </Link>
            <Link
              href={isHome ? "why-us" : "/why-us"}
              onClick={closeAll}
              className="block px-3 py-3 text-[#036670] hover:text-[#00a5b7] hover:bg-[#036670]/5 font-bold tracking-wider border-b border-[#036670]/10"
            >
              WHY US
            </Link>
            <Link
              href={isHome ? "contact" : "/contact"}
              onClick={closeAll}
              className="block px-3 py-3 text-[#036670] hover:text-[#00a5b7] hover:bg-[#036670]/5 font-bold tracking-wider"
            >
              CONTACT
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
