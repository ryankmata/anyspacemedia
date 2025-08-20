"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [openSpace, setOpenSpace] = useState(false);

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

          {/* Right-Side */}
          <div className="hidden md:flex space-x-6">
            <div className="flex flex-col h-full items-end space-y-3">
              {/* Social Media */}
              <div className="flex space-x-4">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="bg-white p-0.25 rounded-sm hover:bg-[#FFD700] transition tracking-wide hover:scale-105"
                >
                  <FaFacebookF size={14} />
                </a>
                <span className="text-white/50 font-black text-xs">|</span>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="bg-white p-0.25 rounded-sm hover:bg-[#FFD700] transition tracking-wide hover:scale-105"
                >
                  <FaInstagram size={14} />
                </a>
              </div>
              {/* Menu Options */}
              <div className="flex space-x-4">
                <Link
                  href="/"
                  onClick={closeAll}
                  className={`${
                    pathname === "/" ? "text-[#FFD700]" : "text-white/90"
                  } font-black text-xs hover:text-[#FFD700] transition tracking-wide hover:scale-105`}
                >
                  HOME
                </Link>

                <span className="text-white/50 font-black text-xs">|</span>
                <Link
                  href={isHome ? "#choose_your_space" : "/#choose_your_space"}
                  onClick={closeAll}
                  className={`${
                    pathname === "/choose_your_space"
                      ? "text-[#FFD700]"
                      : "text-white/90"
                  } font-black text-xs hover:text-[#FFD700] transition tracking-wide hover:scale-105`}
                >
                  CHOOSE YOUR SPACE
                </Link>
                <span className="text-white/50 font-black text-xs">|</span>
                <Link
                  href={isHome ? "about" : "/about"}
                  onClick={closeAll}
                  className={`${
                    pathname === "/about" ? "text-[#FFD700]" : "text-white/90"
                  } font-black text-xs hover:text-[#FFD700] transition tracking-wide hover:scale-105`}
                >
                  ABOUT
                </Link>
                <span className="text-white/50 font-black text-xs">|</span>
                <Link
                  href={isHome ? "contact" : "/contact"}
                  onClick={closeAll}
                  className={`${
                    pathname === "/contact" ? "text-[#FFD700]" : "text-white/90"
                  } font-black text-xs hover:text-[#FFD700] transition tracking-wide hover:scale-105`}
                >
                  CONTACT US
                </Link>
              </div>
            </div>
            {/* Vertical divider */}
            <div className="h-10 w-px bg-white/50"></div>

            {/* Desktop hamburger toggles a RIGHT slide-in panel */}
            <button
              onClick={() => setIsDesktopMenuOpen((v) => !v)}
              className="inline-flex items-center justify-center py-1 px-4 ml-4 mr-12 rounded-md text-white hover:text-[#FFD700] hover:bg-[#FFD700]/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#FFD700] transition-colors"
              aria-expanded={isDesktopMenuOpen}
              aria-controls="desktop-menu-panel"
              aria-label="Open desktop menu"
            >
              <span className="sr-only">Open desktop menu</span>
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`block h-0.5 w-12 bg-current transition ${
                    isDesktopMenuOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-12 bg-current transition mt-1 ${
                    isDesktopMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-12 bg-current transition mt-1 ${
                    isDesktopMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                />
              </div>
            </button>
          </div>

          {/* Desktop slide-in panel (right to left) */}
          <div
            id="desktop-menu-panel"
            className={`absolute top-0 right-0 h-screen w-150 bg-black/80 backdrop-blur-sm shadow-xl transform transition-transform duration-750 ease-in-out
            ${isDesktopMenuOpen ? "translate-x-0" : "translate-x-full"}`}
          >
            {/* Close "X" in the top-right */}
            <button
              onClick={() => setIsDesktopMenuOpen(false)}
              aria-label="Close menu"
              className="absolute top-3 right-3 p-2 rounded-md text-white hover:text-[#FFD700] hover:bg-[#FFD700]/10 focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
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
            {/* Menu Options */}
            <div className="px-4 pt-4 pb-6 space-y-1">
              <Link
                href="/"
                onClick={closeAll}
                className={`block px-3 py-3 ${
                  pathname === "/" ? "text-[#FFD700]" : "text-white/90"
                } hover:text-[#FFD700] hover:bg-[#FFD700]/5 font-bold tracking-wider border-b border-[#FFD700]/10`}
              >
                HOME
              </Link>
              <Link
                href={isHome ? "services" : "/services"}
                onClick={closeAll}
                className={`block  ${
                  pathname === "/choose-your-space"
                    ? "text-[#FFD700]"
                    : "text-white/90"
                } hover:text-[#FFD700] hover:bg-[#FFD700]/5 font-bold tracking-wider border-b border-[#FFD700]/10`}
              >
                <div
                  className="relative"
                  onMouseEnter={() => setOpenSpace(true)}
                  onMouseLeave={() => setOpenSpace(false)}
                >
                  {/* Trigger (click for mobile, hover for desktop) */}
                  <div className="flex flex-row items-center">
                    <button
                      onClick={() => setOpenSpace((v) => !v)}
                      className={`w-full text-left px-3 py-3 ${
                        pathname.startsWith("/spaces")
                          ? "text-[#FFD700]"
                          : "text-white/90"
                      } hover:text-[#FFD700]`}
                    >
                      CHOOSE YOUR SPACE
                    </button>
                    <span className="px-4">+</span>
                  </div>
                  {/* Submenu */}
                  <div
                    className={`overflow-hidden transition-all duration-800 ${
                      openSpace ? "max-h-60" : "max-h-0"
                    }`}
                  >
                    <div className="flex flex-col">
                      <Link
                        href="/spaces/commercial"
                        className="px-6 py-2 text-white hover:text-[#FFD700]"
                      >
                        Architecture & Design
                      </Link>
                      <Link
                        href="/spaces/real-estate"
                        className="px-6 py-2 text-white hover:text-[#FFD700]"
                      >
                        Automotive
                      </Link>
                      <Link
                        href="/spaces/architecture"
                        className="px-6 py-2 text-white hover:text-[#FFD700]"
                      >
                        Commercial
                      </Link>
                      <Link
                        href="/spaces/architecture"
                        className="px-6 py-2 text-white hover:text-[#FFD700]"
                      >
                        Real Estate
                      </Link>
                      <Link
                        href="/spaces/architecture"
                        className="px-6 py-2 mb-2 text-white hover:text-[#FFD700]"
                      >
                        RV & Marine
                      </Link>
                    </div>
                  </div>
                </div>
              </Link>
              <Link
                href={isHome ? "about" : "/about"}
                onClick={closeAll}
                className={`block px-3 py-3 ${
                  pathname === "/about" ? "text-[#FFD700]" : "text-white/90"
                } hover:text-[#FFD700] hover:bg-[#FFD700]/5 font-bold tracking-wider border-b border-[#FFD700]/10`}
              >
                ABOUT
              </Link>

              <Link
                href={isHome ? "process" : "/process"}
                onClick={closeAll}
                className={`block px-3 py-3 ${
                  pathname === "/contact" ? "text-[#FFD700]" : "text-white/90"
                } hover:text-[#FFD700] hover:bg-[#FFD700]/5 font-bold tracking-wider border-b border-[#FFD700]/10`}
              >
                CONTACT US
              </Link>
              <Link
                href={isHome ? "why-us" : "/why-us"}
                onClick={closeAll}
                className={`block px-3 py-3 ${
                  pathname === "/why-us" ? "text-[#FFD700]" : "text-white/90"
                } hover:text-[#FFD700] hover:bg-[#FFD700]/5 font-bold tracking-wider border-b border-[#FFD700]/10`}
              >
                WHY US
              </Link>
              <Link
                href={isHome ? "contact" : "/contact"}
                onClick={closeAll}
                className={`block px-3 py-3 ${
                  pathname === "/contact" ? "text-[#FFD700]" : "text-white/90"
                } hover:text-[#FFD700] hover:bg-[#FFD700]/5 font-bold tracking-wider border-b border-[#FFD700]/10`}
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
