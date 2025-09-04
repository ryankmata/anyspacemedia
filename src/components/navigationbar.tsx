"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { SPACES } from "@/lib/constants";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [openSpace, setOpenSpace] = useState(false);
  const spacePaths = [
    SPACES.ArchitectureDesign.link,
    SPACES.Automotive.link,
    SPACES.SmallBusinessCommercial.link,
    SPACES.RealEstate.link,
    SPACES.RVMarine.link,
  ];
  const isSpaceActive = spacePaths.some(
    (p) => pathname === p || pathname.startsWith(p + "/")
  );

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Auto-close menus when pathname changes
  useEffect(() => {
    setIsDesktopMenuOpen(false);
    setIsMobileMenuOpen(false);
    setOpenSpace(false);
  }, [pathname]);

  const closeAll = () => {
    setIsDesktopMenuOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={`hidden md:block z-10 fixed w-full transition duration-1000
        ${
          isScrolled
            ? "bg-black/85"
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
                  className="bg-white p-0.25 rounded-sm hover:bg-[#EDC577] transition tracking-wide hover:scale-105"
                >
                  <FaFacebookF size={14} />
                </a>
                <span className="text-white/50 font-black text-xs">|</span>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="bg-white p-0.25 rounded-sm hover:bg-[#EDC577] transition tracking-wide hover:scale-105"
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
                    pathname === "/" ? "text-[#EDC577]" : "text-white/90"
                  } font-black text-xs hover:text-[#EDC577] transition tracking-wide hover:scale-105`}
                >
                  HOME
                </Link>

                <span className="text-white/50 font-black text-xs">|</span>
                <Link
                  href={isHome ? "#choose-your-space" : "/#choose-your-space"}
                  onClick={closeAll}
                  className={`${
                    pathname === "/choose_your_space"
                      ? "text-[#EDC577]"
                      : "text-white/90"
                  } font-black text-xs hover:text-[#EDC577] transition tracking-wide hover:scale-105`}
                >
                  CHOOSE YOUR SPACE
                </Link>
                <span className="text-white/50 font-black text-xs">|</span>
                <Link
                  href={isHome ? "about" : "/about"}
                  onClick={closeAll}
                  className={`${
                    pathname === "/about" ? "text-[#EDC577]" : "text-white/90"
                  } font-black text-xs hover:text-[#EDC577] transition tracking-wide hover:scale-105`}
                >
                  ABOUT
                </Link>
                <span className="text-white/50 font-black text-xs">|</span>
                <Link
                  href={isHome ? "contact" : "/contact"}
                  onClick={closeAll}
                  className={`${
                    pathname === "/contact" ? "text-[#EDC577]" : "text-white/90"
                  } font-black text-xs hover:text-[#EDC577] transition tracking-wide hover:scale-105`}
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
              className="inline-flex items-center justify-center py-1 px-4 ml-4 mr-12 rounded-md text-white hover:text-[#EDC577] hover:bg-[#EDC577]/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#EDC577] transition-colors"
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
              className="absolute top-3 right-3 p-2 rounded-md text-white hover:text-[#EDC577] hover:bg-[#EDC577]/10 focus:outline-none focus:ring-2 focus:ring-[#EDC577]"
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
                className={`block px-3 py-3 ${
                  pathname === "/" ? "text-[#EDC577]" : "text-white/90"
                } hover:text-[#EDC577] hover:bg-[#EDC577]/5 font-bold tracking-wider border-b border-[#EDC577]/10`}
              >
                HOME
              </Link>
              <div
                className="relative"
                onMouseEnter={() => setOpenSpace(true)}
                onMouseLeave={() => setOpenSpace(false)}
              >
                {/* Trigger (click for mobile, hover for desktop) */}

                <button
                  onClick={() => setOpenSpace((v) => !v)}
                  className={`flex w-full items-center px-3 py-3 font-bold tracking-wider border-b border-[#EDC577]/10 
                      ${
                        isSpaceActive ? "text-[#EDC577]" : "text-white/90"
                      } hover:text-[#EDC577] hover:bg-[#EDC577]/5`}
                >
                  <span className="flex-1 text-left">CHOOSE YOUR SPACE</span>
                  <span className="text-right">+</span>
                </button>

                {/* Submenu */}
                <div
                  className={`overflow-hidden transition-all duration-800 ${
                    openSpace ? "max-h-60" : "max-h-0"
                  }`}
                >
                  <div className="flex flex-col">
                    <Link
                      href={SPACES.ArchitectureDesign.link}
                      className="px-6 py-2 text-white hover:text-[#EDC577] hover:bg-[#EDC577]/5"
                    >
                      {SPACES.ArchitectureDesign.title}
                    </Link>
                    <Link
                      href={SPACES.Automotive.link}
                      className="px-6 py-2 text-white hover:text-[#EDC577] hover:bg-[#EDC577]/5"
                    >
                      {SPACES.Automotive.title}
                    </Link>
                    <Link
                      href={SPACES.SmallBusinessCommercial.link}
                      className="px-6 py-2 text-white hover:text-[#EDC577] hover:bg-[#EDC577]/5"
                    >
                      {SPACES.SmallBusinessCommercial.title}
                    </Link>
                    <Link
                      href={SPACES.RealEstate.link}
                      className="px-6 py-2 text-white hover:text-[#EDC577] hover:bg-[#EDC577]/5"
                    >
                      {SPACES.RealEstate.title}
                    </Link>
                    <Link
                      href={SPACES.RVMarine.link}
                      className="px-6 py-2 mb-2 text-white hover:text-[#EDC577] hover:bg-[#EDC577]/5"
                    >
                      {SPACES.RVMarine.title}
                    </Link>
                  </div>
                </div>
              </div>

              <Link
                href={isHome ? "about" : "/about"}
                className={`block px-3 py-3 ${
                  pathname === "/about" ? "text-[#EDC577]" : "text-white/90"
                } hover:text-[#EDC577] hover:bg-[#EDC577]/5 font-bold tracking-wider border-b border-[#EDC577]/10`}
              >
                ABOUT
              </Link>

              <Link
                href={isHome ? "contact" : "/contact"}
                className={`block px-3 py-3 ${
                  pathname === "/contact" ? "text-[#EDC577]" : "text-white/90"
                } hover:text-[#EDC577] hover:bg-[#EDC577]/5 font-bold tracking-wider border-b border-[#EDC577]/10`}
              >
                CONTACT US
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="md:hidden fixed top-0 inset-x-0 z-50 bg-black">
        <div className="relative flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="relative w-[64px] h-[64px]">
            <Link href="/" onClick={closeAll}>
              <Image src="/logo.png" alt="Any Space Media Logo" fill />
            </Link>
          </div>

          {/* Hamburger (visible on mobile) */}
          <button
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#EDC577] hover:bg-[#EDC577]/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#EDC577]"
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

          {/* Dropdown: top→down */}
          <div
            id="mobile-menu-panel"
            className={`absolute top-full left-0 right-0 bg-black/90 backdrop-blur-sm shadow-xl transform transition-all duration-300 ease-in-out origin-top
      ${
        isMobileMenuOpen
          ? "scale-y-100 opacity-100"
          : "scale-y-0 opacity-0 pointer-events-none"
      }`}
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              <Link
                href="/"
                className={`block px-3 py-3 ${
                  pathname === "/" ? "text-[#EDC577]" : "text-white/90"
                } hover:text-[#EDC577] hover:bg-[#EDC577]/5 font-bold tracking-wider border-b border-[#EDC577]/10`}
              >
                HOME
              </Link>

              {/* CHOOSE YOUR SPACE + submenu */}
              <div className="relative">
                <button
                  onClick={() => setOpenSpace((v) => !v)}
                  className={`flex w-full text-left px-3 py-3 font-bold tracking-wider border-b border-[#EDC577]/10 ${
                    isSpaceActive ? "text-[#EDC577]" : "text-white/90"
                  } hover:text-[#EDC577] hover:bg-[#EDC577]/5`}
                >
                  <span className="flex-1 text-left">CHOOSE YOUR SPACE</span>
                  <span>+</span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openSpace ? "max-h-60" : "max-h-0"
                  }`}
                >
                  <div className="flex flex-col">
                    <Link
                      href={SPACES.ArchitectureDesign.link}
                      className="px-6 py-2 text-white hover:text-[#EDC577] hover:bg-[#EDC577]/5"
                    >
                      {SPACES.ArchitectureDesign.title}
                    </Link>
                    <Link
                      href={SPACES.Automotive.link}
                      className="px-6 py-2 text-white hover:text-[#EDC577] hover:bg-[#EDC577]/5"
                    >
                      {SPACES.Automotive.title}
                    </Link>
                    <Link
                      href={SPACES.SmallBusinessCommercial.link}
                      className="px-6 py-2 text-white hover:text-[#EDC577] hover:bg-[#EDC577]/5"
                    >
                      {SPACES.SmallBusinessCommercial.title}
                    </Link>
                    <Link
                      href={SPACES.RealEstate.link}
                      className="px-6 py-2 text-white hover:text-[#EDC577] hover:bg-[#EDC577]/5"
                    >
                      {SPACES.RealEstate.title}
                    </Link>
                    <Link
                      href={SPACES.RVMarine.link}
                      className="px-6 py-2 mb-2 text-white hover:text-[#EDC577] hover:bg-[#EDC577]/5"
                    >
                      {SPACES.RVMarine.title}
                    </Link>
                  </div>
                </div>
              </div>

              <Link
                href={isHome ? "about" : "/about"}
                className={`block px-3 py-3 ${
                  pathname === "/about" ? "text-[#EDC577]" : "text-white/90"
                } hover:text-[#EDC577] hover:bg-[#EDC577]/5 font-bold tracking-wider border-b border-[#EDC577]/10`}
              >
                ABOUT
              </Link>

              <Link
                href={isHome ? "contact" : "/contact"}
                className={`block px-3 py-3 ${
                  pathname === "/contact" ? "text-[#EDC577]" : "text-white/90"
                } hover:text-[#EDC577] hover:bg-[#EDC577]/5 font-bold tracking-wider border-b border-[#EDC577]/10`}
              >
                CONTACT US
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
