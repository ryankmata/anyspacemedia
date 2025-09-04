import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const CTABand = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative py-20 z-9 bg-black overflow-hidden bg-gradient-to-r from-[#8E6B0F]/10 via-[#EDC577]/20 to-[#C89B2C]/10">
      <div className="container mx-auto px-4 relative ">
        <div className="text-center">
          {/* Main CTA Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-white">Ready to capture</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8E6B0F] via-[#EDC577] to-[#C89B2C] animate-pulse">
                your space?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Let's create something extraordinary together. Your vision, our
              expertise.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            {/* Primary CTA */}
            <Link href="/contact">
              <button className="group relative inline-flex items-center px-12 py-4 bg-gradient-to-r from-[#8E6B0F] via-[#EDC577] to-[#C89B2C] text-black font-bold text-lg rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#EDC577]/30">
                <span className="relative z-10 flex items-center">
                  Contact Us Today
                  <svg
                    className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#C89B2C] via-[#EDC577] to-[#8E6B0F] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </Link>
            {/* Secondary CTA */}
            <Link href="tel:+14352166499">
              <button className="group inline-flex items-center px-8 py-4 bg-transparent border-2 border-white/20 text-white font-semibold text-lg rounded-full hover:border-[#EDC577] hover:bg-[#EDC577]/10 transition-all duration-300 hover:scale-105">
                <svg
                  className="mr-3 w-5 h-5 transition-transform duration-300 group-hover:scale-110"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call Now
              </button>
            </Link>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mt-20 pt-8 border-t border-white/10"
          >
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-gray-400">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-[#EDC577]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 7.89a2 2 0 002.83 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <Link href="mailto:contact@anyspacemedia.com">
                  contact@anyspacemedia.com
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-[#EDC577]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <Link href="tel:14352166499">(435) 216-6499</Link>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-[#EDC577]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Mountain & Western U.S.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-1 h-20 bg-gradient-to-b from-[#EDC577] to-[#8E6B0F] rounded-r-full" />
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-1 h-20 bg-gradient-to-b from-[#8E6B0F] to-[#EDC577] rounded-l-full" />
    </section>
  );
};

export default CTABand;
